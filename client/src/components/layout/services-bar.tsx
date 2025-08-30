import { useState } from "react";
import { Link } from "wouter";
import {
  User,
  GraduationCap,
  Shield,
  Settings,
  Info,
  Phone,
  ChevronDown,
  CreditCard,
  FileText,
  Calculator,
  Download,
  MessageCircle,
  Users,
  MapPin,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/language-context";
import { useAuth } from "@/lib/auth-context";
import { useLocation } from "wouter";

export function ServicesBar() {
  const { language } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();
  const isHindi = language === "hindi";

  // Don't show services bar on login page
  if (location === "/login") {
    return null;
  }

  const servicesMenuItems = [
    {
      icon: <CreditCard size={16} />,
      label: isHindi ? "प्रीमियम भुगतान" : "Pay Premium",
      href: "/services/pay-premium",
      description: isHindi
        ? "ऑनलाइन प्रीमियम भुगतान करें"
        : "Pay your premium online",
    },
    {
      icon: <FileText size={16} />,
      label: isHindi ? "पॉलिसी विवरण" : "Policy Details",
      href: "/services/policy-details",
      description: isHindi
        ? "अपनी पॉलिसी की जानकारी देखें"
        : "View your policy information",
    },
    {
      icon: <Calculator size={16} />,
      label: isHindi ? "NAV और फंड वैल्यू" : "NAV & Fund Value",
      href: "/services/nav-fund",
      description: isHindi
        ? "फंड की वर्तमान वैल्यू जांचें"
        : "Check current fund values",
    },
    {
      icon: <Download size={16} />,
      label: isHindi ? "फॉर्म डाउनलोड" : "Download Forms",
      href: "/services/download-forms",
      description: isHindi
        ? "आवश्यक फॉर्म डाउनलोड करें"
        : "Download required forms",
    },
    {
      icon: <MessageCircle size={16} />,
      label: isHindi ? "क्लेम स्थिति" : "Claim Status",
      href: "/services/claim-status",
      description: isHindi
        ? "अपने क्लेम की स्थिति जांचें"
        : "Check your claim status",
    },
    {
      icon: <Users size={16} />,
      label: isHindi ? "नॉमिनी अपडेट" : "Update Nominee",
      href: "/services/nominee-update",
      description: isHindi
        ? "नॉमिनी की जानकारी अपडेट करें"
        : "Update nominee information",
    },
    {
      icon: <MapPin size={16} />,
      label: isHindi ? "नजदीकी SHG मित्र" : "Nearby SHG Mitras",
      href: "/shg-mitras-map",
      description: isHindi
        ? "अपने क्षेत्र में SHG मित्र खोजें"
        : "Find SHG mitras in your area",
    },
  ];

  const productsMenuItems = [
    {
      icon: <Shield size={16} />,
      label: isHindi ? "सुरक्षा योजनाएं" : "Protection Plans",
      href: "/products/protection",
      description: isHindi
        ? "परिवार की सुरक्षा के लिए"
        : "For family protection",
    },
    {
      icon: <GraduationCap size={16} />,
      label: isHindi ? "बच्चों की योजनाएं" : "Child Plans",
      href: "/products/child",
      description: isHindi
        ? "बच्चों के भविष्य के लिए"
        : "For children's future",
    },
    {
      icon: <Settings size={16} />,
      label: isHindi ? "रिटायरमेंट योजनाएं" : "Retirement Plans",
      href: "/products/retirement",
      description: isHindi ? "सुरक्षित भविष्य के लिए" : "For secure future",
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            {/* Login/User Button */}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                  >
                    <User size={16} className="mr-2" />
                    {user.name.split(" ")[0]} {/* Show first name */}
                    <ChevronDown size={14} className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <div className="px-2 py-1.5 text-sm font-medium text-foreground">
                    {user.name}
                  </div>
                  <div className="px-2 py-1 text-xs text-muted-foreground">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard size={16} className="mr-2" />
                      {isHindi ? "डैशबोर्ड" : "Dashboard"}
                    </Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">
                        <Settings size={16} className="mr-2" />
                        {isHindi ? "एडमिन पैनल" : "Admin Panel"}
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut size={16} className="mr-2" />
                    {isHindi ? "लॉगआउट" : "Logout"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                asChild
              >
                <Link href="/login">
                  <User size={16} className="mr-2" />
                  {isHindi ? "लॉगिन" : "LOGIN"}
                </Link>
              </Button>
            )}

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                >
                  <GraduationCap size={16} className="mr-2" />
                  {isHindi ? "सीखें" : "LEARN"}
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/education" className="w-full">
                    <div>
                      <div className="font-medium">
                        {isHindi ? "शिक्षा केंद्र" : "Education Hub"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {isHindi
                          ? "बीमा के बारे में जानें"
                          : "Learn about insurance"}
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-recommender" className="w-full">
                    <div>
                      <div className="font-medium">
                        {isHindi ? "AI सलाहकार" : "AI Recommender"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {isHindi
                          ? "व्यक्तिगत सुझाव पाएं"
                          : "Get personalized recommendations"}
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                >
                  <Shield size={16} className="mr-2" />
                  {isHindi ? "उत्पाद" : "PRODUCTS"}
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                {productsMenuItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link href={item.href} className="w-full">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">{item.icon}</div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                >
                  <Settings size={16} className="mr-2" />
                  {isHindi ? "सेवाएं" : "SERVICES"}
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <div className="p-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {isHindi
                      ? "मौजूदा ग्राहकों के लिए"
                      : "For Existing Customers"}
                  </div>
                </div>
                <DropdownMenuSeparator />
                {servicesMenuItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link href={item.href} className="w-full">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">{item.icon}</div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About */}
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
              asChild
            >
              <Link href="/about">
                <Info size={16} className="mr-2" />
                {isHindi ? "हमारे बारे में" : "ABOUT"}
              </Link>
            </Button>

            {/* Contact */}
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-medium"
              asChild
            >
              <Link href="/contact">
                <Phone size={16} className="mr-2" />
                {isHindi ? "संपर्क" : "CONTACT-US"}
              </Link>
            </Button>
          </div>

          {/* Right side - Quick Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/shg-mitras-map">
              <Button
                variant="outline"
                size="sm"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <MapPin size={16} className="mr-2" />
                {isHindi ? "नजदीकी मित्र" : "Nearby Mitras"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
