import { useState } from "react";
import {
  Users,
  UserCheck,
  Phone,
  Calendar,
  Star,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";
import { useQuery } from "@tanstack/react-query";
import { ChatbotInterface } from "@/components/chatbot/chatbot-interface";

interface MitraProfile {
  id: string;
  name: string;
  phone: string;
  area: string;
  languages: string[];
  rating: number;
  profileImage: string;
}

export default function Mitra() {
  const [selectedMitra, setSelectedMitra] = useState<MitraProfile | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  // Mock data for demonstration - in real app would come from API
  const mockMitras: MitraProfile[] = [
    {
      id: "1",
      name: "राजेश कुमार",
      phone: "+91 98765-43210",
      area: "गांव सेवा केंद्र, सोनीपत",
      languages: ["हिंदी", "English", "पंजाबी"],
      rating: 4.8,
      profileImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "2",
      name: "प्रिया शर्मा",
      phone: "+91 87654-32109",
      area: "जिला केंद्र, मेरठ",
      languages: ["हिंदी", "English"],
      rating: 4.9,
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616c-c-4ec6-bc-1168-a35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
  ];

  const { data: mitras = mockMitras } = useQuery({
    queryKey: ["mitras"],
    queryFn: () => {
      // Mock function to simulate API call
      return new Promise<MitraProfile[]>((resolve) => {
        setTimeout(() => resolve(mockMitras), 100);
      });
    },
    select: (data: MitraProfile[] | undefined) => data || mockMitras,
  });

  const communityStats = [
    { value: "50+", label: isHindi ? "प्रशिक्षित मित्र" : "Trained Mitras" },
    { value: "25", label: isHindi ? "सेवा केंद्र" : "Service Centers" },
    { value: "98%", label: isHindi ? "संतुष्ट ग्राहक" : "Satisfied Customers" },
  ];

  const mitraServices = [
    {
      icon: "📄",
      title: isHindi ? "पॉलिसी की शर्तें समझाना" : "Explain Policy Terms",
      description: isHindi
        ? "आसान भाषा में समझाते हैं"
        : "Explain in simple language",
    },
    {
      icon: "📋",
      title: isHindi ? "क्लेम में सहायता" : "Claim Assistance",
      description: isHindi ? "कागजी कार्रवाई में मदद" : "Help with paperwork",
    },
    {
      icon: "⏰",
      title: isHindi ? "प्रीमियम रिमाइंडर" : "Premium Reminders",
      description: isHindi ? "समय पर याद दिलाते हैं" : "Timely reminders",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: isHindi ? "पारिवारिक सम्पर्क" : "Family Liaison",
      description: isHindi
        ? "परिवार से जुड़े रहते हैं"
        : "Stay connected with family",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Users className="text-primary mr-2" size={40} />
            {isHindi ? "आपके मित्र और सहायक" : "Your Mitras and Support"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "आपकी भाषा में, आपके क्षेत्र में, हमेशा आपकी सेवा में"
              : "In your language, in your area, always at your service"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mitra Profiles */}
          <div className="space-y-8">
            <div className="space-y-6">
              {mitras.map((mitra) => (
                <Card
                  key={mitra.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={mitra.profileImage}
                        alt={`${mitra.name} profile`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">
                            {mitra.name}
                          </h4>
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-500" size={16} />
                            <span className="text-sm font-medium">
                              {mitra.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {isHindi
                            ? "आपके क्षेत्र के लिए प्रशिक्षित सहायक"
                            : "Trained assistant for your area"}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="text-chart-2" size={16} />
                            <span className="text-chart-2">{mitra.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="text-primary" size={16} />
                            <span className="text-primary">{mitra.area}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {mitra.languages.map((lang, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <Button
                            size="sm"
                            onClick={() => setSelectedMitra(mitra)}
                            data-testid={`call-mitra-${mitra.id}`}
                          >
                            <Phone className="mr-1" size={16} />
                            {isHindi ? "कॉल करें" : "Call Now"}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            data-testid={`schedule-mitra-${mitra.id}`}
                          >
                            <Calendar className="mr-1" size={16} />
                            {isHindi ? "समय लें" : "Schedule"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {isHindi
                    ? "आपके क्षेत्र में हमारी उपस्थिति"
                    : "Our Presence in Your Area"}
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {communityStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How Mitras Help */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {isHindi ? "सहायक कैसे मदद करते हैं:" : "How Mitras Help:"}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {mitraServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-accent rounded-lg"
                    >
                      <div className="text-2xl">{service.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">
                          {service.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chatbot Interface */}
          <div className="space-y-8">
            <ChatbotInterface />
          </div>
        </div>

        {/* Emergency Contact Section */}
        <section className="mt-16 bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-destructive mb-2">
              {isHindi ? "आपातकालीन सहायता" : "Emergency Support"}
            </h2>
            <p className="text-muted-foreground">
              {isHindi
                ? "तुरंत मदद के लिए संपर्क करें"
                : "Contact for immediate assistance"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-chart-2 bg-chart-2/5">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 text-chart-2" size={32} />
                <h3 className="font-semibold mb-2">
                  {isHindi ? "24×7 हेल्पलाइन" : "24×7 Helpline"}
                </h3>
                <p className="text-2xl font-bold text-chart-2 mb-2">
                  1800-22-9090
                </p>
                <p className="text-sm text-muted-foreground">
                  {isHindi
                    ? "सभी भाषाओं में उपलब्ध"
                    : "Available in all languages"}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5">
              <CardContent className="p-6 text-center">
                <MessageCircle
                  className="mx-auto mb-4 text-primary"
                  size={32}
                />
                <h3 className="font-semibold mb-2">
                  {isHindi ? "WhatsApp सहायता" : "WhatsApp Support"}
                </h3>
                <p className="text-lg font-bold text-primary mb-2">
                  +91 98765-43210
                </p>
                <p className="text-sm text-muted-foreground">
                  {isHindi ? "त्वरित उत्तर के लिए" : "For quick responses"}
                </p>
              </CardContent>
            </Card>

            <Card className="border-chart-3 bg-chart-3/5">
              <CardContent className="p-6 text-center">
                <UserCheck className="mx-auto mb-4 text-chart-3" size={32} />
                <h3 className="font-semibold mb-2">
                  {isHindi ? "स्थानीय कार्यालय" : "Local Office"}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {isHindi
                    ? "व्यक्तिगत बातचीत के लिए"
                    : "For personal consultation"}
                </p>
                <Button variant="outline" size="sm" data-testid="find-office">
                  {isHindi ? "खोजें" : "Find"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

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
