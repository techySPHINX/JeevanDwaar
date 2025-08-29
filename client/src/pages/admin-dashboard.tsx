import { useState } from 'react';
import { BarChart, Users, TrendingUp, IndianRupee, Target, MessageSquare, Globe, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/language-context';

export default function AdminDashboard() {
  const { language } = useLanguage();
  const isHindi = language === 'hindi';

  const { data: stats } = useQuery<{
    totalPolicies: number;
    activeCustomers: number;
    monthlyRevenue: string;
    acceptanceRate: number;
  }>({
    queryKey: ['/api/dashboard/stats']
  });

  const { data: languageStats } = useQuery<Array<{ language: string; percentage: number }>>({
    queryKey: ['/api/dashboard/language-stats']
  });

  const { data: popularQuestions } = useQuery<Array<{ question: string; count: number }>>({
    queryKey: ['/api/chatbot/popular']
  });

  // Mock data for charts and analytics
  const kpiData = [
    {
      title: isHindi ? "नई पॉलिसी (इस महीने)" : "New Policies (This Month)",
      value: stats?.totalPolicies || 1247,
      change: "+12%",
      icon: <TrendingUp className="text-primary" size={24} />,
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      title: isHindi ? "सक्रिय ग्राहक" : "Active Customers",
      value: stats?.activeCustomers || 15432,
      change: "+8%",
      icon: <Users className="text-chart-2" size={24} />,
      bgColor: "bg-chart-2/5",
      borderColor: "border-chart-2/20"
    },
    {
      title: isHindi ? "मासिक प्रीमियम" : "Monthly Premium",
      value: `₹${parseFloat(stats?.monthlyRevenue || "24000000").toLocaleString('en-IN')}`,
      change: "+15%",
      icon: <IndianRupee className="text-chart-3" size={24} />,
      bgColor: "bg-chart-3/5",
      borderColor: "border-chart-3/20"
    },
    {
      title: isHindi ? "पॉलिसी स्वीकृति दर" : "Policy Acceptance Rate",
      value: `${stats?.acceptanceRate || 87}%`,
      change: "+5%",
      icon: <Target className="text-chart-4" size={24} />,
      bgColor: "bg-chart-4/5",
      borderColor: "border-chart-4/20"
    }
  ];

  const mockRecommendationData = [
    { label: isHindi ? "सुझाई गई" : "Recommended", value: 2156, percentage: 100 },
    { label: isHindi ? "स्वीकार की गई" : "Accepted", value: 1876, percentage: 87 },
    { label: isHindi ? "भुगतान पूरा" : "Payment Complete", value: 1634, percentage: 76 }
  ];

  const mockLanguageData: Array<{ language: string; percentage: number }> = languageStats || [
    { language: 'hindi', percentage: 67 },
    { language: 'english', percentage: 23 },
    { language: 'telugu', percentage: 10 }
  ];

  const mockPopularQuestions: Array<{ question: string; count: number }> = popularQuestions || [
    { question: isHindi ? "प्रीमियम भुगतान कैसे करें?" : "How to pay premium?", count: 142 },
    { question: isHindi ? "क्लेम कैसे करें?" : "How to make a claim?", count: 98 },
    { question: isHindi ? "पॉलिसी विवरण देखें" : "View policy details", count: 87 },
    { question: isHindi ? "नॉमिनी कैसे बदलें?" : "How to change nominee?", count: 65 },
    { question: isHindi ? "प्रीमियम छूट" : "Premium discount", count: 43 }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {isHindi ? "SBI Life Dashboard" : "SBI Life Dashboard"}
                </CardTitle>
                <p className="text-muted-foreground">
                  {isHindi ? "प्रबंधन और विश्लेषण पैनल" : "Management and Analytics Panel"}
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-accent rounded-lg p-1">
                <Badge className="bg-primary text-primary-foreground">Live</Badge>
                <span className="text-sm text-muted-foreground">
                  {isHindi ? "अंतिम अपडेट: अभी" : "Last updated: Now"}
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* KPI Cards */}
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {kpiData.map((kpi, index) => (
                <Card key={index} className={`${kpi.bgColor} border ${kpi.borderColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      {kpi.icon}
                      <Badge variant="secondary" className="text-xs">
                        {kpi.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                    <div className="text-sm text-muted-foreground">{kpi.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Policy Recommendations vs Accepted */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BarChart className="mr-2" size={20} />
                    {isHindi ? "पॉलिसी सुझाव बनाम स्वीकृति" : "Policy Recommendations vs Acceptance"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockRecommendationData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Chatbot Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquare className="mr-2" size={20} />
                    {isHindi ? "चैटबॉट - सामान्य प्रश्न" : "Chatbot - Common Questions"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mockPopularQuestions.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-accent rounded-lg">
                      <span className="text-sm text-foreground flex-1 truncate">
                        {item.question}
                      </span>
                      <Badge variant="secondary" className="ml-2">
                        {item.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Language Preferences & Revenue */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="mr-2" size={20} />
                      {isHindi ? "भाषा प्राथमिकताएं" : "Language Preferences"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockLanguageData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-foreground capitalize">{item.language}</span>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <PieChart className="mr-2" size={20} />
                      {isHindi ? "आय प्रक्षेपण" : "Revenue Projection"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">₹15.6 करोड़</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {isHindi ? "वार्षिक अनुमान" : "Annual Estimate"}
                    </div>
                    <Badge className="bg-chart-2/20 text-chart-2">
                      {isHindi ? "पिछले वर्ष से 18% वृद्धि" : "18% growth from last year"}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Analytics */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {isHindi ? "विस्तृत विश्लेषण" : "Detailed Analytics"}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Age Group Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {isHindi ? "आयु समूह वितरण" : "Age Group Distribution"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { group: "18-30", percentage: 35, color: "bg-primary" },
                      { group: "31-45", percentage: 40, color: "bg-chart-2" },
                      { group: "46-60", percentage: 20, color: "bg-chart-3" },
                      { group: "60+", percentage: 5, color: "bg-chart-4" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-foreground">{item.group} years</span>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Monthly Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {isHindi ? "मासिक रुझान" : "Monthly Trends"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                        <div>
                          <div className="font-medium">{isHindi ? "नई पॉलिसी" : "New Policies"}</div>
                          <div className="text-sm text-muted-foreground">
                            {isHindi ? "इस महीने" : "This month"}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">1,247</div>
                          <Badge className="bg-chart-2/20 text-chart-2">+12%</Badge>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-chart-2/5 rounded-lg">
                        <div>
                          <div className="font-medium">{isHindi ? "क्लेम संसाधित" : "Claims Processed"}</div>
                          <div className="text-sm text-muted-foreground">
                            {isHindi ? "इस महीने" : "This month"}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-chart-2">342</div>
                          <Badge className="bg-chart-3/20 text-chart-3">+8%</Badge>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-chart-3/5 rounded-lg">
                        <div>
                          <div className="font-medium">{isHindi ? "ग्राहक संतुष्टि" : "Customer Satisfaction"}</div>
                          <div className="text-sm text-muted-foreground">
                            {isHindi ? "औसत रेटिंग" : "Average rating"}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-chart-3">4.8/5</div>
                          <Badge className="bg-chart-4/20 text-chart-4">+0.2</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Performance Metrics */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {isHindi ? "प्रदर्शन मेट्रिक्स" : "Performance Metrics"}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {isHindi ? "मित्र प्रदर्शन" : "Mitra Performance"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "राजेश कुमार", area: "सोनीपत", policies: 45, rating: 4.9 },
                        { name: "प्रिया शर्मा", area: "मेरठ", policies: 38, rating: 4.8 },
                        { name: "अमित वर्मा", area: "गुड़गांव", policies: 42, rating: 4.7 },
                        { name: "सुनीता देवी", area: "रोहतक", policies: 35, rating: 4.6 }
                      ].map((mitra, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                          <div>
                            <div className="font-medium">{mitra.name}</div>
                            <div className="text-sm text-muted-foreground">{mitra.area}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{mitra.policies} policies</div>
                            <div className="text-xs text-muted-foreground">⭐ {mitra.rating}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      {isHindi ? "क्षेत्रीय प्रदर्शन" : "Regional Performance"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { region: "हरियाणा", policies: 1250, growth: "+15%" },
                        { region: "उत्तर प्रदेश", policies: 980, growth: "+12%" },
                        { region: "पंजाब", policies: 875, growth: "+18%" },
                        { region: "राजस्थान", policies: 645, growth: "+8%" }
                      ].map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <div className="font-medium">{region.region}</div>
                            <div className="text-sm text-muted-foreground">
                              {region.policies} {isHindi ? "पॉलिसी" : "policies"}
                            </div>
                          </div>
                          <Badge 
                            className={`${
                              parseFloat(region.growth.slice(1, -1)) >= 15 
                                ? "bg-chart-2/20 text-chart-2" 
                                : "bg-chart-3/20 text-chart-3"
                            }`}
                          >
                            {region.growth}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
