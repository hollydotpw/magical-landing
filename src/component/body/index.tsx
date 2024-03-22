import { ComponentChildren } from 'preact';

import Header from 'component/header';

import styles from './styles.scss';

type BodyProps = {
  readonly children: ComponentChildren;
};

export default function Body({ children }: BodyProps): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
