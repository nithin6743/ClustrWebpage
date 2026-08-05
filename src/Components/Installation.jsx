import styles from './Installation.module.css';

function Installation() {
  return (
    <section className={styles.installation}>
      <ul className={styles.githubDownload}>
        <p>Download ZIP Download the latest Clustr ZIP.</p>
        <li>Extract the archive.</li>
        <li>Open chrome://extensions.</li>
        <li>Enable Developer Mode.</li>
        <li>Click Load Unpacked.</li>
        <li>Enable Developer Mode.</li>
        <li>Select the extracted build folder.</li>
      </ul>

      <ul className={styles.srcDownload}>
        <p>Build from Source</p>
        <li>
          Clone the repository. git clone
          https://github.com/nithin6743/Clustr.git
        </li>
        <li>Install dependencies. npm install</li>
        <li>Build the extension (makes changes if you want). npm run build</li>
        <li>Open chrome://extensions.</li>
        <li>Enable Developer Mode.</li>
        <li>Click Load Unpacked.</li>
        <li>Enable Developer Mode.</li>
        <li>Select the generated build folder.</li>
      </ul>
    </section>
  );
}

export default Installation;
