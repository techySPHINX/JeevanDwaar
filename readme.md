# Jeevan Dwaar - SBI Life Insurance Platform

## Overview

Jeevan Dwaar is a comprehensive life insurance platform designed to make insurance simple, transparent, and trustworthy for low-literacy and rural/semi-urban customers. The platform features a modern React frontend with multilingual support (Hindi, English, Telugu, Bengali), voice-first features, and an AI-powered policy recommendation system. Built as a full-stack TypeScript application with Express.js backend and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Language Support**: Custom context-based internationalization system supporting Hindi, English, Telugu, and Bengali

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire application
- **API Design**: RESTful API architecture with structured endpoints for policies, recommendations, chatbot queries, and analytics
- **Session Management**: Express sessions with PostgreSQL session store using connect-pg-simple
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless driver for scalability
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema Design**: Comprehensive relational schema including users, policies, recommendations, chatbot queries, and mitra (agent) management
- **Migration System**: Drizzle Kit for database schema migrations and version control

### Authentication and Authorization
- **Session-based Authentication**: Traditional server-side sessions stored in PostgreSQL
- **User Management**: Secure user registration and login with password hashing
- **Role-based Access**: Admin dashboard functionality with separate access controls

### Component Architecture
- **UI Components**: Modular shadcn/ui components with Radix UI primitives for accessibility
- **Feature Components**: Organized by domain (policy, chatbot, recommender, layout)
- **Responsive Design**: Mobile-first approach with progressive enhancement for larger screens

### Key Features Implementation
- **Voice-first Interface**: Audio player components for policy explanations in multiple languages
- **AI Policy Recommender**: Interactive multi-step form with age-based premium calculations
- **Chatbot Interface**: Real-time chat system for customer support queries
- **Education Hub**: Content management for insurance education materials
- **Mitra Network**: Agent management system for local insurance representatives
- **Admin Dashboard**: Analytics and management interface with KPI tracking

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations and schema management

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Consistent icon library for the entire application

### Development and Build Tools
- **Vite**: Fast build tool and development server with hot module replacement
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds

### State Management and Data Fetching
- **TanStack Query**: Server state management, caching, and background updates
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema parsing

### Fonts and Assets
- **Google Fonts**: Open Sans, DM Sans, Architects Daughter, Fira Code, and Geist Mono
- **Custom CSS Variables**: Design system tokens for colors, spacing, and typography

### Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Runtime Error Overlay**: Enhanced error reporting in development mode
- **Hot Module Replacement**: Fast development experience with instant updates

The architecture prioritizes accessibility, performance, and multilingual support to serve the target demographic of rural and semi-urban customers with varying literacy levels.