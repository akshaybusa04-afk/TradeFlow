
import React from 'react';

const Tracking: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Global Tracking</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Real-time visibility into your entire supply chain.</p>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 h-[600px] flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-80 space-y-4 overflow-y-auto pr-2 scrollbar-hide">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
            <h4 className="font-bold text-sm">#SHP-2901</h4>
            <p className="text-xs text-slate-500 mt-1">Shanghai -> Los Angeles</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-bold text-primary uppercase">In Transit</span>
              <span className="text-[10px] text-slate-400">ETA: Oct 28</span>
            </div>
          </div>
          {[1,2,3,4].map(i => (
            <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors cursor-pointer">
              <h4 className="font-bold text-sm text-slate-400">#SHP-302{i}</h4>
              <p className="text-xs text-slate-500 mt-1">London -> New York</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Pending</span>
                <span className="text-[10px] text-slate-400">ETA: TBD</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-800">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPh0iHdIv5QLizxqb0U4HsH_gBrVBWdwcx-Nb9ixAYu66vg_VdcqEV9y9BB4EwQfhLdeRrv78xrl5WnZeWV5wn79rln44CTCpYPeJtpTJewhsFYUKIam1xsU2r23KhgTIJyNdpI6tzKW4yYHE47oqIf4_d1enp2EgICAzBZ0r4rjMq0qJQgZyaq6l28o9elvHfZLpaFmCEzR1Gie-3AAhqH__dhqNgw3YsfysVsFwXY7BNERNvKY-jzJAAL_SLBeaDQ4F8lzckH5c" 
            className="w-full h-full object-cover opacity-50"
            alt="World Map"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/60 text-sm font-medium">Select a shipment to view path</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
