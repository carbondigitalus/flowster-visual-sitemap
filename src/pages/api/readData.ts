// Core Modules
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// NPM Modules
import type { NextApiRequest, NextApiResponse } from 'next';

// Custom Modules
import { Card } from '../../utils/card.interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<Card[] | { message: string }>) {
  // Handling different HTTP methods
  switch (req.method) {
    case 'GET':
      try {
        // Adjust the path to the JSON file correctly relative to your project structure
        const filePath = join(process.cwd(), 'src', 'assets', 'data.json');
        const jsonData = readFileSync(filePath, 'utf-8');

        // Parse the JSON data and ensure it is of type Card[]
        const data: Card[] = JSON.parse(jsonData);
        res.status(200).json(data);
      } catch (error) {
        console.error('api-readData-error: ', error);
        res.status(500).json({ message: 'Failed to read data' });
      }
      break;

    default:
      // Respond with a 405 Method Not Allowed if not a GET request
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
