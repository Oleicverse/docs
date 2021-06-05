import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Getting Started',
    description: (
      <>
        <li><a href = "docs/">Using Hashnode</a></li>
        <li><a href = "docs/hashnode-glossary">Hashnode Glossary</a></li>
        <li><a href = "docs/create-personal-blog">Create Personal Blog</a></li>
        <li><a href = "docs/bug-reports-and-feature-request">Bug Reports and Feature Requests</a></li>

      </>
    ),
  }, 
  {
    title: 'Phase 1',
    description: (
      <>
       <li><a href = "docs/mapping-domain">Introduction</a></li>
        <li><a href = "docs/mapping-godaddy">Mapping From GoDaddy</a></li>
        <li><a href = "docs/mapping-cloudflare">Mapping From Cloudflare</a></li>
        <li><a href = "docs/mapping-namecheap">Mapping From Namecheap</a></li>
      </>
    ), 
  },
  {
    title: 'Phase 2',
    description: (
      <>
    
        <li><a href = "docs/write-an-article">Write and Article</a></li>
        <li><a href = "docs/markdown-guidelines">Markdown Guidelines</a></li>
        <li><a href = "docs/edit-article">Edit Published Article </a></li>
        <li><a href = "docs/edit-drafts">Edit Drafts </a></li>
      </>
    ), 
  },
  {
    title: 'Guidelines',
    description: (
      <>
        <li><a href = "docs/guidelines/oleic-style-guide">Oleic Style Guidelines</a></li>
        <li><a href = "docs/guidelines/python-style-guide">Python Style Guide</a></li>
        <li><a href = "docs/guidelines/general-settings">HTML/CSS Style Guide</a></li>
        <li><a href = "docs/guidelines/github-backup">JavaScript Style Guide</a></li> 
        <li><a href = "docs/guidelines/github-backup">TypeScript Style Guide</a></li> 
        <li><a href = "docs/guidelines/github-backup">AngularJS Style Guide</a></li> 
      </>
    ),
  },
  {
    title: 'Safety & Policies',
    description: (
      <>
       <li><a href = "docs/terms-of-service">Arcade Terms of Usage</a></li>
       <li><a href = "docs/arcade-privacy-policy">Arcade Privacy Policy</a></li>
     </>
    ), 
  },
  {
    title: 'Frequently Asked Questions',
  description: (
      <>
    
        <li><a href = "docs/faqs#how-can-i-save-a-draft-on-hashnode">How can I save a draft on Hashnode?</a></li>
        <li><a href = "docs/faqs#whats-an-impressum">What's an Impressum?</a></li>
        <li><a href = "docs/faqs#which-embeds-are-supported-by-hashnode">Which embeds are supported by Hashnode?</a></li>
        <li><a href = "docs/faqs#how-can-i-set-a-canonical-url">How can I set a canonical URL?</a></li>
      
      </>
    ), 
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p style={{listStyleType:'none'}}>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img className="homepage-img" src="https://ghicons.github.com/assets/images/blue/png/Skywalker.png"/> 
          <h1  className="hero__title">How can we help?</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="main-container">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
