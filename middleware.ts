import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Placeholder middleware - i18n routing can be implemented later
  // Currently using client-side locale switching with localStorage
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|public).*)',
  ],
};
