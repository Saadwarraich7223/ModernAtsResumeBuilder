import React from 'react';

const SwissModernTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, customSections } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const SectionHeader = ({ title }) => (
    <div className="border-b-2 border-black mb-4 pt-2">
      <h2 className="text-sm font-black uppercase tracking-tighter leading-none pb-1" style={{ color: '#000' }}>
        {title}
      </h2>
    </div>
  );

  return (
    <div 
      className="min-h-[297mm] bg-white text-black text-left"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: settings.fontSize,
        lineHeight: '1.2',
        padding: settings.pageMargin,
      }}
    >
      {/* Header - Massive Typography */}
      <header className="mb-12 border-b-4 border-black pb-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold uppercase tracking-tight" style={{ color: theme.primary }}>
            {personalInfo.jobTitle || 'PROFESSION'}
          </p>
          <div className="text-right text-[10px] font-black uppercase leading-tight space-y-0.5">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.address && <p>{personalInfo.address}</p>}
            {personalInfo.website && <p className="underline">{personalInfo.website}</p>}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left column - Content */}
        <div className="col-span-8 space-y-10">
          {summary && (
            <section>
              <SectionHeader title="01. Profile" />
              <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <SectionHeader title="02. Experience" />
              <div className="space-y-8">
                {workExperience.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tighter">{exp.position}</h3>
                      <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest shrink-0">
                        {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-black uppercase underline" style={{ color: theme.primary }}>{exp.company}</span>
                      {exp.location && <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{exp.location}</span>}
                    </div>
                    <p className="text-sm font-medium leading-snug whitespace-pre-wrap opacity-80 border-l-2 border-slate-100 pl-4">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('projects') && projects?.length > 0 && (
            <section>
              <SectionHeader title="03. Projects" />
              <div className="space-y-6">
                {projects.map((project, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-black uppercase tracking-tight leading-tight">{project.name}</h3>
                      <div className="flex gap-2 text-[9px] font-black uppercase shrink-0">
                        {project.link && <a href={project.link} className="underline decoration-2">LIVE</a>}
                        {project.github && <a href={project.github} className="underline decoration-2">CODE</a>}
                      </div>
                    </div>
                    {project.technologies && <p className="text-[10px] font-bold opacity-50 mb-2 uppercase tracking-widest italic">{project.technologies}</p>}
                    <p className="text-sm font-medium leading-relaxed opacity-80">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column - Metadata */}
        <div className="col-span-4 space-y-10">
          {skills?.length > 0 && (
            <section>
              <SectionHeader title="Tools" />
              <div className="flex flex-col gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>
                    <span className="text-[11px] font-black uppercase tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section>
              <SectionHeader title="Education" />
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="text-[11px] font-black uppercase tracking-tighter mb-1 leading-tight">{edu.school}</h3>
                    <p className="text-[10px] font-bold uppercase underline mb-1" style={{ color: theme.primary }}>{edu.degree}</p>
                    <p className="text-[9px] font-bold opacity-50 uppercase">{edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('languages') && languages?.length > 0 && (
            <section>
              <SectionHeader title="Languages" />
              <div className="space-y-2">
                {languages.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-1">
                    <span className="text-[10px] font-black uppercase tracking-tight">{lang.name}</span>
                    <span className="text-[9px] font-bold opacity-50 uppercase tracking-tighter shrink-0">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible('certifications') && certifications?.length > 0 && (
            <section>
              <SectionHeader title="Accolades" />
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-black uppercase tracking-tight leading-tight mb-1">{cert.name}</p>
                    <p className="text-[9px] font-bold opacity-50 uppercase">{cert.issuer} // {cert.date}</p>
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

export default SwissModernTemplate;
