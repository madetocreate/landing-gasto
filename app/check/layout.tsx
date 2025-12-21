import { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"
import { getLocale } from "@/lib/getLocale"

export async function generateMetadata() {
  const locale = await getLocale()
  return createMetadata({
    title: "3-Minuten-Check",
    description: "Finde heraus, ob und wie KI-Modernisierung bei dir funktioniert.",
    path: "/check",
    locale
  })
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

