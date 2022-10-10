import { NavLink } from 'react-router-dom';

import Container from '../UI/container/Container';
import SingleContact from '../singleContact/SingleContact';
import Navigation from '../navigation/Navigation';

import logo from '../../resources/header/logo.png';
import email from '../../resources/header/email.svg';
import phone from '../../resources/header/phone.svg';
import pointer from '../../resources/header/pointer.svg';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapper}>
          <NavLink className={classes.header__logo} to="/">
            <img src={logo} alt="Логотип" />
          </NavLink>
          {/* <a href="#" className={classes.header__logo}>
            <img src={logo} alt="Логотип" />
          </a> */}
          <div className={classes.header__contacts}>
            <SingleContact
              href="mailto:mail@gmail.com"
              img={email}
              alt="Пошта"
              text="mail@gmail.com"
            />
            <SingleContact
              href="tel:+80735707777"
              img={phone}
              alt="Телефон"
              text="(073)570 77 77"
            />
            <SingleContact
              href="https://goo.gl/maps/CbXq5kECDMpY6wof7"
              img={pointer}
              alt="Адреса"
              text="вул.Київська, 138, Гатне, Україна"
            />
          </div>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
