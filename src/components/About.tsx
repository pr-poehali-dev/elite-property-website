import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Строим дома мечты уже 15 лет
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы специализируемся на строительстве элитных коттеджей
              премиум-класса с большими участками. Каждый объект создается с
              вниманием к деталям и высочайшим стандартам качества.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Icon name="Award" className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Гарантия качества
                  </h3>
                  <p className="text-gray-600">5 лет гарантии на все работы</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Icon name="Users" className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Опытная команда
                  </h3>
                  <p className="text-gray-600">
                    Более 50 специалистов высокой квалификации
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Icon name="Clock" className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Соблюдение сроков
                  </h3>
                  <p className="text-gray-600">Сдаем объекты точно в срок</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
              alt="Строительство дома"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Построенных домов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
