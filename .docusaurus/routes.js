
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','eb6'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d6f'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','c2b'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','5a2'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','7e9'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','1d3'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','856'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','95c'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','ad3'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','807'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','87d'),
  exact: true,
},
{
  path: '/docs/',
  component: ComponentCreator('/docs/','86e'),
  exact: true,
},
{
  path: '/docs/appearance',
  component: ComponentCreator('/docs/appearance','12a'),
  exact: true,
},
{
  path: '/docs/bug-reports-and-feature-request',
  component: ComponentCreator('/docs/bug-reports-and-feature-request','d16'),
  exact: true,
},
{
  path: '/docs/change-log',
  component: ComponentCreator('/docs/change-log','b97'),
  exact: true,
},
{
  path: '/docs/community-code-of-conduct',
  component: ComponentCreator('/docs/community-code-of-conduct','4cc'),
  exact: true,
},
{
  path: '/docs/contact-support',
  component: ComponentCreator('/docs/contact-support','067'),
  exact: true,
},
{
  path: '/docs/cover-photo',
  component: ComponentCreator('/docs/cover-photo','bb6'),
  exact: true,
},
{
  path: '/docs/create-personal-blog',
  component: ComponentCreator('/docs/create-personal-blog','940'),
  exact: true,
},
{
  path: '/docs/create-team-blog',
  component: ComponentCreator('/docs/create-team-blog','19e'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/drafts',
  component: ComponentCreator('/docs/drafts','55e'),
  exact: true,
},
{
  path: '/docs/edit-article',
  component: ComponentCreator('/docs/edit-article','1bb'),
  exact: true,
},
{
  path: '/docs/edit-drafts',
  component: ComponentCreator('/docs/edit-drafts','387'),
  exact: true,
},
{
  path: '/docs/edit-slug',
  component: ComponentCreator('/docs/edit-slug','efd'),
  exact: true,
},
{
  path: '/docs/edit-url-type',
  component: ComponentCreator('/docs/edit-url-type','838'),
  exact: true,
},
{
  path: '/docs/embeds',
  component: ComponentCreator('/docs/embeds','be7'),
  exact: true,
},
{
  path: '/docs/export-articles',
  component: ComponentCreator('/docs/export-articles','431'),
  exact: true,
},
{
  path: '/docs/faqs',
  component: ComponentCreator('/docs/faqs','410'),
  exact: true,
},
{
  path: '/docs/general-settings',
  component: ComponentCreator('/docs/general-settings','461'),
  exact: true,
},
{
  path: '/docs/github-backup',
  component: ComponentCreator('/docs/github-backup','df0'),
  exact: true,
},
{
  path: '/docs/hashnode-glossary',
  component: ComponentCreator('/docs/hashnode-glossary','b0c'),
  exact: true,
},
{
  path: '/docs/import-articles',
  component: ComponentCreator('/docs/import-articles','c86'),
  exact: true,
},
{
  path: '/docs/integrations',
  component: ComponentCreator('/docs/integrations','690'),
  exact: true,
},
{
  path: '/docs/mapping-cloudflare',
  component: ComponentCreator('/docs/mapping-cloudflare','bca'),
  exact: true,
},
{
  path: '/docs/mapping-domain',
  component: ComponentCreator('/docs/mapping-domain','3c5'),
  exact: true,
},
{
  path: '/docs/mapping-domain-faqs',
  component: ComponentCreator('/docs/mapping-domain-faqs','870'),
  exact: true,
},
{
  path: '/docs/mapping-godaddy',
  component: ComponentCreator('/docs/mapping-godaddy','eac'),
  exact: true,
},
{
  path: '/docs/mapping-namecheap',
  component: ComponentCreator('/docs/mapping-namecheap','acf'),
  exact: true,
},
{
  path: '/docs/markdown-guidelines',
  component: ComponentCreator('/docs/markdown-guidelines','751'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/newsletter',
  component: ComponentCreator('/docs/newsletter','45a'),
  exact: true,
},
{
  path: '/docs/oleic-style-guide',
  component: ComponentCreator('/docs/oleic-style-guide','ee8'),
  exact: true,
},
{
  path: '/docs/python-style-guide',
  component: ComponentCreator('/docs/python-style-guide','872'),
  exact: true,
},
{
  path: '/docs/report-copyright-infringement',
  component: ComponentCreator('/docs/report-copyright-infringement','aad'),
  exact: true,
},
{
  path: '/docs/report-posts-and-users',
  component: ComponentCreator('/docs/report-posts-and-users','74d'),
  exact: true,
},
{
  path: '/docs/seo',
  component: ComponentCreator('/docs/seo','d9e'),
  exact: true,
},
{
  path: '/docs/static-pages',
  component: ComponentCreator('/docs/static-pages','be1'),
  exact: true,
},
{
  path: '/docs/tags',
  component: ComponentCreator('/docs/tags','737'),
  exact: true,
},
{
  path: '/docs/teams-blog-settings',
  component: ComponentCreator('/docs/teams-blog-settings','f04'),
  exact: true,
},
{
  path: '/docs/widgets',
  component: ComponentCreator('/docs/widgets','2a5'),
  exact: true,
},
{
  path: '/docs/write-an-article',
  component: ComponentCreator('/docs/write-an-article','1b8'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
