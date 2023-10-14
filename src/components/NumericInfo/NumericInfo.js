import classNames from 'classnames';

import Container from '../UI/Container/Container';
import NumericItem from './NumericItem/NumericItem';
import Title from '../Title/Title';

import classes from './NumericInfo.module.scss';

import { numericInfoList } from '../../data/data';

const NumericInfo = () => {
  const numItems = numericInfoList.map(({ id, img, title, description, amount }) => {
    return (
      <NumericItem key={id} img={img} title={title} description={description} amount={amount} />
    );
  });

  return (
    <section className={classes.numericinfo}>
      <Container>
        <Title className={classes.numericinfo__header} text="Про нас в числах" />
        <ul className={classes.numericinfo__list}>{numItems.slice(0, 3)}</ul>
        <ul className={classNames(classes.numericinfo__list, classes.numericinfo__list_margin)}>
          {numItems.slice(3)}
        </ul>
      </Container>
    </section>
  );
};

export default NumericInfo;
