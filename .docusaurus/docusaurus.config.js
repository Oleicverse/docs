export default {
  "title": "Oleic Documentation",
  "url": "oleicverse.github.io",
  "baseUrl": "/docs/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "src/oleic-fav.ico",
  "organizationName": "oleicverse",
  "projectName": "docs",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Oleic logo",
        "src": "src/oleic-docs.png"
      },
      "items": [],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "© 2021 Oleic | Dare Mighty Things",
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
          "editUrl": "https://github.com/oleicverse/docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/oleicverse/blog/"
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