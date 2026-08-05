import { FEATURED_PORTFOLIO_PROJECTS, PORTFOLIO_PROJECTS } from './projectCatalog';

import { describe, expect, it } from 'bun:test';

describe('portfolio project catalog', () => {
  it('contains the nine curated projects in their display order', () => {
    expect(PORTFOLIO_PROJECTS).toHaveLength(9);
    expect(PORTFOLIO_PROJECTS.map((project) => project.id)).toEqual([
      'directors-canvas',
      'ai-cv-resumes',
      'letter-riot',
      'cinewhisper',
      'photography-portfolio',
      'taskpilot',
      'agent-maker',
      'coastal-crumb',
      'monster'
    ]);
  });

  it('features exactly the three newest products in order', () => {
    expect(FEATURED_PORTFOLIO_PROJECTS.map((project) => project.id)).toEqual([
      'directors-canvas',
      'ai-cv-resumes',
      'letter-riot'
    ]);
  });

  it('backs every catalog entry with an internal project page', async () => {
    expect(PORTFOLIO_PROJECTS.map((project) => project.href)).toEqual([
      '/projects/directors-canvas',
      '/projects/ai-cv-resumes',
      '/projects/letter-riot',
      '/projects/cinewhisper',
      '/projects/photography-portfolio',
      '/projects/claude-trello',
      '/projects/agent-maker',
      '/projects/coastal-crumb',
      '/projects/monster'
    ]);

    for (const project of PORTFOLIO_PROJECTS) {
      const routePath = project.href?.replace(/^\//, '');
      expect(routePath).toBeDefined();
      expect(await Bun.file(new URL(`../../app/${routePath}/page.tsx`, import.meta.url)).exists()).toBe(true);
    }
  });

  it('uses an HTTPS production link for every project', () => {
    for (const project of PORTFOLIO_PROJECTS) {
      expect(new URL(project.projectHref ?? '').protocol).toBe('https:');
    }
  });

  it('links source only for the two verified public repositories', () => {
    expect(
      PORTFOLIO_PROJECTS.filter((project) => project.codeHref).map((project) => [project.id, project.codeHref])
    ).toEqual([
      ['photography-portfolio', 'https://github.com/JoshJAL/photography-portfolio'],
      ['taskpilot', 'https://github.com/JoshJAL/claude-trello']
    ]);
    expect(PORTFOLIO_PROJECTS.find((project) => project.id === 'agent-maker')?.codeHref).toBeUndefined();
  });

  it('does not publish the private Agent Maker repository URL anywhere in the site', async () => {
    const privateRepositoryUrl = ['https://github.com/JoshJAL', 'agent-maker'].join('/');
    const sourceRoot = new URL('../../', import.meta.url).pathname;
    const sourceFiles = new Bun.Glob('**/*.{ts,tsx,md,mdx}');

    for await (const relativePath of sourceFiles.scan({ cwd: sourceRoot })) {
      const source = await Bun.file(`${sourceRoot}/${relativePath}`).text();
      expect(source).not.toContain(privateRepositoryUrl);
    }
  });
});
