import React, { useState, useRef, useMemo } from "react";
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
  Circle,
  ChevronRight,
  Eye,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import useResumeStore from "../store/resumeStore";
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

const sections = [
  { id: "import", label: "Import", icon: FileUp },
  { id: "templates", label: "Templates", icon: Palette },
  { id: "personal", label: "Personal Info", icon: User },
  { id: "summary", label: "Summary", icon: FileText },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "ats", label: "ATS AI Scan", icon: ShieldCheck },
  { id: "settings", label: "Settings", icon: SettingsIcon },
];

const Editor = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("personal");
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);
  const { saveResume, title, setTitle, data } = useResumeStore();
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: title || "My_Resume",
  });

  // Progress Calculation
  const progress = useMemo(() => {
    let totalFields = 5; // Major sections
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
      case "personal":
        return !!data.personalInfo.fullName;
      case "summary":
        return !!data.summary;
      case "experience":
        return data.workExperience?.length > 0;
      case "education":
        return data.education?.length > 0;
      case "skills":
        return data.skills?.length > 0;
      default:
        return true;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "import":
        return <ResumeImport />;
      case "templates":
        return <TemplateSelector />;
      case "personal":
        return <PersonalInfo />;
      case "summary":
        return <Summary />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "ats":
        return <ATSAnalysis />;
      case "settings":
        return <Settings />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-primary-100 overflow-hidden relative">
      {/* SaaS Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 h-20 bg-white/70 backdrop-blur-2xl border-b border-gray-100 z-30 text-left">
        <div className="flex items-center gap-6 flex-1 text-left">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="h-8 w-px bg-gray-100 hidden md:block"></div>
          <div className="flex flex-col text-left">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border-none p-0 text-lg font-black tracking-tight text-gray-900 focus:ring-0 w-full max-w-[200px] md:max-w-md text-left"
              placeholder="Resume Title..."
            />
            <div className="flex items-center gap-2 mt-0.5 text-left">
              <div className="h-1 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {progress}% Complete
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreviewMobile(!showPreviewMobile)}
            className="lg:hidden p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Eye size={20} />
          </button>
          <Button
            variant="secondary"
            size="md"
            className="hidden md:flex rounded-full px-6 border-gray-200"
            onClick={handlePrint}
          >
            <Download size={18} className="mr-2" /> Download
          </Button>
          <Button
            variant="gradient"
            size="md"
            className="rounded-full px-8 shadow-lg shadow-primary-500/20"
            onClick={() => saveResume()}
          >
            <Save size={18} className="mr-2" /> Save
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-30 md:w-60 bg-white border-r border-gray-100 flex flex-col py-8 z-20 text-left">
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-hide text-left">
            {sections.map((section) => {
              const complete = isSectionComplete(section.id);
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setShowPreviewMobile(false);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 relative group text-left ${
                    activeSection === section.id
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div
                    className={`shrink-0 transition-transform duration-300 ${activeSection === section.id ? "scale-110" : "group-hover:scale-110"}`}
                  >
                    <section.icon size={22} />
                  </div>
                  <span className="hidden md:block flex-1 text-left">
                    {section.label}
                  </span>
                  {complete &&
                    section.id !== "import" &&
                    section.id !== "settings" && (
                      <CheckCircle2
                        size={16}
                        className={`hidden md:block ${activeSection === section.id ? "text-white/80" : "text-emerald-500"}`}
                      />
                    )}
                  {activeSection === section.id && (
                    <div className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full hidden md:block"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* AI Status Indicator */}
          <div className="px-6 mt-6 hidden md:block">
            <div className="p-5 bg-indigo-50 rounded-3xl border border-indigo-100 space-y-3 relative overflow-hidden group text-left">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-xs font-black text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} /> AI Power Active
              </p>
              <p className="text-[11px] text-indigo-700/80 font-bold leading-relaxed">
                Powered by OpenAI GPT-4o-mini for premium resume generation.
              </p>
              <button
                onClick={() => setActiveSection("ats")}
                className="text-[11px] font-black text-indigo-600 uppercase tracking-widest hover:underline flex items-center gap-1"
              >
                Run ATS Scan <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Editor Area */}
        <main
          className={`flex-1 overflow-y-auto p-2  md:p-4 transition-all duration-500 ${showPreviewMobile ? "hidden" : "block"}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.03)] border border-gray-100 p-2 md:p-4 relative overflow-hidden text-left">
              {/* Decorative Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 opacity-80"></div>
              {renderSection()}
            </div>
          </div>
        </main>

        {/* Preview Area */}
        <section
          className={`flex-1 bg-gray-100/50 p-6 md:p-12 overflow-y-auto border-l border-gray-100 transition-all duration-500 lg:block ${showPreviewMobile ? "block fixed inset-0 z-40 bg-white" : "hidden"}`}
        >
          {showPreviewMobile && (
            <button
              onClick={() => setShowPreviewMobile(false)}
              className="fixed top-6 right-6 z-50 p-4 bg-gray-900 text-white rounded-2xl shadow-xl"
            >
              <X size={24} />
            </button>
          )}
          <div className="flex justify-center min-h-full">
            <ResumePreview ref={resumeRef} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Editor;
