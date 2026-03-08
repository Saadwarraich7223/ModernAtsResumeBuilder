import minimal1 from "../../assets/templates/minimal1.png";
import modern1 from "../../assets/templates/modern1.png";
import creative1 from "../../assets/templates/creative1.png";
import professional1 from "../../assets/templates/professional1.png";
import tech1 from "../../assets/templates/tech1.png";
import classicSerif1 from "../../assets/templates/classicSerif1.png";
import executive1 from "../../assets/templates/executive1.png";
import creativePro1 from "../../assets/templates/creativePro1.png";
import compact1 from "../../assets/templates/compact1.png";

import {
  CheckCircle2,
  Sparkles,
  Layout,
  ShieldCheck,
  Briefcase,
  Award,
  Code,
  Zap,
  PenTool,
  BookOpen,
} from "lucide-react";
import useResumeStore from "../../store/resumeStore";

const templates = [
  {
    id: "minimal-1",
    name: "Minimalist",
    tag: "Classic",
    description: "Clean, simple, and ATS-friendly.",
    image: minimal1,
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "modern-1",
    name: "Modern Edge",
    tag: "Professional",
    description: "Two-column stylish and organized layout.",
    image: modern1,
    icon: Layout,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: "creative-1",
    name: "Creative Canvas",
    tag: "Stylish",
    description: "Bold design to stand out from the crowd.",
    image: creative1,
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: "creative-pro-1",
    name: "Designer Pro",
    tag: "Impact",
    description: "Modern patterns and high-impact layouts.",
    image: creativePro1,
    icon: PenTool,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    id: "professional-1",
    name: "Corporate Pro",
    tag: "ATS-Ready",
    description: "Structured layout for formal roles.",
    image: professional1,
    icon: Briefcase,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "classic-serif-1",
    name: "Classic Serif",
    tag: "Academic",
    description: "Traditional and elegant serif typography.",
    image: classicSerif1,
    icon: BookOpen,
    color: "text-stone-600",
    bg: "bg-stone-50",
  },
  {
    id: "executive-1",
    name: "Executive Elite",
    tag: "Premium",
    description: "Elegant design for leadership positions.",
    image: executive1,
    icon: Award,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "tech-1",
    name: "Technologist",
    tag: "Developer",
    description: "Dark-themed layout for software engineers.",
    image: tech1,
    icon: Code,
    color: "text-blue-400",
    bg: "bg-slate-900",
  },
  {
    id: "compact-1",
    name: "Compact Logic",
    tag: "Efficient",
    description: "High-density design for extensive careers.",
    image: compact1,
    icon: Zap,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const TemplateSelector = () => {
  const { templateId, setTemplateId } = useResumeStore();

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="border-b pb-6 text-left">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">
          Select Design
        </h2>
        <p className="text-gray-500 font-medium text-left">
          Choose a template that best represents your professional style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setTemplateId(template.id)}
            className={`group relative flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 text-left ${
              templateId === template.id
                ? "border-primary-600 ring-4 ring-primary-100 shadow-xl"
                : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
            }`}
          >
            {/* Thumbnail */}
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 text-left">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full  object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              {templateId === template.id && (
                <div className="absolute inset-0 bg-primary-600/10 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white rounded-full p-2 shadow-xl">
                    <CheckCircle2 size={32} className="text-primary-600" />
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur shadow-sm ${template.color}`}
                >
                  {template.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-left">
              <div className="flex items-center gap-3 mb-2 text-left">
                <div
                  className={`${template.bg} ${template.color} p-2 rounded-xl text-left`}
                >
                  <template.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-left">
                  {template.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2 text-left">
                {template.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="p-6 bg-primary-50 rounded-3xl border border-primary-100 flex items-center gap-4 text-left">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 text-left">
          <Sparkles size={24} />
        </div>
        <div className="text-left">
          <p className="text-sm text-primary-900 font-bold mb-0.5 text-left">
            Switching made easy
          </p>
          <p className="text-xs text-primary-700 font-medium opacity-80 text-left">
            Data stays intact while you experiment with different styles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
