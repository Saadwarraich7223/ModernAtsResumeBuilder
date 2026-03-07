import React from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, Trash2, Layout, Sparkles, Type } from 'lucide-react';

const CustomSections = () => {
  const { data, updateSection } = useResumeStore();
  const customSections = data.customSections || [];

  const addSection = () => {
    const newSection = {
      title: 'New Section',
      content: '',
    };
    updateSection('customSections', [...customSections, newSection]);
  };

  const removeSection = (index) => {
    const updated = customSections.filter((_, i) => i !== index);
    updateSection('customSections', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = customSections.map((s, i) => i === index ? { ...s, [field]: value } : s);
    updateSection('customSections', updated);
  };

  const FieldLabel = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 mb-0.5">
      <Icon size={14} className="text-gray-400" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Custom Sections</h2>
          <p className="text-gray-500 font-medium">Add unique categories like Volunteering, Publications, or Awards.</p>
        </div>
        <Button onClick={addSection} variant="gradient" size="sm" className="rounded-full px-6 shadow-md">
          <Plus size={18} className="mr-2" /> Add Section
        </Button>
      </div>

      {customSections.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 group">
          <Layout size={32} className="text-gray-300 group-hover:text-primary-400 transition-colors mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Need more space?</h3>
          <Button onClick={addSection} variant="secondary" className="rounded-full px-8">Create Custom Section</Button>
        </div>
      ) : (
        <div className="space-y-10">
          {customSections.map((section, index) => (
            <div key={index} className="relative group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 transition-all duration-500 shadow-sm text-left">
              <button onClick={() => removeSection(index)} className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100">
                <Trash2 size={18} />
              </button>
              
              <div className="space-y-6">
                <div>
                   <FieldLabel icon={Type} label="Section Title" />
                   <Input 
                     value={section.title} 
                     onChange={(e) => handleChange(index, 'title', e.target.value)} 
                     placeholder="e.g. Volunteering, Publications"
                     className="text-lg font-black"
                   />
                </div>

                <div className="space-y-2">
                   <FieldLabel icon={Sparkles} label="Content" />
                   <textarea
                     className="w-full h-48 px-4 py-4 rounded-[1.5rem] border border-gray-200 bg-white text-gray-900 shadow-sm transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-100 resize-none font-medium leading-relaxed"
                     placeholder="List your items or write a detailed description..."
                     value={section.content}
                     onChange={(e) => handleChange(index, 'content', e.target.value)}
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSections;
