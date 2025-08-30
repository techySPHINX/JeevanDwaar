import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  TrendingUp,
  PieChart,
  Download,
  Eye,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function NAVFund() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const mockNAVData = [
    {
      name: isHindi ? "इक्विटी फंड" : "Equity Fund",
      code: "SBLEQUITY",
      nav: "₹45.67",
      change: "+2.34%",
      changeValue: "+₹1.05",
      isPositive: true,
      risk: isHindi ? "उच्च" : "High",
      category: "Equity",
    },
    {
      name: isHindi ? "डेट फंड" : "Debt Fund",
      code: "SBLDEBT",
      nav: "₹28.92",
      change: "+0.87%",
      changeValue: "+₹0.25",
      isPositive: true,
      risk: isHindi ? "कम" : "Low",
      category: "Debt",
    },
    {
      name: isHindi ? "हाइब्रिड फंड" : "Hybrid Fund",
      code: "SBLHYBRID",
      nav: "₹35.43",
      change: "-0.45%",
      changeValue: "-₹0.16",
      isPositive: false,
      risk: isHindi ? "मध्यम" : "Moderate",
      category: "Hybrid",
    },
    {
      name: isHindi ? "लिक्विड फंड" : "Liquid Fund",
      code: "SBLLIQUID",
      nav: "₹15.78",
      change: "+0.12%",
      changeValue: "+₹0.02",
      isPositive: true,
      risk: isHindi ? "बहुत कम" : "Very Low",
      category: "Liquid",
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
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mr-4"
            >
              <Calculator className="text-primary" size={48} />
            </motion.div>
            {isHindi ? "NAV और फंड वैल्यू" : "NAV & Fund Value"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isHindi
              ? "अपने निवेश की वर्तमान स्थिति और फंड की परफॉर्मेंस को ट्रैक करें"
              : "Track your investment performance and current fund values in real-time"}
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center text-primary">
                <TrendingUp className="mr-3" size={24} />
                {isHindi ? "फंड खोजें और ट्रैक करें" : "Search & Track Funds"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="policyNumber" className="text-sm font-medium">
                    {isHindi ? "पॉलिसी नंबर" : "Policy Number"}
                  </Label>
                  <Input
                    id="policyNumber"
                    placeholder={
                      isHindi
                        ? "अपना पॉलिसी नंबर दर्ज करें"
                        : "Enter your policy number"
                    }
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fundCode" className="text-sm font-medium">
                    {isHindi ? "फंड कोड" : "Fund Code"}
                  </Label>
                  <Input
                    id="fundCode"
                    placeholder={
                      isHindi ? "फंड कोड (वैकल्पिक)" : "Fund Code (Optional)"
                    }
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium">
                    {isHindi ? "तारीख" : "Date"}
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-primary hover:bg-primary/90 shadow-md">
                    <Calculator className="mr-2" size={16} />
                    {isHindi ? "वैल्यू जांचें" : "Check Value"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Tabs defaultValue="current" className="space-y-6">
            <TabsList className="grid w-full md:w-1/2 mx-auto grid-cols-2 bg-primary/10">
              <TabsTrigger
                value="current"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {isHindi ? "वर्तमान NAV" : "Current NAV"}
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {isHindi ? "परफॉर्मेंस" : "Performance"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-6">
              {/* Current NAV Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {mockNAVData.map((fund, _index) => (
                  <motion.div
                    key={fund.code}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <motion.div variants={cardHoverVariants}>
                      <Card className="shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-lg font-bold text-foreground">
                                {fund.name}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground font-mono">
                                {fund.code}
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${
                                fund.risk === "उच्च" || fund.risk === "High"
                                  ? "border-red-500 text-red-600"
                                  : fund.risk === "कम" || fund.risk === "Low"
                                  ? "border-green-500 text-green-600"
                                  : "border-yellow-500 text-yellow-600"
                              }`}
                            >
                              {fund.risk}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">
                                {isHindi ? "NAV मूल्य" : "NAV Value"}
                              </p>
                              <p className="text-3xl font-bold text-primary">
                                {fund.nav}
                              </p>
                            </div>
                            <div className="text-right">
                              <div
                                className={`flex items-center ${
                                  fund.isPositive
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {fund.isPositive ? (
                                  <ArrowUpRight size={20} className="mr-1" />
                                ) : (
                                  <ArrowDownRight size={20} className="mr-1" />
                                )}
                                <span className="font-bold">{fund.change}</span>
                              </div>
                              <p
                                className={`text-sm ${
                                  fund.isPositive
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {fund.changeValue}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {isHindi ? "श्रेणी:" : "Category:"}
                              </span>
                              <span className="font-medium">
                                {fund.category}
                              </span>
                            </div>

                            <Progress
                              value={fund.isPositive ? 75 : 45}
                              className="h-2 bg-accent/30"
                            />

                            <div className="flex gap-2 pt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                              >
                                <Eye size={14} className="mr-2" />
                                {isHindi ? "विवरण" : "Details"}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                              >
                                <Download size={14} className="mr-2" />
                                {isHindi ? "रिपोर्ट" : "Report"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              {/* Performance Section */}
              <motion.div
                variants={itemVariants}
                className="grid lg:grid-cols-3 gap-6"
              >
                <Card className="lg:col-span-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="text-primary mr-3" size={24} />
                      {isHindi
                        ? "फंड परफॉर्मेंस चार्ट"
                        : "Fund Performance Chart"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp
                          size={48}
                          className="text-primary mx-auto mb-4"
                        />
                        <p className="text-muted-foreground">
                          {isHindi
                            ? "चार्ट यहाँ दिखाया जाएगा"
                            : "Chart will be displayed here"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <DollarSign className="mr-2" size={20} />
                      {isHindi ? "कुल निवेश मूल्य" : "Total Investment Value"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">
                        ₹2,45,678
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isHindi ? "वर्तमान मूल्य" : "Current Value"}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          {isHindi ? "निवेशित राशि:" : "Invested Amount:"}
                        </span>
                        <span className="font-medium">₹2,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          {isHindi ? "कुल रिटर्न:" : "Total Return:"}
                        </span>
                        <span className="font-medium text-green-600">
                          +₹45,678
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          {isHindi ? "रिटर्न %:" : "Return %:"}
                        </span>
                        <span className="font-medium text-green-600">
                          +22.84%
                        </span>
                      </div>
                    </div>

                    <Button className="w-full mt-4">
                      <Download className="mr-2" size={16} />
                      {isHindi
                        ? "पूरी रिपोर्ट डाउनलोड करें"
                        : "Download Full Report"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="mt-12">
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="text-primary">
                {isHindi ? "त्वरित कार्य" : "Quick Actions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-16 flex flex-col space-y-1 border-primary/30 hover:bg-primary/5"
                >
                  <Calendar size={20} />
                  <span className="text-xs">
                    {isHindi ? "हिस्टोरिकल NAV" : "Historical NAV"}
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 flex flex-col space-y-1 border-primary/30 hover:bg-primary/5"
                >
                  <Download size={20} />
                  <span className="text-xs">
                    {isHindi ? "NAV रिपोर्ट" : "NAV Report"}
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 flex flex-col space-y-1 border-primary/30 hover:bg-primary/5"
                >
                  <PieChart size={20} />
                  <span className="text-xs">
                    {isHindi ? "फंड फैक्ट शीट" : "Fund Factsheet"}
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 flex flex-col space-y-1 border-primary/30 hover:bg-primary/5"
                >
                  <TrendingUp size={20} />
                  <span className="text-xs">
                    {isHindi ? "बेंचमार्क तुलना" : "Benchmark Compare"}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
