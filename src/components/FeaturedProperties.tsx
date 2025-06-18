import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Property {
  id: number;
  title: string;
  price: string;
  area: string;
  rooms: number;
  stage: "Коробка" | "Внешняя отделка" | "Готовый дом";
  image: string;
}

const FeaturedProperties = () => {
  const featuredProperties: Property[] = [
    {
      id: 1,
      title: "Коттедж Премиум",
      price: "15.5М ₽",
      area: "280м²",
      rooms: 4,
      stage: "Готовый дом",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Вилла Элит",
      price: "22.8М ₽",
      area: "380м²",
      rooms: 5,
      stage: "Готовый дом",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Особняк Люкс",
      price: "28.5М ₽",
      area: "450м²",
      rooms: 6,
      stage: "Внешняя отделка",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop",
    },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Готовый дом":
        return "bg-emerald-500/90 text-white";
      case "Внешняя отделка":
        return "bg-amber-500/90 text-white";
      default:
        return "bg-blue-500/90 text-white";
    }
  };

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Рекомендуемые объекты</h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>

      <div className="space-y-4">
        {featuredProperties.map((property) => (
          <Card
            key={property.id}
            className="bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="flex">
                <div className="relative w-24 h-20 flex-shrink-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute -top-1 -right-1 text-xs px-1.5 py-0.5 ${getStageColor(property.stage)}`}
                  >
                    {property.stage === "Готовый дом" ? "✓" : "●"}
                  </Badge>
                </div>
                <div className="flex-1 p-3">
                  <h4 className="font-semibold text-blue-900 text-sm mb-1">
                    {property.title}
                  </h4>
                  <div className="text-orange-600 font-bold text-sm mb-2">
                    {property.price}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={12} />
                      {property.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Bed" size={12} />
                      {property.rooms}к
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg">
        Смотреть все объекты
        <Icon name="ExternalLink" size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default FeaturedProperties;
