import Me from '@/public/me.jpeg';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className='bg-cerulean/50 border-cerulean/30 pop glass-edge grid w-full grid-cols-1 items-center gap-5 rounded-2xl border p-3 text-white liquid-blur md:grid-cols-2'>
      <div className='relative mx-auto w-fit overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)]'>
        <div className='pop absolute inset-0 z-10 bg-black/10' />
        <Image
          quality={60}
          src={Me}
          placeholder='blur'
          alt='Joshua Levine'
          className='relative z-0 h-auto w-80'
          loading='eager'
        />
      </div>
      <p>
        Hello! I am Joshua Levine, I am a web and software developer based out of the United States. I am proficient
        with C#, CSS, HTML, Java, Javascript, Lua, SQL, SQLite, TailwindCSS, and TypeScript. On the side I love my
        family, my friends, my car, and my camera and am happy to talk about any of them. Poke around and get to know me
        a little bit, you can think of this first page as my resume because it basically is.
      </p>
    </section>
  );
}
