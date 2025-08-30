import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Shield,
  CreditCard,
  FileText,
  Bell,
  Settings,
  LogOut,
  IndianRupee,
  TrendingUp,
  Download,
  Eye,
  Phone,
  Mail,
  Edit,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useAuth } from "@/lib/auth-context";
import { useLocation } from "wouter";

export default function UserDashboard() {
  const { language } = useLanguage();
  const { user, logout } = useAuth();
  const [_location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const isHindi = language === "hindi";

  if (!user) {
    setLocation("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  // Mock user data for dashboard
  const userPolicies = [
    {
      id: "SBI001234",
      name: isHindi ? "जीवन सुरक्षा प्लान" : "Life Protection Plan",
      type: isHindi ? "टर्म इंश्योरेंस" : "Term Insurance",
      premium: "₹15,000",
      status: "active",
      nextDue: "2024-09-15",
      coverage: "₹50,00,000",
    },
    {
      id: "SBI005678",
      name: isHindi ? "रिटायरमेंट प्लान" : "Retirement Plan",
      type: isHindi ? "पेंशन योजना" : "Pension Plan",
      premium: "₹25,000",
      status: "active",
      nextDue: "2024-09-20",
      coverage: "₹75,00,000",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "premium",
      amount: "₹15,000",
      date: "2024-08-15",
      policy: "SBI001234",
      status: "completed",
    },
    {
      id: 2,
      type: "bonus",
      amount: "₹2,500",
      date: "2024-08-01",
      policy: "SBI005678",
      status: "credited",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: isHindi ? "प्रीमियम भुगतान अनुस्मारक" : "Premium Payment Reminder",
      message: isHindi
        ? "आपका अगला प्रीमियम 15 सितंबर को देय है"
        : "Your next premium is due on September 15",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "update",
      title: isHindi ? "पॉलिसी अपडेट" : "Policy Update",
      message: isHindi
        ? "आपकी पॉलिसी SBI001234 में नई सुविधाएं जोड़ी गई हैं"
        : "New features added to your policy SBI001234",
      time: "1 day ago",
      unread: false,
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {isHindi ? `स्वागत, ${user.name}` : `Welcome, ${user.name}`}
              </h1>
              <p className="text-muted-foreground">
                {isHindi ? "आपका बीमा डैशबोर्ड" : "Your Insurance Dashboard"}
              </p>
              <Badge
                variant={user.role === "admin" ? "default" : "secondary"}
                className="mt-1"
              >
                {user.role === "admin" ? "Admin" : "User"}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {user.role === "admin" && (
              <Button
                variant="outline"
                onClick={() => setLocation("/admin")}
                className="border-primary/30 hover:bg-primary/5"
              >
                <Settings className="mr-2" size={16} />
                {isHindi ? "एडमिन पैनल" : "Admin Panel"}
              </Button>
            )}
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-300 hover:bg-red-50 text-red-600"
            >
              <LogOut className="mr-2" size={16} />
              {isHindi ? "लॉगआउट" : "Logout"}
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="overview">
                {isHindi ? "सिंहावलोकन" : "Overview"}
              </TabsTrigger>
              <TabsTrigger value="policies">
                {isHindi ? "पॉलिसियां" : "Policies"}
              </TabsTrigger>
              <TabsTrigger value="transactions">
                {isHindi ? "लेनदेन" : "Transactions"}
              </TabsTrigger>
              <TabsTrigger value="profile">
                {isHindi ? "प्रोफाइल" : "Profile"}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "कुल पॉलिसियां" : "Total Policies"}
                          </p>
                          <p className="text-2xl font-bold text-primary">
                            {userPolicies.length}
                          </p>
                        </div>
                        <Shield className="text-primary" size={24} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "कुल कवरेज" : "Total Coverage"}
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            ₹1.25Cr
                          </p>
                        </div>
                        <TrendingUp className="text-green-600" size={24} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "मासिक प्रीमियम" : "Monthly Premium"}
                          </p>
                          <p className="text-2xl font-bold text-blue-600">
                            ₹40,000
                          </p>
                        </div>
                        <IndianRupee className="text-blue-600" size={24} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "अगला भुगतान" : "Next Payment"}
                          </p>
                          <p className="text-2xl font-bold text-orange-600">
                            5 {isHindi ? "दिन" : "days"}
                          </p>
                        </div>
                        <Clock className="text-orange-600" size={24} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Recent Activity & Notifications */}
              <div className="grid lg:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Bell className="mr-2" size={20} />
                        {isHindi ? "नवीनतम सूचनाएं" : "Recent Notifications"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="p-2 bg-primary/10 rounded-full">
                            {notification.type === "reminder" ? (
                              <Clock className="text-primary" size={16} />
                            ) : (
                              <FileText className="text-primary" size={16} />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">
                              {notification.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="mr-2" size={20} />
                        {isHindi ? "हाल की लेनदेन" : "Recent Transactions"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-full">
                              <IndianRupee
                                className="text-green-600"
                                size={16}
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">
                                {transaction.type === "premium"
                                  ? isHindi
                                    ? "प्रीमियम भुगतान"
                                    : "Premium Payment"
                                  : isHindi
                                  ? "बोनस"
                                  : "Bonus"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {transaction.policy}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">
                              {transaction.amount}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Policies Tab */}
            <TabsContent value="policies" className="space-y-6">
              <div className="grid gap-6">
                {userPolicies.map((policy) => (
                  <motion.div key={policy.id} variants={itemVariants}>
                    <Card className="shadow-lg border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Badge variant="secondary">{policy.id}</Badge>
                              <Badge
                                variant={
                                  policy.status === "active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {policy.status === "active"
                                  ? isHindi
                                    ? "सक्रिय"
                                    : "Active"
                                  : isHindi
                                  ? "निष्क्रिय"
                                  : "Inactive"}
                              </Badge>
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">
                                {policy.name}
                              </h3>
                              <p className="text-muted-foreground">
                                {policy.type}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">
                                  {isHindi ? "प्रीमियम" : "Premium"}
                                </p>
                                <p className="font-semibold">
                                  {policy.premium}/year
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  {isHindi ? "कवरेज" : "Coverage"}
                                </p>
                                <p className="font-semibold">
                                  {policy.coverage}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                            <Button size="sm" className="w-full md:w-auto">
                              <Eye className="mr-2" size={14} />
                              {isHindi ? "विवरण देखें" : "View Details"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full md:w-auto"
                            >
                              <Download className="mr-2" size={14} />
                              {isHindi ? "डाउनलोड करें" : "Download"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2" size={20} />
                      {isHindi ? "लेनदेन इतिहास" : "Transaction History"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                              <IndianRupee className="text-primary" size={20} />
                            </div>
                            <div>
                              <p className="font-medium">
                                {transaction.type === "premium"
                                  ? isHindi
                                    ? "प्रीमियम भुगतान"
                                    : "Premium Payment"
                                  : isHindi
                                  ? "बोनस क्रेडिट"
                                  : "Bonus Credit"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {isHindi ? "पॉलिसी:" : "Policy:"}{" "}
                                {transaction.policy}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {transaction.date}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-green-600">
                              {transaction.amount}
                            </p>
                            <Badge variant="secondary">
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2" size={20} />
                      {isHindi ? "व्यक्तिगत जानकारी" : "Personal Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "पूरा नाम" : "Full Name"}
                          </Label>
                          <p className="font-semibold">{user.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "आधार नंबर" : "Aadhar Number"}
                          </Label>
                          <p className="font-semibold font-mono">
                            {user.aadharId}
                          </p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "फोन नंबर" : "Phone Number"}
                          </Label>
                          <div className="flex items-center space-x-2">
                            <Phone
                              className="text-muted-foreground"
                              size={16}
                            />
                            <span className="font-semibold">{user.phone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "ईमेल पता" : "Email Address"}
                          </Label>
                          <div className="flex items-center space-x-2">
                            <Mail className="text-muted-foreground" size={16} />
                            <span className="font-semibold">{user.email}</span>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "खाता स्थिति" : "Account Status"}
                          </Label>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-600" size={16} />
                            <span className="font-semibold text-green-600">
                              {isHindi ? "सत्यापित" : "Verified"}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {isHindi ? "खाता प्रकार" : "Account Type"}
                          </Label>
                          <Badge
                            variant={
                              user.role === "admin" ? "default" : "secondary"
                            }
                          >
                            {user.role === "admin"
                              ? "Administrator"
                              : "Customer"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <Button
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/5"
                      >
                        <Edit className="mr-2" size={16} />
                        {isHindi ? "प्रोफाइल संपादित करें" : "Edit Profile"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <label className={className}>{children}</label>;
}
