import React from 'react';

const ProfessionalTemplate = ({ data, settings, theme }) => {
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
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        padding: settings.pageMargin,
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      {/* Header */}
      <header className="border-b-4 pb-6 mb-10 flex justify-between items-end" style={{ borderBottom: `4px ${theme.divider} ${theme.heading}` }}>
        <div className="text-left">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-1 text-left" style={{ color: theme.heading }}>
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>
        <div className="text-right text-[10px] font-black uppercase tracking-widest opacity-60 space-y-1">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.address && <p>{personalInfo.address}</p>}
          {personalInfo.website && <p className="underline">{personalInfo.website}</p>}
          {personalInfo.github && <p>GitHub: {personalInfo.github}</p>}
          {personalInfo.linkedin && <p>LinkedIn: {personalInfo.linkedin}</p>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12 text-left">
        {/* Main Content */}
        <div className="col-span-8 space-y-12 text-left">
          {summary && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Executive Profile
              </h2>
              <p className="font-medium leading-relaxed text-justify text-sm opacity-90 whitespace-pre-wrap">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Career History
              </h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="text-left">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-bold text-sm" style={{ color: theme.accent }}>{exp.company}</span>
                      {exp.location && <span className="text-[10px] font-bold opacity-30 uppercase">{exp.location}</span>}
                    </div>
                    <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Key Projects
              </h2>
              <div className="space-y-10 text-left">
                {projects.map((project, i) => (
                  <div key={i} className="text-left">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: theme.heading }}>{project.name}</h3>
                      <div className="flex gap-3 text-[9px] font-black uppercase tracking-widest" style={{ color: theme.accent }}>
                        {project.link && <a href={project.link} className="hover:underline">Demo</a>}
                        {project.github && <a href={project.github} className="hover:underline">Source</a>}
                      </div>
                    </div>
                    {project.technologies && <p className="text-[10px] font-bold opacity-40 uppercase mb-3">{project.technologies}</p>}
                    <p className="text-xs font-medium opacity-80 leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('custom') && customSections?.map((section, i) => (
            <section key={i} className="text-left">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                {section.title}
              </h2>
              <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-12 text-left">
          {skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Expertise
              </h2>
              <div className="flex flex-col gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-sm rotate-45" style={{ backgroundColor: theme.primary.includes('gradient') ? theme.accent : theme.primary }}></div>
                    <span className="text-xs font-bold uppercase tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Credentials
              </h2>
              <div className="space-y-8 text-left">
                {education.map((edu, i) => (
                  <div key={i} className="text-left">
                    <p className="font-black text-gray-900 leading-tight mb-1 uppercase tracking-tighter text-sm text-left">{edu.degree}</p>
                    {edu.fieldOfStudy && <p className="text-[10px] font-bold opacity-70 mb-1 text-left uppercase">{edu.fieldOfStudy}</p>}
                    <p className="text-xs font-bold mb-2 text-left" style={{ color: theme.accent }}>{edu.school}</p>
                    <div className="flex justify-between items-center text-[9px] font-black opacity-30 uppercase tracking-widest">
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
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Linguistic
              </h2>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-tight">{lang.name}</span>
                    <span className="text-[10px] font-black opacity-30 uppercase">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1 text-left" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Accreditation
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="font-black text-gray-900 leading-tight mb-1 uppercase tracking-tighter text-sm">{cert.name}</p>
                    <p className="text-[10px] font-bold mb-2 uppercase tracking-widest" style={{ color: theme.accent }}>{cert.issuer}</p>
                    <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">{cert.date}</p>
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

export default ProfessionalTemplate;
