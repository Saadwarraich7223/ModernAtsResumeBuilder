import React from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, Trash2, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

const Experience = () => {
  const { data, updateSection } = useResumeStore();
  const experiences = data.workExperience || [];

  const addExperience = () => {
    const newExp = {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    updateSection('workExperience', [...experiences, newExp]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    updateSection('workExperience', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    updateSection('workExperience', updated);
  };

  const FieldLabel = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 mb-0.5">
      <Icon size={14} className="text-gray-400" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Work Experience</h2>
          <p className="text-gray-500 font-medium">Highlight your professional journey and key achievements.</p>
        </div>
        <Button 
          onClick={addExperience} 
          variant="gradient" 
          size="sm" 
          className="rounded-full px-6 py-2.5 h-auto shadow-md hover:scale-105 transition-transform"
        >
          <Plus size={18} className="mr-2" /> Add Experience
        </Button>
      </div>

      {experiences.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 group hover:border-primary-200 transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gray-300 group-hover:text-primary-400 transition-colors mb-4">
             <Briefcase size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">No experience added</h3>
          <p className="text-gray-500 font-medium text-center max-w-xs mb-6">
            Start by adding your most recent role to showcase your expertise.
          </p>
          <Button onClick={addExperience} variant="secondary" className="rounded-full px-8">
            Add Your First Role
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] transition-all duration-500">
              <button 
                onClick={() => removeExperience(index)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                title="Remove Entry"
              >
                <Trash2 size={18} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <FieldLabel icon={Briefcase} label="Company Name" />
                   <Input
                     value={exp.company}
                     onChange={(e) => handleChange(index, 'company', e.target.value)}
                     placeholder="e.g. Google"
                   />
                </div>
                <div>
                   <FieldLabel icon={Sparkles} label="Role / Position" />
                   <Input
                     value={exp.position}
                     onChange={(e) => handleChange(index, 'position', e.target.value)}
                     placeholder="e.g. Senior Product Designer"
                   />
                </div>
                <div>
                   <FieldLabel icon={MapPin} label="Location" />
                   <Input
                     value={exp.location}
                     onChange={(e) => handleChange(index, 'location', e.target.value)}
                     placeholder="e.g. Mountain View, CA"
                   />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <FieldLabel icon={Calendar} label="Start Date" />
                      <Input
                        value={exp.startDate}
                        onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                        placeholder="e.g. Jan 2020"
                      />
                   </div>
                   <div>
                      <FieldLabel icon={Calendar} label="End Date" />
                      <Input
                        value={exp.endDate}
                        onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                        placeholder="e.g. Present"
                        disabled={exp.current}
                      />
                   </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-8 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50 w-fit">
                <div className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    id={`current-${index}`}
                    checked={exp.current}
                    onChange={(e) => handleChange(index, 'current', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  <label htmlFor={`current-${index}`} className="ml-3 text-sm font-bold text-gray-700 tracking-tight cursor-pointer">
                    I currently work here
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <FieldLabel icon={Sparkles} label="Key Achievements & Responsibilities" />
                <textarea
                  className="w-full h-48 px-4 py-4 rounded-[1.5rem] border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-200 outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 placeholder:text-gray-400 group-hover:border-gray-300 resize-none font-medium leading-relaxed"
                  placeholder="• Led the redesign of our core product dashboard...&#10;• Increased user engagement by 40% within 3 months..."
                  value={exp.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
