# ResumeBuilder 2.0 🚀

A premium, open-source, and unlimited Resume Builder Web App. Build professional, ATS-friendly resumes for free with a modern, high-performance editor.

![Landing Preview](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **💎 Premium UI/UX:** Stunning SaaS-style design with soft gradients, smooth animations, and a clutter-free interface.
- **⚡ Live Preview Editor:** See your changes in real-time with an integrated A4 paper preview and zoom controls (40% to 150%).
- **🧠 Auto Resume AI Assistant:**
  - **Smart Summary:** Generate professional bios tailored to your experience.
  - **Bullet Enhancer:** Convert basic tasks into achievement-oriented statements.
  - **Skill Suggestions:** Get role-based recommendations for technical and soft skills.
  - **ATS Scan:** Identify missing keywords to beat the applicant tracking systems.
- **🤖 Smart Import:** Paste your existing resume text and our pattern-matching engine will automatically populate your details.
- **📚 7+ Professional Templates:** Categorized designs (Modern, Minimal, Professional, Creative, Tech) optimized for different industries.
- **📊 Progress Intelligence:** Real-time tracking of your resume's completion with visual indicators.
- **🎨 Global Customization:** Fine-tune typography, accent colors, line height, and page margins.
- **📄 High-Fidelity Export:** One-click PDF export with high resolution and perfect formatting.

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS 4, Zustand, Axios, Lucide React.
- **Backend:** Node.js, Express, MongoDB (Mongoose).
- **AI Engine:** OpenRouter API (Mistral-7B-Instruct).
- **Export:** `react-to-print` for client-side rendering.

## 🏗️ Architecture

The project follows a decoupled client-server architecture:
- **Backend API:** RESTful API handling resume persistence, user profiles, and secure AI proxying.
- **Frontend SPA:** Modern React application with a centralized state management system.
- **Template Engine:** A modular rendering system that dynamically injects user data into diverse design layouts.

## 📁 Project Structure

```text
/resume-builder
  /backend     - Express.js server, AI Controller & MongoDB models
  /frontend    - React/Vite/Tailwind client & Template library
  /docs        - Additional documentation and assets
  PROJECT_CONTEXT.md - Detailed technical progress tracking
  README.md    - Main project overview
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- OpenRouter API Key (Free)

### Setup
1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-repo/resumebuilder.git
   ```
2. **Backend:**
   ```bash
   cd backend
   npm install
   # Create .env with PORT, MONGODB_URI, and OPENROUTER_API_KEY
   npm start
   ```
3. **Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📈 Roadmap

- [x] Phase 1-5: Core Architecture & Setup
- [x] Phase 6: Premium Resume Editor UI
- [x] Phase 7: Dynamic Template Rendering
- [x] Phase 8: AI-Powered Smart Import
- [x] Phase 9: High-Fidelity PDF Export
- [x] Phase 10: Expanded Template Library (7+ Designs)
- [x] Phase 11: Progress Intelligence & Advanced Settings
- [x] Phase 12: Auto Resume AI Assistant
- [ ] Phase 13: User Dashboard & Cloud Sync (Coming Soon)

## 🤝 Contributing

We welcome contributions! Please check our [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) for deeper technical details before submitting a PR.

---
Built with precision by the open-source community.
