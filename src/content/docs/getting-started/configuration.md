---
title: Docuna Configuration
description: Confguration and setup your documentation website.
---

## Configuration

First you need to set up and configure your documentation site, make sure you have a list of content about your documentation project.

And then you can configure your sidebar site in `astro.config.mjs`

Open astro.config.mjs with code editor

### Add your domain

Insert your domain
```
title: 'Your doc title here....',
```

### Configure sidebar

Configure sidebar doc page
```
label: 'Your categories doc here...',
```

### Documentation content

Configure your documentation content
```
items: [
{ label: 'Your content doc title...', link: 'URL Link for your documentation content article..' },
```

### Auto Generate

Use auto generate content from documentation folder 
```
{
label: 'Your Categories doc here...',
autogenerate: { directory: 'your folder doc here...' },
},
```

### Example Code

Complete code look like this

```
export default defineConfig({
  site: 'your website domain here..',
  integrations: [
    starlight({
      title: 'Your doc title here....',
      social: {
        github: 'your github repo url here..',
      },
      sidebar: [
        {
          label: 'Your categories doc here...',
          items: [
            { label: 'Installation', link: '/getstart/installation/' },
            { label: 'Your content doc here..', link: 'URL Link content doc here..' },
          ],
        },
        {
          label: 'Your Categories doc here...',
          autogenerate: { directory: 'your folder doc here...' },
        },
        {
          label: 'Project',
          autogenerate: { directory: 'project' },
        },
      ],
    }),
  ],
});
```


### Implementation Code

example implementation code

```
export default defineConfig({
  site: 'https://astrodoc.pages.dev',
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
            { label: 'Welcome', link: '/getting-started/welcome/' },
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
          autogenerate: { directory: 'sourcecode' },
        },
        {
          label: 'Project',
          autogenerate: { directory: 'project' },
        },
      ],
    }),
  ],
});
```



