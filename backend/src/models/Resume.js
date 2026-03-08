const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide a resume title'],
    default: 'Untitled Resume',
  },
  data: {
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      website: String,
      github: String,
      linkedin: String,
      jobTitle: String,
    },
    summary: String,
    workExperience: [{
      company: String,
      position: String,
      location: String,
      startDate: String,
      endDate: String,
      current: Boolean,
      description: String,
    }],
    education: [{
      school: String,
      degree: String,
      fieldOfStudy: String,
      location: String,
      startDate: String,
      endDate: String,
      current: Boolean,
      description: String,
    }],
    skills: [{
      name: String,
      level: String, // e.g., Beginner, Intermediate, Expert
    }],
    projects: [{
      name: String,
      description: String,
      link: String,
      technologies: [String],
    }],
    certifications: [{
      name: String,
      issuer: String,
      date: String,
    }],
    languages: [{
      language: String,
      proficiency: String,
    }],
    customSections: [{
      title: String,
      items: [{
        title: String,
        subtitle: String,
        description: String,
        date: String,
      }]
    }]
  },
  templateId: {
    type: String,
    default: 'minimal-1',
  },
  settings: {
    themeId: { type: String, default: 'classic-blue' },
    fontSize: { type: String, default: '12px' },
    fontFamily: { type: String, default: 'Inter' },
    colorScheme: { type: String, default: '#000000' },
    paperSize: { type: String, default: 'A4' },
    lineHeight: { type: String, default: '1.5' },
    pageMargin: { type: String, default: '12mm' },
    visibleSections: [{ type: String }],
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Resume', resumeSchema);
