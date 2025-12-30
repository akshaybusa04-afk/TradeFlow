
import React from 'react';
import StatCard from '../components/StatCard';
import ShipmentTable from '../components/ShipmentTable';
import SimulationPreview from '../components/SimulationPreview';
import LearningCard from '../components/LearningCard';
import AIAssistant from '../components/AIAssistant';
import RecentDocs from '../components/RecentDocs';
import { Shipment, Document } from '../types';

const Dashboard: React.FC = () => {
  const shipments: Shipment[] = [
    {
      id: '#SHP-2901',
      route: { from: 'CN', to: 'US', fromCity: 'Shanghai', toCity: 'Los Angeles' },
      eta: 'Oct 28',
      status: 'In Transit'
    },
    {
      id: '#AIR-8821',
      route: { from: 'DE', to: 'US', fromCity: 'Frankfurt', toCity: 'NYC' },
      eta: 'Oct 26',
      status: 'Customs',
      delay: '+2d'
    }
  ];

  const docs: Document[] = [
    { id: '1', name: 'Comm_Invoice_2901.pdf', type: 'pdf', size: '1.2 MB', time: '2 mins ago' },
    { id: '2', name: 'Bill_of_Lading_Draft.docx', type: 'doc', size: '450 KB', time: '2 hrs ago' }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back, Alex</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Here's your logistics overview for Tuesday, Oct 24.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          <QuickActionButton icon="local_shipping" label="Track Shipment" color="text-primary" />
          <QuickActionButton icon="smart_toy" label="Ask AI Assistant" color="text-purple-500" />
          <QuickActionButton icon="calculate" label="Profit Calc" color="text-green-500" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Active Shipments" 
          value="14" 
          trend="+ 2 new" 
          trendColor="text-emerald-500" 
          icon="directions_boat" 
          iconColor="text-primary"
          bgHighlight="bg-primary/5"
        />
        <StatCard 
          title="Learning Progress" 
          value="65%" 
          trend="Module 3/5" 
          icon="school" 
          iconColor="text-orange-500"
          bgHighlight="bg-orange-500/5"
          progress={65}
        />
        <StatCard 
          title="Pending Docs" 
          value="3" 
          trend="Action Required" 
          trendColor="text-red-500" 
          icon="description" 
          iconColor="text-red-500"
          bgHighlight="bg-red-500/5"
        />
        <StatCard 
          title="Est. Profit (Sim)" 
          value="$12.4k" 
          trend="+5% vs last sim" 
          trendColor="text-emerald-500" 
          icon="trending_up" 
          iconColor="text-emerald-500"
          bgHighlight="bg-emerald-500/5"
        />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ShipmentTable shipments={shipments} />
          <SimulationPreview />
        </div>
        <div className="space-y-8">
          <LearningCard />
          <AIAssistant />
          <RecentDocs documents={docs} />
        </div>
      </div>
    </div>
  );
};

const QuickActionButton: React.FC<{ icon: string; label: string; color: string }> = ({ icon, label, color }) => (
  <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary dark:hover:border-primary transition-all whitespace-nowrap">
    <span className={`material-symbols-outlined ${color} text-[20px]`}>{icon}</span>
    {label}
  </button>
);

export default Dashboard;
