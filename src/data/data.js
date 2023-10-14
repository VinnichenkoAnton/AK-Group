import { v4 as uuidv4 } from 'uuid';

//headerLinksList
import { ReactComponent as Emailicn } from '../resources/header/emailicn.svg';
import { ReactComponent as Phoneicn } from '../resources/header/phoneicn.svg';
import { ReactComponent as Pointicn } from '../resources/header/pointicn.svg';

//sliderImagesList
import sliderImage1 from '../resources/slider/imgs/img1.jpeg';
import sliderImage2 from '../resources/slider/imgs/img2.jpg';
import sliderImage3 from '../resources/slider/imgs/img3.jpg';

//carouselImagesList
import carouselImage1 from '../resources/carousel/arx.jpg';
import carouselImage2 from '../resources/carousel/uniqua.jpg';
import carouselImage3 from '../resources/carousel/usg.jpg';
import carouselImage4 from '../resources/carousel/colonnade.jpg';
import carouselImage5 from '../resources/carousel/kniaja.jpg';
import carouselImage6 from '../resources/carousel/arsenal.jpg';
import carouselImage7 from '../resources/carousel/ingo.jpg';
import carouselImage8 from '../resources/carousel/kraina.jpg';
import carouselImage9 from '../resources/carousel/tas.jpg';
import carouselImage10 from '../resources/carousel/kraina.jpg';

//numericInfoList
import established from '../resources/numericInfo/established.svg';
import workers from '../resources/numericInfo/workers.svg';
import customers from '../resources/numericInfo/customers.svg';
import spheres from '../resources/numericInfo/spheres.svg';
import payment from '../resources/numericInfo/payment.svg';
import crowd from '../resources/numericInfo/crowd.svg';

//firstTabList
import { ReactComponent as Caraccidenticn } from '../resources/tabs/business/icns/caraccidenticn.svg';
import { ReactComponent as Houseicn } from '../resources/tabs/business/icns/houseicn.svg';
import { ReactComponent as Proficn } from '../resources/tabs/business/icns/professionalicn.svg';
import { ReactComponent as Loadicn } from '../resources/tabs/business/icns/loadicn.svg';
import { ReactComponent as Individualicn } from '../resources/tabs/business/icns/individualicn.svg';
import { ReactComponent as Agricultureicn } from '../resources/tabs/business/icns/agricultureicn.svg';
import caraccident from '../resources/tabs/business/imgs/caraccident.jpg';
import house from '../resources/tabs/business/imgs/house.jpg';
import prof from '../resources/tabs/business/imgs/professional.jpg';
import load from '../resources/tabs/business/imgs/load.jpg';
import individual from '../resources/tabs/business/imgs/individual.jpg';
import agriculture from '../resources/tabs/business/imgs/agriculture.jpg';

//advantagesList
import { ReactComponent as Professionalicn } from '../resources/advantages/icns/professionalicn.svg';
import { ReactComponent as Tenderlicn } from '../resources/advantages/icns/tendericn.svg';
import { ReactComponent as Lossesicn } from '../resources/advantages/icns/lossesicn.svg';
import { ReactComponent as Supporticn } from '../resources/advantages/icns/supporticn.svg';

//reviewsList
import reviewImage1 from '../resources/reviews/review_1.jpg';
import reviewImage2 from '../resources/reviews/review_2.jpg';
import reviewImage3 from '../resources/reviews/review_3.jpg';

//howToInstallList
import { ReactComponent as ContactIcn } from '../resources/howToInstall/contacticn.svg';
import { ReactComponent as InfoIcn } from '../resources/howToInstall/infoicn.svg';
import { ReactComponent as MeetingIcn } from '../resources/howToInstall/meetingicn.svg';
import { ReactComponent as ProtectedIcn } from '../resources/howToInstall/protectedicn.svg';

//footerSocialList
import { ReactComponent as InstagramIcn } from '../resources/footer/instagramicn.svg';
import { ReactComponent as FacebookIcn } from '../resources/footer/facebookicn.svg';
import { ReactComponent as YoutubeIcn } from '../resources/footer/youtubeicn.svg';

