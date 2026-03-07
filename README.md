# ResumeBuilder

A comprehensive, open-source, and unlimited Resume Builder Web App. Build professional resumes for free with a variety of templates.

## Project Overview
ResumeBuilder is designed to be a fully open and unlimited alternative to platforms like FlowCV. It allows users to create, manage, and export professional resumes with ease.

## Tech Stack
- **Frontend:** React, Vite, TailwindCSS, Zustand, React Hook Form
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Auth:** JWT

## Architecture
The project follows a decoupled client-server architecture:
- **Backend API:** A RESTful API built with Express and MongoDB to handle resume data, user accounts, and template metadata.
- **Frontend SPA:** A React application providing a live-preview editor, template selector, and PDF export functionality.
- **Rendering Engine:** A reusable component system that renders resume data into various template designs.

## Folder Structure
```text
/resume-builder
  /backend     - Node.js/Express server
  /frontend    - React/Vite/Tailwind client
  /docs        - Documentation and assets
  PROJECT_CONTEXT.md
  README.md
```

## Setup Instructions (Initial)
1. **Backend:** `cd backend && npm install`
2. **Frontend:** `cd frontend && npm install`

## Development Progress
- [x] Phase 1: Project architecture and folder structure.
- [x] Phase 2: Initialize backend server.
- [x] Phase 3: Create database models.
- [x] Phase 4: Create backend APIs.
- [x] Phase 5: Initialize React frontend.
- [x] Phase 6: Create resume editor UI.
- [x] Phase 7: Create template rendering system.
- [x] Phase 8: Add resume import parsing.
- [x] Phase 9: Add PDF export.
- [ ] Phase 10: Add multiple templates.

## Contribution Guide
TBD.
