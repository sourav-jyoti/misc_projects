//code to delete a single tweet with id

const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const fetch = require('node-fetch').default; // Import node-fetch correctly
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

// Request details
const request_data = {
  url: 'https://api.twitter.com/2/tweets/1902758022776017274',
  method: 'DELETE'
};

// Generate OAuth headers
const authorization = oauth.authorize(request_data, token);

// Make the request
const options = {
  method: request_data.method,
  headers: {
    Authorization: oauth.toHeader(authorization).Authorization
  }
};

fetch(request_data.url, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));