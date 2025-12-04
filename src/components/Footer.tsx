import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown } from 'lucide-react';

import {PROFILE} from "../data.tsx"

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Mari Bekerja Sama</h2>
      <a 
        href={`mailto:${PROFILE.socials.email}`} 
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        <Mail size={20} />
        Hubungi Saya
      </a>
      <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer