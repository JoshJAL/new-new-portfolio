import { Window } from 'happy-dom';
import { SITE_CONFIG } from '@/utils/siteConfig';

import { describe, expect, it } from 'bun:test';

async function readSource(relativeUrl: string): Promise<string> {
  return Bun.file(new URL(relativeUrl, import.meta.url)).text();
}

function asBrowserElement<T extends Element>(value: unknown): T {
  return value as T;
}

function asBrowserEvent(value: unknown): Event {
  return value as Event;
}

describe('contact and transition regressions', () => {
  it('keeps confirmation, validation, disabled submission, inline errors, and an ID-free redirect', async () => {
    const [contactForm, contactAction, submitButton, thankYouPage] = await Promise.all([
      readSource('../forms/ContactForm.tsx'),
      readSource('../../server/actions/contact.ts'),
      readSource('../forms/ui/SubmitButton.tsx'),
      readSource('../../app/thank-you/page.tsx')
    ]);

    expect(contactForm.indexOf("confirm('Are you sure you want to send this message?')")).toBeGreaterThan(-1);
    expect(contactForm.indexOf('submitContact(value)')).toBeGreaterThan(
      contactForm.indexOf("confirm('Are you sure you want to send this message?')")
    );
    expect(contactForm).toContain('onChange: contactSchema');
    expect(contactForm).toContain("role='alert'");
    expect(contactForm).toContain("name='companyWebsite'");
    expect(contactForm).toContain('tabIndex={-1}');
    expect(contactForm).toContain(
      'router.push(SITE_CONFIG.thankYouPath, { transitionTypes: ROUTE_TRANSITION_TYPES });'
    );
    expect(submitButton).toContain('disabled={isSubmitting || !canSubmit}');
    expect(SITE_CONFIG.thankYouPath).toBe('/thank-you');
    expect(SITE_CONFIG.thankYouPath).not.toContain('?');
    expect(thankYouPage).not.toContain('searchParams');
    expect(thankYouPage).not.toContain('getMessageById');
    expect(contactAction.indexOf('contactSchema.safeParse(values)')).toBeGreaterThan(-1);
    expect(contactAction.indexOf("import('@/utils/contact/submitContactMessage')")).toBeGreaterThan(
      contactAction.indexOf('if (parsed.data.companyWebsite)')
    );
  });

  it('restricts transitions to the visible properties they change', async () => {
    const [textField, textAreaField, dropdown, dropdownItem, pageLink] = await Promise.all([
      readSource('../forms/ui/TextField.tsx'),
      readSource('../forms/ui/TextAreaField.tsx'),
      readSource('../header/dropdownMenu/DropdownMenu.tsx'),
      readSource('../header/dropdownMenu/DropdownMenuItem.tsx'),
      readSource('./PageLink.tsx')
    ]);

    expect(textField).toContain('transition-shadow');
    expect(textAreaField).toContain('transition-shadow');
    expect(dropdown).toContain('transition-[background-color,border-color,color,box-shadow]');
    expect(dropdownItem).toContain('transition-colors');
    expect(pageLink).toContain('transition-shadow');
    expect(pageLink).not.toContain('transition-[transform,box-shadow]');
  });

  it('keeps the mobile menu portalled, anchored, blurred, and directly navigable', async () => {
    const [dropdown, dropdownItem] = await Promise.all([
      readSource('../header/dropdownMenu/DropdownMenu.tsx'),
      readSource('../header/dropdownMenu/DropdownMenuItem.tsx')
    ]);
    const menuItemsOpeningTag = dropdown.match(/<MenuItems[\s\S]*?>/)?.[0] ?? '';

    expect(menuItemsOpeningTag).toContain("anchor={{ to: 'bottom end', gap: 8, padding: 8 }}");
    expect(menuItemsOpeningTag).toMatch(/\bportal\b/);
    expect(menuItemsOpeningTag).toContain('liquid-blur');
    expect(menuItemsOpeningTag).not.toMatch(/\b(?:absolute|right-0|mt-2)\b/);
    expect(dropdownItem).not.toContain("<MenuItem as='div'>");
    expect(dropdownItem.match(/<MenuItem>/g)).toHaveLength(1);
    expect(dropdownItem.match(/<SiteLink/g)).toHaveLength(1);
    expect(dropdownItem).toMatch(/<MenuItem>\s*<SiteLink[\s\S]*<\/SiteLink>\s*<\/MenuItem>/);
  });

  it('wraps each complete guide link in one full-height TiltCard', async () => {
    const pageLink = await readSource('./PageLink.tsx');
    const tiltCardStart = pageLink.indexOf('<TiltCard');
    const linkStart = pageLink.indexOf('<SiteLink');
    const linkEnd = pageLink.indexOf('</SiteLink>');
    const tiltCardEnd = pageLink.indexOf('</TiltCard>');

    expect(pageLink.match(/<TiltCard/g)).toHaveLength(1);
    expect(tiltCardStart).toBeLessThan(linkStart);
    expect(linkEnd).toBeLessThan(tiltCardEnd);
    expect(pageLink).toContain("<TiltCard className='w-full' innerClassName='h-full'>");
    expect(pageLink).toContain('grid size-full');
    expect(pageLink).not.toContain('tiltMax={8}');
    expect(pageLink).not.toContain('scale={1}');
    expect(pageLink).not.toContain('hover:scale-102');
  });

  it('keeps one visible shared back-to-top target and a native anchor', async () => {
    const [layout, backToTopButton, homePage, aboutPage] = await Promise.all([
      readSource('../../app/layout.tsx'),
      readSource('./BackToTopButton.tsx'),
      readSource('../../app/page.tsx'),
      readSource('../../app/about/page.tsx')
    ]);
    const topIdPattern = /\bid=(['"])top\1/g;
    const layoutTopTarget = layout.match(/<[^>]*\bid=(['"])top\1[^>]*>/)?.[0] ?? '';

    expect(layout.match(topIdPattern) ?? []).toHaveLength(1);
    expect(layoutTopTarget).toContain('<main');
    expect(layoutTopTarget).not.toContain('hidden');
    expect(backToTopButton).toContain("href='#top'");
    expect(homePage).not.toMatch(topIdPattern);
    expect(aboutPage).not.toMatch(topIdPattern);
  });
});

describe('TiltCard', () => {
  it('animates, resets, honors reduced motion, and clears will-change', async () => {
    const happyWindow = new Window({ url: 'https://example.test' });
    let reducedMotion = false;
    let animationFrameId = 0;
    const cancelledFrames: number[] = [];

    Object.defineProperty(happyWindow, 'matchMedia', {
      configurable: true,
      value: (query: string) => ({
        addEventListener() {},
        dispatchEvent: () => false,
        matches: reducedMotion,
        media: query,
        onchange: null,
        removeEventListener() {}
      })
    });
    Object.assign(globalThis, {
      document: happyWindow.document,
      Event: happyWindow.Event,
      HTMLElement: happyWindow.HTMLElement,
      IS_REACT_ACT_ENVIRONMENT: true,
      MouseEvent: happyWindow.MouseEvent,
      navigator: happyWindow.navigator,
      window: happyWindow,
      cancelAnimationFrame: (id: number) => cancelledFrames.push(id),
      requestAnimationFrame: (callback: FrameRequestCallback) => {
        animationFrameId += 1;
        callback(happyWindow.performance.now());
        return animationFrameId;
      }
    });

    const [{ createElement, act }, { createRoot }, { default: TiltCard }] = await Promise.all([
      import('react'),
      import('react-dom/client'),
      import('./TiltCard')
    ]);

    const container = happyWindow.document.createElement('div');
    happyWindow.document.body.append(container);
    const root = createRoot(asBrowserElement<HTMLDivElement>(container));

    await act(async () => {
      root.render(
        <TiltCard innerClassName='h-full test-inner'>
          <span>Card</span>
        </TiltCard>
      );
    });

    const outer = asBrowserElement<HTMLDivElement>(container.firstElementChild);
    const inner = asBrowserElement<HTMLDivElement>(outer.firstElementChild);
    expect(inner.classList.contains('h-full')).toBe(true);
    expect(inner.classList.contains('test-inner')).toBe(true);
    Object.defineProperty(outer, 'getBoundingClientRect', {
      value: () => ({ bottom: 100, height: 100, left: 0, right: 100, top: 0, width: 100, x: 0, y: 0 })
    });

    await act(async () => {
      outer.dispatchEvent(asBrowserEvent(new happyWindow.MouseEvent('mouseover', { bubbles: true })));
      outer.dispatchEvent(
        asBrowserEvent(new happyWindow.MouseEvent('mousemove', { bubbles: true, clientX: 75, clientY: 25 }))
      );
    });

    expect(inner.style.willChange).toBe('transform');
    expect(inner.style.transform).toContain('rotateX');

    await act(async () => {
      outer.dispatchEvent(asBrowserEvent(new happyWindow.MouseEvent('mouseout', { bubbles: true })));
    });

    expect(inner.style.transform).toBe('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    expect(inner.style.willChange).toBe('transform');

    const transitionEnd = new happyWindow.Event('transitionend', { bubbles: true });
    Object.defineProperty(transitionEnd, 'propertyName', { value: 'transform' });
    await act(async () => inner.dispatchEvent(asBrowserEvent(transitionEnd)));
    expect(inner.style.willChange).toBe('');

    await act(async () => {
      outer.dispatchEvent(asBrowserEvent(new happyWindow.MouseEvent('mouseover', { bubbles: true })));
    });
    expect(inner.style.willChange).toBe('transform');

    await act(async () => root.unmount());
    expect(inner.style.willChange).toBe('');
    expect(cancelledFrames.length).toBeGreaterThan(0);

    reducedMotion = true;
    const reducedContainer = happyWindow.document.createElement('div');
    const reducedRoot = createRoot(asBrowserElement<HTMLDivElement>(reducedContainer));

    await act(async () => {
      reducedRoot.render(createElement(TiltCard, null, createElement('span', null, 'Reduced')));
    });

    const reducedOuter = asBrowserElement<HTMLDivElement>(reducedContainer.firstElementChild);
    const reducedInner = asBrowserElement<HTMLDivElement>(reducedOuter.firstElementChild);
    await act(async () => {
      reducedOuter.dispatchEvent(asBrowserEvent(new happyWindow.MouseEvent('mouseover', { bubbles: true })));
      reducedOuter.dispatchEvent(
        asBrowserEvent(new happyWindow.MouseEvent('mousemove', { bubbles: true, clientX: 50, clientY: 50 }))
      );
    });

    expect(reducedInner.style.willChange).toBe('');
    expect(reducedInner.style.transform).toBe('');
    await act(async () => reducedRoot.unmount());
  });
});
