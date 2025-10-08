import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-footer-background text-background relative flex w-full flex-col items-center justify-center gap-20 px-4 py-10 md:px-10 md:py-20">
      <span className="text-center text-[75px] leading-[100%] font-bold tracking-tighter md:text-[125px] lg:text-[164px]">
        Let&apos;s Create Magic!
      </span>

      <div className="relative flex w-full flex-col items-center justify-center gap-6">
        <div className="text-xl font-medium lg:absolute lg:top-0 lg:right-0">
          <span className="leading-[100%]"> I Scrolled too far, </span>
          <Link href="#" className="leading-[100%] underline">
            send me up
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <Link href="mailto:okonjeremiahprogs@gmail.com" target="_blannk">
            okonjeremiahprogs@gmail.com
          </Link>

          <ul className="flex flex-col gap-3">
            <Link
              href="https://www.linkedin.com/in/okon-jeremiah/"
              target="_blank"
            >
              <li>Linkedin</li>
            </Link>
            <Link href="https://github.com/jerncomania28" target="_blank">
              <li>Github</li>
            </Link>
          </ul>
        </div>
      </div>

      <span className="text-center text-xs leading-[100%] font-medium uppercase md:text-base">
        All rights reserved &copy; 2025 • Jeremiah Okon
      </span>
    </footer>
  );
}
