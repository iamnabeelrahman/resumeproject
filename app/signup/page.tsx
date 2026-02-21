import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up - CV Optimizer',
  description: 'Create your account to start optimizing your CV.',
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">
            Join thousands of professionals who landed their dream jobs
          </p>
        </div>
        <SignupForm />
      </div>
    </main>
  );
}
