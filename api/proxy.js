const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'https://api.countapi.xyz/hit/stonemillwyo.com/1403-windsor-c';

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Send the response back to the frontend
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching views:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
