import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  // Temporary placeholder projects
  const projects = [
    {
      title: "Coming Soon",
      description:
        "Exciting projects are in development. Stay tuned for amazing web applications and creative solutions!",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&auto=format",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "#",
      isPlaceholder: true,
    },
    {
      title: "Future Project",
      description:
        "This space will showcase innovative web development projects that demonstrate modern design and functionality.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&auto=format",
      tech: ["HTML", "CSS", "WordPress"],
      github: "#",
      live: "#",
      isPlaceholder: true,
    },
    {
      title: "Upcoming Work",
      description: "Creative digital experiences and user-friendly interfaces will be featured here soon.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop&auto=format",
      tech: ["Figma", "React", "Tailwind"],
      github: "#",
      live: "#",
      isPlaceholder: true,
    },
  ]

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='Arial, sans-serif' fontSize='14' fill='%236b7280'%3EProject Image%3C/text%3E%3C/svg%3E"
                  }}
                />
                {project.isPlaceholder && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/50 px-3 py-1 rounded">Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      project.isPlaceholder
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                    disabled={project.isPlaceholder}
                  >
                    <Github size={16} />
                    Code
                  </button>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      project.isPlaceholder
                        ? "border border-gray-300 dark:border-gray-600 text-gray-400 cursor-not-allowed"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                    disabled={project.isPlaceholder}
                  >
                    <ExternalLink size={16} />
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
