'use client'
import { motion } from 'framer-motion'
import { 
  FaPhp, FaLaravel, FaDocker, FaLinux, 
  FaGithub, FaAws, FaNodeJs 
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiMysql, SiNginx, 
  SiTailwindcss 
} from 'react-icons/si'

interface TechnologyProps {
  icon: React.ElementType;
  name: string;
}

interface Technology {
  name: string
  icon: React.ElementType
  color: string
}

const technologies: Technology[] = [
  { name: 'PHP', icon: FaPhp, color: 'text-blue-500' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-500' },
  { name: 'Nginx', icon: SiNginx, color: 'text-green-600' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
]

export const Technologies = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center p-4 bg-dark-surface rounded-lg shadow-xl"
        >
          <tech.icon className={`w-12 h-12 ${tech.color} mb-3`} />
          <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
} 