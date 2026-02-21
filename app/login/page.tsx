import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - CV Optimizer',
  description: 'Login to your CV Optimizer account.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Login to access your CV and orders</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
