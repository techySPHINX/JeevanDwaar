import { Shield, Calendar, XCircle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';

interface PolicyFactProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  valueColor: string;
  bgColor: string;
}

export function PolicyFact({ icon, title, description, value, valueColor, bgColor }: PolicyFactProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-center space-x-4">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-foreground">{title}</div>
          <div className="text-muted-foreground text-sm">{description}</div>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
          <div className="text-sm text-muted-foreground">
            {title.includes('Coverage') || title.includes('कवरेज') ? 'न्यूनतम' : 'मानक'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PolicyFactsGrid() {
  const { language } = useLanguage();
  const isHindi = language === 'hindi';

  const facts = [
    {
      icon: <Shield className="text-primary" size={20} />,
      title: isHindi ? "कवरेज राशि" : "Coverage Amount",
      description: isHindi ? "आपके परिवार को मिलने वाली राशि" : "Amount your family will receive",
      value: "₹5 लाख",
      valueColor: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Calendar className="text-chart-3" size={20} />,
      title: isHindi ? "पॉलिसी अवधि" : "Policy Duration",
      description: isHindi ? "कितने साल तक चलेगी" : "How long it will run",
      value: isHindi ? "20 साल" : "20 years",
      valueColor: "text-chart-3",
      bgColor: "bg-chart-3/10"
    },
    {
      icon: <XCircle className="text-destructive" size={20} />,
      title: isHindi ? "प्रतीक्षा अवधि" : "Waiting Period",
      description: isHindi ? "कुछ बीमारियों के लिए" : "For certain illnesses",
      value: isHindi ? "2 साल" : "2 years",
      valueColor: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: <Phone className="text-chart-2" size={20} />,
      title: isHindi ? "हेल्पलाइन" : "Helpline",
      description: isHindi ? "24×7 उपलब्ध" : "Available 24×7",
      value: "1800-22-9090",
      valueColor: "text-chart-2",
      bgColor: "bg-chart-2/10"
    }
  ];

  return (
    <div className="grid gap-4">
      {facts.map((fact, index) => (
        <PolicyFact key={index} {...fact} />
      ))}
    </div>
  );
}
