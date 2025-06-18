import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  area: string;
  plotSize: string;
  stage: "Коробка" | "Внешняя отделка" | "Готовый дом";
  image: string;
  rooms: number;
}

const PropertyCard = ({
  title,
  price,
  area,
  plotSize,
  stage,
  image,
  rooms,
}: PropertyCardProps) => {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Коробка":
        return "bg-yellow-100 text-yellow-800";
      case "Внешняя отделка":
        return "bg-orange-100 text-orange-800";
      case "Готовый дом":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <Badge className={`absolute top-4 left-4 ${getStageColor(stage)}`}>
            {stage}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
        <div className="text-2xl font-bold text-orange-500 mb-4">{price}</div>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Icon name="Home" size={16} className="mr-2" />
            <span>{area} м²</span>
          </div>
          <div className="flex items-center">
            <Icon name="TreePine" size={16} className="mr-2" />
            <span>Участок {plotSize} соток</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bed" size={16} className="mr-2" />
            <span>{rooms} комнат</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-blue-900 hover:bg-blue-800">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
