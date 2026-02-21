import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';
import { verifyToken, parseAuthHeader } from '@/lib/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20',
});

const prices = {
  basic: 9900,
  professional: 19900,
  premium: 39900,
};

export async function POST(request: NextRequest) {
  try {
    const token = parseAuthHeader(request.headers.get('authorization') || '');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();
    const { serviceType } = body;

    if (!serviceType || !prices[serviceType as keyof typeof prices]) {
      return NextResponse.json({ error: 'Invalid service type' }, { status: 400 });
    }

    const amount = prices[serviceType as keyof typeof prices];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: body.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `CV Optimization - ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}`,
              description: 'Professional CV optimization service',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/upload?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pricing`,
      metadata: {
        userId: payload.userId,
        serviceType,
      },
    });

    // Create pending order
    await connectToDatabase();
    await Order.create({
      userId: payload.userId,
      serviceType,
      fileName: '',
      fileUrl: '',
      stripeSessionId: session.id,
      amount,
      status: 'pending',
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
