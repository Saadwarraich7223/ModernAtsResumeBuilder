import React from "react";

const CreativeTemplate = ({ data, settings, theme }) => {
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    projects,
    certifications,
    languages,
    customSections,
  } = data;

  const visibleSections = settings.visibleSections || [
    "projects",
    "certifications",
    "languages",
    "custom",
  ];
  const isVisible = (id) => visibleSections.includes(id);

  const bannerBg = theme.primary.includes("gradient")
    ? theme.primary
    : theme.heading;
  const accentColor = theme.primary.includes("gradient")
    ? theme.accent
    : theme.primary;

  return (
    <div
      className="min-h-[297mm] relative overflow-hidden text-wrap break-words"
      style={{
        fontFamily: settings.fontFamily,
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Top Banner */}
      <div className="p-12 text-white" style={{ background: bannerBg }}>
        <h1 className="text-5xl text-white/90 font-black uppercase tracking-tighter mb-2 leading-tight">
          {personalInfo.fullName || "Name"}
        </h1>
        <p className="text-2xl font-light text-white/90">
          {personalInfo.jobTitle || "Profession"}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest">
          {personalInfo.email && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.address && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              {personalInfo.address}
            </span>
          )}
          {personalInfo.website && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm underline border border-white/10">
              {personalInfo.website}
            </span>
          )}
          {personalInfo.github && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              GitHub: {personalInfo.github}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              LinkedIn: {personalInfo.linkedin}
            </span>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-12 gap-10"
        style={{ padding: settings.pageMargin }}
      >
        <div className="col-span-8 text-left">
          {summary && (
            <section className="mb-12 text-left">
              <h2
                className="text-2xl font-black uppercase tracking-tight mb-4 italic"
                style={{ color: accentColor }}
              >
                Profile
              </h2>
              <p className="leading-relaxed text-base font-medium text-slate-700 whitespace-pre-wrap">
                {summary}
              </p>
            </section>
          )}

          {workExperience?.length > 0 && (
            <section className="text-left">
              <h2
                className="text-2xl font-black uppercase tracking-tight mb-8 italic"
                style={{ color: accentColor }}
              >
                History
              </h2>
              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <div key={i} className="group text-left">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="h-1 flex-1 rounded-full bg-slate-100"
                        style={{ background: theme.secondary }}
                      ></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] shrink-0">
                        {exp.startDate} - {exp.current ? "NOW" : exp.endDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                        {exp.position}
                      </h3>
                      {exp.location && (
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <p
                      className="font-bold mb-4"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible("projects") && projects?.length > 0 && (
            <section className="mt-12 text-left">
              <h2
                className="text-2xl font-black uppercase tracking-tight mb-8 italic"
                style={{ color: accentColor }}
              >
                Projects
              </h2>
              <div className="space-y-8">
                {projects.map((project, i) => (
                  <div key={i} className="text-left">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1 leading-tight">
                      {project.name}
                    </h3>
                    <div
                      className="flex gap-4 text-[10px] font-black uppercase tracking-widest mb-3"
                      style={{ color: accentColor }}
                    >
                      {project.link && (
                        <a href={project.link} className="hover:underline">
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className="hover:underline">
                          GitHub
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase">
                        ENV: {project.technologies}
                      </p>
                    )}
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible("custom") &&
            customSections?.map((section, i) => (
              <section key={i} className="mt-12 text-left">
                <h2
                  className="text-2xl font-black uppercase tracking-tight mb-4 italic"
                  style={{ color: accentColor }}
                >
                  {section.title}
                </h2>
                <p className="text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </section>
            ))}
        </div>

        <div className="col-span-4 space-y-12 text-left">
          {skills?.length > 0 && (
            <section
              className="p-8 rounded-[2.5rem] text-left"
              style={{ backgroundColor: theme.secondary }}
            >
              <h2
                className="text-xl font-black uppercase tracking-tight mb-6 italic"
                style={{ color: theme.heading }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-900 px-3 py-1.5 rounded-xl text-[10px] font-black shadow-sm uppercase tracking-wider border border-slate-100"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {isVisible("languages") && languages?.length > 0 && (
            <section className="px-4 text-left">
              <h2
                className="text-xl font-black uppercase tracking-tight mb-6 italic"
                style={{ color: accentColor }}
              >
                Languages
              </h2>
              <div className="space-y-4">
                {languages.map((lang, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-2"
                  >
                    <span className="font-black text-gray-900 uppercase text-[11px] tracking-widest leading-tight">
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isVisible("certifications") && certifications?.length > 0 && (
            <section className="px-4 text-left">
              <h2
                className="text-xl font-black uppercase tracking-tight mb-6 italic"
                style={{ color: accentColor }}
              >
                Certificates
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="text-left">
                    <p className="font-black text-gray-900 leading-tight uppercase tracking-tight text-xs">
                      {cert.name}
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-[9px] font-black text-slate-400 mt-2 uppercase tracking-widest">
                      {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education?.length > 0 && (
            <section className="px-4 text-left">
              <h2
                className="text-xl font-black uppercase tracking-tight mb-6 italic text-left"
                style={{ color: accentColor }}
              >
                Education
              </h2>
              <div className="space-y-8 text-left">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-4 border-l-2 text-left"
                    style={{ borderColor: theme.secondary }}
                  >
                    <p className="font-black text-gray-900 leading-tight uppercase tracking-tight text-sm text-left">
                      {edu.degree}
                    </p>
                    {edu.fieldOfStudy && (
                      <p className="text-xs font-bold text-slate-500 mt-1 text-left uppercase">
                        {edu.fieldOfStudy}
                      </p>
                    )}
                    <p className="text-xs font-bold text-slate-400 mt-1 text-left">
                      {edu.school}
                    </p>
                    <div className="flex flex-col mt-2 gap-1 text-left">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      {edu.location && (
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                          {edu.location}
                        </span>
                      )}
                    </div>
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
