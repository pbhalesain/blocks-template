"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex justify-end">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <div className="flex justify-center mx-auto my-4">

        </div>
      </nav>
    </div>
  )
}