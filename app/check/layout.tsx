import { createMetadata } from "@/lib/metadata"
import CheckPage from "./page" // Client Component

export const metadata = createMetadata({
  title: "10-Minuten-Check",
  description: "Finde heraus, ob und wie KI-Modernisierung bei dir funktioniert.",
  path: "/check",
})

export default function Page() {
  return <CheckPage />
}

