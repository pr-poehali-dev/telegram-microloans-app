import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function CreditScore() {
  const score = 750;
  const maxScore = 850;
  const percentage = (score / maxScore) * 100;

  const getScoreLevel = (score: number) => {
    if (score >= 750) return { level: 'Отличный', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 650) return { level: 'Хороший', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 550) return { level: 'Средний', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { level: 'Низкий', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const scoreInfo = getScoreLevel(score);

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Кредитный рейтинг</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 py-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-secondary"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - percentage / 100)}`}
                className="text-primary transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-heading font-bold text-primary">{score}</span>
              <span className="text-sm text-muted-foreground">из {maxScore}</span>
            </div>
          </div>
          
          <div className={`px-6 py-2 rounded-full ${scoreInfo.bgColor}`}>
            <span className={`font-heading font-semibold ${scoreInfo.color}`}>
              {scoreInfo.level} рейтинг
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Icon name="CheckCircle2" className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Одобрение до 50 000 ₽</p>
              <p className="text-sm text-muted-foreground">Доступно с вашим рейтингом</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Icon name="TrendingUp" className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">Пониженная ставка</p>
              <p className="text-sm text-muted-foreground">1.5% вместо стандартных 2%</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">Быстрое решение</p>
              <p className="text-sm text-muted-foreground">Заявка рассматривается за 5 минут</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground text-center">
            Рейтинг обновляется после каждой успешной выплаты
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
