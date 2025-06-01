require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Auth with Twitter API v2
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const rwClient = client.readWrite;

async function deleteTweetWithRetry(tweetId, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Deleting tweet ${tweetId} (attempt ${attempt})`);
      await rwClient.v2.deleteTweet(tweetId);
      await sleep(2000);
      return true;
    } catch (err) {
      if (err.code === 429 && err.rateLimit) {
        const now = Math.floor(Date.now() / 1000);
        const waitTime = (err.rateLimit.reset || now + 60) - now;
        console.warn(`Rate limit hit. Waiting for ${waitTime} seconds...`);
        await sleep(waitTime * 1000);
      } else {
        console.error(`Error deleting tweet ${tweetId}:`, err);
        if (attempt === retries) return false;
        await sleep(2000 * attempt);
      }
    }
  }
  return false;
}

async function deleteTweets() {
  try {
    console.log('Fetching user info...');
    const user = await rwClient.v2.me();
    console.log('User:', user.data);
    const userId = user.data.id;

    console.log('Fetching recent tweets...');
    const tweets = await rwClient.v2.userTimeline(userId, {
      max_results: 50,
      exclude: ['replies', 'retweets'],
    });
    console.log(`Found ${tweets.data.data.length} tweets`);

    for (const tweet of tweets.data.data) {
      console.log(`Deleting tweet: ${tweet.id} → "${tweet.text}"`);
      const deleted = await deleteTweetWithRetry(tweet.id);
      if (!deleted) {
        console.error(`Failed to delete tweet ${tweet.id} after retries`);
      }
    }

    console.log('✅ All tweets processed');
  } catch (error) {
    console.error('❌ Error:', JSON.stringify(error, null, 2));
  }
}

deleteTweets();