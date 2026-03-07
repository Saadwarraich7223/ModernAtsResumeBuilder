import React from 'react';

const MinimalTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, customSections } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const SectionHeading = ({ children }) => (
    <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-3 pb-1" style={{ color: theme.primary, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
      {children}
    </h2>
  );

  return (
    <div 
      className="min-h-[297mm]"
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
      <header className="mb-8 pb-6 text-center" style={{ borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
        <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2" style={{ color: theme.heading }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary }}>
          {personalInfo.jobTitle || 'Your Profession'}
        </p>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.text, opacity: 0.6 }}>
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
          <p className="leading-relaxed text-justify whitespace-pre-wrap">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-8 text-left">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black text-sm uppercase tracking-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                  <span className="text-[10px] font-bold uppercase" style={{ color: theme.text, opacity: 0.5 }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-bold" style={{ color: theme.accent }}>{exp.company}</span>
                  {exp.location && <span className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">{exp.location}</span>}
                </div>
                <p className="text-[11px] whitespace-pre-wrap leading-relaxed opacity-80">{exp.description}</p>
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
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black text-sm uppercase tracking-tight" style={{ color: theme.heading }}>{project.name}</h3>
                  <div className="flex gap-3 text-[9px] font-bold uppercase" style={{ color: theme.accent }}>
                    {project.link && <a href={project.link} className="underline">Demo</a>}
                    {project.github && <a href={project.github} className="underline">Source</a>}
                  </div>
                </div>
                {project.technologies && <p className="text-[9px] font-bold opacity-60 mb-2 italic">{project.technologies}</p>}
                <p className="text-[11px] opacity-80 whitespace-pre-wrap leading-relaxed">{project.description}</p>
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
                    <h3 className="font-black text-[11px] uppercase tracking-tight mb-1" style={{ color: theme.heading }}>{edu.school}</h3>
                    <p className="text-[10px] font-black uppercase" style={{ color: theme.accent }}>{edu.degree}</p>
                    {edu.fieldOfStudy && <p className="text-[10px] font-bold opacity-70 uppercase">{edu.fieldOfStudy}</p>}
                    <div className="flex justify-between items-center mt-1 text-[9px] font-bold opacity-40 uppercase">
                       <span>{edu.startDate} — {edu.endDate}</span>
                       {edu.location && <span>{edu.location}</span>}
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
                    <p className="font-black text-[11px] uppercase tracking-tight" style={{ color: theme.heading }}>{cert.name}</p>
                    <p className="text-[9px] font-bold opacity-60 uppercase">{cert.issuer} • {cert.date}</p>
                    {cert.link && <a href={cert.link} className="text-[8px] underline opacity-40">View Certificate</a>}
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
                  <div key={index} className="flex justify-between items-center text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-left" style={{ color: theme.heading }}>{lang.name}</span>
                    <span className="text-[9px] font-bold opacity-40 uppercase tracking-tighter text-left">{lang.level}</span>
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
          <p className="text-[11px] whitespace-pre-wrap leading-relaxed opacity-80 text-left">{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default MinimalTemplate;
