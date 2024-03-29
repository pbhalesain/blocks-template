
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Announcement } from '../anouncement';
import { Icons } from '../icons';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '../page-header';
import { buttonVariants } from '../ui/button';

export default function Hero() {
  return (
    <div className="lbUKmY">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Block Template Boilerplate</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components from @shadcn. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}