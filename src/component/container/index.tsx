import { ComponentChildren } from 'preact';

import sel from 'pekoo/sel';
import styles from './styles.scss';

type ContainerProps = {
  readonly v: string;
  readonly className?: string;
  readonly children: ComponentChildren;
};

export default function Container({
  className,
  v,
  children,
}: ContainerProps): JSX.Element {
  return (
    <div className={sel(styles.container, styles[v], className)}>
      {children}
    </div>
  );
}
