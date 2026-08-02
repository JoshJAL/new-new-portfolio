import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';
import StyledLink from '@/components/ui/StyledLink';

export default function Experience() {
  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='experience'>Experience</SectionHeading>
      <p className='text-desert-sand'>
        I have built web and software professionally since 2022. Before that, I was in law school, interned for family
        law attorney Joryn Jenkins, and held a number of odd jobs like most people do. I will list my relevant developer
        experience here, but if you would like to know about any of the others, please visit my{' '}
        <StyledLink colorSwap href='/about'>
          About Me
        </StyledLink>{' '}
        page or feel free to reach out via my{' '}
        <StyledLink colorSwap href='/contact'>
          Contact Me
        </StyledLink>{' '}
        page!
      </p>
      <GlassPanel tint='caribbean' className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h3>Full Stack Developer</h3>
          <p className='text-sm text-champagne'>Sofwerx &middot; 12/2025 - Present</p>
        </div>
        <ul className='list-inside list-disc'>
          <li>Build and maintain internal programs and customer-facing websites.</li>
          <li>Develop and maintain databases supporting internal and external solutions.</li>
          <li>Maintain a technology stack that includes Next.js, TypeScript, Tailwind CSS, and AWS services.</li>
        </ul>
      </GlassPanel>
      <GlassPanel tint='caribbean' className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h3>Lead Web &amp; Software Developer</h3>
          <p className='text-sm text-champagne'>Monster Transmission &amp; Performance &middot; 06/2023 - 07/2025</p>
        </div>
        <ul className='list-inside list-disc'>
          <li>
            Created multiple full stack web applications including e-commerce platforms that bring in ~$2,000,000 in
            monthly revenue.
          </li>
          <li>
            Created an npm package to reduce boilerplate for internal and external tools. It worked with React and React
            Server Components and could be used in Next.js as well.
          </li>
          <li>
            Created and maintained internal tooling and software, leading to an increase in efficiency and
            accountability company wide.
          </li>
          <li>Created mobile applications using React Native.</li>
          <li>Created Shopify extensions.</li>
          <li>Assisted in building a Shopify theme.</li>
          <li>Created internal documentation for developers and usage of tooling for users.</li>
          <li>Handled website design and performance.</li>
          <li>Oversaw media department including marketing assignments, YouTube channels, and content.</li>
          <li>Created single sign-on system for all companies portfolio wide.</li>
          <li>Created inventory management system for internal inventory.</li>
          <li>
            Created automations that assist in contacting customers and ensuring that they are informed of the status of
            their order or warranty claim.
          </li>
        </ul>
      </GlassPanel>
      <GlassPanel tint='caribbean' className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h3>JavaScript Developer</h3>
          <p className='text-sm text-champagne'>Rob Graham Enterprises &middot; 05/2022 - 11/2022</p>
        </div>
        <ul className='list-inside list-disc'>
          <li>Maintained frontend and backend code for various enterprises.</li>
          <li>Implemented digital marketing campaigns.</li>
          <li>Hooked up microservices (Qwik, Next.js).</li>
          <li>Created in-house tools for multiple teams.</li>
          <li>Implemented development cycle for accurate and efficient coding amongst team members.</li>
          <li>Wrote policy and procedure documentation for code and technology.</li>
          <li>Created hundreds of front-end landing pages to direct clients to more engaging portions of site.</li>
          <li>Aided in improving site performance with the use of Google Tag Manager.</li>
          <li>Improved click through rate for landing pages and quiz pages.</li>
          <li>Designed and implemented single-sign-on system using SAML.</li>
          <li>Helped build shift-management system for contractors.</li>
          <li>Utilized AWS Cognito services to maintain users and their permissions.</li>
          <li>Built automatic email messaging system utilizing AWS API Gateway and SES.</li>
        </ul>
      </GlassPanel>
    </section>
  );
}
