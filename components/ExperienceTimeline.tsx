'use client'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

interface TimelineItem {
  type: 'work' | 'education'
  title: string
  company: string
  period: string
  description: string[]
}

const timelineItems: TimelineItem[] = [
  {
    type: 'work',
    title: 'CEO & Fundador',
    company: 'Lunar Hosting',
    period: '2023 - Presente',
    description: [
      'Liderança na criação e desenvolvimento da plataforma de hospedagem',
      'Gestão de equipe e desenvolvimento de produtos inovadores',
      'Implementação de soluções escaláveis em cloud computing',
      'Desenvolvimento de infraestrutura de alta disponibilidade',
    ],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: '',
    period: '2022 - 2025',
    description: [
      'Desenvolvimento de aplicações web de grande escala',
      'Liderança técnica em projetos',
      'Implementação de arquiteturas baseadas em microserviços',
    ],
  }
]

export const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Linha vertical central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark-primary/20" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 pr-8 pl-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-surface p-6 rounded-lg shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {item.type === 'work' ? (
                    <FaBriefcase className="w-6 h-6 text-dark-primary mr-3" />
                  ) : (
                    <FaGraduationCap className="w-6 h-6 text-dark-primary mr-3" />
                  )}
                  <h3 className="text-xl font-bold text-dark-secondary">{item.title}</h3>
                </div>
                <p className="text-dark-primary font-medium mb-2">{item.company}</p>
                <p className="text-gray-400 text-sm mb-4">{item.period}</p>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-dark-primary mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 