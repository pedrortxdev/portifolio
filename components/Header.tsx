'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const menuItems = [
    { title: 'Início', href: '#home' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Tecnologias', href: '#tecnologias' },
    { title: 'Projetos', href: '#projetos' },
    { title: 'Experiência', href: '#experiencia' },
    { title: 'Contato', href: '#contato' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-dark-surface/80 backdrop-blur-lg border-b border-dark-primary/10"
    >
      <div className="absolute inset-0 bg-gradient-radial from-dark-primary/10 via-transparent to-transparent opacity-50" />
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="group relative">
            <div className="relative flex items-center space-x-1 py-2">
              {/* Container da Logo */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Efeito de Brilho Rotativo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary opacity-75 blur rounded-lg group-hover:opacity-100 transition-opacity duration-500 animate-aurora" />
                
                {/* Logo Principal */}
                <div className="relative bg-dark-surface/90 px-4 py-2 rounded-lg flex items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center"
                  >
                    {/* Símbolo < */}
                    <motion.span
                      className="text-dark-primary font-mono text-xl"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      &lt;
                    </motion.span>
                    
                    {/* Nome */}
                    <motion.div className="mx-1 relative">
                      <motion.span
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary"
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
                        Pedro H.
                      </motion.span>
                      
                      {/* Linha inferior animada */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{ originX: 0 }}
                      />
                    </motion.div>

                    {/* Símbolo /> */}
                    <motion.span
                      className="text-dark-primary font-mono text-xl"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      /&gt;
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Link>

          {/* Menu Desktop com efeito de hover melhorado */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-dark-primary transition-colors duration-300 group"
                >
                  <span className="relative inline-block">
                    {item.title}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <motion.span
                    className="absolute -inset-2 bg-dark-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="menu-hover"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          <MobileMenu />
        </div>
      </nav>
    </motion.header>
  )
} 