import React from 'react';
import { User, Briefcase, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import Input from '../ui/Input';

const PersonalInfo = () => {
  const { data, setPersonalInfo } = useResumeStore();
  const { personalInfo } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ [name]: value });
  };

  const FieldLabel = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 mb-0.5">
      <Icon size={14} className="text-gray-400" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b pb-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Personal Details</h2>
        <p className="text-gray-500 font-medium">How recruiters can contact you and what you do.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <FieldLabel icon={User} label="Full Name" />
            <Input
              name="fullName"
              value={personalInfo.fullName || ''}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
          </div>
          
          <div>
            <FieldLabel icon={Briefcase} label="Job Title" />
            <Input
              name="jobTitle"
              value={personalInfo.jobTitle || ''}
              onChange={handleChange}
              placeholder="e.g. Software Engineer"
            />
          </div>

          <div>
            <FieldLabel icon={Mail} label="Email Address" />
            <Input
              name="email"
              type="email"
              value={personalInfo.email || ''}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
            />
          </div>

          <div>
            <FieldLabel icon={Phone} label="Phone Number" />
            <Input
              name="phone"
              value={personalInfo.phone || ''}
              onChange={handleChange}
              placeholder="e.g. +1 234 567 890"
            />
          </div>

          <div>
            <FieldLabel icon={MapPin} label="Location" />
            <Input
              name="address"
              value={personalInfo.address || ''}
              onChange={handleChange}
              placeholder="e.g. San Francisco, CA"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
           <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Online Presence</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <FieldLabel icon={Globe} label="Website / Portfolio" />
                <Input
                  name="website"
                  value={personalInfo.website || ''}
                  onChange={handleChange}
                  placeholder="e.g. https://johndoe.dev"
                />
              </div>

              <div>
                <FieldLabel icon={Linkedin} label="LinkedIn Profile" />
                <Input
                  name="linkedin"
                  value={personalInfo.linkedin || ''}
                  onChange={handleChange}
                  placeholder="e.g. linkedin.com/in/johndoe"
                />
              </div>

              <div>
                <FieldLabel icon={Github} label="GitHub Profile" />
                <Input
                  name="github"
                  value={personalInfo.github || ''}
                  onChange={handleChange}
                  placeholder="e.g. github.com/johndoe"
                />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