export const headerLinksList = [
  {
    id: uuidv4(),
    href: 'mailto:info@ak-group.net',
    Icn: Emailicn,
    text: 'info@ak-group.net',
  },
  {
    id: uuidv4(),
    href: 'tel:+380503131012',
    Icn: Phoneicn,
    text: '(050)313 10 12',
  },
  {
    id: uuidv4(),
    href: 'https://goo.gl/maps/BftpLjTLRnuoZi4ZA',
    Icn: Pointicn,
    text: 'Софіївська Борщагівка, пр-т Мартинова, 18, оф. 54',
  },
];

export const navigationList = [
  {
    text: 'Головна',
    to: '/',
  },
  {
    text: 'Про компанію',
    to: '/aboutcompany',
  },
  {
    text: 'Наші послуги',
    to: '/services',
  },
  {
    text: 'Контакти',
    to: '/contacts',
  },
];

export const sliderImagesList = [
  { id: uuidv4(), img: sliderImage1, alt: 'Логотип 1' },
  { id: uuidv4(), img: sliderImage2, alt: 'Логотип 2' },
  { id: uuidv4(), img: sliderImage3, alt: 'Логотип 3' },
];

export const carouselImagesList = [
  { id: uuidv4(), img: carouselImage1, alt: 'АТ «СК «АРКС» ' },
  { id: uuidv4(), img: carouselImage2, alt: 'ПрАТ «СК «УНІКА»' },
  { id: uuidv4(), img: carouselImage3, alt: 'ПАТ СК «УСГ»' },
  { id: uuidv4(), img: carouselImage4, alt: 'ПрАТ «СК «КОЛОННЕЙД УКРАЇНА»' },
  { id: uuidv4(), img: carouselImage5, alt: 'ПрАТ "УСК "КНЯЖА ВІЄННА ІНШУРАНС ГРУП"' },
  { id: uuidv4(), img: carouselImage8, alt: 'ПАТ «СК «КРАЇНА»' },
  { id: uuidv4(), img: carouselImage6, alt: 'ПрАТ «СК «АРСЕНАЛ СТРАХУВАННЯ»' },
  { id: uuidv4(), img: carouselImage7, alt: 'АТ «СК «IНГО»' },
  { id: uuidv4(), img: carouselImage9, alt: 'ПрАТ «СГ «ТАС» ' },
  { id: uuidv4(), img: carouselImage10, alt: 'ПрАТ «СК «БРОКБІЗНЕС»' },
];

export const numericInfoList = [
  {
    id: uuidv4(),
    img: established,
    title: 'Років',
    description: 'Наш досвід у сфері страхування',
    amount: '14',
  },
  {
    id: uuidv4(),
    img: workers,
    title: 'Компаній',
    description: 'Нам довіряють свою безпеку',
    amount: '60',
  },
  {
    id: uuidv4(),
    img: customers,
    title: 'Відсотків',
    description: 'Щорічних пролонгацій договорів страхування',
    amount: '95',
  },
  {
    id: uuidv4(),
    img: spheres,
    title: 'Сфер діяльності ',
    description: 'Наших корпоративних Клієнтів',
    amount: '13',
  },
  {
    id: uuidv4(),
    img: payment,
    title: 'Мільйонів',
    description: 'Страхових виплат отримали наші Клієнти',
    amount: '45',
  },
  {
    id: uuidv4(),
    img: crowd,
    title: 'Людей',
    description: 'Щороку укладають з нашою допомогою ДМС',
    amount: '5000',
  },
];

