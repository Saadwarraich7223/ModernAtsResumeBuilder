import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Layout,
  Zap,
  Download,
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
  Search,
  ExternalLink,
  Check,
} from "lucide-react";
import Button from "../components/ui/Button";
import useResumeStore from "../store/resumeStore";
import useAuthStore from "../store/authStore";

// --- REFINED SUB-COMPONENTS ---

const MagneticButton = ({
  children,
  className,
  onClick,
  variant = "gradient",
  size = "md",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - top - height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
    >
      <Button
        variant={variant}
        size={size}
        className={`${className} h-12 px-6 rounded-xl font-semibold transition-all`}
        onClick={onClick}
      >
        {children}
      </Button>
    </motion.div>
  );
};

const BentoCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bento-card p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ label, title, description, center = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 lg:mb-16 ${center ? "text-center max-w-2xl mx-auto" : "text-left max-w-xl"}`}
  >
    <div className="mono-label mb-4">{label}</div>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-base lg:text-lg text-slate-600 dark:text-indigo-100/70 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// --- MAIN COMPONENT ---

const Landing = () => {
  const navigate = useNavigate();
  const { setTemplateId, resetResume } = useResumeStore();
  const { user } = useAuthStore();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacityRange = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Consistently handle the theme toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSelectTemplate = (id) => {
    resetResume();
    setTemplateId(id);
    navigate("/editor");
  };

  const handleGetStarted = () => {
    if (user) navigate("/dashboard");
    else navigate("/register");
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-indigo-500/20 relative overflow-x-hidden ${isDarkMode ? "dark bg-[#020617]" : "bg-white"}`}
    >
      <div className="noise-bg"></div>

      {/* COMPACT BACKGROUNDS */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06),transparent_70%)]"></div>
      </div>

      {/* REFINED NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className={`glass-card rounded-2xl flex items-center justify-between px-6 h-14 transition-all duration-300 ${isScrolled ? "shadow-md border-slate-200/60 dark:border-slate-800/60" : "bg-transparent border-transparent shadow-none"}`}
          >
            <div
              className="flex items-center gap-2.5 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <FileText className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Resume<span className="text-indigo-600">Builder</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Features", "Templates", "Comparison"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                {isDarkMode ? (
                  <Sun
                    size={16}
                    className="text-amber-400 transition-transform group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={16}
                    className="text-slate-500 transition-transform group-hover:-rotate-12"
                  />
                )}
              </button>

              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <Button
                      variant="gradient"
                      size="sm"
                      className="rounded-xl px-5 h-9 font-bold text-xs shadow-sm"
                      onClick={handleGetStarted}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isScrolled && (
                <Link
                  to="/login"
                  className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-widest"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="md:hidden p-2 text-slate-900 dark:text-slate-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-6 bg-white dark:bg-slate-950"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Features", "Templates", "Comparison"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold dark:text-white"
                >
                  {item}
                </a>
              ))}
              <Button
                variant="gradient"
                size="lg"
                className="rounded-2xl h-14"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REFINED HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-8">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Version 2.0 is live
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Build a career that <br />
              <span className="hero-gradient">stands out.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-indigo-100/70 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              The professional resume builder for modern innovators. Clean,
              ATS-friendly templates designed to get you noticed by top
              recruiters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <MagneticButton
                onClick={handleGetStarted}
                className="shadow-lg shadow-indigo-500/20"
              >
                Get Started Free <ArrowRight size={18} className="ml-2" />
              </MagneticButton>
              <Button
                variant="secondary"
                size="md"
                className="h-12 px-6 text-base font-semibold rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                onClick={() =>
                  document
                    .getElementById("templates")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Designs
              </Button>
            </div>
          </motion.div>

          {/* COMPACT PRODUCT PREVIEW */}
          <motion.div
            style={{ opacity: opacityRange }}
            className="relative max-w-4xl mx-auto pt-10"
          >
            {/* Added a subtle background glow for visibility */}
            <div className="absolute inset-0 bg-indigo-500/50 dark:bg-indigo-500/10 blur-[80px] rounded-[3rem] -z-10"></div>

            <div className="relative rounded-2xl border border-slate-400 dark:border-slate-700 bg-white/50 dark:bg-slate-950 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-300 dark:border-slate-800 bg-slate-200 dark:bg-slate-900">
                {/* Window dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-700"></div>
                </div>

                {/* URL bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <Search size={10} className="text-slate-400" />
                  <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400">
                    resume-builder.io/editor
                  </span>
                </div>

                {/* Profile icon */}
                <div className="w-6 h-6 rounded-full bg-slate-400 dark:bg-slate-800"></div>
              </div>

              {/* Preview Area */}
              <div className="aspect-[16/9] bg-slate-100 dark:bg-[#030712] p-8 lg:p-12 overflow-hidden">
                <div className="max-w-3xl mx-auto grid grid-cols-12 gap-8">
                  {/* Resume Content */}
                  <div className="col-span-8 space-y-8">
                    {/* Name */}
                    <div className="h-10 w-2/3 bg-slate-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>

                    {/* Subtitle */}
                    <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>

                    {/* Paragraph lines */}
                    <div className="space-y-3 pt-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-2.5 w-full bg-slate-300 dark:bg-slate-800 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="col-span-4 space-y-6">
                    {/* Avatar */}
                    <div className="aspect-square bg-slate-300 dark:bg-slate-800 rounded-2xl animate-pulse"></div>

                    {/* ATS Score Card */}
                    <div className="h-20 rounded-2xl bg-indigo-600 p-4 flex flex-col justify-center shadow-lg shadow-indigo-500/20">
                      <div className="text-white font-bold text-xl tracking-tight">
                        98%
                      </div>
                      <div className="text-[8px] font-bold text-white/70 uppercase tracking-widest">
                        ATS Match Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPACT BENTO FEATURES */}
      <section id="features" className="py-20 lg:py-24 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading
            label="FEATURES"
            title="Smarter resume building."
            description="Focus on your experience. We handle the formatting and optimization."
          />

          <div className="grid lg:grid-cols-12 gap-6">
            <BentoCard className="lg:col-span-7 bg-indigo-600 text-white border-none group">
              <ShieldCheck
                size={40}
                className="mb-6 text-indigo-200 group-hover:scale-105 transition-transform"
              />
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                ATS-Optimized Formatting
              </h3>
              <p className="text-indigo-100 text-sm font-medium leading-relaxed max-w-md mb-6">
                Our templates are mathematically tuned to pass through
                industry-standard Applicant Tracking Systems with ease.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JSON Parsing", "Keyword Check"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[9px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="lg:col-span-5 bg-white dark:bg-slate-900/50">
              <Sparkles size={32} className="mb-6 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                AI Co-pilot
              </h3>
              <p className="text-slate-600 dark:text-indigo-100/70 text-sm font-medium">
                Generate high-impact bullet points and summaries tailored to
                your target industry in seconds.
              </p>
            </BentoCard>

            <BentoCard className="lg:col-span-4 bg-white dark:bg-slate-900/50">
              <Layout size={32} className="mb-6 text-purple-600" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">
                Live Editor
              </h3>
              <p className="text-slate-600 dark:text-indigo-100/70 text-xs font-medium">
                Zero-lag editing. See changes instantly with our
                high-performance preview engine.
              </p>
            </BentoCard>

            <BentoCard className="lg:col-span-4 bg-white dark:bg-slate-900/50">
              <Download size={32} className="mb-6 text-emerald-600" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">
                One-Click Export
              </h3>
              <p className="text-slate-600 dark:text-indigo-100/70 text-xs font-medium">
                Download your resume as a clean, professional PDF ready for any
                application portal.
              </p>
            </BentoCard>

            <BentoCard className="lg:col-span-4 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900">
              <Github size={32} className="mb-6 opacity-80" />
              <h3 className="text-lg font-bold mb-2 tracking-tight">
                Open Source
              </h3>
              <p className="text-xs font-medium opacity-70">
                Transparent and community-driven. Your professional data remains
                private and secure.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* COMPACT COMPARISON */}
      <section
        id="comparison"
        className="py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-950/20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="THE CHOICE"
            title="The better alternative."
            description="Stop wrestling with Word and overpriced builders."
          />

          <div className="glass-card rounded-2xl overflow-hidden border-slate-200/60 dark:border-slate-800/60">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="p-5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Capability
                  </th>
                  <th className="p-5 text-[9px] font-bold text-indigo-600 uppercase tracking-widest">
                    ResumeBuilder
                  </th>
                  <th className="p-5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Legacy Tools
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-indigo-100">
                {[
                  { name: "Unlimited Resumes", us: true, them: false },
                  { name: "AI Generation", us: true, them: false },
                  { name: "ATS Validation", us: true, them: false },
                  { name: "No Paywalls", us: true, them: false },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 dark:border-slate-800 last:border-none"
                  >
                    <td className="p-5 text-sm font-semibold">{row.name}</td>
                    <td className="p-5">
                      <Check size={16} className="text-emerald-500" />
                    </td>
                    <td className="p-5">
                      {row.them ? (
                        <Check size={16} className="text-slate-300" />
                      ) : (
                        <X size={16} className="text-slate-300" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BALANCED TEMPLATES */}
      <section id="templates" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
            <SectionHeading
              label="DESIGNS"
              title="Pick your template."
              description="Surgical-grade resume designs for every industry."
              center={false}
            />
            <Button
              variant="secondary"
              className="rounded-xl px-6 h-11 text-sm font-bold gap-2 group border-slate-200 dark:border-slate-800 dark:bg-slate-900"
              onClick={() => navigate("/templates")}
            >
              Browse Library{" "}
              <ExternalLink
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                id: "modern-1",
                name: "Executive",
                image:
                  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&h=800",
              },
              {
                id: "creative-1",
                name: "Creative",
                image:
                  "https://images.unsplash.com/photo-1626197031507-c17099753214?q=80&w=600&h=800",
              },
              {
                id: "minimal-1",
                name: "Minimal",
                image:
                  "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=600&h=800",
              },
            ].map((tpl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => handleSelectTemplate(tpl.id)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                    <Button
                      variant="gradient"
                      className="w-full h-11 rounded-xl font-bold text-xs shadow-xl shadow-indigo-500/20"
                    >
                      USE TEMPLATE
                    </Button>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between px-1">
                  <div>
                    <h3 className="text-lg font-bold dark:text-slate-50">
                      {tpl.name}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      Professional
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-300 group-hover:text-indigo-600 transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CTA SECTION */}
      <section className="py-20 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 p-12 lg:p-24 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Accelerate your <br />
                <span className="text-indigo-400">career journey.</span>
              </h2>
              <p className="text-indigo-100/60 text-base lg:text-lg mb-10 font-medium leading-relaxed">
                Free forever. Unlimited resumes. Join 10,000+ candidates at
                companies like Stripe, Meta, and Google.
              </p>
              <MagneticButton
                onClick={handleGetStarted}
                className="bg-white !from-white !to-white text-slate-950 shadow-xl shadow-white/5"
              >
                Build My Resume Now
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REFINED FOOTER */}
      <footer className="py-16 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                  <FileText className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight dark:text-slate-50">
                  Resume<span className="text-indigo-600">Builder</span>
                </span>
              </div>
              <p className="text-slate-500 dark:text-indigo-100/50 text-sm font-medium leading-relaxed max-w-xs">
                Making professional resume building accessible, elegant, and
                effective for everyone.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Product",
                  links: ["Editor", "Templates", "AI Assistant"],
                },
                {
                  title: "Company",
                  links: ["About", "Careers", "Open Source"],
                },
                { title: "Legal", links: ["Privacy", "Terms", "Security"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-slate-50 mb-6">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-sm text-slate-500 dark:text-indigo-100/50 font-semibold hover:text-indigo-600 transition-colors"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © 2026 RESUMEBUILDER.IO
            </div>
            <div className="flex gap-8">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-slate-300 hover:text-indigo-600 cursor-pointer transition-colors"
                  size={18}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
