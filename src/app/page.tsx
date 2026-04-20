import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <p className={styles.brand}>GDV ALLIANCE</p>
        <nav className={styles.nav}>
          <a href="#about">
            About
          </a>
          <a href="#focus">
            Focus Areas
          </a>
          <a href="#partners">
            Partners
          </a>
          <a href="#connect">
            Connect
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Global Growth Platform</p>
          <h1>
            Global Digital Value &amp; Future, powered by the Resource &amp;
            Investment Corporate Alliance.
          </h1>
          <p className={styles.heroText}>
            GDV Alliance brings investors, institutions, innovators, and
            industry leaders together to unlock sustainable digital and
            economic transformation across emerging markets.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="#connect">
              Request Partnership Brief
            </a>
            <a className={styles.secondary} href="#about">
              Explore the Vision
            </a>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <h2>What GDV Alliance Means</h2>
          <div className={styles.gridTwo}>
            <article className={styles.card}>
              <h3>GDVAF</h3>
              <p>Global Digital Value &amp; Future</p>
              <span>
                Building resilient digital ecosystems that create long-term
                value for governments, businesses, and communities.
              </span>
            </article>
            <article className={styles.card}>
              <h3>RICA</h3>
              <p>Resource &amp; Investment Corporate Alliance</p>
              <span>
                Aligning capital, strategic resources, and cross-sector
                partnerships to accelerate continental prosperity.
              </span>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <span id="focus" className={styles.anchor} aria-hidden="true" />
          <h2>Strategic Focus Areas</h2>
          <div className={styles.gridThree}>
            <article className={styles.pillar}>
              <h3>Digital Infrastructure</h3>
              <p>
                Enabling smart connectivity, cloud adoption, and secure digital
                public systems.
              </p>
            </article>
            <article className={styles.pillar}>
              <h3>Investment Mobilization</h3>
              <p>
                Structuring high-impact vehicles that attract private, public,
                and blended capital.
              </p>
            </article>
            <article className={styles.pillar}>
              <h3>Enterprise Scale</h3>
              <p>
                Supporting ventures and corporates to expand regionally and
                globally.
              </p>
            </article>
            <article className={styles.pillar}>
              <h3>Resource Optimization</h3>
              <p>
                Improving value chains in energy, agriculture, logistics, and
                industrial sectors.
              </p>
            </article>
            <article className={styles.pillar}>
              <h3>Policy Collaboration</h3>
              <p>
                Partnering with institutions to design frameworks that unlock
                responsible innovation.
              </p>
            </article>
            <article className={styles.pillar}>
              <h3>Future Workforce</h3>
              <p>
                Advancing youth skills, executive capability, and talent
                mobility for the digital era.
              </p>
            </article>
          </div>
        </section>

        <section id="partners" className={styles.section}>
          <h2>Who We Work With</h2>
          <ul className={styles.partnerList}>
            <li>Sovereign and development institutions</li>
            <li>Private equity, venture, and infrastructure funds</li>
            <li>Technology providers and strategic corporates</li>
            <li>Regional chambers and trade ecosystems</li>
          </ul>
        </section>

        <section id="connect" className={styles.section}>
          <div className={styles.ctaBlock}>
            <h2>Shape the Next Value Frontier</h2>
            <p>
              Connect with GDV Alliance to co-create investments, partnerships,
              and digital transformation programs with measurable impact.
            </p>
            <a className={styles.primary} href="mailto:partnerships@gdvalliance.com">
              partnerships@gdvalliance.com
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} GDV Alliance. All rights reserved.</p>
      </footer>
    </div>
  );
}
