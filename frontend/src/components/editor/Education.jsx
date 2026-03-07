import React from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, Trash2, GraduationCap, Calendar, Book, School, MapPin } from 'lucide-react';

const Education = () => {
  const { data, updateSection } = useResumeStore();
  const educationList = data.education || [];

  const addEducation = () => {
    const newEdu = {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    updateSection('education', [...educationList, newEdu]);
  };

  const removeEducation = (index) => {
    const updated = educationList.filter((_, i) => i !== index);
    updateSection('education', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = educationList.map((edu, i) => {
      if (i === index) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    updateSection('education', updated);
  };

  const FieldLabel = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 mb-0.5">
      <Icon size={14} className="text-gray-400" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Education</h2>
          <p className="text-gray-500 font-medium">Add your academic background and certifications.</p>
        </div>
        <Button 
          onClick={addEducation} 
          variant="gradient" 
          size="sm" 
          className="rounded-full px-6 py-2.5 h-auto shadow-md hover:scale-105 transition-transform"
        >
          <Plus size={18} className="mr-2" /> Add Education
        </Button>
      </div>

      {educationList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 group hover:border-primary-200 transition-colors">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gray-300 group-hover:text-primary-400 transition-colors mb-4">
             <GraduationCap size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">No education added</h3>
          <p className="text-gray-500 font-medium text-center max-w-xs mb-6">
            Share your academic journey to provide recruiters with a complete picture.
          </p>
          <Button onClick={addEducation} variant="secondary" className="rounded-full px-8">
            Add Your Education
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          {educationList.map((edu, index) => (
            <div key={index} className="relative group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] transition-all duration-500">
              <button 
                onClick={() => removeEducation(index)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                title="Remove Entry"
              >
                <Trash2 size={18} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                   <FieldLabel icon={School} label="School / University" />
                   <Input
                     value={edu.school}
                     onChange={(e) => handleChange(index, 'school', e.target.value)}
                     placeholder="e.g. Harvard University"
                   />
                </div>
                
                <div>
                   <FieldLabel icon={GraduationCap} label="Degree" />
                   <Input
                     value={edu.degree}
                     onChange={(e) => handleChange(index, 'degree', e.target.value)}
                     placeholder="e.g. Bachelor of Science"
                   />
                </div>

                <div>
                   <FieldLabel icon={Book} label="Field of Study" />
                   <Input
                     value={edu.fieldOfStudy}
                     onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
                     placeholder="e.g. Computer Science"
                   />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <FieldLabel icon={Calendar} label="Start Date" />
                      <Input
                        value={edu.startDate}
                        onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                        placeholder="e.g. 2016"
                      />
                   </div>
                   <div>
                      <FieldLabel icon={Calendar} label="End Date" />
                      <Input
                        value={edu.endDate}
                        onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                        placeholder="e.g. 2020"
                      />
                   </div>
                </div>

                <div>
                   <FieldLabel icon={MapPin} label="Location (Optional)" />
                   <Input
                     value={edu.location || ''}
                     onChange={(e) => handleChange(index, 'location', e.target.value)}
                     placeholder="e.g. Cambridge, MA"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
