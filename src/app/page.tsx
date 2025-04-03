import ButtonLink from '@/components/ui/ButtonLink';
import InfoCard from '@/components/ui/InfoCard';
import StyledLink from '@/components/ui/StyledLink';
import Me from '@/public/me.jpeg';
import Image from 'next/image';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiResend, SiShopify, SiSqlite, SiStripe } from 'react-icons/si';

export default function Home() {
  return (
    <article className='flex w-full flex-col gap-5'>
      <section className='bg-desert-sand grid w-full grid-cols-1 items-center gap-5 rounded-tr-lg rounded-bl-lg p-3 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)] md:grid-cols-2'>
        <Image
          quality={60}
          src={Me}
          placeholder='blur'
          alt='Joshua Levine'
          className='mx-auto h-auto w-80 rounded-lg shadow-[3px_3px_0px_rgba(255,255,255,1)]'
        />
        <p>
          Hello! I am Joshua Levine, I am a web and software delveloper based out of the United States. I am proficient
          with C#, CSS, HTML, Java, Javascript, Lua, SQL, SQLite, TailwindCSS, and TypeScript. On the side I love my
          friends, my family, my car, and my camera and am happy to talk about any of them. Poke around and get to know
          me a little bit, you can think of this first page as my resume because it basically is.
        </p>
      </section>
      <InfoCard heading={'Recent Projects'}>
        <section className='flex w-full flex-col gap-5'>
          <p>
            I&apos;ve been doing this a number of years now, so as you can imagine I have tons of projects that I have
            worked on, but I will keep this to the most recent and notable three. If you care to look at more of my
            projects and in more detail feel free to visit my &quot;
            <StyledLink colorSwap prefetch href='/projects'>
              Projects
            </StyledLink>
            &quot; page!
          </p>
          <InfoCard colorSwap heading={'Monster Transmission & Performance'}>
            <div className='flex w-full flex-col gap-3'>
              <p>
                I am the lead developer for Monster Transmission & Performance. I have built all of our internal
                toolding and helped develop our front-end using Shopify from the ground up. I also aid our sister
                companies with their development needs.
              </p>
              <ul className='list-inside list-disc'>
                <li>Full Stack e-commerce platform for tranmissions, engine, and torque converters.</li>
                <li>Organized and optimized over 6,000 products. Narrowed down to top selling 200.</li>
                <li>
                  Year, make, and model look up to hellp customers find their applicable transmissions and engines
                  spanning over 6,000 different vehicle makes.
                </li>
                <li>Built tech stack from the ground up.</li>
              </ul>
              <InfoCard heading={'Technologies'}>
                <div className='flex w-full flex-wrap gap-3'>
                  <p className='flex items-center gap-2 rounded-lg bg-purple-800 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <BsFiletypeCss className='h-5 w-5' />
                    CSS
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <RiNextjsLine className='h-5 w-5' />
                    Next.js
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-lime-400 px-3 py-2 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiShopify className='h-5 w-5' />
                    Shopify
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiSqlite className='h-5 w-5' />
                    SQLite
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-cyan-400 px-3 py-2 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <RiTailwindCssFill className='h-5 w-5' />
                    Tailwind
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <BiLogoTypescript className='h-5 w-5' />
                    TypeScript
                  </p>
                </div>
              </InfoCard>
              <ButtonLink prefetch={false} href='https://monstertransmission.com/' target='_blank'>
                Project Link
              </ButtonLink>
            </div>
          </InfoCard>
          <InfoCard colorSwap heading={'Coastal Crumb'}>
            <div className='flex w-full flex-col gap-3'>
              <p>
                A local bakery opened up and asked me to make their website and set up their ordering and subscription
                system. I set up their front-end and back-end systems and allowed them to receive payments using stripe.
                They are happy and thriving. If you like sourdough I would highly recommend placing an order!
              </p>
              <ul className='list-inside list-disc'>
                <li>
                  Full Stack e-commerce platform for bakery. Created front-end for placing orders as well as contacing
                  customers for confirmations.
                </li>
                <li>Connected Stripe for payments for orders and subscriptions.</li>
                <li>
                  Created backend system for managing orders and updating customers about the staus of their order.
                </li>
                <li>Created image uploading system for custom and editable images of products.</li>
                <li>Allow users to sign in to manage their own subscription status.</li>
              </ul>
              <InfoCard heading={'Technologies'}>
                <div className='flex w-full flex-wrap gap-3'>
                  <p className='flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiClerk className='h-5 w-5' />
                    Clerk
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <RiNextjsLine className='h-5 w-5' />
                    Next.js
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiResend className='h-5 w-5' />
                    Resend
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiStripe className='h-5 w-5' />
                    Stripe
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiSqlite className='h-5 w-5' />
                    SQLite
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-cyan-400 px-3 py-2 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <RiTailwindCssFill className='h-5 w-5' />
                    Tailwind
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <BiLogoTypescript className='h-5 w-5' />
                    TypeScript
                  </p>
                </div>
              </InfoCard>
              <ButtonLink prefetch={false} href='https://coastalcrumbllc.com/' target='_blank'>
                Project Link
              </ButtonLink>
            </div>
          </InfoCard>
          <InfoCard colorSwap heading={'Transmission Decoder App'}>
            <div className='flex w-full flex-col gap-3'>
              <p>
                This one is no longer available on the app store, but it was a really cool iOS app that would allow you
                to be able to check the transmission and engine of over 6,000 vehiclesl, you could save previous
                searches and it would suggest you products that were related to your current search.
              </p>
              <ul className='list-inside list-disc'>
                <li>
                  Year, make, and model search that would return current engine and transmission of over 6,000 vehicles.
                </li>
                <li>Suggested products of multiple shops.</li>
                <li>Allowed users to save any number of searches.</li>
              </ul>
              <InfoCard heading={'Technologies'}>
                <div className='flex w-full flex-wrap gap-3'>
                  <p className='flex items-center gap-2 rounded-lg bg-purple-800 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <BsFiletypeCss className='h-5 w-5' />
                    CSS
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-yellow-300 px-3 py-2 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <BiLogoJavascript className='h-5 w-5' />
                    Javascript
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <FaReact className='h-5 w-5' />
                    React Native
                  </p>
                  <p className='flex items-center gap-2 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
                    <SiSqlite className='h-5 w-5' />
                    SQLite
                  </p>
                </div>
              </InfoCard>
            </div>
          </InfoCard>
        </section>
      </InfoCard>
    </article>
  );
}
