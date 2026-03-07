import React from 'react';

const MinimalTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="min-h-[297mm]"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        color: theme.text,
        lineHeight: settings.lineHeight,
        padding: settings.pageMargin,
        backgroundColor: theme.background
      }}
    >
      {/* Header */}
      <header className="mb-8 pb-6 text-center" style={{ borderBottom: `2px ${theme.divider} ${theme.secondary}` }}>
        <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2" style={{ color: theme.heading }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary }}>
          {personalInfo.jobTitle || 'Your Profession'}
        </p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: theme.text, opacity: 0.6 }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-3 pb-1" style={{ color: theme.primary, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
            Profile
          </h2>
          <p className="leading-relaxed text-justify">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 pb-1" style={{ color: theme.primary, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
            Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black text-sm uppercase tracking-tight" style={{ color: theme.heading }}>{exp.position}</h3>
                  <span className="text-[10px] font-bold uppercase" style={{ color: theme.text, opacity: 0.5 }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs font-bold" style={{ color: theme.accent }}>{exp.company}</span>
                  <span className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">{exp.location}</span>
                </div>
                <p className="text-xs whitespace-pre-wrap leading-relaxed opacity-80">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 pb-1" style={{ color: theme.primary, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black text-sm uppercase tracking-tight" style={{ color: theme.heading }}>{edu.school}</h3>
                  <span className="text-[10px] font-bold uppercase" style={{ color: theme.text, opacity: 0.5 }}>{edu.startDate} — {edu.endDate}</span>
                </div>
                <p className="text-xs font-bold" style={{ color: theme.accent }}>{edu.degree} in {edu.fieldOfStudy}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-3 pb-1" style={{ color: theme.primary, borderBottom: `1px ${theme.divider} ${theme.secondary}` }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-[10px] font-black uppercase tracking-widest" style={{ color: theme.heading }}>
                • {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
