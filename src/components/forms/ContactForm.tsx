'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Send } from 'lucide-react'

interface ContactFormProps {
  form: {
    title: string
    name: string
    email: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submit: string
  }
}

export function ContactForm({ form }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      company_website: '', // Honeypot field
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Reset form
        e.currentTarget.reset()
        // TODO: Show success message
      } else {
        // TODO: Show error message
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // TODO: Show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground ml-1">{form.name}</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder={form.namePlaceholder}
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-100 focus:border-action focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground ml-1">{form.email}</label>
          <input 
            type="email" 
            name="email"
            required
            placeholder={form.emailPlaceholder}
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-100 focus:border-action focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1">{form.message}</label>
        <textarea 
          name="message"
          required
          rows={4}
          placeholder={form.messagePlaceholder}
          className="w-full px-4 py-3 rounded-xl border-2 border-stone-100 focus:border-action focus:outline-none transition-colors resize-none"
        />
      </div>
      {/* Honeypot field - hidden from users */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} />
      <Button variant="primary" size="lg" className="w-full group" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : form.submit}
        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </form>
  )
}

