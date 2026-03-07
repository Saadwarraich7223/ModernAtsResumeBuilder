import React from 'react';

const ModernTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="flex min-h-[297mm] bg-white"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
      }}
    >
      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-900 text-white" style={{ padding: settings.pageMargin }}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold leading-tight mb-2">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="font-medium" style={{ color: settings.colorScheme !== '#000000' ? settings.colorScheme : '#38bdf8' }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>

        <div className="space-y-6 text-sm font-medium">
          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Contact</h2>
            <ul className="space-y-2 text-gray-300">
              {personalInfo.email && <li className="break-all">{personalInfo.email}</li>}
              {personalInfo.phone && <li>{personalInfo.phone}</li>}
              {personalInfo.address && <li>{personalInfo.address}</li>}
            </ul>
          </section>

          {skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-[10px] font-bold border border-gray-700">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1" style={{ padding: settings.pageMargin }}>
        {summary && (
          <section className="mb-10">
            <h2 className="text-lg font-bold border-b-2 pb-1 mb-4" style={{ borderColor: settings.colorScheme }}>About Me</h2>
            <p className="text-gray-600 leading-relaxed font-medium">{summary}</p>
          </section>
        )}

        {workExperience?.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold border-b-2 pb-1 mb-6" style={{ borderColor: settings.colorScheme }}>Experience</h2>
            <div className="space-y-8">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-gray-100">
                  <div className="absolute w-3 h-3 rounded-full -left-[7.5px] top-1.5" style={{ backgroundColor: settings.colorScheme }}></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-800">{exp.position}</h3>
                    <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: settings.colorScheme }}>
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-500 mb-2">{exp.company}</p>
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education?.length > 0 && (
          <section>
            <h2 className="text-lg font-bold border-b-2 pb-1 mb-4" style={{ borderColor: settings.colorScheme }}>Education</h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i}>
                  <h3 className="font-bold text-gray-800 text-sm">{edu.school}</h3>
                  <p className="text-sm text-gray-600 font-medium">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-xs text-gray-400 italic font-bold">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ModernTemplate;
