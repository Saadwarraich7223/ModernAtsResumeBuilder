import React from 'react';
import MinimalTemplate from './MinimalTemplate';
import ModernTemplate from './ModernTemplate';
import CreativeTemplate from './CreativeTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import TechnologistTemplate from './TechnologistTemplate';
import CompactTemplate from './CompactTemplate';
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
  };

  const SelectedTemplate = templates[templateId] || MinimalTemplate;
  const theme = getThemeById(settings.themeId);

  return <SelectedTemplate data={data} settings={settings} theme={theme} />;
};

export default TemplateRenderer;
