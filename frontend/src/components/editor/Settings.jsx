import React from "react";
import useResumeStore from "../../store/resumeStore";
import {
  Type,
  Palette,
  Sparkles,
  CheckCircle2,
  FileStack,
  RefreshCcw,
  AlertTriangle,
  Layout,
} from "lucide-react";
import Button from "../ui/Button";
import ThemeSelector from "./ThemeSelector";

const fonts = [
  { id: "Inter", name: "Inter (Sans)" },
  { id: "Roboto", name: "Roboto" },
  { id: "Libre Baskerville", name: "Libre Baskerville (Serif)" },
  { id: "Playfair Display", name: "Playfair Display" },
  { id: "Montserrat", name: "Montserrat" },
];

const fontSizes = [
  { id: "10px", name: "Small" },
  { id: "12px", name: "Medium" },
  { id: "14px", name: "Large" },
];

const lineHeights = [
  { id: "1.2", name: "Tight" },
  { id: "1.5", name: "Normal" },
  { id: "1.8", name: "Relaxed" },
];

const paperSizes = [
  { id: "A4", name: "A4 (Standard)" },
  { id: "LETTER", name: "US Letter" },
];

const pageMargins = [
  { id: "10mm", name: "Narrow" },
  { id: "12mm", name: "Standard" },
  { id: "15mm", name: "Wide" },
];

const Settings = () => {
  const { settings, setSettings, resetResume } = useResumeStore();

  const handleUpdate = (key, value) => {
    setSettings({ [key]: value });
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6">
      <Icon size={18} className="text-primary-600" />
      <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">
        {title}
      </h3>
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <div className="border-b pb-6 text-left">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">
          Global Settings
        </h2>
        <p className="text-gray-500 font-medium text-left">
          Fine-tune your resume's visual identity and layout.
        </p>
      </div>

      {/* Theme Selection */}
      <section>
        <SectionHeader icon={Layout} title="Visual Theme" />
        <ThemeSelector />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {/* Typography */}
        <div className="space-y-8 text-left">
          <div className="text-left">
            <SectionHeader icon={Type} title="Typography" />
            <div className="space-y-4 text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                Font Family
              </label>
              <div className="grid grid-cols-1 gap-2 text-left">
                {fonts.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => handleUpdate("fontFamily", font.id)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border-2 transition-all duration-200 text-left ${
                      settings.fontFamily === font.id
                        ? "border-primary-600 bg-primary-50 text-primary-900 shadow-sm"
                        : "border-gray-100 hover:border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    style={{ fontFamily: font.id }}
                  >
                    <span className="font-bold text-left">{font.name}</span>
                    {settings.fontFamily === font.id && (
                      <CheckCircle2
                        size={16}
                        className="text-primary-600 shrink-0"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-left">
            <div className="space-y-4 text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                Font Size
              </label>
              <div className="flex flex-col gap-2 text-left">
                {fontSizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => handleUpdate("fontSize", size.id)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                      settings.fontSize === size.id
                        ? "border-primary-600 bg-primary-50 text-primary-600"
                        : "border-gray-100 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                Line Height
              </label>
              <div className="flex flex-col gap-2 text-left">
                {lineHeights.map((lh) => (
                  <button
                    key={lh.id}
                    onClick={() => handleUpdate("lineHeight", lh.id)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                      settings.lineHeight === lh.id
                        ? "border-primary-600 bg-primary-50 text-primary-600"
                        : "border-gray-100 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {lh.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Layout & Page */}
        <div className="space-y-8 text-left">
          <div className="text-left">
            <SectionHeader icon={FileStack} title="Page Layout" />
            <div className="grid grid-cols-2 gap-6 text-left">
              <div className="space-y-4 text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                  Paper Size
                </label>
                <div className="flex flex-col gap-2 text-left">
                  {paperSizes.map((ps) => (
                    <button
                      key={ps.id}
                      onClick={() => handleUpdate("paperSize", ps.id)}
                      className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                        settings.paperSize === ps.id
                          ? "border-primary-600 bg-primary-50 text-primary-600"
                          : "border-gray-100 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {ps.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-left">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                  Page Margins
                </label>
                <div className="flex flex-col gap-2 text-left">
                  {pageMargins.map((pm) => (
                    <button
                      key={pm.id}
                      onClick={() => handleUpdate("pageMargin", pm.id)}
                      className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                        settings.pageMargin === pm.id
                          ? "border-primary-600 bg-primary-50 text-primary-600"
                          : "border-gray-100 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {pm.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 col-span-2  bg-indigo-50 rounded-[2rem] border border-indigo-100 relative overflow-hidden group mt-8 text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 space-y-4 text-indigo-900 text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-indigo-600 mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="font-black tracking-tight text-left">
                Design Logic
              </h4>
              <p className="text-sm font-medium leading-relaxed opacity-80 text-left">
                Our theme system ensures that your resume remains ATS-readable
                while looking visually stunning.
              </p>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-8 border-t border-gray-100 text-left">
            <div className="p-6 bg-red-50 rounded-3xl border border-red-100 space-y-4 text-left">
              <div className="flex items-center gap-2 text-red-600 text-left">
                <AlertTriangle size={18} />
                <h4 className="text-sm font-black uppercase tracking-widest text-left">
                  Danger Zone
                </h4>
              </div>
              <p className="text-xs font-bold text-red-700/70 leading-relaxed text-left">
                Permanently delete all data in this resume and start from
                scratch.
              </p>
              <Button
                onClick={() => {
                  if (window.confirm("Are you sure you want to reset?")) {
                    resetResume();
                  }
                }}
                variant="danger"
                className="w-full rounded-xl py-3 h-auto"
              >
                <RefreshCcw size={16} className="mr-2" /> Reset All Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
