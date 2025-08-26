// api/proxy-image.js
import fetch from 'node-fetch';

export default async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required.');
  }

  try {
    const response = await fetch(url);
    // Set the appropriate headers to avoid CORS on your end
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', response.headers.get('content-type'));

    // Stream the image data back to the client
    response.body.pipe(res);

  } catch (error) {
    console.error('Proxy failed:', error);
    res.status(500).send('Failed to fetch image.');
  }
};