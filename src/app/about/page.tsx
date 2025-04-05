import PageLinks from '@/components/about/PageLinks';
import InfoCard from '@/components/ui/InfoCard';
import StyledLink from '@/components/ui/StyledLink';

export default function Page() {
  return (
    <InfoCard heading='About Me'>
      <section className='flex w-full flex-col gap-5'>
        <p>
          Hello! My name is Joshua Levine, I am a web and software developer based out of the United States. I
          appreciate you taking the time to poke around my website and getting to know me a little bit. There is a lot
          to get into if you care to read it all, but the tldr is that I have a passion for coding, movies, video games,
          photography and cars and am otherwise an open book. I would love to get in contact with you and chat if you
          would like; simply visit my &quot;
          <StyledLink colorSwap href={'/contact'}>
            Contact Me
          </StyledLink>
          &quot; page and reach out!
        </p>
        <PageLinks />
        <InfoCard id='education' colorSwap heading='Education'>
          <article className='flex w-full flex-col gap-3'>
            <p>
              Initially, I thought I wanted to be a lawyer. I even received my bachelors in legal studies from the
              University of Central Florida in Orlando. From there I went on to go to law school for one year at Stetson
              University during the peak of COVID. Whether it was going through higher education during lockdown or just
              finding that this was not truly what I wanted to do in my life I decided to not continue pursuing my law
              degree because I was finding myself wildly unhappy.
            </p>
            <p>
              Over the next couple months I was working in a remote position for HealthXL and even though this was not
              what I went to school for I found that I was significantly happier doing literally anything other than
              law. However, I knew that I wanted to do more and was willing to put in an immeasurable amount of work to
              get there. I just had to figure out what that was.
            </p>
            <p>
              After speaking with my sister and brother-in-law (who is also a developer) I was convinced to give coding
              a shot, after all, I loved building computers and solving problems, so what harm could it do to try? With
              this new found direction I signed up for a coding bootcamp and hit the ground running. I immediately fell
              in love with code and knew that this is what I wanted to do with my life, so I gave it my all and then
              some. I spent every waking moment learning and practicing coding, and I was determined to make a career
              out of it. I graduated from the bootcamp with a strong foundation in web development, and I was ready to
              take on the world.
            </p>
            <p>
              My education is now ever continuing. I have learned several more languages since participating in the
              bootcamp and can confidently say that I am now a well rounded and proficient web and software developer.
            </p>
          </article>
        </InfoCard>
        <InfoCard id='hobbies' colorSwap heading='Hobbies'>
          <article className='flex w-full flex-col gap-3'>
            <p>
              I have always been very passionate about cars. I love working on them, making them go fast, and then
              terrifying my loved ones with them. I am fortunate enough to have driven over 250 different vehicles in my
              life ranging including economy vehicles, drag cars, and even some exotics. Currently I don&apos;t have a
              project car, but I would love to get one soon. Hopefully, the economy allows me to do that again some day!
            </p>
            <p>
              Even though I don&apos;t play video games much anymore they will always hold a special place in my heart.
              Some of my closest friends have been made over the internet and I have had the pleasure of getting to know
              them through our shared interests and now I am attending their weddings and taking them on adventures.
              When I do get to play these days I either jump on Valorant with my friends, play binding of Isaac until my
              eyes bleed or foster a hidden gambling addiction with Balatro.
            </p>
            <p>
              My ultimate way to relax is to sit back and watch a movie. I have a deep love for horror and those bizarre
              experimental films Robert Pattinson and Daniel Radcliffe always seem to star in. I want to watch something
              that captivates me from beginning to end, or I want to turn my brain off and watch some slop just like
              everybody else, but there is something to enjoy in every movie and I take the time to learn absolutely
              everything I can about them. I have seen and have a deep knowledge about so many movies that it can
              genuinely be classified as a problem.
            </p>
            <p>
              Currently I am doing some light photography and having a blast with it. I don&apos;t think that I am any
              good, but it is something that gets me out of the house and forces me to touch grass and for that I am
              eternally grateful. If you want to see some of the pictures that I&apos;ve been taking visit my &quot;
              <StyledLink href={'/photography'}>Photography</StyledLink>
              &quot; page or follow me on{' '}
              <StyledLink href={'https://www.instagram.com/mygovtnamej/'} target='_blank' prefetch={false}>
                Instagram
              </StyledLink>
              !
            </p>
          </article>
        </InfoCard>
        <InfoCard id='work' colorSwap heading='Work'>
          <article className='flex w-full flex-col gap-3'>
            <p>
              I have held a number of jobs and I will try to give most of them the justice that they deserve here very
              briefly
            </p>
            <p>
              When I was 14 I worked in a textile factory cutting palletes of fabric. That was a lot of fun and holds no
              relevancy today, but it was a very memorable Summer. I spent it in Houston with my father and I loved
              every second of it so it deserves some mentioning.
            </p>
            <p>
              After college I worked as a legal intern for Joryn Jenkins, a family law attorney in Tampa FL. This was an
              eye opening experience and while I am eternally grateful for the opportunity and the experience and the
              mentorship of Joryn, I do believe that this is when I made the decision internally that I no longer wanted
              to pursue law. Family law is brutal, you get a front row seat to two people who used to love each other
              tear each other limb from limb using the very things they initially trusted each other with. Sometimes
              they would weaponize their children while they were in the room themselves, something that I find morally
              reprehensible. This was a fantastic opportunity, and incredible learning experience that I am ever
              grateful for and something that I learned from deeply, both about myself and about the law.
            </p>
            <p>
              After learning to code I worked for a company known as Rob Graham Enterprises. I learned so much so
              quickly here. The one other developer that I worked with here was able to teach me so much in such a short
              amount of time and working here is unironically why I have so much confidence in my ability as a developer
              today. We worked on a number of projects here ranging in complexity and I knew from the moment that I
              started that I wanted to do this for the rest of my life.
            </p>
            <p>
              After Rob Graham I freelanced for a while. This was a lot of fun, but being in complete control of your
              finances with no guarantee of a paycheck is not for the feint of heart. I built website and infrastructure
              for lawyers, tattoo artists, structural therapists, mom and pop shops, bakeries and much more during this
              time. All requiring their own nuance and special attentions and it is incredibly rewarding and fun. I was
              able to help support small and local businesses as well as do work for large scale companies during this
              time, further fleshing out my skills.
            </p>
            <p>
              Currently, I am working at Monster Transmission & Performance as the lead developer. I got here and
              climbed very quickly and am immensely proud of myself for the work that I have done here. I have been able
              to push out consistent, quality work quickly since my very first day. Imposter syndrome has officially
              become a thing of the past. Working here I have built the stack myself from the ground up, done work for
              our sister companies and single handedly aligned our tech stacks both internally and externally while
              setting up a clear outline for future companies who might join our portfolio. It has been a wonderful
              clashing of worlds since I have a passion for cars and a passion for tech and here I have been able to
              mesh those two while building for several companies that build custom car parts, engines, and
              transmissions.
            </p>
          </article>
        </InfoCard>
      </section>
    </InfoCard>
  );
}
