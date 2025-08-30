import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  FileText,
  Users,
  Building,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: <Phone className="text-primary" size={32} />,
      title: isHindi ? "फोन सपोर्ट" : "Phone Support",
      description: isHindi
        ? "तुरंत सहायता के लिए कॉल करें"
        : "Call for immediate assistance",
      contact: "1800-267-9090",
      availability: isHindi ? "24/7 उपलब्ध" : "Available 24/7",
      bgColor: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Mail className="text-green-600" size={32} />,
      title: isHindi ? "ईमेल सपोर्ट" : "Email Support",
      description: isHindi
        ? "विस्तृत जानकारी के लिए ईमेल करें"
        : "Email for detailed inquiries",
      contact: "care@sbilife.co.in",
      availability: isHindi ? "24 घंटे में जवाब" : "Response within 24 hours",
      bgColor: "bg-green-50 border-green-200",
    },
    {
      icon: <MessageCircle className="text-purple-600" size={32} />,
      title: isHindi ? "लाइव चैट" : "Live Chat",
      description: isHindi
        ? "तत्काल सहायता के लिए चैट करें"
        : "Chat for instant help",
      contact: isHindi ? "चैट शुरू करें" : "Start Chat",
      availability: isHindi ? "सोम-शनि 9AM-6PM" : "Mon-Sat 9AM-6PM",
      bgColor: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Building className="text-orange-600" size={32} />,
      title: isHindi ? "नजदीकी शाखा" : "Nearest Branch",
      description: isHindi
        ? "व्यक्तिगत सहायता के लिए शाखा में जाएं"
        : "Visit branch for personal assistance",
      contact: isHindi ? "शाखा खोजें" : "Find Branch",
      availability: isHindi ? "1100+ शाखाएं" : "1100+ Branches",
      bgColor: "bg-orange-50 border-orange-200",
    },
  ];

  const categories = [
    { value: "policy", label: isHindi ? "पॉलिसी संबंधी" : "Policy Related" },
    { value: "claim", label: isHindi ? "क्लेम संबंधी" : "Claim Related" },
    {
      value: "premium",
      label: isHindi ? "प्रीमियम संबंधी" : "Premium Related",
    },
    {
      value: "technical",
      label: isHindi ? "तकनीकी सहायता" : "Technical Support",
    },
    { value: "complaint", label: isHindi ? "शिकायत" : "Complaint" },
    { value: "other", label: isHindi ? "अन्य" : "Other" },
  ];

  const offices = [
    {
      type: isHindi ? "कॉर्पोरेट कार्यालय" : "Corporate Office",
      address:
        "Natraj, M.V. Road & Western Express Highway Junction, Andheri (East), Mumbai - 400 069",
      phone: "+91-22-2829-8888",
      email: "corporate@sbilife.co.in",
    },
    {
      type: isHindi ? "उत्तर क्षेत्रीय कार्यालय" : "North Regional Office",
      address:
        "5th Floor, Jeevan Bharti Building, Connaught Place, New Delhi - 110001",
      phone: "+91-11-2341-2345",
      email: "north@sbilife.co.in",
    },
    {
      type: isHindi ? "दक्षिण क्षेत्रीय कार्यालय" : "South Regional Office",
      address: "3rd Floor, Express Towers, Nariman Point, Chennai - 600001",
      phone: "+91-44-2852-3456",
      email: "south@sbilife.co.in",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
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
              <Headphones className="text-primary" size={48} />
            </motion.div>
            {isHindi ? "हमसे संपर्क करें" : "Contact Us"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isHindi
              ? "हम आपकी सेवा में हमेशा तैयार हैं। किसी भी सहायता के लिए हमसे संपर्क करने में संकोच न करें।"
              : "We are always ready to serve you. Feel free to contact us for any assistance you need."}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${method.bgColor}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">
                      {method.contact}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {method.availability}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    {index === 0 && <Phone size={14} className="mr-2" />}
                    {index === 1 && <Mail size={14} className="mr-2" />}
                    {index === 2 && (
                      <MessageCircle size={14} className="mr-2" />
                    )}
                    {index === 3 && <MapPin size={14} className="mr-2" />}
                    {isHindi ? "संपर्क करें" : "Contact Now"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center text-primary text-2xl">
                  <FileText className="mr-3" size={28} />
                  {isHindi ? "संदेश भेजें" : "Send Message"}
                </CardTitle>
                <p className="text-muted-foreground">
                  {isHindi
                    ? "नीचे दिए गए फॉर्म को भरें और हम 24 घंटे में आपसे संपर्क करेंगे"
                    : "Fill out the form below and we will contact you within 24 hours"}
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {isHindi ? "पूरा नाम" : "Full Name"} *
                      </Label>
                      <Input
                        id="name"
                        placeholder={
                          isHindi
                            ? "अपना पूरा नाम दर्ज करें"
                            : "Enter your full name"
                        }
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {isHindi ? "ईमेल पता" : "Email Address"} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={
                          isHindi ? "आपका ईमेल पता" : "Your email address"
                        }
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {isHindi ? "फोन नंबर" : "Phone Number"} *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765-43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        {isHindi ? "विषय श्रेणी" : "Subject Category"} *
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger className="border-primary/30 focus:border-primary">
                          <SelectValue
                            placeholder={
                              isHindi ? "श्रेणी चुनें" : "Select category"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {isHindi ? "विषय" : "Subject"} *
                    </Label>
                    <Input
                      id="subject"
                      placeholder={
                        isHindi ? "संदेश का विषय" : "Subject of your message"
                      }
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="border-primary/30 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {isHindi ? "संदेश" : "Message"} *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={
                        isHindi
                          ? "अपना संदेश यहाँ लिखें..."
                          : "Write your message here..."
                      }
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-primary/30 focus:border-primary min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                  >
                    <Send size={20} className="mr-2" />
                    {isHindi ? "संदेश भेजें" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* Business Hours */}
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center text-primary">
                  <Clock className="mr-3" size={24} />
                  {isHindi ? "कार्य समय" : "Business Hours"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {isHindi ? "सोमवार - शुक्रवार:" : "Monday - Friday:"}
                  </span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {isHindi ? "शनिवार:" : "Saturday:"}
                  </span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {isHindi ? "रविवार:" : "Sunday:"}
                  </span>
                  <span className="font-medium text-red-600">
                    {isHindi ? "बंद" : "Closed"}
                  </span>
                </div>
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">
                      {isHindi
                        ? "हेल्पलाइन 24/7 उपलब्ध"
                        : "Helpline available 24/7"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Offices */}
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <CardTitle className="flex items-center text-primary">
                  <Building className="mr-3" size={24} />
                  {isHindi ? "मुख्य कार्यालय" : "Main Offices"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-3 bg-accent/20 rounded-lg border border-primary/20"
                  >
                    <h4 className="font-semibold text-primary mb-2">
                      {office.type}
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-start">
                        <MapPin
                          size={14}
                          className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-muted-foreground">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone
                          size={14}
                          className="text-muted-foreground mr-2"
                        />
                        <span className="text-muted-foreground">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Mail
                          size={14}
                          className="text-muted-foreground mr-2"
                        />
                        <span className="text-muted-foreground">
                          {office.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-lg border-red-200 bg-red-50">
              <CardHeader className="bg-gradient-to-r from-red-100 to-red-50">
                <CardTitle className="flex items-center text-red-700">
                  <AlertCircle className="mr-3" size={24} />
                  {isHindi ? "आपातकालीन संपर्क" : "Emergency Contact"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-red-700 font-semibold text-lg mb-2">
                    1800-267-9090
                  </p>
                  <p className="text-sm text-red-600">
                    {isHindi
                      ? "क्लेम और आपातकालीन सहायता के लिए"
                      : "For claims and emergency assistance"}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-red-300 text-red-700 hover:bg-red-100"
                  >
                    <Phone size={16} className="mr-2" />
                    {isHindi ? "तुरंत कॉल करें" : "Call Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
