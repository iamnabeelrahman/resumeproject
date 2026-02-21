# CV Optimizer - Professional CV Fixing SaaS Platform

A full-featured SaaS application for professional CV optimization, editing, and enhancement services. Built with Next.js 16, MongoDB, Stripe, and complete internationalization support.

## Features

✨ **Complete Platform**

- Professional landing page with hero, services, testimonials, and before/after examples
- User authentication with JWT and secure password hashing
- CV upload and order management system
- Stripe payment integration with webhook support
- Comprehensive admin dashboard
- Blog system with dynamic content
- Multi-language support (English/Spanish)
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Node.js API routes
- **Database**: MongoDB Atlas
- **Payments**: Stripe
- **Authentication**: JWT with bcrypt password hashing
- **Internationalization**: next-intl with client-side locale switching

## Quick Start

### 1. Prerequisites

- Node.js 18+ and npm installed
- MongoDB Atlas account and connection string
- Stripe account (for payments)

### 2. Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### 3. Configure Environment Variables

Edit `.env.local` and add:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4. Start Development Server

```bash
npm dev
```

Visit http://localhost:3000 in your browser.

## Project Structure

```
├── app/
│   ├── api/                    # API routes (auth, payments, blog, admin)
│   ├── admin/                  # Admin dashboard
│   ├── blog/                   # Blog pages
│   ├── dashboard/              # User dashboard
│   ├── pricing/                # Pricing page
│   ├── login/ & signup/        # Authentication pages
│   ├── upload/                 # CV upload page
│   └── page.tsx                # Homepage
├── components/
│   ├── landing/                # Homepage sections
│   ├── auth/                   # Login/signup forms
│   ├── admin/                  # Admin components
│   ├── dashboard/              # Dashboard components
│   ├── pricing/                # Pricing components
│   └── upload/                 # Upload components
├── lib/
│   ├── models/                 # MongoDB schemas
│   ├── auth.ts                 # Authentication utilities
│   ├── mongodb.ts              # Database connection
│   └── api-response.ts         # Response helpers
├── middleware.ts               # Next.js middleware
└── i18n.config.ts             # i18n configuration
```

## Key Features Explained

### Authentication

- Secure signup/login with email verification concept
- JWT token-based sessions stored in localStorage
- Password hashing with bcrypt
- Protected routes for authenticated users

### Payments

- Stripe Checkout integration
- Three-tier pricing model (Basic, Professional, Premium)
- Webhook handling for payment confirmations
- Order tracking and history

### Admin Dashboard

- View all user orders
- Update order status
- Download user CVs
- Analytics overview

### Blog System

- Dynamic blog posts with MongoDB storage
- Blog listing with featured posts
- Individual post pages with full content
- Easy content management

### Internationalization

- English and Spanish support
- Language switcher in navigation
- localStorage for locale persistence
- Easy to add more languages

## Development

### Running Tests

```bash
npm build  # Verify build works
```

### Building for Production

```bash
npm build
npm start
```

### Useful Commands

```bash
npm dev           # Start development server
npm build         # Build for production
npm start         # Start production server
npm lint          # Run ESLint
```

## API Routes

### Authentication

- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login user

### Orders & Payments

- `POST /api/checkout` - Create Stripe checkout session
- `GET /api/orders` - Get user's orders
- `POST /api/upload` - Upload CV file

### Admin

- `GET /api/admin/orders` - Get all orders (admin only)

### Blog

- `GET /api/blog` - Get all blog posts
- `GET /api/blog/[slug]` - Get single blog post

### Stripe Webhooks

- `POST /api/webhooks/stripe` - Handle Stripe events

## Database Schema

### User

- email, password (hashed)
- firstName, lastName
- createdAt, updatedAt

### Order

- userId, status
- service type, pricing tier
- cvFile, notes
- paymentStatus

### BlogPost

- title, slug
- content, excerpt
- author, category
- publishedAt

### Admin

- email, password (hashed)
- role, permissions
- createdAt

## Deployment

### Deploy to Vercel (Recommended)

```bash
vercel
```

### Environment Variables for Production

- Set all `.env.local` variables in Vercel project settings
- Update NEXTAUTH_URL to your production domain
- Generate new JWT_SECRET and NEXTAUTH_SECRET

## Troubleshooting

See `TROUBLESHOOTING.md` for common issues and solutions.

## Security Considerations

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Use strong JWT_SECRET** - Generate with: `openssl rand -base64 32`
3. **Enable MongoDB IP whitelist** - Restrict access to known IPs in production
4. **Verify Stripe webhooks** - Always verify webhook signatures
5. **HTTPS in production** - Always use HTTPS for sensitive operations
6. **Rate limiting** - Implement rate limiting on auth endpoints
7. **CORS configuration** - Set appropriate CORS headers

## Next Steps

1. Complete the setup guide in `SETUP_GUIDE.md`
2. Configure MongoDB Atlas database
3. Set up Stripe account and webhooks
4. Add your company logo and branding
5. Customize blog content with your expertise
6. Deploy to production

## License

All rights reserved - CV Optimizer

## Support

For issues and troubleshooting, see:

- `TROUBLESHOOTING.md` - Common problems and solutions
- `SETUP_GUIDE.md` - Detailed setup instructions
- Next.js Documentation: https://nextjs.org/docs
- MongoDB Documentation: https://docs.mongodb.com
- Stripe Documentation: https://stripe.com/docs

## Contributing

This is a complete SaaS platform. For modifications:

1. Follow the existing code structure
2. Keep components reusable and modular
3. Update both client and server components appropriately
4. Test thoroughly before deployment

---

**Ready to launch?** Start with the setup guide: `SETUP_GUIDE.md`

#
