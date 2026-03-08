import React from 'react';

const CyberEngineerTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, customSections } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const accentColor = theme.id === 'tech-1' ? '#38bdf8' : theme.primary.includes('gradient') ? '#818cf8' : theme.primary;

  return (
    <div 
      className="min-h-[297mm] text-left relative overflow-hidden"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: settings.fontSize,
        lineHeight: '1.4',
        padding: settings.pageMargin,
        backgroundColor: '#0a0a0c',
        color: '#d1d5db'
      }}
    >
      {/* Decorative Cyber Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10"></div>

      {/* Header */}
      <header className="mb-12 relative">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-2">
              System.User_Identity
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              {personalInfo.fullName || 'UNNAMED_ENTITY'}
            </h1>
            <p className="text-xl font-bold tracking-widest uppercase" style={{ color: accentColor }}>
              {`// ${personalInfo.jobTitle || 'TECH_SPECIALIST'}`}
            </p>
          </div>
          
          <div className="text-right space-y-2 pt-4">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider space-y-1">
                {personalInfo.email && <p className="flex items-center justify-end gap-2">EMAIL: <span className="text-white">{personalInfo.email}</span></p>}
                {personalInfo.phone && <p className="flex items-center justify-end gap-2">COMM: <span className="text-white">{personalInfo.phone}</span></p>}
                {personalInfo.github && <p className="flex items-center justify-end gap-2">SRC: <span className="text-white">{personalInfo.github}</span></p>}
                {personalInfo.linkedin && <p className="flex items-center justify-end gap-2">NET: <span className="text-white">{personalInfo.linkedin}</span></p>}
             </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 space-y-12">
          {summary && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6 flex items-center gap-4">
                01. Core_Protocol
                <div className="h-px flex-1 bg-white/10"></div>
              </h2>
              <p className="text-sm font-medium leading-relaxed opacity-90 border-l-2 border-indigo-500/30 pl-6 py-1">
                {summary}
              </p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8 flex items-center gap-4">
                02. Deployment_History
                <div className="h-px flex-1 bg-white/10"></div>
              </h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="relative group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black text-white uppercase italic tracking-tight">{exp.position}</h3>
                      <span className="text-[10px] font-bold text-slate-500 tracking-widest">
                        [{exp.startDate} - {exp.current ? 'ACTIVE' : exp.endDate}]
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>@ {exp.company}</span>
                      <div className="w-1 h-1 rounded-full bg-white/20"></div>
                      <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{exp.location}</span>
                    </div>
                    <div className="text-xs leading-relaxed opacity-70 whitespace-pre-wrap font-medium">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8 flex items-center gap-4">
                03. Side_Executions
                <div className="h-px flex-1 bg-white/10"></div>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {projects.map((project, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-sm group hover:border-indigo-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-black text-white uppercase tracking-tight">{project.name}</h3>
                      <div className="flex gap-2">
                         {project.github && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                         {project.link && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                      </div>
                    </div>
                    {project.technologies && <p className="text-[9px] font-bold text-indigo-400 mb-3 uppercase tracking-tighter">[{project.technologies}]</p>}
                    <p className="text-[11px] leading-snug opacity-60 line-clamp-3">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-12">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Tech_Stack</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest hover:text-white hover:border-white/20 cursor-default transition-all">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {education?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[11px] font-black text-white uppercase tracking-tight">{edu.degree}</p>
                    <p className="text-[10px] font-bold opacity-60 uppercase">{edu.school}</p>
                    <p className="text-[9px] font-bold tracking-widest text-slate-600 uppercase italic">Class of {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Linguistics</h2>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tight mb-1">
                      <span>{lang.name}</span>
                      <span className="opacity-40">{lang.level}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                       <div className="h-full bg-indigo-500/40" style={{ width: lang.level.toLowerCase().includes('expert') ? '100%' : lang.level.toLowerCase().includes('advanced') ? '75%' : '50%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CyberEngineerTemplate;
