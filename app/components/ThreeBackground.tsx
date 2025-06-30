"use client"

import React from "react"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { TorusKnot, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!meshRef.current) return

    try {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = Math.sin(time / 3) * 0.4
      meshRef.current.rotation.y = Math.sin(time / 2) * 0.5
      meshRef.current.rotation.z = Math.sin(time / 4) * 0.3

      meshRef.current.scale.x = 1.8 + Math.sin(time * 0.8) * 0.2
      meshRef.current.scale.y = 1.8 + Math.cos(time * 0.8) * 0.2
      meshRef.current.scale.z = 1.8 + Math.sin(time * 0.8 + 1) * 0.2
    } catch (error) {
      console.error("Animation error:", error)
    }
  })

  return (
    <TorusKnot args={[1, 0.3, 128, 16]} ref={meshRef} scale={[1.8, 1.8, 1.8]}>
      <MeshDistortMaterial
        color="#8B5CF6"
        wireframe
        wireframeLinewidth={1.5}
        emissive="#8B5CF6"
        emissiveIntensity={0.6}
        distort={0.3}
        speed={2}
      />
    </TorusKnot>
  )
}

export default function ThreeBackground() {
  return (
    <ErrorBoundary
      fallback={<div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black opacity-50" />}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <AnimatedTorusKnot />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  )
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Three.js error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

