'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

interface DemoFormProps {
  messages: {
    name: string
    restaurant: string
    city: string
    email: string
    phone: string
    message: string
    submit: string
    privacyHint: string
  }
}

export function DemoForm({ messages }: DemoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      company: formData.get('restaurant') as string,
      email: formData.get('email') as string,
      website: formData.get('city') as string,
      challenge: formData.get('message') as string,
      company_website: '', // Honeypot field
    }

    try {
      const response = await fetch('/api/check', {
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
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.name}
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.restaurant}
        </label>
        <input
          type="text"
          name="restaurant"
          required
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.city}
        </label>
        <input
          type="text"
          name="city"
          required
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.email}
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.phone}
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {messages.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Honeypot field - hidden from users */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} />

      <Button variant="primary" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : messages.submit}
      </Button>

      <p className="text-xs text-foreground-muted text-center">
        {messages.privacyHint}
      </p>
    </form>
  )
}

