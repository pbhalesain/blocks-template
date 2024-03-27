import { siteConfig } from "@/config/site"

export function AppFooter() {
  return (
    <footer className="py-4 md:px-6 md:py-0">
      <div className="container flex flex-col items-center justify-end gap-4 md:h-10 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Copyright {" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
           Acme Ltd.
          </a>
        </p>
      </div>
    </footer>
  )
}