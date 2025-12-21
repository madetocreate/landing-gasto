"use client"

import { useState, useEffect } from "react"
import { Section, Container } from "@/components/ui/Section"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { useReducedMotion } from "framer-motion"
import Image from "next/image"
import { classNames } from "@/lib/classNames"

type ApplicationKey = 'inbox' | 'website-telefon' | 'dokumente-ordnung' | 'bewertungen' | 'kunden-vorgaenge'

interface Application {
  key: ApplicationKey
  label: string
  videoPath?: string
  imagePath?: string
}

const applications: Application[] = [
  {
    key: 'inbox',
    label: 'Intelligenter Posteingang',
    videoPath: '/media/previews/inbox.mp4',
    imagePath: '/media/previews/inbox.jpg'
  },
  {
    key: 'website-telefon',
    label: 'Website & Telefon Assistent',
    videoPath: '/media/previews/website-telefon.mp4',
    imagePath: '/media/previews/website-telefon.jpg'
  },
  {
    key: 'dokumente-ordnung',
    label: 'Dokumente & Ordnung',
    videoPath: '/media/previews/dokumente-ordnung.mp4',
    imagePath: '/media/previews/dokumente-ordnung.jpg'
  },
  {
    key: 'bewertungen',
    label: 'Bewertungen',
    videoPath: '/media/previews/bewertungen.mp4',
    imagePath: '/media/previews/bewertungen.jpg'
  },
  {
    key: 'kunden-vorgaenge',
    label: 'Kunden & Vorgänge',
    videoPath: '/media/previews/kunden-vorgaenge.mp4',
    imagePath: '/media/previews/kunden-vorgaenge.jpg'
  }
]

function MediaRenderer({ activeKey }: { activeKey: ApplicationKey }) {
  const [hasVideo, setHasVideo] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const app = applications.find(a => a.key === activeKey) || applications[0]

  useEffect(() => {
    if (app.videoPath && !shouldReduceMotion) {
      // Check if video exists before trying to load
      fetch(app.videoPath, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
      const video = document.createElement('video')
            video.src = app.videoPath!
      video.onloadeddata = () => setHasVideo(true)
      video.onerror = () => {
        setHasVideo(false)
        setVideoError(true)
      }
          } else {
            setHasVideo(false)
            setVideoError(true)
          }
        })
        .catch(() => {
          setTimeout(() => {
            setHasVideo(false)
            setVideoError(true)
          }, 0)
        })
    } else {
      setTimeout(() => {
        setHasVideo(false)
        setVideoError(true)
      }, 0)
    }
  }, [app.videoPath, shouldReduceMotion])

  // Try video first (if not reduced motion)
  if (hasVideo && app.videoPath && !videoError && !shouldReduceMotion) {
    return (
      <video
        key={activeKey}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={app.imagePath || undefined}
        onError={(e) => {
          e.preventDefault()
          setVideoError(true)
          setHasVideo(false)
        }}
        onLoadStart={(e) => {
          // Silently handle load errors
          const video = e.currentTarget
          video.onerror = () => {
            setVideoError(true)
            setHasVideo(false)
          }
        }}
      >
        <source src={app.videoPath} type="video/mp4" />
      </video>
    )
  }

  // Fallback to single image
  if (app.imagePath && !imageError) {
    return (
      <div className="relative w-full h-full">
        <Image
          key={activeKey}
          src={app.imagePath}
          alt={`${app.label} Preview`}
          fill
          className="object-cover"
          sizes="100vw"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // Ultimate fallback: gradient placeholder
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/5 via-background to-muted/30 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-xl bg-accent/10 mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm text-foreground-muted">{app.label}</p>
      </div>
    </div>
  )
}

export function ApplicationsSwitcher() {
  const [activeKey, setActiveKey] = useState<ApplicationKey>('inbox')

  return (
    <Section variant="normal" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <Container size="xl">
        {/* Large Preview Box */}
        <SpotlightCard 
          className="w-full aspect-video md:aspect-[21/9] overflow-hidden mb-12"
          spotlightColor="rgba(var(--accent-rgb), 0.15)"
          withBorderBeam
        >
          <MediaRenderer key={activeKey} activeKey={activeKey} />
        </SpotlightCard>

        {/* 5 Floating Buttons */}
        <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {applications.map((app) => {
            const isActive = activeKey === app.key
            
            return (
              <button
                key={app.key}
                onClick={() => setActiveKey(app.key)}
                className={classNames(
                  "relative px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ease-out whitespace-nowrap flex-shrink-0",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "bg-[#111827]/90 backdrop-blur-md shadow-md", 
                  "border border-white/10",
                  isActive
                    ? "text-action ring-1 ring-action/30"
                    : "text-white hover:bg-[#111827] hover:text-action"
                )}
              >
                {app.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-action" />
                )}
              </button>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

