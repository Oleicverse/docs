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
        <li><Link to="docs/">Using Hashnode</Link></li>
        <li><Link to="docs/hashnode-glossary">Hashnode Glossary</Link></li>
        <li><Link to="docs/create-personal-blog">Create Personal Blog</Link></li>
        <li><Link to="docs/bug-reports-and-feature-request">Bug Reports and Feature Requests</Link></li>

      </>
    ),
  }, 
  {
    title: 'Phase 1',
    description: (
      <>
       <li><Link to="docs/mapping-domain">Introduction</Link></li>
        <li><Link to="docs/mapping-godaddy">Mapping From GoDaddy</Link></li>
        <li><Link to="docs/mapping-cloudflare">Mapping From Cloudflare</Link></li>
        <li><Link to="docs/mapping-namecheap">Mapping From Namecheap</Link></li>
      </>
    ), 
  },
  {
    title: 'Phase 2',
    description: (
      <>
    
        <li><Link to="docs/write-an-article">Write and Article</Link></li>
        <li><Link to="docs/markdown-guidelines">Markdown Guidelines</Link></li>
        <li><Link to="docs/edit-article">Edit Published Article </Link></li>
        <li><Link to="docs/edit-drafts">Edit Drafts </Link></li>
      </>
    ), 
  },
  {
    title: 'Guidelines',
    description: (
      <>
        <li><Link href = "docs/guidelines/oleic-style-guide">Oleic Style Guidelines</Link></li>
        <li><Link href = "docs/guidelines/python-style-guide">Python Style Guide</Link></li>
        <li><Link href = "docs/guidelines/general-settings">HTML/CSS Style Guide</Link></li>
        <li><Link href = "docs/guidelines/github-backup">JavaScript Style Guide</Link></li>
        <li><Link href = "docs/guidelines/github-backup">TypeScript Style Guide</Link></li>
        <li><Link href = "docs/guidelines/github-backup">AngularJS Style Guide</Link></li>
      </>
    ),
  },
  {
    title: 'Safety & Policies',
    description: (
      <>
       <li><Link to="docs/terms-of-service">Arcade Terms of Usage</Link></li>
       <li><Link to="docs/arcade-privacy-policy">Arcade Privacy Policy</Link></li>
     </>
    ), 
  },
  {
    title: 'Frequently Asked Questions',
  description: (
      <>

        <li><Link to="docs/faqs/phonepe-switch">FAQs for PhonePe Switch</Link></li>
      
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
  console.log(styles)
  return (
    <Layout
      >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.homepageImg}
            src="https://ghicons.github.com/assets/images/blue/png/Skywalker.png"/>
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
