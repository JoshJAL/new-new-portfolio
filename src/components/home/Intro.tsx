import Me from '@/public/me.jpeg';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className='bg-desert-sand grid w-full grid-cols-1 items-center gap-5 rounded-tr-lg rounded-bl-lg p-3 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)] md:grid-cols-2'>
      <Image
        quality={60}
        src={Me}
        placeholder='blur'
        alt='Joshua Levine'
        className='mx-auto h-auto w-80 rounded-lg shadow-[3px_3px_0px_rgba(255,255,255,1)]'
      />
      <p>
        Hello! I am Joshua Levine, I am a web and software developer based out of the United States. I am proficient
        with C#, CSS, HTML, Java, Javascript, Lua, SQL, SQLite, TailwindCSS, and TypeScript. On the side I love my
        friends, my family, my car, and my camera and am happy to talk about any of them. Poke around and get to know me
        a little bit, you can think of this first page as my resume because it basically is.
      </p>
    </section>
  );
}
