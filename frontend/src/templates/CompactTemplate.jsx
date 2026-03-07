import React from 'react';

const CompactTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills,
    projects, certifications, languages, customSections
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div 
      className="min-h-[297mm] text-left"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: '1.2',
        padding: '10mm',
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <header className="flex justify-between items-start border-b-2 pb-2 mb-4 text-left" style={{ borderColor: theme.heading }}>
        <div className="text-left">
          <h1 className="text-2xl font-black uppercase tracking-tighter text-left" style={{ color: theme.heading }}>{personalInfo.fullName || 'Name'}</h1>
          <p className="text-xs font-black uppercase tracking-widest text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{personalInfo.jobTitle}</p>
        </div>
        <div className="text-right text-[8px] font-black uppercase tracking-tight opacity-60 leading-tight">
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
          <div className="flex justify-end gap-2 mt-0.5">
            {personalInfo.website && <span className="underline">{personalInfo.website}</span>}
            {personalInfo.linkedin && <span>LI: {personalInfo.linkedin}</span>}
            {personalInfo.github && <span>GH: {personalInfo.github}</span>}
          </div>
        </div>
      </header>

      {summary && (
        <section className="mb-4 text-[9px] leading-tight opacity-90 text-justify whitespace-pre-wrap">
          <p>{summary}</p>
        </section>
      )}

      <div className="space-y-4 text-left">
        <section className="text-left">
          <h2 className="text-[9px] font-black uppercase border-b mb-2 tracking-[0.2em] px-1 py-0.5 text-left" style={{ color: theme.heading, backgroundColor: theme.secondary, borderColor: theme.primary }}>Experience</h2>
          <div className="space-y-3 text-left">
            {workExperience.map((exp, i) => (
              <div key={i} className="text-left">
                <div className="flex justify-between font-black text-[9px] text-left" style={{ color: theme.heading }}>
                  <span className="uppercase tracking-tight text-left">{exp.position} // {exp.company}</span>
                  <span className="opacity-40 uppercase tracking-tighter text-left">{exp.startDate} - {exp.endDate}</span>
                </div>
                {exp.location && <p className="text-[8px] font-bold opacity-30 uppercase mb-0.5">{exp.location}</p>}
                <p className="text-[9px] opacity-80 whitespace-pre-wrap mt-0.5 leading-snug text-left">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {isVisible('projects') && projects?.length > 0 && (
          <section className="text-left">
            <h2 className="text-[9px] font-black uppercase border-b mb-2 tracking-[0.2em] px-1 py-0.5 text-left" style={{ color: theme.heading, backgroundColor: theme.secondary, borderColor: theme.primary }}>Key Projects</h2>
            <div className="space-y-3 text-left">
              {projects.map((project, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between font-black text-[9px] text-left" style={{ color: theme.heading }}>
                    <span className="uppercase tracking-tight text-left">{project.name}</span>
                    <span className="text-[8px] font-black text-primary-600 text-left">
                      {project.link && <a href={project.link} className="hover:underline">LIVE</a>} {project.github && <a href={project.github} className="hover:underline ml-1">SRC</a>}
                    </span>
                  </div>
                  {project.technologies && <p className="text-[8px] font-bold opacity-40 uppercase tracking-widest">{project.technologies}</p>}
                  <p className="text-[9px] opacity-80 mt-0.5 text-left leading-snug whitespace-pre-wrap">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="text-left">
          <h2 className="text-[9px] font-black uppercase border-b mb-2 tracking-[0.2em] px-1 py-0.5 text-left" style={{ color: theme.heading, backgroundColor: theme.secondary, borderColor: theme.primary }}>Education & Expertise</h2>
          <div className="grid grid-cols-2 gap-8 text-left">
            <div className="space-y-3 text-left">
              {education.map((edu, i) => (
                <div key={i} className="text-[9px] text-left">
                  <p className="font-black uppercase tracking-tight text-left" style={{ color: theme.heading }}>{edu.degree}</p>
                  {edu.fieldOfStudy && <p className="text-[8px] font-bold opacity-70 uppercase leading-tight mb-0.5">{edu.fieldOfStudy}</p>}
                  <p className="opacity-60 font-bold uppercase tracking-tighter text-left">{edu.school} ({edu.startDate} - {edu.endDate})</p>
                  {edu.location && <p className="text-[8px] opacity-40 uppercase">{edu.location}</p>}
                </div>
              ))}
              
              {isVisible('certifications') && certifications?.length > 0 && (
                <div className="pt-2 text-left space-y-1">
                   {certifications.map((cert, i) => (
                     <p key={i} className="text-[8px] font-black uppercase tracking-tight opacity-60 text-left">• {cert.name} ({cert.issuer})</p>
                   ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 content-start text-left">
              {skills.map((skill, i) => (
                <span key={i} className="text-[9px] font-black uppercase tracking-tighter border-r pr-2 last:border-0 text-left" style={{ color: theme.accent, borderColor: theme.secondary }}>
                  {skill.name}
                </span>
              ))}
              
              {isVisible('languages') && languages?.length > 0 && (
                <div className="w-full mt-2 border-t pt-1 border-gray-100 flex flex-wrap gap-2 text-left">
                   {languages.map((lang, i) => (
                     <span key={i} className="text-[8px] font-bold opacity-50 uppercase text-left">{lang.name}: {lang.level}</span>
                   ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {isVisible('custom') && customSections?.map((section, i) => (
          <section key={i} className="text-left">
            <h2 className="text-[9px] font-black uppercase border-b mb-2 tracking-[0.2em] px-1 py-0.5 text-left" style={{ color: theme.heading, backgroundColor: theme.secondary, borderColor: theme.primary }}>{section.title}</h2>
            <p className="text-[9px] opacity-80 whitespace-pre-wrap leading-tight text-left">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CompactTemplate;
