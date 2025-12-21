"use client"

import { useState } from "react"
import { WizardShell } from "./WizardShell"
import { OptionCard } from "./OptionCard"
import { type WizardPayload } from "@/lib/validation"
import Link from "next/link"

// Define the shape of our messages prop based on the JSON structure
type WizardMessages = {
  steps: {
    context: string
    goal: string
    pain: string
    tools: string
    compliance: string
    result: string
  }
  actions: {
    next: string
    back: string
    finish: string
    calculating: string
    saveLead: string
  }
  context: {
    title: string
    headline: string
    desc: string
    options: Array<{ id: string; title: string }>
    teamSizes: Array<{ id: string; title: string }>
  }
  goal: {
    title: string
    headline: string
    options: Array<{ id: string; title: string; desc: string }>
  }
  pain: {
    title: string
    headline: string
    helper: string
    options: Array<{ id: string; title: string; desc: string }>
  }
  tools: {
    title: string
    headline: string
    options: Array<{ id: string; title: string; desc: string }>
  }
  compliance: {
    title: string
    headline: string
    options: Array<{ id: string; title: string; desc: string }>
  }
  result: {
    title: string
    headline: string
    scoreLabel: string
    useCases: string
    sprint: string
    pending: string
  }
  lead: {
    title: string
    subtitle: string
    name: string
    company: string
    email: string
    phone: string
    hint: string
  }
}

interface CheckWizardClientProps {
  locale: string
  messages: WizardMessages
}

type WizardAnswers = WizardPayload["answers"]
type LeadData = WizardPayload["lead"]

type WizardResult = {
  score: number
  topUseCases: string[]
  sprintPlan: string[]
}

