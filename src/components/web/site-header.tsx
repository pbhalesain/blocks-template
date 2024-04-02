
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"
import NavigationMenuDemo from "./nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex justify-start mx-auto my-4">
            <NavigationMenuDemo />
          </div>
          <nav className="flex items-center">
            <Link
              href="/docs"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "font-semibold text-white bg-primary hover:bg-primary-600 rounded-[4rem] transition-colors duration-200"
              )}
            >
              Login
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header >
  )
}