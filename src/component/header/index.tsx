import { useState, useCallback } from 'preact/hooks';

import MenuIcon from 'component/svg/menu-icon';
import CloseIcon from 'component/svg/close-icon';

import sel from 'pekoo/sel';

import Container from 'component/container';
import Logo from 'component/logo';
import Nav from 'component/nav';

import style from './style.scss';

function Header(): JSX.Element {
  const [tabOpen, setTabOpen] = useState(false);
  const toggleTabs = useCallback(() => setTabOpen((_) => !_), []);

  return (
    <>
      {tabOpen && (
        <div
          className={sel(style.tabs, style.tabs_mobile)}
          onClick={toggleTabs}
          role="button"
          aria-hidden="true"
        >
          <Nav />
        </div>
      )}
      <header className={style.header}>
        <Container v="header">
          <Logo />
          <div
            className={style.tabs_btn}
            onClick={toggleTabs}
            role="button"
            aria-hidden="true"
          >
            {tabOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

          <div className={style.tabs}>
            <Nav />
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
