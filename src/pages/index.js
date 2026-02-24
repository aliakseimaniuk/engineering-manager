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
      description="Inspiration, strategy, and community for engineering managers.">
      <Hero />
      <main>
        <KeyBenefits />
        <ForWho />
        <CommunityCTA />
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
          Level Up Your Engineering Leadership
        </Heading>
        <p className="hero__subtitle">
        Practical Guidance for Engineering Managers & Future Leaders. Access proven strategies, frameworks, and a supportive community to help you navigate the challenges of leading engineering teams.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/Introduction">
            Explore the Knowledge Base
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
      description: 'Foster trust, set goals, and build high-performing teams.',
    },
    {
      title: 'Effective 1:1s',
      emoji: '💬',
      description: 'Have meaningful conversations and support career growth.',
    },
    {
      title: 'Technical Strategy',
      emoji: '🧠',
      description: 'Drive decisions that align engineering with business outcomes.',
    },
    {
      title: 'Performance Management',
      emoji: '📊',
      description: 'Give feedback, evaluate outcomes, and support improvement.',
    },
    {
      title: 'Mentorship & Growth',
      emoji: '🌱',
      description: 'Coach engineers and design clear growth paths.',
    },
    {
      title: 'Cross-Functional Collaboration',
      emoji: '🤝',
      description: 'Work smoothly with Product, Design, and stakeholders.',
    },
    {
      title: 'Scaling Teams',
      emoji: '📈',
      description: 'Grow your org without losing alignment and culture.',
    },
    {
      title: 'Handling Conflict',
      emoji: '🔥',
      description: 'Create psychological safety and resolve tensions productively.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🔓 Unlock Your Potential as an Engineering Leader</h2>
        <div className={styles.cardGrid}>
          {topics.map(({ title, description, emoji }) => (
            <div key={title} className={styles.card}>
              <h3>{emoji} {title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Target Audience Section
function ForWho() {
  return (
    <section className={styles.altSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>🙌 Who This is For</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>👩‍💼 Engineering Managers</h3>
            <p>Gain tools and insights to lead effectively, grow your team, and drive outcomes.</p>
          </div>
          <div className={styles.column}>
            <h3>🌱 Aspiring Managers</h3>
            <p>Start your leadership journey with the right mindset, habits, and frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Community & Final CTA
function CommunityCTA() {
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className={styles.sectionTitle}>Ready to Grow with a Community of Leaders?</h2>
        <p>Learn from others, ask questions, and share your story in our active Discord group.</p>
        <div className={styles.buttons} style={{ justifyContent: 'center' }}>
          <Link className="button button--primary button--lg" to="/docs/Introduction">
            Start Learning
          </Link>
        </div>
      </div>
    </section>
  );
}
