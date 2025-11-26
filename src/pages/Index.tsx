import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Диагностика',
      description: 'Компьютерная диагностика всех систем автомобиля на профессиональном оборудовании'
    },
    {
      icon: 'Settings',
      title: 'Ремонт двигателя',
      description: 'Капитальный и текущий ремонт двигателей BMW и Audi любой сложности'
    },
    {
      icon: 'Gauge',
      title: 'Ходовая часть',
      description: 'Ремонт подвески, замена амортизаторов, диагностика рулевого управления'
    },
    {
      icon: 'Zap',
      title: 'Электрика',
      description: 'Диагностика и ремонт электрооборудования, бортовых систем и датчиков'
    },
    {
      icon: 'Wind',
      title: 'Кондиционер',
      description: 'Заправка, диагностика и ремонт систем климат-контроля'
    },
    {
      icon: 'Cog',
      title: 'ТО и сервис',
      description: 'Плановое техническое обслуживание по регламенту производителя'
    }
  ];

  const pricing = [
    { service: 'Компьютерная диагностика', price: '1 500 ₽' },
    { service: 'Замена масла и фильтров', price: 'от 3 000 ₽' },
    { service: 'Замена тормозных колодок', price: 'от 5 000 ₽' },
    { service: 'Ремонт подвески', price: 'от 8 000 ₽' },
    { service: 'Диагностика двигателя', price: '2 500 ₽' },
    { service: 'Заправка кондиционера', price: '3 500 ₽' }
  ];

  const team = [
    { name: 'Александр Петров', role: 'Главный механик', experience: '15 лет опыта' },
    { name: 'Дмитрий Сидоров', role: 'Специалист по диагностике', experience: '12 лет опыта' },
    { name: 'Михаил Иванов', role: 'Мастер по ходовой', experience: '10 лет опыта' },
    { name: 'Сергей Козлов', role: 'Электрик', experience: '8 лет опыта' }
  ];

  const reviews = [
    {
      name: 'Андрей М.',
      rating: 5,
      text: 'Отличный сервис! Быстро нашли проблему с двигателем моего BMW X5. Работают профессионалы.',
      car: 'BMW X5 F15'
    },
    {
      name: 'Елена К.',
      rating: 5,
      text: 'Делала ТО своей Audi A4. Все четко, быстро, по разумной цене. Рекомендую!',
      car: 'Audi A4 B9'
    },
    {
      name: 'Максим Р.',
      rating: 5,
      text: 'Ребята настоящие мастера своего дела. Отремонтировали подвеску на BMW 5 серии за день.',
      car: 'BMW 520i G30'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/25691348-6cac-4ff3-9a26-25f7c2fd7083/files/b6b6f06d-ee77-4121-b771-dc98a6492d85.jpg',
    'https://cdn.poehali.dev/projects/25691348-6cac-4ff3-9a26-25f7c2fd7083/files/15e0cd10-c615-427c-a44e-5f510d2384d0.jpg',
    'https://cdn.poehali.dev/projects/25691348-6cac-4ff3-9a26-25f7c2fd7083/files/89ec6487-2c0d-4832-ae33-df7fc843708e.jpg'
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold">RBK</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Премиальный<br />
                <span className="text-primary">сервис</span> для<br />
                BMW & Audi
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный ремонт и обслуживание автомобилей премиум-класса на современном оборудовании
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-muted-foreground">авто обслужено</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/25691348-6cac-4ff3-9a26-25f7c2fd7083/files/b6b6f06d-ee77-4121-b771-dc98a6492d85.jpg" 
                alt="RBK Auto Service" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Оригинальные запчасти</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по ремонту и обслуживанию BMW и Audi</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:border-primary transition-colors animate-fade-in hover-scale">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0">
                {pricing.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-6 border-b last:border-b-0 hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-lg">{item.service}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              * Точная стоимость работ определяется после диагностики
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Сертифицированные специалисты с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{member.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ и оснащение сервиса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg hover-scale cursor-pointer group">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-sm">{review.car}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес
                  </CardTitle>
                  <CardDescription className="text-base">
                    г. Москва, ул. Автомобильная, 15к2
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={24} className="text-primary" />
                    Телефон
                  </CardTitle>
                  <CardDescription className="text-base">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-primary" />
                    Режим работы
                  </CardTitle>
                  <CardDescription className="text-base">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Записаться на ремонт</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Марка автомобиля" />
                <Textarea placeholder="Опишите проблему" rows={4} />
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold">RBK</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© 2024 RBK Auto Service. Все права защищены.</p>
              <p className="text-sm text-muted-foreground mt-2">Премиальный сервис BMW и Audi</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
