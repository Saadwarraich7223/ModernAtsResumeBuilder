import React from 'react';

const ProfessionalTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="bg-white min-h-[297mm]"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        padding: settings.pageMargin,
        color: '#1a202c',
      }}
    >
      {/* Header */}
      <header className="border-b-4 pb-6 mb-8 flex justify-between items-end" style={{ borderColor: settings.colorScheme }}>
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-1">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest" style={{ color: settings.colorScheme }}>
            {personalInfo.jobTitle || 'Your Profession'}
          </p>
        </div>
        <div className="text-right text-sm font-medium text-gray-500 space-y-0.5">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.address && <p>{personalInfo.address}</p>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="col-span-8 space-y-10">
          {summary && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 border-b pb-1">Professional Profile</h2>
              <p className="text-gray-700 leading-relaxed text-justify font-medium">{summary}</p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-b pb-1">Experience</h2>
              <div className="space-y-8">
                {workExperience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-black text-gray-900">{exp.position}</h3>
                      <span className="text-sm font-bold text-gray-500">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="font-bold" style={{ color: settings.colorScheme }}>{exp.company}</span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{exp.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-10">
          {skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 border-b pb-1">Expertise</h2>
              <div className="flex flex-col gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: settings.colorScheme }}></div>
                    <span className="text-sm font-bold text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 border-b pb-1">Education</h2>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-black text-gray-900 leading-tight mb-1">{edu.degree}</p>
                    <p className="text-sm font-bold mb-1" style={{ color: settings.colorScheme }}>{edu.school}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{edu.endDate}</p>
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
