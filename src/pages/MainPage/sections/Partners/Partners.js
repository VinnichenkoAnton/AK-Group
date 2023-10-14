import Title from '../../../../components/Title/Title';
import Carousel from '../../../../components/Carousel/Carousel';

import classes from './Partners.module.scss';

const Partners = () => {
  return (
    <section className={classes.partners}>
      <Title className={classes.partners__header} text="Наші партнери" />
      <Carousel />
    </section>
  );
};

export default Partners;
