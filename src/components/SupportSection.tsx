import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SupportSection() {
  const supportChannels = [
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      description: 'Ответим в течение 2 минут',
      action: 'Открыть чат',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      description: '8 (800) 555-35-35',
      action: 'Позвонить',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'support@loans.ru',
      action: 'Написать письмо',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const handleContact = (channel: string) => {
    console.log(`Opening ${channel}`);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Служба поддержки</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {supportChannels.map((channel, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${channel.color} flex items-center justify-center flex-shrink-0`}>
                <Icon name={channel.icon as any} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleContact(channel.title)}
              className="font-medium"
            >
              {channel.action}
              <Icon name="ChevronRight" className="w-4 h-4 ml-1" />
            </Button>
          </div>
        ))}

        <div className="pt-4 border-t">
          <div className="space-y-3">
            <h4 className="font-heading font-semibold">Часто задаваемые вопросы</h4>
            
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Как быстро рассматривается заявка?</span>
                <Icon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 p-3 text-sm text-muted-foreground">
                Заявки рассматриваются автоматически в течение 5 минут. После одобрения деньги поступают на карту в течение 15 минут.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Какие документы нужны?</span>
                <Icon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 p-3 text-sm text-muted-foreground">
                Для оформления займа достаточно паспорта РФ и номера телефона. Никаких справок о доходах не требуется.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Можно ли продлить срок займа?</span>
                <Icon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 p-3 text-sm text-muted-foreground">
                Да, вы можете продлить займ на 7-30 дней. Для этого свяжитесь со службой поддержки за день до окончания срока.
              </p>
            </details>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
