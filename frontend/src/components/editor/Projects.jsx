import React, { useState } from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, Trash2, Globe, Github, Sparkles, FolderGit2 } from 'lucide-react';
import AIAssistant, { AISuggestionCard } from './AIAssistant';
import { improveExperienceBullet } from '../../api/aiService';

const Projects = () => {
  const { data, updateSection, setAILoading, setAIError } = useResumeStore();
  const projects = data.projects || [];
  const [activeAIIndex, setActiveAIIndex] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

  const addProject = () => {
    const newProject = {
      name: '',
      description: '',
      link: '',
      github: '',
      technologies: '',
    };
    updateSection('projects', [...projects, newProject]);
  };

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    updateSection('projects', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = projects.map((p, i) => i === index ? { ...p, [field]: value } : p);
    updateSection('projects', updated);
  };

  const handleImproveAI = async (index) => {
    const project = projects[index];
    if (!project.description || project.description.length < 10) {
      setAIError('Please write a short description first.');
      return;
    }

    setAILoading(true);
    setAIError(null);
    setActiveAIIndex(index);
    try {
      const result = await improveExperienceBullet(project.description, `Project: ${project.name}`);
      setSuggestion(result);
    } catch (err) {
      setAIError(err.message || 'AI Improvement failed');
    } finally {
      setAILoading(false);
    }
  };

  const applySuggestion = () => {
    handleChange(activeAIIndex, 'description', suggestion);
    setSuggestion(null);
    setActiveAIIndex(null);
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
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Personal Projects</h2>
          <p className="text-gray-500 font-medium">Showcase your side projects and technical contributions.</p>
        </div>
        <Button onClick={addProject} variant="gradient" size="sm" className="rounded-full px-6 shadow-md">
          <Plus size={18} className="mr-2" /> Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 group">
          <FolderGit2 size={32} className="text-gray-300 group-hover:text-primary-400 transition-colors mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-6">No projects added yet</h3>
          <Button onClick={addProject} variant="secondary" className="rounded-full px-8">Add Your First Project</Button>
        </div>
      ) : (
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="relative group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 transition-all duration-500 shadow-sm">
              <button onClick={() => removeProject(index)} className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100">
                <Trash2 size={18} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="md:col-span-2">
                   <FieldLabel icon={FolderGit2} label="Project Name" />
                   <Input value={project.name} onChange={(e) => handleChange(index, 'name', e.target.value)} placeholder="e.g. AI Resume Builder" />
                </div>
                <div>
                   <FieldLabel icon={Globe} label="Live Demo URL" />
                   <Input value={project.link} onChange={(e) => handleChange(index, 'link', e.target.value)} placeholder="https://..." />
                </div>
                <div>
                   <FieldLabel icon={Github} label="GitHub Link" />
                   <Input value={project.github} onChange={(e) => handleChange(index, 'github', e.target.value)} placeholder="github.com/..." />
                </div>
                <div className="md:col-span-2">
                   <FieldLabel icon={Sparkles} label="Technologies Used" />
                   <Input value={project.technologies} onChange={(e) => handleChange(index, 'technologies', e.target.value)} placeholder="e.g. React, Node.js, MongoDB" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <FieldLabel icon={Sparkles} label="Description & Impact" />
                   <AIAssistant onAction={() => handleImproveAI(index)} label="Improve with AI" />
                </div>

                {suggestion && activeAIIndex === index && (
                  <AISuggestionCard onAccept={applySuggestion} onDecline={() => setSuggestion(null)}>
                    {suggestion}
                  </AISuggestionCard>
                )}

                <textarea
                  className="w-full h-32 px-4 py-4 rounded-[1.5rem] border border-gray-200 bg-white text-gray-900 shadow-sm transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-100 resize-none font-medium leading-relaxed"
                  placeholder="Describe the problem you solved and the tools you used..."
                  value={project.description}
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

export default Projects;
