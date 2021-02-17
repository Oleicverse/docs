export default {
  "title": "Oleic Documentation",
  "tagline": "Your go-to guides for understanding Oleic a little better",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "src/oleic-fav.ico",
  "organizationName": "Oleic",
  "projectName": "oleicverse",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Oleic logo",
        "src": "https://oleic-media.s3.amazonaws.com/oleic+docs.png"
      },
      "items": [],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "Copyright © 2021 Oleic Technologies",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/curie/Oleic/Oleic Phase 2/docs/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/curie/Oleic/Oleic Phase 2/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};