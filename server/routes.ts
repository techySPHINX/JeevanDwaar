import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPolicyRecommendationSchema, insertChatbotQuerySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all policies
  app.get("/api/policies", async (req, res) => {
    try {
      const policies = await storage.getAllPolicies();
      res.json(policies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch policies" });
    }
  });

  // Get policies by age group
  app.get("/api/policies/age/:ageGroup", async (req, res) => {
    try {
      const { ageGroup } = req.params;
      const policies = await storage.getPoliciesByAgeGroup(ageGroup);
      res.json(policies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch policies for age group" });
    }
  });

  // Create policy recommendation
  app.post("/api/recommendations", async (req, res) => {
    try {
      const data = insertPolicyRecommendationSchema.parse(req.body);
      
      // Simple recommendation logic based on age and income
      let recommendedPolicyIds: string[] = [];
      
      if (data.age && data.age <= 30) {
        recommendedPolicyIds = ["basic-plan", "family-plan"];
      } else if (data.age && data.age <= 45) {
        recommendedPolicyIds = ["family-plan", "premium-plan"];
      } else {
        recommendedPolicyIds = ["premium-plan", "senior-plan"];
      }

      const recommendation = await storage.createRecommendation({
        ...data,
        recommendedPolicyIds
      });
      
      res.json(recommendation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create recommendation" });
      }
    }
  });

  // Get recommendations by session
  app.get("/api/recommendations/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const recommendations = await storage.getRecommendationsBySession(sessionId);
      res.json(recommendations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recommendations" });
    }
  });

  // Accept recommendation
  app.patch("/api/recommendations/:id/accept", async (req, res) => {
    try {
      const { id } = req.params;
      const { selectedPolicyId } = req.body;
      
      await storage.updateRecommendationAcceptance(id, true, selectedPolicyId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to accept recommendation" });
    }
  });

  // Chatbot query
  app.post("/api/chatbot/query", async (req, res) => {
    try {
      const data = insertChatbotQuerySchema.parse(req.body);
      
      // Simple chatbot response logic
      let answer = "मैं आपकी मदद करने की कोशिश कर रहा हूं। कृपया अधिक विस्तार से बताएं।";
      let category = "general";

      const question = data.question.toLowerCase();
      
      if (question.includes("प्रीमियम") || question.includes("premium")) {
        answer = "प्रीमियम भुगतान के लिए आप ऑनलाइन, UPI, या नजदीकी शाखा का उपयोग कर सकते हैं।";
        category = "premium";
      } else if (question.includes("क्लेम") || question.includes("claim")) {
        answer = "क्लेम करने के लिए: 1) हेल्पलाइन पर कॉल करें 2) जरूरी दस्तावेज तैयार करें 3) फॉर्म भरें";
        category = "claim";
      } else if (question.includes("पॉलिसी") || question.includes("policy")) {
        answer = "आपकी पॉलिसी की जानकारी के लिए अपना पॉलिसी नंबर या रजिस्टर्ड मोबाइल नंबर बताएं।";
        category = "policy";
      }

      const query = await storage.createChatbotQuery({
        ...data,
        answer,
        category
      });
      
      res.json(query);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process chatbot query" });
      }
    }
  });

  // Get popular questions for admin dashboard
  app.get("/api/chatbot/popular", async (req, res) => {
    try {
      const popular = await storage.getPopularQuestions(5);
      res.json(popular);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch popular questions" });
    }
  });

  // Get all mitras
  app.get("/api/mitras", async (req, res) => {
    try {
      const mitras = await storage.getAllMitras();
      res.json(mitras);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch mitras" });
    }
  });

  // Get mitras by area
  app.get("/api/mitras/area/:area", async (req, res) => {
    try {
      const { area } = req.params;
      const mitras = await storage.getMitrasByArea(area);
      res.json(mitras);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch mitras for area" });
    }
  });

  // Dashboard stats
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
  });

  // Language statistics
  app.get("/api/dashboard/language-stats", async (req, res) => {
    try {
      const stats = await storage.getLanguageStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch language statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
