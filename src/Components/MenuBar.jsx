import styles from './MenuBar.module.css';

export default function MenuBar() {
  return (
    <header className={styles.header}>
      {/* <img src="./favicons/NKsvg.svg" alt="Nithin"/> */}
      <nav className={styles.navBar}>
        <li>
          <a href='#'>
            <img src='./favicons/NKsvg.svg' alt='Nithin' />
          </a>
        </li>
        <li>
          <a href='#'>Featured</a>
        </li>
        <li>
          <a href='#'>Installation</a>
        </li>
        <li>
          <a href='#'>Download</a>
        </li>
      </nav>
    </header>
  );
}
