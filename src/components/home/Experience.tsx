import InfoCard from '@/components/ui/InfoCard';
import StyledLink from '@/components/ui/StyledLink';

export default function Experience() {
  return (
    <InfoCard id='experience' heading='Experience'>
      <section className='flex w-full flex-col gap-5'>
        <p>
          I have been a web and software developer for about four years, before that I was in law school and interned
          for a family law attorney by the name of Joryn Jenkins, and before that I held a number of odd jobs like most
          people do. I will list out my relevant developer experience, but if you would like to know about any of the
          others please visit my &quot;
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
                Created multiple full stack web applications including e-commerce platforms that bring in ~$2,000,000 in
                monthly revenue.
              </li>
              <li>
                Created npm package to reduce boilerplate for internal and external tools. Functions with React and
                React Server Components. Can be used in Next.js as well.
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
        <InfoCard colorSwap heading={'Javascript Developer | Rob Graham Enterprises | 05/2022 - 11/2022'}>
          <div className='flex w-full flex-col gap-3'>
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
          </div>
        </InfoCard>
      </section>
    </InfoCard>
  );
}
