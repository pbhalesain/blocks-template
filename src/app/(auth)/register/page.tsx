import Link from "next/link"

import { SignupForm } from "@/components/auth/register-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SignupPage() {
  return (
    <>
    <SignupForm/>
    <Link
    href="/login"
    className={cn(
      buttonVariants({ variant: "ghost" }),
      "absolute right-4 top-4 md:right-8 md:top-8"
    )}
  >
    Login
  </Link>
  <ThemeToggle/>
  </>
  )
}
