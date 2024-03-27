import { SiteFooter } from "@/components/web/site-footer"
import { SiteHeader } from "@/components/web/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}