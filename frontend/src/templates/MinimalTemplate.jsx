import React from 'react';

const MinimalTemplate = ({ data, settings }) => {
  const { personalInfo, summary, workExperience, education, skills } = data;

  return (
    <div 
      className="bg-white"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        color: settings.colorScheme,
        lineHeight: settings.lineHeight,
        padding: settings.pageMargin,
      }}
    >
      {/* Header */}
      <header className="mb-8 border-b-2 border-gray-100 pb-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-2" style={{ color: settings.colorScheme }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-600 font-medium mb-4">
          {personalInfo.jobTitle || 'Your Profession'}
        </p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 border-b pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-justify">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1">Experience</h2>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-500 italic">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-gray-600 font-medium" style={{ color: settings.colorScheme }}>{exp.company}</span>
                  <span className="text-xs text-gray-400">{exp.location}</span>
                </div>
                <p className="text-gray-600 text-sm whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-800">{edu.school}</h3>
                  <span className="text-sm text-gray-500 italic">{edu.startDate} — {edu.endDate}</span>
                </div>
                <p className="text-gray-600 text-sm">{edu.degree} in {edu.fieldOfStudy}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 border-b pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
