
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Image from "next/image";
import Link from 'next/link';
import { Announcement } from '../anouncement';
import { Icons } from '../icons';
import { PageActions, PageHeader, PageHeaderDescription } from '../page-header';
import { buttonVariants } from '../ui/button';
import styles from './hero.module.css';

export default function Hero() {
  return (

    <div className="md:justify-end justify-center items-center grid grid-cols-2 grid-rows-1 gap-0">
      <div className={styles.heroContainer}>
        <div className='my-auto mb-52 tablet:w-2/3 desktop:w-1/2'>
          <PageHeader>
            <Announcement />
            <h1 className="font-sans text-left tracking-[-0.01em] text-5xl leading-[1.1] tablet:text-6xl mb-6"><span
            >Empathic AI to serve </span><br /><span>Small Businesses</span>
            </h1>
            <PageHeaderDescription>
              <span> Empowering small businesses with empathic AI solutions that truly understand your unique needs.</span>
            </PageHeaderDescription>
            <PageActions>
              <Link
                href="/docs"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "font-semibold text-white bg-primary hover:bg-primary-600 rounded-[4rem] transition-colors duration-200"
                )}
              >
                Join Waitlist
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), " hover:bg-secondary-600 transition-colors duration-200 rounded-[4rem]")}
              >
                <Icons.graduationcap className="mr-6 h-4 w-4" />
                {'  '}Learn More
              </Link>
            </PageActions>
          </PageHeader>
        </div>
      </div>
      <div className={styles.heroContainer}>
        <Image
          src="/images/munimji2.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.6] dark:grayscale"
        />
      </div>
    </div >

  );
}