import React from 'react';

const ModernTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills, 
    projects, certifications, languages, customSections 
  } = data;

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
        className="w-1/3 text-white" 
        style={{ 
          padding: settings.pageMargin,
          background: sidebarBg 
        }}
      >
        <div className="mb-10">
          <h1 className="text-3xl font-black leading-tight mb-2 uppercase tracking-tighter">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="font-bold text-sm uppercase tracking-[0.2em]" style={{ color: theme.secondary }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>

        <div className="space-y-10 text-sm font-medium">
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">Contact</h2>
            <ul className="space-y-3 text-[11px] font-bold">
              {personalInfo.email && <li className="break-all">{personalInfo.email}</li>}
              {personalInfo.phone && <li>{personalInfo.phone}</li>}
              {personalInfo.address && <li className="opacity-80 font-medium">{personalInfo.address}</li>}
              {personalInfo.website && <li className="break-all opacity-80">{personalInfo.website}</li>}
            </ul>
          </section>

          {skills?.length > 0 && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">Expertise</h2>
              <div className="flex flex-col gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white opacity-40"></div>
                    <span className="text-[11px] font-bold tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages?.length > 0 && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">Languages</h2>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-black tracking-tight uppercase">{lang.name}</p>
                    <p className="text-[9px] font-bold opacity-40 uppercase">{lang.level}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications?.length > 0 && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">Certificates</h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-black tracking-tight uppercase leading-tight">{cert.name}</p>
                    <p className="text-[9px] font-bold opacity-40 uppercase mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1" style={{ padding: settings.pageMargin, color: theme.text }}>
        {summary && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              About
            </h2>
            <p className="leading-relaxed font-medium text-sm opacity-90 text-left">{summary}</p>
          </section>
        )}

        {workExperience?.length > 0 && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              Experience
            </h2>
            <div className="space-y-10">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 text-left" style={{ borderColor: theme.secondary }}>
                  <div className="absolute w-2.5 h-2.5 rounded-full -left-[6px] top-1" style={{ background: theme.primary.includes('gradient') ? theme.accent : theme.primary }}></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-black text-gray-900 uppercase tracking-tight">{exp.position}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-xs font-bold mb-3" style={{ color: theme.accent }}>{exp.company}</p>
                  <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects?.length > 0 && (
          <section className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project, i) => (
                <div key={i} className="text-left">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 uppercase tracking-tight">{project.name}</h3>
                    <span className="text-[9px] font-black uppercase text-primary-600">
                      {project.link && <a href={project.link} className="hover:underline">Live</a>}
                      {project.link && project.github && ' • '}
                      {project.github && <a href={project.github} className="hover:underline">GitHub</a>}
                    </span>
                  </div>
                  {project.technologies && <p className="text-[10px] font-bold opacity-50 uppercase tracking-tighter mb-2">{project.technologies}</p>}
                  <p className="text-xs opacity-80 leading-relaxed">{project.description}</p>
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
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="text-left">
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-tight">{edu.school}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs font-bold" style={{ color: theme.accent }}>{edu.degree} in {edu.fieldOfStudy}</p>
                    <p className="text-[10px] font-black opacity-40 uppercase">{edu.endDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {customSections?.map((section, i) => (
          <section key={i} className="mb-12 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4 pb-2 text-left" style={{ color: theme.heading, borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
              {section.title}
            </h2>
            <p className="text-xs opacity-80 whitespace-pre-wrap leading-relaxed">{section.content}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ModernTemplate;
