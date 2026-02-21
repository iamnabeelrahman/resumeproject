# Quick Start Guide - 5 Minutes to Running App

## Step 1: Install Dependencies (1 minute)

The system should auto-install dependencies, but if needed:

```bash
npm install
```

## Step 2: Create Environment File (1 minute)

```bash
cp .env.example .env.local
```

## Step 3: Set Up Basic Environment Variables (1 minute)

Edit `.env.local` and add minimum required values:

### Option A: Development (Quickest - use dummy values)

```env
# MongoDB - You need a real connection, OR use this format
MONGODB_URI=mongodb://localhost:27017/cvoptimizer

# JWT - Generate a random string
JWT_SECRET=dev-secret-key-change-this-in-production

# Stripe - Use test keys (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx

# Auth URLs
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret-key
```

### Option B: Production Setup (Recommended)

Generate secure secrets:

```bash
# Generate JWT_SECRET
openssl rand -base64 32

# Generate NEXTAUTH_SECRET
openssl rand -base64 32
```

## Step 4: Start the App (Automatic)

The preview should start automatically! If not:

```bash
npm dev
```

Then open: **http://localhost:3000**

## What You'll See

1. **Homepage** - Landing page with hero section
2. **Navigation** - Top menu with links to Pricing, Blog, Auth
3. **Signup/Login** - Create account at `/signup` or login at `/login`
4. **Pricing Page** - See pricing tiers at `/pricing`
5. **Blog** - Articles at `/blog`

## First Things to Try

### 1. Test Navigation

- Click "Sign Up" to create account
- Fill in form (email, password, name)
- After signup, you'll see dashboard

### 2. Test Authentication

- Log in with your account
- Navigate appears with "Welcome, [Name]"
- Click "Logout" to log out

### 3. Explore Pages

- `/` - Homepage
- `/pricing` - Pricing page with Stripe integration
- `/blog` - Blog listing
- `/dashboard` - User dashboard (after login)
- `/admin` - Admin dashboard (when authorized)

## Common Issues & Quick Fixes

### "Cannot find module" Error

**Fix**: Run `npm install` again

### "MONGODB_URI not set" Error

**Fix**: Make sure `.env.local` exists with MongoDB connection string

### "Stripe key missing" Error

**Fix**: Add STRIPE_SECRET_KEY to `.env.local`

### "Localhost refused connection"

**Fix**: Wait 30 seconds and refresh (dev server is starting)

## Next: Full Setup (When You're Ready)

Read these files for complete configuration:

1. **SETUP_GUIDE.md** - Detailed setup with all features
2. **TROUBLESHOOTING.md** - Fix any issues
3. **FIXES_APPLIED.md** - Understand what was fixed

## Project Features (Already Built!)

✅ User authentication (signup/login)
✅ CV upload system
✅ Stripe payment integration  
✅ Admin dashboard
✅ Blog system
✅ Multi-language support
✅ Responsive design
✅ MongoDB database integration

## Database Setup (MongoDB)

### Quick Option: Local MongoDB

```bash
# If you have MongoDB installed locally
mongod
```

Then use: `mongodb://localhost:27017/cvoptimizer`

### Full Option: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env.local` as MONGODB_URI

## Payment Testing (Stripe)

Use these test card numbers:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Expiry: Any future date
- CVV: Any 3 digits

## Ready to Deploy?

When app is working locally:

1. Deploy to Vercel (recommended):
   ```bash
   vercel
   ```
2. Or deploy anywhere else that supports Node.js

## Stuck?

- **Check TROUBLESHOOTING.md** - Most common issues there
- **Review FIXES_APPLIED.md** - See what was fixed and why
- **Check .env.local** - Usually the issue is missing env vars
- **Clear .next folder**: `rm -rf .next` and restart

## That's It!

Your CV Optimizer SaaS is now running. Start customizing:

- Add your logo
- Customize colors
- Add real blog posts
- Set up Stripe webhooks for production
- Deploy when ready!

---

**💡 Tip**: Keep `.env.local` secure and never commit it to git!

**Next Step**: Read SETUP_GUIDE.md for production setup
