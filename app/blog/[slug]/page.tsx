'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          router.push('/blog');
        }
      } catch (error) {
        console.error('Failed to fetch post:', error);
        router.push('/blog');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug, router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 flex items-center justify-center">
        <p>Loading article...</p>
      </main>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="bg-white rounded-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground border-b border-muted-foreground/20 pb-8">
              <div>
                <p>
                  By <span className="font-medium text-foreground">{post.author}</span>
                </p>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            <div
              className="text-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="border-t border-muted-foreground/20 pt-8 mt-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Ready to optimize your CV?</h3>
              <p className="text-blue-800 mb-4">
                Apply the tips from this article to get professional help optimizing your CV.
              </p>
              <Link href="/pricing">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
