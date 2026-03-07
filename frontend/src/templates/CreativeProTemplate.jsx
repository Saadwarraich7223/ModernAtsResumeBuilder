import React from 'react';

const CreativeProTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills, 
    projects, certifications, languages, customSections 
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const accentColor = theme.primary.includes('gradient') ? theme.accent : theme.primary;

  return (
    <div 
      className="min-h-[297mm] bg-white flex flex-col"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        color: theme.text
      }}
    >
      {/* Header with Background Pattern */}
      <header className="p-12 relative overflow-hidden text-left" style={{ backgroundColor: theme.secondary + '40' }}>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: accentColor }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2" style={{ color: theme.heading }}>
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-xl font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-widest opacity-60">
            {personalInfo.email && <span className="flex items-center gap-2 underline">{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.address && <span>{personalInfo.address}</span>}
            {personalInfo.website && <span className="underline">{personalInfo.website}</span>}
          </div>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-0">
        {/* Left Column - Main Content */}
        <div className="col-span-8 p-12 space-y-12 border-r border-gray-100">
          {summary && (
            <section className="text-left">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-4" style={{ color: theme.heading }}>
                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                Brief
              </h2>
              <p className="text-sm font-medium leading-relaxed opacity-90">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section className="text-left">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4" style={{ color: theme.heading }}>
                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                Experience
              </h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="text-left">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{exp.startDate} — {exp.endDate}</span>
                    </div>
                    <p className="font-bold text-sm mb-4" style={{ color: accentColor }}>{exp.company}</p>
                    <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section className="text-left">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4" style={{ color: theme.heading }}>
                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                Portfolio
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {projects.map((project, i) => (
                  <div key={i} className="text-left p-6 rounded-3xl" style={{ backgroundColor: theme.secondary + '20' }}>
                    <h3 className="font-black text-gray-900 uppercase tracking-tight mb-1">{project.name}</h3>
                    {project.technologies && <p className="text-[9px] font-black uppercase opacity-40 mb-3 tracking-widest">{project.technologies}</p>}
                    <p className="text-xs opacity-80 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest" style={{ color: accentColor }}>
                       {project.link && <a href={project.link} className="underline">View Demo</a>}
                       {project.github && <a href={project.github} className="underline">Source Code</a>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="col-span-4 p-12 space-y-12 bg-gray-50/30 text-left">
          {skills?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-left" style={{ color: theme.heading }}>Expertise</h2>
              <div className="flex flex-wrap gap-2 text-left">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm" style={{ color: theme.text }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-left" style={{ color: theme.heading }}>Education</h2>
              <div className="space-y-6 text-left">
                {education.map((edu, i) => (
                  <div key={i} className="text-left">
                    <p className="font-black text-gray-900 leading-tight text-xs uppercase tracking-tight">{edu.degree}</p>
                    <p className="text-[10px] font-bold opacity-60 mt-1">{edu.school}</p>
                    <div className="w-4 h-0.5 mt-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-left" style={{ color: theme.heading }}>Certificates</h2>
              <div className="space-y-4 text-left">
                {certifications.map((cert, i) => (
                  <div key={i} className="text-left">
                    <p className="font-bold text-[11px] text-gray-900 leading-tight uppercase">{cert.name}</p>
                    <p className="text-[9px] opacity-50 font-black uppercase mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-left" style={{ color: theme.heading }}>Linguistic</h2>
              <div className="space-y-3 text-left">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center text-left">
                    <span className="font-bold uppercase text-[10px] tracking-widest">{lang.name}</span>
                    <div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
                       <div className="h-full" style={{ 
                         backgroundColor: accentColor, 
                         width: lang.level === 'Native' ? '100%' : lang.level === 'Fluent' ? '90%' : lang.level === 'Professional' ? '75%' : '50%' 
                       }}></div>
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

export default CreativeProTemplate;
