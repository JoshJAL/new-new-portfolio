import Me from '@/public/me.jpeg';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className='bg-cerulean shadow-[3px_3px_0px_rgba(0,0,0,1)] grid w-full grid-cols-1 items-center gap-5 rounded-tr-lg rounded-bl-lg border-2 border-white p-3 text-white md:grid-cols-2'>
      <Image
        quality={60}
        src={Me}
        placeholder='blur'
        alt='Joshua Levine'
        className='shadow-[3px_3px_0px_rgba(0,0,0,1)] mx-auto h-auto w-80 rounded-lg border-2 border-white'
      />
      <p>
        Hello! I am Joshua Levine, I am a web and software developer based out of the United States. I am proficient
        with C#, CSS, HTML, Java, Javascript, Lua, SQL, SQLite, TailwindCSS, and TypeScript. On the side I love my
        family, my friends, my car, and my camera and am happy to talk about any of them. Poke around and get to know me
        a little bit, you can think of this first page as my resume because it basically is.
      </p>
    </section>
  );
}
