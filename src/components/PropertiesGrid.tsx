import PropertyCard from "./PropertyCard";

const PropertiesGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Коттедж Премиум",
      price: "15 500 000 ₽",
      area: "280",
      plotSize: "25",
      stage: "Готовый дом" as const,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      rooms: 4,
    },
    {
      id: 2,
      title: "Дом Классик",
      price: "8 900 000 ₽",
      area: "220",
      plotSize: "20",
      stage: "Внешняя отделка" as const,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      rooms: 3,
    },
    {
      id: 3,
      title: "Вилла Элит",
      price: "22 800 000 ₽",
      area: "380",
      plotSize: "35",
      stage: "Готовый дом" as const,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
      rooms: 5,
    },
    {
      id: 4,
      title: "Коттедж Стандарт",
      price: "5 200 000 ₽",
      area: "180",
      plotSize: "18",
      stage: "Коробка" as const,
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop",
      rooms: 3,
    },
    {
      id: 5,
      title: "Особняк Люкс",
      price: "28 500 000 ₽",
      area: "450",
      plotSize: "40",
      stage: "Внешняя отделка" as const,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      rooms: 6,
    },
    {
      id: 6,
      title: "Дом Комфорт",
      price: "12 300 000 ₽",
      area: "240",
      plotSize: "22",
      stage: "Готовый дом" as const,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      rooms: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Наши объекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите коттедж на подходящем этапе строительства
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesGrid;
