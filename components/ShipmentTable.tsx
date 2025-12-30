
import React from 'react';
import { Shipment } from '../types';

interface ShipmentTableProps {
  shipments: Shipment[];
}

const ShipmentTable: React.FC<ShipmentTableProps> = ({ shipments }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-semibold text-slate-900 dark:text-white">Active Shipments</h3>
        <button className="text-sm text-primary hover:text-primary-dark font-medium">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-[#111418]">
            <tr>
              <th className="px-6 py-3 font-medium">ID</th>
              <th className="px-6 py-3 font-medium">Route</th>
              <th className="px-6 py-3 font-medium">ETA (AI Est.)</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {shipments.map((shp) => (
              <tr key={shp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{shp.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 dark:text-white font-medium">{shp.route.from}</span>
                    <span className="material-symbols-outlined text-slate-400 text-xs">arrow_forward</span>
                    <span className="text-slate-900 dark:text-white font-medium">{shp.route.to}</span>
                  </div>
                  <span className="text-xs text-slate-500">{shp.route.fromCity} -> {shp.route.toCity}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white font-medium">{shp.eta}</span>
                    {shp.delay ? (
                      <span className="text-xs text-orange-500">Delayed ({shp.delay})</span>
                    ) : (
                      <span className="text-xs text-emerald-500">On Time</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${shp.status === 'In Transit' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                      shp.status === 'Customs' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300'}
                  `}>
                    {shp.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentTable;
