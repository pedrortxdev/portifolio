'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface StatProps {
  value: number
  label: string
  duration?: number
  suffix?: string
}

const StatNumber = ({ value, duration = 2, suffix = '' }: StatProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16.67) // 60fps

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <span ref={ref} className="text-3xl font-bold text-dark-primary">
      {count}{suffix}
    </span>
  )
}

export const Stats = () => {
  const stats = [
    { value: 3, label: 'Anos de Experiência', suffix: '+' },
    { value: 5, label: 'Projetos Entregues', suffix: '+' },
    { value: 6, label: 'Clientes Ativos', suffix: '+' },
    { value: 8, label: 'Tecnologias Dominadas', suffix: '+' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-dark-surface p-6 rounded-lg text-center"
        >
          <StatNumber
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
          <p className="text-gray-400 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
} 