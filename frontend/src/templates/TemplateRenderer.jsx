import React from 'react';
import MinimalTemplate from './MinimalTemplate';
import ModernTemplate from './ModernTemplate';
import CreativeTemplate from './CreativeTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import TechnologistTemplate from './TechnologistTemplate';
import CompactTemplate from './CompactTemplate';
import CreativeProTemplate from './CreativeProTemplate';
import ClassicSerifTemplate from './ClassicSerifTemplate';
import SwissModernTemplate from './SwissModernTemplate';
import CyberEngineerTemplate from './CyberEngineerTemplate';
import ModernLinearTemplate from './ModernLinearTemplate';
import { getThemeById } from '../themes/themeConfig';

const TemplateRenderer = ({ templateId, data, settings }) => {
  const templates = {
    'minimal-1': MinimalTemplate,
    'modern-1': ModernTemplate,
    'creative-1': CreativeTemplate,
    'professional-1': ProfessionalTemplate,
    'executive-1': ExecutiveTemplate,
    'tech-1': TechnologistTemplate,
    'compact-1': CompactTemplate,
    'creative-pro-1': CreativeProTemplate,
    'classic-serif-1': ClassicSerifTemplate,
    'swiss-modern-1': SwissModernTemplate,
    'cyber-engineer-1': CyberEngineerTemplate,
    'modern-linear-1': ModernLinearTemplate,
  };

  const SelectedTemplate = templates[templateId] || MinimalTemplate;
  const theme = getThemeById(settings.themeId);

  return <SelectedTemplate data={data} settings={settings} theme={theme} />;
};

export default TemplateRenderer;
