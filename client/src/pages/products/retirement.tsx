import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Banknote,
  TrendingUp,
  Target,
  Crown,
  Calculator,
  PiggyBank,
  CheckCircle,
  Star,
  Sunset,
  Home,
  ArrowRight,
  DollarSign,
  Calendar,
  Trophy,
  Shield,
  Heart,
  Plane,
  Coffee,
  LineChart,
  Award,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { AgeVerificationModal } from "@/components/ui/age-verification-modal";

export default function RetirementPlans() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [selectedPlan, setSelectedPlan] = useState("saral-pension");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    // TODO: Handle age entry and proceed with plan selection
    setIsModalOpen(false);
  };

  const plans = [
    {
      id: "saral-pension",
      name: isHindi ? "सरल पेंशन प्लान" : "Saral Pension Plan",
      shortName: isHindi ? "सरल पेंशन" : "Saral Pension",
      icon: <Banknote className="text-green-600" size={32} />,
      premium: "₹1,500/माह से",
      pensionAmount: "₹15,000/माह तक",
      ageRange: "18-65",
      retirementAge: "60 वर्ष",
      features: [
        isHindi ? "गारंटीड पेंशन" : "Guaranteed Pension",
        isHindi ? "लाइफटाइम इनकम" : "Lifetime Income",
        isHindi ? "टैक्स बेनिफिट" : "Tax Benefits",
        isHindi ? "फ्लेक्सिबल प्रीमियम" : "Flexible Premium",
      ],
      benefits: [
        isHindi
          ? "रिटायरमेंट के बाद मासिक पेंशन"
          : "Monthly pension after retirement",
        isHindi ? "मेडिकल एमरजेंसी फंड" : "Medical emergency fund",
        isHindi ? "स्पाउस पेंशन कवर" : "Spouse pension cover",
        isHindi ? "इन्फ्लेशन प्रोटेक्शन" : "Inflation protection",
      ],
      returnType: isHindi ? "गारंटीड रिटर्न" : "Guaranteed Returns",
      expectedReturn: "6-8%",
      color: "bg-green-50 border-green-200",
    },
    {
      id: "wealth-plus",
      name: isHindi ? "वेल्थ प्लस रिटायरमेंट" : "Wealth Plus Retirement",
      shortName: isHindi ? "वेल्थ प्लस" : "Wealth Plus",
      icon: <TrendingUp className="text-blue-600" size={32} />,
      premium: "₹2,500/माह से",
      pensionAmount: "₹25,000/माह तक",
      ageRange: "18-60",
      retirementAge: "58-70 वर्ष",
      features: [
        isHindi ? "मार्केट लिंक्ड रिटर्न" : "Market Linked Returns",
        isHindi ? "फंड स्विचिंग" : "Fund Switching",
        isHindi ? "पार्शियल विड्रॉल" : "Partial Withdrawal",
        isHindi ? "टॉप-अप ऑप्शन" : "Top-up Option",
      ],
      benefits: [
        isHindi ? "हायर रिटर्न पोटेंशियल" : "Higher return potential",
        isHindi ? "इक्विटी+डेट फंड मिक्स" : "Equity+Debt fund mix",
        isHindi ? "लिक्विडिटी ऑप्शन" : "Liquidity options",
        isHindi ? "वेल्थ क्रिएशन फोकस" : "Wealth creation focus",
      ],
      returnType: isHindi ? "मार्केट लिंक्ड" : "Market Linked",
      expectedReturn: "10-15%",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "dignified-retirement",
      name: isHindi ? "डिग्निफाइड रिटायरमेंट" : "Dignified Retirement Plan",
      shortName: isHindi ? "डिग्निफाइड" : "Dignified",
      icon: <Crown className="text-purple-600" size={32} />,
      premium: "₹5,000/माह से",
      pensionAmount: "₹50,000/माह तक",
      ageRange: "25-55",
      retirementAge: "60-65 वर्ष",
      features: [
        isHindi ? "प्रीमियम रिटायरमेंट" : "Premium Retirement",
        isHindi ? "हेल्थ कवर इंक्लूडेड" : "Health Cover Included",
        isHindi ? "ट्रैवल बेनिफिट" : "Travel Benefits",
        isHindi ? "लाइफस्टाइल बेनिफिट" : "Lifestyle Benefits",
      ],
      benefits: [
        isHindi ? "लक्जरी रिटायरमेंट लाइफ" : "Luxury retirement life",
        isHindi ? "प्रीमियम हेल्थकेयर" : "Premium healthcare",
        isHindi ? "इंटरनेशनल ट्रैवल कवर" : "International travel cover",
        isHindi ? "कॉन्सियर्ज सर्विस" : "Concierge services",
      ],
      returnType: isHindi ? "हाइब्रिड रिटर्न" : "Hybrid Returns",
      expectedReturn: "8-12%",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: "nps-plus",
      name: isHindi ? "NPS प्लस प्लान" : "NPS Plus Plan",
      shortName: isHindi ? "NPS प्लस" : "NPS Plus",
      icon: <Target className="text-orange-600" size={32} />,
      premium: "₹1,000/माह से",
      pensionAmount: "₹12,000/माह तक",
      ageRange: "18-60",
      retirementAge: "60 वर्ष",
      features: [
        isHindi ? "गवर्नमेंट बैक्ड" : "Government Backed",
        isHindi ? "हाइएस्ट टैक्स सेविंग" : "Highest Tax Saving",
        isHindi ? "लो कॉस्ट प्लान" : "Low Cost Plan",
        isHindi ? "ट्रांसपैरेंट चार्जेस" : "Transparent Charges",
      ],
      benefits: [
        isHindi ? "₹2 लाख तक टैक्स छूट" : "₹2 lakh tax exemption",
        isHindi ? "कम चार्जेस (0.25%)" : "Low charges (0.25%)",
        isHindi ? "गवर्नमेंट को-कंट्रिब्यूशन" : "Government co-contribution",
        isHindi ? "पोर्टेबिलिटी ऑप्शन" : "Portability option",
      ],
      returnType: isHindi ? "मार्केट लिंक्ड" : "Market Linked",
      expectedReturn: "12-14%",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  const retirementGoals = [
    {
      icon: <Home className="text-blue-600" size={32} />,
      title: isHindi ? "अपना घर" : "Own Home",
      description: isHindi
        ? "मॉर्गेज-फ्री होम की सुरक्षा"
        : "Mortgage-free home security",
      amount: "₹50 लाख - ₹2 करोड़",
      timeline: "25-30 वर्ष",
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: isHindi ? "हेल्थकेयर फंड" : "Healthcare Fund",
      description: isHindi
        ? "मेडिकल इमरजेंसी के लिए तैयार फंड"
        : "Ready fund for medical emergencies",
      amount: "₹25 लाख - ₹1 करोड़",
      timeline: "20-40 वर्ष",
    },
    {
      icon: <Plane className="text-green-600" size={32} />,
      title: isHindi ? "ट्रैवल & लाइफस्टाइल" : "Travel & Lifestyle",
      description: isHindi
        ? "सपनों के सफर और शौक पूरे करें"
        : "Fulfill dream travels and hobbies",
      amount: "₹15 लाख - ₹50 लाख",
      timeline: "15-25 वर्ष",
    },
    {
      icon: <Coffee className="text-purple-600" size={32} />,
      title: isHindi ? "डेली एक्सपेंसेस" : "Daily Expenses",
      description: isHindi
        ? "रोजमर्रा के खर्च की सुरक्षा"
        : "Daily expense security",
      amount: "₹20,000 - ₹75,000/माह",
      timeline: "आजीवन",
    },
  ];

  const retirementBenefits = [
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: isHindi ? "फाइनेंशियल सिक्योरिटी" : "Financial Security",
      description: isHindi
        ? "रिटायरमेंट के बाद नियमित आय की गारंटी"
        : "Guaranteed regular income after retirement",
    },
    {
      icon: <TrendingUp className="text-blue-600" size={24} />,
      title: isHindi ? "इन्फ्लेशन बीट करें" : "Beat Inflation",
      description: isHindi
        ? "महंगाई की दर से ज्यादा रिटर्न पाएं"
        : "Get returns higher than inflation rate",
    },
    {
      icon: <Trophy className="text-purple-600" size={24} />,
      title: isHindi ? "टैक्स बेनिफिट" : "Tax Benefits",
      description: isHindi
        ? "80C के तहत टैक्स छूट और रिटर्न"
        : "Tax exemption under 80C and returns",
    },
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: isHindi ? "मानसिक शांति" : "Peace of Mind",
      description: isHindi
        ? "भविष्य की चिंता से मुक्ति"
        : "Freedom from future worries",
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
    <div className="min-h-screen bg-gradient-to-br from-green/5 to-blue/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
              <Sunset className="text-orange-600" size={56} />
            </motion.div>
            {isHindi ? "सेवानिवृत्ति योजनाएं" : "Retirement Plans"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isHindi
              ? "आपके सुनहरे भविष्य और सम्मानजनक सेवानिवृत्ति के लिए विशेष योजनाएं"
              : "Special plans for your golden future and dignified retirement"}
          </p>

          {/* Retirement Reality Check */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-red-600 mr-2" size={24} />
              <span className="font-bold text-red-800">
                {isHindi
                  ? "रिटायरमेंट रियलिटी चेक!"
                  : "Retirement Reality Check!"}
              </span>
            </div>
            <p className="text-red-700 mb-2">
              {isHindi
                ? "₹50,000 की आज की जरूरत 30 साल बाद ₹2,00,000 हो जाएगी!"
                : "Today's ₹50,000 need will become ₹2,00,000 after 30 years!"}
            </p>
            <Badge
              variant="outline"
              className="text-orange-600 border-orange-300"
            >
              {isHindi
                ? "महंगाई दर: 6-8% सालाना"
                : "Inflation Rate: 6-8% annually"}
            </Badge>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsModalOpen(true)}
            >
              <Calculator className="mr-2" size={20} />
              {isHindi ? "रिटायरमेंट कैलकुलेट करें" : "Calculate Retirement"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-300 hover:bg-green-50"
            >
              <PiggyBank className="mr-2" size={20} />
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
                } ${selectedPlan === plan.id ? "ring-2 ring-green-300" : ""}`}
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
                      className="bg-green-100 text-green-700"
                    >
                      {plan.premium}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {isHindi ? "पेंशन:" : "Pension:"}{" "}
                      <span className="font-semibold text-green-600">
                        {plan.pensionAmount}
                      </span>
                    </p>
                    <Badge
                      variant="outline"
                      className="text-orange-600 border-orange-300"
                    >
                      {plan.expectedReturn} {isHindi ? "रिटर्न" : "Returns"}
                    </Badge>
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

        {/* Selected Plan Details */}
        {currentPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className={`shadow-lg border-2 ${currentPlan.color}`}>
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {currentPlan.icon}
                    <div className="ml-4">
                      <CardTitle className="text-2xl text-green-700">
                        {currentPlan.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "सम्मानजनक सेवानिवृत्ति की संपूर्ण योजना"
                          : "Complete plan for dignified retirement"}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-300"
                  >
                    <Award className="mr-1" size={14} />
                    {isHindi ? "रेकमेंडेड" : "Recommended"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-green-50">
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "विशेषताएं" : "Features"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="benefits"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "लाभ" : "Benefits"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="calculator"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "कैलकुलेटर" : "Calculator"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "विवरण" : "Details"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentPlan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-green-50 rounded-lg"
                        >
                          <Star
                            className="text-green-600 mr-3 flex-shrink-0"
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
                          className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg"
                        >
                          <CheckCircle
                            className="text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                            size={20}
                          />
                          <span className="font-medium text-blue-800">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="calculator" className="mt-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-center mb-6">
                        {isHindi
                          ? "रिटायरमेंट प्लानिंग कैलकुलेटर"
                          : "Retirement Planning Calculator"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
                          <h4 className="text-lg font-bold mb-4 text-green-700">
                            {isHindi ? "वर्तमान स्थिति" : "Current Situation"}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>
                                {isHindi
                                  ? "मासिक प्रीमियम:"
                                  : "Monthly Premium:"}
                              </span>
                              <span className="font-bold">
                                {currentPlan.premium}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>
                                {isHindi ? "रिटायरमेंट एज:" : "Retirement Age:"}
                              </span>
                              <span className="font-bold">
                                {currentPlan.retirementAge}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>
                                {isHindi
                                  ? "एक्सपेक्टेड रिटर्न:"
                                  : "Expected Return:"}
                              </span>
                              <span className="font-bold text-green-600">
                                {currentPlan.expectedReturn}
                              </span>
                            </div>
                          </div>
                        </Card>
                        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                          <h4 className="text-lg font-bold mb-4 text-purple-700">
                            {isHindi
                              ? "प्रोजेक्टेड रिजल्ट"
                              : "Projected Results"}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>
                                {isHindi ? "मासिक पेंशन:" : "Monthly Pension:"}
                              </span>
                              <span className="font-bold text-green-600">
                                {currentPlan.pensionAmount}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>
                                {isHindi ? "कॉर्पस वैल्यू:" : "Corpus Value:"}
                              </span>
                              <span className="font-bold text-purple-600">
                                ₹45 लाख+
                              </span>
                            </div>
                            <Progress value={75} className="w-full" />
                            <p className="text-sm text-muted-foreground">
                              {isHindi
                                ? "75% गोल अचीवमेंट"
                                : "75% goal achievement"}
                            </p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                        <DollarSign
                          className="text-green-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-green-800 mb-2">
                          {isHindi ? "प्रीमियम" : "Premium"}
                        </h3>
                        <p className="text-green-600 font-bold text-lg">
                          {currentPlan.premium}
                        </p>
                      </div>
                      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <Banknote
                          className="text-blue-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-blue-800 mb-2">
                          {isHindi ? "पेंशन" : "Pension"}
                        </h3>
                        <p className="text-blue-600 font-bold text-lg">
                          {currentPlan.pensionAmount}
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
                      <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg text-center">
                        <LineChart
                          className="text-orange-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-orange-800 mb-2">
                          {isHindi ? "रिटर्न टाइप" : "Return Type"}
                        </h3>
                        <p className="text-orange-600 font-bold text-sm">
                          {currentPlan.returnType}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Calculator className="mr-2" size={20} />
                    {isHindi
                      ? "रिटायरमेंट कैलकुलेट करें"
                      : "Calculate Retirement"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-green-300 hover:bg-green-50"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <PiggyBank className="mr-2" size={20} />
                    {isHindi ? "प्लान शुरू करें" : "Start Plan"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Retirement Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "रिटायरमेंट गोल प्लानिंग" : "Retirement Goal Planning"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "सेवानिवृत्ति के बाद के लिए आवश्यक फाइनेंशियल गोल्स"
                : "Essential financial goals for post-retirement life"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retirementGoals.map((goal, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg border-orange-200 hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{goal.icon}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {goal.description}
                    </p>
                    <div className="space-y-2">
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-300"
                      >
                        {goal.amount}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {goal.timeline}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Retirement Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi
                ? "रिटायरमेंट प्लान क्यों जरूरी?"
                : "Why Retirement Plans are Essential?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "सम्मानजनक सेवानिवृत्ति के लिए आज से ही तैयारी करें"
                : "Start preparing today for a dignified retirement"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retirementBenefits.map((item, index) => (
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
          <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isHindi
                  ? "आज से ही रिटायरमेंट प्लानिंग शुरू करें"
                  : "Start Your Retirement Planning Today"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isHindi
                  ? "हर साल की देरी का मतलब है कम पेंशन। आज ही सही योजना चुनें और सुनहरे भविष्य को सुनिश्चित करें।"
                  : "Every year of delay means lower pension. Choose the right plan today and secure your golden future."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Sunset className="mr-2" size={20} />
                  {isHindi
                    ? "रिटायरमेंट प्लान शुरू करें"
                    : "Start Retirement Plan"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-300 hover:bg-green-50"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calculator className="mr-2" size={20} />
                  {isHindi
                    ? "रिटायरमेंट कैलकुलेट करें"
                    : "Calculate Retirement"}
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
