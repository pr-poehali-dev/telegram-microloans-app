import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoanCalculator from '@/components/LoanCalculator';
import CreditScore from '@/components/CreditScore';
import LoanApplication from '@/components/LoanApplication';
import SupportSection from '@/components/SupportSection';
import { Toaster } from '@/components/ui/toaster';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        <header className="text-center space-y-3 py-6 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
              <Icon name="Wallet" className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-heading font-bold text-foreground">
              МикроЗайм
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Быстрые займы от 5 000 до 50 000 ₽
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-white shadow-sm">
            <TabsTrigger 
              value="calculator" 
              className="flex flex-col items-center space-y-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="Calculator" className="w-5 h-5" />
              <span className="text-xs font-medium">Калькулятор</span>
            </TabsTrigger>
            <TabsTrigger 
              value="rating" 
              className="flex flex-col items-center space-y-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="TrendingUp" className="w-5 h-5" />
              <span className="text-xs font-medium">Рейтинг</span>
            </TabsTrigger>
            <TabsTrigger 
              value="application" 
              className="flex flex-col items-center space-y-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="FileText" className="w-5 h-5" />
              <span className="text-xs font-medium">Заявка</span>
            </TabsTrigger>
            <TabsTrigger 
              value="support" 
              className="flex flex-col items-center space-y-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="Headphones" className="w-5 h-5" />
              <span className="text-xs font-medium">Поддержка</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="mt-6">
            <LoanCalculator />
          </TabsContent>

          <TabsContent value="rating" className="mt-6">
            <CreditScore />
          </TabsContent>

          <TabsContent value="application" className="mt-6">
            <LoanApplication />
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <SupportSection />
          </TabsContent>
        </Tabs>

        <footer className="text-center text-sm text-muted-foreground py-6 border-t">
          <p>© 2024 МикроЗайм. Все права защищены.</p>
          <p className="mt-1">Лицензия ЦБ РФ № 001234567</p>
        </footer>
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
