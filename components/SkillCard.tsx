'use client'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface SkillCardProps {
  icon: IconType
  title: string
  level: number
  description: string
}

export const SkillCard = ({ icon: Icon, title, level, description }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-surface p-6 rounded-lg shadow-xl"
    >
      <Icon className="w-12 h-12 text-dark-primary mb-4" />
      <h3 className="text-xl font-bold text-dark-secondary mb-2">{title}</h3>
      <div className="w-full bg-dark-bg rounded-full h-2.5 mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-dark-primary h-2.5 rounded-full"
        />
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
} 