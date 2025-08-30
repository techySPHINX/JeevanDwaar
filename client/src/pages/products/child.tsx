import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Baby,
  School,
  BookOpen,
  Calculator,
  TrendingUp,
  CheckCircle,
  Star,
  Gift,
  Heart,
  ArrowRight,
  DollarSign,
  Calendar,
  Target,
  Trophy,
  PiggyBank,
  Rocket,
  Crown,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { AgeVerificationModal } from "@/components/ui/age-verification-modal";

export default function ChildPlans() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [selectedPlan, setSelectedPlan] = useState("smart-scholar");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    setIsModalOpen(false);
  };

  const plans = [
    {
      id: "smart-scholar",
      name: isHindi ? "स्मार्ट स्कॉलर प्लान" : "Smart Scholar Plan",
      shortName: isHindi ? "स्मार्ट स्कॉलर" : "Smart Scholar",
      icon: <GraduationCap className="text-blue-600" size={32} />,
      premium: "₹5,000/वर्ष से",
      maturityBenefit: "₹25 लाख तक",
      ageRange: "0-17",
      policyTerm: "10-25 वर्ष",
      features: [
        isHindi ? "शिक्षा की गारंटी" : "Education Guarantee",
        isHindi ? "फ्लेक्सिबल प्रीमियम" : "Flexible Premium",
        isHindi ? "बोनस रिटर्न" : "Bonus Returns",
        isHindi ? "टैक्स बेनिफिट" : "Tax Benefits",
      ],
      benefits: [
        isHindi ? "18 साल की उम्र में शिक्षा फंड" : "Education fund at age 18",
        isHindi ? "हायर एजुकेशन सपोर्ट" : "Higher education support",
        isHindi ? "स्किल डेवलपमेंट कोर्स" : "Skill development courses",
        isHindi ? "करियर गाइडेंस" : "Career guidance",
      ],
      milestones: [
        {
          age: 18,
          amount: "25%",
          purpose: isHindi ? "कॉलेज एडमिशन" : "College Admission",
        },
        {
          age: 20,
          amount: "35%",
          purpose: isHindi ? "कोर्स फीस" : "Course Fees",
        },
        {
          age: 22,
          amount: "40%",
          purpose: isHindi ? "करियर स्टार्ट" : "Career Start",
        },
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "child-future",
      name: isHindi ? "चाइल्ड फ्यूचर प्लान" : "Child Future Plan",
      shortName: isHindi ? "चाइल्ड फ्यूचर" : "Child Future",
      icon: <Baby className="text-pink-600" size={32} />,
      premium: "₹3,000/वर्ष से",
      maturityBenefit: "₹15 लाख तक",
      ageRange: "0-12",
      policyTerm: "15-20 वर्ष",
      features: [
        isHindi ? "जन्म से सुरक्षा" : "Protection from Birth",
        isHindi ? "प्रीमियम वेवर" : "Premium Waiver",
        isHindi ? "मैच्योरिटी बेनिफिट" : "Maturity Benefit",
        isHindi ? "एक्सीडेंट कवर" : "Accident Cover",
      ],
      benefits: [
        isHindi ? "प्राइमरी एजुकेशन फंड" : "Primary education fund",
        isHindi ? "हेल्थ चेकअप कवर" : "Health checkup cover",
        isHindi ? "एक्स्ट्रा करिकुलर सपोर्ट" : "Extra curricular support",
        isHindi ? "बच्चे का बीमा कवर" : "Child insurance cover",
      ],
      milestones: [
        {
          age: 5,
          amount: "10%",
          purpose: isHindi ? "स्कूल एडमिशन" : "School Admission",
        },
        {
          age: 12,
          amount: "30%",
          purpose: isHindi ? "हायर सेकेंडरी" : "Higher Secondary",
        },
        {
          age: 18,
          amount: "60%",
          purpose: isHindi ? "कॉलेज प्रवेश" : "College Entry",
        },
      ],
      color: "bg-pink-50 border-pink-200",
    },
    {
      id: "education-plus",
      name: isHindi ? "एजुकेशन प्लस प्लान" : "Education Plus Plan",
      shortName: isHindi ? "एजुकेशन प्लस" : "Education Plus",
      icon: <School className="text-green-600" size={32} />,
      premium: "₹8,000/वर्ष से",
      maturityBenefit: "₹50 लाख तक",
      ageRange: "0-15",
      policyTerm: "15-25 वर्ष",
      features: [
        isHindi ? "हायर एजुकेशन फोकस" : "Higher Education Focus",
        isHindi ? "इंवेस्टमेंट लिंक्ड" : "Investment Linked",
        isHindi ? "फंड स्विचिंग" : "Fund Switching",
        isHindi ? "ग्लोबल एजुकेशन कवर" : "Global Education Cover",
      ],
      benefits: [
        isHindi ? "विदेशी यूनिवर्सिटी फंड" : "Foreign university fund",
        isHindi ? "प्रोफेशनल कोर्स सपोर्ट" : "Professional course support",
        isHindi ? "रिसर्च प्रोग्राम फंडिंग" : "Research program funding",
        isHindi ? "इंटर्नशिप सपोर्ट" : "Internship support",
      ],
      milestones: [
        {
          age: 16,
          amount: "20%",
          purpose: isHindi ? "प्री-कॉलेज कोर्स" : "Pre-college Courses",
        },
        {
          age: 18,
          amount: "40%",
          purpose: isHindi ? "अंडरग्रेजुएट" : "Undergraduate",
        },
        {
          age: 22,
          amount: "40%",
          purpose: isHindi ? "पोस्टग्रेजुएट" : "Postgraduate",
        },
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      id: "career-builder",
      name: isHindi ? "करियर बिल्डर प्लान" : "Career Builder Plan",
      shortName: isHindi ? "करियर बिल्डर" : "Career Builder",
      icon: <BookOpen className="text-purple-600" size={32} />,
      premium: "₹6,000/वर्ष से",
      maturityBenefit: "₹35 लाख तक",
      ageRange: "5-17",
      policyTerm: "10-20 वर्ष",
      features: [
        isHindi ? "स्किल डेवलपमेंट फोकस" : "Skill Development Focus",
        isHindi ? "करियर काउंसलिंग" : "Career Counseling",
        isHindi ? "इंडस्ट्री एक्सपोज़र" : "Industry Exposure",
        isHindi ? "सर्टिफिकेशन सपोर्ट" : "Certification Support",
      ],
      benefits: [
        isHindi ? "टेक्निकल स्किल ट्रेनिंग" : "Technical skill training",
        isHindi ? "इंटर्नशिप ऑपर्च्युनिटी" : "Internship opportunities",
        isHindi ? "एंटरप्रेन्योरशिप सपोर्ट" : "Entrepreneurship support",
        isHindi ? "नेटवर्किंग प्लेटफॉर्म" : "Networking platform",
      ],
      milestones: [
        {
          age: 16,
          amount: "25%",
          purpose: isHindi ? "स्किल कोर्स" : "Skill Courses",
        },
        {
          age: 18,
          amount: "35%",
          purpose: isHindi ? "प्रोफेशनल ट्रेनिंग" : "Professional Training",
        },
        {
          age: 21,
          amount: "40%",
          purpose: isHindi ? "करियर लॉन्च" : "Career Launch",
        },
      ],
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const educationCostCalculator = [
    {
      level: isHindi ? "प्राइमरी (कक्षा 1-5)" : "Primary (Class 1-5)",
      cost: "₹2-5 लाख",
      duration: "5 साल",
    },
    {
      level: isHindi ? "सेकेंडरी (कक्षा 6-10)" : "Secondary (Class 6-10)",
      cost: "₹5-8 लाख",
      duration: "5 साल",
    },
    {
      level: isHindi
        ? "हायर सेकेंडरी (कक्षा 11-12)"
        : "Higher Secondary (Class 11-12)",
      cost: "₹3-6 लाख",
      duration: "2 साल",
    },
    {
      level: isHindi ? "अंडरग्रेजुएट (स्नातक)" : "Undergraduate (Bachelor's)",
      cost: "₹5-15 लाख",
      duration: "3-4 साल",
    },
    {
      level: isHindi
        ? "पोस्टग्रेजुएट (स्नातकोत्तर)"
        : "Postgraduate (Master's)",
      cost: "₹3-10 लाख",
      duration: "2 साल",
    },
    {
      level: isHindi ? "प्रोफेशनल कोर्स" : "Professional Courses",
      cost: "₹10-25 लाख",
      duration: "3-5 साल",
    },
  ];

  const whyChildPlans = [
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: isHindi
        ? "शिक्षा महंगाई से सुरक्षा"
        : "Protection Against Education Inflation",
      description: isHindi
        ? "हर साल 10-15% बढ़ती शिक्षा की लागत से बचें"
        : "Protect against 10-15% annual education cost inflation",
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: isHindi ? "गारंटीड एजुकेशन फंड" : "Guaranteed Education Fund",
      description: isHindi
        ? "बच्चे की शिक्षा का फंड समय पर उपलब्ध"
        : "Education fund available on time for your child",
    },
    {
      icon: <Gift className="text-purple-600" size={24} />,
      title: isHindi ? "माइलस्टोन बेनिफिट" : "Milestone Benefits",
      description: isHindi
        ? "हर शिक्षा स्तर पर वित्तीय सहायता"
        : "Financial support at every education level",
    },
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: isHindi
        ? "माता-पिता की मानसिक शांति"
        : "Peace of Mind for Parents",
      description: isHindi
        ? "बच्चे का भविष्य सुरक्षित और सुनिश्चित"
        : "Child's future secured and assured",
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
    <div className="min-h-screen bg-gradient-to-br from-blue/5 to-pink/10 py-8">
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
              <GraduationCap className="text-blue-600" size={56} />
            </motion.div>
            {isHindi ? "बाल योजनाएं" : "Child Plans"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isHindi
              ? "आपके बच्चे के उज्ज्वल भविष्य और शिक्षा के लिए विशेष रूप से डिज़ाइन की गई योजनाएं"
              : "Specially designed plans for your child's bright future and education"}
          </p>

          {/* Education Cost Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-orange-600 mr-2" size={24} />
              <span className="font-bold text-orange-800">
                {isHindi
                  ? "शिक्षा महंगाई अलर्ट!"
                  : "Education Inflation Alert!"}
              </span>
            </div>
            <p className="text-orange-700">
              {isHindi
                ? "आज ₹10 लाख की शिक्षा 15 साल बाद ₹40+ लाख हो जाएगी। अभी से तैयारी करें!"
                : "Today's ₹10 lakh education will become ₹40+ lakh after 15 years. Start preparing now!"}
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              <Calculator className="mr-2" size={20} />
              {isHindi
                ? "एजुकेशन कॉस्ट कैलकुलेट करें"
                : "Calculate Education Cost"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-300 hover:bg-blue-50"
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
                } ${selectedPlan === plan.id ? "ring-2 ring-blue-300" : ""}`}
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
                      className="bg-blue-100 text-blue-700"
                    >
                      {plan.premium}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {isHindi ? "मैच्योरिटी:" : "Maturity:"}{" "}
                      <span className="font-semibold text-green-600">
                        {plan.maturityBenefit}
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

        {/* Selected Plan Details */}
        {currentPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className={`shadow-lg border-2 ${currentPlan.color}`}>
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {currentPlan.icon}
                    <div className="ml-4">
                      <CardTitle className="text-2xl text-blue-700">
                        {currentPlan.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "बच्चे के शिक्षा भविष्य की संपूर्ण योजना"
                          : "Complete education future plan for your child"}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-300"
                  >
                    <Crown className="mr-1" size={14} />
                    {isHindi ? "बेस्ट सेलर" : "Best Seller"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Tabs defaultValue="milestones" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-blue-50">
                    <TabsTrigger
                      value="milestones"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "माइलस्टोन" : "Milestones"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "विशेषताएं" : "Features"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="benefits"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "लाभ" : "Benefits"}
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {isHindi ? "विवरण" : "Details"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="milestones" className="mt-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-center mb-6">
                        {isHindi
                          ? "शिक्षा माइलस्टोन बेनिफिट"
                          : "Education Milestone Benefits"}
                      </h3>
                      {currentPlan.milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {milestone.age}
                            </div>
                            <div className="ml-6 flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-semibold">
                                  {milestone.purpose}
                                </h4>
                                <Badge
                                  variant="outline"
                                  className="text-green-600 border-green-300"
                                >
                                  {milestone.amount} {isHindi ? "फंड" : "Fund"}
                                </Badge>
                              </div>
                              <Progress
                                value={parseInt(milestone.amount)}
                                className="w-full"
                              />
                              <p className="text-sm text-muted-foreground mt-1">
                                {isHindi
                                  ? `${milestone.age} साल की उम्र में`
                                  : `At age ${milestone.age}`}
                              </p>
                            </div>
                          </div>
                          {index < currentPlan.milestones.length - 1 && (
                            <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentPlan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-blue-50 rounded-lg"
                        >
                          <Star
                            className="text-blue-600 mr-3 flex-shrink-0"
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
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                        <DollarSign
                          className="text-blue-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-blue-800 mb-2">
                          {isHindi ? "प्रीमियम" : "Premium"}
                        </h3>
                        <p className="text-blue-600 font-bold text-lg">
                          {currentPlan.premium}
                        </p>
                      </div>
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                        <Target
                          className="text-green-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-green-800 mb-2">
                          {isHindi ? "मैच्योरिटी" : "Maturity"}
                        </h3>
                        <p className="text-green-600 font-bold text-lg">
                          {currentPlan.maturityBenefit}
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
                        <Trophy
                          className="text-orange-600 mx-auto mb-3"
                          size={32}
                        />
                        <h3 className="font-semibold text-orange-800 mb-2">
                          {isHindi ? "पॉलिसी अवधि" : "Policy Term"}
                        </h3>
                        <p className="text-orange-600 font-bold text-lg">
                          {currentPlan.policyTerm}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Calculator className="mr-2" size={20} />
                    {isHindi
                      ? "एजुकेशन कॉस्ट कैलकुलेट करें"
                      : "Calculate Education Cost"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-blue-300 hover:bg-blue-50"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Rocket className="mr-2" size={20} />
                    {isHindi ? "प्लान शुरू करें" : "Start Plan"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Education Cost Calculator */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "शिक्षा लागत कैलकुलेटर" : "Education Cost Calculator"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "आज के समय में विभिन्न शिक्षा स्तरों की अनुमानित लागत"
                : "Estimated costs of different education levels in today's time"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationCostCalculator.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg border-orange-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <GraduationCap
                      className="text-orange-600 mx-auto mb-4"
                      size={32}
                    />
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.level}
                    </h3>
                    <p className="text-2xl font-bold text-orange-600 mb-2">
                      {item.cost}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-orange-600 border-orange-300"
                    >
                      {item.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Child Plans */}
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
                ? "चाइल्ड प्लान क्यों जरूरी?"
                : "Why Child Plans are Essential?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "बच्चे के उज्ज्वल भविष्य के लिए आज से ही तैयारी करें"
                : "Start preparing today for your child's bright future"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChildPlans.map((item, index) => (
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
          <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isHindi
                  ? "बच्चे का भविष्य आज से ही सुरक्षित करें"
                  : "Secure Your Child's Future Starting Today"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isHindi
                  ? "हर दिन की देरी का मतलब है अधिक प्रीमियम। आज ही सही योजना चुनें और बच्चे का भविष्य सुनिश्चित करें।"
                  : "Every day of delay means higher premium. Choose the right plan today and secure your child's future."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsModalOpen(true)}
                >
                  <GraduationCap className="mr-2" size={20} />
                  {isHindi ? "प्लान शुरू करें" : "Start a Plan"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300 hover:bg-blue-50"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calculator className="mr-2" size={20} />
                  {isHindi ? "कॉस्ट कैलकुलेट करें" : "Calculate Cost"}
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
