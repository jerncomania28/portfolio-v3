import Image from 'next/image';

import FIChevronDown from '@assets/fi_chevrons-down.svg';

import { Button } from '@/ui/button';

export default function Hero() {
  return (
    <section className="relative flex h-[85vh] w-full flex-col px-4 py-6 md:px-10">
      <div className="relative h-full w-full">
        <h1 className="text-footer-background text-[75px] leading-[100%] font-bold tracking-tighter md:text-[125px] xl:text-[160px]">
          Your website could work better—if I developed it.
        </h1>
      </div>
      <div className="relative flex w-full items-center justify-center md:items-end md:justify-end">
        <Button
          variant="link"
          className="text-footer-background gap-2 text-xl leading-[100%] font-normal -tracking-[2%] hover:bg-transparent"
        >
          <span>Scroll to be saved</span>
          <Image
            src={FIChevronDown}
            alt="chevron-down"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </section>
  );
}
