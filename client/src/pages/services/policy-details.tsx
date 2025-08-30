import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Download, Eye } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PolicyDetails() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  const mockPolicyData = {
    policyNumber: "SBI-LIFE-123456789",
    policyType: isHindi ? "संपूर्ण सुरक्षा योजना" : "Sampoorna Suraksha Plan",
    premiumAmount: "₹5,000",
    coverageAmount: "₹10,00,000",
    maturityDate: "2045-03-15",
    status: isHindi ? "सक्रिय" : "Active",
    nextDueDate: "2024-04-15",
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
            <FileText className="text-primary mr-3" size={32} />
            {isHindi ? "पॉलिसी विवरण" : "Policy Details"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "अपनी पॉलिसी की संपूर्ण जानकारी यहाँ देखें"
              : "View complete information about your policy"}
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="text-primary mr-2" size={20} />
              {isHindi ? "पॉलिसी खोजें" : "Search Policy"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="policySearch">
                  {isHindi ? "पॉलिसी नंबर" : "Policy Number"}
                </Label>
                <Input
                  id="policySearch"
                  placeholder={
                    isHindi ? "पॉलिसी नंबर दर्ज करें" : "Enter policy number"
                  }
                />
              </div>
              <div>
                <Label htmlFor="dobSearch">
                  {isHindi ? "जन्मतिथि" : "Date of Birth"}
                </Label>
                <Input id="dobSearch" type="date" />
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

        {/* Policy Information */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {isHindi ? "पॉलिसी की जानकारी" : "Policy Information"}
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {mockPolicyData.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "पॉलिसी नंबर" : "Policy Number"}
                    </Label>
                    <div className="font-medium text-lg">
                      {mockPolicyData.policyNumber}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "पॉलिसी का प्रकार" : "Policy Type"}
                    </Label>
                    <div className="font-medium text-lg">
                      {mockPolicyData.policyType}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "प्रीमियम राशि" : "Premium Amount"}
                    </Label>
                    <div className="font-medium text-lg text-primary">
                      {mockPolicyData.premiumAmount}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "कवरेज राशि" : "Coverage Amount"}
                    </Label>
                    <div className="font-medium text-lg text-green-600">
                      {mockPolicyData.coverageAmount}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "मैच्योरिटी तिथि" : "Maturity Date"}
                    </Label>
                    <div className="font-medium text-lg">
                      {mockPolicyData.maturityDate}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      {isHindi ? "अगली भुगतान तिथि" : "Next Due Date"}
                    </Label>
                    <div className="font-medium text-lg text-orange-600">
                      {mockPolicyData.nextDueDate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  {isHindi ? "त्वरित कार्य" : "Quick Actions"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="mr-2" size={16} />
                  {isHindi ? "पॉलिसी दस्तावेज देखें" : "View Policy Document"}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2" size={16} />
                  {isHindi ? "पॉलिसी डाउनलोड करें" : "Download Policy"}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2" size={16} />
                  {isHindi ? "प्रीमियम रसीद" : "Premium Receipt"}
                </Button>
                <Button className="w-full">
                  {isHindi ? "प्रीमियम का भुगतान करें" : "Pay Premium"}
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>
                  {isHindi ? "संपर्क सहायता" : "Contact Support"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">
                      {isHindi ? "ग्राहक सेवा:" : "Customer Care:"}
                    </span>
                    <br />
                    1800-267-9090
                  </div>
                  <div>
                    <span className="font-medium">
                      {isHindi ? "ईमेल:" : "Email:"}
                    </span>
                    <br />
                    care@sbilife.co.in
                  </div>
                  <div>
                    <span className="font-medium">
                      {isHindi ? "समय:" : "Timing:"}
                    </span>
                    <br />
                    {isHindi
                      ? "सोमवार - शनिवार 10AM - 7PM"
                      : "Monday - Saturday 10AM - 7PM"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
