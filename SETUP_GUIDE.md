# CV Optimizer - Setup Guide

Welcome to CV Optimizer! This is a comprehensive CV editing and optimization SaaS platform. Follow these steps to get started.

## Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- Stripe account (for payments)

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cvoptimizer

# Authentication
JWT_SECRET=your-jwt-secret-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/
│   ├── api/                    # API routes for backend functionality
│   ├── admin/                  # Admin dashboard pages
│   ├── blog/                   # Blog pages
│   ├── dashboard/              # User dashboard
│   ├── login/                  # Login page
│   ├── signup/                 # Sign up page
│   ├── pricing/                # Pricing page
│   ├── upload/                 # CV upload page
│   └── page.tsx                # Home page
├── components/
│   ├── admin/                  # Admin components
│   ├── auth/                   # Authentication components
│   ├── landing/                # Landing page sections
│   ├── pricing/                # Pricing components
│   ├── upload/                 # Upload components
│   ├── dashboard/              # Dashboard components
│   ├── Navigation.tsx          # Main navigation
│   ├── Footer.tsx              # Footer component
│   └── LanguageSelector.tsx    # Language switcher
├── lib/
│   ├── models/                 # MongoDB models
│   ├── mongodb.ts              # MongoDB connection
│   ├── auth.ts                 # Authentication utilities
│   ├── api-response.ts         # API response helpers
│   └── utils-helpers.ts        # General utilities
├── hooks/
│   └── use-locale.ts           # Locale hook for i18n
├── messages/                   # Internationalization files (en.json, es.json)
├── middleware.ts               # Next.js middleware for routing
└── i18n.config.ts              # i18n configuration
```

## Key Features

### 1. **Authentication System**

- User signup and login with email/password
- JWT-based session management
- Secure password hashing with bcryptjs
- Protected routes using middleware

### 2. **CV Upload & Management**

- File upload for CV documents
- Order tracking for CV revision requests
- Status management (pending, in-progress, completed)

### 3. **Pricing & Payments**

- Multiple service tiers (Basic, Professional, Premium)
- Stripe integration for secure payments
- Webhook handling for payment confirmations
- Order management system

### 4. **User Dashboard**

- View upload history
- Track order status
- Access revised CVs
- Manage account settings

### 5. **Admin Dashboard**

- View all orders and users
- Update order status
- Analytics and insights
- Admin authentication

### 6. **Blog System**

- Create and publish blog posts
- Full-text search
- Category management
- Featured posts

### 7. **Internationalization**

- Support for English and Spanish
- Language switcher in navigation
- Localized content and messages

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Orders

- `GET /api/orders` - Get user's orders
- `POST /api/checkout` - Create Stripe checkout session

### Upload

- `POST /api/upload` - Upload CV file

### Blog

- `GET /api/blog` - Get all blog posts
- `GET /api/blog/[slug]` - Get single blog post

### Admin

- `GET /api/admin/orders` - Get all orders (admin only)

## Database Schema

### User Model

```
- email (String, unique)
- password (String, hashed)
- name (String)
- phone (String)
- createdAt (Date)
```

### Order Model

```
- userId (ObjectId)
- serviceType (String)
- status (String: pending, in-progress, completed)
- cvFile (String, file path)
- price (Number)
- stripePaymentId (String)
- notes (String)
- createdAt (Date)
- updatedAt (Date)
```

### BlogPost Model

```
- title (String)
- slug (String, unique)
- content (String)
- excerpt (String)
- author (String)
- featured (Boolean)
- category (String)
- tags (Array)
- createdAt (Date)
- updatedAt (Date)
```

## Stripe Setup

1. Get your API keys from [Stripe Dashboard](https://dashboard.stripe.com)
2. Create products for each service tier
3. Add webhook endpoint: `https://yoursite.com/api/webhooks/stripe`
4. Add the webhook secret to your environment variables

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel project settings
4. Deploy

The application will automatically deploy on every push to main branch.

## Support & Documentation

- [Stripe Documentation](https://stripe.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is proprietary and not open source.

## Contact

For support, email: support@cvoptimizer.com
