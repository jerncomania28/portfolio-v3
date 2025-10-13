export default function About() {
  return (
    <section className="relative flex h-[85vh] w-full flex-col px-4 py-8 md:px-10">
      <div className="relative flex h-[136px] w-full items-center gap-1 text-[#2C3333] md:h-[432px]">
        <h1 className="text-[114px] leading-[100%] font-bold tracking-tighter md:text-[200px] lg:text-[280px] xl:text-[360px]">
          Hello
        </h1>
        <div className="relative h-[67px] w-[63px] rounded-full border-4 border-white bg-gray-100 md:h-[212px] md:w-[200px]">
          <div
            className="font-family-alegreya absolute top-[14px] left-[48px] w-fit rounded-full bg-white p-2 text-[8px] leading-[100%] tracking-tighter whitespace-nowrap md:top-[46px] md:left-[155px] md:p-4 md:text-xl"
            style={{ transform: 'rotate(-5deg)' }}
          >
            Jeremiah Okon👋🏿
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start justify-between gap-10 text-[#2C3333] md:flex-row md:gap-0">
        <p className="font-family-inter text-[18px] font-normal md:max-w-[508px]">
          My name is Jeremiah, and I&apos;m a front-end developer who crafts
          websites with a strong emphasis on seamless animations and engaging
          user interactions. I&apos;m here to transform your ideas into reality,
          delivering originality and excellence to the online world.
        </p>

        <div className="flex w-full flex-col items-center gap-6 md:w-auto md:items-end">
          <span className="font-family-inter max-w-[127px] self-end text-right text-sm md:max-w-[200px] md:text-[18px]">
            Let&apos;s make your website standout.
          </span>

          <span className="py-2 font-bold uppercase underline">
            Ask Me Anything
          </span>
        </div>
      </div>
    </section>
  );
}
