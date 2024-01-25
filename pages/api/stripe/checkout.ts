// pages/api/stripe/checkout.ts
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});
const handleCheckout = async () => {
    // Call your API endpoint to create a checkout session
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You can pass any additional data you might need
      body: JSON.stringify({ items: [{ id: 'STRIPE_SECRET_KEY', quantity: 1 }] }),
    });
  
    const session = await response.json();
  
    // Redirect the customer to Stripe Checkout
    if (session.url) {
      window.location.href = session.url;
    } else {
      console.error('Failed to redirect to Stripe Checkout.');
    }
  };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create a Checkout Session with the selected items
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body.items,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}