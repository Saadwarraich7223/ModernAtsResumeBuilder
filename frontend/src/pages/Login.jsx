import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  Sparkles,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import useAuthStore from "../store/authStore";
import useUIStore from "../store/uiStore";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isDarkMode } = useUIStore();
  const { login, loading, error, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative overflow-hidden font-sans selection:bg-indigo-500/20 transition-colors duration-500 ${isDarkMode ? "dark bg-[#020617]" : "bg-white"}`}
    >
      <div className="noise-bg"></div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full px-6 py-12 relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <FileText className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-heading">
              Resume<span className="text-indigo-600">Builder</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-3 font-heading">
            Welcome back
          </h1>
          <p className="text-slate-600 dark:text-indigo-100/70 font-medium">
            Enter your credentials to access your account.
          </p>
        </div>

        <div className="glass-card p-8 rounded-[2rem] border-slate-200/60 dark:border-slate-800/60 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                  <Mail size={12} /> Email Address
                </label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200/50 dark:border-slate-800/50 h-12 rounded-xl focus:ring-indigo-500/20"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                  <Lock size={12} /> Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200/50 dark:border-slate-800/50 h-12 rounded-xl focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20 flex items-center gap-3 text-rose-600 dark:text-rose-400 text-xs font-bold"
              >
                <Sparkles size={16} className="shrink-0" />
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              variant="gradient"
              className="w-full h-12 rounded-xl font-bold shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Sign In</span>
                  <ArrowRight size={18} />
                </div>
              )}
            </Button>
          </form>
        </div>

        <p className="text-center mt-10 text-slate-500 dark:text-slate-400 text-sm font-medium">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline transition-all"
          >
            Create one for free
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
