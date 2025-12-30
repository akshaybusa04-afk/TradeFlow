
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/' },
    { name: 'Learning', icon: 'school', path: '/learning' },
    { name: 'Simulations', icon: 'monitoring', path: '/simulations' },
    { name: 'Tracking', icon: 'explore', path: '/tracking' },
    { name: 'Documents', icon: 'description', path: '/documents' },
    { name: 'Tools', icon: 'calculate', path: '/tools' },
  ];

  const bottomNavItems = [
    { name: 'Settings', icon: 'settings', path: '/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar - Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-[#111418] 
        transition-transform duration-300 md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-none tracking-tight">TradeFlow AI</h1>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Logistics Platform</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium
                ${isActive(item.path) 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }
              `}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors
              `}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/64/100/100')" }}></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Alex Morgan</p>
              <p className="text-xs text-slate-500 truncate">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-[#111418] flex items-center justify-between px-6 z-10 shrink-0">
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg font-bold">TradeFlow AI</h2>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
              <input 
                className="w-full bg-slate-100 dark:bg-surface-dark border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-500" 
                placeholder="Search shipments, docs, or lessons..." 
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-400 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111418]"></span>
            </button>
            <button className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Shipment
            </button>
          </div>
        </header>

        {/* Viewport */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Sidebar Overlay - Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
