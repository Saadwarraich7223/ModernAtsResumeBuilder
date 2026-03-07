import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Search
} from 'lucide-react';
import useResumeStore from '../store/resumeStore';
import useAuthStore from '../store/authStore';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const { resumes, fetchResumes, deleteResume, resetResume, loading } = useResumeStore();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchResumes();
    }
  }, [user, navigate, fetchResumes]);

  const handleCreateNew = () => {
    resetResume();
    navigate('/editor');
  };

  const handleEdit = (id) => {
    navigate(`/editor?id=${id}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans flex overflow-hidden">
      {/* SaaS Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col hidden lg:flex">
        <div className="p-8 pb-12">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <FileText className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">ResumeBuilder</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold bg-primary-50 text-primary-600 transition-all">
            <Layout size={20} />
            <span>My Resumes</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all">
            <Sparkles size={20} />
            <span>AI Tools</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all">
            <SettingsIcon size={20} />
            <span>Account Settings</span>
          </button>
        </nav>

        <div className="p-6 mt-auto">
           <div className="p-5 bg-indigo-50 rounded-3xl border border-indigo-100 space-y-3 mb-6">
              <p className="text-xs font-black text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                 <Sparkles size={14} /> Pro Feature
              </p>
              <p className="text-[11px] text-indigo-700/80 font-bold leading-relaxed">
                 Unlock unlimited resumes and high-priority AI generations.
              </p>
              <button className="text-[11px] font-black text-indigo-600 uppercase tracking-widest hover:underline flex items-center gap-1">
                 Upgrade Now <ChevronRight size={12} />
              </button>
           </div>

           <button 
             onClick={handleLogout}
             className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
           >
             <LogOut size={20} />
             <span>Sign Out</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 bg-white/60 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-10 px-8 flex items-center justify-between">
           <h2 className="text-xl font-black tracking-tight text-gray-900 lg:hidden">ResumeBuilder</h2>
           <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search resumes..." 
                className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary-100 transition-all"
              />
           </div>

           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                 <p className="text-sm font-black text-gray-900">{user?.name || 'User'}</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Free Account</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-600 p-0.5 shadow-md">
                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-primary-600">
                    {user?.name?.[0] || 'U'}
                 </div>
              </div>
           </div>
        </header>

        <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-2 text-left">My Resumes</h1>
                 <p className="text-gray-500 font-medium text-left">Manage and optimize your professional documents.</p>
              </div>
              <Button onClick={handleCreateNew} variant="gradient" size="lg" className="rounded-2xl px-8 shadow-lg shadow-primary-500/20">
                 <Plus size={20} className="mr-2" /> Create New Resume
              </Button>
           </div>

           {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-64 bg-white border border-gray-100 rounded-[2.5rem] animate-pulse"></div>
                ))}
             </div>
           ) : resumes.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-24 bg-white border border-dashed border-gray-200 rounded-[3rem]">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300 mb-6">
                   <FileText size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No resumes found</h3>
                <p className="text-gray-500 font-medium mb-8">Start building your professional profile today.</p>
                <Button onClick={handleCreateNew} variant="secondary" className="rounded-full px-10">
                   Create Your First Resume
                </Button>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumes.map((resume) => (
                  <div 
                    key={resume._id} 
                    className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary-100 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 relative flex flex-col text-left"
                  >
                    <div className="absolute top-6 right-6">
                       <button className="p-2 text-gray-300 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
                          <MoreVertical size={18} />
                       </button>
                    </div>

                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                       <FileText size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors text-left truncate pr-8">
                       {resume.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                       <Clock size={12} />
                       <span>Updated {new Date(resume.updatedAt).toLocaleDateString()}</span>
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                       <Button 
                         onClick={() => handleEdit(resume._id)}
                         variant="secondary" 
                         className="flex-1 rounded-xl h-11 text-xs border-gray-100"
                       >
                          <Edit3 size={14} className="mr-2" /> Edit
                       </Button>
                       <button 
                         onClick={() => {
                           if(window.confirm('Delete this resume?')) deleteResume(resume._id);
                         }}
                         className="w-11 h-11 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all"
                       >
                          <Trash2 size={16} />
                       </button>
                    </div>
                  </div>
                ))}
             </div>
           )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
