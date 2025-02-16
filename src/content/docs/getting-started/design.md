---
title: Update Design UI
description: How to update landing page starlight astro js project.
---

## How to update landing page starlight astro js project.


For update design landing page UI, and configure your navbar or footer , you can access on `src/data/`

### Navbar Link

For update navbar menu link and footer area, you can access on `src/data/config/config.json`

```
{
  "title": "Your website title...",
  "description": "Your website description here...",
  "image": "insert url cdn for Footer image menu here...",
  "nav1_title": Name or title for menu nav 1 here...",
  "nav1": [
    {
      "nav": "Name or title for menu nav1 list here...",
      "link": "URL Link for menu list 1 here..."
    },
    {
      "nav": "Name or title for menu nav list here...",
      "link": "URL Link for menu list here..."
    },
    {
      "nav": "Add your menu for nav list here..",
      "link": "URL Link for menu here..."
    }
  ],
// example implementation for menu nav 2
  "nav2_title": "Documentation",
  "nav2": [
    {
      "nav": "Content Doc",
      "link": "/"
    }
    {
      "nav": "Source Code",
      "link": "/"
    }
  ],
// example implementation for menu nav 3
  "nav3_title": "Project",
  "nav3": [
    {
      "nav": "Blacks",
      "link": "/src/assets/fg.svg"
    },
    {
      "nav": "Docus",
      "link": "/src/assets/fg.svg"
    }
  ]
}

```


implementation
```
{
  "title": "Docuna Astro Starlight Themes",
  "description": "Develope your modern website with astro js",
  "image": "/img/ft1.svg",
  "nav1_title": "Menu",
  "nav1": [
    {
      "nav": "Home",
      "link": "/"
    },
    {
      "nav": "About",
      "link": "/about"
    },
    {
      "nav": "Documentation",
      "link": "/start"
    },
    {
      "nav": "Contact",
      "link": "/contact"
    }
  ],
  "nav2_title": "Documentation",
  "nav2": [
    {
      "nav": "Get Started",
      "link": "/getting-started/"
    },
    {
      "nav": "Download",
      "link": "/"
    },
    {
      "nav": "Installation",
      "link": "/"
    },
    {
      "nav": "Structure",
      "link": "/"
    },
    {
      "nav": "Configuration",
      "link": "/"
    },
    {
      "nav": "Design UI",
      "link": "/"
    },
    {
      "nav": "Content Doc",
      "link": "/"
    },
    {
      "nav": "Static Page",
      "link": "/"
    },
    {
      "nav": "Host Deploy",
      "link": "/"
    },
    {
      "nav": "Headless CMS",
      "link": "/"
    },
    {
      "nav": "Source Code",
      "link": "/"
    }
  ],
  "nav3_title": "Project",
  "nav3": [
    {
      "nav": "Blacks",
      "link": "/src/assets/fg.svg"
    },
    {
      "nav": "Docus",
      "link": "/src/assets/fg.svg"
    },
    {
      "nav": "Car",
      "link": "/src/assets/fg.svg"
    },
    {
      "nav": "Docuna",
      "link": "/src/assets/fg.svg"
    }
  ],
  "nav4_title": "Contact",
  "nav4": [
    {
      "nav": "Whatsapp",
      "link": "https://wa.me/62895339403223"
    },
    {
      "nav": "Call Us",
      "link": "tel:+62895339403223"
    },
    {
      "nav": "Email",
      "link": "mailto:axcora@gmail.com"
    },
    {
      "nav": "Hire Dev",
      "link": "https://www.fiverr.com/creativitas"
    }
  ]
}

```

### Home Landing Page

For update home landing page design ,you can access on `src/data/home/home.json`

You can update the landing page design in this area, just edit it according to your needs with json code.
Adjust it to the part you want to edit.

For change icon you can see starlight component https://starlight.astro.build/guides/components/#icon

