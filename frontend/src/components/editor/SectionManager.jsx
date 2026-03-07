import React from 'react';
import { 
  FolderGit2, 
  Award, 
  Languages as LangIcon, 
  Layout, 
  CheckCircle2, 
  Circle,
  GripVertical
} from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const availableSections = [
  { id: 'projects', label: 'Projects', icon: FolderGit2, description: 'Showcase your work and technical demos.' },
  { id: 'certifications', label: 'Certifications', icon: Award, description: 'List your professional credentials.' },
  { id: 'languages', label: 'Languages', icon: LangIcon, description: 'Add your linguistic proficiencies.' },
  { id: 'custom', label: 'Custom Sections', icon: Layout, description: 'Add volunteering, awards, or other info.' },
];

const SectionManager = () => {
  const { settings, setSettings } = useResumeStore();
  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];

  const toggleSection = (id) => {
    const updated = visibleSections.includes(id)
      ? visibleSections.filter(s => s !== id)
      : [...visibleSections, id];
    setSettings({ visibleSections: updated });
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Section Management</h2>
        <p className="text-gray-500 font-medium">Control which sections appear in your editor and resume.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {availableSections.map((section) => {
          const isVisible = visibleSections.includes(section.id);
          return (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all duration-300 text-left ${
                isVisible
                  ? 'border-primary-600 bg-primary-50/50 shadow-md'
                  : 'border-gray-100 hover:border-gray-200 bg-white opacity-60'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                  isVisible ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  <section.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{section.label}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">{section.description}</p>
                </div>
              </div>
              <div className={isVisible ? 'text-primary-600' : 'text-gray-300'}>
                {isVisible ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-indigo-600">
          <GripVertical size={24} />
        </div>
        <div>
          <p className="text-sm text-indigo-900 font-bold mb-0.5">Customizable Layout</p>
          <p className="text-xs text-indigo-700 font-medium opacity-80 leading-relaxed">
            Turn sections on or off to focus on what matters most for your target role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionManager;
