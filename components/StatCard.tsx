
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendColor?: string;
  icon: string;
  iconColor: string;
  bgHighlight: string;
  progress?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, value, trend, trendColor = "text-slate-500 dark:text-slate-400", 
  icon, iconColor, bgHighlight, progress 
}) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-24 h-24 ${bgHighlight} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</span>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900 dark:text-white">{value}</span>
        <span className={`text-xs font-medium ${trendColor} flex items-center`}>
          {trend}
        </span>
      </div>
      {progress !== undefined && (
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
          <div className="bg-orange-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
