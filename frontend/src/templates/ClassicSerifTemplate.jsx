import React from 'react';

const ClassicSerifTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills, 
    projects, certifications, languages, customSections 
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div 
      className="min-h-[297mm] bg-white p-[20mm] text-left"
      style={{
        fontFamily: 'serif',
        fontSize: settings.fontSize,
        lineHeight: '1.6',
        color: theme.text,
        backgroundColor: theme.background
      }}
    >
      {/* Elegant Serif Header */}
      <header className="text-center mb-12 border-b-2 pb-8" style={{ borderColor: theme.heading }}>
        <h1 className="text-5xl font-bold mb-3 tracking-tight" style={{ color: theme.heading, fontFamily: 'serif' }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-medium italic opacity-70 mb-6">{personalInfo.jobTitle}</p>
        
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm font-bold tracking-tight opacity-80">
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
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium leading-relaxed italic opacity-90 whitespace-pre-wrap">"{summary}"</p>
        </section>
      )}

      {/* Main Content Grid */}
      <div className="space-y-12 text-left">
        {workExperience?.length > 0 && (
          <section className="text-left">
            <h2 className="text-xl font-bold border-b mb-6 pb-1 uppercase tracking-widest text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Professional Experience</h2>
            <div className="space-y-10 text-left">
              {workExperience.map((exp, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline mb-1 text-left">
                    <h3 className="text-lg font-bold text-left" style={{ color: theme.heading }}>{exp.position}</h3>
                    <span className="text-sm italic opacity-60 text-left">{exp.startDate} — {exp.endDate}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3 text-left">
                    <p className="font-bold text-sm underline underline-offset-4 text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{exp.company}</p>
                    {exp.location && <span className="text-xs italic opacity-50 text-left">{exp.location}</span>}
                  </div>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed opacity-90 text-justify text-left">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isVisible('projects') && projects?.length > 0 && (
          <section className="text-left">
            <h2 className="text-xl font-bold border-b mb-6 pb-1 uppercase tracking-widest text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Selected Projects</h2>
            <div className="grid grid-cols-1 gap-8 text-left">
              {projects.map((project, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline mb-1 text-left">
                    <h3 className="text-lg font-bold text-left" style={{ color: theme.heading }}>{project.name}</h3>
                    <div className="flex gap-4 text-xs font-bold text-left">
                       {project.link && <a href={project.link} className="underline" style={{ color: theme.accent }}>Live Demo</a>}
                       {project.github && <a href={project.github} className="underline" style={{ color: theme.accent }}>Source</a>}
                    </div>
                  </div>
                  {project.technologies && <p className="text-xs font-bold opacity-50 italic mb-2 text-left">{project.technologies}</p>}
                  <p className="text-sm opacity-90 leading-relaxed text-justify mb-2 text-left whitespace-pre-wrap">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-16 text-left">
          <div className="space-y-12 text-left">
            {education?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Education</h2>
                <div className="space-y-8 text-left">
                  {education.map((edu, i) => (
                    <div key={i} className="text-left">
                      <div className="flex justify-between items-baseline text-left">
                        <p className="font-bold text-gray-900 text-sm text-left">{edu.degree}</p>
                        <span className="text-xs italic opacity-60 text-left">{edu.startDate} — {edu.endDate}</span>
                      </div>
                      {edu.fieldOfStudy && <p className="text-xs font-bold opacity-70 mb-1 text-left">{edu.fieldOfStudy}</p>}
                      <p className="text-xs italic opacity-70 text-left">{edu.school} {edu.location && ` // ${edu.location}`}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isVisible('languages') && languages?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Languages</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-4 text-left">
                  {languages.map((lang, i) => (
                    <div key={i} className="flex flex-col text-left">
                      <span className="font-bold text-sm text-left">{lang.name}</span>
                      <span className="text-[10px] italic opacity-60 uppercase text-left">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-12 text-left">
            {skills?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Competencies</h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-left">
                      <div className="w-1 h-1 rounded-full text-left" style={{ backgroundColor: theme.accent }}></div>
                      <span className="text-xs font-medium text-left">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isVisible('certifications') && certifications?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Certifications</h2>
                <div className="space-y-4 text-left">
                  {certifications.map((cert, i) => (
                    <div key={i} className="text-left">
                      <p className="font-bold text-xs text-left">{cert.name}</p>
                      <p className="text-[10px] italic opacity-60 text-left">{cert.issuer} {cert.date && ` // ${cert.date}`}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {isVisible('custom') && customSections?.map((section, i) => (
          <section key={i} className="text-left">
            <h2 className="text-sm font-bold border-b mb-4 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>{section.title}</h2>
            <p className="text-sm opacity-90 whitespace-pre-wrap leading-relaxed text-left">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ClassicSerifTemplate;
