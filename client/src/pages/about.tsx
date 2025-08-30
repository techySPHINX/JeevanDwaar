import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Award,
  Target,
  Heart,
  TrendingUp,
  Building,
  Globe,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const stats = [
    {
      icon: <Users className="text-primary" size={32} />,
      value: "82,039,958",
      label: isHindi ? "पॉलिसीधारक" : "Policy Holders",
      description: isHindi ? "विश्वसनीय ग्राहक" : "Trusted Customers",
    },
    {
      icon: <Building className="text-green-600" size={32} />,
      value: "1,110",
      label: isHindi ? "शाखाएं" : "Branches",
      description: isHindi ? "पूरे भारत में" : "Across India",
    },
    {
      icon: <TrendingUp className="text-blue-600" size={32} />,
      value: "₹2,68,819",
      label: isHindi ? "करोड़ का दावा" : "Crores Claims",
      description: isHindi ? "आज तक भुगतान" : "Paid Till Date",
    },
    {
      icon: <Award className="text-orange-600" size={32} />,
      value: "23+",
      label: isHindi ? "साल का अनुभव" : "Years Experience",
      description: isHindi ? "सेवा में" : "In Service",
    },
  ];

  const values = [
    {
      icon: <Shield className="text-primary" size={24} />,
      title: isHindi ? "भरोसेमंदता" : "Trustworthiness",
      description: isHindi
        ? "हमारे ग्राहकों का भरोसा हमारी सबसे बड़ी संपत्ति है"
        : "Our customers' trust is our greatest asset",
    },
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: isHindi ? "ग्राहक सेवा" : "Customer Service",
      description: isHindi
        ? "हर ग्राहक को सर्वोत्तम सेवा प्रदान करना हमारा लक्ष्य है"
        : "Providing excellent service to every customer is our goal",
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: isHindi ? "पारदर्शिता" : "Transparency",
      description: isHindi
        ? "सभी नीतियों और प्रक्रियाओं में पूर्ण पारदर्शिता"
        : "Complete transparency in all policies and processes",
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: isHindi ? "पहुंच" : "Accessibility",
      description: isHindi
        ? "हर व्यक्ति तक बीमा सुरक्षा पहुंचाना"
        : "Making insurance protection accessible to everyone",
    },
  ];

  const milestones = [
    {
      year: "2001",
      event: isHindi ? "SBI Life की स्थापना" : "SBI Life Established",
      description: isHindi
        ? "भारत में जीवन बीमा की नई शुरुआत"
        : "New beginning of life insurance in India",
    },
    {
      year: "2017",
      event: isHindi ? "IPO लॉन्च" : "IPO Launch",
      description: isHindi ? "पब्लिक कंपनी बनी" : "Became a public company",
    },
    {
      year: "2020",
      event: isHindi ? "डिजिटल ट्रांसफॉर्मेशन" : "Digital Transformation",
      description: isHindi
        ? "ऑनलाइन सेवाओं का विस्तार"
        : "Expansion of online services",
    },
    {
      year: "2024",
      event: isHindi ? "जीवन द्वार लॉन्च" : "Jeevan Dwaar Launch",
      description: isHindi
        ? "ग्रामीण क्षेत्रों के लिए विशेष पहल"
        : "Special initiative for rural areas",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {isHindi ? (
                <>
                  <span className="text-primary">SBI Life</span> के बारे में
                </>
              ) : (
                <>
                  About <span className="text-primary">SBI Life</span>
                </>
              )}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {isHindi
                ? "भारत की सबसे भरोसेमंद जीवन बीमा कंपनी में से एक, जो 23 वर्षों से करोड़ों परिवारों की सुरक्षा कर रही है।"
                : "One of India's most trusted life insurance companies, protecting millions of families for over 23 years."}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{stat.icon}</div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </h3>
                    <p className="font-semibold text-primary mb-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg border-primary/20 h-full">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center text-primary text-2xl">
                    <Target className="mr-3" size={28} />
                    {isHindi ? "हमारा मिशन" : "Our Mission"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {isHindi
                      ? "हर भारतीय परिवार को सुरक्षा प्रदान करना और उनके सपनों को पूरा करने में मदद करना। हम चाहते हैं कि हर व्यक्ति आर्थिक सुरक्षा के साथ अपना भविष्य बना सके।"
                      : "To provide security to every Indian family and help them fulfill their dreams. We want every person to build their future with financial security."}
                  </p>
                  <div className="mt-6 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <span className="text-sm font-medium">
                      {isHindi
                        ? "सभी के लिए सुलभ बीमा"
                        : "Accessible insurance for all"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="shadow-lg border-primary/20 h-full">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                  <CardTitle className="flex items-center text-primary text-2xl">
                    <Star className="mr-3" size={28} />
                    {isHindi ? "हमारा विज़न" : "Our Vision"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {isHindi
                      ? "भारत की सबसे पसंदीदा और भरोसेमंद जीवन बीमा कंपनी बनना। हम चाहते हैं कि हमारे ग्राहक हमें अपना सबसे विश्वसनीय साथी माने।"
                      : "To become India's most preferred and trusted life insurance company. We want our customers to consider us their most reliable partner."}
                  </p>
                  <div className="mt-6 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <span className="text-sm font-medium">
                      {isHindi
                        ? "भरोसेमंद साझीदारी"
                        : "Trustworthy partnership"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "हमारे मूल्य" : "Our Core Values"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "जो सिद्धांत हमारे काम करने के तरीके को निर्देशित करते हैं"
                : "The principles that guide how we work and serve our customers"}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isHindi ? "हमारी यात्रा" : "Our Journey"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isHindi
                ? "महत्वपूर्ण मील के पत्थर जो हमारी सफलता की कहानी बयान करते हैं"
                : "Important milestones that tell our success story"}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Badge
                      variant="outline"
                      className="mb-4 text-primary border-primary/30"
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {milestone.event}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {isHindi ? "हमारे साथ जुड़ें" : "Join Us Today"}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {isHindi
                    ? "आज ही अपनी और अपने परिवार की सुरक्षा शुरू करें"
                    : "Start protecting yourself and your family today"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    {isHindi ? "पॉलिसी देखें" : "View Policies"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    {isHindi ? "संपर्क करें" : "Contact Us"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
