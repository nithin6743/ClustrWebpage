import styles from './MenuBar.module.css';

export default function MenuBar() {
  return (
    <header className={styles.header}>
      {/* <img src="./favicons/NKsvg.svg" alt="Nithin"/> */}
      <nav className={styles.navBar}>
        <a href='#home'>
          <img src='./favicons/NKsvg.svg' alt='Nithin' />
        </a>
        <a href='#features' className={styles.navLinks}>
          Featured
        </a>
        <a href='#installation' className={styles.navLinks}>
          Installation
        </a>
        <a
          href='/downloads/Clustr-2.1.0.zip'
          download
          className={`${styles.navLinks} ${styles.download}`}
        >
          Download
        </a>
      </nav>
    </header>
  );
}
