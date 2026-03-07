import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Loader2, Sparkles, FileText } from 'lucide-react';
import useAuthStore from '../store/authStore';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary-100 flex items-center justify-center relative overflow-hidden">
      {/* SaaS Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-purple-50/30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md w-full px-6 py-12 animate-fade-in text-left">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8 group">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
              <FileText className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">ResumeBuilder</span>
          </Link>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Welcome Back</h1>
          <p className="text-gray-500 font-medium leading-relaxed">Enter your credentials to access your resumes.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 relative text-left">
          <div className="space-y-4 text-left">
            <div className="text-left">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1 text-left">
                <Mail size={12} /> Email Address
              </label>
              <Input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-50/50 border-gray-100"
              />
            </div>
            <div className="text-left">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1 text-left">
                <Lock size={12} /> Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-50/50 border-gray-100"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3 text-red-600 text-sm font-bold animate-shake">
              <Sparkles size={18} className="shrink-0" />
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full h-14 rounded-2xl text-lg shadow-xl shadow-primary-500/20"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight className="ml-2" size={20} />
              </>
            )}
          </Button>
        </form>

        <p className="text-center mt-8 text-gray-500 font-medium">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 font-black hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
