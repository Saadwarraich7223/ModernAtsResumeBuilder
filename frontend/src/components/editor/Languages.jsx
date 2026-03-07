import React, { useState } from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, X, Globe2, Sparkles, Languages as LangIcon } from 'lucide-react';

const proficiencyLevels = ['Native', 'Fluent', 'Professional', 'Intermediate', 'Beginner'];

const Languages = () => {
  const { data, updateSection } = useResumeStore();
  const languages = data.languages || [];
  const [newName, setNewName] = useState('');
  const [newLevel, setNewLevel] = useState('Professional');

  const addLanguage = (e) => {
    e?.preventDefault();
    if (!newName.trim()) return;
    updateSection('languages', [...languages, { name: newName.trim(), level: newLevel }]);
    setNewName('');
  };

  const removeLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    updateSection('languages', updated);
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Languages</h2>
        <p className="text-gray-500 font-medium">Add languages you speak and your proficiency level.</p>
      </div>
      
      <div className="p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100 border-dashed">
        <form onSubmit={addLanguage} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Language</label>
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. English, Spanish, German"
              className="bg-white"
            />
          </div>
          <div className="w-full md:w-48">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Proficiency</label>
            <select 
              value={newLevel}
              onChange={(e) => setNewLevel(e.target.value)}
              className="w-full h-[52px] rounded-xl border border-gray-200 bg-white px-4 text-sm font-bold text-gray-700 outline-none focus:ring-4 focus:ring-primary-100 transition-all"
            >
              {proficiencyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <Button type="submit" variant="gradient" className="rounded-xl px-8 h-[52px] w-full md:w-auto">
            <Plus size={20} className="mr-2" /> Add
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((lang, index) => (
          <div 
            key={index}
            className="group flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 hover:border-primary-100 shadow-sm transition-all duration-300"
          >
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Globe2 size={20} />
               </div>
               <div>
                  <p className="font-bold text-gray-900 leading-tight">{lang.name}</p>
                  <p className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">{lang.level}</p>
               </div>
            </div>
            <button 
              onClick={() => removeLanguage(index)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {languages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 border border-gray-100 rounded-[2rem] bg-white italic text-gray-400 font-medium">
           No languages added yet.
        </div>
      )}
    </div>
  );
};

export default Languages;
