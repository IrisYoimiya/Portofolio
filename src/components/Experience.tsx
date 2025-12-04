import { Briefcase } from 'lucide-react';

import {EXPERIENCES} from "../data.tsx"

const Experience = () => (
  <section id="experience" className="py-20 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2">
      <Briefcase className="text-blue-600" /> Pengalaman
    </h2>
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              {exp.period}
            </span>
          </div>
          <div className="text-blue-600 font-medium mb-3">{exp.company}</div>
          <p className="text-gray-600 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience