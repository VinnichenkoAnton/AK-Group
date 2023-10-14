import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import AdvantagesItem from './AdvantagesItem/AdvantagesItem';

import classes from './Advantages.module.scss';

import advantages from '../../../../resources/advantages/advantages.png';
import { advantagesList } from '../../../../data/data';

const Advantages = () => {
  const itemsAlignedLeft = advantagesList.slice(0, 2).map((item) => {
    return (
      <AdvantagesItem
        key={item.id}
        subtitle={item.subtitle}
        description={item.description}
        Icn={item.icn}
        flexOrderChange={false}
      />
    );
  });
  const itemsAlignedRight = advantagesList.slice(2).map((item) => {
    return (
      <AdvantagesItem
        key={item.id}
        subtitle={item.subtitle}
        description={item.description}
        Icn={item.icn}
        flexOrderChange={true}
      />
    );
  });
  return (
    <section className={classes.advantages}>
      <div className={classes.advantages__img}>
        <img src={advantages} alt="Що ми робимо" />
      </div>
      <Container>
        <Title text="Що ми робимо" />
        <div className={classes.advantages__wrapper}>
          <ul className={classes.advantages__side_left}>{itemsAlignedLeft}</ul>
          <ul className={classes.advantages__side_right}>{itemsAlignedRight}</ul>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
