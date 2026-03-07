import React from 'react';

const CompactTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="bg-white min-h-[297mm]"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: '1.2',
        padding: '10mm', // Overriding for high density
      }}
    >
      <header className="flex justify-between items-start border-b border-gray-900 pb-2 mb-4">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-gray-900">{personalInfo.fullName || 'Name'}</h1>
          <p className="text-sm font-bold" style={{ color: settings.colorScheme }}>{personalInfo.jobTitle}</p>
        </div>
        <div className="text-right text-[10px] font-medium text-gray-600">
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.address} | {personalInfo.linkedin}</p>
        </div>
      </header>

      {summary && (
        <section className="mb-4 text-[11px] leading-tight text-gray-700">
          <p>{summary}</p>
        </section>
      )}

      <div className="space-y-4">
        <section>
          <h2 className="text-[10px] font-black uppercase border-b border-gray-200 mb-2 tracking-widest bg-gray-50 px-1 py-0.5">Experience</h2>
          <div className="space-y-3">
            {workExperience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between font-bold text-[11px] text-gray-900">
                  <span>{exp.position} // {exp.company}</span>
                  <span className="italic text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[10px] text-gray-600 whitespace-pre-wrap mt-0.5">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[10px] font-black uppercase border-b border-gray-200 mb-2 tracking-widest bg-gray-50 px-1 py-0.5">Education & Expertise</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              {education.map((edu, i) => (
                <div key={i} className="text-[10px]">
                  <p className="font-bold text-gray-800">{edu.degree}</p>
                  <p className="text-gray-500">{edu.school} ({edu.endDate})</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 content-start">
              {skills.map((skill, i) => (
                <span key={i} className="text-[10px] font-bold text-gray-700 border-r border-gray-300 pr-2 last:border-0">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompactTemplate;
