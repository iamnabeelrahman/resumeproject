import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">CV Optimizer</h3>
            <p className="text-slate-400 text-sm">
              Transform your CV into a powerful career tool with professional editing and optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-white transition">
                  Upload CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  CV Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@cvoptimizer.com" className="text-slate-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              <Phone size={16} className="inline mr-2" />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} CV Optimizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
