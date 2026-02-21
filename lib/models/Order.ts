import mongoose from 'mongoose';

export interface IOrder {
  _id: string;
  userId: string;
  serviceType: 'basic' | 'professional' | 'premium';
  fileName: string;
  fileUrl: string;
  stripeSessionId: string;
  stripePaymentIntentId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  uploadedAt: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    serviceType: {
      type: String,
      enum: ['basic', 'professional', 'premium'],
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    stripeSessionId: {
      type: String,
      required: true,
    },
    stripePaymentIntentId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
