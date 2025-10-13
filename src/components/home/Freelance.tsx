import InfoCard from '@/components/ui/InfoCard';

export default function Freelance() {
  return (
    <InfoCard id='freelance' heading='Freelance'>
      <section className='flex w-full flex-col gap-5'>
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
        <InfoCard colorSwap heading={'Full Stack Web Developer | MSK Structural Therapy | 12/2024 - 02/2025'}>
          <div className='flex w-full flex-col gap-3'>
            <ul className='list-inside list-disc'>
              <li>Fully built out client&apos;s business website.</li>
              <li>Created full copy and custom components.</li>
              <li>Custom scheduling management system.</li>
              <li>Handled website design and performance.</li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard colorSwap heading={"Full Stack Web Developer | Anissa's Soaps | 06/2024 - 08/2024"}>
          <div className='flex w-full flex-col gap-3'>
            <ul className='list-inside list-disc'>
              <li>Fully built out client&apos;s business website.</li>
              <li>Created full copy and custom components.</li>
              <li>Custom ordering system.</li>
              <li>Handled website design and performance.</li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard colorSwap heading={'Full Stack Web Developer | Shoelacetip Ink | 03/2023 - 06/2023'}>
          <div className='flex w-full flex-col gap-3'>
            <ul className='list-inside list-disc'>
              <li>Fully built out client&apos;s business website.</li>
              <li>Created full copy, custom components, and completely editable content through backend pages.</li>
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
      </section>
    </InfoCard>
  );
}
