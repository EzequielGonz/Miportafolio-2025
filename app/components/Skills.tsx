"use client"

import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaDocker, FaAws, FaGithub, FaFigma 
} from "react-icons/fa"
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, 
  SiPostgresql, SiFirebase, SiVercel, SiPrisma, SiStripe,
  SiRedux, SiJest, SiCypress
} from "react-icons/si"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, level: 92, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 88, color: "#339933" },
      { name: "Python", icon: FaPython, level: 85, color: "#3776AB" },
      { name: "MongoDB", icon: SiMongodb, level: 82, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, level: 85, color: "#FFCA28" },
    ]
  },
  {
    name: "Herramientas & DevOps",
    skills: [
      { name: "Vercel", icon: SiVercel, level: 90, color: "#000000" },
      { name: "GitHub", icon: FaGithub, level: 88, color: "#181717" },
      { name: "Figma", icon: FaFigma, level: 85, color: "#F24E1E" },
    ]
  },
  {
    name: "Testing & Calidad",
    skills: [
      { name: "Jest", icon: SiJest, level: 80, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, level: 75, color: "#17202C" },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
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
            Mis Habilidades
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tecnologías y herramientas que utilizo para crear experiencias digitales excepcionales
          </motion.p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-semibold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-custom-purple/50 transition-all duration-300 h-full">
                      {/* Skill Icon */}
                      <motion.div
                        className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 mx-auto group-hover:bg-white/10 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon 
                          className="text-4xl" 
                          style={{ color: skill.color }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold text-white text-center mb-4 group-hover:text-custom-purple transition-colors duration-300">
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Experiencia</span>
                          <span className="text-custom-purple font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-custom-purple to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="mt-4 text-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.level >= 90 ? 'bg-green-500/20 text-green-400' :
                          skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                          skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {skill.level >= 90 ? 'Experto' :
                           skill.level >= 80 ? 'Avanzado' :
                           skill.level >= 70 ? 'Intermedio' : 'Básico'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-semibold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Otras Habilidades
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Agile/Scrum", "REST APIs", "GraphQL", "Microservicios", 
              "CI/CD", "SEO", "Performance", "Accessibility", 
              "Responsive Design", "PWA", "Web Security", "Data Structures"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center hover:bg-white/10 hover:border-custom-purple/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            ¿Necesitas un desarrollador con estas habilidades? ¡Hablemos de tu proyecto!
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
            Contáctame
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

