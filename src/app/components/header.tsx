import Link from 'next/link';

import { SlashIcon } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
import { Button } from '@/ui/button';

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-between px-4 py-4 md:items-start md:px-10 md:pt-10 md:pb-5">
      <span className="text-xl leading-[100%] font-normal -tracking-[2%]">
        0%
      </span>
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
          Ilorin, Nigeria ❤️
        </span>
        <Link
          href="mailto:okonjeremiahprogs@gmail.com"
          target="_blank"
          className="text-footer-background hidden text-xl leading-[100%] font-medium -tracking-[1%] md:inline-block"
        >
          okonjeremiahprogs@gmail.com
        </Link>
      </div>

      <Breadcrumb className="hidden md:inline-block">
        <BreadcrumbList className="text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="active:text-footer-background hover:text-footer-background"
            >
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="text-footer-background" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="active:text-footer-background hover:text-footer-background"
            >
              <Link href="#">About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="text-footer-background" />
          </BreadcrumbSeparator>
          <BreadcrumbLink
            asChild
            className="active:text-footer-background hover:text-footer-background"
          >
            <Link href="#">Work</Link>
          </BreadcrumbLink>
        </BreadcrumbList>
      </Breadcrumb>

      <Button
        variant="link"
        className="text-footer-background inline-block px-0 py-0 text-xl leading-[100%] font-normal -tracking-[2%] md:hidden"
      >
        Menu
      </Button>
    </header>
  );
}
