import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';

import classes from './SingleProduct.module.scss';

const SingleProduct = ({ img, title, description }) => {
  return (
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <div className={classes.product__img}>
            <img src={img} alt={title} />
          </div>
          <div className={classes.product__wrapper}>
            <Title text={title} className={classes.product__title} />
            <div className={classes.product__description}>
              Детальна інформація: <span>{description}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
