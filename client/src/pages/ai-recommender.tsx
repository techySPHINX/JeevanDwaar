import { Bot } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { RecommendationForm } from '@/components/recommender/recommendation-form';

export default function AIRecommender() {
  const { language } = useLanguage();
  const isHindi = language === 'hindi';

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 to-primary/5 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Bot className="text-primary mr-2" size={40} />
            {isHindi ? "AI पॉलिसी सुझावकर्ता" : "AI Policy Recommender"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi 
              ? "कुछ सवालों के जवाब दें, सबसे अच्छी पॉलिसी पाएं"
              : "Answer a few questions, get the best policy recommendation"
            }
          </p>
        </div>

        <RecommendationForm />

        {/* Additional Information */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            {isHindi ? "सुझाव कैसे काम करता है" : "How Recommendations Work"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">
                {isHindi ? "व्यक्तिगत जानकारी" : "Personal Information"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isHindi 
                  ? "आपकी उम्र, आय और परिवार की जानकारी"
                  : "Your age, income and family details"
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-chart-2 font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">
                {isHindi ? "AI विश्लेषण" : "AI Analysis"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isHindi 
                  ? "उन्नत एल्गोरिदम आपके लिए सबसे अच्छा विकल्प खोजता है"
                  : "Advanced algorithm finds the best option for you"
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-chart-3 font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">
                {isHindi ? "व्यक्तिगत सुझाव" : "Personalized Recommendation"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isHindi 
                  ? "आपकी जरूरतों के अनुसार तैयार किया गया सुझाव"
                  : "Tailored recommendation based on your needs"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
