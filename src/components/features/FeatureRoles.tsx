"use client"

import { useState } from "react"
import { Section, Container } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { motion, AnimatePresence } from "framer-motion"
import { ChefHat, User, Monitor, Smartphone } from "lucide-react"
import { classNames } from "@/lib/classNames"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { motion as motionPolicy } from "@/lib/motion"

const roleIcons = {
  guest: User,
  kitchen: ChefHat,
  service: Smartphone,
  admin: Monitor,
} as const

export function FeatureRoles() {
  const [activeRole, setActiveRole] = useState("guest")
  const locale = useLocale()

  const roles = [
    {
      id: "guest",
      title: t(locale, "pages.features.roles.items.guest.title") as string,
      icon: roleIcons.guest,
      desc: t(locale, "pages.features.roles.items.guest.desc") as string,
      features: t(locale, "pages.features.roles.items.guest.features") as string[],
    },
    {
      id: "kitchen",
      title: t(locale, "pages.features.roles.items.kitchen.title") as string,
      icon: roleIcons.kitchen,
      desc: t(locale, "pages.features.roles.items.kitchen.desc") as string,
      features: t(locale, "pages.features.roles.items.kitchen.features") as string[],
    },
    {
      id: "service",
      title: t(locale, "pages.features.roles.items.service.title") as string,
      icon: roleIcons.service,
      desc: t(locale, "pages.features.roles.items.service.desc") as string,
      features: t(locale, "pages.features.roles.items.service.features") as string[],
    },
    {
      id: "admin",
      title: t(locale, "pages.features.roles.items.admin.title") as string,
      icon: roleIcons.admin,
      desc: t(locale, "pages.features.roles.items.admin.desc") as string,
      features: t(locale, "pages.features.roles.items.admin.features") as string[],
    },
  ] as const

  return (
    <Section variant="normal">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(locale, "pages.features.roles.h2") as string}
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t(locale, "pages.features.roles.p") as string}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-[500px]">
          {/* Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {roles.map((role) => {
              const isActive = activeRole === role.id
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={classNames(
                    "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 group",
                    isActive ? "bg-surface shadow-sm border border-border" : "hover:bg-background-muted/50"
                  )}
                >
                  <div className={classNames(
                    "p-3 rounded-lg transition-colors",
                    isActive ? "bg-accent/10 text-accent" : "bg-muted text-foreground-muted group-hover:text-foreground"
                  )}>
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={classNames("font-semibold", isActive ? "text-foreground" : "text-foreground-muted group-hover:text-foreground")}>
                      {role.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-8">
            <GlassCard className="h-full p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-surface to-background-muted/30">
              <AnimatePresence mode="wait">
                {roles.map((role) => (
                  role.id === activeRole && (
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: motionPolicy.reveal.duration, ease: motionPolicy.reveal.ease }}
                      className="space-y-8"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-accent/5 text-accent mb-4">
                        <role.icon className="w-12 h-12" />
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{role.title}</h3>
                        <p className="text-xl text-foreground-muted leading-relaxed">
                          {role.desc}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-border/50">
                        {role.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </Container>
    </Section>
  )
}

