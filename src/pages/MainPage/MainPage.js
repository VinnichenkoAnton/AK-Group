import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import Introduction from './sections/Introduction/Introduction';
import ContactUs from '../../components/ContactUs/ContactUs';
import Tabs from '../../components/Tabs/Tabs';
import Partners from './sections/Partners/Partners';
import Footer from '../../layouts/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="AK GROUP INSURANCE BROKERS - БРОКЕРСЬКІ ПОСЛУГИ У СФЕРІ СТРАХУВАННЯ. АДМІНІСТРУВАННЯ ПРИ ВРЕГУЛЮВАННІ ЗБИТКІВ. ПРОФЕСІЙНИЙ КОНСАЛТИНГ"
        />
        <title>AK GROUP INSURANCE BROKERS</title>
      </Helmet>
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <Introduction />
      <Tabs />
      <Partners />
      <Footer />
    </>
  );
};

export default MainPage;
