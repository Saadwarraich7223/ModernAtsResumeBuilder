import api from './axios';

/**
 * AI Service for Resume Enhancements
 * Proxied via backend to avoid CORS and protect tokens.
 */

export const generateAISummary = async (personalInfo, experience, skills, education) => {
  try {
    const response = await api.post('/ai/generate-summary', { personalInfo, experience, skills, education });
    return response.data.result;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`AI Summary Error: ${message}`);
  }
};

export const improveExperienceBullet = async (text, position) => {
  try {
    const response = await api.post('/ai/improve-bullet', { text, position });
    return response.data.result;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`AI Bullet Error: ${message}`);
  }
};

export const suggestSkills = async (jobTitle, currentSkills) => {
  try {
    const response = await api.post('/ai/suggest-skills', { jobTitle, currentSkills });
    return response.data.result;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`AI Skills Error: ${message}`);
  }
};

export const analyzeATSKeywords = async (data) => {
  try {
    const response = await api.post('/ai/analyze-ats', { data });
    return response.data.result;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`ATS Analysis Error: ${message}`);
  }
};
