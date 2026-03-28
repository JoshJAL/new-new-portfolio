import GlassButtonLink from '@/components/ui/GlassButtonLink';

export default function BackToTopButton() {
  return (
    <GlassButtonLink additionalClasses='w-fit fixed bottom-3 z-10 right-5 liquid-blur' href='#top'>
      Back To Top
    </GlassButtonLink>
  );
}
