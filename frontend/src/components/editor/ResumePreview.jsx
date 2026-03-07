import React, { forwardRef, useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Monitor, Layout, Search } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import TemplateRenderer from '../../templates/TemplateRenderer';
import Button from '../ui/Button';

const ResumePreview = forwardRef((props, ref) => {
  const { data, settings, templateId } = useResumeStore();
  const [zoom, setZoom] = useState(0.8);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.4));
  const resetZoom = () => setZoom(0.8);

  return (
    <div className="flex flex-col items-center gap-6 pb-20 relative w-full h-full">
      {/* Zoom Controls Floating */}
      <div className="sticky top-0 z-20 flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-full shadow-xl shadow-gray-200/50 mt-4">
        <button 
          onClick={handleZoomOut}
          className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <div className="px-3 min-w-[60px] text-center border-x border-gray-100">
           <span className="text-xs font-black text-gray-900">{Math.round(zoom * 100)}%</span>
        </div>
        <button 
          onClick={handleZoomIn}
          className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          title="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
        <button 
          onClick={resetZoom}
          className="p-2 ml-1 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 rounded-full text-gray-400 transition-all"
          title="Reset View"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      {/* Page Container */}
      <div 
        className="relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'top center',
        }}
      >
        {/* The Actual Paper */}
        <div 
          ref={ref}
          className="bg-white overflow-hidden origin-top"
          style={{
            width: '210mm',
            minHeight: '297mm',
            boxSizing: 'border-box'
          }}
        >
          <TemplateRenderer 
            templateId={templateId} 
            data={data} 
            settings={settings} 
          />
        </div>

        {/* Subtle Paper Edge Overlay */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-sm shadow-inner"></div>
      </div>

      {/* Empty State / Hint */}
      {(!data.personalInfo.fullName && !data.summary) && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 select-none">
           <div className="flex flex-col items-center gap-4 rotate-[-12deg]">
              <Search size={120} className="text-gray-300" />
              <p className="text-4xl font-black text-gray-300 tracking-tighter">Live Preview</p>
           </div>
        </div>
      )}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
