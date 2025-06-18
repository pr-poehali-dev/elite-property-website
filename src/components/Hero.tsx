import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FeaturedProperties from "./FeaturedProperties";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Сложный фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
          {/* Левая колонка - основной контент */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Премиум недвижимость
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] text-white">
                Элитные
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  коттеджи
                </span>
                <span className="text-4xl md:text-5xl font-light text-blue-200 block mt-2">
                  премиум-класса
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl leading-relaxed">
                Готовые дома и коттеджи под ключ на больших участках.
                <span className="text-white font-medium">
                  От коробки до полностью готового объекта.
                </span>
              </p>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              >
                <Icon
                  name="Home"
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                Смотреть объекты
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg backdrop-blur-sm bg-white/5 hover:shadow-xl transition-all duration-300"
              >
                <Icon
                  name="Phone"
                  className="mr-2 group-hover:rotate-12 transition-transform"
                />
                Получить консультацию
              </Button>
            </div>

            {/* Статистика */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-blue-200 text-sm">Готовых объектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-blue-200 text-sm">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-200 text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Правая колонка - виджет недвижимости */}
          <div className="lg:col-span-2">
            <FeaturedProperties />
          </div>
        </div>
      </div>

      {/* Анимированная стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Листайте вниз</span>
          <Icon name="ChevronDown" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
