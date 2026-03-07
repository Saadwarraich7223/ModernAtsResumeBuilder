import React from 'react';
import { themes } from '../../themes/themeConfig';
import useResumeStore from '../../store/resumeStore';
import { CheckCircle2, Palette, Sparkles } from 'lucide-react';

const ThemeSelector = () => {
  const { settings, setSettings } = useResumeStore();

  const handleSelectTheme = (id) => {
    setSettings({ themeId: id });
  };

  const categories = [
    { id: 'light', name: 'Professional Light', icon: Sparkles },
    { id: 'minimal', name: 'Ultra Minimal', icon: Palette },
    { id: 'modern', name: 'Modern Gradient', icon: Palette },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {categories.map((cat) => (
        <div key={cat.id} className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
            <cat.icon size={16} className="text-primary-600" />
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">{cat.name}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {themes
              .filter((t) => t.category === cat.id)
              .map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme.id)}
                  className={`group relative flex flex-col p-3 rounded-2xl border-2 transition-all duration-300 ${
                    settings.themeId === theme.id
                      ? 'border-primary-600 bg-primary-50 shadow-md scale-105'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {/* Theme Preview Card */}
                  <div className="aspect-[4/3] rounded-xl mb-3 overflow-hidden border border-gray-100/50 shadow-inner flex flex-col">
                    <div 
                      className="h-1/3 w-full" 
                      style={{ background: theme.primary }}
                    ></div>
                    <div className="flex-1 bg-white p-2 flex flex-col gap-1.5">
                       <div className="h-1.5 w-3/4 rounded-full" style={{ backgroundColor: theme.heading }}></div>
                       <div className="h-1 w-full rounded-full" style={{ backgroundColor: theme.text, opacity: 0.3 }}></div>
                       <div className="h-1 w-5/6 rounded-full" style={{ backgroundColor: theme.text, opacity: 0.3 }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold truncate ${settings.themeId === theme.id ? 'text-primary-900' : 'text-gray-600'}`}>
                      {theme.name}
                    </span>
                    {settings.themeId === theme.id && (
                      <CheckCircle2 size={12} className="text-primary-600 shrink-0" />
                    )}
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
