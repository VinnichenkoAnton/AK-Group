import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import ContactLink from '../../../../components/ContactLink/ContactLink';

import classes from './ContactsInfo.module.scss';

import { ReactComponent as Phoneicn } from '../../../../resources/header/phoneicn.svg';
import { ReactComponent as Emailicn } from '../../../../resources/header/emailicn.svg';

const ContactsInfo = () => {
  return (
    <section className={classes.continfo}>
      <Container>
        <Title text="Контактна інформація" />
        <div className={classes.continfo__wrapper}>
          <div className={classes.continfo__info}>
            <p className={classes.continfo__description}>
              Якщо у Вас виникли будь-які запитання, будь ласка, Ви можете завітати до нас в офіс.
              Мы знаходимося в Київській області, село Софіївська Борщагівка, проспект Мартинова,
              будинок 18, офіс 54
            </p>
            <div className={classes.continfo__subtitle}>Телефон</div>
            <ContactLink
              className={classes.continfo__contactlink}
              href="tel:+80503131012"
              Icn={Phoneicn}
              alt="Телефон"
              text="(050) 313 10 12"
            />
            <ContactLink
              className={classes.continfo__contactlink}
              href="tel:+80931479663"
              Icn={Phoneicn}
              alt="Телефон"
              text="(093) 147 96 63"
            />
            <div className={classes.continfo__subtitle}>Або напишіть нам на пошту</div>
            <ContactLink
              className={classes.continfo__contactlink}
              href="mailto:info@ak-group.net"
              Icn={Emailicn}
              alt="Телефон"
              text="info@ak-group.net"
            />
          </div>

          <div className={classes.continfo__map}>
            <iframe
              title="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.6812113796746!2d30.39695886327166!3d50.39759568928493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb4e1a64d68f%3A0x9b5b00326f8f9638!2sProspekt%20Martynova%2C%2018%2C%20Sofiivska%20Borshchahivka%2C%20Kyivs&#39;ka%20oblast%2C%2008156!5e0!3m2!1sen!2sua!4v1680362047534!5m2!1sen!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsInfo;
