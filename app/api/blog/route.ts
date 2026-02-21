import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/lib/models/BlogPost';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const published = request.nextUrl.searchParams.get('published') === 'true';
    const query = published ? { published: true } : {};

    const posts = await BlogPost.find(query).sort({ createdAt: -1 });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, author, featuredImage, tags } = body;

    await connectToDatabase();

    const post = await BlogPost.create({
      title,
      slug,
      excerpt,
      content,
      author,
      featuredImage,
      tags: tags || [],
      published: false,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
