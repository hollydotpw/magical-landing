import { h, ComponentChildren } from 'preact';
import sel from 'pekoo/sel';

type LinkProps = {
  readonly href: string | string[];
  readonly children?: ComponentChildren;
  readonly className?: string;
  readonly activeClassName?: string;
};

export default function Link(props: LinkProps): JSX.Element {
  const { className, activeClassName, href, children } = props;

  const pathaname = __PRESET__ === 'browser' ? window.location.pathname : '';

  // TODO: edit this;
  return (
    <a
      href={Array.isArray(href) ? href[0] : href}
      className={sel(
        className,
        pathaname === href && activeClassName,
        Array.isArray(href) && href.includes(pathaname) && activeClassName,
      )}
    >
      {children}
    </a>
  );
}
