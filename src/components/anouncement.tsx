import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-start rounded-lg bg-muted px-20 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">Introducing Block Boilerplate Template</span>
      <span className="hidden sm:inline">Introducing Block Template</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}