import React from 'react';

const TechnologistTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="min-h-[297mm]"
      style={{
        fontFamily: 'monospace', // Tech template fixed to mono
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        backgroundColor: '#0f172a', // Dark background fixed for this template
        color: '#94a3b8'
      }}
    >
      <div className="grid grid-cols-12 min-h-[297mm]">
        {/* Left Column - Tech Sidebar */}
        <div className="col-span-4 bg-[#1e293b] border-r border-slate-700" style={{ padding: settings.pageMargin }}>
          <div className="mb-10">
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase">{personalInfo.fullName || 'Name'}</h1>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>
              {personalInfo.jobTitle || 'Tech Stack'}
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: theme.primary.includes('gradient') ? theme.primary : theme.primary }}></div>
                Skills.exe
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded font-mono text-[9px] font-bold uppercase">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Network</h2>
              <div className="space-y-2 text-[10px] font-mono opacity-80 uppercase tracking-tight">
                {personalInfo.email && <p className="break-all">EMAIL: {personalInfo.email}</p>}
                {personalInfo.github && <p className="break-all text-white font-bold">GITHUB: {personalInfo.github}</p>}
                {personalInfo.linkedin && <p className="break-all">LINKEDIN: {personalInfo.linkedin}</p>}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column - Terminal Style */}
        <div className="col-span-8" style={{ padding: settings.pageMargin }}>
          {summary && (
            <section className="mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 font-mono">{`> system.init_profile()`}</h2>
              <p className="text-slate-300 font-medium leading-relaxed font-mono text-sm opacity-90">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-mono">{`> career.get_log()`}</h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-slate-800">
                    <div className="absolute w-2 h-2 bg-slate-700 rounded-full -left-[4.5px] top-1.5" style={{ background: theme.accent }}></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-white font-black font-mono tracking-tight uppercase">{exp.position}</h3>
                      <span className="text-[9px] font-mono text-slate-500 font-bold uppercase">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="text-[10px] font-bold mb-4 uppercase tracking-widest" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>@ {exp.company}</p>
                    <p className="text-slate-400 text-xs font-mono leading-relaxed whitespace-pre-wrap opacity-80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 font-mono">{`> credentials.list()`}</h2>
              <div className="space-y-4 font-mono">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-white font-black text-xs uppercase tracking-tight">{edu.degree}</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">{edu.school} // {edu.endDate}</p>
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

export default TechnologistTemplate;
