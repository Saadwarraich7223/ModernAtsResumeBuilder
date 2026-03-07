import { create } from 'zustand';
import api from '../api/axios';

const initialState = {
  title: 'Untitled Resume',
  aiLoading: false,
  aiError: null,
  data: {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      jobTitle: '',
      website: '',
      github: '',
      linkedin: '',
    },
    summary: '',
    workExperience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    customSections: [],
  },
  templateId: 'minimal-1',
  settings: {
    themeId: 'classic-blue',
    fontSize: '12px',
    fontFamily: 'Inter',
    colorScheme: '#000000',
    paperSize: 'A4',
    lineHeight: '1.5',
    pageMargin: '20mm',
  },
};

const useResumeStore = create((set, get) => ({
  ...initialState,
  loading: false,
  error: null,
  resumes: [],

  setResumeData: (newData) => {
    set((state) => ({
      data: { ...state.data, ...newData },
    }));
  },

  setPersonalInfo: (info) => {
    set((state) => ({
      data: {
        ...state.data,
        personalInfo: { ...state.data.personalInfo, ...info },
      },
    }));
  },

  updateSection: (section, items) => {
    set((state) => ({
      data: {
        ...state.data,
        [section]: items,
      },
    }));
  },

  setSettings: (settings) => {
    set((state) => ({
      settings: { ...state.settings, ...settings },
    }));
  },

  // AI ACTIONS
  setAILoading: (loading) => set({ aiLoading: loading }),
  setAIError: (error) => set({ aiError: error }),

  setTemplateId: (templateId) => set({ templateId }),

  setTitle: (title) => set({ title }),

  loadResume: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`/resumes/${id}`);
      const { title, data, templateId, settings } = response.data;
      set({ title, data, templateId, settings, loading: false });
    } catch (error) {
      set({ error: 'Failed to load resume', loading: false });
    }
  },

  saveResume: async (id) => {
    const { title, data, templateId, settings } = get();
    try {
      if (id) {
        await api.put(`/resumes/${id}`, { title, data, templateId, settings });
      } else {
        const response = await api.post('/resumes', { title, data, templateId, settings });
        return response.data._id;
      }
    } catch (error) {
      set({ error: 'Failed to save resume' });
    }
  },

  resetResume: () => set(initialState),
}));

export default useResumeStore;
