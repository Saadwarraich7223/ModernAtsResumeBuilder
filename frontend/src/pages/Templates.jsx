import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Search,
  FileText,
  ExternalLink,
  Filter,
  Layout,
  Sun,
  Moon,
  ChevronRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import useResumeStore from '../store/resumeStore';

const categories = [
  { id: 'all', name: 'All Designs' },
  { id: 'modern', name: 'Modern' },
  { id: 'minimal', name: 'Minimal' },
  { id: 'professional', name: 'Corporate' },
  { id: 'creative', name: 'Creative' },
  { id: 'tech', name: 'Tech & Logic' },
];

const allTemplates = [
  { 
    id: 'minimal-1', 
    name: 'Minimalist Sans', 
    category: 'minimal',
    description: 'Clean, simple, and ATS-friendly.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Classic'
  },
  { 
    id: 'modern-1', 
    name: 'Modern Executive', 
    category: 'modern',
    description: 'Two-column stylish and organized layout.',
    image: 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Professional'
  },
  { 
    id: 'creative-1', 
    name: 'Creative Canvas', 
    category: 'creative',
    description: 'Bold design to stand out from the crowd.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Stylish'
  },
  { 
    id: 'creative-pro-1', 
    name: 'Designer Pro', 
    category: 'creative',
    description: 'High-impact layout with modern patterns.',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Impact'
  },
  { 
    id: 'professional-1', 
    name: 'Corporate Pro', 
    category: 'professional',
    description: 'Structured layout for experienced professionals.',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'ATS-Ready'
  },
  { 
    id: 'classic-serif-1', 
    name: 'Classic Serif', 
    category: 'minimal',
    description: 'Traditional academic and legal style.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Academic'
  },
  { 
    id: 'executive-1', 
    name: 'Executive Elite', 
    category: 'professional',
    description: 'Elegant and sophisticated for leadership roles.',
    image: 'https://images.unsplash.com/photo-1506784919141-93784117406c?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Leadership'
  },
  { 
    id: 'tech-1', 
    name: 'Technologist', 
    category: 'tech',
    description: 'Dark-themed, terminal-style layout for developers.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Developer'
  },
  { 
    id: 'compact-1', 
    name: 'Compact Logic', 
    category: 'tech',
    description: 'High-density efficient design for extensive backgrounds.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Efficient'
  },
];

const Templates = () => {
  const navigate = useNavigate();
  const { setTemplateId } = useResumeStore();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDarkMode]);

  const filteredTemplates = activeCategory === 'all' 
    ? allTemplates 
    : allTemplates.filter(t => t.category === activeCategory);

  const handleSelect = (id) => {
    setTemplateId(id);
    navigate('/editor');
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans selection:bg-indigo-500/20 transition-colors duration-500 ${isDarkMode ? 'dark bg-[#020617]' : 'bg-white'}`}>
      <div className="noise-bg"></div>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06),transparent_70%)]"></div>
        <div className="absolute top-[20%] right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* Refined Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-5`}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="glass-card rounded-2xl flex items-center justify-between px-6 h-14 border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <FileText className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-heading">
                Resume<span className="text-indigo-600">Builder</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Button 
                variant="secondary" 
                size="sm" 
                className="rounded-xl px-5 h-9 font-bold text-xs border-slate-200 dark:border-slate-800 dark:bg-slate-900" 
                onClick={() => navigate('/dashboard')}
              >
                My Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
           <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 font-heading">
             Pick your <span className="hero-gradient">starting design.</span>
           </h1>
           <p className="text-base lg:text-lg text-slate-600 dark:text-indigo-100/70 font-medium leading-relaxed">
             Surgical-grade resume templates crafted by career experts. Change your design anytime within the editor.
           </p>
        </motion.div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 uppercase tracking-widest ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredTemplates.map((tpl, idx) => (
              <motion.div 
                layout
                key={tpl.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleSelect(tpl.id)}
              >
                <div className="relative aspect-[3/4.2] rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 group-hover:shadow-2xl transition-all duration-500">
                  <img src={tpl.image} alt={tpl.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  
                  <div className="absolute top-5 left-5">
                    <div className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {tpl.tag}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                     <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-xs font-medium mb-6 opacity-80 leading-relaxed">{tpl.description}</p>
                        <Button 
                          variant="gradient" 
                          className="w-full h-11 rounded-xl font-bold text-xs shadow-xl shadow-indigo-500/30"
                        >
                          Select This Design
                        </Button>
                     </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center px-2">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{tpl.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tpl.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="py-32 text-center">
            <Layout size={48} className="mx-auto text-slate-200 mb-6" />
            <p className="text-slate-500 font-medium">No templates found in this category.</p>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 lg:p-20 text-center border-slate-200 dark:border-slate-800 relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
           <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight relative z-10 font-heading">
             Unsure which one to choose?
           </h2>
           <p className="text-slate-600 dark:text-indigo-100/70 max-w-xl mx-auto mb-10 font-medium relative z-10 leading-relaxed">
             You can switch templates at any time within the editor. 
             Experiment with different styles to see which fits your profile best.
           </p>
           <Button variant="gradient" className="rounded-xl h-12 px-10 shadow-lg shadow-indigo-500/20" onClick={() => navigate('/editor')}>
              Open Editor <ChevronRight size={18} className="ml-2" />
           </Button>
        </motion.div>
      </section>

      {/* Footer (Refined) */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-900 text-center">
         <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">© 2026 ResumeBuilder. Built for the modern professional.</p>
      </footer>
    </div>
  );
};

export default Templates;
