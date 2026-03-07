import React from 'react';

const ProfessionalTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

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
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-1" style={{ color: theme.heading }}>
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>
        <div className="text-right text-[10px] font-black uppercase tracking-widest opacity-60 space-y-1">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.address && <p>{personalInfo.address}</p>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="col-span-8 space-y-12">
          {summary && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 pb-1" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Executive Profile
              </h2>
              <p className="font-medium leading-relaxed text-justify text-sm opacity-90">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Career History
              </h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-bold text-sm" style={{ color: theme.accent }}>{exp.company}</span>
                      <span className="text-[10px] font-bold opacity-30 uppercase">{exp.location}</span>
                    </div>
                    <p className="text-xs font-medium opacity-80 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-12">
          {skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
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
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-1" style={{ color: theme.heading, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
                Credentials
              </h2>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-black text-gray-900 leading-tight mb-1 uppercase tracking-tighter text-sm">{edu.degree}</p>
                    <p className="text-xs font-bold mb-2" style={{ color: theme.accent }}>{edu.school}</p>
                    <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">{edu.endDate}</p>
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
