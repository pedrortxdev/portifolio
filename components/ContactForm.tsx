'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso!'
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Nome</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 bg-dark-bg text-white rounded-lg focus:ring-2 focus:ring-dark-primary outline-none"
          placeholder="Seu nome completo"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 bg-dark-bg text-white rounded-lg focus:ring-2 focus:ring-dark-primary outline-none"
          placeholder="seu@email.com"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Mensagem</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 bg-dark-bg text-white rounded-lg focus:ring-2 focus:ring-dark-primary outline-none"
          rows={4}
          placeholder="Sua mensagem"
          required
        />
      </div>

      {status.type && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-500/10 text-green-500' 
              : 'bg-red-500/10 text-red-500'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-dark-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 relative"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Enviando...
          </div>
        ) : (
          'Enviar Mensagem'
        )}
      </motion.button>
    </form>
  )
} 