import { Switch, Route, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/language-context";
import { AuthProvider, ProtectedRoute } from "@/lib/auth-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatbotPopup } from "@/components/chatbot/chatbot-popup";

const queryClient = new QueryClient();

import Home from "@/pages/home";
import PolicyExplainer from "@/pages/policy-explainer";
import AIRecommender from "@/pages/ai-recommender";
import EducationHub from "@/pages/education-hub";
import Mitra from "@/pages/mitra";
import NotFound from "@/pages/not-found";

// Authentication Pages
import AadharLogin from "@/pages/aadhar-login";
import UserDashboard from "@/pages/user-dashboard";

import PayPremium from "@/pages/services/pay-premium";
import PolicyDetails from "@/pages/services/policy-details";
import ClaimStatus from "@/pages/services/claim-status";
import NAVFund from "@/pages/services/nav-fund";
import DownloadForms from "@/pages/services/download-forms";
import NomineeUpdate from "@/pages/services/nominee-update";

// Product Pages
import ProtectionPlans from "@/pages/products/protection";
import ChildPlans from "@/pages/products/child";
import RetirementPlans from "@/pages/products/retirement";

// SHG Mitras Map
import SHGMitrasMap from "@/pages/shg-mitras-map";

// Admin Dashboard
import AdminDashboard from "@/pages/admin-dashboard";

// Additional Pages
import About from "@/pages/about";
import Contact from "@/pages/contact";

function Router() {
  const [location] = useLocation();
  const isLoginPage = location === "/login";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isLoginPage ? "" : "pt-16"}`}>
        <Switch>
          {/* Login Route - Not Protected */}
          <Route path="/login" component={AadharLogin} />

          {/* All Other Routes - Protected */}
          <Route path="/">
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </Route>
          <Route path="/policy-explainer">
            <ProtectedRoute>
              <PolicyExplainer />
            </ProtectedRoute>
          </Route>
          <Route path="/ai-recommender">
            <ProtectedRoute>
              <AIRecommender />
            </ProtectedRoute>
          </Route>
          <Route path="/education">
            <ProtectedRoute>
              <EducationHub />
            </ProtectedRoute>
          </Route>
          <Route path="/mitra">
            <ProtectedRoute>
              <Mitra />
            </ProtectedRoute>
          </Route>

          <Route path="/dashboard">
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          </Route>
          <Route path="/admin">
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          </Route>

          <Route path="/services/pay-premium">
            <ProtectedRoute>
              <PayPremium />
            </ProtectedRoute>
          </Route>
          <Route path="/services/policy-details">
            <ProtectedRoute>
              <PolicyDetails />
            </ProtectedRoute>
          </Route>
          <Route path="/services/claim-status">
            <ProtectedRoute>
              <ClaimStatus />
            </ProtectedRoute>
          </Route>
          <Route path="/services/nav-fund">
            <ProtectedRoute>
              <NAVFund />
            </ProtectedRoute>
          </Route>
          <Route path="/services/download-forms">
            <ProtectedRoute>
              <DownloadForms />
            </ProtectedRoute>
          </Route>
          <Route path="/services/nominee-update">
            <ProtectedRoute>
              <NomineeUpdate />
            </ProtectedRoute>
          </Route>
          <Route path="/products/protection">
            <ProtectedRoute>
              <ProtectionPlans />
            </ProtectedRoute>
          </Route>
          <Route path="/products/child">
            <ProtectedRoute>
              <ChildPlans />
            </ProtectedRoute>
          </Route>
          <Route path="/products/retirement">
            <ProtectedRoute>
              <RetirementPlans />
            </ProtectedRoute>
          </Route>
          <Route path="/shg-mitras-map">
            <ProtectedRoute>
              <SHGMitrasMap />
            </ProtectedRoute>
          </Route>
          <Route path="/about">
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          </Route>
          <Route path="/contact">
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          </Route>
          <Route>
            <ProtectedRoute>
              <NotFound />
            </ProtectedRoute>
          </Route>
        </Switch>
      </main>
      <Footer />
      <ChatbotPopup />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
