// Load environment variables from a .env file into process.env
require('dotenv').config();
// Import the TwitterApi class from the 'twitter-api-v2' library for interacting with the Twitter API
const { TwitterApi } = require('twitter-api-v2');

// Function to pause execution for a specified number of milliseconds.
// This is crucial for implementing delays to respect API rate limits.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Authenticate with the Twitter API v2 using credentials from environment variables.
// These keys and tokens are necessary to authorize your application to perform actions on Twitter.
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY, // Your Twitter App's API Key
  appSecret: process.env.TWITTER_API_SECRET, // Your Twitter App's API Secret
  accessToken: process.env.TWITTER_ACCESS_TOKEN, // User-specific Access Token
  accessSecret: process.env.TWITTER_ACCESS_SECRET, // User-specific Access Secret
});

// Create a read-write client instance from the authenticated client.
// This client can be used to perform actions like fetching and deleting tweets.
const rwClient = client.readWrite;

// Asynchronous function to fetch recent tweets from a specific user's timeline.
// It includes error handling and retries for rate limit issues. (note about retrices is written in notion journal date 1 june 2025)
async function getRecentTweets(userId, maxResults = 10, retries = 3) {
  // Loop through a specified number of retries in case of transient errors or rate limits.
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Make an API call to fetch a user's timeline.
      // userId: The ID of the user whose tweets you want to fetch.
      // max_results: The maximum number of tweets to retrieve (defaulting to 10 if not provided).
      // exclude: An array to specify types of tweets to exclude (e.g., replies, retweets).
      const response = await rwClient.v2.userTimeline(userId, {
        max_results: maxResults,
        exclude: ['replies', 'retweets'],
      });

      // Check if the API response contains tweet data.
      if (response.data.data) {
        // If data is present, map the array of tweet objects to an array of just their IDs.
        return response.data.data.map(tweet => tweet.id);
      } else {
        // Log an error if no tweet data is found in the response.
        console.error('Error fetching tweets:', response.data);
        return []; // Return an empty array if no tweets are found or an error occurs.
      }
    } catch (err) {
      // Check if the error is due to rate limiting (HTTP status code 429).
      if (err.code === 429 && err.rateLimit) {
        // Get the current time in seconds since epoch.
        const now = Math.floor(Date.now() / 1000);
        // Calculate the time to wait until the rate limit resets, adding a 1-second buffer.
        const waitTime = (err.rateLimit.reset || now + 60) - now + 1;
        console.log(`Rate limit exceeded. Waiting ${waitTime} seconds until reset...`);
        // Pause execution for the calculated wait time.
        await sleep(waitTime * 1000);
        continue; // Continue to the next attempt after waiting.
      }

      // Log other types of errors encountered during tweet fetching.
      console.error(`Fetch tweets error (attempt ${attempt}/${retries}):`, err);
      // If the maximum number of retries has been reached, log a final error and return.
      if (attempt === retries) {
        console.error('Max retries reached. Could not fetch tweets.');
        return [];
      }
      // Implement exponential backoff: wait longer with each subsequent retry.
      await sleep(2000 * attempt); // e.g., 2 seconds, then 4 seconds, then 6 seconds.
    }
  }
  return []; // Return an empty array if all retries fail.
}

// Asynchronous function to delete a single tweet by its ID.
async function deleteTweet(tweetId) {
  try {
    // Make an API call to delete a tweet.
    const response = await rwClient.v2.deleteTweet(tweetId);
    // Check if the response indicates the tweet was successfully deleted.
    if (response.data && response.data.deleted) {
      console.log(`Successfully deleted tweet ${tweetId}`);
      return true; // Return true on successful deletion.
    } else {
      // Log an error if the tweet deletion failed.
      console.error(`Failed to delete tweet ${tweetId}:`, response.data);
      return false; // Return false on failed deletion.
    }
  } catch (err) {
    // Log any errors that occur during the deletion process.
    console.error(`Error deleting tweet ${tweetId}:`, err);
    return false; // Return false if an exception occurs.
  }
}

// Main asynchronous function to orchestrate the deletion of recent tweets.
async function deleteRecentTweets() {
  // Retrieve the user ID from environment variables. This is the ID of the Twitter account
  // whose tweets will be deleted.
  const userId = process.env.TWITTER_USER_ID; // Make sure to add TWITTER_USER_ID to your .env file

  // Check if the TWITTER_USER_ID is set. If not, log an error and exit.
  if (!userId) {
    console.error('TWITTER_USER_ID not set in .env');
    return;
  }

  // Inform the user that the script is starting to fetch tweets.
  console.log('Fetching recent tweets...');
  // Call getRecentTweets to fetch up to 50 recent tweet IDs.
  const tweetIds = await getRecentTweets(userId, 50);
  // If no tweets are found or an error occurred during fetching, inform the user and exit.
  if (tweetIds.length === 0) {
    console.log('No tweets found or error occurred.');
    return;
  }

  // Inform the user how many tweets were found for deletion.
  console.log(`Found ${tweetIds.length} tweets to delete.`);

  // Iterate through each fetched tweet ID and attempt to delete it.
  for (let i = 0; i < tweetIds.length; i++) {
    const tweetId = tweetIds[i];
    // Log the progress of tweet deletion.
    console.log(`Deleting tweet ${i + 1}/${tweetIds.length} (ID: ${tweetId})...`);
    // Call deleteTweet to delete the current tweet.
    await deleteTweet(tweetId);
    // Introduce a delay to avoid hitting Twitter's DELETE API rate limits.
    await sleep(2000); // Wait for 2 seconds between each deletion.
  }

  // Inform the user that the deletion process is complete.
  console.log('Finished deleting tweets.');
}

// Run the main deleteRecentTweets function.
// .catch() is used to catch any unhandled errors that might occur during the execution of the async function.
deleteRecentTweets().catch(err => console.error('Script error:', err));


