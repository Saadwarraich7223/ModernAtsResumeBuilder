import React, { useState } from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, X, Sparkles, BrainCircuit } from 'lucide-react';
import AIAssistant from './AIAssistant';
import { suggestSkills } from '../../api/aiService';

const Skills = () => {
  const { data, updateSection, setAILoading, setAIError } = useResumeStore();
  const skills = data.skills || [];
  const [newSkill, setNewSkill] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState([]);

  const addSkill = (name) => {
    const skillName = typeof name === 'string' ? name.trim() : newSkill.trim();
    if (!skillName) return;
    if (skills.some(s => s.name.toLowerCase() === skillName.toLowerCase())) return;
    
    updateSection('skills', [...skills, { name: skillName, level: 'Intermediate' }]);
    setNewSkill('');
    if (typeof name === 'string') {
      setSuggestedSkills(prev => prev.filter(s => s.toLowerCase() !== name.toLowerCase()));
    }
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    updateSection('skills', updated);
  };

  const handleSuggestAI = async () => {
    if (!data.personalInfo.jobTitle && skills.length === 0) {
      setAIError('Please enter a job title or some skills first.');
      return;
    }

    setAILoading(true);
    setAIError(null);
    try {
      const suggestions = await suggestSkills(data.personalInfo.jobTitle, skills);
      setSuggestedSkills(suggestions);
    } catch (err) {
      setAIError(err.message || 'AI Suggestions failed');
    } finally {
      setAILoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 text-left">
        <div className="text-left">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">Skills</h2>
          <p className="text-gray-500 font-medium text-left">Add your technical, professional, and soft skills.</p>
        </div>
        <AIAssistant onAction={handleSuggestAI} label="Suggest Skills" />
      </div>
      
      <div className="p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100 border-dashed text-left">
        <form onSubmit={(e) => { e.preventDefault(); addSkill(); }} className="flex flex-col sm:flex-row gap-4">
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

      {suggestedSkills.length > 0 && (
        <div className="space-y-4 animate-slide-up text-left">
           <div className="flex items-center gap-2 text-indigo-600">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest text-left">AI Recommended for you</span>
           </div>
           <div className="flex flex-wrap gap-2 text-left">
              {suggestedSkills.map((s, i) => (
                <button
                  key={i}
                  onClick={() => addSkill(s)}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors flex items-center gap-1"
                >
                  <Plus size={12} /> {s}
                </button>
              ))}
              <button 
                onClick={() => setSuggestedSkills([])}
                className="px-3 py-1.5 text-gray-400 text-xs font-bold hover:text-gray-600"
              >
                Clear
              </button>
           </div>
        </div>
      )}

      <div className="space-y-6 text-left">
        <div className="flex items-center gap-2 text-left">
          <BrainCircuit size={16} className="text-primary-600 text-left" />
          <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest text-left">Added Skills</h3>
        </div>

        {skills.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-6 border border-gray-100 rounded-[2rem] bg-white italic text-gray-400 font-medium">
             No skills added yet. Start typing above or use AI suggestions.
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 text-left">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-700 pl-4 pr-2 py-2 rounded-2xl border border-gray-100 hover:border-primary-100 shadow-sm transition-all duration-300 animate-slide-up text-left"
              >
                <span className="font-bold text-sm tracking-tight text-left">{skill.name}</span>
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
    </div>
  );
};

export default Skills;
