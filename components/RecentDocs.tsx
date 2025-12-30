
import React from 'react';
import { Document } from '../types';

interface RecentDocsProps {
  documents: Document[];
}

const RecentDocs: React.FC<RecentDocsProps> = ({ documents }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">Recent Documents</h3>
        <button className="text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
        </button>
      </div>
      <ul className="space-y-3">
        {documents.map((doc) => (
          <li key={doc.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg cursor-pointer transition-colors group">
            <div className={`p-2 rounded ${doc.type === 'pdf' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}`}>
              <span className="material-symbols-outlined text-[20px]">{doc.type === 'pdf' ? 'picture_as_pdf' : 'description'}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{doc.name}</p>
              <p className="text-xs text-slate-500">{doc.time} • {doc.size}</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">download</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentDocs;
