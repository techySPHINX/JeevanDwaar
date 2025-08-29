import { 
  users, policies, userPolicies, policyRecommendations, chatbotQueries, mitras,
  type User, type InsertUser, type Policy, type InsertPolicy, 
  type UserPolicy, type InsertUserPolicy, type PolicyRecommendation, 
  type InsertPolicyRecommendation, type ChatbotQuery, type InsertChatbotQuery,
  type Mitra, type InsertMitra
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, lte, count, sql } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Policy operations
  getAllPolicies(): Promise<Policy[]>;
  getPolicyById(id: string): Promise<Policy | undefined>;
  getPoliciesByAgeGroup(ageGroup: string): Promise<Policy[]>;
  createPolicy(policy: InsertPolicy): Promise<Policy>;

  // User policy operations
  getUserPolicies(userId: string): Promise<UserPolicy[]>;
  createUserPolicy(userPolicy: InsertUserPolicy): Promise<UserPolicy>;

  // Recommendation operations
  createRecommendation(recommendation: InsertPolicyRecommendation): Promise<PolicyRecommendation>;
  getRecommendationsBySession(sessionId: string): Promise<PolicyRecommendation[]>;
  updateRecommendationAcceptance(id: string, isAccepted: boolean, selectedPolicyId?: string): Promise<void>;

  // Chatbot operations
  createChatbotQuery(query: InsertChatbotQuery): Promise<ChatbotQuery>;
  getChatbotQueriesByCategory(category: string, limit?: number): Promise<ChatbotQuery[]>;
  getPopularQuestions(limit?: number): Promise<{ question: string; count: number }[]>;

  // Mitra operations
  getAllMitras(): Promise<Mitra[]>;
  getMitrasByArea(area: string): Promise<Mitra[]>;

  // Analytics operations
  getDashboardStats(): Promise<{
    totalPolicies: number;
    activeCustomers: number;
    monthlyRevenue: string;
    acceptanceRate: number;
  }>;
  getLanguageStats(): Promise<{ language: string; percentage: number }[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllPolicies(): Promise<Policy[]> {
    return await db.select().from(policies).where(eq(policies.isActive, true));
  }

  async getPolicyById(id: string): Promise<Policy | undefined> {
    const [policy] = await db.select().from(policies).where(eq(policies.id, id));
    return policy || undefined;
  }

  async getPoliciesByAgeGroup(ageGroup: string): Promise<Policy[]> {
    return await db.select().from(policies)
      .where(and(eq(policies.ageGroup, ageGroup), eq(policies.isActive, true)));
  }

  async createPolicy(insertPolicy: InsertPolicy): Promise<Policy> {
    const [policy] = await db
      .insert(policies)
      .values(insertPolicy)
      .returning();
    return policy;
  }

  async getUserPolicies(userId: string): Promise<UserPolicy[]> {
    return await db.select().from(userPolicies).where(eq(userPolicies.userId, userId));
  }

  async createUserPolicy(insertUserPolicy: InsertUserPolicy): Promise<UserPolicy> {
    const [userPolicy] = await db
      .insert(userPolicies)
      .values(insertUserPolicy)
      .returning();
    return userPolicy;
  }

  async createRecommendation(insertRecommendation: InsertPolicyRecommendation): Promise<PolicyRecommendation> {
    const [recommendation] = await db
      .insert(policyRecommendations)
      .values(insertRecommendation)
      .returning();
    return recommendation;
  }

  async getRecommendationsBySession(sessionId: string): Promise<PolicyRecommendation[]> {
    return await db.select().from(policyRecommendations)
      .where(eq(policyRecommendations.sessionId, sessionId))
      .orderBy(desc(policyRecommendations.createdAt));
  }

  async updateRecommendationAcceptance(id: string, isAccepted: boolean, selectedPolicyId?: string): Promise<void> {
    await db.update(policyRecommendations)
      .set({ 
        isAccepted, 
        selectedPolicyId: selectedPolicyId || null 
      })
      .where(eq(policyRecommendations.id, id));
  }

  async createChatbotQuery(insertQuery: InsertChatbotQuery): Promise<ChatbotQuery> {
    const [query] = await db
      .insert(chatbotQueries)
      .values(insertQuery)
      .returning();
    return query;
  }

  async getChatbotQueriesByCategory(category: string, limit: number = 10): Promise<ChatbotQuery[]> {
    return await db.select().from(chatbotQueries)
      .where(eq(chatbotQueries.category, category))
      .orderBy(desc(chatbotQueries.createdAt))
      .limit(limit);
  }

  async getPopularQuestions(limit: number = 5): Promise<{ question: string; count: number }[]> {
    const result = await db
      .select({
        question: chatbotQueries.question,
        count: count()
      })
      .from(chatbotQueries)
      .groupBy(chatbotQueries.question)
      .orderBy(desc(count()))
      .limit(limit);
    
    return result.map(r => ({ question: r.question, count: Number(r.count) }));
  }

  async getAllMitras(): Promise<Mitra[]> {
    return await db.select().from(mitras).where(eq(mitras.isActive, true));
  }

  async getMitrasByArea(area: string): Promise<Mitra[]> {
    return await db.select().from(mitras)
      .where(and(eq(mitras.area, area), eq(mitras.isActive, true)));
  }

  async getDashboardStats(): Promise<{
    totalPolicies: number;
    activeCustomers: number;
    monthlyRevenue: string;
    acceptanceRate: number;
  }> {
    const [totalPoliciesResult] = await db.select({ count: count() }).from(userPolicies);
    const [activeCustomersResult] = await db.select({ count: count() }).from(users);
    
    const [revenueResult] = await db
      .select({ 
        total: sql<string>`COALESCE(SUM(${policies.monthlyPremium}), 0)` 
      })
      .from(policies)
      .innerJoin(userPolicies, eq(policies.id, userPolicies.policyId));

    const [acceptanceResult] = await db
      .select({
        total: count(),
        accepted: sql<number>`COUNT(CASE WHEN ${policyRecommendations.isAccepted} = true THEN 1 END)`
      })
      .from(policyRecommendations);

    const acceptanceRate = acceptanceResult.total > 0 
      ? (Number(acceptanceResult.accepted) / Number(acceptanceResult.total)) * 100 
      : 0;

    return {
      totalPolicies: Number(totalPoliciesResult.count),
      activeCustomers: Number(activeCustomersResult.count),
      monthlyRevenue: revenueResult.total || "0",
      acceptanceRate: Math.round(acceptanceRate)
    };
  }

  async getLanguageStats(): Promise<{ language: string; percentage: number }[]> {
    const result = await db
      .select({
        language: users.preferredLanguage,
        count: count()
      })
      .from(users)
      .groupBy(users.preferredLanguage);

    const total = result.reduce((sum, item) => sum + Number(item.count), 0);
    
    return result.map(item => ({
      language: item.language || 'hindi',
      percentage: total > 0 ? Math.round((Number(item.count) / total) * 100) : 0
    }));
  }
}

export const storage = new DatabaseStorage();
