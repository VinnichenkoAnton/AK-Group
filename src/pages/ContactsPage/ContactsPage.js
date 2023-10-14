import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import ContactsInfo from './sections/ContactsInfo/ContactsInfo';
import ContactsForm from './sections/ContactsForm/ContactsForm';
import Footer from '../../layouts/Footer/Footer';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Сторінка контактів сайту AK GROUP INSURANCE BROKERS. AK GROUP INSURANCE BROKERS - БРОКЕРСЬКІ ПОСЛУГИ У СФЕРІ СТРАХУВАННЯ. АДМІНІСТРУВАННЯ ПРИ ВРЕГУЛЮВАННІ ЗБИТКІВ. ПРОФЕСІЙНИЙ КОНСАЛТИНГ"
        />
        <title>AK GROUP INSURANCE BROKERS</title>
      </Helmet>
      <Header />
      <ContactsInfo />
      <ContactsForm />
      <Footer />
    </>
  );
};

export default ContactsPage;
