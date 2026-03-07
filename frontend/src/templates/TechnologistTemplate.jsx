import React from 'react';

const TechnologistTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills,
    projects, certifications, languages, customSections
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div 
      className="min-h-[297mm]"
      style={{
        fontFamily: 'monospace',
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        backgroundColor: '#0f172a',
        color: '#94a3b8'
      }}
    >
      <div className="grid grid-cols-12 min-h-[297mm] text-left">
        {/* Left Column - Tech Sidebar */}
        <div className="col-span-4 bg-[#1e293b] border-r border-slate-700 text-left" style={{ padding: settings.pageMargin }}>
          <div className="mb-10 text-left">
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase text-left">{personalInfo.fullName || 'Name'}</h1>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>
              {personalInfo.jobTitle || 'Tech Stack'}
            </p>
          </div>

          <div className="space-y-10 text-left">
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 flex items-center gap-2 text-left">
                <div className="w-2 h-2 rounded-full" style={{ background: theme.primary.includes('gradient') ? theme.primary : theme.primary }}></div>
                Skills.exe
              </h2>
              <div className="flex flex-wrap gap-2 text-left">
                {skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded font-mono text-[9px] font-bold uppercase text-left">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            {isVisible('languages') && languages?.length > 0 && (
              <section className="text-left">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 text-left">Linguistics.log</h2>
                <div className="space-y-2 text-[10px] font-mono opacity-80 uppercase tracking-tight text-left">
                  {languages.map((lang, i) => (
                    <p key={i}>{lang.name} :: {lang.level}</p>
                  ))}
                </div>
              </section>
            )}

            {isVisible('certifications') && certifications?.length > 0 && (
              <section className="text-left">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 text-left">Accreditations</h2>
                <div className="space-y-4 text-left">
                  {certifications.map((cert, i) => (
                    <div key={i} className="text-left">
                      <p className="text-[10px] font-black text-white leading-tight uppercase text-left">{cert.name}</p>
                      <p className="text-[9px] font-bold opacity-50 uppercase text-left mt-1">{cert.issuer}</p>
                      <p className="text-[8px] font-mono opacity-30 text-left uppercase">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 text-left">Network</h2>
              <div className="space-y-2 text-[10px] font-mono opacity-80 uppercase tracking-tight text-left">
                {personalInfo.email && <p className="break-all">EMAIL: {personalInfo.email}</p>}
                {personalInfo.phone && <p>PHONE: {personalInfo.phone}</p>}
                {personalInfo.address && <p>LOC: {personalInfo.address}</p>}
                {personalInfo.github && <p className="break-all text-white font-bold">GITHUB: {personalInfo.github}</p>}
                {personalInfo.linkedin && <p className="break-all">LINKEDIN: {personalInfo.linkedin}</p>}
                {personalInfo.website && <p className="break-all underline">HTTP: {personalInfo.website}</p>}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column - Terminal Style */}
        <div className="col-span-8 text-left" style={{ padding: settings.pageMargin }}>
          {summary && (
            <section className="mb-12 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 font-mono text-left">{`> system.init_profile()`}</h2>
              <p className="text-slate-300 font-medium leading-relaxed font-mono text-sm opacity-90 text-left whitespace-pre-wrap">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section className="mb-12 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-mono text-left">{`> career.get_log()`}</h2>
              <div className="space-y-10 text-left">
                {workExperience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-slate-800 text-left">
                    <div className="absolute w-2 h-2 bg-slate-700 rounded-full -left-[4.5px] top-1.5" style={{ background: theme.accent }}></div>
                    <div className="flex justify-between items-baseline mb-1 text-left">
                      <h3 className="text-white font-black font-mono tracking-tight uppercase text-left">{exp.position}</h3>
                      <span className="text-[9px] font-mono text-slate-500 font-bold uppercase text-left">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-left">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>@ {exp.company}</p>
                       {exp.location && <span className="text-[9px] font-mono opacity-30 text-left uppercase">LOC: {exp.location}</span>}
                    </div>
                    <p className="text-slate-400 text-xs font-mono leading-relaxed whitespace-pre-wrap opacity-80 text-left">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section className="mb-12 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-mono text-left">{`> projects.execute()`}</h2>
              <div className="space-y-10 text-left">
                {projects.map((project, i) => (
                  <div key={i} className="relative pl-6 border-l border-slate-800 text-left">
                    <div className="absolute w-2 h-2 bg-slate-700 rounded-full -left-[4.5px] top-1.5" style={{ background: theme.accent }}></div>
                    <div className="flex justify-between items-baseline mb-1 text-left">
                      <h3 className="text-white font-black font-mono tracking-tight uppercase text-left">{project.name}</h3>
                      <span className="text-[9px] font-mono text-primary-400 font-bold uppercase text-left">
                        {project.link && <a href={project.link} className="hover:underline">live</a>} // 
                        {project.github && <a href={project.github} className="hover:underline">src</a>}
                      </span>
                    </div>
                    {project.technologies && <p className="text-[10px] font-bold mb-2 uppercase tracking-widest opacity-50 text-left">ENV: {project.technologies}</p>}
                    <p className="text-slate-400 text-xs font-mono leading-relaxed text-left whitespace-pre-wrap">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section className="mb-12 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 font-mono text-left">{`> credentials.list()`}</h2>
              <div className="space-y-6 font-mono text-left">
                {education.map((edu, i) => (
                  <div key={i} className="text-left relative pl-6 border-l border-slate-800">
                    <div className="absolute w-2 h-2 bg-slate-700 rounded-full -left-[4.5px] top-1.5"></div>
                    <div className="flex justify-between items-baseline mb-1 text-left">
                       <p className="text-white font-black text-xs uppercase tracking-tight text-left">{edu.degree}</p>
                       <span className="text-[9px] font-mono text-slate-500 font-bold uppercase text-left">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    {edu.fieldOfStudy && <p className="text-[10px] font-bold uppercase mb-1 opacity-70 text-left" style={{ color: theme.accent }}>{edu.fieldOfStudy}</p>}
                    <p className="text-slate-500 text-[10px] font-bold uppercase text-left">{edu.school} {edu.location && `// ${edu.location}`}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('custom') && customSections?.map((section, i) => (
            <section key={i} className="mb-12 text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 font-mono text-left">{`> ${section.title.toLowerCase().replace(/\s/g, '_')}.read()`}</h2>
              <p className="text-slate-400 text-xs font-mono leading-relaxed whitespace-pre-wrap text-left">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologistTemplate;
