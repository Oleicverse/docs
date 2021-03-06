module.exports = {
  title: 'Oleic Documentation',
  url: 'https://docs.oleic.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'oleicverse', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Oleic logo',
        src: 'img/logo2.svg',

        srcDark:
        "img/logo1.svg",
      },
      items: [

      ],
    },
    footer: {
      style: 'light',
      links: [

      ],
      copyright: `© ${new Date().getFullYear()} Oleic | Dare Mighty Things`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Oleicverse/docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
