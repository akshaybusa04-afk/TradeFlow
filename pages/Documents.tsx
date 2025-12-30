
import React from 'react';

const Documents: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Document Vault</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Securely manage and draft your logistics documentation.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">upload</span>
          Upload File
        </button>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-slate-50 dark:bg-[#111418] border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase px-6 py-3">
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {[
            { name: 'Comm_Invoice_2901.pdf', type: 'PDF', size: '1.2 MB' },
            { name: 'Bill_of_Lading_Draft.docx', type: 'DOCX', size: '450 KB' },
            { name: 'Packing_List_SHP882.xlsx', type: 'XLSX', size: '890 KB' },
          ].map((doc, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="col-span-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">description</span>
                <span className="text-sm font-medium">{doc.name}</span>
              </div>
              <div className="col-span-2 text-xs text-slate-500">{doc.type}</div>
              <div className="col-span-2 text-xs text-slate-500">{doc.size}</div>
              <div className="col-span-2 flex justify-end gap-2">
                <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[20px]">download</span></button>
                <button className="p-1 text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[20px]">delete</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
