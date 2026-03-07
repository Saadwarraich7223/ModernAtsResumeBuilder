import React, { useState } from "react";
import useResumeStore from "../../store/resumeStore";
import Button from "../ui/Button";
import {
  FileUp,
  Loader2,
  Sparkles,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ResumeImport = () => {
  const [text, setText] = useState("");
  const [isParsing, setIsParsing] = useState(false);
  const { setResumeData } = useResumeStore();
  const [status, setStatus] = useState("idle"); // idle, parsing, success, error

  const parseResume = () => {
    if (!text.trim()) return;
    setIsParsing(true);
    setStatus("parsing");

    // Simulate parsing logic with a slight delay
    setTimeout(() => {
      try {
        const lines = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line);
        const newData = {
          personalInfo: {},
          summary: "",
          workExperience: [],
          education: [],
          skills: [],
        };

        let currentSection = "";

        lines.forEach((line, index) => {
          const lowerLine = line.toLowerCase();

          if (index === 0 && !newData.personalInfo.fullName) {
            newData.personalInfo.fullName = line;
            return;
          }

          if (lowerLine.includes("summary") || lowerLine.includes("profile")) {
            currentSection = "summary";
            return;
          } else if (
            lowerLine.includes("experience") ||
            lowerLine.includes("work history")
          ) {
            currentSection = "experience";
            return;
          } else if (lowerLine.includes("education")) {
            currentSection = "education";
            return;
          } else if (lowerLine.includes("skills")) {
            currentSection = "skills";
            return;
          }

          if (currentSection === "summary") {
            newData.summary += (newData.summary ? " " : "") + line;
          } else if (currentSection === "skills") {
            const splitSkills = line
              .split(/[,|•]/)
              .map((s) => s.trim())
              .filter((s) => s);
            splitSkills.forEach((s) =>
              newData.skills.push({ name: s, level: "Intermediate" }),
            );
          } else if (currentSection === "experience") {
            if (line.match(/\d{4}/)) {
              newData.workExperience.push({
                company: "Company",
                position: "Position",
                startDate: line,
                description: "",
              });
            } else if (newData.workExperience.length > 0) {
              const lastIdx = newData.workExperience.length - 1;
              newData.workExperience[lastIdx].description +=
                (newData.workExperience[lastIdx].description ? "\n" : "") +
                line;
            }
          } else if (currentSection === "education") {
            if (line.match(/\d{4}/)) {
              newData.education.push({
                school: line,
                degree: "Degree",
                startDate: "",
                endDate: "",
              });
            }
          }
        });

        setResumeData(newData);
        setIsParsing(false);
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
      } catch (err) {
        setIsParsing(false);
        setStatus("error");
      }
    }, 1800);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          Quick Import
        </h2>
        <p className="text-gray-500 font-medium">
          Paste your existing resume to populate sections automatically.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-1">
          <ClipboardList size={14} className="text-gray-400" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Resume Content
          </span>
        </div>

        <div className="relative group">
          <textarea
            className="w-full h-80 px-6 py-6 rounded-[2rem] border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-200 outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 placeholder:text-gray-400 group-hover:border-gray-300 resize-none font-mono text-xs leading-relaxed"
            placeholder="[Full Name]&#10;[Email] | [Phone]&#10;&#10;SUMMARY&#10;Dedicated software developer..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="absolute inset-0 pointer-events-none rounded-[2rem] group-focus-within:bg-primary-500/5 transition-colors"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {status === "success" && (
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm animate-fade-in">
              <CheckCircle2 size={18} />
              Resume data extracted successfully!
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm animate-fade-in">
              <AlertCircle size={18} />
              Failed to parse. Please check formatting.
            </div>
          )}
          {status === "idle" && (
            <div className="text-gray-400 text-xs font-medium">
              Supports text from PDF, Word, or LinkedIn.
            </div>
          )}

          <Button
            onClick={parseResume}
            disabled={!text || isParsing}
            variant="gradient"
            className="w-full sm:w-auto rounded-full px-10 h-14 text-lg shadow-xl shadow-primary-500/20"
          >
            {isParsing ? (
              <>
                <Loader2 className="animate-spin mr-3" size={20} />
                Extracting Data...
              </>
            ) : (
              <>
                <FileUp className="mr-3" size={20} />
                Smart Import
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex gap-6">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-blue-600 shrink-0">
            <Sparkles size={28} />
          </div>
          <div>
            <h4 className="text-blue-900 font-black tracking-tight mb-2">
              How it works
            </h4>
            <p className="text-sm text-blue-700/80 font-medium leading-relaxed">
              Our AI-powered engine scans your text for keywords and patterns to
              identify your experience, education, and skills.
              <span className="block mt-2 font-bold text-blue-800">
                Please review each section after importing to ensure accuracy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeImport;