export const firstTabList = [
  {
    id: 'ft1',
    title: 'АВТОТРАНСПОРТНЕ СТРАХУВАННЯ',
    img: caraccident,
    icn: Caraccidenticn,
    description:
      'КАСКО, обов’язкова та добровільна цивільно-правова відповідальність, Зелена карта, страхування водіїв та пасажирів від нещасного випадку.',
  },
  {
    id: 'ft2',
    title: 'СТРАХУВАННЯ МАЙНА',
    img: house,
    icn: Houseicn,
    description:
      'Страхування нерухомого майна, обладнання, включаючи перерву у виробництві, страхування будівельно-монтажних ризиків тощо.',
  },
  {
    id: 'ft3',
    title: 'СТРАХУВАННЯ ПРОФ. ВІДПОВІДАЛЬНОСТІ',
    img: prof,
    icn: Proficn,
    description:
      'Страхування відповідальності юристів, аудиторів, ТОП менеджменту, кібер-страхування, страхування відповідальності за забруднення навколишнього середовища та ін.',
  },
  {
    id: 'ft4',
    title: 'СТРАХУВАННЯ ВАНТАЖІВ',
    img: load,
    icn: Loadicn,
    description:
      'Страхування вантажів, відповідальності експедитора/перевізника, страхування морських суден та відповідальності судновласника.',
  },
  {
    id: 'ft5',
    title: 'ОСОБИСТІ ВИДИ СТРАХУВАННЯ',
    img: individual,
    icn: Individualicn,
    description:
      'ДМС, нещасний випадок, страховка для виїзду за кордон, страхування життя, страхування на випадок критичних захворювань.',
  },
  {
    id: 'st6',
    title: 'СТРАХУВАННЯ АГРАРНИХ РИЗИКІВ',
    img: agriculture,
    icn: Agricultureicn,
    description:
      'Страхування посівів від повної або часткової загибелі, страхування майбутнього врожаю, страхування багаторічних насаджень, страхування худоби.',
  },
];

export const advantagesList = [
  {
    id: uuidv4(),
    subtitle: 'Професійне консультування',
    description:
      'Страховий консалтинг - основа брокерського бізнесу! Для своїх Клієнтів ми проводимо оцінку всіх можливих ризиків, повний аналіз діючих договорів та програм страхування, дослідження страхового ринку та багато іншого!',
    icn: Professionalicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Урегулювання збитків та сервіс',
    description:
      'Ми завжди відстоюємо інтереси наших Клієнтів, беремо на себе підготовку, отримання та погодження усіх необхідних документів, сприяємо швидкому і якісному урегулюванню страхових випадків у повному обсязі!',
    icn: Lossesicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Тендер серед страхових компаній',
    description:
      'Глибокі знання страхового ринку, доступ до закритої інформації, а також відпрацьована тендерна процедура дають нам можливість розміщувати навіть найскладніші ризики виключно у надійних Страховиків, з якими ми працюємо багато років та особисто знаємо ТОП-менеджмент!',
    icn: Tenderlicn,
  },

  {
    id: uuidv4(),
    subtitle: 'Цілодобова підтримка',
    description:
      'Наші професіонали 24 години на добу знаходяться на зв’язку з Клієнтами, готові у будь-який час проконсультувати, допомогти та за необхідності виїхати на допомогу при настанні страхового випадку!',
    icn: Supporticn,
  },
];

export const reviewsList = [
  {
    img: reviewImage1,
    alt: 'Фото першого автора',
    title: 'Ложкіна Олена',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: reviewImage2,
    alt: 'Фото другого автора',
    title: 'Міль Богдан',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: reviewImage3,
    alt: 'Фото третього автора',
    title: 'Кобка Анастасія',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const howToInstallList = [
  { id: uuidv4(), title: 'Зателефонуйте/залиште заявку нашому менеджеру', icn: ContactIcn },
  { id: uuidv4(), title: 'Дізнайтеся все необхідне та домовтесь про зустріч', icn: InfoIcn },
  { id: uuidv4(), title: 'Зустріч та складання кошторису', icn: MeetingIcn },
  { id: uuidv4(), title: 'Підписання договору', icn: ProtectedIcn },
];

export const footerSocialList = [
  { id: uuidv4(), link: '#', Icn: InstagramIcn },
  { id: uuidv4(), link: '#', Icn: FacebookIcn },
  { id: uuidv4(), link: '#', Icn: YoutubeIcn },
];
