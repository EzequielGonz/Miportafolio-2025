"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, Mail, Github } from "lucide-react"
import ParticleBackground from "./ParticleBackground"

const roles = [
  "Desarrollador Full Stack",
  "Diseñador UX/UI", 
  "Especialista en React",
  "Creador de Experiencias Digitales"
]

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/EzequielGonz",
    color: "hover:text-gray-400"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ezegonza724@gmail.com",
    color: "hover:text-red-400"
  }
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900/20 to-black animate-gradient"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-4 h-4 bg-custom-purple/30 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Social Links */}
        <motion.div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/60 ${social.color} transition-colors duration-300`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg md:text-xl text-custom-purple mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            👋 ¡Hola! Soy
          </motion.p>
          
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-custom-purple to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ezequiel
          </motion.h1>

          <div className="h-16 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-white to-custom-purple bg-clip-text text-transparent font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Transformo ideas en experiencias digitales excepcionales. 
            Especializado en crear aplicaciones web modernas y responsivas 
            que combinan diseño atractivo con funcionalidad robusta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-custom-purple to-purple-600 hover:from-purple-600 hover:to-custom-purple text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Ver Proyectos
              <motion.div
                className="w-5 h-5"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>

            <motion.a
              href="/documents/Ezequiel-Gonzalez-15-11-24_241119_080506.pdf"
              download="Ezequiel-Gonzalez-CV.pdf"
              className="group border-2 border-white/20 hover:border-custom-purple text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center gap-2 hover:bg-white/5"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Descargar CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

