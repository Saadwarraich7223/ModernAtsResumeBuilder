import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  FileText, 
  Trash2, 
  Edit3, 
  Clock, 
  Layout, 
  Settings as SettingsIcon, 
  LogOut,
  Sparkles,
  ChevronRight,
  MoreVertical,
  Search,
  Moon,
  Sun,
  LayoutGrid,
  FileSearch,
} from 'lucide-react';
import useResumeStore from '../store/resumeStore';
import useAuthStore from '../store/authStore';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const { resumes, fetchResumes, deleteResume, resetResume, loading } = useResumeStore();
  const { user, logout } = useAuthStore();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchResumes();
    }
  }, [user, navigate, fetchResumes]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDarkMode]);

  const handleCreateNew = () => {
    resetResume(false);
    navigate('/editor');
  };

  const handleEdit = (id) => {
    navigate(`/editor?id=${id}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarLinks = [
    { icon: LayoutGrid, label: 'My Resumes', active: true },
    { icon: FileSearch, label: 'AI Review', active: false },
    { icon: SettingsIcon, label: 'Settings', active: false },
  ];

  return (
    <div className={`min-h-screen flex overflow-hidden font-sans selection:bg-indigo-500/20 transition-colors duration-500 ${isDarkMode ? 'dark bg-[#020617]' : 'bg-[#f8fafc]'}`}>
      <div className="noise-bg"></div>
      
      {/* SaaS Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex relative z-20">
        <div className="p-6">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <FileText className="text-white" size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 font-heading">
              Resume<span className="text-indigo-600">Builder</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 pt-4">
          {sidebarLinks.map((link) => (
            <button 
              key={link.label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                link.active 
                ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <link.icon size={18} />
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto space-y-4">
           <div className="p-4 bg-indigo-600 rounded-2xl relative overflow-hidden group shadow-lg shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl rounded-full -mr-12 -mt-12"></div>
              <p className="text-[10px] font-black text-indigo-100 uppercase tracking-widest flex items-center gap-2 mb-2">
                 <Sparkles size={12} /> Pro Account
              </p>
              <p className="text-[11px] text-white font-medium leading-relaxed mb-3">
                 Unlimited exports and AI-powered reviews.
              </p>
              <button className="w-full py-2 bg-white rounded-lg text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                 Upgrade
              </button>
           </div>

           <button 
             onClick={handleLogout}
             className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all"
           >
             <LogOut size={18} />
             <span>Sign Out</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10">
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 px-6 flex items-center justify-between">
           <div className="flex items-center gap-4 lg:hidden">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                 <FileText className="text-white" size={16} />
              </div>
           </div>

           <div className="relative max-w-sm w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Quick search..." 
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs font-medium focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all outline-none"
              />
           </div>

           <div className="flex items-center gap-4">
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

              <div className="flex items-center gap-3">
                 <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-50">{user?.name || 'User'}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Personal</p>
                 </div>
                 <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                    {user?.name?.[0] || 'U'}
                 </div>
              </div>
           </div>
        </header>

        <div className="p-6 md:p-10 max-w-5xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
           >
              <div className="text-left">
                 <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-2 font-heading">My Resumes</h1>
                 <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Create and manage your professional profiles.</p>
              </div>
              <Button onClick={handleCreateNew} variant="gradient" className="rounded-xl h-11 px-6 shadow-lg shadow-indigo-500/20 font-bold text-sm">
                 <Plus size={18} className="mr-2" /> New Resume
              </Button>
           </motion.div>

           {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-48 glass-card rounded-2xl animate-pulse"></div>
                ))}
             </div>
           ) : resumes.length === 0 ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-center"
             >
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600 mb-6">
                   <FileText size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">No resumes yet</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">Start by creating your first professional resume.</p>
                <Button onClick={handleCreateNew} variant="secondary" className="rounded-xl px-8 border-slate-200 dark:border-slate-800">
                   Create Resume
                </Button>
             </motion.div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumes.map((resume, idx) => (
                  <motion.div 
                    key={resume._id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bento-card p-6 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-6">
                       <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-transform group-hover:scale-110">
                          <FileText size={20} />
                       </div>
                       <button className="p-1.5 text-slate-300 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                          <MoreVertical size={16} />
                       </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                       {resume.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                       <Clock size={12} />
                       <span>{new Date(resume.updatedAt).toLocaleDateString()}</span>
                    </div>

                    <div className="mt-auto flex items-center gap-2">
                       <Button 
                         onClick={() => handleEdit(resume._id)}
                         variant="secondary" 
                         className="flex-1 rounded-lg h-9 text-[11px] border-slate-100 dark:border-slate-800 font-bold"
                       >
                          Edit Profile
                       </Button>
                       <button 
                         onClick={() => {
                           if(window.confirm('Delete this resume?')) deleteResume(resume._id);
                         }}
                         className="w-9 h-9 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all"
                       >
                          <Trash2 size={14} />
                       </button>
                    </div>
                  </motion.div>
                ))}
             </div>
           )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
