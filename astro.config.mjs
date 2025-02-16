import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docuna.pages.dev',
  integrations: [
    starlight({
      title: 'Docuna',
      social: {
        github: 'https://www.fiverr.com/creativitas',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome', link: '/getting-started/' },
            { label: 'Download', link: '/getting-started/download/' },
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'Structure', link: '/getting-started/structure/' },
            { label: 'Configuration', link: '/getting-started/configuration/' },
            { label: 'Design UI', link: '/getting-started/design/' },
            { label: 'Content Doc', link: '/getting-started/content/' },
            { label: 'Static Page', link: '/getting-started/static-page/' },
            { label: 'Hosting Deploy', link: '/getting-started/hosting-deploy/' },
            { label: 'Headless CMS', link: '/getting-started/headlesscms/' },
          ],
        },
        {
          label: 'Source Code',
          autogenerate: { directory: 'source-code' },
        },
        {
          label: 'Project',
          autogenerate: { directory: 'project' },
        },
      ],
    }),
  ],
});
