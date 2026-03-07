import React, { useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import AIAssistant, { AISuggestionCard } from './AIAssistant';
import { generateAISummary } from '../../api/aiService';

const Summary = () => {
  const { data, setResumeData, setAILoading, setAIError } = useResumeStore();
  const { summary, personalInfo, workExperience, skills } = data;
  const [suggestion, setSuggestion] = useState(null);

  const handleChange = (e) => {
    setResumeData({ summary: e.target.value });
  };

  const handleGenerateAI = async () => {
    if (!personalInfo.jobTitle) {
      setAIError('Please enter your Job Title first.');
      return;
    }
    
    setAILoading(true);
    setAIError(null);
    try {
      const result = await generateAISummary(personalInfo, workExperience, skills, data.education);
      setSuggestion(result);
    } catch (err) {
      setAIError(err.message || 'AI Generation failed');
    } finally {
      setAILoading(false);
    }
  };

  const applySuggestion = () => {
    setResumeData({ summary: suggestion });
    setSuggestion(null);
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 text-left">
        <div className="text-left">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">Professional Summary</h2>
          <p className="text-gray-500 font-medium text-left">Briefly describe your career goals and what makes you unique.</p>
        </div>
        <AIAssistant 
          onAction={handleGenerateAI} 
          label="Generate with AI" 
        />
      </div>

      <div className="space-y-6">
        {suggestion && (
          <AISuggestionCard 
            onAccept={applySuggestion} 
            onDecline={() => setSuggestion(null)}
          >
            {suggestion}
          </AISuggestionCard>
        )}

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
              AI can help you write this!
            </div>
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
