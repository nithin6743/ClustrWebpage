import { useEffect, useState } from 'react';
import styles from './MenuBar.module.css';

export default function MenuBar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          switch (entry.target.id) {
            case 'home':
              setActive('');
              break;

            case 'features':
              setActive('features');
              break;

            case 'installation':
              setActive('installation');
              break;

            case 'developer':
              setActive('');
              break;

            default:
              setActive('');
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      {/* <img src="./favicons/NKsvg.svg" alt="Nithin"/> */}
      <nav className={styles.navBar}>
        <a href='#home'>
          <img src='./favicons/NKsvg.svg' alt='Nithin' />
        </a>
        <a
          href='#features'
          className={`${styles.navLinks} ${styles.selectables} ${
            active === 'features' ? styles.active : ''
          }`}
        >
          Featured
        </a>
        <a
          href='#installation'
          className={`${styles.navLinks} ${styles.selectables} ${
            active === 'installation' ? styles.active : ''
          }`}
        >
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
