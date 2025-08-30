import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Calendar, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PayPremium() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
            <CreditCard className="text-primary mr-3" size={32} />
            {isHindi ? "प्रीमियम भुगतान" : "Premium Payment"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isHindi
              ? "आसान और सुरक्षित ऑनलाइन प्रीमियम भुगतान"
              : "Easy and secure online premium payment"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="text-primary mr-2" size={20} />
                {isHindi ? "पॉलिसी विवरण" : "Policy Details"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="policyNumber">
                  {isHindi ? "पॉलिसी नंबर" : "Policy Number"}
                </Label>
                <Input
                  id="policyNumber"
                  placeholder={
                    isHindi
                      ? "अपना पॉलिसी नंबर दर्ज करें"
                      : "Enter your policy number"
                  }
                />
              </div>
              <div>
                <Label htmlFor="dob">
                  {isHindi ? "जन्मतिथि" : "Date of Birth"}
                </Label>
                <Input id="dob" type="date" />
              </div>
              <Button className="w-full">
                {isHindi ? "पॉलिसी सत्यापित करें" : "Verify Policy"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                {isHindi ? "भुगतान का इतिहास" : "Payment History"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <div>
                    <div className="font-medium">₹5,000</div>
                    <div className="text-sm text-muted-foreground">
                      {isHindi ? "15 मार्च 2024" : "March 15, 2024"}
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">
                    {isHindi ? "भुगतान किया गया" : "Paid"}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                  <div>
                    <div className="font-medium">₹5,000</div>
                    <div className="text-sm text-muted-foreground">
                      {isHindi ? "15 फरवरी 2024" : "February 15, 2024"}
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">
                    {isHindi ? "भुगतान किया गया" : "Paid"}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div>
                    <div className="font-medium">₹5,000</div>
                    <div className="text-sm text-muted-foreground">
                      {isHindi ? "15 अप्रैल 2024" : "April 15, 2024"}
                    </div>
                  </div>
                  <span className="text-yellow-600 font-medium">
                    {isHindi ? "लंबित" : "Due"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>
              {isHindi ? "त्वरित भुगतान विकल्प" : "Quick Payment Options"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col">
                <CreditCard size={24} className="mb-2" />
                <span className="text-sm">
                  {isHindi ? "डेबिट कार्ड" : "Debit Card"}
                </span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col">
                <CreditCard size={24} className="mb-2" />
                <span className="text-sm">
                  {isHindi ? "क्रेडिट कार्ड" : "Credit Card"}
                </span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col">
                <Shield size={24} className="mb-2" />
                <span className="text-sm">
                  {isHindi ? "नेट बैंकिंग" : "Net Banking"}
                </span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col">
                <CreditCard size={24} className="mb-2" />
                <span className="text-sm">UPI</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
