import Me from '@/public/me.jpeg';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className='bg-cerulean/50 border-cerulean/30 pop grid w-full grid-cols-1 items-center gap-5 rounded-tr-lg rounded-bl-lg border p-3 text-white backdrop-blur-sm md:grid-cols-2'>
      <div className='relative mx-auto w-fit overflow-hidden rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
        <div className='pop absolute inset-0 z-10 bg-black/10' />
        <Image quality={60} src={Me} placeholder='blur' alt='Joshua Levine' className='relative z-0 h-auto w-80' />
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
