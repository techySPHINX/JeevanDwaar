import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Pages
import Home from "@/pages/home";
import PolicyExplainer from "@/pages/policy-explainer";
import AIRecommender from "@/pages/ai-recommender";
import EducationHub from "@/pages/education-hub";
import Mitra from "@/pages/mitra";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/policy-explainer" component={PolicyExplainer} />
          <Route path="/ai-recommender" component={AIRecommender} />
          <Route path="/education" component={EducationHub} />
          <Route path="/mitra" component={Mitra} />
          <Route path="/admin" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
