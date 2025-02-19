'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaEnvelope, FaServer, FaCode } from 'react-icons/fa'

export const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/pedrortxdev', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:pedro@mail.lunarhosting.com.br', label: 'Email' },
  ]

  return (
    <footer className="relative bg-dark-surface py-16 overflow-hidden">
      {/* Efeito de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-surface to-dark-bg opacity-50" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-dark-primary/20 via-dark-primary/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-dark-primary/20 via-dark-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <FaServer className="text-dark-primary text-3xl mr-2" />
              <h3 className="text-xl font-bold text-white">Lunar Hosting</h3>
            </div>
            <p className="text-gray-400">Soluções em hospedagem de alta performance</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-dark-primary mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-dark-primary transition-all duration-300 flex items-center justify-center">
                  <span className="relative group">
                    Início
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-dark-primary transition-all duration-300 flex items-center justify-center">
                  <span className="relative group">
                    Projetos
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-dark-primary transition-all duration-300 flex items-center justify-center">
                  <span className="relative group">
                    Contato
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-dark-primary mb-6">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-dark-primary transition-colors duration-300"
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-center mb-4">
            <FaCode className="text-dark-primary mr-2" />
            <p className="text-gray-400">
              Desenvolvido com Next.js e Tailwind CSS
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pedro Henrique. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 