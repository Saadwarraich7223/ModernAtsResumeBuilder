import React from 'react';
import useResumeStore from '../../store/resumeStore';
import { 
  Type, 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  MoveHorizontal, 
  AlignLeft, 
  FileStack, 
  RefreshCcw,
  AlertTriangle
} from 'lucide-react';
import Button from '../ui/Button';

const fonts = [
  { id: 'Inter', name: 'Inter (Sans)' },
  { id: 'Roboto', name: 'Roboto' },
  { id: 'Libre Baskerville', name: 'Libre Baskerville (Serif)' },
  { id: 'Playfair Display', name: 'Playfair Display' },
  { id: 'Montserrat', name: 'Montserrat' },
];

const fontSizes = [
  { id: '10px', name: 'Small' },
  { id: '12px', name: 'Medium' },
  { id: '14px', name: 'Large' },
];

const lineHeights = [
  { id: '1.2', name: 'Tight' },
  { id: '1.5', name: 'Normal' },
  { id: '1.8', name: 'Relaxed' },
];

const paperSizes = [
  { id: 'A4', name: 'A4 (Standard)' },
  { id: 'LETTER', name: 'US Letter' },
];

const pageMargins = [
  { id: '10mm', name: 'Narrow' },
  { id: '20mm', name: 'Standard' },
  { id: '30mm', name: 'Wide' },
];

const colors = [
  { id: '#000000', name: 'Default Black' },
  { id: '#1a365d', name: 'Navy Blue' },
  { id: '#2d3748', name: 'Dark Slate' },
  { id: '#38a169', name: 'Forest Green' },
  { id: '#e53e3e', name: 'Professional Red' },
  { id: '#3182ce', name: 'Royal Blue' },
];

const Settings = () => {
  const { settings, setSettings, resetResume } = useResumeStore();

  const handleUpdate = (key, value) => {
    setSettings({ [key]: value });
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6">
      <Icon size={18} className="text-primary-600" />
      <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">{title}</h3>
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Global Settings</h2>
        <p className="text-gray-500 font-medium">Fine-tune your resume's visual identity and layout.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Typography */}
        <div className="space-y-8">
          <div>
            <SectionHeader icon={Type} title="Typography" />
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Font Family</label>
              <div className="grid grid-cols-1 gap-2">
                {fonts.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => handleUpdate('fontFamily', font.id)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border-2 transition-all duration-200 ${
                      settings.fontFamily === font.id
                        ? 'border-primary-600 bg-primary-50 text-primary-900 shadow-sm'
                        : 'border-gray-100 hover:border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: font.id }}
                  >
                    <span className="font-bold">{font.name}</span>
                    {settings.fontFamily === font.id && <CheckCircle2 size={16} className="text-primary-600" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Font Size</label>
              <div className="flex flex-col gap-2">
                {fontSizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => handleUpdate('fontSize', size.id)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                      settings.fontSize === size.id
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-100 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Line Height</label>
              <div className="flex flex-col gap-2">
                {lineHeights.map((lh) => (
                  <button
                    key={lh.id}
                    onClick={() => handleUpdate('lineHeight', lh.id)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                      settings.lineHeight === lh.id
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-100 text-gray-500 hover:bg-gray-50'
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
        <div className="space-y-8">
          <div>
            <SectionHeader icon={FileStack} title="Page Layout" />
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Paper Size</label>
                  <div className="flex flex-col gap-2">
                    {paperSizes.map((ps) => (
                      <button
                        key={ps.id}
                        onClick={() => handleUpdate('paperSize', ps.id)}
                        className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                          settings.paperSize === ps.id
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-100 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {ps.name}
                      </button>
                    ))}
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Page Margins</label>
                  <div className="flex flex-col gap-2">
                    {pageMargins.map((pm) => (
                      <button
                        key={pm.id}
                        onClick={() => handleUpdate('pageMargin', pm.id)}
                        className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                          settings.pageMargin === pm.id
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-100 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {pm.name}
                      </button>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div>
            <SectionHeader icon={Palette} title="Colors" />
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Accent Color</label>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleUpdate('colorScheme', color.id)}
                    className={`group relative aspect-square rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                      settings.colorScheme === color.id
                        ? 'border-primary-600 ring-4 ring-primary-100 shadow-lg scale-105'
                        : 'border-transparent hover:border-gray-200 shadow-sm'
                    }`}
                    style={{ backgroundColor: color.id }}
                    title={color.name}
                  >
                    {settings.colorScheme === color.id && (
                      <CheckCircle2 size={24} className="text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-8 border-t border-gray-100">
             <div className="p-6 bg-red-50 rounded-3xl border border-red-100 space-y-4">
                <div className="flex items-center gap-2 text-red-600">
                   <AlertTriangle size={18} />
                   <h4 className="text-sm font-black uppercase tracking-widest">Danger Zone</h4>
                </div>
                <p className="text-xs font-bold text-red-700/70 leading-relaxed">
                   Permanently delete all data in this resume and start from scratch. This action cannot be undone.
                </p>
                <Button 
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset your resume? All data will be lost.')) {
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
