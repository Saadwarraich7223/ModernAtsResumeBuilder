import React from 'react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Plus, Trash2, Award, Calendar, Link as LinkIcon, School } from 'lucide-react';

const Certifications = () => {
  const { data, updateSection } = useResumeStore();
  const certifications = data.certifications || [];

  const addCert = () => {
    const newCert = {
      name: '',
      issuer: '',
      date: '',
      link: '',
    };
    updateSection('certifications', [...certifications, newCert]);
  };

  const removeCert = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    updateSection('certifications', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = certifications.map((c, i) => i === index ? { ...c, [field]: value } : c);
    updateSection('certifications', updated);
  };

  const FieldLabel = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 mb-0.5">
      <Icon size={14} className="text-gray-400" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Certifications</h2>
          <p className="text-gray-500 font-medium">List your professional certifications and licenses.</p>
        </div>
        <Button onClick={addCert} variant="gradient" size="sm" className="rounded-full px-6 shadow-md">
          <Plus size={18} className="mr-2" /> Add Certification
        </Button>
      </div>

      {certifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 group">
          <Award size={32} className="text-gray-300 group-hover:text-primary-400 transition-colors mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-6">No certifications added</h3>
          <Button onClick={addCert} variant="secondary" className="rounded-full px-8">Add Your First Cert</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="relative group p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-primary-100 transition-all duration-500 shadow-sm text-left">
              <button onClick={() => removeCert(index)} className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100">
                <Trash2 size={14} />
              </button>
              
              <div className="space-y-4">
                <div>
                   <FieldLabel icon={Award} label="Certification Name" />
                   <Input value={cert.name} onChange={(e) => handleChange(index, 'name', e.target.value)} placeholder="e.g. AWS Solutions Architect" />
                </div>
                <div>
                   <FieldLabel icon={School} label="Issuing Organization" />
                   <Input value={cert.issuer} onChange={(e) => handleChange(index, 'issuer', e.target.value)} placeholder="e.g. Amazon Web Services" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <FieldLabel icon={Calendar} label="Date" />
                      <Input value={cert.date} onChange={(e) => handleChange(index, 'date', e.target.value)} placeholder="e.g. Jan 2023" />
                   </div>
                   <div>
                      <FieldLabel icon={LinkIcon} label="Verification Link" />
                      <Input value={cert.link} onChange={(e) => handleChange(index, 'link', e.target.value)} placeholder="https://..." />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
