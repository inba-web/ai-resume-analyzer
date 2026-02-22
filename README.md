🚀 AI Resume Analyzer & Intelligent Screening Platform

An AI-powered web application built to simplify resume screening and improve candidate evaluation.

🧩 Overview

The AI Resume Analyzer is a full-stack application that allows users to upload resumes, extract structured information, and analyze candidate profiles using AI.

It is built with performance, scalability, and clean architecture in mind. The project follows modern development practices with SSR support and a production-ready deployment setup.

✨ Key Features
📄 Resume Upload & Parsing

Upload PDF resumes and extract structured candidate data.

🧠 AI-Based Resume Analysis

Generate intelligent insights from candidate profiles.

🔍 Structured Data Extraction

Convert unstructured resumes into clean, usable information.

🧹 Data Wipe Functionality

Securely reset application data when needed.

⚡ Optimized Rendering

Uses Server-Side Rendering (SSR) for better performance and SEO.

🔐 Clean Routing & Build Setup

File-based routing with Linux-compatible builds.

🛠️ Tech Stack
Frontend

React

React Router (File-Based Routing)

Vite

Backend / Server

React Router SSR

Node.js

Deployment

Vercel

GitHub CI/CD

🗂️ Project Structure
```
app/
 ├── routes/
 │   ├── upload.tsx
 │   ├── wipe.tsx
 │   └── ...
 ├── components/
 ├── utils/
 └── root.tsx
```

The structure is modular and easy to maintain, making it scalable for future enhancements.

⚙️ Getting Started
Prerequisites

Node.js (v18+ recommended)

npm or pnpm

Git

Installation
```
git clone https://github.com/inba-web/ai-resum-analyzer.git
cd ai-resum-analyzer
npm install
```
Run in Development
```
npm run dev
```
Build for Production
```
npm run build
```
☁️ Deployment

This project is optimized for deployment on Vercel with full SSR support.

⚠️ Make sure all route file names are in lowercase to avoid issues in Linux-based build environments.

🎯 Use Cases

HR teams speeding up resume screening

Recruiters reducing manual review effort

Developers exploring AI + SSR architecture

Startups building hiring platforms

🔮 Future Improvements

Candidate scoring system

Resume ↔ job description matching

Batch resume processing

Admin dashboard with analytics

Authentication and role-based access

📌 Vision

This project serves as a foundation for building intelligent recruitment platforms with AI integration and scalable architecture.
