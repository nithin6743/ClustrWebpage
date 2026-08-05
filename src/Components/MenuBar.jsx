import styles from './MenuBar.module.css';

export default function MenuBar() {
  return (
    <header className={styles.header}>
      {/* <img src="./favicons/NKsvg.svg" alt="Nithin"/> */}
      <nav className={styles.navBar}>
        <a href='#'>
          <img src='./favicons/NKsvg.svg' alt='Nithin' />
        </a>
        <a href='#' className={styles.navLinks}>
          Featured
        </a>
        <a href='#' className={styles.navLinks}>
          Installation
        </a>
        <a href='#' className={`${styles.navLinks} ${styles.download}`}>
          Download
        </a>
      </nav>
    </header>
  );
}
