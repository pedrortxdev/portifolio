'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaRocket, FaShieldAlt, FaHeadset, FaServer } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink: string
  githubLink?: string
  index: number
  preview?: {
    title: string
    subtitle: string
    description: string
    gradient: string
    style?: 'lunar' | 'default' | 'lunar-site'
    stats?: { value: string; label: string }[]
    features?: { icon: string; title: string; description: string }[]
    buttons?: { text: string; style: string }[]
  }
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  demoLink, 
  githubLink, 
  index,
  preview 
}: ProjectCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket': return FaRocket
      case 'shield': return FaShieldAlt
      case 'headset': return FaHeadset
      case 'server': return FaServer
      default: return FaRocket
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-dark-surface rounded-xl overflow-hidden shadow-xl group"
    >
      <div className="relative h-64 overflow-hidden">
        {preview ? (
          <div className={`w-full h-full bg-dark-bg relative overflow-hidden ${
            preview.style === 'lunar' ? 'bg-gradient-to-br from-[#000B1D] to-[#001F4E]' : ''
          }`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {preview.style === 'lunar' ? (
                // Preview especial para o Lunar
                <div className="w-full h-full relative">
                  {/* Efeito de brilho rotativo */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      background: 'radial-gradient(circle at center, #00A3FF 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Conteúdo */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-center"
                    >
                      {/* Logo Lunar */}
                      <motion.div
                        className="mb-4 relative"
                        animate={{ 
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${preview.gradient}`}>
                          {preview.title}
                        </span>
                      </motion.div>
                      
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {preview.subtitle}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {preview.description}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Linhas de grade */}
                    <div className="absolute inset-0" 
                         style={{
                           backgroundImage: `linear-gradient(to right, #00A3FF10 1px, transparent 1px),
                                           linear-gradient(to bottom, #00A3FF10 1px, transparent 1px)`,
                           backgroundSize: '20px 20px'
                         }}
                    />
                    
                    {/* Círculos de brilho */}
                    <motion.div
                      className="absolute -right-20 -top-20 w-40 h-40 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at center, #00A3FF40 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div
                      className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at center, #0066FF40 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </div>
                </div>
              ) : preview.style === 'lunar-site' ? (
                <div className="w-full h-full bg-gradient-to-br from-[#0B0B1A] to-[#1A1A2E] relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col justify-center p-6"
                  >
                    {/* Título Principal */}
                    <motion.h3
                      className="text-5xl font-bold text-[#9333EA] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      {preview.title}
                    </motion.h3>

                    {/* Subtítulo */}
                    <motion.p
                      className="text-xl text-gray-300 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {preview.subtitle}
                    </motion.p>

                    {/* Estatísticas */}
                    <div className="flex justify-start space-x-12 mb-8">
                      {preview.stats?.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="text-center"
                        >
                          <p className="text-2xl font-bold text-[#9333EA]">{stat.value}</p>
                          <p className="text-gray-400 text-sm">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Botões */}
                    <div className="flex space-x-4">
                      {preview.buttons?.map((button, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className={`px-6 py-2 rounded-full ${
                            button.style === 'primary'
                              ? 'bg-[#9333EA] text-white'
                              : 'border border-[#9333EA] text-[#9333EA]'
                          }`}
                        >
                          {button.text}
                        </motion.button>
                      ))}
                    </div>

                    {/* Grid de recursos */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {preview.features?.map((feature, index) => {
                        const Icon = getIcon(feature.icon)
                        return (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <Icon className="w-6 h-6 text-[#9333EA] mt-1" />
                            <div>
                              <h4 className="text-white font-medium">{feature.title}</h4>
                              <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                </div>
              ) : (
                // Preview padrão (código existente para outros projetos)
                <div className="text-center p-6 relative z-10">
                  <motion.h3
                    className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${preview.gradient}`}
                    animate={{ 
                      backgroundPosition: ['0% center', '100% center', '0% center'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% auto',
                    }}
                  >
                    {preview.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {preview.subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300"
                  >
                    {preview.description}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          // Imagem normal para projetos sem preview
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-primary/10 text-dark-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-dark-primary hover:text-dark-accent transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Demo</span>
          </motion.a>
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-dark-primary hover:text-dark-accent transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 