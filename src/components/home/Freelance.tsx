import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';

interface FreelanceJob {
  client: string;
  dates: string;
  role: string;
  bullets: string[];
}

const JOBS: FreelanceJob[] = [
  {
    client: 'Coastal Crumb LLC',
    dates: '03/2025 - 12/2025',
    role: 'Full Stack Web Developer',
    bullets: [
      "Fully built out client's front-end application.",
      'Created secure back-end system to manage orders and subscriptions.',
      'Connected Stripe so that client could accept payments for orders and subscriptions.',
      'Handled website design and performance.',
      'Created full copy and custom components.'
    ]
  },
  {
    client: 'MSK Structural Therapy',
    dates: '12/2024 - 02/2025',
    role: 'Full Stack Web Developer',
    bullets: [
      "Fully built out client's business website.",
      'Created full copy and custom components.',
      'Custom scheduling management system.',
      'Handled website design and performance.'
    ]
  },
  {
    client: "Anissa's Soaps",
    dates: '06/2024 - 08/2024',
    role: 'Full Stack Web Developer',
    bullets: [
      "Fully built out client's business website.",
      'Created full copy and custom components.',
      'Custom ordering system.',
      'Handled website design and performance.'
    ]
  },
  {
    client: 'Shoelacetip Ink',
    dates: '03/2023 - 06/2023',
    role: 'Full Stack Web Developer',
    bullets: [
      "Fully built out client's business website.",
      'Created full copy, custom components, and completely editable content through backend pages.',
      'Connected to backend database.',
      'Handled website design and performance.'
    ]
  },
  {
    client: 'Almanzar-Paramio Law, LLC',
    dates: '04/2023 - 06/2023',
    role: 'Web Developer',
    bullets: [
      'Full website redesign.',
      'Multi-language site (internationalization).',
      'Improved website performance.',
      'Created custom components.',
      'Hooked up static website files to hosting service.',
      'Used microservices by utilizing Astro and React.'
    ]
  }
];

export default function Freelance() {
  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='freelance'>Freelance</SectionHeading>
      <p className='text-desert-sand'>
        Along with professional experience, I have done a lot of freelance work for small businesses and individuals.
      </p>
      {JOBS.map((job) => (
        <GlassPanel key={job.client} tint='dark-cyan' className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <h3>{job.client}</h3>
            <p className='text-sm text-champagne'>
              {job.role} &middot; {job.dates}
            </p>
          </div>
          <ul className='list-inside list-disc'>
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </GlassPanel>
      ))}
    </section>
  );
}
