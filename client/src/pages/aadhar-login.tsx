import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Eye,
  EyeOff,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Lock,
  ArrowRight,
  IdCard,
  Zap,
  Star,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useAuth } from "@/lib/auth-context";
import { useLocation } from "wouter";

export default function AadharLogin() {
  const { language } = useLanguage();
  const { login, sendOTP, isLoading, isAuthenticated } = useAuth();
  const [_location, setLocation] = useLocation();

  const isHindi = language === "hindi";

  if (isAuthenticated) {
    setLocation("/");
    return null;
  }

  const [step, setStep] = useState<"aadhar" | "otp">("aadhar");
  const [aadharId, setAadharId] = useState("");
  const [otp, setOtp] = useState("");
  const [_otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState("");
  const [showAadhar, setShowAadhar] = useState(false);

  const formatAadharId = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    // Format as XXXX-XXXX-XXXX
    return numbers.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3").slice(0, 14);
  };

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadharId(e.target.value);
    setAadharId(formatted);
    setError("");
  };

  const handleSendOTP = async () => {
    if (aadharId.length !== 14) {
      setError(
        isHindi
          ? "कृपया वैध आधार नंबर दर्ज करें"
          : "Please enter a valid Aadhar number"
      );
      return;
    }

    try {
      const success = await sendOTP(aadharId);
      if (success) {
        setOtpSent(true);
        setStep("otp");
        setCountdown(60);
        setError("");

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setError(
          isHindi ? "आधार नंबर पंजीकृत नहीं है" : "Aadhar number not registered"
        );
      }
    } catch {
      setError(
        isHindi ? "आधार नंबर पंजीकृत नहीं है" : "Aadhar number not registered"
      );
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError(
        isHindi ? "कृपया 6 अंकों का OTP दर्ज करें" : "Please enter 6-digit OTP"
      );
      return;
    }

    try {
      const success = await login(aadharId, otp);
      if (success) {
        // Small delay to ensure auth state updates, then redirect
        setTimeout(() => {
          setLocation("/");
        }, 100);
      } else {
        setError(
          isHindi
            ? "गलत OTP। कृपया पुनः प्रयास करें।"
            : "Invalid OTP. Please try again."
        );
      }
    } catch {
      setError(
        isHindi
          ? "लॉगिन में त्रुटि। कृपया पुनः प्रयास करें।"
          : "Login error. Please try again."
      );
    }
  };

  const demoCredentials = [
    { aadhar: "1234-5678-9012", name: "राज कुमार शर्मा", role: "User" },
    { aadhar: "9999-8888-7777", name: "Admin User", role: "Admin" },
    { aadhar: "5555-4444-3333", name: "प्रिया गुप्ता", role: "User" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 mt-8"
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative p-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl shadow-2xl">
                  <Shield className="text-white" size={48} />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-blue-800 mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isHindi ? "जीवन द्वार" : "JEEVAN DWAAR"}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {isHindi ? "सुरक्षित प्रवेश" : "SECURE ACCESS"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {isHindi
                  ? "आधार आधारित प्रमाणीकरण के साथ अपनी बीमा यात्रा में कदम रखें"
                  : "Step into your insurance journey with Aadhar-based authentication"}
              </p>
            </motion.div>
          </motion.div>
          {/* Typewriter slogan */}
          <div className="flex justify-center mb-8">
            <span className="italic text-xl md:text-2xl font-semibold text-primary typewriter">
              {isHindi
                ? "बीमा सरल, जीवन मजबूत.."
                : "Beema Saral, Jeevan Majboot.."}
            </span>
          </div>

          {/* Compact 3-column grid for features, demo accounts, and aadhar verification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full min-h-[420px]"
            >
              <Card className="bg-white border-primary/20 shadow-xl h-full min-h-[420px] flex flex-col justify-between">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50 border-b border-blue-800 rounded-t-2xl px-6 py-4">
                  <CardTitle className="flex items-center gap-3 text-foreground font-bold text-xl">
                    <Zap className="text-primary drop-shadow-md" size={26} />
                    <span className="tracking-tight italic">
                      {isHindi ? "सुरक्षा सुविधाएं" : "Security Features"}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-4 rounded-b-2xl bg-blue-50/30">
                  {[
                    {
                      icon: <Shield className="text-green-600" size={20} />,
                      title: isHindi ? "आधार सत्यापन" : "Aadhar Verification",
                      desc: isHindi
                        ? "सरकारी पहचान सुरक्षा"
                        : "Government ID Security",
                    },
                    {
                      icon: <Lock className="text-primary" size={20} />,
                      title: isHindi ? "OTP प्रमाणीकरण" : "OTP Authentication",
                      desc: isHindi
                        ? "दो-चरणीय सत्यापन"
                        : "Two-Factor Security",
                    },
                    {
                      icon: <Heart className="text-red-500" size={20} />,
                      title: isHindi ? "एन्क्रिप्टेड डेटा" : "Encrypted Data",
                      desc: isHindi
                        ? "बैंक-स्तरीय सुरक्षा"
                        : "Bank-Level Protection",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white hover:bg-primary/5 transition-all duration-300 border border-primary/10 shadow-sm"
                    >
                      {feature.icon}
                      <div>
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {feature.title}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Demo Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col h-full min-h-[420px]"
            >
              <Card className="bg-white border-blue-200 shadow-xl h-full min-h-[420px] flex flex-col justify-between">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-primary/5 border-b border-blue-800 rounded-t-2xl px-6 py-4">
                  <CardTitle className="flex items-center gap-3 text-foreground font-bold text-xl">
                    <Star className="text-blue-600 drop-shadow-md" size={26} />
                    <span className="tracking-tight italic">
                      {isHindi ? "डेमो खाते" : "Demo Accounts"}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 rounded-b-2xl bg-blue-50/30">
                  <p className="text-muted-foreground text-sm mb-2">
                    {isHindi ? "परीक्षण के लिए:" : "For Testing:"}
                  </p>
                  <div className="space-y-2">
                    {demoCredentials.map((cred, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-3 bg-white rounded-xl border border-blue-100 hover:bg-blue-50 transition-all duration-300 cursor-pointer shadow-sm"
                        onClick={() => setAadharId(cred.aadhar)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-foreground text-xs font-bold">
                            {cred.aadhar}
                          </span>
                          <Badge
                            variant={
                              cred.role === "Admin" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {cred.role}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">
                          {cred.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-2 p-2 bg-yellow-50 rounded-xl border border-yellow-200">
                    <p className="text-yellow-800 text-xs font-medium italic">
                      {isHindi ? "डेमो OTP: 123456" : "Demo OTP: 123456"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col h-full min-h-[420px]"
            >
              <div className="relative h-full min-h-[420px] flex flex-col">
                <Card className="bg-white border-2 border-primary/20 shadow-2xl overflow-hidden h-full min-h-[420px] flex flex-col justify-between">
                  <CardHeader className="pb-4 pt-6 bg-gradient-to-r from-primary/5 to-blue-50 border-b border-blue-800 rounded-t-2xl px-6">
                    <CardTitle className="flex items-center gap-3 text-foreground font-bold text-xl">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IdCard
                          className="text-primary drop-shadow-md"
                          size={28}
                        />
                      </motion.div>
                      <span className="tracking-tight italic">
                        {step === "aadhar"
                          ? isHindi
                            ? "आधार सत्यापन"
                            : "AADHAR VERIFICATION"
                          : isHindi
                          ? "OTP सत्यापन"
                          : "OTP VERIFICATION"}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 rounded-b-2xl bg-blue-50/30">
                    {step === "aadhar" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="aadhar"
                            className="text-foreground font-semibold text-base"
                          >
                            {isHindi ? "आधार नंबर" : "Aadhar Number"} *
                          </Label>
                          <div className="relative">
                            <Input
                              id="aadhar"
                              type={showAadhar ? "text" : "password"}
                              placeholder={
                                isHindi ? "XXXX-XXXX-XXXX" : "XXXX-XXXX-XXXX"
                              }
                              value={aadharId}
                              onChange={handleAadharChange}
                              className="h-12 text-base font-mono bg-white border-2 border-primary/20 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/50 pr-12"
                              maxLength={14}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                              onClick={() => setShowAadhar(!showAadhar)}
                            >
                              {showAadhar ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <p className="text-muted-foreground text-xs">
                            {isHindi
                              ? "आपका आधार नंबर पूर्णतः सुरक्षित है और केवल सत्यापन के लिए उपयोग किया जाता है"
                              : "Your Aadhar number is completely secure and used only for verification"}
                          </p>
                        </div>

                        {error && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Alert
                              variant="destructive"
                              className="bg-red-50 border-red-200"
                            >
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription className="text-red-800">
                                {error}
                              </AlertDescription>
                            </Alert>
                          </motion.div>
                        )}

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            onClick={handleSendOTP}
                            disabled={isLoading || aadharId.length !== 14}
                            className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 border-0 shadow-2xl text-white"
                            size="lg"
                          >
                            {isLoading ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                {isHindi ? "भेजा जा रहा है..." : "SENDING..."}
                              </>
                            ) : (
                              <>
                                <Phone className="mr-2" size={18} />
                                {isHindi ? "OTP भेजें" : "SEND OTP"}
                                <ArrowRight className="ml-2" size={18} />
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                      >
                        <div className="text-center">
                          <motion.div
                            className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-green-200"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: 0.2,
                            }}
                          >
                            <CheckCircle className="text-green-600" size={32} />
                          </motion.div>
                          <h3 className="text-foreground font-bold text-lg mb-1">
                            {isHindi ? "OTP भेजा गया!" : "OTP Sent!"}
                          </h3>
                          <p className="text-muted-foreground text-xs">
                            {isHindi
                              ? "आपके आधार से जुड़े फोन नंबर पर 6 अंकों का OTP भेजा गया है"
                              : "6-digit OTP has been sent to your Aadhar registered phone number"}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="otp"
                            className="text-foreground font-semibold text-base"
                          >
                            {isHindi ? "OTP दर्ज करें" : "Enter OTP"} *
                          </Label>
                          <Input
                            id="otp"
                            type="text"
                            placeholder="123456"
                            value={otp}
                            onChange={(e) => {
                              setOtp(
                                e.target.value.replace(/\D/g, "").slice(0, 6)
                              );
                              setError("");
                            }}
                            className="h-12 text-center text-xl font-mono tracking-widest bg-white border-2 border-primary/20 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary/50"
                            maxLength={6}
                          />
                          {countdown > 0 && (
                            <div className="flex items-center justify-center text-muted-foreground">
                              <Clock className="mr-2" size={16} />
                              <span className="text-xs">
                                {isHindi
                                  ? `${countdown} सेकंड में दोबारा भेजें`
                                  : `Resend in ${countdown} seconds`}
                              </span>
                            </div>
                          )}
                        </div>

                        {error && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Alert
                              variant="destructive"
                              className="bg-red-50 border-red-200"
                            >
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription className="text-red-800">
                                {error}
                              </AlertDescription>
                            </Alert>
                          </motion.div>
                        )}

                        <div className="grid grid-cols-2 gap-2">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              onClick={() => {
                                setStep("aadhar");
                                setOtp("");
                                setError("");
                              }}
                              className="w-full h-10 bg-white border-2 border-primary text-primary hover:bg-primary/5 font-medium"
                            >
                              {isHindi ? "वापस" : "BACK"}
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              onClick={handleVerifyOTP}
                              disabled={isLoading || otp.length !== 6}
                              className="w-full h-10 font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 border-0 shadow-2xl text-white"
                            >
                              {isLoading ? (
                                <>
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                  {isHindi ? "सत्यापित..." : "VERIFYING..."}
                                </>
                              ) : (
                                <>
                                  <Lock className="mr-2" size={16} />
                                  {isHindi ? "लॉगिन करें" : "LOGIN"}
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </div>

                        {countdown === 0 && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="ghost"
                              onClick={handleSendOTP}
                              className="w-full text-primary hover:bg-primary/10 font-medium"
                            >
                              {isHindi ? "OTP दोबारा भेजें" : "RESEND OTP"}
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
