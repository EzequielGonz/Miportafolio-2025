"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"

const categories = ["Todos", "Web", "Mobile", "AI", "E-commerce"]

const projects = [
  {
    id: 1,
    title: "AI-TaskManager",
    description:
      "Sistema inteligente de gestión de tareas que utiliza IA para priorizar, categorizar y sugerir fechas límite óptimas para tus actividades diarias.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qH4ImZGtwbRulHrYxhVO9JVD7YHRwU.png",
    url: "https://managertaskai.vercel.app/",
    github: "https://github.com/EzequielGonz/ai-task-manager",
    category: "AI",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    title: "Meurzet - Pagina Web",
    description:
      "Página web moderna y responsiva diseñada para una empresa de turismo, con un elegante tema oscuro, showcase de destinos turísticos y experiencia de usuario fluida para inspirar viajes inolvidables.",
    image: "https://i.ibb.co/h14JyPML/meurzetfoto.png",
    url: "https://www.meurzetviajes.com.ar/",
    github: "https://github.com/EzequielGonz/meurzetviajes",
    category: "Web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true
  },
  {
    id: 3,
    title: "Salvatore Webs - Página Web",
    description: "Sitio web profesional desarrollado para una agencia digital, enfocado en mostrar servicios de marketing, diseño y desarrollo web, con un diseño moderno y orientado a captar nuevos clientes.",
    image: "https://i.ibb.co/dsj5rZHt/salvatorewebsfoto.png",
    url: "https://www.salvatorewebs.com/",
    github: "https://github.com/EzequielGonz/salvatorewebs",
    category: "Web",
    technologies: ["React", "TypeScript", "Styled Components"],
    featured: false
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description: "Un chatbot inteligente que utiliza procesamiento de lenguaje natural para soporte al cliente.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LoHW71NKslDwk8NKAuhHV98T7RXlep.png",
    url: "https://zesty-griffin-a103d4.netlify.app/",
    github: "https://github.com/EzequielGonz/ai-chatbot",
    category: "AI",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    featured: false
  },
  {
    id: 5,
    title: "Maclean - Pagina Web",
    description: "Página web responsiva tipo landing page desarrollada para una empresa de limpieza de tapizados, enfocada en mostrar servicios, beneficios y facilitar el contacto de potenciales clientes.",
    image: "https://i.ibb.co/Cswh9Mn1/Macleanlimpiezafoto.png",
    url: "https://www.macleanlimpieza.com/",
    github: "https://github.com/EzequielGonz/macleanpage",
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    featured: true
  },
  {
    id: 6,
    title: "Distribuidora Mataro - Pagina Web",
    description: "Página web desarrollada para una vinoteca profesional, enfocada en transmitir calidad absoluta, mostrar su catálogo de vinos y facilitar el contacto con clientes y distribuidores.",
    image: "https://i.ibb.co/PvM97TWs/distribuidoramataro.png",
    url: "https://dmataro.com/",
    github: "https://github.com/EzequielGonz/dmataro",
    category: "Mobile",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    featured: false
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-custom-purple"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Mis Proyectos
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Una colección de proyectos que demuestran mi pasión por crear experiencias digitales excepcionales
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? "bg-custom-purple text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "Todos" && <Filter size={16} />}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-custom-purple/50 transition-all duration-300 h-full"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Destacado
                      </span>
                    </motion.div>
                  )}

                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-black overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Overlay with links */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-custom-purple hover:bg-purple-600 text-white p-3 rounded-full transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-custom-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-custom-purple bg-custom-purple/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-custom-purple to-purple-600 hover:from-purple-600 hover:to-custom-purple text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Ver Proyecto
                          <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Te gusta lo que ves? ¡Trabajemos juntos en tu próximo proyecto!
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-custom-purple to-purple-600 hover:from-purple-600 hover:to-custom-purple text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Comenzar Proyecto
            <motion.div
              className="w-5 h-5"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

