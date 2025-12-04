import { PROJECTS } from "../data";
import { Code, ExternalLink } from "lucide-react"; // 1. Tambah ExternalLink di sini

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2">
        <Code className="text-blue-600" /> Projek
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          // Tambahkan flex dan flex-col agar footer card bisa didorong ke bawah
          <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            <div className="h-48 overflow-hidden bg-gray-200 shrink-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Tambahkan flex-1 agar konten mengisi ruang kosong */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>
              
              {/* mb-auto akan mendorong elemen di bawahnya (tags & button) ke dasar card */}
              <p className="text-gray-600 mb-6 text-sm mb-auto">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2. BAGIAN BUTTON LINK */}
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Lihat Project
                <ExternalLink size={16} />
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;