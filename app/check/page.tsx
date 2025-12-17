"use client"

import { useState } from "react"
import { AppShell } from "@/components/shell/AppShell"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

export default function CheckPageClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Ein Fehler ist aufgetreten.')
      }

      setIsSuccess(true)
    } catch (err) {
      setError('Das hat leider nicht geklappt. Bitte versuche es später noch einmal oder schreibe uns eine Mail.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AppShell>
      <Section className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              10-Minuten-Check
            </h1>
            <p className="text-lg text-foreground-muted">
              Kein Sales-Pitch, sondern eine ehrliche Einschätzung. Wir schauen uns deine Situation an und sagen dir, was möglich ist (und was nicht).
            </p>
          </div>

          <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Anfrage erhalten!</h2>
                  <p className="text-foreground-muted mb-8 max-w-md">
                    Danke für dein Vertrauen. Wir melden uns in Kürze bei dir, um den 10-Minuten-Termin zu vereinbaren.
                  </p>
                  <Button variant="outline" asChild href="/">
                    Zurück zur Startseite
                  </Button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        disabled={isLoading}
                        className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all disabled:opacity-50"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Firma <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        disabled={isLoading}
                        className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all disabled:opacity-50"
                        placeholder="Firmenname"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-Mail <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all disabled:opacity-50"
                      placeholder="name@firma.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">Website (optional)</label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website" 
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all disabled:opacity-50"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium">Was ist die größte Herausforderung?</label>
                    <textarea 
                      id="challenge" 
                      name="challenge" 
                      rows={3}
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none disabled:opacity-50"
                      placeholder="z.B. Zu viele E-Mails, unklare Prozesse, veraltete Software..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      "Check anfordern"
                    )}
                  </button>

                  <p className="text-xs text-center text-foreground-muted">
                    Deine Daten werden vertraulich behandelt und nur für diesen Check verwendet.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </AppShell>
  )
}

