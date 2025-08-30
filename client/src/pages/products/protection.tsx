import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Heart,
  Umbrella,
  Home,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Calculator,
  FileText,
  Phone,
  ArrowRight,
  DollarSign,
  Calendar,
  Award,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { AgeVerificationModal } from "@/components/ui/age-verification-modal";

export default function ProtectionPlans() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [selectedPlan, setSelectedPlan] = useState("term");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    // TODO: Handle age entry and proceed with plan selection
    setIsModalOpen(false);
  };

  const plans = [
    {
      id: "term",
      name: isHindi ? "टर्म इंश्योरेंस प्लान" : "Term Insurance Plan",
      shortName: isHindi ? "टर्म प्लान" : "Term Plan",
      icon: <Shield className="text-primary" size={32} />,
      premium: "₹500/माह से",
      coverage: "₹1 करोड़ तक",
      features: [
        isHindi ? "सबसे कम प्रीमियम" : "Lowest Premium",
        isHindi ? "अधिकतम कवरेज" : "Maximum Coverage",
        isHindi ? "टैक्स बेनिफिट" : "Tax Benefits",
        isHindi ? "आसान क्लेम प्रोसेस" : "Easy Claim Process",
      ],
      benefits: [
        isHindi ? "परिवार की पूर्ण सुरक्षा" : "Complete Family Protection",
        isHindi ? "EMI और लोन कवर" : "EMI & Loan Cover",
        isHindi ? "बच्चों की शिक्षा सुरक्षित" : "Children Education Secured",
        isHindi
          ? "पत्नी की आर्थिक स्वतंत्रता"
          : "Spouse Financial Independence",
      ],
      ageRange: "18-65",
      policyTerm: "10-40 वर्ष",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "health",
      name: isHindi ? "हेल्थ प्रोटेक्शन प्लान" : "Health Protection Plan",
      shortName: isHindi ? "हेल्थ प्लान" : "Health Plan",
      icon: <Heart className="text-red-600" size={32} />,
      premium: "₹300/माह से",
      coverage: "₹25 लाख तक",
      features: [
        isHindi ? "कैशलेस ट्रीटमेंट" : "Cashless Treatment",
        isHindi ? "प्री-पोस्ट हॉस्पिटलाइज़ेशन" : "Pre-Post Hospitalization",
        isHindi ? "फैमिली फ्लोटर" : "Family Floater",
        isHindi ? "नो क्लेम बोनस" : "No Claim Bonus",
      ],
      benefits: [
        isHindi ? "मेडिकल इमरजेंसी कवर" : "Medical Emergency Cover",
        isHindi ? "1000+ नेटवर्क हॉस्पिटल" : "1000+ Network Hospitals",
        isHindi ? "आयुष ट्रीटमेंट कवर" : "AYUSH Treatment Cover",
        isHindi ? "एयर एम्बुलेंस कवर" : "Air Ambulance Cover",
      ],
      ageRange: "18-65",
      policyTerm: "आजीवन",
      color: "bg-red-50 border-red-200",
    },
    {
      id: "family",
      name: isHindi ? "फैमिली प्रोटेक्शन प्लान" : "Family Protection Plan",
      shortName: isHindi ? "फैमिली प्लान" : "Family Plan",
      icon: <Home className="text-green-600" size={32} />,
      premium: "₹800/माह से",
      coverage: "₹50 लाख तक",
      features: [
        isHindi ? "होल फैमिली कवर" : "Whole Family Cover",
        isHindi ? "एक्सीडेंटल डेथ बेनिफिट" : "Accidental Death Benefit",
        isHindi ? "क्रिटिकल इलनेस कवर" : "Critical Illness Cover",
        isHindi ? "प्रीमियम वेवर" : "Premium Waiver",
      ],
      benefits: [
        isHindi ? "पूरे परिवार की सुरक्षा" : "Complete Family Security",
        isHindi ? "मैच्योरिटी बेनिफिट" : "Maturity Benefit",
        isHindi ? "लाइफ स्टेज बेनिफिट" : "Life Stage Benefits",
        isHindi ? "इनकम रिप्लेसमेंट" : "Income Replacement",
      ],
      ageRange: "21-50",
      policyTerm: "15-30 वर्ष",
      color: "bg-green-50 border-green-200",
    },
    {
      id: "critical",
      name: isHindi ? "क्रिटिकल इलनेस प्लान" : "Critical Illness Plan",
      shortName: isHindi ? "CI प्लान" : "CI Plan",
      icon: <Umbrella className="text-purple-600" size={32} />,
      premium: "₹400/माह से",
      coverage: "₹1 करोड़ तक",
      features: [
        isHindi ? "37 क्रिटिकल इलनेस कवर" : "37 Critical Illness Cover",
        isHindi ? "लम्प सम पेमेंट" : "Lump Sum Payment",
        isHindi ? "सेकंड ऑपिनियन" : "Second Opinion",
        isHindi ? "वेलनेस बेनिफिट" : "Wellness Benefits",
      ],
      benefits: [
        isHindi ? "कैंसर, हार्ट अटैक कवर" : "Cancer, Heart Attack Cover",
        isHindi ? "ट्रीटमेंट में फुल सपोर्ट" : "Full Treatment Support",
        isHindi ? "इनकम प्रोटेक्शन" : "Income Protection",
        isHindi ? "फैमिली फाइनेंशियल सपोर्ट" : "Family Financial Support",
      ],
      ageRange: "18-65",
      policyTerm: "10-30 वर्ष",
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="text-primary" size={24} />,
      title: isHindi ? "भरोसेमंद कंपनी" : "Trusted Company",
      description: isHindi
        ? "23+ साल का अनुभव और 8+ करोड़ ग्राहक"
        : "23+ years experience, 8+ crore customers",
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: isHindi ? "98% क्लेम सेटलमेंट" : "98% Claim Settlement",
      description: isHindi
        ? "तेज़ और आसान क्लेम प्रोसेस"
        : "Fast and easy claim process",
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: isHindi ? "1100+ शाखाएं" : "1100+ Branches",
      description: isHindi
        ? "पूरे भारत में सेवा नेटवर्क"
        : "Service network across India",
    },
    {
      icon: <Phone className="text-orange-600" size={24} />,
      title: isHindi ? "24x7 कस्टमर सपोर्ट" : "24x7 Customer Support",
      description: isHindi ? "हर समय आपकी सेवा में" : "Always at your service",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const currentPlan = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="mr-4"
            >
              <Shield className="text-primary" size={56} />
            </motion.div>
            {isHindi ? "सुरक्षा योजनाएं" : "Protection Plans"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isHindi
              ? "आपके और आपके परिवार की पूर्ण सुरक्षा के लिए विशेष रूप से डिज़ाइन की गई बीमा योजनाएं"
              : "Specially designed insurance plans for complete protection of you and your family"}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              <Calculator className="mr-2" size={20} />
              {isHindi ? "प्रीमियम कैलकुलेट करें" : "Calculate Premium"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
            >
              <FileText className="mr-2" size={20} />
              {isHindi ? "प्लान कम्पेयर करें" : "Compare Plans"}
            </Button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {plans.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants}>
              <Card
                className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedPlan === plan.id ? plan.color : "border-primary/20"
                } ${selectedPlan === plan.id ? "ring-2 ring-primary/30" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">{plan.icon}</div>
                  <CardTitle className="text-lg font-bold text-foreground leading-tight">
                    {plan.shortName}
                  </CardTitle>
                  <div className="space-y-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {plan.premium}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {isHindi ? "कवरेज:" : "Coverage:"}{" "}
                      <span className="font-semibold text-green-600">
                        {plan.coverage}
                      </span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {plan.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle
                          size={14}
                          className="text-green-600 mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    size="sm"
                    className="w-full mt-4"
                  >
                    {selectedPlan === plan.id ? (
                      <>
                        <CheckCircle size={16} className="mr-2" />
                        {isHindi ? "चयनित" : "Selected"}
                      </>
                    ) : (
                      <>
                        <ArrowRight size={16} className="mr-2" />
                        {isHindi ? "विवरण देखें" : "View Details"}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {currentPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className={`shadow-lg border-2 ${currentPlan.color}`}>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {currentPlan.icon}
                    <div className="ml-4">
                      <CardTitle className="text-2xl text-primary">
                        {currentPlan.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "विस्तृत योजना जानकारी"
                          : "Detailed Plan Information"}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30"
                  >
                    {isHindi ? "लोकप्रिय" : "Popular"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-primary/10">
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {isHindi ? "विशेषताएं" : "Features"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="benefits"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {isHindi ? "लाभ" : "Benefits"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {isHindi ? "विवरण" : "Details"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentPlan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-accent/20 rounded-lg"
                        >
                          <Star
                            className="text-primary mr-3 flex-shrink-0"
                            size={20}
                          />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="benefits" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentPlan.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg"
                        >
                          <CheckCircle
                            className="text-green-600 mr-3 mt-0.5 flex-shrink-0"
                            size={20}
                          />
                          <span className="font-medium text-green-800">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <DollarSign
                          className="text-blue-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-blue-800 mb-2">
                          {isHindi ? "प्रीमियम रेंज" : "Premium Range"}
                        </h3>
                        <p className="text-blue-600 font-bold text-lg">
                          {currentPlan.premium}
                        </p>
                      </div>
                      <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg text-center">
                        <Calendar
                          className="text-purple-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-purple-800 mb-2">
                          {isHindi ? "उम्र सीमा" : "Age Range"}
                        </h3>
                        <p className="text-purple-600 font-bold text-lg">
                          {currentPlan.ageRange} {isHindi ? "साल" : "years"}
                        </p>
                      </div>
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                        <Shield
                          className="text-green-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-green-800 mb-2">
                          {isHindi ? "पॉलिसी अवधि" : "Policy Term"}
                        </h3>
                        <p className="text-green-600 font-bold text-lg">
                          {currentPlan.policyTerm}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Calculator className="mr-2" size={20} />
                    {isHindi ? "प्रीमियम कैलकुलेट करें" : "Calculate Premium"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary/30 hover:bg-primary/5"
                  >
                    <FileText className="mr-2" size={20} />
                    {isHindi ? "प्रस्ताव फॉर्म" : "Proposal Form"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary/30 hover:bg-primary/5"
                  >
                    <Phone className="mr-2" size={20} />
                    {isHindi ? "कॉल बैक बुक करें" : "Book Callback"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Why Choose Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "SBI Life क्यों चुनें?" : "Why Choose SBI Life?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "भारत की सबसे भरोसेमंद बीमा कंपनी के साथ अपनी सुरक्षा सुनिश्चित करें"
                : "Ensure your protection with India's most trusted insurance company"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isHindi
                  ? "आज ही सुरक्षा शुरू करें"
                  : "Start Your Protection Today"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isHindi
                  ? "अपने परिवार की सुरक्षा में देरी न करें। आज ही सही योजना चुनें और मानसिक शांति पाएं।"
                  : "Don't delay in protecting your family. Choose the right plan today and get peace of mind."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  {isHindi ? "अभी खरीदें" : "Buy Now"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-primary/5"
                >
                  {isHindi ? "एक्सपर्ट से बात करें" : "Talk to Expert"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <AgeVerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContinue={handleContinue}
      />
    </div>
  );
}
