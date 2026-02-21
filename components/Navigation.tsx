'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user is logged in by checking for auth token
    const token = localStorage.getItem('auth-token');
    const user = localStorage.getItem('user');
    if (token) {
      setIsLoggedIn(true);
      if (user) {
        const userData = JSON.parse(user);
        setUserName(userData.name || userData.email);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CVOptimizer
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-blue-600 transition">
            Pricing
          </Link>
          <Link href="/blog" className="text-foreground hover:text-blue-600 transition">
            Blog
          </Link>
          {isLoggedIn && (
            <Link href="/dashboard" className="text-foreground hover:text-blue-600 transition">
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          {isLoggedIn ? (
            <>
              <span className="text-sm text-gray-600">Welcome, {userName}</span>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
