'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'
import { SkillCard } from '@/components/SkillCard'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Testimonials } from '@/components/Testimonials'
import { 
  FaDatabase, 
  FaPhp, FaDocker, FaLinux, FaGitAlt
} from 'react-icons/fa'
import { 
  SiNextdotjs
} from 'react-icons/si'
import { Stats } from '@/components/Stats'
import { Technologies } from '@/components/Technologies'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { AnimatedText } from '@/components/AnimatedText'
import { ScrollToTop } from '@/components/ScrollToTop'
import { CVDownloadButton } from '@/components/CV'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  const skills = [
    {
      icon: FaPhp,
      title: 'Backend PHP',
      level: 85,
      description: 'PHP, Laravel, API RESTful, Hospedagem',
    },
    {
      icon: FaLinux,
      title: 'System Administration',
      level: 90,
      description: 'Linux, Apache, Nginx, Shell Script',
    },
    {
      icon: SiNextdotjs,
      title: 'Backend JavaScript',
      level: 80,
      description: 'Next.js, Node.js, API Routes',
    },
    {
      icon: FaDocker,
      title: 'DevOps',
      level: 82,
      description: 'Docker, CI/CD, AWS, Cloud',
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      level: 78,
      description: 'MySQL, PostgreSQL, Otimização',
    },
    {
      icon: FaGitAlt,
      title: 'Controle de Versão',
      level: 85,
      description: 'Git, GitHub, Workflows',
    }
  ]

  const projects = [
    {
      title: 'Painel de Controle Lunar',
      description: 'Sistema de gerenciamento de hospedagem com foco em usabilidade e performance',
      image: '/lunar.png',
      technologies: ['PHP', 'Laravel'],
      demoLink: 'https://lunarhosting.com.br/dashboard',
      githubLink: 'https://github.com/lunarhosting-dashboard',
      preview: {
        title: "Lunar",
        subtitle: "Painel de Controle",
        description: "Gerencie sua hospedagem com facilidade",
        gradient: "from-[#00A3FF] via-[#0066FF] to-[#3B82F6]",
        style: "lunar" as const
      }
    },
    {
      title: 'Site Lunar Hosting',
      description: 'Website institucional com design moderno e responsivo para a Lunar Hosting',
      image: '/lunar-site.png',
      technologies: ['HTML', 'CSS', 'PHP'],
      demoLink: 'https://lunarhosting.com.br',
      preview: {
        title: "Performance",
        subtitle: "Servidores otimizados para seu projeto",
        description: "Ativação instantânea e suporte 24/7",
        gradient: "from-[#9333EA] via-[#A855F7] to-[#9333EA]",
        style: "lunar-site" as const,
        stats: [
          { value: "99.9%", label: "Uptime" },
          { value: "45s", label: "Ativação" },
          { value: "24/7", label: "Suporte" }
        ],
        features: [
          { icon: "rocket", title: "Ativação Instantânea", description: "Seu servidor pronto em menos de 45 segundos após a confirmação do pagamento" },
          { icon: "shield", title: "Proteção Anti-DDoS", description: "Proteção avançada contra ataques DDoS de até 296TBps" },
          { icon: "headset", title: "Suporte 24/7", description: "Equipe técnica especializada disponível 24 horas por dia" },
          { icon: "server", title: "Hardware Premium", description: "Servidores com processadores Xeon Platinum e SSDs NVMe" }
        ],
        buttons: [
          { text: "Começar Agora", style: "primary" },
          { text: "Saiba Mais", style: "outline" }
        ]
      }
    },
    {
      title: 'Portfólio Pessoal',
      description: 'Portfólio Pessoal desenvolvido com tecnologias modernas e animações fluidas.',
      image: '/portfolio-preview.png',
      technologies: ['Next.js', 'TailwindCSS', 'Framer Motion'],
      demoLink: 'https://portifolio.lunarhosting.com.br',
      preview: {
        title: "Pedro Henrique",
        subtitle: "CEO da Lunar Hosting",
        description: "Especialista em hospedagem web e soluções de infraestrutura",
        gradient: "from-dark-primary via-dark-accent to-dark-secondary",
        style: "default" as const
      }
    }
  ]

  return (
    <>
      <AnimatedBackground />
      <main className="pt-16">
        {/* Hero Section com animações melhoradas */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Nome */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <motion.span
                  className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark-primary via-dark-accent to-dark-secondary inline-block"
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
                  Pedro Henrique
                </motion.span>
              </motion.div>

              {/* Cargo */}
              <AnimatedText
                text="CEO da Lunar Hosting"
                className="text-4xl md:text-6xl font-bold mb-6"
              />
              
              {/* Descrição */}
              <AnimatedText
                text="Especialista em hospedagem web e soluções de infraestrutura"
                className="text-xl md:text-2xl text-gray-300 mb-12"
              />

              {/* Botões */}
              <motion.div
                className="flex justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="#contato"
                  className="bg-dark-primary text-white px-8 py-4 rounded-full
                            relative overflow-hidden group shadow-lg shadow-dark-primary/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-medium">Vamos Conversar</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-dark-accent to-dark-secondary opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#projetos"
                  className="border-2 border-dark-primary text-dark-primary px-8 py-4 rounded-full
                            relative overflow-hidden group font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Ver Projetos</span>
                  <motion.div
                    className="absolute inset-0 bg-dark-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Elementos decorativos */}
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

          {/* Grid de pontos decorativo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_1px,_transparent_1px)] bg-[length:20px_20px]" />
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center text-dark-primary mb-8">Sobre Mim</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-full h-auto aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/foto.png"
                    alt="Pedro Henrique - CEO Lunar Hosting"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                <div>
                  <p className="text-xl text-gray-300 mb-6">
                    Como CEO da Lunar Hosting, meu foco é fornecer soluções de hospedagem 
                    confiáveis e de alta performance. Especializado em infraestrutura web 
                    e otimização de servidores Linux.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Com experiência sólida em administração de sistemas e desenvolvimento backend, 
                    garanto que nossos clientes recebam o melhor em termos de performance, 
                    segurança e suporte técnico.
                  </p>
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CVDownloadButton />
                    </motion.div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contato"
                      className="border-2 border-dark-primary text-dark-primary px-6 py-2 rounded-full"
                    >
                      Contato
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <Stats />
              </div>
            </motion.div>
          </div>
        </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-dark-surface">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-dark-primary mb-16"
              >
                Minhas Habilidades
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experiencia" className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-dark-primary mb-16"
              >
                Experiência & Formação
              </motion.h2>
              <ExperienceTimeline />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projetos" className="py-20 bg-dark-surface">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-dark-primary mb-16"
              >
                Projetos em Destaque
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} index={index} />
                ))}
              </div>
            </div>
          </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-dark-primary mb-16"
            >
              O que Dizem Sobre Mim
            </motion.h2>
            <Testimonials />
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-20 bg-dark-surface">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-dark-primary mb-16"
            >
              Tecnologias que Utilizo
            </motion.h2>
            <Technologies />
          </div>
        </section>

        {/* Formulário de Contato Melhorado */}
        <section id="contato" className="py-20 bg-dark-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center text-dark-primary mb-16">
                Vamos Trabalhar Juntos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
                  <p className="text-gray-300 mb-6">
                    Estou sempre aberto a novos projetos e oportunidades interessantes.
                    Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
                  </p>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-300">
                      <span className="text-dark-secondary mr-2">Email:</span>
                      pedro@mail.lunarhosting.com.br
                    </p>
                    <p className="flex items-center text-gray-300">
                      <span className="text-dark-secondary mr-2">Website:</span>
                      lunarhosting.com.br
                    </p>
                    <p className="flex items-center text-gray-300">
                      <span className="text-dark-secondary mr-2">Localização:</span>
                      Brasil
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </>
  )
} 