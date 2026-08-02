const LINKS = [
  { href: '#education', label: 'Education' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#work', label: 'Work' }
];

export default function PageLinks() {
  return (
    <nav aria-label='Sections on this page' className='flex flex-wrap items-center gap-5'>
      {LINKS.map((link) => (
        <a key={link.href} href={link.href} className='gradient_underline pb-0.5 text-sm font-medium text-champagne'>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
