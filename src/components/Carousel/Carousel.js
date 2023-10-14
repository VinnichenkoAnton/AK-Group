import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import classes from './Carousel.module.scss';

import { carouselImagesList } from '../../data/data';

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
  };
  const numItems = carouselImagesList.map(({ id, img, alt }) => {
    return (
      <div key={id}>
        <div className={classes.carousel__wrapper}>
          <img className={classes.carousel__img} src={img} alt={alt} />
        </div>
      </div>
    );
  });
  return <Slider {...settings}>{numItems}</Slider>;
};

export default Carousel;
