import React from 'react';

const ModernLinearTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages, customSections } = data;

  const visibleSections = settings.visibleSections || ['projects', 'certifications', 'languages', 'custom'];
  const isVisible = (id) => visibleSections.includes(id);

  const primaryColor = theme.primary.includes('gradient') ? theme.accent : theme.primary;

  return (
    <div 
      className="min-h-[297mm] text-left relative"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: settings.fontSize,
        lineHeight: '1.6',
        padding: settings.pageMargin,
        backgroundColor: '#fff',
        color: '#475569'
      }}
    >
      {/* Header - SaaS Style */}
      <header className="mb-16">
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-none">
              {personalInfo.fullName || 'Full Name'}
            </h1>
            <p className="text-lg font-semibold tracking-tight" style={{ color: primaryColor }}>
              {personalInfo.jobTitle || 'Your Professional Role'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px] font-medium text-slate-500">
             {personalInfo.email && <p className="flex items-center gap-2">Email <span className="text-slate-900 font-bold">{personalInfo.email}</span></p>}
             {personalInfo.phone && <p className="flex items-center gap-2">Phone <span className="text-slate-900 font-bold">{personalInfo.phone}</span></p>}
             {personalInfo.website && <p className="flex items-center gap-2">Web <span className="text-slate-900 font-bold">{personalInfo.website.replace('https://', '')}</span></p>}
             {personalInfo.github && <p className="flex items-center gap-2">Source <span className="text-slate-900 font-bold">github.com/{personalInfo.github}</span></p>}
          </div>
        </div>
        
        {summary && (
          <div className="max-w-3xl">
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              {summary}
            </p>
          </div>
        )}
      </header>

      <div className="space-y-16">
        {/* Experience Section */}
        {workExperience?.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Experience</h2>
              <div className="h-px w-full bg-slate-100"></div>
            </div>
            
            <div className="space-y-12">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative grid grid-cols-12 gap-8">
                  <div className="col-span-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-1">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </p>
                    {exp.location && <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2">{exp.location}</p>}
                  </div>
                  <div className="col-span-9">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{exp.position}</h3>
                    <p className="text-sm font-bold mb-4" style={{ color: primaryColor }}>{exp.company}</p>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Two Column Section for Skills/Education/Projects */}
        <div className="grid grid-cols-12 gap-16">
          {/* Left Side: Projects & Education */}
          <div className="col-span-7 space-y-16">
            {isVisible('projects') && projects?.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Projects</h2>
                  <div className="h-px w-full bg-slate-100"></div>
                </div>
                <div className="space-y-10">
                  {projects.map((project, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-base font-bold text-slate-900">{project.name}</h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">{project.technologies}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{project.description}</p>
                      {project.link && (
                        <a href={project.link} className="text-[11px] font-bold underline underline-offset-4" style={{ color: primaryColor }}>
                          View project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education?.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Education</h2>
                  <div className="h-px w-full bg-slate-100"></div>
                </div>
                <div className="space-y-8">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{edu.degree}</h3>
                      <p className="text-xs font-bold text-slate-500 mb-1">{edu.school}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">{edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Side: Skills & Others */}
          <div className="col-span-5 space-y-16">
            {skills?.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Expertise</h2>
                  <div className="h-px w-full bg-slate-100"></div>
                </div>
                <div className="grid grid-cols-1 gap-y-4">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                        <span className="text-slate-900">{skill.name}</span>
                        <span className="text-slate-300 italic">{skill.level || 'Expert'}</span>
                      </div>
                      <div className="h-[2px] w-full bg-slate-50 overflow-hidden">
                        <div className="h-full" style={{ backgroundColor: primaryColor, opacity: 0.3, width: '100%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {isVisible('languages') && languages?.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Languages</h2>
                  <div className="h-px w-full bg-slate-100"></div>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{lang.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLinearTemplate;
