import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import ContactUs from '../../components/ContactUs/ContactUs';
import Container from '../../components/UI/Container/Container';
import GoBack from '../../components/GoBack/GoBack';
import Title from '../../components/Title/Title';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import classes from './PolicyPage.module.scss';

const Policy = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Cторінка Політика щодо обробки персональних даних сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet>
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <main>
        <section className={classes.policy}>
          <Container>
            <GoBack />
            <Title
              className={classes.policy__title}
              text="Політика щодо обробки персональних даних"
            ></Title>
            <h3 className={classes.policy__subtitle}>1. Загальні положення </h3>
            <p className={classes.policy__li}>
              Ця політика обробки персональних даних складена у відповідності до вимог Закону
              України "Про захист персональних даних" від 27.10.2022 і визначає порядок обробки
              персональних даних і заходи по забезпеченню збереження персональних даних, які бере на
              себе Оберіг (далі - Оператор).
            </p>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                1.1. Оператор ставить своєю головною метою і умовою ведення своєї діяльності
                дотримання прав і свобод людини та громадянина при обробці персональних даних, в
                тому числі захисту прав на недоторканість особистого життя, особисту та сімейну
                таємницю.
              </div>
              <div className={classes.policy__li}>
                1.2. Ця політика Оператора щодо обробки персональних даних (далі – Політика)
                застосовується до всієї інформації, яку Оператор може отримати про відвідувачів
                веб-сайту https://oberig.org.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              2. Основні поняття, що використовуються в Політиці{' '}
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                2.1. Автоматизована обробка персональних даних - обробка персональних даних за
                допомогою засобів обчислювальної техніки.
              </div>
              <div className={classes.policy__li}>
                2.2. Блокуванняя персональних даних - тимчасове призупинення обробки персональних
                даних (за винятком випадків, якщо обробка необхідна для уточнення персональних
                даних).
              </div>
              <div className={classes.policy__li}>
                2.3. Веб-сайт – сукупність графічних та інформаційних матеріаліва, а також програм
                для ЕОМ та баз даних, що забезпечують їх доступність в інтернеті за мережевою
                адресою https://oberig.org.
              </div>
              <div className={classes.policy__li}>
                2.4. Інформаційна система персональних даних - сукупність персональних даних що
                зберігаються в базах даних та інформаційних технологій та технічних засобів, що
                забезпечують їх обробку.
              </div>
              <div className={classes.policy__li}>
                2.5. Знеособлення персональних даних - дії, в результаті яких неможливо визначити
                без використання додаткової інформації належність персональних даних конкертному
                користувачу чи іншому суб'єкту персональних даних.
              </div>
              <div className={classes.policy__li}>
                2.6. Обробка персональних даних – буль-яка дія (операція) або сукупність дій
                (операцій), вчинених з використанням засобів автоматизації чи без або без
                використання таких засобів з персональними даними, включаючи збір, запис,
                систематизацію, накопичення, зберігання, уточнення (оновлення, зміну), використання,
                передачу, (поширення, надання доступу), знеособлення, блокування, видалення,
                знищення персональних даних.
              </div>
              <div className={classes.policy__li}>
                2.7. Оператор – державний орган, муніципальний орган, юридична чи фізична особа, що
                самостійно або спільно з іншими особами організовує та (або) виконує обробку
                персональних даних, а також визначає цілі оброки персональних даних, вміст
                персональних даних, що підлягають обробці, дії (операції), що здійснюються з
                персональними даними.
              </div>
              <div className={classes.policy__li}>
                2.8. Персональні дані – будь-яка інформація, що відноситься прямо або не прямо до
                певного Користувача веб-сайту https://oberig.org.
              </div>
              <div className={classes.policy__li}>
                2.9. Персональні дані, що дозволені субєктом персональних даних для розповсюдження -
                персональні дані, доступ до яких наданий необмеженому колу осіб суб'єктом
                персональних даних шляхом надання згоди на обробку персональних даних, дозволених
                суб'єктом персональних даних для поширення в порядку передбаченому Законом України
                "Про захист персональних даних" (далі - персональні дані, що дозволені для
                розповсюдження).
              </div>
              <div className={classes.policy__li}>
                2.10. Користувач - будь-який відвідувач веб-сайту https://oberig.org.
              </div>
              <div className={classes.policy__li}>
                2.11. Надання персональних даних - дії, направлені на розкриття персональних даних
                певній особі або колу осіб.
              </div>
              <div className={classes.policy__li}>
                2.12. Поширення персональних даних - будь-які дії, спрямовані на розкриття
                персональних даних невизначеному колу осіб (передача персональних даних) або на
                ознайомлення з персональними даними необмеженого кола осіб, в тому числі публікація
                персональних даних в засобах масової інформації, розміщення в
                інформаційно-телекомунікаційних мережах або надання доступу до персональних даних
                будь-яким іншим способом.
              </div>
              <div className={classes.policy__li}>
                2.13. Трансгранична передача персональних даних - передача персональних даних на
                територію іноземної держави органу влади, іноземній фізичній або юридичній особі.
              </div>
              <div className={classes.policy__li}>
                2.14. Знищення персональних даних - будь-які дії, в результаті яких персональні дані
                знищуються без можливості подальшого відновлення змісту персональних даних в
                інформаційній системі персональних даних та (або) знищуються матеріальні носії
                персональних даних.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}> 3. Основні права та обов'язки Оператора </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                3.1. Оператор має право: – отримувати від суб'єкта персонаольних даних достовірну
                інформацію та/або документи, що містять персональні дані; – у випадку відкликання
                суб'єктом персональних даних згоди суб'єкта на обробку персональних даних Оператор
                має право продовжиим обробку персональних даних без згоди суб'єкта персональних
                даних при наявності підстав, вказаних в Законі про персональні дані; – самостійно
                визначати склад та перелік дій, необхідних для забезпечення виконання обов'язків,
                передбачених Законом про персональні дані та прийнятими у відповідності до нього
                нормативно-правових актів, якщо інше не передбачено Законом про персональні дані або
                іншими законами.
              </div>
              <div className={classes.policy__li}>
                3.2. Оператор зобов'язаний: – надавати суб'єкту персональних даних на його прохання
                інформацію щодо обробки його персональних даних; – організовувати обробку
                персональних даних у порядку, встановленому чинним законодавством України; -
                відповідати на звернення та запити суб'єктів персональних даних та їх законних
                представників відповідно до вимог Закону про персональні дані; – повідомляти в
                уповноважений орган захисту прав суб'єктів персональних даних на запит цього органу
                необхідну інформацію протягом 30 днів із дати отримання такого запиту; - публікувати
                чи іншим чином забезпечувати необмежений доступ до цієї Політики щодо обробки
                персональних даних; – приймати правові, організаційні та технічні заходи захисту
                персональних даних від неправомірного чи випадкового доступу до них, знищення,
                зміни, блокування, копіювання, надання, поширення персональних даних, а також від
                інших неправомірних дій щодо персональних даних; – припинити передачу (поширення,
                надання, доступ) персональних даних, припинити обробку та знищити персональні дані в
                порядку та випадках, передбачених Законом про персональні дані; - Виконувати інші
                обов'язки, передбачені Законом про персональні дані.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              4. Основні права та обов'зки суб'єктів персональних даних
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                4.1. Суб'єкти персональних даних мають право: – отримувати інформацію, що стосується
                обробки їх персональних даних, за винятком випадків, передбачених законами.
                Відомості надаються суб'єкту персональних даних Оператором у доступній формі, і в
                них не повинні міститися персональні дані, що належать до інших суб'єктів
                персональних даних, за винятком випадків, коли є законні підстави для розкриття
                таких персональних даних. Перелік інформації та порядок її отримання встановлено
                Законом про персональні дані; - Вимагати від оператора уточнення його персональних
                даних, їх блокування чи знищення у разі, якщо персональні дані є неповними,
                застарілими, неточними, незаконно одержаними або не є необхідні для заявленої мети
                обробки, а також приймати передбачені законом заходи щодо захисту своїх прав; –
                висувати умови попередньої згоди при обробці персональних даних з метою просування
                на ринку товарів, робіт та послуг; – на відкликання згоди на обробку персональних
                даних; – оскаржити до уповноваженого органу захисту прав суб'єктів персональних
                даних або у судовому порядку неправомірні дії або бездіяльність Оператора під час
                обробки їх персональних даних; - на реалізацію інших прав, передбачених
                законодавством України.
              </div>
              <div className={classes.policy__li}>
                4.2. Суб'єкти персональних даних зобов'язані: надавати Оператору достовірні дані про
                себе; – повідомляти Оператору про уточнення (оновлення, зміну) своїх персональних
                даних.
              </div>
              <div className={classes.policy__li}>
                4.3. Особи, які передали Оператору недостовірні відомості про себе або відомості про
                інших суб'єктів персональних даних без згоди останніх, несуть відповідальність у
                відповідно до законодавства України.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              5. Оператор може обробляти наступні персональні дані Користувача
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>5.1. Прізвище, ім'я, по-батькові </div>
              <div className={classes.policy__li}>5.2. Електронна адреса.</div>
              <div className={classes.policy__li}>5.3. Номер телефону.</div>
              <div className={classes.policy__li}>
                5.4. Також на сайті відбувається збір та обробка знеособлених даних про відвідувачів
                (у т.ч. файлів «cookie») за допомогою сервісів інтернет-статистики (Яндекс Метрика
                та Google Аналітика та інших).
              </div>
              <div className={classes.policy__li}>
                5.5. Вищезазначені дані далі за текстом Політики об'єднані загальним поняттям
                Персональні дані.
              </div>
              <div className={classes.policy__li}>
                5.6. Обробка спеціальних категорій персональних даних, що стосуються расової,
                національної приналежності, політичних поглядів, релігійних чи філософських
                переконань, інтимного життя, Оператором не здійснюється.
              </div>
              <div className={classes.policy__li}>
                5.7. Обробка персональних даних, дозволених для розповсюдження, з числа спеціальних
                категорій персональних даних, зазначених у Законі про захист персональних даних,
                допускається, якщо дотримуються заборони та умови, передбачені Законом про захист
                персональних даних.
              </div>
              <div className={classes.policy__li}>
                5.8. Згода Користувача на обробку персональних даних, дозволених для поширення,
                оформляється окремо від інших згод на обробку його персональних даних. При цьому
                дотримуються умови, передбачені, Законом про захист персональних даних. Вимоги щодо
                змісту такої згоди встановлюються уповноваженим органом захисту прав суб'єктів
                персональних даних.
              </div>
              <div className={classes.policy__li}>
                5.8.1 Згоду на обробку персональних даних, дозволених для розповсюдження, Користувач
                надає Оператору безпосередньо.
              </div>
              <div className={classes.policy__li}>
                5.8.2 Оператор зобов'язаний у строк не пізніше трьох робочих днів з моменту
                отримання зазначеного згоди Користувача опублікувати інформацію про умови обробки,
                наявність заборон та умов на обробку необмеженим колом осіб персональних даних,
                дозволених для поширення.
              </div>
              <div className={classes.policy__li}>
                5.8.3 Передача (розповсюдження, надання, доступ) персональних даних, дозволених
                суб'єктом персональних даних для розповсюдження, повинна бути припинена в будь-який
                час на вимогу суб'єкта персональних даних. Ця вимога повинна включати прізвище,
                ім'я, по батькові (за наявності), контактну інформацію (номер телефону, адресу
                електронної пошти або поштову адресу) суб'єкта персональних даних, а також перелік
                персональних даних, обробка яких підлягає припинення. Вказані в цій вимозі
                персональні дані можуть оброблятися тільки Оператором, якому воно спрямоване.
              </div>
              <div className={classes.policy__li}>
                5.8.4 Згода на обробку персональних даних, дозволених для розповсюдження, припиняє
                свою дію з моменту надходження до Оператора вимоги, зазначеної в п. 5.8.3 цієї
                Політики щодо обробки персональних даних.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}> 6. Принципи обробки персональних даних</h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                6.1. Обробка персональних даних здійснюється на законній та справедливій основі.
              </div>
              <div className={classes.policy__li}>
                6.2. Обробка персональних даних обмежується досягненням конкретних, заздалегідь
                визначених та законних цілей. Не допускається обробка персональних даних, несумісна
                з метою збору персональних даних.
              </div>
              <div className={classes.policy__li}>
                6.3. Не допускається об'єднання баз даних, що містять персональні дані, обробка яких
                здійснюється з метою, несумісних між собою.
              </div>
              <div className={classes.policy__li}>
                6.4. Обробці підлягають виключно персональні дані, що відповідають цілям їх обробки.
              </div>
              <div className={classes.policy__li}>
                6.5. Зміст та обсяг оброблюваних персональних даних відповідають заявленим цілям
                обробки. Не допускається надмірність оброблюваних персональних даних по відношенню
                до заявлених цілей їх обробки.
              </div>
              <div className={classes.policy__li}>
                6.6. При обробці персональних даних забезпечується точність персональних даних, їх
                достатність, а в необхідних випадках і актуальність по відношенню до цілей обробки
                персональних даних. Оператор вживає необхідних заходів та/або забезпечує їх
                прийняття для видалення або уточнення неповних або неточних даних.
              </div>
              <div className={classes.policy__li}>
                6.7. Зберігання персональних даних здійснюється у формі, що дозволяє визначити
                суб'єкта персональних даних, не довше, ніж цього вимагає мета обробки персональних
                даних, якщо термін зберігання персональних даних встановлено федеральним законом,
                договором, стороною якого, вигодонабувачем або поручителем за яким є суб'єкт
                персональних даних. Оброблювані персональні дані знищуються або знеособлюються після
                досягнення цілей обробки або у разі втрати необхідності досягненні цих цілей, якщо
                інше не передбачено законом України.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}> 7. Цели обработки персональных данных </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                7.1. Мета обробки персональних даних Користувача: – інформування Користувача шляхом
                відправлення йому електронних листів; - укладання, виконання та припинення
                цивільно-правових договорів; – надання доступу Користувачеві до сервісів, інформації
                та/або матеріалів, що містяться на веб-сайті https://oberig.org.
              </div>
              <div className={classes.policy__li}>
                7.2. Також Оператор має право надсилати Користувачеві повідомлення про нові продукти
                та послугах, спеціальні пропозиції та різні події. Користувач завжди може
                відмовитися від отримання інформаційних повідомлень, надіславши Оператору листа на
                адресу електронної пошти privacy@thismywebsite·com з позначкою «Відмова від
                повідомлень про нові продукти, послуги та спеціальні пропозиції».
              </div>
              <div className={classes.policy__li}>
                7.3. Знеособлені дані Користувачів, які збираються за допомогою сервісів
                інтернет-статистики, служать для збору інформації про дії Користувачів на сайті,
                покращення якості сайту та його змісту.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              8. Правові засади обробки персональних даних
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                8.1. Правовими підставами для обробки персональних даних Оператором є: – статутні
                документи Оператора; – договори, що укладаються між оператором та суб'єктом
                персональних даних; - закони України, інші нормативно-правові акти у сфері захисту
                персональних даних; – згоди Користувачів на обробку їх персональних даних,
                дозволених для поширення.
              </div>
              <div className={classes.policy__li}>
                8.2. Оператор обробляє персональні дані Користувача лише у разі їх заповнення та/або
                відправки Користувачем самостійно через спеціальні форми, розташовані на сайті
                https://oberig.org або надіслані Оператору за допомогою електронної пошти.
                Заповнюючи відповідні форми та/або надсилаючи свої персональні форми Дані Оператору,
                Користувач висловлює свою згоду з цією Політикою.
              </div>
              <div className={classes.policy__li}>
                8.3. Оператор обробляє знеособлені дані про Користувача, якщо це дозволено в
                налаштуваннях браузера Користувача (включено збереження файлів cookie і використання
                технології JavaScript).
              </div>
              <div className={classes.policy__li}>
                8.4. Суб'єкт персональних даних самостійно ухвалює рішення про надання його
                персональних даних і дає згоду вільно, своєю волею та у своїх інтересах.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}> 9. Умови обробки персональних даних </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                9.1. Обробка персональних даних здійснюється за згодою суб'єкта персональних даних
                на опрацювання його персональних даних.
              </div>
              <div className={classes.policy__li}>
                9.2. Обробка персональних даних необхідна для досягнення цілей, передбачених
                міжнародним договором України чи законом, для здійснення покладених законодавством
                україни на оператора функцій, повноважень та обов'язків.
              </div>
              <div className={classes.policy__li}>
                9.3. Обробка персональних даних необхідна для здійснення правосуддя, виконання
                судового акту, акту іншого органу або посадової особи, що підлягають виконанню
                відповідно до законодавства України про виконавчі провадження.
              </div>
              <div className={classes.policy__li}>
                9.4. Обробка персональних даних необхідна для виконання договору, стороною якого або
                вигодонабувачем або поручителем за яким є суб'єкт персональних даних, а також для
                укладання договору з ініціативи суб'єкта персональних даних або договору, за яким
                суб'єкт персональних даних буде вигодонабувачем чи поручителем.
              </div>
              <div className={classes.policy__li}>
                9.5. Обробка персональних даних необхідна для здійснення прав та законних інтересів
                оператора або третіх осіб, чи для досягнення суспільно значущих цілей при умові, що
                при цьому не порушуються права та свободи суб'єкта персональних даних.
              </div>
              <div className={classes.policy__li}>
                9.6. Здійснюється обробка персональних даних, доступ необмеженого кола осіб до яких
                надано суб'єктом персональних даних або на його прохання (далі – загальнодоступні
                персональні дані).
              </div>
              <div className={classes.policy__li}>
                9.7. Здійснюється обробка персональних даних, що підлягають опублікуванню або
                обов'язковому розкриттю відповідно до федерального закону.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              10. Порядок збору, зберігання, передачі та інших видів обробки персональних даних.
              Безпека персональних даних, що обробляються Оператором, забезпечується шляхом
              реалізації правових, організаційних та технічних заходів, необхідних для виконання у
              повному обсязі вимог чинного законодавства у сфері захисту персональних даних
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                10.1. Оператор забезпечує збереження персональних даних та приймає всі можливі
                заходи, що унеможливлюють доступ до персональних даних неуповноважених осіб.
              </div>
              <div className={classes.policy__li}>
                10.2. Персональні дані Користувача ніколи, за жодних умов не будуть передані третім
                особам, за винятком випадків, пов'язаних із виконанням чинного законодавства або у
                разі, якщо суб'єктом персональних даних надано згоду Оператору на передачу даних
                третій особі для виконання зобов'язань щодо цивільно-правового договору.
              </div>
              <div className={classes.policy__li}>
                10.3. У разі виявлення неточностей у персональних даних, Користувач може
                актуалізувати їх самостійно, шляхом направлення Оператору повідомлення на адресу
                електронної пошти Оператора privacy@thismywebsite·com з позначкою «Актуалізація
                персональних даних».
              </div>
              <div className={classes.policy__li}>
                10.4. Термін обробки персональних даних визначається досягненням цілей, для яких
                було зібрано персональні дані, якщо інший термін не передбачено договором або діючим
                законодавством. Користувач може будь-якої миті відкликати свою згоду на обробку
                персональних даних, надіславши Оператору повідомлення за допомогою електронної пошти
                на електронну адресу Оператора privacy@thismywebsite·com з позначкою «Відкликання
                згоди на обробку персональних даних».
              </div>
              <div className={classes.policy__li}>
                10.5. Вся інформація, яка збирається сторонніми сервісами, у тому числі платіжними
                системами, засобами зв'язку та іншими постачальниками послуг, зберігається та
                обробляється зазначеними особами (Операторами) відповідно до їх Угоди та Політикою
                конфіденційності. Суб'єкт персональних даних та/або Користувач зобов'язаний
                самостійно своєчасно ознайомитись із зазначеними документами. Оператор не несе
                відповідальність за дії третіх осіб, у тому числі зазначених у цьому пункті
                постачальників послуг.
              </div>
              <div className={classes.policy__li}>
                10.6. Встановлені суб'єктом персональних даних заборони передачі (крім надання
                доступу), а також на обробку або умови обробки (крім отримання доступу) персональних
                даних, дозволених для розповсюдження, не діють у випадках обробки персональних даних
                у державних, громадських та інших публічних інтересах, визначених законодавством
                України.
              </div>
              <div className={classes.policy__li}>
                10.7. Оператор при обробці персональних даних забезпечує конфіденційність
                персональних даних.
              </div>
              <div className={classes.policy__li}>
                10.8. Оператор здійснює зберігання персональних даних у формі, що дозволяє визначити
                суб'єкта персональних даних, не довше, ніж цього вимагає мета обробки персональних
                даних даних, якщо термін зберігання персональних даних встановлено законом України,
                договором, стороною якого, вигодонабувачем або поручителем за яким є суб'єкт
                персональних даних.
              </div>
              <div className={classes.policy__li}>
                10.9. Умовою припинення обробки персональних даних може бути досягнення цілей
                обробки персональних даних, закінчення строку дії згоди суб'єкта персональних даних
                даних або відкликання згоди суб'єктом персональних даних, а також виявлення
                неправомірної обробки персональних даних
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              11. Перелік дій, що проводить Оператор з отриманими персональними даними
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                11.1. Оператор здійснює збір, запис, систематизацію, накопичення, зберігання,
                уточнення (оновлення, зміна), вилучення, використання, передачу (розповсюдження,
                надання доступу), знеособлення, блокування, видалення та знищення персональних даних
              </div>
              <div className={classes.policy__li}>
                11.2. Оператор здійснює автоматизовану обробку персональних даних з отриманням
                та/або передачею отриманої інформації з інформаційно-телекомунікаційних мереж або
                без неї.
              </div>
            </div>
            <h3 className={classes.policy__subtitle}>
              12. Транскордонна передача персональних даних
            </h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                12.1. Оператор на початок здійснення транскордонної передачі персональних даних
                зобов'язаний переконатися в тому, що іноземною державою, на територію якої
                передбачається здійснювати передачу персональних даних, забезпечується надійний
                захист прав суб'єктів персональних даних.
              </div>
              <div className={classes.policy__li}>
                12.2. Транскордонна передача персональних даних на території іноземних держав, які
                не відповідають вищевказаним вимогам, може здійснюватися тільки у разі наявності
                згоди у письмовій формі суб'єкта персональних даних на транскордонну передачу його
                персональних даних та/або виконання договору, стороною якого є суб'єкт персональних
                даних.
              </div>
            </div>
            <h3>
              13. Конфіденційність персональних даних Оператор та інші особи, які отримали доступ до
              персональних даних, зобов'язані не розкривати третім особам та не поширювати
              персональні дані дані без згоди суб'єкта персональних даних, якщо інше не передбачено
              законом України.
            </h3>
            <h3 className={classes.policy__subtitle}>14. Заключительные положения</h3>
            <div className={classes.policy__ol}>
              <div className={classes.policy__li}>
                14.1. Користувач може отримати будь-які роз'яснення з питань, що цікавлять, що
                стосуються обробки його персональних даних, звернувшись до Оператора за допомогою
                електронної пошти privacy@thismywebsite·com.
              </div>
              <div className={classes.policy__li}>
                14.2. У цьому документі буде відображено будь-які зміни політики обробки
                персональних даних Оператором. Політика діє безстроково до заміни її новою версією.
              </div>
              <div className={classes.policy__li}>
                14.2. У цьому документі буде відображено будь-які зміни політики обробки
                персональних даних Оператором. Політика діє безстрокова до заміни її новою версією.
              </div>
              <div className={classes.policy__li}>
                14.3. Актуальну версію Політики у вільному доступі розташована в Інтернеті за
                адресою https://oberig.org/policy.
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Policy;