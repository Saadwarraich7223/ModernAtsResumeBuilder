import React from 'react';
import { CheckCircle2, Sparkles, Layout, ShieldCheck, Briefcase, Award, Code, Zap } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const templates = [
  { 
    id: 'minimal-1', 
    name: 'Minimalist', 
    tag: 'Classic',
    description: 'Clean, simple, and ATS-friendly.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=500',
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  { 
    id: 'modern-1', 
    name: 'Modern Edge', 
    tag: 'Professional',
    description: 'Two-column stylish and organized layout.',
    image: 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Layout,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  { 
    id: 'creative-1', 
    name: 'Creative Canvas', 
    tag: 'Stylish',
    description: 'Bold design to stand out from the crowd.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Sparkles,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  { 
    id: 'professional-1', 
    name: 'Corporate Pro', 
    tag: 'ATS-Ready',
    description: 'Structured layout for formal roles.',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Briefcase,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  { 
    id: 'executive-1', 
    name: 'Executive Elite', 
    tag: 'Premium',
    description: 'Elegant design for leadership positions.',
    image: 'https://images.unsplash.com/photo-1506784919141-93784117406c?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  { 
    id: 'tech-1', 
    name: 'Technologist', 
    tag: 'Developer',
    description: 'Dark-themed layout for software engineers.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-slate-900'
  },
  { 
    id: 'compact-1', 
    name: 'Compact Logic', 
    tag: 'Efficient',
    description: 'High-density design for extensive careers.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400&h=500',
    icon: Zap,
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  },
];

const TemplateSelector = () => {
  const { templateId, setTemplateId } = useResumeStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Select Design</h2>
        <p className="text-gray-500 font-medium">Choose a template that best represents your professional style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setTemplateId(template.id)}
            className={`group relative flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 text-left ${
              templateId === template.id
                ? 'border-primary-600 ring-4 ring-primary-100 shadow-xl'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
            }`}
          >
            {/* Thumbnail */}
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <img 
                src={template.image} 
                alt={template.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              {templateId === template.id && (
                <div className="absolute inset-0 bg-primary-600/10 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="bg-white rounded-full p-2 shadow-xl">
                      <CheckCircle2 size={32} className="text-primary-600" />
                   </div>
                </div>
              )}
              <div className="absolute top-4 right-4">
                 <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur shadow-sm ${template.color}`}>
                    {template.tag}
                 </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`${template.bg} ${template.color} p-2 rounded-xl`}>
                  <template.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{template.name}</h3>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                {template.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="p-6 bg-primary-50 rounded-3xl border border-primary-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600">
          <Sparkles size={24} />
        </div>
        <div>
          <p className="text-sm text-primary-900 font-bold mb-0.5">Switching made easy</p>
          <p className="text-xs text-primary-700 font-medium opacity-80">
            Data stays intact while you experiment with different styles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
