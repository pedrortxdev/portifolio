'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    setMounted(true)

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-surface animate-gradient" />

      {/* Círculos animados */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-dark-primary/10 blur-[120px]"
        animate={{
          x: Math.random() * dimensions.width - 400,
          y: Math.random() * dimensions.height - 400,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-dark-secondary/10 blur-[100px]"
        animate={{
          x: Math.random() * dimensions.width - 300,
          y: Math.random() * dimensions.height - 300,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
          delay: 0.1,
        }}
      />

      {/* Grid de pontos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />

      {/* Linhas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-dark-primary/20 via-dark-primary/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-dark-primary/20 via-dark-primary/5 to-transparent" />
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-dark-primary/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
} 