import { useNavigate } from 'react-router-dom';

import Container from '../../../../components/UI/Container/Container';
import Heading1 from '../../../../components/Heading1/Heading1';
import Button from '../../../../components/UI/Button/Button';

import classes from './Introduction.module.scss';

import introduction from '../../../../resources/introduction/introduction.png';

const Advantages = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    const path = '/services';
    navigate(path);
  };

  const handleClickSec = () => {
    const path = '/contacts';
    navigate(path);
  };

  return (
    <section className={classes.introduction}>
      <Container>
        <div className={classes.introduction__wrapper}>
          <Heading1 text="БРОКЕРСЬКІ ПОСЛУГИ У СФЕРІ СТРАХУВАННЯ. АДМІНІСТРУВАННЯ ПРИ ВРЕГУЛЮВАННІ ЗБИТКІВ. ПРОФЕСІЙНИЙ КОНСАЛТИНГ" />
          <div className={classes.introduction__block}>
            <h2 className={classes.introduction__name}>Вітаю! Мене звати Олександр.</h2>
            <h3 className={classes.introduction__text}>
              Я та наша команда надаємо брокерські та консалтингові послуги у сфері професійного
              страхування. Наша мета – довести, що страхування в Україні може бути чесним, надійним
              та якісним. <br></br>Приєднуйтесь! Зробимо це разом!
            </h3>
            <div className={classes.introduction__buttons}>
              <Button
                type="button"
                buttonActivity="inactive"
                onClick={handleClick}
                className={classes.introduction__button}
              >
                Послуги
              </Button>
              <Button
                type="button"
                className={classes.introduction__button}
                onClick={handleClickSec}
              >
                Контакти
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.introduction__img}>
          <img src={introduction} alt="Виконавчий директор" />
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
