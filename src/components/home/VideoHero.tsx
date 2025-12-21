'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface VideoHeroProps {
  videoSrc?: string
  posterSrc?: string
  locale?: string
}

export function VideoHero({ 
  videoSrc = '/media/demo-preview.mp4',
  posterSrc,
  locale = 'de'
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasVideo, setHasVideo] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [showPoster, setShowPoster] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Check if video exists when component mounts
  useEffect(() => {
    const checkVideo = async () => {
      try {
        const response = await fetch(videoSrc, { method: 'HEAD' })
        if (response.ok) {
          setHasVideo(true)
        } else {
          setHasVideo(false)
        }
      } catch {
        setHasVideo(false)
      }
    }
    checkVideo()
  }, [videoSrc])

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true)
    setIsVideoLoading(false)
  }

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true)
  }

  const togglePlay = () => {
    if (!videoRef.current || !isVideoLoaded) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      // Hide poster when starting to play
      setShowPoster(false)
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoError = () => {
    setHasVideo(false)
    setIsVideoLoaded(false)
    setIsVideoLoading(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 group"
    >
      {/* Poster Image - Always visible until video plays */}
      <AnimatePresence>
        {showPoster && posterSrc && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={posterSrc}
              alt="Video Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video - Loads in background */}
      {hasVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onLoadStart={handleVideoLoadStart}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Animated Placeholder wenn kein Video vorhanden */
        <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-action/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
          </div>
          
          {/* Mock UI Preview */}
          <div className="relative z-10 w-[80%] max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 h-6 bg-white/10 rounded-lg" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                {/* Inbox Items */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-action/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-action" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-white/30 rounded w-3/4" />
                      <div className="h-2 bg-white/15 rounded w-1/2" />
                    </div>
                    <div className="px-3 py-1.5 bg-action/20 text-action text-xs font-medium rounded-full">
                      {locale === 'de' ? 'Neu' : 'New'}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chat Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="flex-1 h-4 bg-white/10 rounded" />
                <div className="w-8 h-8 rounded-full bg-action flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Video Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-action text-white text-sm font-bold rounded-full shadow-lg shadow-action/30"
            >
              {locale === 'de' ? '🎬 Demo-Video folgt' : '🎬 Demo video coming'}
            </motion.div>
          </div>
        </div>
      )}

      {/* Play Button Overlay */}
      <AnimatePresence>
        {!isPlaying && hasVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors z-20"
          >
            <motion.button
              onClick={togglePlay}
              disabled={!isVideoLoaded}
              whileHover={isVideoLoaded ? { scale: 1.1 } : {}}
              whileTap={isVideoLoaded ? { scale: 0.95 } : {}}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {/* Loading State */}
              {isVideoLoading && !isVideoLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm"
                >
                  <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-action animate-spin" />
                </motion.div>
              )}
              
              {/* Play Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-stone-900 ml-1" />
              </motion.div>
              
              {/* Ready indicator */}
              {isVideoLoaded && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-action rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                </motion.div>
              )}
            </motion.button>

            {/* Loading Text */}
            {isVideoLoading && !isVideoLoaded && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                {locale === 'de' ? 'Video wird geladen...' : 'Loading video...'}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls (visible when playing) */}
      <AnimatePresence>
        {isPlaying && hasVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Pause className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Border Glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  )
}

