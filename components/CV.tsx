'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { FaDownload } from 'react-icons/fa'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Importação dinâmica do PDFDownloadLink
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { 
    ssr: false,
    loading: () => (
      <button className="bg-dark-primary text-white px-6 py-2 rounded-full inline-flex items-center space-x-2">
        <span>Carregando...</span>
      </button>
    )
  }
)

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3B82F6',
  },
  title: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 15,
  },
  contact: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 5,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 10,
    borderBottom: '1 solid #E5E7EB',
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  period: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 3,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 12,
    backgroundColor: '#EFF6FF',
    color: '#3B82F6',
    padding: '3 8',
    borderRadius: 4,
  },
})

const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.name}>Pedro Henrique</Text>
        <Text style={styles.title}>CEO & Fundador da Lunar Hosting</Text>
        <Text style={styles.contact}>Email: pedro@lunarhosting.com.br</Text>
        <Text style={styles.contact}>Website: lunarhosting.com.br</Text>
        <Text style={styles.contact}>Localização: Brasil</Text>
      </View>

      {/* Resumo Profissional */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.description}>
          Especialista em infraestrutura web e desenvolvimento backend, com foco em soluções 
          de alta performance e escalabilidade. Experiência sólida em administração de sistemas 
          Linux e desenvolvimento de soluções em nuvem.
        </Text>
      </View>

      {/* Experiência */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>CEO & Fundador - Lunar Hosting</Text>
          <Text style={styles.period}>2023 - Presente</Text>
          <Text style={styles.description}>• Liderança na criação e desenvolvimento da plataforma de hospedagem</Text>
          <Text style={styles.description}>• Gestão de equipe e desenvolvimento de produtos inovadores</Text>
          <Text style={styles.description}>• Implementação de soluções escaláveis em cloud computing</Text>
          <Text style={styles.description}>• Desenvolvimento de infraestrutura de alta disponibilidade</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Full Stack Developer</Text>
          <Text style={styles.period}>2022 - 2025</Text>
          <Text style={styles.description}>• Desenvolvimento de aplicações web de grande escala</Text>
          <Text style={styles.description}>• Liderança técnica em projetos</Text>
          <Text style={styles.description}>• Implementação de arquiteturas baseadas em microserviços</Text>
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        <View style={styles.skills}>
          <Text style={styles.skill}>PHP</Text>
          <Text style={styles.skill}>Laravel</Text>
          <Text style={styles.skill}>Linux</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Cloud Computing</Text>
          <Text style={styles.skill}>DevOps</Text>
          <Text style={styles.skill}>MySQL</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Shell Script</Text>
          <Text style={styles.skill}>Nginx</Text>
          <Text style={styles.skill}>Apache</Text>
        </View>
      </View>
    </Page>
  </Document>
)

export const CVDownloadButton = () => {
  const [isClient, setIsClient] = useState(false)

  // Verifica se estamos no cliente
  useState(() => {
    setIsClient(true)
  })

  // Não renderiza nada durante SSR
  if (!isClient) {
    return (
      <button className="bg-dark-primary text-white px-6 py-2 rounded-full inline-flex items-center space-x-2">
        <span>Carregando...</span>
      </button>
    )
  }

  return (
    <PDFDownloadLink
      document={<CV />}
      fileName="PedroHenrique_CV.pdf"
      className="bg-dark-primary text-white px-6 py-2 rounded-full inline-flex items-center space-x-2
                 hover:bg-dark-accent transition-colors duration-300"
    >
      {({ loading }) => (
        loading ? (
          <span>Carregando...</span>
        ) : (
          <>
            <FaDownload className="text-lg" />
            <span>Download CV</span>
          </>
        )
      )}
    </PDFDownloadLink>
  )
} 