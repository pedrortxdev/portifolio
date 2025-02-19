'use client'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: "Lucas Silva",
    role: "Tech Lead",
    content: "Tive o privilégio de trabalhar com o Pedro em projetos complexos de infraestrutura. Sua capacidade técnica e dedicação são impressionantes. Ele tem um conhecimento profundo em DevOps e sempre busca as melhores soluções, superando expectativas.",
  },
  {
    name: "Rafael Costa",
    role: "Desenvolvedor Full Stack",
    content: "O Pedro é um profissional excepcional em infraestrutura e desenvolvimento backend. Sua experiência com Linux e otimização de servidores é notável. Além do conhecimento técnico, ele tem uma excelente capacidade de resolver problemas complexos.",
  },
  {
    name: "Mariana Santos",
    role: "Arquiteta de Software",
    content: "Conheci o Pedro através de projetos open source. Sua contribuição para a comunidade e domínio em tecnologias como Docker, CI/CD e cloud computing é admirável. Ele tem uma habilidade única de tornar conceitos complexos em soluções práticas.",
  }
]

export const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-dark-surface p-8 rounded-xl relative group hover:bg-dark-surface/80 transition-colors duration-300"
        >
          {/* Ícone de aspas */}
          <FaQuoteLeft className="text-dark-primary/20 text-4xl absolute top-4 right-4" />
          
          {/* Conteúdo */}
          <div className="mb-6">
            <p className="text-gray-600 relative z-10 italic leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </p>
          </div>
          
          {/* Informações do cliente */}
          <div className="mt-auto">
            <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
            <p className="text-dark-primary">{testimonial.role}</p>
          </div>

          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  )
} 