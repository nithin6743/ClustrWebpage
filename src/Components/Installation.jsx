import styles from './Installation.module.css';
import CopyCard from './CopyCard';

function Installation() {
  return (
    <section id="installation" className={styles.installation}>
      <h2 className={styles.installTitle}>Installation</h2>
      <ul className={styles.Download}>
        <p>Download ZIP Download the latest Clustr ZIP</p>
        <li>➜ Extract the archive.</li>
        <li>
          ➜ Open <CopyCard command='chrome://extensions' />
        </li>
        <li>➜ Enable Developer Mode.</li>
        <li>➜ Click Load Unpacked.</li>
        <li>➜ Enable Developer Mode.</li>
        <li>➜ Select the extracted build folder.</li>
      </ul>

      <ul className={styles.Download}>
        <p>Build from Source</p>
        <li>
          ➜ Clone the repository.
          <CopyCard
            command='git clone
          https://github.com/nithin6743/Clustr.git'
          />
        </li>
        <li>
          ➜ Install dependencies.
          <CopyCard command='npm install' />
        </li>
        <li>
          ➜ Build the extension.
          <CopyCard command='npm run build' />
        </li>
        <li>
          ➜ Open <CopyCard command='chrome://extensions' />
        </li>
        <li>➜ Enable Developer Mode.</li>
        <li>➜ Click Load Unpacked.</li>
        <li>➜ Enable Developer Mode.</li>
        <li>➜ Select the generated build folder.</li>
      </ul>
    </section>
  );
}

export default Installation;
