import styles from './Features.module.css';

function Features() {
  return (
    <section id='features' className={styles.features}>
      <h2 className={styles.featuresTitle}>Features</h2>
      <h3>
        Clustr transforms every new tab into a clean, organized dashboard where
        your bookmarks are grouped into boards, searchable instantly, and always
        just one click away.
      </h3>
      <h4>Note: Only works on chromium based browsers ⚠️ </h4>
      <div className={styles.featureCard}>
        <video src='features/Topbar.webm' autoPlay loop muted playsInline />
        <h3>Everything within reach</h3>
        <p>Instant search and quick actions, always one click away.</p>
      </div>
      <div className={styles.featureCard}>
        <video src='features/Boards.webm' autoPlay loop muted playsInline />
        <h3>Built for organization</h3>
        <p>Keep every project, resource, and website neatly organized.</p>
      </div>
      <div className={styles.featureCard}>
        <video src='features/links.webm' autoPlay loop muted playsInline />
        <h3>Fast access</h3>
        <p>Stop digging through folders. Open any bookmark instantly.</p>
      </div>
      <div className={styles.featureCard}>
        <video src='features/settings.webm' autoPlay loop muted playsInline />
        <h3>Designed around you</h3>
        <p>Customize Clustr to match the way you browse.</p>
      </div>
    </section>
  );
}

export default Features;
