import cannonical from 'constant/cannonical';

import styles from './styles.scss';

export default function Home(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span className={styles.background}>the blockchain</span>
          <span className={styles.background}>is the solution</span>
        </h1>
        <div className={styles.btn}>
          <a href={cannonical.repository} target="_blank" rel="noreferrer">
            Repository
            <div className={styles.button_shine}>
              <div className={styles.shine} />
            </div>
          </a>
          <a href={cannonical.email} target="_blank" rel="noreferrer">
            Contact us
          </a>
        </div>
        <h2 className={styles.description}>
          Magical makes decentralized free open source software.
        </h2>
      </div>
    </section>
  );
}
