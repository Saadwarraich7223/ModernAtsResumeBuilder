import React from 'react';

const ModernTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills, 
    projects, certifications, languages, customSections 
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const sidebarBg = theme.primary.includes('gradient') ? theme.primary : theme.heading;

  return (
    <div 
      className="flex min-h-[297mm]"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        backgroundColor: theme.background
      }}
    >
      {/* Sidebar */}
      <aside 
        className="w-1/3 text-white text-left" 
        style={{ 
          padding: settings.pageMargin,
          background: sidebarBg 
        }}
      >
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-black leading-tight mb-2 uppercase tracking-tighter text-left">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="font-bold text-sm uppercase tracking-[0.2em] text-left" style={{ color: theme.secondary }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>

        <div className="space-y-10 text-sm font-medium text-left">
          <section className="text-left">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 text-left">Contact</h2>
            <ul className="space-y-3 text-[11px] font-bold text-left">
              {personalInfo.email && <li className="break-all">{personalInfo.email}</li>}
              {personalInfo.phone && <li>{personalInfo.phone}</li>}
              {personalInfo.address && <li className="opacity-80 font-medium">{personalInfo.address}</li>}
              {personalInfo.website && <li className="break-all opacity-80 underline">{personalInfo.website}</li>}
              {personalInfo.github && <li className="break-all opacity-80">GitHub: {personalInfo.github}</li>}
              {personalInfo.linkedin && <li className="break-all opacity-80">LinkedIn: {personalInfo.linkedin}</li>}
            </ul>
          </section>

          {skills?.length > 0 && (
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 text-left">Expertise</h2>
              <div className="flex flex-col gap-3 text-left">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-left">
                    <div className="w-1 h-1 rounded-full bg-white opacity-40"></div>
                    <span className="text-[11px] font-bold tracking-tight text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 text-left">Languages</h2>
              <div className="space-y-3 text-left">
                {languages.map((lang, i) => (
                  <div key={i} className="text-left">
                    <p className="text-[11px] font-black tracking-tight uppercase text-left">{lang.name}</p>
                    <p className="text-[9px] font-bold opacity-40 uppercase text-left">{lang.level}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section className="text-left">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50 text-left">Certificates</h2>
              <div className="space-y-4 text-left">
                {certifications.map((cert, i) => (
                  <div key={i} className="text-left">
                    <p className="text-[11px] font-black tracking-tight uppercase leading-tight text-left">{cert.name}</p>
                    <p className="text-[9px] font-bold opacity-40 uppercase mt-1 text-left">{cert.issuer}</p>
                    <p className="text-[8px] font-bold opacity-30 text-left">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 text-left" style={{ padding: settings.pageMargin, color: theme.text }}>
        {summary && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              About
            </h2>
            <p className="leading-relaxed font-medium text-sm opacity-90 text-left whitespace-pre-wrap">{summary}</p>
          </section>
        )}

        {workExperience?.length > 0 && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              Experience
            </h2>
            <div className="space-y-10 text-left">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 text-left" style={{ borderColor: theme.secondary }}>
                  <div className="absolute w-2.5 h-2.5 rounded-full -left-[6px] top-1" style={{ background: theme.primary.includes('gradient') ? theme.accent : theme.primary }}></div>
                  <div className="flex justify-between items-baseline mb-1 text-left">
                    <h3 className="font-black text-gray-900 uppercase tracking-tight text-left">{exp.position}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 text-left">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3 text-left">
                    <p className="text-xs font-bold text-left" style={{ color: theme.accent }}>{exp.company}</p>
                    {exp.location && <p className="text-[9px] font-black opacity-30 uppercase text-left">{exp.location}</p>}
                  </div>
                  <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed text-left">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isVisible('projects') && projects?.length > 0 && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              Projects
            </h2>
            <div className="space-y-8 text-left">
              {projects.map((project, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline mb-1 text-left">
                    <h3 className="font-bold text-gray-900 uppercase tracking-tight text-left">{project.name}</h3>
                    <span className="text-[9px] font-black uppercase text-primary-600 text-left">
                      {project.link && <a href={project.link} className="hover:underline">Live</a>}
                      {project.link && project.github && ' • '}
                      {project.github && <a href={project.github} className="hover:underline">GitHub</a>}
                    </span>
                  </div>
                  {project.technologies && <p className="text-[10px] font-bold opacity-50 uppercase tracking-tighter mb-2 text-left">{project.technologies}</p>}
                  <p className="text-xs opacity-80 leading-relaxed text-left">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education?.length > 0 && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              Education
            </h2>
            <div className="space-y-8 text-left">
              {education.map((edu, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline text-left">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-tight text-left">{edu.school}</h3>
                    <span className="text-[10px] font-black opacity-40 uppercase text-left">{edu.startDate} — {edu.endDate}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1 text-left">
                    <div>
                      <p className="text-xs font-bold text-left" style={{ color: theme.accent }}>{edu.degree}</p>
                      {edu.fieldOfStudy && <p className="text-[10px] font-medium opacity-60 text-left">{edu.fieldOfStudy}</p>}
                    </div>
                    {edu.location && <p className="text-[9px] font-black opacity-30 uppercase text-left">{edu.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {isVisible('custom') && customSections?.map((section, i) => (
          <section key={i} className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              {section.title}
            </h2>
            <p className="text-xs opacity-80 whitespace-pre-wrap leading-relaxed text-left">{section.content}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ModernTemplate;
