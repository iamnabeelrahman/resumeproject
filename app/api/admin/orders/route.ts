import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';
import { User } from '@/lib/models/User';
import { verifyToken, parseAuthHeader } from '@/lib/auth';

// Simple admin check - in production, use a proper role system
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change-me';

export async function GET(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    const orders = await Order.find()
      .populate('userId', 'email firstName lastName')
      .sort({ createdAt: -1 });

    const stats = {
      totalOrders: orders.length,
      completedOrders: orders.filter((o) => o.status === 'completed').length,
      pendingOrders: orders.filter((o) => o.status === 'pending').length,
      totalRevenue: orders
        .filter((o) => o.status === 'completed')
        .reduce((sum, o) => sum + o.amount, 0),
    };

    return NextResponse.json({ orders, stats });
  } catch (error) {
    console.error('Admin orders error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { orderId, status } = body;

    await connectToDatabase();

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Admin update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
