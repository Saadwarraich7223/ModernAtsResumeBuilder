import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  Download,
  Layout,
  Zap,
  ShieldCheck,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Monitor,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import Button from "../components/ui/Button";
import useResumeStore from "../store/resumeStore";

const Landing = () => {
  const navigate = useNavigate();
  const { setTemplateId } = useResumeStore();

  const handleSelectTemplate = (id) => {
    setTemplateId(id);
    navigate("/editor");
  };

  const features = [
    {
      title: "ATS-Friendly Templates",
      description:
        "Our templates are designed to pass through Applicant Tracking Systems (ATS) with ease.",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50/50",
    },
    {
      title: "Live Preview Editor",
      description:
        "See changes in real-time as you type. No more guessing how your resume will look.",
      icon: Layout,
      color: "text-purple-600",
      bg: "bg-purple-50/50",
    },
    {
      title: "One-Click Export",
      description:
        "Export your resume as a professional PDF, ready to be sent to recruiters.",
      icon: Download,
      color: "text-blue-600",
      bg: "bg-blue-50/50",
    },
    {
      title: "Privacy First",
      description:
        "Your data is yours. We don't sell your personal information or spam you.",
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50/50",
    },
    {
      title: "Modern Typography",
      description:
        "Professional fonts and layout ratios optimized for readability and style.",
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-50/50",
    },
    {
      title: "Intelligent Parsing",
      description:
        "Import your existing data or paste text to quickly populate your resume.",
      icon: Zap,
      color: "text-rose-600",
      bg: "bg-rose-50/50",
    },
  ];

  const templates = [
    {
      id: "minimal-1",
      name: "Minimal",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=800",
      tag: "Classic",
    },
    {
      id: "modern-1",
      name: "Modern",
      image:
        "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=600&h=800",
      tag: "Professional",
    },
    {
      id: "creative-1",
      name: "Creative",
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600&h=800",
      tag: "Stylish",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-700 relative overflow-x-hidden">
      {/* GLOBAL MODERN SAAS BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40"></div>
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-300/30 via-purple-300/30 to-blue-300/30 blur-[140px]"></div>
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f10a_1px,transparent_1px),linear-gradient(to_bottom,#6366f10a_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl border-b border-gray-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <FileText className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              ResumeBuilder
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors">Features</a>
            <a href="#templates" className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors">Templates</a>
            <Link to="/login" className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors">Sign In</Link>
            <Button variant="gradient" size="md" className="rounded-full px-6" onClick={() => navigate("/editor")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-gray-600 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
            <Sparkles size={14} className="text-amber-500" />
            Empowering Your Career Journey
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 mb-8 leading-[1.05] max-w-4xl mx-auto">
            Build a resume that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600">
              gets you hired.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-500 mb-12 leading-relaxed font-medium">
            The minimal, high-performance resume builder. No fluff, no hidden
            costs. Just professional results in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-lg gap-2 rounded-full"
              onClick={() => navigate("/editor")}
            >
              Create My Resume <ArrowRight size={20} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-lg rounded-full border-gray-200"
              onClick={() => {
                document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Designs
            </Button>
          </div>

          {/* Hero Mockup */}
          <div className="mt-24 relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="aspect-[16/10] overflow-hidden bg-[#fbfbfb]">
                <div className="flex h-full">
                  <div className="w-1/4 border-r border-gray-100 p-6 space-y-4 hidden md:block">
                    <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-gray-50 rounded"></div>
                      <div className="h-3 w-full bg-gray-50 rounded"></div>
                      <div className="h-3 w-5/6 bg-gray-50 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="max-w-xl mx-auto space-y-8 animate-pulse">
                      <div className="flex justify-between items-start">
                        <div className="space-y-3 w-1/2">
                          <div className="h-8 bg-gray-100 rounded-lg"></div>
                          <div className="h-4 bg-gray-50 rounded-lg w-3/4"></div>
                        </div>
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl"></div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-50 rounded"></div>
                          <div className="h-3 bg-gray-50 rounded"></div>
                          <div className="h-3 bg-gray-50 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Interactive elements */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 hidden lg:block animate-slide-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <CheckCircle size={18} />
                </div>
                <span className="text-sm font-bold">ATS Scored: 98%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-emerald-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Focus on what matters.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Every feature is designed to simplify your journey and highlight
              your strengths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div
                  className={`${feature.bg} ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
                >
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Pick your style.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-8">
              Start with a professionally crafted template and make it your own.
            </p>
            <Button 
              variant="secondary" 
              className="rounded-full px-8 gap-2 group mx-auto"
              onClick={() => navigate('/templates')}
            >
              View All Templates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {templates.map((tpl, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <p className="mb-6 font-medium text-gray-200">
                        Perfect for {tpl.tag.toLowerCase()} roles
                      </p>
                      <Button
                        variant="gradient"
                        size="md"
                        className="rounded-full px-8"
                        onClick={() => handleSelectTemplate(tpl.id)}
                      >
                        Select Design
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tpl.name}
                  </h3>
                  <p className="text-sm font-bold text-primary-600 uppercase tracking-widest">
                    {tpl.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary-900 to-indigo-950 rounded-[3rem] p-16 lg:p-28 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
                Start building your <br /> career today.
              </h2>
              <p className="text-primary-100/70 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ people who used ResumeBuilder to land roles at
                companies like Google, Meta, and Stripe.
              </p>
              <Button
                variant="gradient"
                size="lg"
                className="h-16 px-12 text-xl bg-white !from-white !to-white text-primary-900 hover:scale-105 transition-transform rounded-full"
                onClick={() => navigate("/editor")}
              >
                Build My Resume — Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                  <FileText className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  ResumeBuilder
                </span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
                Making professional resume building accessible, beautiful, and
                free for everyone.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">
                Platform
              </h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><Link to="/editor" className="hover:text-primary-600 transition-colors">Editor</Link></li>
                <li><a href="#templates" className="hover:text-primary-600 transition-colors">Templates</a></li>
                <li><a href="#features" className="hover:text-primary-600 transition-colors">Features</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">
                Connect
              </h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-medium italic">
              © 2026 ResumeBuilder. Built with precision.
            </p>
            <div className="flex gap-10">
              <Github className="text-gray-300 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-gray-300 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
