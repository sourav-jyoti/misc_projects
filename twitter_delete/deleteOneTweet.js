 //code to delete a single tweet with hard coded id using twitter version 2 api v2

require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
})

const rwClient = client.readWrite;

async function deleteTweet(tweetId) {
  console.log(tweetId);
  try {
    const response = await rwClient.v2.deleteTweet(tweetId);
    if (response.data && response.data.deleted) {

      console.log(`Successfully deleted tweet ${tweetId}`);
      
      return true;
    } else {
      console.error(`Failed to delete tweet ${tweetId}:`, response.data);
      return false;
    }
  } catch (err) {
    console.error(`Error deleting tweet ${tweetId}:`, err);
    return false;
  }
}

async function deleteRecentTweets() {
  const userId = process.env.TWITTER_USER_ID; // Add TWITTER_USER_ID to .env
  if (!userId) {
    console.error('TWITTER_USER_ID not set in .env');
    return;
  }

  const tweetId = '1929241633771401695';
  console.log(`Deleting tweet `);
  await deleteTweet(tweetId);

  console.log('Finished deleting tweets.');
}

// Run the script
deleteRecentTweets().catch(err => console.error('Script error:', err)); 

