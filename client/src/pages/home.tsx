import { useState } from 'react';
import { Search, GraduationCap, Shield, Calendar, XCircle, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { useLanguage } from '@/lib/language-context';
import { ChatbotInterface } from '@/components/chatbot/chatbot-interface';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { language } = useLanguage();
  const isHindi = language === 'hindi';

  const stats = [
    { value: "10 लाख+", label: isHindi ? "संतुष्ट ग्राहक" : "Satisfied Customers" },
    { value: "₹25/माह", label: isHindi ? "न्यूनतम प्रीमियम" : "Minimum Premium" },
    { value: "24/7", label: isHindi ? "ग्राहक सेवा" : "Customer Service" }
  ];

  const threeThings = [
    {
      icon: <Calendar className="text-primary text-2xl" />,
      title: isHindi ? "कवरेज अवधि" : "Coverage Period",
      description: isHindi ? "आपकी पॉलिसी कितने साल तक चलेगी" : "How long your policy will run",
      example: isHindi ? "उदाहरण: 20 साल" : "Example: 20 years",
      bgColor: "bg-primary/10"
    },
    {
      icon: <XCircle className="text-destructive text-2xl" />,
      title: isHindi ? "मुख्य बहिष्करण" : "Main Exclusion",
      description: isHindi ? "यह स्थिति कवर नहीं होती" : "This condition is not covered",
      example: isHindi ? "आत्महत्या (2 साल)" : "Suicide (2 years)",
      bgColor: "bg-destructive/10"
    },
    {
      icon: <Phone className="text-chart-2 text-2xl" />,
      title: isHindi ? "क्लेम हेल्पलाइन" : "Claim Helpline",
      description: isHindi ? "तुरंत सहायता के लिए कॉल करें" : "Call for immediate assistance",
      example: "1800-22-9090",
      bgColor: "bg-chart-2/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {isHindi ? (
                    <>
                      जीवन बीमा{" "}
                      <span className="text-primary">सरल बनाया</span>
                    </>
                  ) : (
                    <>
                      Life Insurance{" "}
                      <span className="text-primary">Made Simple</span>
                    </>
                  )}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {isHindi 
                    ? "आपकी भाषा में • Life Insurance Made Simple – In Your Language"
                    : "In Your Language • आपकी भाषा में – जीवन बीमा सरल बनाया"
                  }
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isHindi 
                    ? "विश्वसनीय, पारदर्शी, और समझने योग्य जीवन बीमा। ग्रामीण और अर्ध-शहरी परिवारों के लिए विशेष रूप से डिज़ाइन किया गया।"
                    : "Trusted, transparent, and understandable life insurance. Specially designed for rural and semi-urban families."
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/policy-explainer">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto"
                    data-testid="find-policy-button"
                  >
                    <Search className="mr-2" size={20} />
                    {isHindi ? "मेरी पॉलिसी खोजें" : "Find My Policy"}
                  </Button>
                </Link>
                <Link href="/education">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5"
                    data-testid="learn-insurance-button"
                  >
                    <GraduationCap className="mr-2" size={20} />
                    {isHindi ? "बीमा के बारे में जानें" : "Learn About Insurance"}
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Happy Indian family representing life insurance security" 
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Trust Indicators */}
              <Card className="absolute -top-4 -left-4 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="text-primary" size={16} />
                    <span className="text-sm font-medium">IRDAI Approved</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="absolute -bottom-4 -right-4 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-yellow-500">⭐</div>
                    <span className="text-sm font-medium">4.8/5 Rating</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Three Things Section */}
      <section className="py-16 bg-destructive/5 border-y-2 border-destructive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-destructive mb-4 flex items-center justify-center">
              <AlertTriangle className="mr-2" size={28} />
              {isHindi ? "3 बातें जो आपको पता होनी चाहिए" : "3 Things You Must Know"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi ? "हर पॉलिसी के लिए महत्वपूर्ण जानकारी" : "Important information for every policy"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {threeThings.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="p-3 bg-accent rounded-lg">
                    <span className="font-bold text-accent-foreground">{item.example}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "आज ही शुरू करें" : "Get Started Today"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi ? "आपकी जरूरतों के अनुसार सबसे अच्छी पॉलिसी चुनें" : "Choose the best policy according to your needs"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/policy-explainer">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Shield className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "पॉलिसी समझें" : "Understand Policy"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isHindi ? "आसान भाषा में जानें" : "Learn in simple language"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ai-recommender">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 text-chart-2 text-5xl">🤖</div>
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "AI सुझाव" : "AI Recommendation"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isHindi ? "व्यक्तिगत सुझाव पाएं" : "Get personalized suggestions"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/education">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="mx-auto mb-4 text-chart-3" size={48} />
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "शिक्षा केंद्र" : "Education Hub"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isHindi ? "वीडियो और गाइड" : "Videos and guides"}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/mitra">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 text-chart-4 text-5xl">👥</div>
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "मित्र सहायता" : "Mitra Support"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isHindi ? "स्थानीय सहायक" : "Local assistance"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-40"
        onClick={() => setIsChatOpen(!isChatOpen)}
        data-testid="chat-button"
      >
        💬
      </Button>

      {/* Floating Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <ChatbotInterface onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </div>
  );
}
