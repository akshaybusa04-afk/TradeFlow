
import React from 'react';

const LearningCard: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
      <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Continue Learning</h3>
      <div className="relative rounded-lg overflow-hidden aspect-video mb-4 bg-slate-200 dark:bg-slate-800 group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVdDqBrKDxFCSq5PjbsYn-CSLJP5uFy8avYWEivBLyKNkHXzpArV09qYJqMPuFjKaHX0fMZIZMboRTJqft3-y06rG-jufVTpv5IMvxh0kMJHCzYghvaRM3woLzl3ozcDQtaQNQ0gXCCkyddt2zSziBnOcRYiJ7R12uv_VJjjogjWvFsA-D1qyu17UpnmqWbfYlJWOtlJmuiV7M7O9GQsiFqGWFmDC9t1RDKpe3full6sRYgUrpjDB1iuHp6M0o9uHvIKsZytVfZrE')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group-hover:bg-black/50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl border border-white/30">
            <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
          </div>
        </div>
      </div>
      <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">Incoterms 2020: Risk & Responsibility</h4>
      <p className="text-sm text-slate-500 mt-1 mb-4">Module 3 • Lesson 2 of 8</p>
      <button className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors">
        Continue Lesson
      </button>
    </div>
  );
};

export default LearningCard;
