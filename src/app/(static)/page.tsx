import { Button } from "@/components/ui";
import Features from "@/components/web/features";
import Hero from "@/components/web/hero";
import PressLogos from "@/components/web/perss-logos";
import Link from "next/link";

{/*<Hero />
    <PressLogos />
    <Features />
    <Features02 />
    <Pricing />
    <Testimonials />
    <Resources />
  <Cta /> */}

export default function Home() {
  return (

    <>
      <Hero />
      <PressLogos />
      <Features />
      <div className="bg-[#ecbf95]">
        <div className="w-full mx-auto max-w-7xl py-32 px-4 md:px-8">
          <h2 className="text-4xl text-balance  ">
            Take Control of Your Time. Try Our AI Assistant Today.
          </h2>
          <div className="pt-8 space-x-2">
            <Link
              href="https://cal.com/marcseitz/papermark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-base rounded-3xl bg-transparent border-black"
              >
                Book a demo
              </Button>
            </Link>
            <Link href="/login">
              <Button className="text-base rounded-3xl">
                Start for free
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
