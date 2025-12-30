
import React from 'react';

const Learning: React.FC = () => {
  const courses = [
    { title: 'Logistics Fundamentals', modules: 8, progress: 100, img: 'https://picsum.photos/id/10/300/200' },
    { title: 'Global Trade Compliance', modules: 12, progress: 45, img: 'https://picsum.photos/id/20/300/200' },
    { title: 'Advanced Supply Chain', modules: 15, progress: 0, img: 'https://picsum.photos/id/30/300/200' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Learning Hub</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Master the world of global logistics with AI-guided lessons.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              {course.progress === 100 && (
                <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded">COMPLETED</div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{course.modules} Modules</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
                {course.progress === 100 ? 'Review Course' : course.progress > 0 ? 'Continue' : 'Start Course'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
