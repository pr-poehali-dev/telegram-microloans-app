import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function LoanApplication() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    passport: '',
    income: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы рассмотрим вашу заявку в течение 5 минут.',
      });
      setFormData({ fullName: '', phone: '', passport: '', income: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Заявка на займ</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Полное имя</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Иванов Иван Иванович"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="passport">Серия и номер паспорта</Label>
            <Input
              id="passport"
              name="passport"
              placeholder="1234 567890"
              value={formData.passport}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="income">Ежемесячный доход</Label>
            <Input
              id="income"
              name="income"
              type="number"
              placeholder="50000"
              value={formData.income}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Icon name="Info" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900">
                Ваши данные защищены и используются только для рассмотрения заявки
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-heading font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
