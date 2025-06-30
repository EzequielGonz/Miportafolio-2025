"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { Heart, ArrowUp } from "lucide-react"

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { name: "Inicio", href: "#home" },
      { name: "Sobre Mí", href: "#about" },
      { name: "Proyectos", href: "#projects" },
      { name: "Habilidades", href: "#skills" },
      { name: "Contacto", href: "#contact" },
    ]
  },
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo Web", href: "#" },
      { name: "Aplicaciones Móviles", href: "#" },
      { name: "Diseño UX/UI", href: "#" },
      { name: "Consultoría", href: "#" },
      { name: "Mantenimiento", href: "#" },
    ]
  },
  {
    title: "Recursos",
    links: [
      { name: "Blog", href: "#" },
      { name: "Tutoriales", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "CV", href: "/documents/Ezequiel-Gonzalez-15-11-24_241119_080506.pdf" },
      { name: "FAQ", href: "#" },
    ]
  }
]

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/EzequielGonz",
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ezequiel-gonzalez",
    color: "hover:text-blue-400"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/5492235223906",
    color: "hover:text-green-400"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:ezegonza724@gmail.com",
    color: "hover:text-red-400"
  }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black/50 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-custom-purple bg-clip-text text-transparent mb-4">
                Ezequiel
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desarrollador full-stack apasionado por crear experiencias digitales excepcionales. 
                Transformo ideas en realidad con código limpio y diseño atractivo.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/60 ${social.color} transition-colors duration-300 p-2 rounded-full bg-white/5 hover:bg-white/10`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault()
                          const element = document.querySelector(link.href)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-custom-purple/10 to-purple-600/10 border border-custom-purple/20 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-white mb-2">
              ¿Interesado en trabajar juntos?
            </h4>
            <p className="text-gray-300 mb-6">
              Suscríbete a mi newsletter para recibir las últimas noticias sobre desarrollo web y oportunidades de colaboración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-custom-purple/50 transition-colors duration-300"
              />
              <button className="bg-custom-purple hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              © 2024 Ezequiel. Todos los derechos reservados. Hecho con{" "}
              <Heart className="inline w-4 h-4 text-red-500" /> en Argentina.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-custom-purple transition-colors duration-300 p-2 rounded-full bg-white/5 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={16} />
              <span className="text-sm">Volver arriba</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
} 