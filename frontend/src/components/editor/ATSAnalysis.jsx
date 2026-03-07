import React, { useState } from 'react';
import { ShieldCheck, Search, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import { analyzeATSKeywords } from '../../api/aiService';
import Button from '../ui/Button';
import AIAssistant from './AIAssistant';

const ATSAnalysis = () => {
  const { data, setAILoading, setAIError } = useResumeStore();
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!data.personalInfo.jobTitle) {
      setAIError('Please enter your target Job Title first.');
      return;
    }

    setAILoading(true);
    setAIError(null);
    try {
      const result = await analyzeATSKeywords(data);
      setAnalysis(result);
    } catch (err) {
      setAIError(err.message || 'ATS Analysis failed');
    } finally {
      setAILoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 text-left">
        <div className="text-left">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">ATS Optimization</h2>
          <p className="text-gray-500 font-medium text-left">Boost your chances of getting noticed by recruiters.</p>
        </div>
        <AIAssistant onAction={handleAnalyze} label="Run AI Scan" />
      </div>

      {!analysis ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2.5rem] bg-gray-50/30">
           <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm text-indigo-200 mb-6">
              <Search size={40} />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Ready for a scan?</h3>
           <p className="text-gray-500 font-medium text-center max-w-sm mb-8">
             Our AI will analyze your content against common Applicant Tracking System patterns for ${data.personalInfo.jobTitle || 'your role'}.
           </p>
           <Button onClick={handleAnalyze} variant="gradient" className="rounded-full px-10">
              Start AI Analysis
           </Button>
        </div>
      ) : (
        <div className="space-y-6 animate-slide-up">
           <div className="p-8 bg-white border border-indigo-100 rounded-[2.5rem] shadow-xl shadow-indigo-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                 <ShieldCheck size={40} className="text-emerald-500 opacity-20" />
              </div>
              
              <div className="space-y-8 relative z-10">
                 <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4 flex items-center gap-2">
                       <Sparkles size={14} /> Critical Keywords Missing
                    </h4>
                    <div className="flex flex-wrap gap-2">
                       {analysis.split('Tip:')[0].replace('Keywords:', '').split(',').map((kw, i) => (
                         <span key={i} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold border border-indigo-100">
                            {kw.trim()}
                         </span>
                       ))}
                    </div>
                 </div>

                 <div className="pt-6 border-t border-gray-50">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Improvement Tip</h4>
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                       <AlertCircle className="text-amber-500 shrink-0" size={20} />
                       <p className="text-sm text-gray-700 font-medium leading-relaxed italic">
                          {analysis.split('Tip:')[1]?.trim() || "Consider adding more quantifiable achievements."}
                       </p>
                    </div>
                 </div>

                 <button 
                   onClick={handleAnalyze}
                   className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-600 hover:text-primary-700 transition-colors"
                 >
                   <RefreshCw size={14} /> Re-scan Resume
                 </button>
              </div>
           </div>

           <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-emerald-900 font-bold mb-0.5">ATS Compatible</p>
                <p className="text-xs text-emerald-700 font-medium opacity-80 leading-relaxed">
                  Your selected template is already optimized for ATS readability.
                </p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ATSAnalysis;
