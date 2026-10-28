import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  Clock,
  Download,
  Copy,
  Check,
  GraduationCap,
  X,
  ChevronRight,
  Printer,
  FileText,
  Compass,
  Award,
  Layers,
  Send,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BookMarked,
  Filter,
  FileCheck,
  HelpCircle,
  School,
  Calendar,
  Users,
  ChevronDown,
} from 'lucide-react';
import { PrimaryLevel, DidactiPlanLesson, ValidationReport } from './shared/lessonPlanSchema';
import { EngineRouter } from './services/engineRouter';
import { DidactiPlanTemplate } from './templates/DidactiPlanTemplate';
import { DocumentAnalyzer } from './shared/documentAnalyzer';

export default function App() {
  // Navigation / Modal state
  const [activeModal, setActiveModal] = useState<
    'generator' | 'features' | 'about' | 'contact' | 'inspector' | null
  >(null);

  // Engine selection state (Strict isolation)
  const [selectedLevel, setSelectedLevel] = useState<PrimaryLevel>('3PS');
  const [selectedSequenceNum, setSelectedSequenceNum] = useState<number>(1);
  const [selectedSectionNum, setSelectedSectionNum] = useState<number>(1);
  const [selectedSessionNum, setSelectedSessionNum] = useState<number>(1);

  // Administrative customization
  const [schoolName, setSchoolName] = useState('Ibn Khaldoun Primary School');
  const [teacherName, setTeacherName] = useState('M. Benali (English Teacher)');
  const [classProfile, setClassProfile] = useState('');
  const [learnerCount, setLearnerCount] = useState<number>(32);
  const [sessionDate, setSessionDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );

  // Generation status & Output
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeLesson, setActiveLesson] = useState<DidactiPlanLesson | null>(null);
  const [engineValidation, setEngineValidation] = useState<ValidationReport | null>(null);
  const [qualityReport, setQualityReport] = useState<ValidationReport | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Engine descriptors
  const engineDescriptors = useMemo(() => EngineRouter.getEngineDescriptors(), []);
  const currentEngine = engineDescriptors[selectedLevel];

  // Cascading official data from selected engine
  const availableSequences = useMemo(() => {
    return EngineRouter.getAvailableSequences(selectedLevel);
  }, [selectedLevel]);

  const currentSequence = useMemo(() => {
    return (
      availableSequences.find((s) => s.sequenceNumber === selectedSequenceNum) ||
      availableSequences[0]
    );
  }, [availableSequences, selectedSequenceNum]);

  const currentSection = useMemo(() => {
    return (
      currentSequence?.sections.find((s) => s.sectionNumber === selectedSectionNum) ||
      currentSequence?.sections[0]
    );
  }, [currentSequence, selectedSectionNum]);

  const currentSession = useMemo(() => {
    return (
      currentSection?.sessions.find((s) => s.sessionNumber === selectedSessionNum) ||
      currentSection?.sessions[0]
    );
  }, [currentSection, selectedSessionNum]);

  // Handle Level change (Strict Engine Isolation: Reset sequence, section, session to 1)
  const handleLevelChange = (newLevel: PrimaryLevel) => {
    setSelectedLevel(newLevel);
    setSelectedSequenceNum(1);
    setSelectedSectionNum(1);
    setSelectedSessionNum(1);
    setActiveLesson(null);
    setEngineValidation(null);
    setQualityReport(null);
  };

  // Generate Lesson via EngineRouter
  const handleGenerateLesson = () => {
    setIsGenerating(true);

    setTimeout(() => {
      try {
        const result = EngineRouter.generateLesson(
          selectedLevel,
          selectedSequenceNum,
          selectedSectionNum,
          selectedSessionNum,
          {
            schoolName,
            teacherName,
            classProfile: classProfile || undefined,
            numberOfLearners: learnerCount,
            date: sessionDate,
          }
        );

        setActiveLesson(result.lesson);
        setEngineValidation(result.validation);
        setQualityReport(result.qualityReport);
      } catch (err) {
        console.error('Generation Error:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c241d] font-sans-body relative flex flex-col justify-between selection:bg-[#c4d6bd] selection:text-[#1c2e1b] overflow-x-hidden">
      {/* Ambient background glows replicating the original design */}
      <div
        className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-[#9bb08c]/25 blur-[110px] pointer-events-none -z-10 ambient-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-4 sm:right-16 lg:right-24 w-[520px] h-[520px] rounded-full bg-[#a5bb97]/30 blur-[100px] pointer-events-none -z-10 ambient-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#9db08f]/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* TOP NAVIGATION BAR */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-7 pb-4 print:hidden">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Subtitle */}
          <a
            href="/"
            className="flex flex-col items-center sm:items-start group transition-transform active:scale-[0.99]"
            title="Lesson Plan GENerator"
          >
            <div className="font-serif-display text-[26px] sm:text-[29px] leading-tight text-[#576946] tracking-normal font-semibold">
              Lesson Plan <span className="font-serif-display uppercase">GEN</span>erator
            </div>
            <div className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.24em] text-[#3d4239] uppercase mt-0.5 whitespace-nowrap">
              - FOR PRIMARY ENGLISH LANGUAGE TEACHERS -
            </div>
          </a>

          {/* Navigation Links + CTA Button */}
          <div className="flex items-center gap-6 sm:gap-9">
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[14.5px] font-medium text-[#20251f]">
              <button
                onClick={() => {
                  setActiveLesson(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#576946] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => setActiveModal('about')}
                className="hover:text-[#576946] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => setActiveModal('features')}
                className="hover:text-[#576946] transition-colors cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => setActiveModal('contact')}
                className="hover:text-[#576946] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* "Sign In" Pill Button */}
            <button
              onClick={() => {
                setActiveModal('generator');
                if (!activeLesson) {
                  handleGenerateLesson();
                }
              }}
              className="bg-[#b9c9b1] hover:bg-[#acc0a4] text-[#1e2d1d] font-sans-body font-medium text-[13.5px] sm:text-[14px] px-6 py-2.5 rounded-full transition-all duration-200 shadow-[0_2px_8px_rgba(87,105,70,0.12)] hover:shadow-[0_4px_12px_rgba(87,105,70,0.2)] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* CONDITIONAL MAIN CONTENT: HERO LANDING OR ACTIVE GENERATED LESSON PLAN */}
      {activeLesson ? (
        <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-6 flex-1">
          {/* Quick Return Bar */}
          <div className="print:hidden mb-4 flex items-center justify-between border-b border-[#e2ebdE] pb-3">
            <button
              onClick={() => setActiveLesson(null)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#576946] hover:text-[#3d4b31] transition-colors cursor-pointer"
            >
              ← Return to Main Page
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveModal('generator')}
                className="px-4 py-1.5 bg-[#eff4eb] hover:bg-[#dce6d7] text-[#293623] text-xs font-medium rounded-full transition-colors cursor-pointer"
              >
                Switch Engine / Change Session
              </button>
            </div>
          </div>

          {/* Full Official Template */}
          <DidactiPlanTemplate
            lesson={activeLesson}
            validationReport={engineValidation || undefined}
            qualityReport={qualityReport || undefined}
            onClose={() => setActiveLesson(null)}
          />
        </main>
      ) : (
        /* HERO SECTION (Original Pixel-Perfect Replica) */
        <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-10 lg:py-14 flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Headline, Kicker, Subtitle, CTA */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start z-10 lg:pr-4">
              {/* Kicker */}
              <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                <span className="inline-block w-7 sm:w-8 h-[1.5px] bg-[#3a4435]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#343e30] uppercase">
                  SMART EDUCATION PLATFORM
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif-display text-[42px] sm:text-[58px] lg:text-[62px] xl:text-[68px] leading-[1.08] font-bold text-[#18231c] tracking-tight mb-6 sm:mb-7">
                Generate Smart
                <br />
                Lesson Plans in
                <br />
                Seconds.
              </h1>

              {/* Body Copy */}
              <p className="text-[#4e584a] text-[15.5px] sm:text-[16.5px] xl:text-[17px] leading-[1.68] font-normal max-w-[530px] mb-8 sm:mb-10 text-balance">
                We take primary school English teachers hand-in-hand to create engaging,
                curriculum-aligned lesson plans effortlessly. Built around the official Didactic Guides
                and proven pedagogical strategies, you can save hours of prep time and focus on what
                you do best: teaching.
              </p>

              {/* Explore Features Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModal('features')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#9caea4]/80 text-[#1f2a1e] font-sans-body font-medium text-[15px] bg-transparent hover:bg-[#ebf0e6]/75 hover:border-[#576946] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer group"
                >
                  <span>Explore Features</span>
                </button>

                <button
                  onClick={() => {
                    setActiveModal('generator');
                    handleGenerateLesson();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#576946] text-white font-sans-body font-medium text-[15px] hover:bg-[#465537] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>

            {/* Right Column: Arched Classroom Photo with hairline inner contour & sage halo */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-center relative">
              {/* Atmospheric soft sage glow behind the arched frame */}
              <div
                className="absolute -inset-4 sm:-inset-8 w-[380px] sm:w-[480px] lg:w-[520px] h-[480px] sm:h-[580px] lg:h-[620px] bg-[#a2ba94]/35 rounded-full blur-[75px] -z-10 pointer-events-none transform translate-x-3 translate-y-3"
                aria-hidden="true"
              />

              {/* Arch Container */}
              <div className="relative w-[320px] sm:w-[440px] md:w-[480px] lg:w-[500px] xl:w-[530px] aspect-[560/658] rounded-t-[180px] sm:rounded-t-[250px] lg:rounded-t-[280px] rounded-b-[24px] sm:rounded-b-[28px] border border-[#b7c8b3] overflow-hidden shadow-[0_12px_40px_rgba(50,65,45,0.08)] bg-[#faf9f6]">
                {/* Inner delicate white hairline arch frame (exact detail from screenshot) */}
                <div
                  className="absolute inset-3 sm:inset-4 lg:inset-4 rounded-t-[168px] sm:rounded-t-[234px] lg:rounded-t-[264px] rounded-b-[15px] sm:rounded-b-[18px] border border-white/60 pointer-events-none z-20"
                  aria-hidden="true"
                />

                {/* Classroom Photo */}
                <img
                  src="/assets/classroom_hero.png"
                  alt="Primary English teacher guiding students with laptop and notebook in an engaging classroom"
                  className="w-full h-full object-cover object-center select-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Subtle bottom line / copyright */}
      <footer className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 text-xs text-[#707c6d] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#e2e8de]/60 print:hidden">
        <p>© 2026 Lesson Plan GENerator · Algerian Ministry of National Education Standards.</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              setSelectedLevel('3PS');
              setActiveModal('generator');
            }}
            className="hover:text-[#415132] transition-colors cursor-pointer"
          >
            3PS Foundation Engine
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setSelectedLevel('4PS');
              setActiveModal('generator');
            }}
            className="hover:text-[#415132] transition-colors cursor-pointer"
          >
            4PS Development Engine
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setSelectedLevel('5PS');
              setActiveModal('generator');
            }}
            className="hover:text-[#415132] transition-colors cursor-pointer"
          >
            5PS Consolidation Engine
          </button>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: THREE-ENGINE LESSON PLAN GENERATOR & CURRICULUM SELECTOR */}
      {/* ========================================================================= */}
      {activeModal === 'generator' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/45 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#faf9f6] border border-[#cfdacf] rounded-3xl w-full max-w-4xl max-h-[94vh] overflow-y-auto shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#e2e8de] bg-[#f4f6f1]/80 sticky top-0 z-10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#576946] flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1a231d]">
                    DidactiPlan Engine Selector
                  </h2>
                  <p className="text-xs text-[#5a6755]">
                    Three Independent Pedagogical Engines · Algerian Primary English Curriculum
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full hover:bg-[#e4ebdf] text-[#424e3f] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close generator modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* STEP 1: ENGINE SELECTION TABS (STRICT ISOLATION) */}
              <div>
                <label className="block text-xs font-bold text-[#343e30] uppercase tracking-wider mb-2.5">
                  1. Select Independent Engine
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['3PS', '4PS', '5PS'] as const).map((lvl) => {
                    const desc = engineDescriptors[lvl];
                    const isSelected = selectedLevel === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => handleLevelChange(lvl)}
                        className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-white border-[#576946] ring-2 ring-[#576946]/20 shadow-sm'
                            : 'bg-[#fafbf9] border-[#d5ded2] hover:bg-white text-[#4a5845]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-sm font-bold ${
                              isSelected ? 'text-[#576946]' : 'text-[#20291e]'
                            }`}
                          >
                            {lvl} Engine
                          </span>
                          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#f0f4ee] text-[#425039]">
                            {desc.durationMinutes} min
                          </span>
                        </div>
                        <div className="text-[12px] font-semibold text-[#273423] mb-1">
                          {lvl === '3PS'
                            ? 'Foundation Engine'
                            : lvl === '4PS'
                            ? 'Development Engine'
                            : 'Consolidation Engine'}
                        </div>
                        <p className="text-[11px] text-[#63725f] leading-snug line-clamp-2">
                          {desc.focus}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ENGINE ACTIVE NOTIFICATION BAR */}
              <div className="p-4 bg-[#eff5ec] border border-[#d2e2cd] rounded-2xl flex items-start gap-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#576946] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202c1d] block">
                    Active Engine: {currentEngine.name}
                  </strong>
                  <span className="text-[#465342]">
                    Document Grounding: {currentEngine.authoritativeDocument}. All sequences,
                    objectives, and session structures are strictly isolated to this level.
                  </span>
                </div>
              </div>

              {/* STEP 2: CASCADING CURRICULUM SELECTORS (STRICTLY POPULATED) */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5ebe1] space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#edf2ea] pb-2">
                  <h3 className="text-xs font-bold text-[#343e30] uppercase tracking-wider flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-[#576946]" />
                    2. Official Curriculum Parameters (Zero Inventions)
                  </h3>
                  <span className="text-[11px] font-medium text-[#647460]">
                    Official Didactic Syllabus
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sequence Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#343e30] mb-1.5">
                      Sequence ({availableSequences.length} Total)
                    </label>
                    <select
                      value={selectedSequenceNum}
                      onChange={(e) => {
                        setSelectedSequenceNum(Number(e.target.value));
                        setSelectedSectionNum(1);
                        setSelectedSessionNum(1);
                      }}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                    >
                      {availableSequences.map((seq) => (
                        <option key={seq.sequenceNumber} value={seq.sequenceNumber}>
                          Seq {seq.sequenceNumber}: {seq.sequenceTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Section Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#343e30] mb-1.5">
                      Section
                    </label>
                    <select
                      value={selectedSectionNum}
                      onChange={(e) => {
                        setSelectedSectionNum(Number(e.target.value));
                        setSelectedSessionNum(1);
                      }}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                    >
                      {currentSequence?.sections.map((sec) => (
                        <option key={sec.sectionNumber} value={sec.sectionNumber}>
                          Section {sec.sectionNumber}: {sec.sectionTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Session Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#343e30] mb-1.5">
                      Session
                    </label>
                    <select
                      value={selectedSessionNum}
                      onChange={(e) => setSelectedSessionNum(Number(e.target.value))}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                    >
                      {currentSection?.sessions.map((sess) => (
                        <option key={sess.sessionNumber} value={sess.sessionNumber}>
                          Session {sess.sessionNumber}: {sess.sessionTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Live Official Objective Preview */}
                {currentSession && (
                  <div className="p-3.5 bg-[#fafbf9] border border-[#e2e8dc] rounded-xl text-xs space-y-1">
                    <span className="font-bold text-[#31402c] block">
                      Official Session Objective:
                    </span>
                    <p className="text-[#43523f] italic">{currentSession.objective}</p>
                  </div>
                )}
              </div>

              {/* STEP 3: ADMINISTRATIVE PROFILE DETAILS */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5ebe1] space-y-4 shadow-xs">
                <h3 className="text-xs font-bold text-[#343e30] uppercase tracking-wider flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-[#576946]" />
                  3. Administrative & Classroom Context
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-[#4b5847] mb-1">School Name</label>
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3 py-2 text-[#1e271d] focus:ring-2 focus:ring-[#8da583] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#4b5847] mb-1">Teacher Name</label>
                    <input
                      type="text"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3 py-2 text-[#1e271d] focus:ring-2 focus:ring-[#8da583] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#4b5847] mb-1">Pupils Count</label>
                    <input
                      type="number"
                      value={learnerCount}
                      onChange={(e) => setLearnerCount(Number(e.target.value))}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3 py-2 text-[#1e271d] focus:ring-2 focus:ring-[#8da583] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#4b5847] mb-1">Date</label>
                    <input
                      type="date"
                      value={sessionDate}
                      onChange={(e) => setSessionDate(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-[#cfdacf] rounded-xl px-3 py-2 text-[#1e271d] focus:ring-2 focus:ring-[#8da583] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* GENERATE BUTTON */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-[#63725f] hidden sm:block">
                  Engine Pipeline: Retrieval → Extraction → Outline Analysis → Validation → Output
                </div>

                <button
                  onClick={() => {
                    handleGenerateLesson();
                    setActiveModal(null);
                  }}
                  disabled={isGenerating}
                  className="bg-[#576946] hover:bg-[#465637] text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Executing {selectedLevel} Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate {selectedLevel} Lesson Plan</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: FEATURES SHOWCASE */}
      {/* ========================================================================= */}
      {activeModal === 'features' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#faf9f6] border border-[#cfdacf] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-[#e2e8de] pb-4">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#576946] uppercase">
                  ARCHITECTURAL RIGOR
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#19241d] mt-1">
                  Three Independent Pedagogical Engines
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full hover:bg-[#e4ebdf] text-[#424e3f] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close features modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-white p-5 rounded-2xl border border-[#e2e8de] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eff4eb] text-[#4d5e3c] font-bold text-xs">
                    3PS
                  </span>
                  <h4 className="font-semibold text-sm text-[#1b261e]">
                    Foundation Engine (Third Year Primary · 60m)
                  </h4>
                </div>
                <p className="text-[#525f4e] leading-relaxed">
                  Engineered specifically for the pupil's first contact with English. Prioritizes
                  oral comprehension, Total Physical Response (TPR), picture talk, rhythmic chants,
                  phonemic awareness (isolating, blending, segmenting), and handwriting in print letter
                  families. No written texts during oral listening.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#e2e8de] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eff4eb] text-[#4d5e3c] font-bold text-xs">
                    4PS
                  </span>
                  <h4 className="font-semibold text-sm text-[#1b261e]">
                    Development Engine (Fourth Year Primary · 60m)
                  </h4>
                </div>
                <p className="text-[#525f4e] leading-relaxed">
                  Focuses on vocabulary expansion and language development. Features contrastive
                  phonics (/i/ vs /i:/, /ʃ/ vs /tʃ/, /ʊ/ vs /u:/, /θ/ vs /ð/), connected cursive
                  handwriting, official form filling (e-pal ID cards, family trees), and structured
                  educational games (Board Race, Word Jumble Relay, Pictionary).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#e2e8de] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eff4eb] text-[#4d5e3c] font-bold text-xs">
                    5PS
                  </span>
                  <h4 className="font-semibold text-sm text-[#1b261e]">
                    Consolidation Engine (Fifth Year Primary · 45m)
                  </h4>
                </div>
                <p className="text-[#525f4e] leading-relaxed">
                  Consolidates Key Stage 1 into autonomous communicative competence. Implements
                  initial diagnostic problem-solving situations (I Get Ready), authentic reading
                  strategies (skimming for gist & scanning for specific info), implicit grammar
                  discovery, guided paragraph writing from notes, and strict 45-minute lesson pacing
                  with Exit Tickets.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  setActiveModal('generator');
                }}
                className="bg-[#576946] hover:bg-[#465637] text-white font-medium text-xs px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Launch Engine Workspace</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: ABOUT US */}
      {/* ========================================================================= */}
      {activeModal === 'about' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#faf9f6] border border-[#cfdacf] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-5"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-[#e2e8de] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#b9c9b1] flex items-center justify-center text-[#1e2d1d]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#19241d]">
                  Algerian Pedagogical Standards
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full hover:bg-[#e4ebdf] text-[#424e3f] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close about modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#4c5847] leading-relaxed space-y-3">
              <p>
                <strong>DidactiPlan</strong> is designed exclusively for Algerian Primary English
                Language Teachers. It operates on complete fidelity to the official publications of
                the <strong>Ministry of National Education</strong> and the{' '}
                <strong>National Curriculum Council (CNP)</strong>.
              </p>
              <div className="bg-white p-4 rounded-xl border border-[#e0e8dc] space-y-2">
                <div className="font-bold text-[#2d3a28]">Curriculum Grounding Sources:</div>
                <ul className="list-disc list-inside space-y-1 text-[#465342]">
                  <li>Didactic Guide of English - Key Stage 1 (3PS & 4PS, 2023)</li>
                  <li>Didactic Guide of English - Key Stage 3 (5PS, 2024)</li>
                  <li>Official Session Outlines (3PS, 4PS, 5PS Session Tables)</li>
                  <li>Official Listening Scripts & Reading Texts</li>
                  <li>Official Monthly Distributions of October</li>
                </ul>
              </div>
              <p>
                Our system enforces <strong>strict engine isolation</strong>: no objectives, session
                types, or methodologies from one level can ever leak into another.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#eff4ec] hover:bg-[#dfe9db] text-[#2c3726] font-medium text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: CONTACT */}
      {/* ========================================================================= */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#faf9f6] border border-[#cfdacf] rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-5"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-[#e2e8de] pb-4">
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-[#19241d]">
                  Inspector & Teacher Desk
                </h3>
                <p className="text-xs text-[#525f4e]">
                  Contact the DidactiPlan Pedagogical Support Team
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full hover:bg-[#e4ebdf] text-[#424e3f] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close contact modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {contactSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-[#eff4ec] text-[#465637] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg text-[#1e271d]">Message Dispatched</h4>
                <p className="text-xs text-[#53604f] max-w-xs mx-auto">
                  Thank you! Your feedback has been forwarded to our curriculum inspectorate.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    setActiveModal(null);
                  }}
                  className="mt-4 px-6 py-2 bg-[#576946] text-white rounded-full text-xs font-medium cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-semibold text-[#343e30] uppercase mb-1">
                    Teacher / Inspector Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inspector Fatima Zahra"
                    className="w-full bg-white border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#343e30] uppercase mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    defaultValue="lessonplangen@gmail.com"
                    className="w-full bg-white border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#343e30] uppercase mb-1">
                    Primary School Wilaya
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Primary School, Wilaya of Algiers / Oran / Constantine"
                    className="w-full bg-white border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#343e30] uppercase mb-1">
                    Pedagogical Inquiry
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Feedback regarding official session outlines, didactic guides, or evaluation grids..."
                    className="w-full bg-white border border-[#cfdacf] rounded-xl px-3.5 py-2.5 text-[#1e271d] focus:outline-hidden focus:ring-2 focus:ring-[#8da583]"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 text-xs text-[#414e3e] hover:bg-[#eff4ec] rounded-full transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-medium text-white bg-[#576946] hover:bg-[#465637] rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
