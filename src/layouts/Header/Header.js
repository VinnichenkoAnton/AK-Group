import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import Hamburger from './Hamburger/Hamburger';
import ContactLink from '../../components/ContactLink/ContactLink';
import Navigation from '../Navigation/Navigation';

import classes from './Header.module.scss';

import logo from '../../resources/header/logo.png';
import { headerLinksList } from '../../data/data';

const Header = () => {
  const [navigationIsVisible, setNavigatioinIsVisible] = useState(null);
  const clickHandler = () => {
    setNavigatioinIsVisible((prevState) => !prevState);
  };
  return (
    <header className={classes.header}>
      <Container>
        <Hamburger isActive={navigationIsVisible} onClick={clickHandler} />
        <div className={classes.header__wrapper}>
          <NavLink to="/" className={classes.header__logo}>
            <div className={classes.header__icn}>
              <img src={logo} alt="Логотип" />
            </div>
          </NavLink>
          <div className={classes.header__contacts}>
            {headerLinksList.map(({ id, href, Icn, text }) => {
              return <ContactLink key={id} href={href} Icn={Icn} text={text} />;
            })}
          </div>
        </div>
        <Navigation isActive={navigationIsVisible} />
      </Container>
    </header>
  );
};

export default Header;
