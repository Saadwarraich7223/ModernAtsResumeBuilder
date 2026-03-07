# ResumeBuilder 2.0 🚀

A premium, open-source, and unlimited Resume Builder Web App. Build professional, ATS-friendly resumes for free with a modern, high-performance editor and a powerful visual engine.

![Landing Preview](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **💎 Premium UI/UX:** Stunning SaaS-style design with soft gradients, smooth animations, and a clutter-free interface.
- **⚡ Live Preview Editor:** Real-time feedback with integrated A4 paper preview and zoom controls (40% to 150%).
- **🎨 Dynamic Theme System:**
  - **8+ Pro Themes:** Instant visual transformation across 3 categories (Light, Minimal, Modern).
  - **Visual Engine:** Dynamic control over primary colors, gradients, headings, and divider styles.
- **🧠 Auto Resume AI Assistant:**
  - **Smart Summary:** Generate professional bios using full-resume context.
  - **Bullet Enhancer:** Refine experiences with achievement-oriented AI coaching.
  - **ATS Scan:** Identify missing keywords and optimize for recruitment software.
- **🤖 Smart Import:** Pattern-based text matching to quickly populate your resume details.
- **📚 7+ Professional Templates:** Categorized designs (Modern, Minimal, Professional, Creative, Tech, Compact).
- **📊 Progress Intelligence:** Real-time tracking of section completion with visual feedback.
- **📄 High-Fidelity Export:** One-click, high-resolution PDF generation.

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS 4, Zustand, Axios, Lucide React.
- **Backend:** Node.js, Express, MongoDB (Mongoose).
- **AI Engine:** OpenRouter (Mistral-7B-Instruct Free Tier).
- **Export:** `react-to-print` for professional client-side rendering.

## 📁 Project Structure

```text
/resume-builder
  /backend     - Secure AI Proxy, Resume & User APIs
  /frontend    - React Client, Theme Engine & Template Library
  /docs        - Documentation and assets
```

## 🚀 Getting Started

### Setup
1. **Clone & Install:**
   ```bash
   npm install # in both /backend and /frontend
   ```
2. **Environment:** Add `OPENROUTER_API_KEY` and `MONGODB_URI` to `backend/.env`.
3. **Run:**
   ```bash
   # Backend
   cd backend && npm run dev
   # Frontend
   cd frontend && npm run dev
   ```

## 📈 Roadmap

- [x] Phase 1-11: Core Infrastructure & Progress Intelligence
- [x] Phase 12: Auto Resume AI Assistant (OpenRouter)
- [x] Phase 13: Dynamic Theme System & Visual Engine
- [ ] Phase 14: User Dashboard & Multi-Resume Management (Next)

---
Built with precision by the open-source community.
