import mongoose from 'mongoose';

export interface IBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featuredImage: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogPostSchema = new mongoose.Schema<IBlogPost>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);
