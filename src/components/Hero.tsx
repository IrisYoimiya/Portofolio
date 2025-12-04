import { Github, Linkedin, Mail } from 'lucide-react';

import {PROFILE} from "../data.tsx"



export const Hero = () => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          {PROFILE.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          {PROFILE.shortBio}
        </p>
        <div className="flex gap-4 pt-4">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-900">
            <Github size={24} />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${PROFILE.socials.email}`} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-900">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="relative shrink-0">
        <img 
          src={PROFILE.avatar} 
          // alt={PROFILE.name}
          className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl" 
        />
      </div>
    </div>
  </section>
);

export default Hero