import GlassButtonLink from '@/components/ui/GlassButtonLink';

export default function BackToTopButton() {
  return (
    <GlassButtonLink
      additionalClasses='w-fit fixed bottom-3 z-50 right-5 sm:right-84 md:right0-96 backdrop-blur-sm'
      href='#top'
    >
      Back To Top
    </GlassButtonLink>
  );
}
