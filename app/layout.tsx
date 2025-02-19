import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Pedro H. - Projetos',
  description: 'Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${poppins.variable} font-poppins bg-dark-bg text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
