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
        fontFamily: 'serif', // Forced serif for this template
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
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium leading-relaxed italic opacity-90">"{summary}"</p>
        </section>
      )}

      {/* Main Content Grid */}
      <div className="space-y-12">
        {workExperience?.length > 0 && (
          <section className="text-left">
            <h2 className="text-xl font-bold border-b mb-6 pb-1 uppercase tracking-widest text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Professional Experience</h2>
            <div className="space-y-10">
              {workExperience.map((exp, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold" style={{ color: theme.heading }}>{exp.position}</h3>
                    <span className="text-sm italic opacity-60">{exp.startDate} — {exp.endDate}</span>
                  </div>
                  <p className="font-bold text-sm mb-3 underline underline-offset-4" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{exp.company} // {exp.location}</p>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed opacity-90 text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isVisible('projects') && projects?.length > 0 && (
          <section className="text-left">
            <h2 className="text-xl font-bold border-b mb-6 pb-1 uppercase tracking-widest text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Selected Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="text-left">
                  <h3 className="text-lg font-bold mb-1" style={{ color: theme.heading }}>{project.name}</h3>
                  <p className="text-xs font-bold opacity-50 italic mb-2">{project.technologies}</p>
                  <p className="text-sm opacity-90 leading-relaxed text-justify mb-2">{project.description}</p>
                  {project.link && <a href={project.link} className="text-xs font-bold underline" style={{ color: theme.accent }}>Project Link</a>}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-16 text-left">
          <div className="space-y-12">
            {education?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Education</h2>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="text-left">
                      <p className="font-bold text-gray-900 text-sm">{edu.degree}</p>
                      <p className="text-xs italic opacity-70">{edu.school} // {edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isVisible('languages') && languages?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Languages</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {languages.map((lang, i) => (
                    <div key={i} className="flex flex-col text-left">
                      <span className="font-bold text-sm">{lang.name}</span>
                      <span className="text-[10px] italic opacity-60 uppercase">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-12">
            {skills?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Competencies</h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-left">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.accent }}></div>
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isVisible('certifications') && certifications?.length > 0 && (
              <section className="text-left">
                <h2 className="text-sm font-bold border-b mb-6 pb-1 uppercase tracking-[0.2em] text-left" style={{ color: theme.heading, borderColor: theme.secondary }}>Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="text-left">
                      <p className="font-bold text-xs">{cert.name}</p>
                      <p className="text-[10px] italic opacity-60">{cert.issuer}</p>
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
            <p className="text-sm opacity-90 whitespace-pre-wrap leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ClassicSerifTemplate;
