// Import the fetch API
import fetch from 'node-fetch';

export default async (req, res) => {
  const { pageKey } = req.query;  // Get the page key from the query parameter

  // Build the CountAPI URL
  const namespace = 'stonemillwyo';  // Your namespace in CountAPI
  const API_URL = `https://api.countapi.xyz/hit/${namespace}/${pageKey}`;

  try {
    // Make the request to CountAPI
    const apiResponse = await fetch(API_URL);
    const data = await apiResponse.json();

    // Set CORS headers to allow requests from your Squarespace site
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Return the data from CountAPI to the client
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch view count' });
  }
};
