import { sql, relations } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  phone: text("phone"),
  preferredLanguage: text("preferred_language").default("hindi"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const policies = pgTable("policies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  coverageAmount: decimal("coverage_amount", { precision: 12, scale: 2 }).notNull(),
  monthlyPremium: decimal("monthly_premium", { precision: 8, scale: 2 }).notNull(),
  ageGroup: text("age_group").notNull(), // 18-30, 31-45, 46-60, 60+
  duration: integer("duration").notNull(), // in years
  isActive: boolean("is_active").default(true),
  features: jsonb("features"), // JSON array of features
  exclusions: jsonb("exclusions"), // JSON array of exclusions
  createdAt: timestamp("created_at").defaultNow(),
});

export const userPolicies = pgTable("user_policies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  policyId: varchar("policy_id").references(() => policies.id),
  status: text("status").default("active"), // active, lapsed, claimed
  startDate: timestamp("start_date").defaultNow(),
  nextPremiumDate: timestamp("next_premium_date"),
  nomineeDetails: jsonb("nominee_details"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const policyRecommendations = pgTable("policy_recommendations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  age: integer("age"),
  income: text("income_range"),
  dependents: integer("dependents"),
  goal: text("goal"),
  recommendedPolicyIds: jsonb("recommended_policy_ids"),
  selectedPolicyId: varchar("selected_policy_id").references(() => policies.id),
  isAccepted: boolean("is_accepted").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatbotQueries = pgTable("chatbot_queries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  question: text("question").notNull(),
  answer: text("answer"),
  category: text("category"), // premium, claim, policy, nominee
  language: text("language").default("hindi"),
  isResolved: boolean("is_resolved").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mitras = pgTable("mitras", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  area: text("area").notNull(),
  languages: jsonb("languages"), // supported languages
  isActive: boolean("is_active").default(true),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  userPolicies: many(userPolicies),
}));

export const policiesRelations = relations(policies, ({ many }) => ({
  userPolicies: many(userPolicies),
  recommendations: many(policyRecommendations),
}));

export const userPoliciesRelations = relations(userPolicies, ({ one }) => ({
  user: one(users, {
    fields: [userPolicies.userId],
    references: [users.id],
  }),
  policy: one(policies, {
    fields: [userPolicies.policyId],
    references: [policies.id],
  }),
}));

export const policyRecommendationsRelations = relations(policyRecommendations, ({ one }) => ({
  selectedPolicy: one(policies, {
    fields: [policyRecommendations.selectedPolicyId],
    references: [policies.id],
  }),
}));

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertPolicySchema = createInsertSchema(policies).omit({
  id: true,
  createdAt: true,
});

export const insertUserPolicySchema = createInsertSchema(userPolicies).omit({
  id: true,
  createdAt: true,
});

export const insertPolicyRecommendationSchema = createInsertSchema(policyRecommendations).omit({
  id: true,
  createdAt: true,
});

export const insertChatbotQuerySchema = createInsertSchema(chatbotQueries).omit({
  id: true,
  createdAt: true,
});

export const insertMitraSchema = createInsertSchema(mitras).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPolicy = z.infer<typeof insertPolicySchema>;
export type Policy = typeof policies.$inferSelect;

export type InsertUserPolicy = z.infer<typeof insertUserPolicySchema>;
export type UserPolicy = typeof userPolicies.$inferSelect;

export type InsertPolicyRecommendation = z.infer<typeof insertPolicyRecommendationSchema>;
export type PolicyRecommendation = typeof policyRecommendations.$inferSelect;

export type InsertChatbotQuery = z.infer<typeof insertChatbotQuerySchema>;
export type ChatbotQuery = typeof chatbotQueries.$inferSelect;

export type InsertMitra = z.infer<typeof insertMitraSchema>;
export type Mitra = typeof mitras.$inferSelect;
