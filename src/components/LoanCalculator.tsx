import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(15000);
  const [term, setTerm] = useState(14);
  
  const interestRate = 1.5;
  const totalAmount = amount + (amount * interestRate * term) / 100;
  const dailyPayment = totalAmount / term;

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Калькулятор займа</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-medium">Сумма займа</Label>
            <span className="text-2xl font-heading font-bold text-primary">
              {amount.toLocaleString('ru-RU')} ₽
            </span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={(value) => setAmount(value[0])}
            min={5000}
            max={50000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>5 000 ₽</span>
            <span>50 000 ₽</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-medium">Срок займа</Label>
            <span className="text-2xl font-heading font-bold text-primary">
              {term} дней
            </span>
          </div>
          <Slider
            value={[term]}
            onValueChange={(value) => setTerm(value[0])}
            min={7}
            max={30}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>7 дней</span>
            <span>30 дней</span>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Ставка</span>
            <span className="font-medium">{interestRate}% в день</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Ежедневный платеж</span>
            <span className="font-medium">{dailyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="text-lg font-heading font-semibold">К возврату</span>
            <span className="text-3xl font-heading font-bold text-primary">
              {totalAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