```
{
    "intro": {
        "title": "Title for intro area here...",
        "text": "Description for intro area here....",
        "image": "URL image or CDN intro area in here..."
    },
    "why": {
        "title": "Why area title here...",
        "image": "URL CDN why area image here..."
    },
    "why_list": [
        {
            "title": "Insert your title list1 here...",
            "text": "Text information about list1 here...",
            "icon": "Insert icon starlight here...",
            "link": "Link for this list area.."
        },
        {
            "title": "New list title here...",
            "text": "Nex text info here...",
            "icon": "INsert icon starlight here..",
            "link": "link for this list.."
        }
    ],
    "features": "Title for features area...",
    "feature_list": [
        {
            "title": "Features title 1 here...",
            "text": "Text information about title 1 here...",
            "icon": "icon starlight here...",
            "link": "Link url for this features list.."
        },
        {
            "title": "Markdown Content",
            "text": "It's faster to create documentation article by using markdown format.",
            "icon": "star",
            "link": "/getstart/markdown"
        }
    ],
    "pricing": {
        "title": "Title for pricing area here...",
        "cover": "insert url or cdn image for pricing area..",
        "text": "Text information about pricing area..."
    },
    "plan": [
        {
            "title": "Pricing plan 1 title here...",
            "icon": "icon from starlight here..",
            "price": "Input price for this pricing plan..",
            "link": "URL Link for order this plan...",
            "features": [
                {
                    "text": "Insert features text list here.."
                },
                {
                    "text": "Insert new features text list here.."
                }
            ]
        },
        {
            "title": "Pricing plan 2 title here...",
            "icon": "icon from starlight here..",
            "price": "Input price for this pricing plan..",
            "link": "URL Link for order this plan...",
            "features": [
                {
                    "text": "Insert features text list here.."
                },
                {
                    "text": "Insert new features text list here.."
                }
            ]
        },
    ],
    "section": {
        "title": "Title for section area...",
        "text": "Text information for section area...",
        "link": "Link url for section area here..."
    }
}
```

Implementation
```
{
    "intro": {
        "title": "Build your website documentation with docuna",
        "text": "Docuna is a special astro starlight theme for fast creation and SEO for your documentation site projects.",
        "image": "/img/pesawat.svg"
    },
    "why": {
        "title": "Why must docuna",
        "image": "/img/report.svg"
    },
    "why_list": [
        {
            "title": "Super Fast",
            "text": "Based on Starlight Astro JS. Significant speed, very complete for developing your documentation website.",
            "icon": "rocket",
            "link": "/"
        },
        {
            "title": "Easy Config",
            "text": "No need to hardcode, just work with markdown, mdx and JSON files to update content and design UI.",
            "icon": "setting",
            "link": "/"
        }
    ],
    "features": "The Best Features",
    "feature_list": [
        {
            "title": "JSON Conf",
            "text": "Ease of setting up your website by using JSON Conf.in the work.",
            "icon": "star",
            "link": "/"
        },
        {
            "title": "Markdown Content",
            "text": "It's faster to create documentation article by using markdown format.",
            "icon": "star",
            "link": "/"
        },
        {
            "title": "MDX Support",
            "text": "Full MDX support, making it easy to customize your project.",
            "icon": "star",
            "link": "/"
        }
    ],
    "pricing": {
        "title": "Picing and Plan",
        "cover": "/img/ssg.svg",
        "text": "If you need astro js or astro starlight documentation website theme template so you can choose our theme template project."
    },
    "plan": [
        {
            "title": "Blacks",
            "icon": "rocket",
            "price": "$65",
            "link": "https://creativitaz.gumroad.com/l/astrojs-blacks",
            "features": [
                {
                    "text": "Astro JS"
                },
                {
                    "text": "Multipurpose Themes"
                }
            ]
        },
        {
            "title": "Car",
            "icon": "star",
            "price": "$65",
            "link": "https://creativitaz.gumroad.com/l/astro-js-car",
            "features": [
                {
                    "text": "Astro JS"
                },
                {
                    "text": "Booking Website"
                },
                {
                    "text": "Astro SEO RSS Sitemap"
                }
            ]
        }
    ],
    "section": {
        "title": "Hire Our Team Dev",
        "text": "If you have astro js or documentation website project, so you can hire our team dev for help you develope your astro js website project.",
        "link": "https://www.fiverr.com/creativitas/design-modern-documentation-website-astro-js-stalight"
    }
}
```

You can see how to implement it in the code, examples in the source code.