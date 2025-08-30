import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  Search,
  Calendar,
  CreditCard,
  Shield,
  User,
  Building,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function DownloadForms() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const formCategories = [
    { id: "all", label: isHindi ? "सभी फॉर्म" : "All Forms" },
    { id: "policy", label: isHindi ? "पॉलिसी फॉर्म" : "Policy Forms" },
    { id: "claim", label: isHindi ? "क्लेम फॉर्म" : "Claim Forms" },
    { id: "service", label: isHindi ? "सेवा फॉर्म" : "Service Forms" },
    { id: "investment", label: isHindi ? "निवेश फॉर्म" : "Investment Forms" },
  ];

  const mockForms = [
    {
      id: 1,
      title: isHindi ? "मृत्यु दावा फॉर्म" : "Death Claim Form",
      description: isHindi
        ? "मृत्यु के मामले में दावा करने के लिए"
        : "For claiming in case of death",
      category: "claim",
      formCode: "DCF-001",
      size: "2.5 MB",
      language: "Hindi/English",
      lastUpdated: "2024-03-15",
      isRequired: true,
      icon: <AlertCircle className="text-red-600" size={24} />,
    },
    {
      id: 2,
      title: isHindi ? "मैच्योरिटी क्लेम फॉर्म" : "Maturity Claim Form",
      description: isHindi
        ? "पॉलिसी मैच्योरिटी के लिए दावा फॉर्म"
        : "Claim form for policy maturity",
      category: "claim",
      formCode: "MCF-002",
      size: "1.8 MB",
      language: "Hindi/English",
      lastUpdated: "2024-03-10",
      isRequired: true,
      icon: <CheckCircle className="text-green-600" size={24} />,
    },
    {
      id: 3,
      title: isHindi ? "नॉमिनी अपडेट फॉर्म" : "Nominee Update Form",
      description: isHindi
        ? "नॉमिनी की जानकारी बदलने के लिए"
        : "For updating nominee information",
      category: "service",
      formCode: "NUF-003",
      size: "1.2 MB",
      language: "Hindi/English",
      lastUpdated: "2024-02-28",
      isRequired: false,
      icon: <User className="text-blue-600" size={24} />,
    },
    {
      id: 4,
      title: isHindi ? "पता परिवर्तन फॉर्म" : "Address Change Form",
      description: isHindi
        ? "पंजीकृत पता बदलने के लिए"
        : "For changing registered address",
      category: "service",
      formCode: "ACF-004",
      size: "950 KB",
      language: "Hindi/English",
      lastUpdated: "2024-03-01",
      isRequired: false,
      icon: <Building className="text-purple-600" size={24} />,
    },
    {
      id: 5,
      title: isHindi ? "प्रीमियम भुगतान फॉर्म" : "Premium Payment Form",
      description: isHindi
        ? "मैन्युअल प्रीमियम भुगतान के लिए"
        : "For manual premium payment",
      category: "policy",
      formCode: "PPF-005",
      size: "1.5 MB",
      language: "Hindi/English",
      lastUpdated: "2024-03-12",
      isRequired: false,
      icon: <CreditCard className="text-orange-600" size={24} />,
    },
    {
      id: 6,
      title: isHindi ? "नई पॉलिसी आवेदन" : "New Policy Application",
      description: isHindi
        ? "नई जीवन बीमा पॉलिसी के लिए आवेदन"
        : "Application for new life insurance policy",
      category: "policy",
      formCode: "NPA-006",
      size: "3.2 MB",
      language: "Hindi/English",
      lastUpdated: "2024-03-18",
      isRequired: true,
      icon: <Shield className="text-primary" size={24} />,
    },
    {
      id: 7,
      title: isHindi ? "फंड स्विच फॉर्म" : "Fund Switch Form",
      description: isHindi
        ? "ULIP में फंड बदलने के लिए"
        : "For switching funds in ULIP",
      category: "investment",
      formCode: "FSF-007",
      size: "1.1 MB",
      language: "Hindi/English",
      lastUpdated: "2024-03-05",
      isRequired: false,
      icon: <FileText className="text-green-600" size={24} />,
    },
    {
      id: 8,
      title: isHindi ? "पार्शियल विड्रॉल फॉर्म" : "Partial Withdrawal Form",
      description: isHindi
        ? "ULIP से आंशिक राशि निकालने के लिए"
        : "For partial withdrawal from ULIP",
      category: "investment",
      formCode: "PWF-008",
      size: "1.7 MB",
      language: "Hindi/English",
      lastUpdated: "2024-02-25",
      isRequired: false,
      icon: <Download className="text-blue-600" size={24} />,
    },
  ];

  const filteredForms = mockForms.filter((form) => {
    const matchesSearch =
      form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.formCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center">
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
              <Download className="text-primary" size={48} />
            </motion.div>
            {isHindi ? "फॉर्म डाउनलोड करें" : "Download Forms"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isHindi
              ? "आवश्यक दस्तावेज और फॉर्म आसानी से डाउनलोड करें"
              : "Easily download all necessary documents and forms for your insurance needs"}
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center text-primary">
                <Search className="mr-3" size={24} />
                {isHindi
                  ? "फॉर्म खोजें और फिल्टर करें"
                  : "Search & Filter Forms"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="search" className="text-sm font-medium">
                    {isHindi ? "फॉर्म खोजें" : "Search Forms"}
                  </Label>
                  <Input
                    id="search"
                    placeholder={
                      isHindi
                        ? "फॉर्म का नाम या कोड दर्ज करें..."
                        : "Enter form name or code..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">
                    {isHindi ? "श्रेणी" : "Category"}
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.id
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="text-xs"
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Forms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {filteredForms.map((form) => (
            <motion.div
              key={form.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {form.icon}
                        <div>
                          <CardTitle className="text-lg font-bold text-foreground leading-tight">
                            {form.title}
                          </CardTitle>
                          <p className="text-sm text-primary font-mono">
                            {form.formCode}
                          </p>
                        </div>
                      </div>
                      {form.isRequired && (
                        <Badge variant="destructive" className="text-xs">
                          {isHindi ? "आवश्यक" : "Required"}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {form.description}
                    </p>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>{isHindi ? "आकार:" : "Size:"}</span>
                        <span className="font-medium">{form.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{isHindi ? "भाषा:" : "Language:"}</span>
                        <span className="font-medium">{form.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{isHindi ? "अपडेट:" : "Updated:"}</span>
                        <span className="font-medium">{form.lastUpdated}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <FileText size={14} className="mr-2" />
                        {isHindi ? "प्रीव्यू" : "Preview"}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Download size={14} className="mr-2" />
                        {isHindi ? "डाउनलोड" : "Download"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Help Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <AlertCircle className="mr-3" size={24} />
                {isHindi ? "सहायता और दिशा-निर्देश" : "Help & Guidelines"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  {isHindi ? "फॉर्म भरने के लिए टिप्स:" : "Form Filling Tips:"}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    />
                    {isHindi
                      ? "सभी आवश्यक फील्ड भरें"
                      : "Fill all required fields"}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    />
                    {isHindi
                      ? "स्पष्ट और सही जानकारी दें"
                      : "Provide clear and accurate information"}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    />
                    {isHindi
                      ? "आवश्यक दस्तावेज संलग्न करें"
                      : "Attach required documents"}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    />
                    {isHindi
                      ? "हस्ताक्षर करना न भूलें"
                      : "Don't forget to sign"}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  {isHindi ? "सहायता संपर्क:" : "Support Contact:"}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-2" size={16} />
                    <span>
                      {isHindi
                        ? "ग्राहक सेवा: 1800-267-9090"
                        : "Customer Care: 1800-267-9090"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="text-primary mr-2" size={16} />
                    <span>care@sbilife.co.in</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-2" size={16} />
                    <span>
                      {isHindi
                        ? "सोमवार - शनिवार 10AM - 7PM"
                        : "Monday - Saturday 10AM - 7PM"}
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  {isHindi ? "लाइव चैट शुरू करें" : "Start Live Chat"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