export function CheckWizardClient({ messages }: CheckWizardClientProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<WizardAnswers>>({})
  const [lead, setLead] = useState<LeadData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<WizardResult | null>(null)

  // Step 0: Context (Industry + Team Size)
  // Step 1: Goal
  // Step 2: Pain Points (Multi)
  // Step 3: Tools (Multi)
  // Step 4: Compliance
  // Step 5: Calculation -> Result Display

  const totalSteps = 6

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0 && !result) {
      setStep(step - 1)
    }
  }

  const handleSelect = (key: keyof WizardAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const toggleMultiSelect = (key: "painpoints" | "tools", value: string) => {
    setAnswers((prev) => {
      const current = prev[key] || []
      const exists = current.includes(value)
      
      if (exists) {
        return { ...prev, [key]: current.filter((v) => v !== value) }
      }
      
      // Limit painpoints to 3
      if (key === "painpoints" && current.length >= 3) {
        return prev
      }
      
      return { ...prev, [key]: [...current, value] }
    })
  }

  const submitWizard = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "wizard",
          answers: answers as WizardAnswers,
          lead: Object.keys(lead || {}).length > 0 ? lead : undefined
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      const data = await response.json()
      setResult(data.result)
      setStep(totalSteps) // Move to result view (conceptually step 6)
    } catch (error) {
      console.error(error)
      // Fallback result if API fails
      setResult({
        score: 75,
        topUseCases: ["Smart Inbox", "Document AI", "Customer Service"],
        sprintPlan: ["Tag 1: Setup", "Tag 2: Connect", "Tag 3: Live"]
      })
      setStep(totalSteps)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render Functions for Steps
  const renderStepContent = () => {
    if (result) {
      return (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">{messages.result.headline}</h2>
            <div className="relative inline-flex items-center justify-center">
               <svg className="w-32 h-32 transform -rotate-90">
                 <circle
                   className="text-stone-200"
                   strokeWidth="8"
                   stroke="currentColor"
                   fill="transparent"
                   r="58"
                   cx="64"
                   cy="64"
                 />
                 <circle
                   className="text-action transition-all duration-1000 ease-out"
                   strokeWidth="8"
                   strokeDasharray={360}
                   strokeDashoffset={360 - (360 * result.score) / 100}
                   strokeLinecap="round"
                   stroke="currentColor"
                   fill="transparent"
                   r="58"
                   cx="64"
                   cy="64"
                 />
               </svg>
               <span className="absolute text-3xl font-bold text-action">{result.score}</span>
            </div>
            <p className="text-foreground-muted font-medium uppercase tracking-wide text-sm">{messages.result.scoreLabel}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-8 bg-action rounded-full"/>
                {messages.result.useCases}
              </h3>
              <ul className="space-y-3">
                {result.topUseCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground-muted">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-action/10 text-action flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                    {uc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-8 bg-indigo-500 rounded-full"/>
                {messages.result.sprint}
              </h3>
               <ul className="space-y-3">
                {result.sprintPlan.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground-muted">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">D{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center">
             <Link 
               href="/kontakt" 
               className="inline-flex items-center justify-center px-8 py-4 bg-action text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-action/20 hover:shadow-action/30"
             >
               Jetzt starten
             </Link>
          </div>
        </div>
      )
    }

    switch (step) {
      case 0: // Context
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{messages.context.headline}</h2>
              <p className="text-foreground-muted">{messages.context.desc}</p>
            </div>
            
            <div className="space-y-4">
              <label className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">Branche</label>
              <div className="grid gap-3">
                {messages.context.options.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.title}
                    selected={answers.context?.industry === opt.id}
                    onClick={() => setAnswers(prev => ({ ...prev, context: { ...prev.context!, industry: opt.id } }))}
                  />
                ))}
              </div>
            </div>

            {answers.context?.industry && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                <label className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">Teamgröße</label>
                <div className="grid grid-cols-2 gap-3">
                  {messages.context.teamSizes.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      label={opt.title}
                      selected={answers.context?.teamSize === opt.id}
                      onClick={() => setAnswers(prev => ({ ...prev, context: { ...prev.context!, teamSize: opt.id } }))}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 1: // Goal
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">{messages.goal.headline}</h2>
            <div className="grid gap-3">
              {messages.goal.options.map((opt) => (
                <OptionCard
                  key={opt.id}
                  label={opt.title}
                  description={opt.desc}
                  selected={answers.goal === opt.id}
                  onClick={() => handleSelect("goal", opt.id)}
                />
              ))}
            </div>
          </div>
        )

      case 2: // Pain Points
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{messages.pain.headline}</h2>
              <p className="text-sm text-action font-medium">{messages.pain.helper}</p>
            </div>
            <div className="grid gap-3">
              {messages.pain.options.map((opt) => (
                <OptionCard
                  key={opt.id}
                  label={opt.title}
                  description={opt.desc}
                  selected={answers.painpoints?.includes(opt.id) || false}
                  onClick={() => toggleMultiSelect("painpoints", opt.id)}
                />
              ))}
            </div>
          </div>
        )

      case 3: // Tools
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">{messages.tools.headline}</h2>
            <div className="grid gap-3">
              {messages.tools.options.map((opt) => (
                <OptionCard
                  key={opt.id}
                  label={opt.title}
                  description={opt.desc}
                  selected={answers.tools?.includes(opt.id) || false}
                  onClick={() => toggleMultiSelect("tools", opt.id)}
                />
              ))}
            </div>
          </div>
        )

      case 4: // Compliance
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">{messages.compliance.headline}</h2>
            <div className="grid gap-3">
              {messages.compliance.options.map((opt) => (
                <OptionCard
                  key={opt.id}
                  label={opt.title}
                  description={opt.desc}
                  selected={answers.compliance === opt.id}
                  onClick={() => handleSelect("compliance", opt.id)}
                />
              ))}
            </div>
          </div>
        )
      
      case 5: // Lead (Optional) -> Submit
         return (
          <div className="space-y-6">
            <div className="space-y-2">
               <h2 className="text-2xl font-bold text-foreground">{messages.lead.title}</h2>
               <p className="text-foreground-muted">{messages.lead.subtitle}</p>
            </div>
            
            <div className="space-y-4 bg-surface p-6 rounded-2xl border border-border">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-1">{messages.lead.name}</label>
                <input 
                  type="text" 
                  value={lead?.name || ""} 
                  onChange={(e) => setLead(p => ({...p, name: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-action/20 focus:border-action outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-1">{messages.lead.company}</label>
                <input 
                  type="text" 
                  value={lead?.company || ""} 
                  onChange={(e) => setLead(p => ({...p, company: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-action/20 focus:border-action outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-1">{messages.lead.email}</label>
                <input 
                  type="email" 
                  value={lead?.email || ""} 
                  onChange={(e) => setLead(p => ({...p, email: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-action/20 focus:border-action outline-none transition-all"
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-foreground-muted mb-1">{messages.lead.phone}</label>
                <input 
                  type="tel" 
                  value={lead?.phone || ""} 
                  onChange={(e) => setLead(p => ({...p, phone: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-action/20 focus:border-action outline-none transition-all"
                />
              </div>
              <p className="text-xs text-foreground-muted italic pt-2">{messages.lead.hint}</p>
            </div>
          </div>
         )
    }
  }

  // Can go next?
  const canContinue = () => {
    switch(step) {
      case 0: return !!answers.context?.industry && !!answers.context?.teamSize
      case 1: return !!answers.goal
      case 2: return (answers.painpoints?.length || 0) > 0
      case 3: return true // Tools optional
      case 4: return !!answers.compliance
      case 5: return true // Lead optional
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 md:py-20 flex items-center justify-center">
      {!result ? (
        <WizardShell
          currentStep={step + 1}
          totalSteps={totalSteps}
          onBack={handleBack}
          canGoBack={step > 0}
        >
          {renderStepContent()}

          <div className="mt-8 pt-6 border-t border-border/40 flex justify-end">
             {step < 5 ? (
                <button
                  onClick={handleNext}
                  disabled={!canContinue()}
                  className="px-6 py-3 bg-action text-white font-bold rounded-xl shadow-lg shadow-action/20 hover:shadow-action/30 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {messages.actions.next}
                </button>
             ) : (
                <button
                  onClick={submitWizard}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-action text-white font-bold rounded-xl shadow-lg shadow-action/20 hover:shadow-action/30 hover:bg-emerald-600 transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {messages.actions.calculating}
                    </>
                  ) : (
                    messages.actions.finish
                  )}
                </button>
             )}
          </div>
        </WizardShell>
      ) : (
         // Result View (Full Width / Different Layout potential, but reusing container for now)
         <div className="w-full max-w-3xl px-4">
            {renderStepContent()}
         </div>
      )}
    </div>
  )
}
