import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
   <>
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
     
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/munimji.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      {children}
      <div className="fixed top-0 right-0 p-4">
<ThemeToggle/>
</div>
    </div>
    </>
  )
}