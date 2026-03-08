import minimal1 from "../assets/templates/minimal1.png";
import modern1 from "../assets/templates/modern1.png";
import creative1 from "../assets/templates/creative1.png";
import professional1 from "../assets/templates/professional1.png";
import tech1 from "../assets/templates/tech1.png";
import classicSerif1 from "../assets/templates/classicSerif1.png";
import executive1 from "../assets/templates/executive1.png";
import creativePro1 from "../assets/templates/creativePro1.png";
import compact1 from "../assets/templates/compact1.png";
import swissModern1 from "../assets/templates/swissModern1.png";
import cyberEngineer1 from "../assets/templates/cyberEngineer1.png";
import modernLinear1 from "../assets/templates/modernLinear1.png";

import {
  ShieldCheck,
  Layout,
  Sparkles,
  PenTool,
  Briefcase,
  BookOpen,
  Award,
  Code,
  Zap,
} from "lucide-react";

export const TEMPLATE_CATEGORIES = [
  { id: "all", name: "All Designs" },
  { id: "modern", name: "Modern" },
  { id: "minimal", name: "Minimal" },
  { id: "professional", name: "Corporate" },
  { id: "creative", name: "Creative" },
  { id: "tech", name: "Tech & Logic" },
];

export const TEMPLATES = [
  {
    id: "minimal-1",
    name: "Minimalist Sans",
    category: "minimal",
    tag: "Classic",
    description: "Clean, simple, and ATS-friendly design for all industries.",
    image: minimal1,
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "modern-1",
    name: "Modern Executive",
    category: "modern",
    tag: "Professional",
    description: "Two-column stylish and organized layout for impact.",
    image: modern1,
    icon: Layout,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: "creative-1",
    name: "Creative Canvas",
    category: "creative",
    tag: "Stylish",
    description: "Bold design to stand out from the crowd with personality.",
    image: creative1,
    icon: Sparkles,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: "creative-pro-1",
    name: "Designer Pro",
    category: "creative",
    tag: "Impact",
    description: "High-impact layout with modern patterns and visuals.",
    image: creativePro1,
    icon: PenTool,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    id: "professional-1",
    name: "Corporate Pro",
    category: "professional",
    tag: "ATS-Ready",
    description: "Structured layout for experienced professionals and roles.",
    image: professional1,
    icon: Briefcase,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "classic-serif-1",
    name: "Classic Serif",
    category: "minimal",
    tag: "Academic",
    description:
      "Traditional academic and legal style with elegant typography.",
    image: classicSerif1,
    icon: BookOpen,
    color: "text-stone-600",
    bg: "bg-stone-50",
  },
  {
    id: "executive-1",
    name: "Executive Elite",
    category: "professional",
    tag: "Leadership",
    description:
      "Elegant and sophisticated design for leadership and management.",
    image: executive1,
    icon: Award,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "tech-1",
    name: "Technologist",
    category: "tech",
    tag: "Developer",
    description: "Dark-themed, terminal-style layout optimized for engineers.",
    image: tech1,
    icon: Code,
    color: "text-blue-400",
    bg: "bg-slate-900",
  },
  {
    id: "compact-1",
    name: "Compact Logic",
    category: "tech",
    tag: "Efficient",
    description:
      "High-density efficient design for extensive professional backgrounds.",
    image: compact1,
    icon: Zap,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    id: "swiss-modern-1",
    name: "Swiss Modern",
    category: "minimal",
    tag: "ATS-Elite",
    description:
      "High-contrast, bold typography and maximum readability for ATS survival.",
    image: swissModern1,
    icon: ShieldCheck,
    color: "text-slate-900",
    bg: "bg-slate-50",
  },
  {
    id: "cyber-engineer-1",
    name: "Cyber Engineer",
    category: "tech",
    tag: "High-Tech",
    description:
      "Dark-themed, neon-accented design for cutting-edge software roles.",
    image: cyberEngineer1,
    icon: Code,
    color: "text-indigo-400",
    bg: "bg-slate-900",
  },
  {
    id: "modern-linear-1",
    name: "Modern Linear",
    category: "modern",
    tag: "Premium",
    description:
      "SaaS-inspired aesthetic with clean lines and superior spacing.",
    image: modernLinear1,
    icon: Layout,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export const getTemplateById = (id) =>
  TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
