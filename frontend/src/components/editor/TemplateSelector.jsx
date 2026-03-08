import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import useResumeStore from "../../store/resumeStore";
import { TEMPLATES } from "../../config/templates";

const TemplateSelector = () => {
  const { templateId, setTemplateId } = useResumeStore();

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="border-b pb-6 text-left">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight text-left">
          Select Design
        </h2>
        <p className="text-gray-500 font-medium text-left">
          Choose a template that best represents your professional style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => setTemplateId(template.id)}
            className={`group relative flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 text-left ${
              templateId === template.id
                ? "border-primary-600 ring-4 ring-primary-100 shadow-xl"
                : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
            }`}
          >
            {/* Thumbnail */}
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 text-left">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full  object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              {templateId === template.id && (
                <div className="absolute inset-0 bg-primary-600/10 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white rounded-full p-2 shadow-xl">
                    <CheckCircle2 size={32} className="text-primary-600" />
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur shadow-sm ${template.color}`}
                >
                  {template.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-left">
              <div className="flex items-center gap-3 mb-2 text-left">
                <div
                  className={`${template.bg} ${template.color} p-2 rounded-xl text-left`}
                >
                  <template.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-left">
                  {template.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2 text-left">
                {template.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="p-6 bg-primary-50 rounded-3xl border border-primary-100 flex items-center gap-4 text-left">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 text-left">
          <Sparkles size={24} />
        </div>
        <div className="text-left">
          <p className="text-sm text-primary-900 font-bold mb-0.5 text-left">
            Switching made easy
          </p>
          <p className="text-xs text-primary-700 font-medium opacity-80 text-left">
            Data stays intact while you experiment with different styles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
