import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import Tabs from '../../components/Tabs/Tabs';
import Advantages from '../MainPage/sections/Advantages/Advantages';
import HowToInstall from './sections/HowToInstall/HowToInstall';
import Footer from '../../layouts/Footer/Footer';

const AboutCompanyPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Cторінка Наші Послуги сайту AK GROUP INSURANCE BROKERS. AK GROUP INSURANCE BROKERS - БРОКЕРСЬКІ ПОСЛУГИ У СФЕРІ СТРАХУВАННЯ. АДМІНІСТРУВАННЯ ПРИ ВРЕГУЛЮВАННІ ЗБИТКІВ. ПРОФЕСІЙНИЙ КОНСАЛТИНГ"
        />
        <title>AK GROUP INSURANCE BROKERS</title>
      </Helmet>
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <Tabs />
      <Advantages />
      <HowToInstall />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
