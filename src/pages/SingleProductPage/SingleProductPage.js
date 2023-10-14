import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import GoBack from '../../components/GoBack/GoBack';
import SingleProduct from './sections/SingleProduct/SingleProduct';
import Portal from '../../components/Portal/Portal';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../layouts/Footer/Footer';

import { firstTabList } from '../../data/data';

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jointTabLists = [...firstTabList];
    const filteredList = jointTabLists.filter((item) => item.id === id);
    setSingleProduct(filteredList[0]);
  }, [id]);

  return (
    <>
      <Header screen="second" title="Our Coffee" />
      <GoBack />

      {singleProduct ? (
        <>
          <Helmet>
            <meta
              name="description"
              content={`На цій сторінці ви можете більше дізнатися про нашу послугу ${singleProduct.title}`}
            />
            <title>{`AK GROUP INSURANCE BROKERS - ${singleProduct.title}`}</title>
          </Helmet>{' '}
          <SingleProduct
            key={singleProduct.id}
            img={singleProduct.img}
            title={singleProduct.title}
            description={singleProduct.description}
          />
        </>
      ) : null}

      <Portal children={<ContactUs />} portalId="userform" />
      <Footer />
    </>
  );
};

export default SingleProductPage;
