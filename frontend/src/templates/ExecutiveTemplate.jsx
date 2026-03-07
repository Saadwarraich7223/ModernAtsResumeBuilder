import React from 'react';

const ExecutiveTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="p-[20mm] bg-white min-h-[297mm] border-[12px] border-double border-gray-100"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        color: '#2d3748',
        lineHeight: '1.6',
      }}
    >
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-serif font-black text-gray-900 tracking-tight mb-3">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-primary-700 uppercase tracking-[0.2em] border-y border-gray-100 py-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-12">
          <p className="text-center italic text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            "{summary}"
          </p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-center text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-8 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-100"></div>
            Professional Experience
            <div className="h-px flex-1 bg-gray-100"></div>
          </h2>
          <div className="space-y-10">
            {workExperience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  <span className="text-sm font-bold text-gray-400 italic">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-lg font-bold text-primary-800 mb-4">{exp.position}</p>
                <p className="text-gray-600 whitespace-pre-wrap leading-relaxed border-l-2 border-gray-50 pl-6 ml-1">
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
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-6 border-b pb-2">Academic History</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-bold text-gray-900 mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                  <p className="text-xs font-bold text-primary-700 mt-1">{edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-6 border-b pb-2">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-600"></div>
                  <span className="text-sm font-bold text-gray-700">{skill.name}</span>
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
