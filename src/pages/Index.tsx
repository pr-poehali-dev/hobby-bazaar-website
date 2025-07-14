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
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" size={24} className="text-primary" />
              <span className="text-xl font-bold font-inter-bold text-gray-900">HobbySearch</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#test" className="text-gray-700 hover:text-primary transition-colors">Тестирование</a>
              <a href="#mentors" className="text-gray-700 hover:text-primary transition-colors">Менторы</a>
              <a href="#search" className="text-gray-700 hover:text-primary transition-colors">Поиск</a>
            </nav>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-inter-bold text-gray-900 mb-6">
            Найди свое идеальное хобби
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-inter">
            Мы поможем вам открыть новые увлечения и найти менторов для развития ваших талантов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Icon name="Search" size={20} className="mr-2" />
              Пройти тест
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter-bold text-gray-900 mb-12 text-center">
            Популярные хобби
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <Card key={hobby.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {hobby.category}
                    </Badge>
                    <Badge variant="outline" className="text-secondary">
                      {hobby.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="font-inter-bold text-lg">{hobby.title}</CardTitle>
                  <CardDescription className="font-inter">{hobby.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{hobby.price}</span>
                    <Button className="bg-secondary text-white hover:bg-secondary/90">
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
      <section id="test" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-inter-bold text-gray-900 mb-6">
            Не знаете, что выбрать?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Пройдите наш тест и мы подберем хобби специально для вас
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Icon name="Brain" size={48} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-inter-bold mb-4">
              Персональный тест на определение хобби
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              Ответьте на 10 простых вопросов, и мы найдем идеальное хобби для вас
            </p>
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
              <Icon name="Play" size={20} className="mr-2" />
              Начать тест
            </Button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter-bold text-gray-900 mb-12 text-center">
            Наши менторы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-inter-bold">{mentor.name}</CardTitle>
                  <CardDescription className="font-inter">{mentor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Опыт:</span>
                      <span className="font-semibold">{mentor.experience}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Рейтинг:</span>
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-secondary mr-1" />
                        <span className="font-semibold">{mentor.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Учеников:</span>
                      <span className="font-semibold">{mentor.students}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary text-white hover:bg-primary/90">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-inter-bold text-gray-900 mb-6">
            Найти увлечение
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Поиск по всем доступным хобби и курсам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              placeholder="Введите название хобби или интерес..."
              className="flex-1 h-12 text-lg"
            />
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {['Рисование', 'Музыка', 'Спорт', 'Кулинария', 'Рукоделие', 'Фотография', 'Танцы'].map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Compass" size={24} className="text-primary" />
                <span className="text-xl font-bold font-inter-bold">HobbySearch</span>
              </div>
              <p className="text-gray-400 font-inter">
                Находим идеальные хобби для каждого
              </p>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Хобби</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-white transition-colors">Творчество</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Спорт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Музыка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кулинария</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Сервисы</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-white transition-colors">Тестирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Менторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поиск</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-inter-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li>info@hobbysearch.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-inter">
            <p>&copy; 2024 HobbySearch. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;