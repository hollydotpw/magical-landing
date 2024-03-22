import Link from 'component/link';

import styles from './styles.scss';

export default function Logo(): JSX.Element {
  return (
    <Link href="/" className={styles.logo}>
      <img src="/img/logo.svg" height="30" alt="Logo" />
    </Link>
  );
}
