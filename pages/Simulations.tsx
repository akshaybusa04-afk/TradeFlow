
import React from 'react';

const Simulations: React.FC = () => {
  const scenarios = [
    { name: 'Customs Crisis: Holiday Rush', difficulty: 'Hard', type: 'Crisis' },
    { name: 'Route Optimization: Fuel Spike', difficulty: 'Medium', type: 'Finance' },
    { name: 'Inventory Management: Oversupply', difficulty: 'Easy', type: 'Operations' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Trade Simulations</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Test your logistics skills in realistic, AI-generated trade scenarios.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scen, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <span className="material-symbols-outlined text-2xl">monitoring</span>
              </div>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                scen.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : 
                scen.difficulty === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
              }`}>
                {scen.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{scen.name}</h3>
            <p className="text-sm text-slate-500 mb-6">Manage high-volume shipments under strict regulatory constraints and fluctuating costs.</p>
            <div className="flex items-center gap-4">
              <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">
                Launch Scenario
              </button>
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Leaderboard
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Simulations;
