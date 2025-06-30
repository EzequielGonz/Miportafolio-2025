"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "3+",
    label: "Años de Experiencia",
    color: "text-blue-400"
  },
  {
    icon: Code,
    value: "50+",
    label: "Proyectos Completados",
    color: "text-green-400"
  },
  {
    icon: Users,
    value: "30+",
    label: "Clientes Satisfechos",
    color: "text-purple-400"
  }
]

const skills = [
  "React & Next.js", "TypeScript", "Node.js", "Python", 
  "Tailwind CSS", "Figma", "PostgreSQL", "MongoDB",
  "AWS", "Docker", "Git", "Agile"
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
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
            Sobre Mí
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apasionado desarrollador full-stack con experiencia en crear experiencias digitales excepcionales
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 group-hover:bg-white/10 transition-colors duration-300 ${stat.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon size={32} />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Mi Historia
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un desarrollador full-stack apasionado con más de 3 años de experiencia en la creación 
                de aplicaciones web modernas y responsivas. Mi viaje en el desarrollo web comenzó con la 
                curiosidad de entender cómo funcionan las aplicaciones que uso todos los días.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Me especializo en tecnologías modernas como React, Next.js, TypeScript y Node.js, 
                combinando un diseño atractivo con una arquitectura sólida y escalable. Mi enfoque 
                se centra en crear experiencias de usuario excepcionales que no solo se ven bien, 
                sino que también funcionan de manera eficiente y intuitiva.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Mi Filosofía
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Creo que el mejor código es aquel que es limpio, mantenible y fácil de entender. 
                Me esfuerzo por escribir código que no solo funcione, sino que también sea elegante 
                y eficiente. Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para 
                mantenerme al día con las últimas tendencias del desarrollo web.
              </p>
            </div>

            {/* Skills tags */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Tecnologías Principales
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-custom-purple/20 hover:border-custom-purple/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Profile image with effects */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-custom-purple to-purple-600 rounded-2xl blur-xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/sdkt8W1h/Whats-App-Image-2024-11-06-at-09-16-45.jpg"
                  alt="Ezequiel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-custom-purple/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

