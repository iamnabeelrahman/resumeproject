'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import CVUploadForm from '@/components/upload/CVUploadForm';

export default function UploadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      router.push('/pricing');
      return;
    }
    // Verify session is valid
    setVerified(true);
    setLoading(false);
  }, [sessionId, router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (!verified) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Upload Your CV</h1>
          <p className="text-muted-foreground">
            Your payment is complete. Now upload your CV for optimization.
          </p>
        </div>
        <CVUploadForm sessionId={sessionId || ''} />
      </div>
    </main>
  );
}
