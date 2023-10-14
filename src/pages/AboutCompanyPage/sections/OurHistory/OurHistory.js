import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import InfoCard from '../../../../components/InfoCard/InfoCard';

import classes from './OurHistory.module.scss';

import firstHistoryImg from '../../../../resources/ourHistory/ourHistory.jpg';

const OurHistory = () => {
  return (
    <section className={classes.history}>
      <Container>
        <Title text="Коротко про нас" />
        <InfoCard
          title="AK group insurance brokers"
          description="Ми надаємо послуги різним Клієнтам: фізичним особам, малому та середньому бізнесу, великим компаніям.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img={firstHistoryImg}
        />
      </Container>
    </section>
  );
};

export default OurHistory;
