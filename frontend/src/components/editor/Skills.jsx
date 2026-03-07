import React, { useState } from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, X, Code, Sparkles, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const { data, updateSection } = useResumeStore();
  const skills = data.skills || [];
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (e) => {
    e?.preventDefault();
    if (!newSkill.trim()) return;
    
    updateSection('skills', [...skills, { name: newSkill.trim(), level: 'Intermediate' }]);
    setNewSkill('');
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    updateSection('skills', updated);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Skills</h2>
        <p className="text-gray-500 font-medium">Add your technical, professional, and soft skills.</p>
      </div>
      
      <div className="p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100 border-dashed">
        <form onSubmit={addSkill} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="e.g. React, Python, UI/UX Design..."
              className="bg-white"
            />
          </div>
          <Button type="submit" variant="gradient" className="rounded-xl px-8 h-[52px]">
            <Plus size={20} className="mr-2" /> Add Skill
          </Button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <BrainCircuit size={16} className="text-primary-600" />
          <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Added Skills</h3>
        </div>

        {skills.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-6 border border-gray-100 rounded-[2rem] bg-white italic text-gray-400 font-medium">
             No skills added yet. Start typing above.
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-700 pl-4 pr-2 py-2 rounded-2xl border border-gray-100 hover:border-primary-100 shadow-sm transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-bold text-sm tracking-tight">{skill.name}</span>
                <button 
                  onClick={() => removeSkill(index)}
                  className="w-6 h-6 rounded-lg flex items-center justify-center bg-gray-50 text-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-indigo-600">
          <Sparkles size={24} />
        </div>
        <div>
          <p className="text-sm text-indigo-900 font-bold mb-0.5">Top Skills First</p>
          <p className="text-xs text-indigo-700 font-medium opacity-80 leading-relaxed">
            List your most important skills at the top. Recruiters often scan this section first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
