import GlassButtonLink from '@/components/ui/GlassButtonLink';

export default function BackToTopButton() {
  return (
    <GlassButtonLink additionalClasses='w-fit fixed bottom-3 z-50 right-5  backdrop-blur-sm' href='#top'>
      Back To Top
    </GlassButtonLink>
  );
}
