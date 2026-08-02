import { isInternalRouteHref } from './navigationTransitions';
import { describe, expect, it } from 'bun:test';

describe('isInternalRouteHref', () => {
  it('recognizes App Router hrefs', () => {
    for (const href of ['/', '/projects', '/guides/typescript', '/projects?sort=recent', '/guides#contents']) {
      expect(isInternalRouteHref(href)).toBe(true);
    }
  });

  it('rejects hrefs that should use native anchors', () => {
    for (const href of [
      '//cdn.example.com/asset',
      '#contents',
      '?sort=recent',
      'mailto:hello@example.com',
      'https://example.com',
      'http://example.com'
    ]) {
      expect(isInternalRouteHref(href)).toBe(false);
    }
  });
});

describe('SiteLink regressions', () => {
  it('owns the only next/link import and supplies canonical navigation options', async () => {
    const sourceRoot = new URL('../', import.meta.url).pathname;
    const sourceFiles = new Bun.Glob('**/*.{ts,tsx}');
    const nextLinkImporters: string[] = [];

    for await (const relativePath of sourceFiles.scan({ cwd: sourceRoot })) {
      const source = await Bun.file(`${sourceRoot}/${relativePath}`).text();

      if (/^import .* from ['"]next\/link['"];?$/m.test(source)) {
        nextLinkImporters.push(relativePath);
      }
    }

    expect(nextLinkImporters.sort()).toEqual(['components/ui/SiteLink.tsx']);

    const siteLink = await Bun.file(new URL('../components/ui/SiteLink.tsx', import.meta.url)).text();
    expect(siteLink).toContain("import Link from 'next/link';");
    expect(siteLink).toContain('return <a {...anchorProps} href={href} rel={rel} target={target} />;');
    expect(siteLink).toContain('prefetch={true}');
    expect(siteLink).toContain('transitionTypes={ROUTE_TRANSITION_TYPES}');
  });

  it('keeps explicit same-page and project destination anchors native', async () => {
    const [pageLinks, backToTopButton, projectCard] = await Promise.all([
      Bun.file(new URL('../components/about/PageLinks.tsx', import.meta.url)).text(),
      Bun.file(new URL('../components/ui/BackToTopButton.tsx', import.meta.url)).text(),
      Bun.file(new URL('../components/projects/ProjectCard.tsx', import.meta.url)).text()
    ]);

    expect(pageLinks).toContain('<a');
    expect(pageLinks).toContain("href: '#education'");
    expect(backToTopButton).toContain('<a');
    expect(backToTopButton).toContain("href='#top'");
    expect(projectCard.match(/<a/g)).toHaveLength(2);
    expect(projectCard).toContain('href={project.codeHref}');
    expect(projectCard).toContain('href={project.projectHref}');
  });
});

describe('ViewTransition regressions', () => {
  it('styles root boundary updates for the canonical rack-focus transition type', async () => {
    const [transitions, template, globals] = await Promise.all([
      Bun.file(new URL('./navigationTransitions.ts', import.meta.url)).text(),
      Bun.file(new URL('../app/template.tsx', import.meta.url)).text(),
      Bun.file(new URL('../app/globals.css', import.meta.url)).text()
    ]);

    expect(transitions).toContain("export const RACK_FOCUS_TRANSITION_TYPE = 'rack-focus';");
    expect(template).toContain("update={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-update', default: 'none' }}");
    expect(globals.match(/::view-transition-old\(\.rack-focus-update\)/g)).toHaveLength(2);
    expect(globals.match(/::view-transition-new\(\.rack-focus-update\)/g)).toHaveLength(2);
  });
});
