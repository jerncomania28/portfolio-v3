import Link from 'next/link';

import { AudioLines, Lock, Sparkles, Zap } from 'lucide-react';

const perks = [
  { icon: Lock, label: '100% private, nothing uploaded' },
  { icon: Zap, label: 'High-quality MP3 in seconds' },
  { icon: Sparkles, label: 'No sign up, no watermark' },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="relative w-full snap-start px-4 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#2C3333]/10 bg-[#2C3333]/[0.03] p-8 backdrop-blur-sm md:p-12">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-[#7BB6DD]/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[350px] w-[350px] rounded-full bg-[#5BA4D1]/10 blur-[110px]" />

          <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7BB6DD]/15">
                  <AudioLines
                    className="h-5 w-5 text-[#5BA4D1]"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="font-family-inter rounded-full bg-[#7BB6DD]/15 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-[#5BA4D1] uppercase">
                  Free tool
                </span>
              </div>

              <h2 className="text-footer-background text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
                Turn any video into{' '}
                <span className="font-family-instrument font-normal italic">
                  crisp audio
                </span>
                .
              </h2>

              <p className="font-family-inter text-base leading-relaxed text-[#2C3333]/80 md:text-lg">
                A free video to MP3 extractor I built, running entirely in your
                browser. Drop in a clip and get studio-grade audio back. Nothing
                is uploaded and no account is needed.
              </p>

              <ul className="flex flex-col gap-2">
                {perks.map((perk) => {
                  const Icon = perk.icon;

                  return (
                    <li
                      key={perk.label}
                      className="font-family-inter flex items-center gap-3 text-sm text-[#2C3333]/70"
                    >
                      <Icon className="h-4 w-4 text-[#5BA4D1]" />
                      {perk.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <Link
              href="/extract-audio"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7BB6DD] to-[#5BA4D1] px-8 py-4 text-sm font-black tracking-wide text-white uppercase shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(123,182,221,0.4)] md:text-base"
            >
              Open the tool
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
