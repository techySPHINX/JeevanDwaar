import { Suspense, lazy } from "react";
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

const Home = lazy(() => import("@/pages/home"));
const PolicyExplainer = lazy(() => import("@/pages/policy-explainer"));
const AIRecommender = lazy(() => import("@/pages/ai-recommender"));
const EducationHub = lazy(() => import("@/pages/education-hub"));
const Mitra = lazy(() => import("@/pages/mitra"));
const NotFound = lazy(() => import("@/pages/not-found"));

const AadharLogin = lazy(() => import("@/pages/aadhar-login"));
const UserDashboard = lazy(() => import("@/pages/user-dashboard"));

const PayPremium = lazy(() => import("@/pages/services/pay-premium"));
const PolicyDetails = lazy(() => import("@/pages/services/policy-details"));
const ClaimStatus = lazy(() => import("@/pages/services/claim-status"));
const NAVFund = lazy(() => import("@/pages/services/nav-fund"));
const DownloadForms = lazy(() => import("@/pages/services/download-forms"));
const NomineeUpdate = lazy(() => import("@/pages/services/nominee-update"));

const ProtectionPlans = lazy(() => import("@/pages/products/protection"));
const ChildPlans = lazy(() => import("@/pages/products/child"));
const RetirementPlans = lazy(() => import("@/pages/products/retirement"));

const SHGMitrasMap = lazy(() => import("@/pages/shg-mitras-map"));

// Admin Dashboard
const AdminDashboard = lazy(() => import("@/pages/admin-dashboard"));

// Additional Pages
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));

function Router() {
  const [location] = useLocation();
  const isLoginPage = location === "/login";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isLoginPage ? "" : "pt-16"}`}>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
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
