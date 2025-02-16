---
title: Static Page
description: How to create static page documentation starlight docuna.
---

## How to create static page documentation starlight docuna.

### Folder Location

For create a new static page you can access on `src/content/docs`

### Create New Page
And create your new static page with mdx format, for example `about.mdx`  for create your about page.

### Frontmatter
Next you can insert this frontmatter in to your about.mdx or your new static page.
You just need to edit and update title, description,image cover, then write your content article.

`title: "Insert title here...."`
`description: "Insert description here...."`
`image: "Insert URL image cover here..."`


```
---
title: "Insert title here...."
description: "Insert description here...."
image: "Insert URL image cover here..."
template: splash
---
import { Card, CardGrid } from '@astrojs/starlight/components';
import { Picture } from 'astro:assets';
import Conf from '../../data/config/config.json';
import Footer from '../../widget/Footer.astro';
import Header from '../../widget/Header.astro';
import '../../styles/doc.css';
import '../../styles/deja.css';

<div class="container-fluid">
<div class="row">
<div class="col-md-10 mx-auto p-3">
  <Picture
    src={frontmatter.image}
    alt={Conf.description}
    formats={['avif', 'webp']}
    sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`}
    width="1200"
    height="400"
    class="img-fluid"
    decoding="async"
  />
<h2><strong><a href="/about">{frontmatter.description}</a></strong></h2>



Write your article in here.....




</div>
</div>
</div>
<Footer/>
```

### Example

Implementation static page
```
---
title: "About Docuna"
description: "A modern documentation website themes template base on Astro JS"
image: "/img/ssg.svg"
template: splash
---
import { Card, CardGrid } from '@astrojs/starlight/components';
import { Picture } from 'astro:assets';
import Conf from '../../data/config/config.json';
import Footer from '../../widget/Footer.astro';
import Header from '../../widget/Header.astro';
import '../../styles/doc.css';
import '../../styles/deja.css';

<div class="container-fluid">
<div class="row">
<div class="col-md-10 mx-auto p-3">
  <Picture
    src={frontmatter.image}
    alt={Conf.description}
    formats={['avif', 'webp']}
    sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`}
    width="1200"
    height="400"
    class="img-fluid"
    decoding="async"
  />
<h2><strong><a href="/about">{frontmatter.description}</a></strong></h2>

Docuna is a simple and modern themes template for starlight [astro js](https://astro.build/) project.

Very easy to use for develope your documentation site project.

Based on [starlight](https://starlight.astro.build/) and with a landing page concept on the main display, provides complete information for users, with static pages make it easier for you to provide other information such as about pages, contacts and so on.

</div>
</div>
</div>
<Footer/>
```
