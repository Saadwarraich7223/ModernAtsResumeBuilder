import React from 'react';
import { FileText, Sparkles } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Summary = () => {
  const { data, setResumeData } = useResumeStore();
  const { summary } = data;

  const handleChange = (e) => {
    setResumeData({ summary: e.target.value });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Professional Summary</h2>
        <p className="text-gray-500 font-medium">Briefly describe your career goals and what makes you unique.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <FileText size={14} className="text-gray-400" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Bio</span>
        </div>
        
        <div className="relative group">
          <textarea
            className="w-full h-64 px-6 py-6 rounded-[2rem] border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-200 outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 placeholder:text-gray-400 group-hover:border-gray-300 resize-none font-medium leading-relaxed"
            placeholder="A results-driven Software Engineer with 5+ years of experience in building scalable web applications. Expert in React, Node.js, and cloud architecture..."
            value={summary || ''}
            onChange={handleChange}
          />
          <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-primary-600 group-focus-within:border-primary-100 transition-colors">
            <Sparkles size={12} />
            Keep it under 300 characters for best results
          </div>
        </div>
      </div>

      <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-600">
          <Sparkles size={24} />
        </div>
        <div>
          <p className="text-sm text-amber-900 font-bold mb-0.5">Quick Tip</p>
          <p className="text-xs text-amber-700 font-medium opacity-80 leading-relaxed">
            Focus on your top 2-3 achievements and how they can benefit your next employer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
