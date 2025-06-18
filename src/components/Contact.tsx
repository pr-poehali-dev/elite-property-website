import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-blue-100">
            Готовы обсудить ваш будущий дом?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-orange-500 p-3 rounded-lg mr-4">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Адрес офиса</h3>
                <p className="text-blue-100">
                  г. Москва, ул. Строителей, д. 15
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500 p-3 rounded-lg mr-4">
                <Icon name="Phone" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-blue-100">+7 (495) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500 p-3 rounded-lg mr-4">
                <Icon name="Mail" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100">info@cottages-elite.ru</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500 p-3 rounded-lg mr-4">
                <Icon name="Clock" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Время работы</h3>
                <p className="text-blue-100">Пн-Вс: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Ваше имя"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                placeholder="Телефон"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                placeholder="Email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Textarea
                placeholder="Сообщение"
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
