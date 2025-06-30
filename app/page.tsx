"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#13001A]">
      <div className="w-16 h-16 border-4 border-custom-purple border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13001A] bg-gradient-to-br from-black via-[#13001A] to-black text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      </Suspense>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

