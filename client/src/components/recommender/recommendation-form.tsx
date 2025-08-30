import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Home, PiggyBank, Lightbulb, Info } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useMutation } from "@tanstack/react-query";

interface FormData {
  age?: number;
  income?: string;
  dependents?: number;
  goal?: string;
}

export function RecommendationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [recommendation, setRecommendation] = useState<any>(null);
  const { language } = useLanguage();

  const isHindi = language === "hindi";
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Mock recommendation generator for frontend-only UI
  const createRecommendation = useMutation({
    mutationFn: async (data: FormData) => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate mock recommendation based on form data
      let recommendedPlan = "basic";
      let coverAmount = "₹2 लाख";
      let monthlyPremium = "₹25";

      // Logic to determine recommendation based on form data
      if (data.income === "high" || data.dependents! >= 4) {
        recommendedPlan = "premium";
        coverAmount = "₹10 लाख";
        monthlyPremium = "₹100";
      } else if (data.income === "medium" || data.dependents! >= 2) {
        recommendedPlan = "standard";
        coverAmount = "₹5 लाख";
        monthlyPremium = "₹50";
      }

      return {
        plan: recommendedPlan,
        coverAmount,
        monthlyPremium,
        formData: data,
      };
    },
    onSuccess: (data) => {
      setRecommendation(data);
    },
  });

  const ageGroups = [
    { value: 25, label: isHindi ? "18-30 साल" : "18-30 years" },
    { value: 38, label: isHindi ? "31-45 साल" : "31-45 years" },
    { value: 53, label: isHindi ? "46-60 साल" : "46-60 years" },
    { value: 65, label: isHindi ? "60+ साल" : "60+ years" },
  ];

  const incomeRanges = [
    { value: "low", label: "₹15,000 तक" },
    { value: "medium", label: "₹15,000 - ₹50,000" },
    { value: "high", label: "₹50,000 से अधिक" },
  ];

  const dependentCounts = [
    { value: 0, label: isHindi ? "कोई नहीं" : "None" },
    { value: 2, label: isHindi ? "1-2 लोग" : "1-2 people" },
    { value: 4, label: isHindi ? "3-4 लोग" : "3-4 people" },
    { value: 6, label: isHindi ? "5+ लोग" : "5+ people" },
  ];

  const goals = [
    {
      value: "education",
      label: isHindi ? "बच्चों की शिक्षा" : "Children's Education",
      icon: <GraduationCap className="mb-2 text-chart-3" size={24} />,
    },
    {
      value: "protection",
      label: isHindi ? "परिवार की सुरक्षा" : "Family Protection",
      icon: <Home className="mb-2 text-chart-2" size={24} />,
    },
    {
      value: "retirement",
      label: isHindi ? "रिटायरमेंट प्लानिंग" : "Retirement Planning",
      icon: <PiggyBank className="mb-2 text-chart-4" size={24} />,
    },
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      createRecommendation.mutate(formData);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.age !== undefined;
      case 2:
        return formData.income !== undefined;
      case 3:
        return formData.dependents !== undefined;
      case 4:
        return formData.goal !== undefined;
      default:
        return false;
    }
  };

  if (recommendation) {
    return (
      <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
          <Lightbulb className="mr-2" size={20} />
          {isHindi ? "आपके लिए सुझाई गई पॉलिसी" : "Recommended Policy for You"}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">
                {isHindi ? "मूल योजना" : "Basic Plan"}
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                ₹25/माह
              </div>
              <div className="text-sm text-muted-foreground">₹2 लाख कवर</div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-2 border-primary hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm opacity-90 mb-1">
                {isHindi ? "सुझाई गई" : "Recommended"}
              </div>
              <div className="text-2xl font-bold mb-2">₹50/माह</div>
              <div className="text-sm opacity-90">₹5 लाख कवर</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">
                {isHindi ? "प्रीमियम योजना" : "Premium Plan"}
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                ₹100/माह
              </div>
              <div className="text-sm text-muted-foreground">₹10 लाख कवर</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-chart-3/10 border border-chart-3/20 rounded-lg flex items-center space-x-3">
          <Info className="text-chart-3" size={20} />
          <div>
            <div className="font-medium text-chart-3">
              {isHindi
                ? "प्रीमियम बदलाव की जानकारी"
                : "Premium Change Information"}
            </div>
            <div className="text-sm text-muted-foreground">
              {isHindi
                ? "5 साल बाद: ₹75/माह | 10 साल बाद: ₹125/माह"
                : "After 5 years: ₹75/month | After 10 years: ₹125/month"}
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-6"
          size="lg"
          data-testid="select-policy-button"
        >
          {isHindi ? "पॉलिसी चुनें" : "Select Policy"}
        </Button>
      </div>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              {isHindi ? "प्रगति" : "Progress"}
            </span>
            <span className="text-sm text-muted-foreground">
              {isHindi
                ? `चरण ${step} of ${totalSteps}`
                : `Step ${step} of ${totalSteps}`}
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {step === 1 && (
            <div>
              <label className="block text-lg font-semibold text-foreground mb-4">
                {isHindi ? "आपकी उम्र क्या है?" : "What is your age?"}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ageGroups.map((group) => (
                  <Button
                    key={group.value}
                    variant={
                      formData.age === group.value ? "default" : "outline"
                    }
                    className="p-4 font-medium"
                    onClick={() => updateFormData("age", group.value)}
                    data-testid={`age-${group.value}`}
                  >
                    {group.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-lg font-semibold text-foreground mb-4">
                {isHindi
                  ? "आपकी मासिक आय क्या है?"
                  : "What is your monthly income?"}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {incomeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={
                      formData.income === range.value ? "default" : "outline"
                    }
                    className="p-4 font-medium"
                    onClick={() => updateFormData("income", range.value)}
                    data-testid={`income-${range.value}`}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-lg font-semibold text-foreground mb-4">
                {isHindi
                  ? "आप पर कितने लोग निर्भर हैं?"
                  : "How many people depend on you?"}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dependentCounts.map((count) => (
                  <Button
                    key={count.value}
                    variant={
                      formData.dependents === count.value
                        ? "default"
                        : "outline"
                    }
                    className="p-4 font-medium"
                    onClick={() => updateFormData("dependents", count.value)}
                    data-testid={`dependents-${count.value}`}
                  >
                    {count.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block text-lg font-semibold text-foreground mb-4">
                {isHindi
                  ? "आपका मुख्य लक्ष्य क्या है?"
                  : "What is your main goal?"}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {goals.map((goal) => (
                  <Button
                    key={goal.value}
                    variant={
                      formData.goal === goal.value ? "default" : "outline"
                    }
                    className="p-4 font-medium h-auto flex flex-col"
                    onClick={() => updateFormData("goal", goal.value)}
                    data-testid={`goal-${goal.value}`}
                  >
                    {goal.icon}
                    {goal.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            data-testid="previous-button"
          >
            {isHindi ? "पिछला चरण" : "Previous Step"}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isStepComplete() || createRecommendation.isPending}
            data-testid="next-button"
          >
            {createRecommendation.isPending
              ? isHindi
                ? "प्रोसेसिंग..."
                : "Processing..."
              : step === totalSteps
              ? isHindi
                ? "सुझाव प्राप्त करें"
                : "Get Recommendation"
              : isHindi
              ? "अगला चरण"
              : "Next Step"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
