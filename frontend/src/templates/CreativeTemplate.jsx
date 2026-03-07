import React from 'react';

const CreativeTemplate = ({ data, settings, theme }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

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
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10" style={{ padding: settings.pageMargin }}>
        <div className="col-span-8">
          {summary && (
            <section className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Profile</h2>
              <p className="leading-relaxed text-lg font-medium opacity-90">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>History</h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-1 flex-1 rounded-full" style={{ background: theme.secondary }}></div>
                      <span className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">{exp.startDate} - {exp.current ? 'NOW' : exp.endDate}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{exp.position}</h3>
                    <p className="font-bold mb-4" style={{ color: theme.accent }}>{exp.company}</p>
                    <p className="text-sm font-medium leading-relaxed opacity-80 whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
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

          {education?.length > 0 && (
            <section className="px-4">
              <h2 className="text-xl font-black uppercase tracking-tight mb-6 italic" style={{ color: theme.primary.includes('gradient') ? theme.accent : theme.primary }}>Education</h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-4 border-l-2" style={{ borderColor: theme.secondary }}>
                    <p className="font-black text-gray-900 leading-tight uppercase tracking-tight text-sm">{edu.degree}</p>
                    <p className="text-xs font-bold opacity-70 mt-1">{edu.school}</p>
                    <p className="text-[10px] font-black opacity-30 mt-2 uppercase tracking-widest">{edu.endDate}</p>
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
