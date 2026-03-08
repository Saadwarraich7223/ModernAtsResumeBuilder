import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
  Layout,
  Settings as SettingsIcon,
  Save,
  ArrowLeft,
  FileUp,
  Download,
  Palette,
  CheckCircle2,
  ChevronRight,
  Eye,
  Sparkles,
  ShieldCheck,
  X,
  FolderGit2,
  Award,
  Languages as LangIcon,
  GripVertical,
  Sun,
  Moon,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { motion, AnimatePresence } from "framer-motion";
import useResumeStore from "../store/resumeStore";
import useUIStore from "../store/uiStore";
import PersonalInfo from "../components/editor/PersonalInfo";
import ResumePreview from "../components/editor/ResumePreview";
import Button from "../components/ui/Button";
import ResumeImport from "../components/editor/ResumeImport";
import TemplateSelector from "../components/editor/TemplateSelector";
import Summary from "../components/editor/Summary";
import Experience from "../components/editor/Experience";
import Education from "../components/editor/Education";
import Skills from "../components/editor/Skills";
import Settings from "../components/editor/Settings";
import ATSAnalysis from "../components/editor/ATSAnalysis";
import Projects from "../components/editor/Projects";
import Certifications from "../components/editor/Certifications";
import Languages from "../components/editor/Languages";
import CustomSections from "../components/editor/CustomSections";
import SectionManager from "../components/editor/SectionManager";

const baseSections = [
  { id: "import", label: "Import", icon: FileUp },
  { id: "templates", label: "Templates", icon: Palette },
  { id: "personal", label: "Personal Info", icon: User },
  { id: "summary", label: "Summary", icon: FileText },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
];

const optionalSectionsMap = {
  projects: { id: "projects", label: "Projects", icon: FolderGit2 },
  certifications: { id: "certifications", label: "Certifications", icon: Award },
  languages: { id: "languages", label: "Languages", icon: LangIcon },
  custom: { id: "custom", label: "Custom Sections", icon: Layout },
};

const fixedBottomSections = [
  { id: "ats", label: "ATS AI Scan", icon: ShieldCheck },
  { id: "manager", label: "Manage Sections", icon: GripVertical },
  { id: "settings", label: "Settings", icon: SettingsIcon },
];

