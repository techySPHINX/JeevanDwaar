import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  aadharId: string;
  email: string;
  phone: string;
  role: "user" | "admin";
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (aadharId: string, otp: string) => Promise<boolean>;
  logout: () => void;
  sendOTP: (aadharId: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    name: "राज कुमार शर्मा",
    aadharId: "1234-5678-9012",
    email: "raj.sharma@email.com",
    phone: "+91-9876543210",
    role: "user",
    isVerified: true,
  },
  {
    id: "2",
    name: "Admin User",
    aadharId: "9999-8888-7777",
    email: "admin@sbilife.co.in",
    phone: "+91-1234567890",
    role: "admin",
    isVerified: true,
  },
  {
    id: "3",
    name: "प्रिया गुप्ता",
    aadharId: "5555-4444-3333",
    email: "priya.gupta@email.com",
    phone: "+91-8765432109",
    role: "user",
    isVerified: true,
  },
];

// Mock OTP - In real implementation, this would be sent via SMS
const MOCK_OTP = "123456";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sentOTP, setSentOTP] = useState<string | null>(null);

  // Check for existing session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("jeevandwaar_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("jeevandwaar_user");
      }
    }
    setIsLoading(false);
  }, []);

  const sendOTP = async (aadharId: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Clean Aadhar ID for comparison
    const cleanAadharId = aadharId.replace(/[-\s]/g, "");

    // Check if Aadhar ID exists in our mock database
    const foundUser = mockUsers.find(
      (user) => user.aadharId.replace(/[-\s]/g, "") === cleanAadharId
    );

    if (foundUser) {
      setSentOTP(MOCK_OTP);
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  const login = async (aadharId: string, otp: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Verify OTP
    if (otp !== MOCK_OTP) {
      setIsLoading(false);
      return false;
    }

    // Clean Aadhar ID for comparison
    const cleanAadharId = aadharId.replace(/[-\s]/g, "");

    // Find user by Aadhar ID
    const foundUser = mockUsers.find(
      (user) => user.aadharId.replace(/[-\s]/g, "") === cleanAadharId
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("jeevandwaar_user", JSON.stringify(foundUser));
      setSentOTP(null);
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setSentOTP(null);
    localStorage.removeItem("jeevandwaar_user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    sendOTP,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Protected Route Component
export function ProtectedRoute({
  children,
  requireAdmin = false,
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
}) {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = "/login";
    return null;
  }

  if (requireAdmin && user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Access Denied
          </h1>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
