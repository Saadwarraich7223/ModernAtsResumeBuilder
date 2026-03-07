export const themes = [
  {
    id: 'classic-blue',
    name: 'Classic Blue',
    primary: '#0284c7', // primary-600
    secondary: '#e0f2fe', // primary-100
    accent: '#0369a1',
    heading: '#0f172a',
    text: '#334155',
    divider: 'solid',
    background: '#ffffff',
    category: 'light'
  },
  {
    id: 'emerald-pro',
    name: 'Emerald Professional',
    primary: '#059669',
    secondary: '#d1fae5',
    accent: '#047857',
    heading: '#064e3b',
    text: '#374151',
    divider: 'solid',
    background: '#ffffff',
    category: 'light'
  },
  {
    id: 'royal-indigo',
    name: 'Royal Indigo',
    primary: '#4f46e5',
    secondary: '#e0e7ff',
    accent: '#4338ca',
    heading: '#1e1b4b',
    text: '#374151',
    divider: 'solid',
    background: '#ffffff',
    category: 'light'
  },
  {
    id: 'warm-amber',
    name: 'Warm Amber',
    primary: '#d97706',
    secondary: '#fef3c7',
    accent: '#b45309',
    heading: '#451a03',
    text: '#4b5563',
    divider: 'solid',
    background: '#ffffff',
    category: 'light'
  },
  {
    id: 'clean-black',
    name: 'Clean Black',
    primary: '#000000',
    secondary: '#f3f4f6',
    accent: '#374151',
    heading: '#000000',
    text: '#1f2937',
    divider: 'solid',
    background: '#ffffff',
    category: 'minimal'
  },
  {
    id: 'soft-gray',
    name: 'Soft Gray',
    primary: '#4b5563',
    secondary: '#f9fafb',
    accent: '#6b7280',
    heading: '#111827',
    text: '#4b5563',
    divider: 'dashed',
    background: '#ffffff',
    category: 'minimal'
  },
  {
    id: 'ocean-gradient',
    name: 'Ocean Gradient',
    primary: 'linear-gradient(to right, #0ea5e9, #2563eb)',
    secondary: '#f0f9ff',
    accent: '#0284c7',
    heading: '#0c4a6e',
    text: '#334155',
    divider: 'solid',
    background: '#ffffff',
    category: 'modern'
  },
  {
    id: 'sunset-gradient',
    name: 'Sunset Gradient',
    primary: 'linear-gradient(to right, #f43f5e, #fb923c)',
    secondary: '#fff1f2',
    accent: '#e11d48',
    heading: '#4c0519',
    text: '#4b5563',
    divider: 'solid',
    background: '#ffffff',
    category: 'modern'
  }
];

export const getThemeById = (id) => themes.find(t => t.id === id) || themes[0];