const Editor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resumeId = queryParams.get('id');

  const { isDarkMode, toggleDarkMode } = useUIStore();
  const [activeSection, setActiveSection] = useState("personal");
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);
  const { saveResume, title, setTitle, data, loadResume, resetResume, settings } = useResumeStore();
  const resumeRef = useRef(null);

  const visibleOptionalIds = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  
  const dynamicSections = useMemo(() => {
    const optionals = visibleOptionalIds.map(id => optionalSectionsMap[id]).filter(Boolean);
    return [...baseSections, ...optionals, ...fixedBottomSections];
  }, [visibleOptionalIds]);

  useEffect(() => {
    if (resumeId) {
      loadResume(resumeId);
    } else {
      resetResume(true);
    }
  }, [resumeId]);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: title || "My_Resume",
  });

  const handleSave = async () => {
    const id = await saveResume(resumeId);
    if (!resumeId && id) {
      navigate(`/editor?id=${id}`, { replace: true });
    }
  };

  const progress = useMemo(() => {
    let totalFields = 5;
    let completedFields = 0;
    if (data.personalInfo.fullName) completedFields++;
    if (data.summary) completedFields++;
    if (data.workExperience?.length > 0) completedFields++;
    if (data.education?.length > 0) completedFields++;
    if (data.skills?.length > 0) completedFields++;
    return Math.round((completedFields / totalFields) * 100);
  }, [data]);

  const isSectionComplete = (id) => {
    switch (id) {
      case "personal": return !!data.personalInfo.fullName;
      case "summary": return !!data.summary;
      case "experience": return data.workExperience?.length > 0;
      case "education": return data.education?.length > 0;
      case "skills": return data.skills?.length > 0;
      case "projects": return data.projects?.length > 0;
      case "certifications": return data.certifications?.length > 0;
      case "languages": return data.languages?.length > 0;
      default: return true;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "import": return <ResumeImport />;
      case "templates": return <TemplateSelector />;
      case "personal": return <PersonalInfo />;
      case "summary": return <Summary />;
      case "experience": return <Experience />;
      case "education": return <Education />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "certifications": return <Certifications />;
      case "languages": return <Languages />;
      case "custom": return <CustomSections />;
      case "manager": return <SectionManager />;
      case "ats": return <ATSAnalysis />;
      case "settings": return <Settings />;
      default: return <PersonalInfo />;
    }
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden relative font-sans selection:bg-indigo-500/20 transition-colors duration-500 ${isDarkMode ? 'dark bg-[#020617]' : 'bg-[#f8fafc]'}`}>
      <div className="noise-bg"></div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-30">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div className="flex flex-col min-w-0">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border-none p-0 text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50 focus:ring-0 w-full truncate outline-none"
              placeholder="Resume Title..."
            />
            <div className="flex items-center gap-2 mt-0.5">
              <div className="h-1 w-16 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreviewMobile(!showPreviewMobile)}
            className="lg:hidden p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <Eye size={18} />
          </button>
          
          <Button
            variant="secondary"
            size="sm"
            className="hidden md:flex rounded-xl px-4 h-9 font-bold text-xs border-slate-200 dark:border-slate-800 dark:bg-slate-900"
            onClick={handlePrint}
          >
            <Download size={16} className="mr-2" /> PDF
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="rounded-xl px-6 h-9 font-bold text-xs shadow-sm"
            onClick={handleSave}
          >
            <Save size={16} className="mr-2" /> Save
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Refined Sidebar */}
        <aside className="w-16 md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 z-20">
          <nav className="flex-1 px-2.5 space-y-1 overflow-y-auto scrollbar-hide">
            {dynamicSections.map((section) => {
              const complete = isSectionComplete(section.id);
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setShowPreviewMobile(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all relative group ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className={`shrink-0 transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                    <section.icon size={18} />
                  </div>
                  <span className="hidden md:block flex-1 text-left truncate">
                    {section.label}
                  </span>
                  {complete && !['import', 'settings', 'manager'].includes(section.id) && (
                    <CheckCircle2
                      size={14}
                      className={`hidden md:block ${isActive ? "text-indigo-600/80" : "text-emerald-500"}`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* AI Status Pill */}
          <div className="px-4 mt-4 hidden md:block">
            <div className="p-4 bg-indigo-600 rounded-2xl relative overflow-hidden group shadow-lg shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 blur-xl rounded-full -mr-8 -mt-8"></div>
              <p className="text-[10px] font-black text-indigo-100 uppercase tracking-widest flex items-center gap-2 mb-1.5">
                <Sparkles size={12} /> AI Active
              </p>
              <button 
                onClick={() => setActiveSection('ats')} 
                className="text-[10px] font-bold text-white hover:underline flex items-center gap-1"
              >
                Scan Resume <ChevronRight size={10} />
              </button>
            </div>
          </div>
        </aside>

        {/* Form Area */}
        <main
          className={`flex-1 overflow-y-auto p-4 md:p-8 transition-all duration-500 ${showPreviewMobile ? "hidden" : "block"}`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-10 relative overflow-hidden text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-50"></div>
              {renderSection()}
            </motion.div>
          </div>
        </main>

        {/* Enhanced Preview Area */}
        <section
          className={`flex-1 bg-slate-100 dark:bg-slate-950 p-6 md:p-10 overflow-y-auto border-l border-slate-200 dark:border-slate-800 transition-all duration-500 lg:block ${showPreviewMobile ? "block fixed inset-0 z-40 bg-white dark:bg-slate-950" : "hidden"}`}
        >
          {showPreviewMobile && (
            <button
              onClick={() => setShowPreviewMobile(false)}
              className="fixed top-6 right-6 z-50 p-3 bg-slate-900 text-white rounded-xl shadow-xl"
            >
              <X size={20} />
            </button>
          )}
          <div className="flex justify-center min-h-full">
            <div className="shadow-2xl shadow-slate-900/10 dark:shadow-indigo-500/5 origin-top scale-[0.85] xl:scale-[0.95] 2xl:scale-100">
              <ResumePreview ref={resumeRef} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Editor;
