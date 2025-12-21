import { getLocale } from "@/lib/getLocale"
import { CheckWizardClient } from "@/components/check/CheckWizardClient"
import { messages } from "@/lib/i18n"

export default async function CheckPage() {
  const locale = await getLocale()
  const wizardMessages = messages[locale].pages.check.wizard
  
  return <CheckWizardClient locale={locale} messages={wizardMessages} />
}
