import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layout, 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  ArrowRight,
  Search,
  CheckCircle2,
  FileText,
  Code,
  Zap,
  PenTool
} from 'lucide-react';
import Button from '../components/ui/Button';
import useResumeStore from '../store/resumeStore';

const categories = [
  { id: 'all', name: 'All Templates' },
  { id: 'modern', name: 'Modern' },
  { id: 'minimal', name: 'Minimal' },
  { id: 'professional', name: 'Professional' },
  { id: 'creative', name: 'Creative' },
  { id: 'tech', name: 'Tech & Logic' },
];

const allTemplates = [
  { 
    id: 'minimal-1', 
    name: 'Minimalist', 
    category: 'minimal',
    description: 'Clean, simple, and ATS-friendly.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Classic'
  },
  { 
    id: 'modern-1', 
    name: 'Modern Edge', 
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
    tag: 'Premium'
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

  const filteredTemplates = activeCategory === 'all' 
    ? allTemplates 
    : allTemplates.filter(t => t.category === activeCategory);

  const handleSelect = (id) => {
    setTemplateId(id);
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-primary-100 relative text-left">
      {/* SaaS Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-purple-50/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full bg-white/60 backdrop-blur-xl border-b border-gray-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-left">
          <div className="flex items-center gap-2.5 cursor-pointer text-left" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 text-left">
              <FileText className="text-white text-left" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 text-left">ResumeBuilder</span>
          </div>
          
          <Button variant="secondary" size="md" className="rounded-full px-6" onClick={() => navigate('/editor')}>
            Go to Editor
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 text-left">
        <div className="text-center mb-16 space-y-4">
           <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-gray-900">
             Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Perfect Design</span>
           </h1>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
             Our templates are crafted by recruitment experts and tested for ATS compatibility. 
             Start with a design that fits your industry.
           </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white border border-gray-100 text-gray-500 hover:border-primary-200 hover:text-primary-600 shadow-sm'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {filteredTemplates.map((tpl, idx) => (
            <div key={idx} className="group animate-fade-in text-left" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <img src={tpl.image} alt={tpl.name} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700" />
                
                <div className="absolute top-6 right-6">
                   <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-white/90 backdrop-blur shadow-sm text-primary-600">
                      {tpl.tag}
                   </span>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12">
                  <div className="text-white text-center space-y-6">
                     <p className="font-medium text-gray-200 leading-relaxed text-center">{tpl.description}</p>
                     <Button 
                       variant="gradient" 
                       size="lg" 
                       className="rounded-full w-full py-4 !from-white !to-white text-primary-900"
                       onClick={() => handleSelect(tpl.id)}
                     >
                       Select Design
                     </Button>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center px-4 text-left">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-left">{tpl.name}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left">{tpl.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-left">
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 text-center border border-gray-100 shadow-xl relative overflow-hidden mx-auto">
           <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100/30 blur-3xl rounded-full"></div>
           <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight relative z-10 text-center">
             Not sure which one to pick?
           </h2>
           <p className="text-gray-500 max-w-xl mx-auto mb-10 font-medium relative z-10 text-center">
             You can change your template at any time within the editor without losing your progress. 
             Experiment and find your perfect fit!
           </p>
           <Button variant="gradient" size="lg" className="rounded-full px-12" onClick={() => navigate('/editor')}>
              Open Editor
           </Button>
        </div>
      </section>

      {/* Footer (Minimal) */}
      <footer className="py-12 border-t border-gray-100 text-center">
         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic text-center">© 2026 ResumeBuilder. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Templates;
