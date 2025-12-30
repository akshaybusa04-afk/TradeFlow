
import React from 'react';

const SimulationPreview: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">Live Trade Simulation</h3>
        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">Scenario: Electronics Import</span>
      </div>
      <div className="relative w-full h-72 rounded-lg overflow-hidden bg-slate-900 group">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPh0iHdIv5QLizxqb0U4HsH_gBrVBWdwcx-Nb9ixAYu66vg_VdcqEV9y9BB4EwQfhLdeRrv78xrl5WnZeWV5wn79rln44CTCpYPeJtpTJewhsFYUKIam1xsU2r23KhgTIJyNdpI6tzKW4yYHE47oqIf4_d1enp2EgICAzBZ0r4rjMq0qJQgZyaq6l28o9elvHfZLpaFmCEzR1Gie-3AAhqH__dhqNgw3YsfysVsFwXY7BNERNvKY-jzJAAL_SLBeaDQ4F8lzckH5c')" }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shadow-2xl">
            <p className="text-white text-base font-semibold">Current Step: Freight Forwarding</p>
            <div className="flex items-center gap-3 justify-center mt-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
              <span className="text-sm text-slate-300 font-medium">Calculating Duty Fees...</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs px-3 py-2 rounded-md transition-colors border border-white/5">
            Reset
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white text-xs px-4 py-2 rounded-md shadow-lg transition-colors font-medium">
            Resume Simulation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulationPreview;
