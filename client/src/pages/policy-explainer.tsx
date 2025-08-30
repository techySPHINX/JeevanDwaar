import { Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { AudioPlayer } from "@/components/policy/audio-player";
import { PolicyFactsGrid } from "@/components/policy/policy-card";
import { Button } from "@/components/ui/button";

export default function PolicyExplainer() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const audioSummaries = [
    {
      title: isHindi ? "मुख्य बहिष्करण" : "Main Exclusions",
      icon: <Mic className="text-primary" size={16} />,
    },
    {
      title: isHindi ? "क्लेम प्रक्रिया" : "Claim Process",
      icon: <Mic className="text-primary" size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isHindi ? "पॉलिसी समझाने वाला" : "Policy Explainer"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "आवाज़ में सुनें, आसान भाषा में समझें"
              : "Listen in voice, understand in simple language"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Voice Summary Player */}
            <AudioPlayer
              title={isHindi ? "प्रीमियम और कवरेज" : "Premium and Coverage"}
              duration="0:30"
              language={isHindi ? "हिंदी में समझाया गया" : "Explained in Hindi"}
            />

            {/* Quick Audio Summaries */}
            <div className="space-y-3">
              {audioSummaries.map((summary, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-accent rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {summary.icon}
                    <span className="font-medium">{summary.title}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary hover:text-primary/80"
                    data-testid={`play-audio-${index}`}
                  >
                    <div className="text-2xl">▶️</div>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Icon-based Key Facts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              {isHindi ? "मुख्य तथ्य" : "Key Facts"}
            </h3>

            <PolicyFactsGrid />
          </div>
        </div>

        {/* Additional Information Section */}
        <section className="mt-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              {isHindi ? "महत्वपूर्ण दस्तावेज" : "Important Documents"}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary text-2xl">📄</div>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "पॉलिसी दस्तावेज" : "Policy Document"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isHindi
                      ? "पूर्ण नियम और शर्तें"
                      : "Complete terms and conditions"}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid="download-policy"
                  >
                    {isHindi ? "डाउनलोड करें" : "Download"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-chart-2 text-2xl">📋</div>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "क्लेम फॉर्म" : "Claim Form"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isHindi
                      ? "बीमा राशि प्राप्त करने के लिए"
                      : "To claim insurance amount"}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid="download-claim-form"
                  >
                    {isHindi ? "डाउनलोड करें" : "Download"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-chart-3 text-2xl">📊</div>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {isHindi ? "प्रीमियम कैलकुलेटर" : "Premium Calculator"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isHindi ? "अपना प्रीमियम जानें" : "Calculate your premium"}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid="open-calculator"
                  >
                    {isHindi ? "गणना करें" : "Calculate"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
