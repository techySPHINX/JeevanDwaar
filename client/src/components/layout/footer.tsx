import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { language } = useLanguage();
  const [location] = useLocation();

  const isHindi = language === "hindi";

  // Don't show footer on login page
  if (location === "/login") {
    return null;
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="text-primary-foreground text-lg" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Jeevan Dwaar</h3>
                <p className="text-sm opacity-80">SBI Life Insurance</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              {isHindi
                ? "भारत की सबसे विश्वसनीय जीवन बीमा कंपनी। आपकी भाषा में, आपके लिए।"
                : "India's most trusted life insurance company. In your language, for you."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {isHindi ? "त्वरित लिंक" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isHindi ? "होम" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy-explainer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isHindi ? "पॉलिसी खोजें" : "Find Policy"}
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-recommender"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isHindi ? "क्लेम करें" : "Make Claim"}
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isHindi ? "शिक्षा केंद्र" : "Education Center"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">
              {isHindi ? "सहायता" : "Support"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="text-primary" size={16} />
                <span className="opacity-80">1800-22-9090 (24×7)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-primary" size={16} />
                <span className="opacity-80">help@jeevanhdwaar.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-primary" size={16} />
                <span className="opacity-80">
                  {isHindi ? "निकटतम शाखा खोजें" : "Find Nearest Branch"}
                </span>
              </li>
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h4 className="font-semibold mb-4">
              {isHindi ? "नियामक जानकारी" : "Regulatory Information"}
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>IRDAI Registration No: 111</li>
              <li>CIN: U66010MH2000PLC128423</li>
              <li>BEWARE OF SPURIOUS CALLS</li>
            </ul>

            <div className="mt-4 flex space-x-2">
              <div className="w-12 h-12 bg-secondary-foreground/10 rounded flex items-center justify-center">
                <Shield size={24} className="opacity-60" />
              </div>
              <div className="w-12 h-12 bg-secondary-foreground/10 rounded flex items-center justify-center">
                <Shield size={24} className="opacity-60" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2025 JeevanDwaar Co. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
