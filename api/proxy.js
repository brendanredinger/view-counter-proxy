import fetch from 'node-fetch';

export default async (req, res) => {
  const { pageKey } = req.query;

  const namespace = 'stonemillwyo.com'; // Your namespace in CountAPI
  const API_URL = `https://api.countapi.xyz/hit/${namespace}/${pageKey}`;

  try {
    const apiResponse = await fetch(API_URL);
    const data = await apiResponse.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch view count' });
  }
};
