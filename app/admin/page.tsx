'use client';

import React from "react"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminDashboardContent from '@/components/admin/AdminDashboardContent';

export default function AdminPage() {
  const router = useRouter();
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedAdminKey = localStorage.getItem('adminKey');
    if (storedAdminKey) {
      setAdminKey(storedAdminKey);
      setShowPasswordPrompt(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAdminKey(password);
    localStorage.setItem('adminKey', password);
    setShowPasswordPrompt(false);
    setLoading(false);
  };

  if (showPasswordPrompt) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  if (!adminKey) {
    return null;
  }

  return <AdminDashboardContent adminKey={adminKey} />;
}
