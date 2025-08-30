import { Clock, Languages, Lightbulb, Play, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language-context";
import { LanguageSelector } from "@/components/ui/language-toggle";

export default function EducationHub() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const quickTips = [
    {
      step: "1",
      title: isHindi ? "जल्दी शुरू करें" : "Start Early",
      description: isHindi
        ? "कम उम्र = कम प्रीमियम"
        : "Lower age = Lower premium",
    },
    {
      step: "2",
      title: isHindi ? "सच्चाई बताएं" : "Be Honest",
      description: isHindi
        ? "स्वास्थ्य की जानकारी छुपाएं नहीं"
        : "Don't hide health information",
    },
    {
      step: "3",
      title: isHindi ? "नॉमिनी चुनें" : "Choose Nominee",
      description: isHindi
        ? "विश्वसनीय व्यक्ति का नाम दें"
        : "Name a trusted person",
    },
  ];

  const faqQuestions = [
    isHindi
      ? "बीमा राशि कितनी होनी चाहिए?"
      : "How much insurance should I have?",
    isHindi
      ? "प्रीमियम भुगतान न करने पर क्या होगा?"
      : "What happens if I don't pay premium?",
    isHindi ? "क्लेम में कितना समय लगता है?" : "How long does a claim take?",
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isHindi ? "शिक्षा केंद्र" : "Education Hub"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "बीमे को समझें, सही फैसला लें"
              : "Understand insurance, make the right decision"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Learning */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative bg-gradient-to-br from-chart-2/20 to-chart-4/20 aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
                  alt={
                    isHindi ? "बीमा शिक्षा वीडियो" : "Insurance education video"
                  }
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Button
                      size="lg"
                      className="w-20 h-20 rounded-full mb-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50"
                      data-testid="main-video-play"
                    >
                      <Play size={32} className="text-white" />
                    </Button>
                    <h3 className="text-xl font-semibold mb-2">
                      {isHindi
                        ? "उम्र के साथ प्रीमियम क्यों बढ़ता है?"
                        : "Why does premium increase with age?"}
                    </h3>
                    <p className="text-white/90">
                      {isHindi
                        ? "छोटे पेड़ और बड़े पेड़ की कहानी"
                        : "The story of young tree and old tree"}
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-muted-foreground" size={16} />
                    <span className="text-sm text-muted-foreground">
                      3:45 मिनट
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      {isHindi ? "भाषा:" : "Language:"}
                    </span>
                    <Select defaultValue="hindi">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hindi">हिंदी</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="telugu">తెలుగు</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Videos */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative bg-gradient-to-br from-destructive/20 to-chart-5/20 p-6 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle
                      className="text-destructive mb-2 mx-auto"
                      size={48}
                    />
                    <h4 className="font-semibold">
                      {isHindi ? "सामान्य बहिष्करण" : "Common Exclusions"}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {isHindi
                      ? "आत्महत्या, युद्ध, प्रतीक्षा अवधि"
                      : "Suicide, war, waiting period"}
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative bg-gradient-to-br from-chart-2/20 to-primary/20 p-6 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle
                      className="text-chart-2 mb-2 mx-auto"
                      size={48}
                    />
                    <h4 className="font-semibold">
                      {isHindi ? "क्लेम प्रक्रिया" : "Claim Process"}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {isHindi
                      ? "3 आसान चरणों में क्लेम करें"
                      : "Make a claim in 3 easy steps"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Lightbulb className="text-chart-3 mr-2" size={20} />
                  {isHindi ? "त्वरित सुझाव" : "Quick Tips"}
                </h3>

                <div className="space-y-4">
                  {quickTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-accent rounded-lg"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">
                          {tip.step}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{tip.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {tip.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Language Toggle */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Languages className="text-primary mr-2" size={20} />
                  {isHindi ? "भाषा चुनें" : "Choose Language"}
                </h3>

                <LanguageSelector />
              </CardContent>
            </Card>

            {/* FAQ Quick Access */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {isHindi
                    ? "अक्सर पूछे जाने वाले प्रश्न"
                    : "Frequently Asked Questions"}
                </h3>

                <div className="space-y-2">
                  {faqQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start p-3 h-auto text-sm hover:bg-accent"
                      data-testid={`faq-${index}`}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Modules */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {isHindi ? "सीखने के मॉड्यूल" : "Learning Modules"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: isHindi ? "बीमा बुनियादी बातें" : "Insurance Basics",
                icon: "📚",
                level: isHindi ? "शुरुआती" : "Beginner",
              },
              {
                title: isHindi ? "प्रीमियम गणना" : "Premium Calculation",
                icon: "🧮",
                level: isHindi ? "मध्यम" : "Intermediate",
              },
              {
                title: isHindi ? "क्लेम प्रक्रिया" : "Claim Process",
                icon: "📋",
                level: isHindi ? "मध्यम" : "Intermediate",
              },
              {
                title: isHindi ? "कर लाभ" : "Tax Benefits",
                icon: "💰",
                level: isHindi ? "उन्नत" : "Advanced",
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <h3 className="font-semibold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {module.level}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid={`module-${index}`}
                  >
                    {isHindi ? "शुरू करें" : "Start Learning"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
