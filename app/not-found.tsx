'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaHome, FaSearch } from 'react-icons/fa'

export default function NotFound() {
  // Animação dos números 404
  const numberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  }

  // Animação do glitch
  const glitchAnimation = {
    hidden: {
      clipPath: 'inset(50% 0 50% 0)',
    },
    visible: {
      clipPath: 'inset(50% 0 50% 0)',
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Background com efeito de grade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />
      
      {/* Círculos de gradiente */}
      <motion.div
        className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-dark-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-64 w-[500px] h-[500px] bg-dark-secondary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Números 404 */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {[4, 0, 4].map((num, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
              className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary"
            >
              {num}
            </motion.div>
          ))}
        </div>

        {/* Mensagem de erro com efeito glitch */}
        <motion.h2
          variants={glitchAnimation}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-bold text-white mb-6"
        >
          Página não encontrada
        </motion.h2>

        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Ops! Parece que você se perdeu no espaço digital. 
          A página que você está procurando pode ter sido movida ou não existe.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 bg-dark-primary text-white px-6 py-3 rounded-full
                         hover:bg-dark-accent transition-colors duration-300"
            >
              <FaHome className="text-lg" />
              <span>Voltar ao Início</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contato"
              className="flex items-center space-x-2 border-2 border-dark-primary text-dark-primary px-6 py-3 rounded-full
                         hover:bg-dark-primary hover:text-white transition-all duration-300"
            >
              <FaSearch className="text-lg" />
              <span>Reportar Problema</span>
            </Link>
          </motion.div>
        </div>

        {/* Elemento decorativo */}
        <motion.div
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59,130,246,0.5) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
} 