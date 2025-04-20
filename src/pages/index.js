import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Proven strategies and community support for engineering managers.">
      <Hero />
      <main>
        <KeyBenefits />
        <ForWho />
        <Community />
        <FinalCTA />
      </main>
    </Layout>
  );
}

// Hero Section
function Hero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Level Up Your Leadership
        </Heading>
        <p className="hero__subtitle">
          Practical Guidance for Engineering Managers & Future Leaders.
          Access proven strategies, frameworks, and a supportive community to help you navigate the challenges of leading engineering teams.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Explore the Knowledge Base 📚
          </Link>
          <Link className="button button--outline button--lg" to="https://discord.gg/test" style={{ marginLeft: '1rem' }}>
            Join the Community 💬
          </Link>
        </div>
      </div>
    </header>
  );
}

// Key Benefits Section
function KeyBenefits() {
  const topics = [
    {
      title: 'Team Building',
      emoji: '👥',
      description: 'Foster trust, set clear goals, and create a culture where people thrive.',
      link: '/docs/team-building',
    },
    {
      title: 'Effective 1:1s',
      emoji: '💬',
      description: 'Build alignment, give feedback, and support your team’s development.',
      link: '/docs/effective-1-1s',
    },
    {
      title: 'Technical Strategy',
      emoji: '🧠',
      description: 'Drive architectural decisions and align engineering with business goals.',
      link: '/docs/technical-strategy',
    },
    {
      title: 'Performance Management',
      emoji: '📊',
      description: 'Set expectations, measure outcomes, and have growth-oriented reviews.',
      link: '/docs/performance-management',
    },
    {
      title: 'Career Growth & Mentorship',
      emoji: '🌱',
      description: 'Help engineers grow through coaching, sponsorship, and clear paths.',
      link: '/docs/career-growth',
    },
    {
      title: 'Cross-Functional Collaboration',
      emoji: '🤝',
      description: 'Work effectively with Product, Design, and other stakeholders.',
      link: '/docs/collaboration',
    },
    {
      title: 'Scaling Teams & Processes',
      emoji: '📈',
      description: 'Evolve org structure, onboard effectively, and reduce operational overhead.',
      link: '/docs/scaling-teams',
    },
    {
      title: 'Handling Conflict',
      emoji: '🔥',
      description: 'Resolve tensions constructively and build psychological safety.',
      link: '/docs/handling-conflict',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🔓 Unlock Your Potential as an Engineering Leader</h2>
        <div className={styles.cardGrid}>
          {topics.map(({ title, description, link, emoji }) => (
            <div key={title} className={styles.card}>
              <h3>
                <Link to={link} className="clean-link">
                  {emoji} {title}
                </Link>
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Engineering Managers & Aspiring Leaders
function ForWho() {
  return (
    <section className={styles.altSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🙌 For Engineering Managers & Aspiring Leaders</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>👩‍💼 Engineering Managers</h3>
            <p>Dig into frameworks, metrics, and leadership strategies to level up your org and your impact.</p>
          </div>
          <div className={styles.column}>
            <h3>🌱 Aspiring Engineering Managers</h3>
            <p>Prepare for the transition with guides on mindset, communication, and building trust from day one.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Community Section
function Community() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>💬 Join the Conversation</h2>
        <p style={{ textAlign: 'center' }}>Connect with other engineering leaders, ask questions, and share your journey.</p>
        <div className={styles.buttons} style={{ justifyContent: 'center' }}>
          <Link className="button button--secondary button--lg" to="https://discord.gg/test">
            Join Discord
          </Link>
          <Link className="button button--outline button--lg" to="https://slack.com/test" style={{ marginLeft: '1rem' }}>
            Join Slack
          </Link>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className={clsx(styles.altSection, styles.ctaSection)}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className={styles.sectionTitle}>Ready to Lead with Confidence?</h2>
        <p>Start learning now or join the community to grow with others.</p>
        <div className={styles.buttons} style={{ justifyContent: 'center' }}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore the Knowledge Base
          </Link>
          <Link className="button button--outline button--lg" to="https://discord.gg/test" style={{ marginLeft: '1rem' }}>
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
