# Lesson Plan GENerator (DidactiPlan)

An intelligent, document-grounded educational lesson-planning platform for primary school English teachers in Algeria, built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

The system features **three strictly isolated pedagogical engines** aligned with the official Didactic Guides published by the Algerian Ministry of National Education.

---

## 🌟 Key Features

- **Three Independent Pedagogical Engines**:
  - **3PS Foundation Engine (Third Year Primary)**: 60-minute duration, oral comprehension & TPR priority, no written forms in early listening stages, printed letter practice.
  - **4PS Development Engine (Fourth Year Primary)**: 60-minute duration, cursive handwriting development, contrastive phonics, communicative pair work (Think-Pair-Share).
  - **5PS Consolidation Engine (Fifth Year Primary)**: Strictly 45-minute duration, reading for gist (skimming) and detail (scanning), guided grammar induction, exit ticket self-reflection.
- **Official Algerian Procedure Table (3 Stages)**:
  - **Warm-up** (schema activation & phonetic warm-up)
  - **Install Resources** (presentation, discovery, drilling, guided practice)
  - **Assessment** (evaluative tasks and wrap-up)
  - Embedded **Sub-Objectives** column for every step.
  - **Official Exit Ticket Reflection** integrated as the final step in the Assessment stage.
- **Multi-Sensory VARKT Framework**: Maps Visual, Auditory, Reading/Writing, Kinesthetic, and Tactile modes to every classroom activity.
- **Export & Print**:
  - A4-optimized native browser printing (`window.print()`).
  - Markdown export with formatted tables for digital archiving.
- **Inspector Quality Assurance**: Automatically validates timing sums, stage completeness, objective alignment, and engine isolation.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript 5+](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml` and `deploy.yml`)

---

## 🚀 Quick Start Guide

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (version 22 recommended for this project)
- [npm](https://www.npmjs.com/) (version 9.x or higher)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/didactiplan-lesson-generator.git
cd didactiplan-lesson-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:3000` (or the URL displayed in your terminal).

### 4. Build for Production

```bash
npm run build
```

This compiles your application into the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Run Code Quality Checks (Linter & Type Check)

```bash
npm run lint
```

---

## 📦 How to Push this Project to Your GitHub

If you are setting this up as a brand new GitHub repository:

1. Create a new repository on [GitHub](https://github.com/new) (e.g. named `didactiplan-lesson-generator`). Leave it empty (without initializing README or .gitignore).
2. In your local terminal inside the project folder, run:

```bash
# Initialize git if not already initialized
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Lesson Plan GENerator with 3 isolated pedagogical engines"

# Rename branch to main
git branch -M main

# Link your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/didactiplan-lesson-generator.git

# Push to GitHub
git push -u origin main
```

---

## 📱 Android App (Capacitor)

This repository includes a Capacitor configuration and a GitHub Actions workflow that builds a test APK. See [ANDROID_BUILD_GUIDE.md](ANDROID_BUILD_GUIDE.md) for setup steps. After pushing to `main`, open **Actions → Build Android APK** and download the APK from the successful run’s **Artifacts** section.

## 🌐 Deployment Options

### 1. GitHub Pages (Automated Workflow)
A pre-configured GitHub Actions workflow is included at `.github/workflows/deploy.yml`:
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Pushes to the `main` branch will automatically build and deploy the app.

### 2. Vercel
1. Go to [Vercel](https://vercel.com/) and click **Add New > Project**.
2. Import your GitHub repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### 3. Netlify
1. Log in to [Netlify](https://www.netlify.com/) and click **Add new site > Import an existing project**.
2. Connect to your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 📁 Project Architecture

```text
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Automated CI build and type-checking
│       └── deploy.yml             # Automated deployment to GitHub Pages
├── public/
│   └── assets/                    # Classroom photos, images, and official guide PDFs
├── src/
│   ├── engines/                   # 3 STRICTLY ISOLATED PEDAGOGICAL ENGINES
│   │   ├── 3ps/                   # Third Year Primary (60 min)
│   │   │   ├── curriculum.ts      # 6 sequences, 12 sections, authentic scripts
│   │   │   ├── objectives.ts      # Global competence and 4 domains
│   │   │   ├── outlines.ts        # 4 session outlines with Sub-Objectives
│   │   │   ├── pedagogicalEngine.ts
│   │   │   └── validator.ts
│   │   ├── 4ps/                   # Fourth Year Primary (60 min)
│   │   │   ├── curriculum.ts      # 5 sequences, 10 sections
│   │   │   ├── objectives.ts
│   │   │   ├── outlines.ts        # 5 session outlines with Sub-Objectives
│   │   │   ├── pedagogicalEngine.ts
│   │   │   └── validator.ts
│   │   └── 5ps/                   # Fifth Year Primary (45 min)
│   │       ├── curriculum.ts      # 3 sequences, 6 sections, 8 sessions each
│   │       ├── objectives.ts
│   │       ├── outlines.ts        # 8 session outlines with Sub-Objectives
│   │       ├── pedagogicalEngine.ts
│   │       └── validator.ts
│   ├── services/
│   │   └── engineRouter.ts        # Dynamic routing between the 3 engines
│   ├── shared/
│   │   ├── documentAnalyzer.ts    # Official Didactic Guides metadata
│   │   ├── lessonPlanSchema.ts    # Authoritative DidactiPlan TypeScript interfaces
│   │   ├── pdfGenerator.ts        # A4 print engine and Markdown exporter
│   │   ├── qualityValidator.ts    # Timing sums and pedagogical completeness inspector
│   │   └── sourceValidator.ts     # Engine isolation validation
│   ├── templates/
│   │   └── DidactiPlanTemplate.tsx# Official lesson plan view & print layout
│   ├── App.tsx                    # Main landing page & modal controllers
│   ├── index.css                  # Tailwind CSS styling
│   └── main.tsx                   # React root entry point
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML5 entry with Playfair Display fonts
├── package.json                   # Project dependencies and npm scripts
├── tsconfig.json                  # TypeScript compiler configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 📜 Official Curriculum Compliance

All lesson structures, communicative goals, and linguistic allocations adhere to the official standards set by the **Algerian Ministry of National Education**:
- *Didactic Guide for English – 3rd Year Primary (2023)*
- *Didactic Guide for English – 4th Year Primary (2023)*
- *Didactic Guide for English – 5th Year Primary (2024)*

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
