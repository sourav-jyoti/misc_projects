const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const fetch = require('node-fetch'); // Using node-fetch@2 for CommonJS
require('dotenv').config();

// OAuth 1.0a credentials
const oauth = OAuth({
  consumer: {
    key: process.env.TWITTER_API_KEY,
    secret: process.env.TWITTER_API_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

// Token for the user (access token and secret)
const token = {
  key: process.env.TWITTER_ACCESS_TOKEN,
  secret: process.env.TWITTER_ACCESS_SECRET
};

// Function to delay execution (for rate limiting)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function to fetch recent tweets with rate limit handling
async function getRecentTweets(userId, maxResults = 10, retries = 3) {
  const request_data = {
    url: `https://api.twitter.com/2/users/${userId}/tweets?max_results=${maxResults}&exclude=replies,retweets`,
    method: 'GET'
  };
  const authorization = oauth.authorize(request_data, token);
  const options = {
    method: request_data.method,
    headers: {
      Authorization: oauth.toHeader(authorization).Authorization
    }
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(request_data.url, options);
      if (response.status === 429) {
        const resetTime = parseInt(response.headers.get('x-rate-limit-reset')) * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const waitTime = resetTime - currentTime + 1000; // Add 1-second buffer
        console.log(`Rate limit exceeded. Waiting ${waitTime / 1000} seconds until reset...`);
        await delay(waitTime);
        continue; // Retry after waiting
      }

      const data = await response.json();
      if (data.data) {
        return data.data.map(tweet => tweet.id);
      } else {
        console.error('Error fetching tweets:', data);
        return [];
      }
    } catch (err) {
      console.error(`Fetch tweets error (attempt ${attempt}/${retries}):`, err);
      if (attempt === retries) {
        console.error('Max retries reached. Could not fetch tweets.');
        return [];
      }
      await delay(2000 * attempt); // Exponential backoff: 2s, 4s, 6s
    }
  }
  return [];
}

// Function to delete a single tweet
async function deleteTweet(tweetId) {
  const request_data = {
    url: `https://api.twitter.com/2/tweets/${tweetId}`,
    method: 'DELETE'
  };
  const authorization = oauth.authorize(request_data, token);
  const options = {
    method: request_data.method,
    headers: {
      Authorization: oauth.toHeader(authorization).Authorization
    }
  };

  try {
    const response = await fetch(request_data.url, options);
    const data = await response.json();
    if (data.data && data.data.deleted) {
      console.log(`Successfully deleted tweet ${tweetId}`);
      return true;
    } else {
      console.error(`Failed to delete tweet ${tweetId}:`, data);
      return false;
    }
  } catch (err) {
    console.error(`Error deleting tweet ${tweetId}:`, err);
    return false;
  }
}

// Main function to delete recent 100 tweets
async function deleteRecentTweets() {
  const userId = process.env.TWITTER_USER_ID; // Add TWITTER_USER_ID to .env
  if (!userId) {
    console.error('TWITTER_USER_ID not set in .env');
    return;
  }

  // Fetch recent tweets
  console.log('Fetching recent tweets...');
  const tweetIds = await getRecentTweets(userId, 50);
  if (tweetIds.length === 0) {
    console.log('No tweets found or error occurred.');
    return;
  }

  console.log(`Found ${tweetIds.length} tweets to delete.`);

  // Delete tweets with rate limiting
  for (let i = 0; i < tweetIds.length; i++) {
    const tweetId = tweetIds[i];
    console.log(`Deleting tweet ${i + 1}/${tweetIds.length} (ID: ${tweetId})...`);
    await deleteTweet(tweetId);
    await delay(2000); // 2-second delay to avoid hitting DELETE rate limits
  }

  console.log('Finished deleting tweets.');
}

// Run the script
deleteRecentTweets().catch(err => console.error('Script error:', err));