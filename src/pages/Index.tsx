import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Рисование и живопись',
      description: 'Откройте художника в себе с помощью красок и кистей',
      image: '/img/57b173d8-b673-43d9-8a0b-7f96277caa6c.jpg',
      category: 'Творчество',
      difficulty: 'Для начинающих',
      price: 'от 2000 ₽'
    },
    {
      id: 2,
      title: 'Фотография',
      description: 'Научитесь создавать потрясающие снимки',
      image: '/img/4cdd9bcb-d7f3-4f4c-b3c0-f7393dacbe49.jpg',
      category: 'Искусство',
      difficulty: 'Средний',
      price: 'от 5000 ₽'
    },
    {
      id: 3,
      title: 'Кулинария',
      description: 'Готовьте изысканные блюда как профессионал',
      image: '/img/a3c2c663-2130-4479-b4bf-e0936cdda2ab.jpg',
      category: 'Практика',
      difficulty: 'Для начинающих',
      price: 'от 3000 ₽'
    }
  ];

  const mentors = [
    {
      name: 'Анна Петрова',
      specialty: 'Художница и преподаватель',
      experience: '5 лет',
      rating: 4.9,
      students: 120
    },
    {
      name: 'Михаил Сидоров',
      specialty: 'Профессиональный фотограф',
      experience: '8 лет',
      rating: 4.8,
      students: 95
    },
    {
      name: 'Елена Козлова',
      specialty: 'Шеф-повар',
      experience: '12 лет',
      rating: 5.0,
      students: 200
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="bg-warm-cream shadow-sm border-b border-warm-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" size={24} className="text-primary" />
              <span className="text-xl font-bold font-inter-bold text-warm-brown">HobbySearch</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-warm-brown/80 hover:text-primary transition-colors">Каталог</a>
              <a href="#test" className="text-warm-brown/80 hover:text-primary transition-colors">Тестирование</a>
              <a href="#mentors" className="text-warm-brown/80 hover:text-primary transition-colors">Менторы</a>
              <a href="#search" className="text-warm-brown/80 hover:text-primary transition-colors">Поиск</a>
            </nav>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 shadow-md">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-beige via-warm-cream to-warm-sand py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-inter-bold text-warm-brown mb-8 leading-tight">
            Найди свое идеальное хобби
          </h1>
          <p className="text-xl text-warm-brown/80 mb-10 max-w-2xl mx-auto font-inter leading-relaxed">
            Мы поможем вам открыть новые увлечения и найти менторов для развития ваших талантов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              <Icon name="Search" size={20} className="mr-2" />
              Пройти тест
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter-bold text-warm-brown mb-16 text-center">
            Популярные хобби
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby) => (
              <Card key={hobby.id} className="hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden border-warm-sand/20 hover:border-primary/30">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/15 text-primary hover:bg-primary/25 rounded-full">
                      {hobby.category}
                    </Badge>
                    <Badge variant="outline" className="text-secondary border-secondary/30 rounded-full">
                      {hobby.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="font-inter-bold text-lg text-warm-brown">{hobby.title}</CardTitle>
                  <CardDescription className="font-inter text-warm-brown/70">{hobby.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{hobby.price}</span>
                    <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section id="test" className="py-20 bg-gradient-to-br from-white to-warm-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-inter-bold text-warm-brown mb-8">
            Не знаете, что выбрать?
          </h2>
          <p className="text-lg text-warm-brown/80 mb-10 font-inter">
            Пройдите наш тест и мы подберем хобби специально для вас
          </p>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-10 shadow-lg border border-warm-sand/30">
            <div className="flex items-center justify-center mb-6">
              <Icon name="Brain" size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold font-inter-bold mb-6 text-warm-brown">
              Персональный тест на определение хобби
            </h3>
            <p className="text-warm-brown/80 mb-8 font-inter text-lg">
              Ответьте на 10 простых вопросов, и мы найдем идеальное хобби для вас
            </p>
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              <Icon name="Play" size={20} className="mr-2" />
              Начать тест
            </Button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-inter-bold text-warm-brown mb-16 text-center">
            Наши менторы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl border-warm-sand/20 hover:border-primary/30">
                <CardHeader className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-inter-bold text-warm-brown">{mentor.name}</CardTitle>
                  <CardDescription className="font-inter text-warm-brown/70">{mentor.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-warm-brown/60">Опыт:</span>
                      <span className="font-semibold text-warm-brown">{mentor.experience}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-warm-brown/60">Рейтинг:</span>
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-secondary mr-1" />
                        <span className="font-semibold text-warm-brown">{mentor.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-warm-brown/60">Учеников:</span>
                      <span className="font-semibold text-warm-brown">{mentor.students}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary text-white hover:bg-primary/90 rounded-full py-3 shadow-md hover:shadow-lg transition-all">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-20 bg-gradient-to-br from-warm-beige to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-inter-bold text-warm-brown mb-8">
            Найти увлечение
          </h2>
          <p className="text-lg text-warm-brown/80 mb-10 font-inter">
            Поиск по всем доступным хобби и курсам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              placeholder="Введите название хобби или интерес..."
              className="flex-1 h-12 text-lg rounded-full px-6 border-warm-sand/50 focus:border-primary transition-colors"
            />
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {['Рисование', 'Музыка', 'Спорт', 'Кулинария', 'Рукоделие', 'Фотография', 'Танцы'].map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/15 rounded-full px-4 py-2 border-warm-sand/50 hover:border-primary/50 transition-all">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-warm-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Compass" size={24} className="text-primary" />
                <span className="text-xl font-bold font-inter-bold">HobbySearch</span>
              </div>
              <p className="text-warm-cream/80 font-inter">
                Находим идеальные хобби для каждого
              </p>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Хобби</h3>
              <ul className="space-y-3 text-warm-cream/80 font-inter">
                <li><a href="#" className="hover:text-warm-cream transition-colors">Творчество</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Спорт</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Музыка</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Кулинария</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Сервисы</h3>
              <ul className="space-y-3 text-warm-cream/80 font-inter">
                <li><a href="#" className="hover:text-warm-cream transition-colors">Тестирование</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Менторы</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-warm-cream transition-colors">Поиск</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Контакты</h3>
              <ul className="space-y-3 text-warm-cream/80 font-inter">
                <li>info@hobbysearch.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-cream/20 mt-12 pt-8 text-center text-warm-cream/80 font-inter">
            <p>&copy; 2024 HobbySearch. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;