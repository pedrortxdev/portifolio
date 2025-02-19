'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaMedal } from 'react-icons/fa'

interface Certification {
  title: string
  organization: string
  date: string
  image: string
  credential: string
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: '2023',
    image: '/certifications/aws-sa.jpg',
    credential: 'Credencial: AWS-SAA-001',
  },
  {
    title: 'Docker Certified Associate',
    organization: 'Docker Inc.',
    date: '2022',
    image: '/certifications/docker.jpg',
    credential: 'Credencial: DCA-2022',
  },
  {
    title: 'Laravel Certified Developer',
    organization: 'Laravel',
    date: '2022',
    image: '/certifications/laravel.jpg',
    credential: 'Credencial: LCD-2022',
  },
  {
    title: 'Kubernetes Administrator',
    organization: 'Cloud Native Computing Foundation',
    date: '2023',
    image: '/certifications/k8s.jpg',
    credential: 'Credencial: CKA-2023',
  },
  // Adicione mais certificações
]

export const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-dark-surface p-6 rounded-lg shadow-xl"
        >
          <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 to-transparent" />
            <FaMedal className="absolute bottom-4 right-4 text-4xl text-dark-primary" />
          </div>
          <h3 className="text-xl font-bold text-dark-secondary mb-2">{cert.title}</h3>
          <p className="text-dark-primary font-medium">{cert.organization}</p>
          <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
          <p className="text-gray-300 text-sm">{cert.credential}</p>
        </motion.div>
      ))}
    </div>
  )
} 