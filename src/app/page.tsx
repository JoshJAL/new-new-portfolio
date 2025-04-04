import ButtonLink from '@/components/ui/ButtonLink';
import Info from '@/components/ui/Info';
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
          Hello! I am Joshua Levine, I am a web and software developer based out of the United States. I am proficient
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
                I am the lead developer for Monster Transmission & Performance. I have built all of our internal tooling
                and helped develop our front-end using Shopify from the ground up. I also aid our sister companies with
                their development needs.
              </p>
              <ul className='list-inside list-disc'>
                <li>Full Stack e-commerce platform for tranmissions, engine, and torque converters.</li>
                <li>Organized and optimized over 6,000 products. Narrowed down to top selling 200.</li>
                <li>
                  Year, make, and model look up to help customers find their applicable transmissions and engines
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
                  Full Stack e-commerce platform for bakery. Created front-end for placing orders as well as contacting
                  customers for confirmations.
                </li>
                <li>Connected Stripe for payments for orders and subscriptions.</li>
                <li>
                  Created backend system for managing orders and updating customers about the status of their order.
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
                to be able to check the transmission and engine of over 6,000 vehicles, you could save previous searches
                and it would suggest you products that were related to your current search.
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
      <section className='flex w-full flex-col gap-5'>
        <InfoCard heading='Experience'>
          <div className='flex w-full flex-col gap-3'>
            <p>
              I have been a web and software developer for about four years, before that I was in law school and
              interned for a family law attorney by the name of Joryn Jenkins, and before that I held a number of odd
              jobs like most people do. I will list out my relevant developer experience, but if you would like to know
              about any of the others please visit my &quot;
              <StyledLink colorSwap prefetch href='/about'>
                About Me
              </StyledLink>
              &quot; page or feel free to reach out via my &quot;
              <StyledLink colorSwap prefetch href='/contact'>
                Contact Me
              </StyledLink>
              &quot; page!
            </p>

            <InfoCard
              colorSwap
              heading={'Lead Web & Software Developer | Monster Transmission & Performance | 06/2023 - Present'}
            >
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>
                    Created multiple full stack web applications including e-commerce platforms that bring in
                    ~$2,000,000 in monthly revenue.
                  </li>
                  <li>
                    Created and maintain internal tooling and softwares leading to an increase in efficiency and
                    accountability company wide.
                  </li>
                  <li>Created mobile applications using React Native.</li>
                  <li>Created Shopify extensions.</li>
                  <li>Assisted in building of Shopify Theme.</li>
                  <li>Created internal documentation for developers and usage of tooling for users.</li>
                  <li>Handle website design and performance.</li>
                  <li>Oversaw media department including marketing assignments, YouTube channels, and content.</li>
                  <li>Created single sign-on system for all companies portfolio wide.</li>
                  <li>Created inventory management system for internal inventory.</li>
                  <li>
                    Created automations that assist in contacting customers and ensuring that they are informed of the
                    status of their order or warranty claim.
                  </li>
                </ul>
              </div>
            </InfoCard>
            <InfoCard colorSwap heading={'Full Stack Web Developer | Coastal Crumb LLC | 03/2025 - Present'}>
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>Fully built out client&apos;s front-end application.</li>
                  <li>Created secure back-end system to manage orders and subscriptions.</li>
                  <li>Connected Stripe so that client could accept payments for orders and subscriptions.</li>
                  <li>Handled website design and performance.</li>
                  <li>Created full copy and custom components.</li>
                </ul>
              </div>
            </InfoCard>
            <InfoCard colorSwap heading={'Full Stack Web Developer | Coastal Crumb LLC | 12/2024 - 02/2025'}>
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>Fully built out client&apos;s business website.</li>
                  <li>Created full copy and custom components.</li>
                  <li>Custom scheduling management system.</li>
                  <li>Handled website design and performance.</li>
                </ul>
              </div>
            </InfoCard>
            <InfoCard colorSwap heading={'Full Stack Web Developer | Shoelacetip Ink | 03/2023 - 06/2023'}>
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>Fully built out client&apos;s business website.</li>
                  <li>Created full copy and custom components.</li>
                  <li>Completely editable content through backend pages.</li>
                  <li>Connected to backend database.</li>
                  <li>Handled website design and performance.</li>
                </ul>
              </div>
            </InfoCard>
            <InfoCard colorSwap heading={'Web Developer | Almanzar-Paramio Law, LLC | 04/2023 - 06/2023'}>
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>Full website redesign.</li>
                  <li>Multi-language site (internationalization).</li>
                  <li>Improved website performance.</li>
                  <li>Created custom components.</li>
                  <li>Hooked up static website files to hosting service.</li>
                  <li>Used microservices by utilizing Astro and React.</li>
                </ul>
              </div>
            </InfoCard>
            <InfoCard colorSwap heading={'Javascript Developer | Rob Graham Enterprises | 05/2022 - 11/2022'}>
              <div className='flex w-full flex-col gap-3'>
                <ul className='list-inside list-disc'>
                  <li>Maintained frontend and backend code for various enterprises.</li>
                  <li>Implemented digital marketing campaigns.</li>
                  <li>Hooked up microservices (Qwik, Next.js).</li>
                  <li>Created in-house tools for multiple teams.</li>
                  <li>Implemented development cycle for accurate and efficient coding amongst team members.</li>
                  <li>Wrote policy and procedure documentation for code and technology.</li>
                  <li>
                    Created hundreds of front-end landing pages to direct clients to more engaging portions of site.
                  </li>
                  <li>Aided in improving site performance with the use of Google Tag Manager.</li>
                  <li>Improved click through rate for landing pages and quiz pages.</li>
                  <li>Designed and implemented single-sign-on system using SAML.</li>
                  <li>Helped build shift-management system for contractors.</li>
                  <li>Utilized AWS Cognito services to maintain users and their permissions.</li>
                  <li>Built automatic email messaging system utilizing AWS API Gateway and SES.</li>
                </ul>
              </div>
            </InfoCard>
          </div>
        </InfoCard>
      </section>
      <section className='flex w-full flex-col gap-5'>
        <InfoCard heading='Education'>
          <div className='flex w-full flex-col gap-3'>
            <p>
              I went to college from 2015 - 2019 and got me degree in legal studies, then after that I attended Stetson
              College of Law for one year from 2021-2022. While in law school I realized that I was not happy and I was
              never going to be happy doing law. I wish I had realized that sooner of course, but to be fair I was just
              in school because I had always been told that that was what you had to do to get ahead, so I did it. After
              leaving law school I worked for a company called HealthXL in a customer service facing role while I
              figured out my next step. After speaking with my sister and brother-in-law, who is also a developer, they
              convinced me to give development a shot. I signed up for a bootcamp the very next week and fell in love
              immediately. I completed the bootcamp and throughout my time in it I took all the time to learn everything
              I could about development in a short period of time, this is what people must have meant when they said
              &quot;If you do what you love you will never work a day in your life.&quot; Within a month I had my first
              job as a developer and I never looked back. This is what I was meant to do and I was not going to let it
              get away from me.
            </p>
            <InfoCard colorSwap heading={'University of Central Florida | Orlando, FL | 08/2019 - 12/2019'}>
              <Info label={'Degree'}>Bachelors of Arts in Legal Studies</Info>
            </InfoCard>
            <InfoCard colorSwap heading={'Thinkful | Full Stack Web Development Bootcamp | 10/2022 - 03/2023'}>
              <Info label={'Covered'}>
                <div className='flex w-full flex-col gap-3'>
                  <ul className='list-inside list-disc'>
                    <li>
                      Industry best practices and software development standards with a focus on JavaScript, HTML5,
                      CSS3, Node.js, PostgreSQL, RESTful API&apos;s.
                    </li>
                    <li>
                      Studied the tradeoffs in data structures, including arrays, linked lists, stacks, queues, and
                      trees as well as various search algorithms and recursion.
                    </li>
                  </ul>
                </div>
              </Info>
            </InfoCard>
          </div>
        </InfoCard>
      </section>
    </article>
  );
}
