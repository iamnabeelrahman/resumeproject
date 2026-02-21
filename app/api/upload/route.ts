import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';
import { verifyToken, parseAuthHeader } from '@/lib/auth';

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

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const orderSessionId = formData.get('orderSessionId') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const fileUrl = `data:${file.type};base64,${base64}`;

    await connectToDatabase();

    const order = await Order.findOneAndUpdate(
      {
        stripeSessionId: orderSessionId,
        userId: payload.userId,
      },
      {
        fileName: file.name,
        fileUrl: fileUrl,
        uploadedAt: new Date(),
      },
      { new: true }
    );

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      orderId: order._id,
      fileName: file.name,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
