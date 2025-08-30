import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  UserPlus,
  Edit3,
  Save,
  Calendar,
  Phone,
  MapPin,
  Mail,
  User,
  Heart,
  FileText,
  AlertCircle,
  CheckCircle,
  Upload,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function NomineeUpdate() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [currentStep, setCurrentStep] = useState(1);
  const [nomineeData, setNomineeData] = useState({
    fullName: "",
    relationship: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    sharePercentage: 100,
    guardianName: "",
    guardianRelation: "",
  });

  const relationships = [
    { value: "spouse", label: isHindi ? "पति/पत्नी" : "Spouse" },
    { value: "child", label: isHindi ? "बच्चा" : "Child" },
    { value: "parent", label: isHindi ? "माता-पिता" : "Parent" },
    { value: "sibling", label: isHindi ? "भाई-बहन" : "Sibling" },
    { value: "other", label: isHindi ? "अन्य" : "Other" },
  ];

  const currentNominees = [
    {
      name: isHindi ? "प्रिया शर्मा" : "Priya Sharma",
      relationship: isHindi ? "पत्नी" : "Wife",
      share: "60%",
      phone: "+91 98765-43210",
      isActive: true,
    },
    {
      name: isHindi ? "राहुल शर्मा" : "Rahul Sharma",
      relationship: isHindi ? "बेटा" : "Son",
      share: "40%",
      phone: "+91 87654-32109",
      isActive: true,
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

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
              className="mr-4"
            >
              <Users className="text-primary" size={48} />
            </motion.div>
            {isHindi ? "नॉमिनी अपडेट करें" : "Update Nominee"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isHindi
              ? "अपनी पॉलिसी के नॉमिनी की जानकारी को आसानी से अपडेट करें"
              : "Easily update your policy nominee information to keep your loved ones protected"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Nominees */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1"
          >
            <Card className="shadow-lg border-primary/20 sticky top-24">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center text-primary">
                  <Heart className="mr-3" size={24} />
                  {isHindi ? "वर्तमान नॉमिनी" : "Current Nominees"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {currentNominees.map((nominee, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-accent/30 rounded-lg border border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {nominee.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {nominee.relationship}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {nominee.share}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Phone size={14} className="mr-2" />
                        {nominee.phone}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle
                          size={14}
                          className="mr-2 text-green-600"
                        />
                        {isHindi ? "सक्रिय" : "Active"}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary/30 hover:bg-primary/5"
                >
                  <Edit3 size={16} className="mr-2" />
                  {isHindi ? "नॉमिनी संपादित करें" : "Edit Nominees"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Add/Update Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center text-primary">
                    <UserPlus className="mr-3" size={24} />
                    {isHindi ? "नया नॉमिनी जोड़ें" : "Add New Nominee"}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30"
                  >
                    {isHindi ? `चरण ${currentStep}/3` : `Step ${currentStep}/3`}
                  </Badge>
                </CardTitle>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{isHindi ? "प्रगति" : "Progress"}</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-accent/30 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <motion.div
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <User size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">
                        {isHindi ? "व्यक्तिगत जानकारी" : "Personal Information"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "नॉमिनी की बुनियादी जानकारी प्रदान करें"
                          : "Provide basic information about the nominee"}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          {isHindi ? "पूरा नाम" : "Full Name"} *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder={
                            isHindi
                              ? "नॉमिनी का पूरा नाम"
                              : "Enter nominee full name"
                          }
                          value={nomineeData.fullName}
                          onChange={(e) =>
                            setNomineeData({
                              ...nomineeData,
                              fullName: e.target.value,
                            })
                          }
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="relationship">
                          {isHindi ? "रिश्ता" : "Relationship"} *
                        </Label>
                        <Select
                          value={nomineeData.relationship}
                          onValueChange={(value) =>
                            setNomineeData({
                              ...nomineeData,
                              relationship: value,
                            })
                          }
                        >
                          <SelectTrigger className="border-primary/30 focus:border-primary">
                            <SelectValue
                              placeholder={
                                isHindi ? "रिश्ता चुनें" : "Select relationship"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {relationships.map((rel) => (
                              <SelectItem key={rel.value} value={rel.value}>
                                {rel.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">
                          {isHindi ? "जन्मतिथि" : "Date of Birth"} *
                        </Label>
                        <Input
                          id="dob"
                          type="date"
                          value={nomineeData.dateOfBirth}
                          onChange={(e) =>
                            setNomineeData({
                              ...nomineeData,
                              dateOfBirth: e.target.value,
                            })
                          }
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="share">
                          {isHindi ? "हिस्सा प्रतिशत" : "Share Percentage"} *
                        </Label>
                        <Input
                          id="share"
                          type="number"
                          min="1"
                          max="100"
                          placeholder="100"
                          value={nomineeData.sharePercentage}
                          onChange={(e) =>
                            setNomineeData({
                              ...nomineeData,
                              sharePercentage: parseInt(e.target.value),
                            })
                          }
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <motion.div
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <Phone size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">
                        {isHindi ? "संपर्क जानकारी" : "Contact Information"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "नॉमिनी की संपर्क जानकारी दर्ज करें"
                          : "Enter nominee contact details"}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            {isHindi ? "फोन नंबर" : "Phone Number"} *
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765-43210"
                            value={nomineeData.phone}
                            onChange={(e) =>
                              setNomineeData({
                                ...nomineeData,
                                phone: e.target.value,
                              })
                            }
                            className="border-primary/30 focus:border-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {isHindi ? "ईमेल पता" : "Email Address"}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="nominee@example.com"
                            value={nomineeData.email}
                            onChange={(e) =>
                              setNomineeData({
                                ...nomineeData,
                                email: e.target.value,
                              })
                            }
                            className="border-primary/30 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">
                          {isHindi ? "पूरा पता" : "Complete Address"} *
                        </Label>
                        <Textarea
                          id="address"
                          placeholder={
                            isHindi
                              ? "नॉमिनी का पूरा पता दर्ज करें"
                              : "Enter complete address of nominee"
                          }
                          value={nomineeData.address}
                          onChange={(e) =>
                            setNomineeData({
                              ...nomineeData,
                              address: e.target.value,
                            })
                          }
                          className="border-primary/30 focus:border-primary min-h-[100px]"
                        />
                      </div>

                      {/* Guardian Info for Minor */}
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-3 flex items-center">
                          <AlertCircle size={20} className="mr-2" />
                          {isHindi
                            ? "अवयस्क के लिए अभिभावक जानकारी"
                            : "Guardian Information (For Minor)"}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="guardianName">
                              {isHindi ? "अभिभावक का नाम" : "Guardian Name"}
                            </Label>
                            <Input
                              id="guardianName"
                              placeholder={
                                isHindi
                                  ? "अभिभावक का नाम दर्ज करें"
                                  : "Enter guardian name"
                              }
                              value={nomineeData.guardianName}
                              onChange={(e) =>
                                setNomineeData({
                                  ...nomineeData,
                                  guardianName: e.target.value,
                                })
                              }
                              className="border-yellow-300 focus:border-yellow-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="guardianRelation">
                              {isHindi
                                ? "अभिभावक से रिश्ता"
                                : "Relation with Guardian"}
                            </Label>
                            <Input
                              id="guardianRelation"
                              placeholder={
                                isHindi
                                  ? "रिश्ता दर्ज करें"
                                  : "Enter relationship"
                              }
                              value={nomineeData.guardianRelation}
                              onChange={(e) =>
                                setNomineeData({
                                  ...nomineeData,
                                  guardianRelation: e.target.value,
                                })
                              }
                              className="border-yellow-300 focus:border-yellow-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Document Upload & Review */}
                {currentStep === 3 && (
                  <motion.div
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <FileText
                        size={48}
                        className="text-primary mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold">
                        {isHindi ? "दस्तावेज और समीक्षा" : "Documents & Review"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isHindi
                          ? "आवश्यक दस्तावेज अपलोड करें और जानकारी की समीक्षा करें"
                          : "Upload required documents and review information"}
                      </p>
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">
                        {isHindi ? "आवश्यक दस्तावेज:" : "Required Documents:"}
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border-2 border-dashed border-primary/30 rounded-lg text-center hover:border-primary/60 transition-colors cursor-pointer">
                          <Upload
                            size={32}
                            className="text-primary mx-auto mb-2"
                          />
                          <p className="text-sm font-medium">
                            {isHindi
                              ? "नॉमिनी का आधार कार्ड"
                              : "Nominee Aadhar Card"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG (Max 5MB)
                          </p>
                        </div>

                        <div className="p-4 border-2 border-dashed border-primary/30 rounded-lg text-center hover:border-primary/60 transition-colors cursor-pointer">
                          <Upload
                            size={32}
                            className="text-primary mx-auto mb-2"
                          />
                          <p className="text-sm font-medium">
                            {isHindi
                              ? "रिश्ते का प्रमाण"
                              : "Relationship Proof"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG (Max 5MB)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Review Information */}
                    <div className="p-6 bg-accent/20 rounded-lg border border-primary/20">
                      <h4 className="font-medium text-foreground mb-4">
                        {isHindi
                          ? "जानकारी की समीक्षा:"
                          : "Review Information:"}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            {isHindi ? "नाम:" : "Name:"}
                          </span>
                          <span className="ml-2 font-medium">
                            {nomineeData.fullName || "Not provided"}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {isHindi ? "रिश्ता:" : "Relationship:"}
                          </span>
                          <span className="ml-2 font-medium">
                            {nomineeData.relationship || "Not selected"}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {isHindi ? "फोन:" : "Phone:"}
                          </span>
                          <span className="ml-2 font-medium">
                            {nomineeData.phone || "Not provided"}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {isHindi ? "हिस्सा:" : "Share:"}
                          </span>
                          <span className="ml-2 font-medium">
                            {nomineeData.sharePercentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    {isHindi ? "पिछला" : "Previous"}
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      onClick={() =>
                        setCurrentStep(Math.min(3, currentStep + 1))
                      }
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isHindi ? "अगला" : "Next"}
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save size={16} className="mr-2" />
                      {isHindi ? "नॉमिनी सहेजें" : "Save Nominee"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
