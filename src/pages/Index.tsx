import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Ада Лавлейс',
    subtitle: 'Мать программирования',
    content: '1815 - 1852',
    type: 'cover',
    image: 'https://cdn.poehali.dev/projects/2f4e9e3d-6051-4345-acc0-e8098ae6c10b/files/7ae50311-178b-4627-a06b-c65073e672ad.jpg'
  },
  {
    id: 2,
    title: 'Кто такая Ада Лавлейс?',
    subtitle: 'Краткое введение',
    content: 'Августа Ада Кинг, графиня Лавлейс — английский математик, известная своей работой над проектом аналитической машины Чарльза Бэббиджа. Она считается первым программистом в истории человечества.',
    type: 'intro',
    bulletPoints: [
      'Дочь знаменитого поэта лорда Байрона',
      'Провидица компьютерной эры',
      'Автор первого алгоритма для машины'
    ]
  },
  {
    id: 3,
    title: 'Ранние годы',
    subtitle: 'Детство и семья',
    content: 'Августа Ада Байрон родилась 10 декабря 1815 года в Лондоне. Её отец — знаменитый поэт лорд Байрон, мать — Анна Изабелла Милбэнк, математик и активистка.',
    type: 'biography',
    bulletPoints: [
      'Родители разошлись через месяц после её рождения',
      'Мать настояла на серьёзном математическом образовании',
      'С детства проявляла интерес к механизмам и цифрам',
      'Страдала от болезней, но это не помешало её учёбе'
    ],
    image: 'https://cdn.poehali.dev/projects/2f4e9e3d-6051-4345-acc0-e8098ae6c10b/files/a0bb19f2-9002-4e70-86ff-fe3720db7699.jpg'
  },
  {
    id: 4,
    title: 'Образование',
    subtitle: 'Путь к науке',
    content: 'В эпоху, когда женщинам редко давали серьёзное образование, Ада изучала математику, логику и естественные науки под руководством выдающихся учёных своего времени.',
    type: 'education',
    bulletPoints: [
      'Учителя: Мэри Сомервилл, Август Де Морган',
      'Изучала высшую математику и логику',
      'Интересовалась механизмами и технологиями',
      'Обладала редким даром: сочетала поэзию и науку'
    ]
  },
  {
    id: 5,
    title: 'Встреча с Бэббиджем',
    subtitle: '1833 год — поворотный момент',
    content: 'В 17 лет Ада встретила Чарльза Бэббиджа, математика и изобретателя. Она была очарована его Разностной машиной — механическим вычислителем, прообразом современного компьютера.',
    type: 'collaboration',
    bulletPoints: [
      'Бэббидж стал её наставником и другом',
      'Ада сразу поняла потенциал его изобретений',
      'Началось их многолетнее сотрудничество',
      'Бэббидж называл её "Чародейкой чисел"'
    ],
    image: 'https://cdn.poehali.dev/projects/2f4e9e3d-6051-4345-acc0-e8098ae6c10b/files/4eaab03c-b713-41fb-9218-b0d230836fbf.jpg'
  },
  {
    id: 6,
    title: 'Аналитическая машина',
    subtitle: 'Прообраз компьютера',
    content: 'Чарльз Бэббидж спроектировал Аналитическую машину — механическое устройство, способное выполнять любые математические операции по заданной программе.',
    type: 'machine',
    bulletPoints: [
      'Использовала перфокарты для ввода данных',
      'Имела «мельницу» (процессор) и «склад» (память)',
      'Могла выполнять циклы и условные операторы',
      'Так и не была построена при жизни Бэббиджа'
    ],
    image: 'https://cdn.poehali.dev/projects/2f4e9e3d-6051-4345-acc0-e8098ae6c10b/files/4eaab03c-b713-41fb-9218-b0d230836fbf.jpg'
  },
  {
    id: 7,
    title: 'Знаменитые заметки',
    subtitle: '1843 год — рождение программирования',
    content: 'Ада перевела с французского статью о машине Бэббиджа и добавила собственные примечания, которые были в три раза длиннее оригинала.',
    type: 'notes',
    bulletPoints: [
      'Примечания содержали первый алгоритм в истории',
      'Алгоритм вычислял числа Бернулли',
      'Ада предсказала, что машины смогут создавать музыку',
      'Она понимала концепцию универсального компьютера'
    ]
  },
  {
    id: 8,
    title: 'Первый алгоритм',
    subtitle: 'Рождение программирования',
    content: 'В примечании G Ада описала пошаговую последовательность операций для вычисления чисел Бернулли. Это был первый опубликованный алгоритм, предназначенный для выполнения машиной.',
    type: 'algorithm',
    codeExample: `
ПРИМЕЧАНИЕ G
Операции для вычисления B₇:

1. Загрузить B₁ в регистр V₁
2. Загрузить константу 1 в V₂
3. Умножить V₁ на V₂ → V₃
4. Повторить цикл 7 раз...
5. Результат в V₂₁
    `
  },
  {
    id: 9,
    title: 'Визионерское мышление',
    subtitle: 'Предсказания будущего',
    content: 'Ада не просто описала машину — она увидела её потенциал далеко за пределами математики. Она понимала, что компьютеры смогут обрабатывать символы, создавать искусство и музыку.',
    type: 'vision',
    bulletPoints: [
      '«Машина может создавать музыку любой сложности»',
      'Предвидела символьные вычисления',
      'Понимала концепцию искусственного интеллекта',
      'Размышляла о границах машинного мышления'
    ]
  },
  {
    id: 10,
    title: 'Личная жизнь',
    subtitle: 'Графиня Лавлейс',
    content: 'В 1835 году Ада вышла замуж за Уильяма Кинга, который позже стал графом Лавлейс. У них родилось трое детей, но это не остановило её научные занятия.',
    type: 'personal',
    bulletPoints: [
      'Совмещала роль матери и учёного',
      'Муж поддерживал её интеллектуальные увлечения',
      'Страдала от множества болезней',
      'Продолжала работать над математическими проектами'
    ]
  },
  {
    id: 11,
    title: 'Трагический конец',
    subtitle: 'Ранняя смерть',
    content: 'Ада Лавлейс скончалась 27 ноября 1852 года в возрасте 36 лет от рака матки. Она умерла в том же возрасте, что и её отец, лорд Байрон.',
    type: 'death',
    bulletPoints: [
      'Болела несколько лет перед смертью',
      'Похоронена рядом с отцом в семейном склепе',
      'Её работа была забыта почти на 100 лет',
      'Признание пришло только в XX веке'
    ]
  },
  {
    id: 12,
    title: 'Интересные факты',
    subtitle: 'Что вы могли не знать',
    content: '',
    type: 'facts',
    bulletPoints: [
      '🎭 Дочь знаменитого поэта, но выбрала математику',
      '🎨 Называла математику «поэтической наукой»',
      '🎲 Увлекалась азартными играми и пыталась создать математическую систему ставок',
      '💌 Переписывалась с величайшими учёными эпохи',
      '🦄 В детстве мечтала создать летательный аппарат',
      '📚 Подписывала свои работы инициалами A.A.L.'
    ]
  },
  {
    id: 13,
    title: 'Наследие',
    subtitle: 'Влияние на современность',
    content: 'Работы Ады Лавлейс были заново открыты в 1950-х годах, когда началась эра компьютеров. Её видение универсальных вычислительных машин оказалось пророческим.',
    type: 'legacy',
    bulletPoints: [
      '💻 Язык программирования Ada назван в её честь',
      '🏆 День Ады Лавлейс отмечается ежегодно в октябре',
      '🎖️ Медаль Ады Лавлейс — престижная награда в IT',
      '📖 Её портрет украшал британские паспорта',
      '🌟 Вдохновляет женщин в науке и технологиях'
    ]
  },
  {
    id: 14,
    title: 'Вклад в науку',
    subtitle: 'Почему Ада важна?',
    content: '',
    type: 'contribution',
    bulletPoints: [
      '1️⃣ Создала первый алгоритм для машины',
      '2️⃣ Ввела концепцию программного обеспечения',
      '3️⃣ Предвидела универсальность компьютеров',
      '4️⃣ Разделила аппаратное и программное обеспечение',
      '5️⃣ Описала концепцию подпрограмм и циклов',
      '6️⃣ Показала, что женщины могут быть учёными'
    ]
  },
  {
    id: 15,
    title: 'Заключение',
    subtitle: 'Мать программирования',
    content: 'Ада Лавлейс была человеком, опередившим своё время. Её работа заложила фундамент современного программирования и вдохновляет миллионы людей по всему миру.',
    type: 'conclusion',
    quote: '«Аналитическая машина не претендует на создание чего-либо. Она может делать всё, что мы умеем ей приказать.»',
    quoteAuthor: '— Ада Лавлейс, 1843'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/2f4e9e3d-6051-4345-acc0-e8098ae6c10b/files/a0bb19f2-9002-4e70-86ff-fe3720db7699.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-5xl">
          <div className="bg-card border-4 border-primary rounded-lg shadow-2xl p-12 animate-fade-in" style={{ borderStyle: 'double' }}>
            {slide.type === 'cover' && (
              <div className="text-center space-y-6">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-primary shadow-lg" style={{ borderStyle: 'double' }}>
                  <img src={slide.image} alt="Ada Lovelace" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-7xl font-bold text-primary mb-4">{slide.title}</h1>
                <p className="text-4xl text-secondary font-semibold">{slide.subtitle}</p>
                <p className="text-2xl text-muted-foreground mt-6">{slide.content}</p>
              </div>
            )}

            {(slide.type === 'intro' || slide.type === 'biography' || slide.type === 'education' || 
              slide.type === 'collaboration' || slide.type === 'machine' || slide.type === 'notes' || 
              slide.type === 'vision' || slide.type === 'personal' || slide.type === 'death') && (
              <div className="space-y-6">
                <div className="border-b-4 border-secondary pb-4 mb-6" style={{ borderStyle: 'double' }}>
                  <h2 className="text-5xl font-bold text-primary mb-2">{slide.title}</h2>
                  <p className="text-2xl text-secondary">{slide.subtitle}</p>
                </div>
                
                {slide.image && (
                  <div className="float-right ml-6 mb-6 w-72">
                    <div className="border-4 border-secondary rounded-lg overflow-hidden shadow-lg" style={{ borderStyle: 'double' }}>
                      <img src={slide.image} alt={slide.title} className="w-full h-auto" />
                    </div>
                  </div>
                )}

                <p className="text-xl leading-relaxed text-foreground mb-6">{slide.content}</p>
                
                <ul className="space-y-3">
                  {slide.bulletPoints?.map((point, index) => (
                    <li key={index} className="flex items-start text-lg">
                      <span className="text-primary mr-3 text-2xl">•</span>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {slide.type === 'algorithm' && (
              <div className="space-y-6">
                <div className="border-b-4 border-secondary pb-4 mb-6" style={{ borderStyle: 'double' }}>
                  <h2 className="text-5xl font-bold text-primary mb-2">{slide.title}</h2>
                  <p className="text-2xl text-secondary">{slide.subtitle}</p>
                </div>
                
                <p className="text-xl leading-relaxed text-foreground mb-6">{slide.content}</p>
                
                <div className="bg-muted border-4 border-secondary rounded-lg p-6 font-mono text-sm" style={{ borderStyle: 'double' }}>
                  <pre className="whitespace-pre-wrap text-foreground">{slide.codeExample}</pre>
                </div>
              </div>
            )}

            {slide.type === 'facts' && (
              <div className="space-y-6">
                <div className="border-b-4 border-secondary pb-4 mb-6" style={{ borderStyle: 'double' }}>
                  <h2 className="text-5xl font-bold text-primary mb-2">{slide.title}</h2>
                  <p className="text-2xl text-secondary">{slide.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {slide.bulletPoints?.map((fact, index) => (
                    <div key={index} className="bg-muted border-2 border-secondary rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <p className="text-lg text-foreground">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(slide.type === 'legacy' || slide.type === 'contribution') && (
              <div className="space-y-6">
                <div className="border-b-4 border-secondary pb-4 mb-6" style={{ borderStyle: 'double' }}>
                  <h2 className="text-5xl font-bold text-primary mb-2">{slide.title}</h2>
                  <p className="text-2xl text-secondary">{slide.subtitle}</p>
                </div>
                
                {slide.content && <p className="text-xl leading-relaxed text-foreground mb-6">{slide.content}</p>}
                
                <div className="space-y-4">
                  {slide.bulletPoints?.map((point, index) => (
                    <div key={index} className="bg-muted border-l-4 border-primary rounded-r-lg p-4 hover:bg-accent/10 transition-colors">
                      <p className="text-lg text-foreground font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'conclusion' && (
              <div className="space-y-8 text-center">
                <div className="border-b-4 border-secondary pb-4 mb-6" style={{ borderStyle: 'double' }}>
                  <h2 className="text-5xl font-bold text-primary mb-2">{slide.title}</h2>
                  <p className="text-2xl text-secondary">{slide.subtitle}</p>
                </div>
                
                <p className="text-2xl leading-relaxed text-foreground mb-8">{slide.content}</p>
                
                <div className="bg-muted border-4 border-primary rounded-lg p-8 max-w-2xl mx-auto" style={{ borderStyle: 'double' }}>
                  <p className="text-2xl italic text-foreground mb-4">{slide.quote}</p>
                  <p className="text-xl text-secondary">{slide.quoteAuthor}</p>
                </div>

                <div className="mt-12 pt-8 border-t-2 border-secondary">
                  <p className="text-3xl font-bold text-primary">Спасибо за внимание!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-card/95 backdrop-blur border-t-4 border-primary p-4 relative z-20" style={{ borderStyle: 'double' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            disabled={currentSlide === 0}
          >
            <Icon name="ChevronLeft" className="mr-2" />
            Назад
          </Button>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-muted hover:bg-secondary'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button
              onClick={nextSlide}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90"
              disabled={currentSlide === slides.length - 1}
            >
              Далее
              <Icon name="ChevronRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
