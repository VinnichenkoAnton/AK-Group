import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import NumericInfo from '../../components/NumericInfo/NumericInfo';
import OurHistory from './sections/OurHistory/OurHistory';
import Reviews from './sections/Reviews/Reviews';
import Footer from '../../layouts/Footer/Footer';

const AboutCompanyPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Сторінка Про Компанію сайту AK GROUP INSURANCE BROKERS. AK GROUP INSURANCE BROKERS - БРОКЕРСЬКІ ПОСЛУГИ У СФЕРІ СТРАХУВАННЯ. АДМІНІСТРУВАННЯ ПРИ ВРЕГУЛЮВАННІ ЗБИТКІВ. ПРОФЕСІЙНИЙ КОНСАЛТИНГ"
        />
        <title>AK GROUP INSURANCE BROKERS</title>
      </Helmet>
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <OurHistory />
      <NumericInfo />
      <Reviews />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
