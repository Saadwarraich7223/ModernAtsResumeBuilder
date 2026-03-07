import React from 'react';
import { Sparkles, Loader2, AlertCircle, Wand2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const AIAssistant = ({ onAction, label = "Magic Fix" }) => {
  const { aiLoading, aiError } = useResumeStore();

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={onAction}
        disabled={aiLoading}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl border border-indigo-100 text-xs font-black uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm hover:shadow-indigo-200/50"
      >
        {aiLoading ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <Wand2 size={14} className="group-hover:rotate-12 transition-transform" />
        )}
        {aiLoading ? 'Working...' : label}
      </button>
      
      {aiError && (
        <div className="flex items-center gap-2 text-[10px] text-red-500 font-bold animate-fade-in">
          <AlertCircle size={12} />
          {aiError}
        </div>
      )}
    </div>
  );
};

export const AISuggestionCard = ({ children, onAccept, onDecline }) => (
  <div className="p-4 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 shadow-sm animate-slide-up mb-4">
    <div className="flex items-center gap-2 mb-3 text-indigo-600">
      <Sparkles size={16} />
      <span className="text-[10px] font-black uppercase tracking-widest">AI Suggestion</span>
    </div>
    <div className="text-sm text-gray-700 mb-4 font-medium leading-relaxed italic">
      "{children}"
    </div>
    <div className="flex gap-2">
      <button 
        onClick={onAccept}
        className="px-3 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Apply Suggestion
      </button>
      <button 
        onClick={onDecline}
        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-lg hover:bg-gray-50 transition-colors"
      >
        Dismiss
      </button>
    </div>
  </div>
);

export default AIAssistant;
