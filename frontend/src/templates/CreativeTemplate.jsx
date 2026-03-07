import React from 'react';

const CreativeTemplate = ({ data, settings, theme }) => {
  const { 
    personalInfo, summary, workExperience, education, skills, 
    projects, certifications, languages, customSections 
  } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div 
      className="min-h-[297mm] relative overflow-hidden"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      {/* Top Banner */}
      <div 
        className="p-12 text-white" 
        style={{ background: theme.primary.includes('gradient') ? theme.primary : theme.heading }}
      >
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{personalInfo.fullName || 'Name'}</h1>
        <p className="text-2xl font-light opacity-90">{personalInfo.jobTitle || 'Profession'}</p>
        
        <div className="mt-8 flex flex-wrap gap-6 text-xs font-black uppercase tracking-widest">
          {personalInfo.email && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">{personalInfo.phone}</span>}
          {personalInfo.address && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">{personalInfo.address}</span>}
          {personalInfo.website && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm underline">{personalInfo.website}</span>}
          {personalInfo.github && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">GitHub: {personalInfo.github}</span>}
          {personalInfo.linkedin && <span className="bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">LinkedIn: {personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10" style={{ padding: settings.pageMargin }}>
        <div className="col-span-8">
          {summary && (
            <section className="mb-12 text-left">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Profile</h2>
              <p className="leading-relaxed text-lg font-medium opacity-90 whitespace-pre-wrap">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>History</h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="group text-left">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-1 flex-1 rounded-full" style={{ background: theme.secondary }}></div>
                      <span className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">{exp.startDate} - {exp.current ? 'NOW' : exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-2">
                       <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{exp.position}</h3>
                       {exp.location && <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">{exp.location}</span>}
                    </div>
                    <p className="font-bold mb-4" style={{ color: theme.accent }}>{exp.company}</p>
                    <p className="text-sm font-medium leading-relaxed opacity-80 whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Projects</h2>
              <div className="space-y-8">
                {projects.map((project, i) => (
                  <div key={i} className="text-left">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">{project.name}</h3>
                    <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: theme.accent }}>
                       {project.link && <a href={project.link} className="hover:underline">Demo</a>}
                       {project.github && <a href={project.github} className="hover:underline">GitHub</a>}
                    </div>
                    {project.technologies && <p className="text-xs font-bold opacity-50 mb-3 uppercase">{project.technologies}</p>}
                    <p className="text-sm font-medium leading-relaxed opacity-80">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('custom') && customSections?.map((section, i) => (
            <section key={i} className="mt-12">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{section.title}</h2>
              <p className="text-sm font-medium leading-relaxed opacity-80 whitespace-pre-wrap">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="col-span-4 space-y-12">
          {skills?.length > 0 && (
            <section className="p-8 rounded-[2.5rem]" style={{ backgroundColor: theme.secondary }}>
              <h2 className="text-xl font-black uppercase tracking-tight mb-6 italic" style={{ color: theme.heading }}>Skills</h2>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-white text-gray-900 px-3 py-1.5 rounded-xl text-[10px] font-black shadow-sm uppercase tracking-wider">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section className="px-4">
              <h2 className="text-xl font-black uppercase tracking-tight mb-6 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Languages</h2>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="font-black text-gray-900 uppercase text-[11px] tracking-widest">{lang.name}</span>
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section className="px-4">
              <h2 className="text-xl font-black uppercase tracking-tight mb-6 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Certificates</h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="font-black text-gray-900 leading-tight uppercase tracking-tight text-xs">{cert.name}</p>
                    <p className="text-[10px] font-bold opacity-70 mt-1">{cert.issuer}</p>
                    <p className="text-[9px] font-black opacity-30 mt-2 uppercase tracking-widest">{cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section className="px-4 text-left">
              <h2 className="text-xl font-black uppercase tracking-tight mb-6 italic text-left" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Education</h2>
              <div className="space-y-8 text-left">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-4 border-l-2 text-left" style={{ borderColor: theme.secondary }}>
                    <p className="font-black text-gray-900 leading-tight uppercase tracking-tight text-sm text-left">{edu.degree}</p>
                    {edu.fieldOfStudy && <p className="text-xs font-bold opacity-70 mt-1 text-left uppercase">{edu.fieldOfStudy}</p>}
                    <p className="text-xs font-bold opacity-50 mt-1 text-left">{edu.school}</p>
                    <div className="flex flex-col mt-2 gap-1 text-left">
                       <span className="text-[9px] font-black opacity-30 uppercase tracking-widest">{edu.startDate} - {edu.endDate}</span>
                       {edu.location && <span className="text-[9px] font-black opacity-30 uppercase tracking-widest">{edu.location}</span>}
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

export default CreativeTemplate;
