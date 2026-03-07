import React from 'react';

const CreativeTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="bg-white min-h-[297mm] relative overflow-hidden"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
      }}
    >
      {/* Top Banner */}
      <div className="p-12 text-white" style={{ backgroundColor: settings.colorScheme !== '#000000' ? settings.colorScheme : '#0284c7' }}>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{personalInfo.fullName || 'Name'}</h1>
        <p className="text-2xl font-light opacity-90">{personalInfo.jobTitle || 'Profession'}</p>
        
        <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold">
          {personalInfo.email && <span className="bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">{personalInfo.phone}</span>}
          {personalInfo.address && <span className="bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">{personalInfo.address}</span>}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10" style={{ padding: settings.pageMargin }}>
        <div className="col-span-8">
          {summary && (
            <section className="mb-10">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic" style={{ color: settings.colorScheme }}>Profile</h2>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-6 italic" style={{ color: settings.colorScheme }}>History</h2>
              <div className="space-y-8">
                {workExperience.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-px flex-1 bg-gray-200"></div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{exp.startDate} - {exp.current ? 'NOW' : exp.endDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="font-bold mb-3" style={{ color: settings.colorScheme }}>{exp.company}</p>
                    <p className="text-gray-600 whitespace-pre-wrap leading-snug font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-10">
          {skills?.length > 0 && (
            <section className="bg-gray-50 p-6 rounded-[2rem]">
              <h2 className="text-xl font-black uppercase tracking-tight mb-4 italic" style={{ color: settings.colorScheme }}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-white border-2 border-gray-100 text-gray-800 px-3 py-1 rounded-xl text-xs font-black shadow-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section>
              <h2 className="text-xl font-black uppercase tracking-tight mb-4 italic" style={{ color: settings.colorScheme }}>Education</h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-black text-gray-900 leading-tight">{edu.degree}</p>
                    <p className="text-sm text-gray-600 font-bold">{edu.school}</p>
                    <p className="text-xs text-gray-400 font-black mt-1 uppercase tracking-widest">{edu.endDate}</p>
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
