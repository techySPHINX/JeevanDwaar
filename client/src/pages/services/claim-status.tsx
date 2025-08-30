import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ClaimStatus() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const mockClaims = [
    {
      id: "CLM-2024-001234",
      type: isHindi ? "मृत्यु दावा" : "Death Claim",
      amount: "₹10,00,000",
      status: isHindi ? "स्वीकृत" : "Approved",
      statusColor: "green",
      submitDate: "2024-02-15",
      lastUpdate: "2024-03-01",
    },
    {
      id: "CLM-2024-001235",
      type: isHindi ? "मैच्योरिटी दावा" : "Maturity Claim",
      amount: "₹5,50,000",
      status: isHindi ? "प्रक्रिया में" : "In Process",
      statusColor: "yellow",
      submitDate: "2024-03-10",
      lastUpdate: "2024-03-20",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
            <MessageCircle className="text-primary mr-3" size={32} />
            {isHindi ? "दावा स्थिति" : "Claim Status"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "अपने दावे की वर्तमान स्थिति की जांच करें"
              : "Check the current status of your claims"}
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="text-primary mr-2" size={20} />
              {isHindi ? "दावा खोजें" : "Search Claim"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="claimNumber">
                  {isHindi ? "दावा संख्या" : "Claim Number"}
                </Label>
                <Input
                  id="claimNumber"
                  placeholder={
                    isHindi ? "दावा संख्या दर्ज करें" : "Enter claim number"
                  }
                />
              </div>
              <div>
                <Label htmlFor="policyNumber">
                  {isHindi ? "पॉलिसी संख्या" : "Policy Number"}
                </Label>
                <Input
                  id="policyNumber"
                  placeholder={
                    isHindi ? "पॉलिसी संख्या दर्ज करें" : "Enter policy number"
                  }
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="mr-2" size={16} />
                  {isHindi ? "खोजें" : "Search"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claims List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            {isHindi ? "आपके दावे" : "Your Claims"}
          </h2>

          {mockClaims.map((claim) => (
            <Card key={claim.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{claim.id}</CardTitle>
                  <Badge
                    variant="secondary"
                    className={
                      claim.statusColor === "green"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {claim.statusColor === "green" ? (
                      <CheckCircle className="mr-1" size={14} />
                    ) : (
                      <Clock className="mr-1" size={14} />
                    )}
                    {claim.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "दावे का प्रकार" : "Claim Type"}
                    </Label>
                    <div className="font-medium">{claim.type}</div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "दावा राशि" : "Claim Amount"}
                    </Label>
                    <div className="font-medium text-primary text-lg">
                      {claim.amount}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "जमा करने की तारीख" : "Submit Date"}
                    </Label>
                    <div className="font-medium">{claim.submitDate}</div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "अंतिम अपडेट" : "Last Update"}
                    </Label>
                    <div className="font-medium">{claim.lastUpdate}</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    {isHindi ? "विवरण देखें" : "View Details"}
                  </Button>
                  <Button variant="outline" size="sm">
                    {isHindi ? "दस्तावेज डाउनलोड करें" : "Download Documents"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit New Claim */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="text-primary mr-2" size={20} />
              {isHindi ? "नया दावा जमा करें" : "Submit New Claim"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">
                  {isHindi ? "दावे के प्रकार" : "Claim Types"}
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    {isHindi ? "मृत्यु दावा" : "Death Claim"}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    {isHindi ? "मैच्योरिटी दावा" : "Maturity Claim"}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    {isHindi ? "सरेंडर दावा" : "Surrender Claim"}
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">
                  {isHindi ? "आवश्यक दस्तावेज" : "Required Documents"}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • {isHindi ? "भरा हुआ दावा फॉर्म" : "Filled claim form"}
                  </li>
                  <li>• {isHindi ? "पॉलिसी दस्तावेज" : "Policy document"}</li>
                  <li>• {isHindi ? "पहचान प्रमाण" : "Identity proof"}</li>
                  <li>• {isHindi ? "पता प्रमाण" : "Address proof"}</li>
                  <li>
                    • {isHindi ? "बैंक खाता विवरण" : "Bank account details"}
                  </li>
                </ul>
                <Button className="w-full mt-4">
                  {isHindi ? "दावा फॉर्म डाउनलोड करें" : "Download Claim Form"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
