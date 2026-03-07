import React from 'react';

const ExecutiveTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills,
    projects, certifications, languages, customSections
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div 
      className="min-h-[297mm] border-[16px] border-double"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        padding: '15mm',
        backgroundColor: theme.background,
        color: theme.text,
        borderColor: theme.secondary
      }}
    >
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase" style={{ color: theme.heading }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div 
          className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.3em] py-4 border-y-2" 
          style={{ borderColor: theme.secondary, color: theme.accent }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.website && <span className="underline">{personalInfo.website}</span>}
          {personalInfo.github && <span>GitHub: {personalInfo.github}</span>}
          {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-12">
          <p className="text-center italic text-lg font-medium max-w-3xl mx-auto leading-relaxed opacity-90 whitespace-pre-wrap">
            "{summary}"
          </p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-8 opacity-40">
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
            Professional Experience
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
          </h2>
          <div className="space-y-12">
            {workExperience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2 text-left">
                  <h3 className="text-xl font-black uppercase tracking-tight text-left" style={{ color: theme.heading }}>{exp.company}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{exp.startDate} — {exp.endDate}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-left">
                   <p className="text-sm font-bold uppercase tracking-widest text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{exp.position}</p>
                   {exp.location && <p className="text-[10px] font-black opacity-30 uppercase text-left">{exp.location}</p>}
                </div>
                <p className="text-sm font-medium opacity-80 whitespace-pre-wrap leading-relaxed border-l-4 pl-8 text-left" style={{ borderColor: theme.secondary }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {isVisible('projects') && projects?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-8 opacity-40">
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
            Strategic Initiatives
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
          </h2>
          <div className="space-y-10">
            {projects.map((project, i) => (
              <div key={i} className="text-left">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: theme.heading }}>{project.name}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-600">
                    {project.link && <a href={project.link} className="hover:underline">Portfolio</a>}
                  </span>
                </div>
                {project.technologies && <p className="text-[10px] font-bold opacity-40 uppercase mb-4 tracking-widest">{project.technologies}</p>}
                <p className="text-sm font-medium opacity-80 leading-relaxed border-l-4 pl-8" style={{ borderColor: theme.secondary }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-16 text-left">
        <div className="space-y-12">
          {/* Education */}
          {education?.length > 0 && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40 text-left" style={{ borderColor: theme.secondary }}>Academic Foundation</h2>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="text-left">
                    <p className="font-black text-gray-900 uppercase tracking-tight text-sm text-left" style={{ color: theme.heading }}>{edu.degree}</p>
                    {edu.fieldOfStudy && <p className="text-[10px] font-bold opacity-60 mt-1 uppercase tracking-tight text-left">{edu.fieldOfStudy}</p>}
                    <p className="text-xs font-bold opacity-70 mt-1 text-left">{edu.school}</p>
                    <div className="flex justify-between items-center mt-2 text-[9px] font-black opacity-40 uppercase tracking-tighter text-left" style={{ color: theme.accent }}>
                       <span>{edu.startDate} — {edu.endDate}</span>
                       {edu.location && <span>{edu.location}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40 text-left" style={{ borderColor: theme.secondary }}>Linguistics</h2>
              <div className="grid grid-cols-1 gap-y-3 text-left">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-left" style={{ color: theme.heading }}>{lang.name}</span>
                    <span className="text-[9px] font-bold opacity-40 uppercase text-left">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-12 text-left">
          {/* Skills */}
          {skills?.length > 0 && (
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40 text-left" style={{ borderColor: theme.secondary }}>Competencies</h2>
              <div className="grid grid-cols-1 gap-y-3 text-left">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.accent }}></div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80 text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40 text-left" style={{ borderColor: theme.secondary }}>Accreditations</h2>
              <div className="space-y-6 text-left">
                {certifications.map((cert, i) => (
                  <div key={i} className="text-left">
                    <p className="font-black text-gray-900 uppercase tracking-tight text-[11px] text-left" style={{ color: theme.heading }}>{cert.name}</p>
                    <p className="text-[10px] font-bold opacity-60 mt-1 text-left uppercase">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {isVisible('custom') && customSections?.map((section, index) => (
        <section key={index} className="mt-12 text-left">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-8 opacity-40 text-left">
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
            {section.title}
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
          </h2>
          <p className="text-sm font-medium opacity-80 whitespace-pre-wrap leading-relaxed border-l-4 pl-8 text-left" style={{ borderColor: theme.secondary }}>
            {section.content}
          </p>
        </section>
      ))}
    </div>
  );
};

export default ExecutiveTemplate;
