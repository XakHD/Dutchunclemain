// pages/api/someEndpoint.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle the HTTP request
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from someEndpoint!' });
  } else {
    // If the method is not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}