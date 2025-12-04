import {PROFILE, SKILLS} from "../data"
import { User } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <User className="text-blue-600" /> Tentang Saya
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-10">
        {PROFILE.about}
      </p>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 shadow-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About