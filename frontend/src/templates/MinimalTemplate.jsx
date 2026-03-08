import React from 'react';

const MinimalTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, customSections } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const SectionHeading = ({ children }) => (
    <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-3 pb-1" style={{ color: theme.primary, borderBottom: `1px solid ${theme.secondary}` }}>
      {children}
    </h2>
  );

  return (
    <div 
      className="min-h-[297mm] text-wrap break-words"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        color: theme.text,
        lineHeight: settings.lineHeight,
        padding: settings.pageMargin,
        backgroundColor: theme.background
      }}
    >
      {/* Header */}
      <header className="mb-8 pb-6 text-center" style={{ borderBottom: `2px solid ${theme.secondary}` }}>
        <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2 leading-tight" style={{ color: theme.heading }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary }}>
          {personalInfo.jobTitle || 'Your Profession'}
        </p>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">
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
        <section className="mb-8 text-left">
          <SectionHeading>Profile</SectionHeading>
          <p className="leading-relaxed text-sm text-slate-700 whitespace-pre-wrap">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-8 text-left">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-between items-baseline mb-1 gap-4">
                  <h3 className="font-black text-sm uppercase tracking-tight leading-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                  <span className="text-[10px] font-bold uppercase text-slate-500 shrink-0">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <span className="text-xs font-bold" style={{ color: theme.accent }}>{exp.company}</span>
                  {exp.location && <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest shrink-0">{exp.location}</span>}
                </div>
                <p className="text-xs whitespace-pre-wrap leading-relaxed text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {isVisible('projects') && projects?.length > 0 && (
        <section className="mb-8 text-left">
          <SectionHeading>Projects</SectionHeading>
          <div className="space-y-6 text-left">
            {projects.map((project, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-between items-baseline mb-1 gap-4">
                  <h3 className="font-black text-sm uppercase tracking-tight leading-tight" style={{ color: theme.heading }}>{project.name}</h3>
                  <div className="flex gap-3 text-[9px] font-bold uppercase shrink-0" style={{ color: theme.accent }}>
                    {project.link && <a href={project.link} className="underline">Demo</a>}
                    {project.github && <a href={project.github} className="underline">Source</a>}
                  </div>
                </div>
                {project.technologies && <p className="text-[9px] font-bold text-slate-500 mb-2 italic">ENV: {project.technologies}</p>}
                <p className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-12 text-left">
        <div className="text-left">
          {/* Education */}
          {education?.length > 0 && (
            <section className="mb-8 text-left">
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-6 text-left">
                {education.map((edu, index) => (
                  <div key={index} className="text-left">
                    <h3 className="font-black text-[11px] uppercase tracking-tight mb-1 leading-tight" style={{ color: theme.heading }}>{edu.school}</h3>
                    <p className="text-[10px] font-black uppercase" style={{ color: theme.accent }}>{edu.degree}</p>
                    {edu.fieldOfStudy && <p className="text-[10px] font-bold text-slate-600 uppercase">{edu.fieldOfStudy}</p>}
                    <div className="flex justify-between items-center mt-1 text-[9px] font-bold text-slate-400 uppercase gap-2">
                       <span>{edu.startDate} — {edu.endDate}</span>
                       {edu.location && <span className="shrink-0">{edu.location}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {isVisible('certifications') && certifications?.length > 0 && (
            <section className="mb-8 text-left">
              <SectionHeading>Certifications</SectionHeading>
              <div className="space-y-4 text-left">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-left">
                    <p className="font-black text-[11px] uppercase tracking-tight leading-tight" style={{ color: theme.heading }}>{cert.name}</p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase">{cert.issuer} • {cert.date}</p>
                    {cert.link && <a href={cert.link} className="text-[8px] underline text-slate-400 hover:text-indigo-600">View Certificate</a>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="text-left">
          {/* Skills */}
          {skills?.length > 0 && (
            <section className="mb-8 text-left">
              <SectionHeading>Skills</SectionHeading>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-left">
                {skills.map((skill, index) => (
                  <span key={index} className="text-[10px] font-black uppercase tracking-widest text-left" style={{ color: theme.heading }}>
                    • {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {isVisible('languages') && languages?.length > 0 && (
            <section className="mb-8 text-left">
              <SectionHeading>Languages</SectionHeading>
              <div className="space-y-2 text-left">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center text-left gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-left leading-tight" style={{ color: theme.heading }}>{lang.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Custom Sections */}
      {isVisible('custom') && customSections?.map((section, index) => (
        <section key={index} className="mb-8 text-left">
          <SectionHeading>{section.title}</SectionHeading>
          <p className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed text-left">{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default MinimalTemplate;
