'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const menuVariants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.1,
    }
  },
  closed: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    x: 0,
    opacity: 1
  },
  closed: {
    x: -20,
    opacity: 0
  }
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: 'Início', href: '#home' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Projetos', href: '#projetos' },
    { title: 'Experiência', href: '#experiencia' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'Contato', href: '#contato' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-dark-primary focus:outline-none"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-dark-surface/98 backdrop-blur-lg z-40"
          >
            <nav className="container mx-auto px-4 h-full flex items-center justify-center">
              <ul className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl font-bold hover:text-dark-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 