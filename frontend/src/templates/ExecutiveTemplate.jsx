import React from 'react';

const ExecutiveTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="min-h-[297mm] border-[16px] border-double"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        padding: '15mm',
        backgroundColor: theme.background,
        color: theme.text,
        borderColor: theme.secondary
      }}
    >
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase" style={{ color: theme.heading }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div 
          className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.3em] py-4 border-y-2" 
          style={{ borderColor: theme.secondary, color: theme.accent }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-12">
          <p className="text-center italic text-lg font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
            "{summary}"
          </p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-8 opacity-40">
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
            Professional Experience
            <div className="h-px flex-1" style={{ backgroundColor: theme.secondary }}></div>
          </h2>
          <div className="space-y-12">
            {workExperience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: theme.heading }}>{exp.company}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>{exp.position}</p>
                <p className="text-sm font-medium opacity-80 whitespace-pre-wrap leading-relaxed border-l-4 pl-8" style={{ borderColor: theme.secondary }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-16">
        {/* Education */}
        {education?.length > 0 && (
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40" style={{ borderColor: theme.secondary }}>Education</h2>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-black text-gray-900 uppercase tracking-tight text-sm" style={{ color: theme.heading }}>{edu.degree}</p>
                  <p className="text-xs font-bold opacity-70 mt-1">{edu.school}</p>
                  <p className="text-[10px] font-black mt-2 uppercase tracking-widest" style={{ color: theme.accent }}>{edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b-2 opacity-40" style={{ borderColor: theme.secondary }}>Competencies</h2>
            <div className="grid grid-cols-1 gap-y-3">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.accent }}></div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
