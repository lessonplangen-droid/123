/**
 * DidactiPlan - Common Output Template Component
 * Official Lesson Plan Format for Algerian Primary English Education.
 * Perfectly formatted for classroom use and high-quality A4 printing.
 */

import React from 'react';
import {
  DidactiPlanLesson,
  ValidationReport,
} from '../shared/lessonPlanSchema';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  FileText,
  GraduationCap,
  Layers,
  Sparkles,
  Printer,
  Copy,
  Check,
  AlertTriangle,
  Bookmark,
} from 'lucide-react';
import { PDFGenerator } from '../shared/pdfGenerator';

interface DidactiPlanTemplateProps {
  lesson: DidactiPlanLesson;
  validationReport?: ValidationReport;
  qualityReport?: ValidationReport;
  onClose?: () => void;
}

export const DidactiPlanTemplate: React.FC<DidactiPlanTemplateProps> = ({
  lesson,
  validationReport,
  qualityReport,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);
  const admin = lesson.administrativeInfo;
  const lres = lesson.linguisticResources;

  const handleCopy = () => {
    const markdown = PDFGenerator.exportMarkdown(lesson);
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    PDFGenerator.printLessonPlan();
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-6 print:m-0 print:max-w-none print:w-full">
      {/* Top Toolbar (Hidden when printing) */}
      <div className="print:hidden mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#cfdacf] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-[#576946] text-white text-xs font-bold tracking-wide">
            {lesson.engineId} ENGINE
          </div>
          <span className="text-sm font-semibold text-[#1c251e]">
            Official Lesson Plan: Sequence {admin.sequenceNumber}, Section {admin.sectionNumber}, Session {admin.sessionNumber}
          </span>
          {validationReport?.isValid && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Inspector Validated
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#2d3a29] bg-[#eff4ec] hover:bg-[#dce6d8] rounded-xl transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Markdown</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium text-white bg-[#576946] hover:bg-[#465637] rounded-xl transition-colors cursor-pointer shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print to A4 PDF</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs text-stone-600 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          )}
        </div>
      </div>

      {/* Printable Sheet (Standard Algerian Didactic Format) */}
      <div className="bg-white p-6 sm:p-10 border border-[#c8d4c6] print:border-none print:p-0 rounded-2xl print:rounded-none shadow-md print:shadow-none space-y-6 text-[#1a231d] font-sans-body">
        {/* OFFICIAL HEADER */}
        <div className="text-center pb-4 border-b-2 border-[#576946]">
          <div className="inline-block px-5 py-1 bg-[#f0f4ee] border border-[#d2ded0] rounded-full text-xs font-bold text-[#3d4d35] tracking-wide">
            DIDACTIPLAN · PEDAGOGICAL LEARNING SHEET ({lesson.engineId} ENGINE)
          </div>
        </div>

        {/* SECTION 1: ADMINISTRATIVE INFORMATION */}
        <div className="border border-[#d2ded0] rounded-xl p-4 bg-[#fafbf9]">
          <h3 className="text-xs font-bold text-[#364431] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-[#576946]" />
            1. Administrative Profile
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-[#647260] block font-medium">Level:</span>
              <span className="font-semibold text-[#18231c]">
                {admin.level} ({admin.timeDurationMinutes} min)
              </span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">School:</span>
              <span className="font-semibold text-[#18231c]">{admin.schoolName}</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Teacher:</span>
              <span className="font-semibold text-[#18231c]">{admin.teacherName}</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Learners:</span>
              <span className="font-semibold text-[#18231c]">{admin.numberOfLearners} pupils</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Date:</span>
              <span className="font-semibold text-[#18231c]">{admin.date}</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Sequence {admin.sequenceNumber}:</span>
              <span className="font-semibold text-[#18231c]">{admin.sequenceTitle}</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Section {admin.sectionNumber}:</span>
              <span className="font-semibold text-[#18231c]">{admin.sectionTitle}</span>
            </div>
            <div>
              <span className="text-[#647260] block font-medium">Session {admin.sessionNumber}:</span>
              <span className="font-semibold text-[#18231c]">{admin.sessionTitle}</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: OBJECTIVES & COMMUNICATIVE FOCUS */}
        <div className="border border-[#d2ded0] rounded-xl p-4 bg-white space-y-3">
          <h3 className="text-xs font-bold text-[#364431] uppercase tracking-wider flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#576946]" />
            2. Pedagogical Objectives
          </h3>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#f4f7f2] border border-[#e2ebdE]">
              <strong className="text-[#2b3826]">Main Session Objective:</strong>{' '}
              <span className="text-[#1c241d]">{lesson.mainObjective}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#fafbf9] border border-[#e5ece3]">
              <strong className="text-[#2b3826]">Communicative Purpose:</strong>{' '}
              <span className="text-[#3f4a3c]">{lesson.communicativeObjective}</span>
            </div>
            <div>
              <span className="font-semibold text-[#364431]">Subsidiary Objectives:</span>
              <ul className="list-disc list-inside mt-1 space-y-1 text-[#465343] pl-2">
                {lesson.subsidiaryObjectives.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: TARGET & CROSS-CURRICULAR COMPETENCIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Target Competencies */}
          <div className="border border-[#d2ded0] rounded-xl p-4 bg-[#fafbf9] text-xs space-y-2">
            <h4 className="font-bold text-[#364431] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#576946]" />
              Target Competencies (4 Domains)
            </h4>
            <div className="space-y-1.5 text-[#465343]">
              <div>
                <strong className="text-[#202a1e]">Oral Comprehension:</strong>{' '}
                {lesson.targetCompetencies.oralComprehension}
              </div>
              <div>
                <strong className="text-[#202a1e]">Oral Production:</strong>{' '}
                {lesson.targetCompetencies.oralProduction}
              </div>
              <div>
                <strong className="text-[#202a1e]">Written Comprehension:</strong>{' '}
                {lesson.targetCompetencies.writtenComprehension}
              </div>
              <div>
                <strong className="text-[#202a1e]">Written Production:</strong>{' '}
                {lesson.targetCompetencies.writtenProduction}
              </div>
            </div>
          </div>

          {/* Cross-Curricular Competencies & Values */}
          <div className="border border-[#d2ded0] rounded-xl p-4 bg-[#fafbf9] text-xs space-y-2">
            <h4 className="font-bold text-[#364431] uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#576946]" />
              Cross-Curricular Competencies & Core Values
            </h4>
            <div className="space-y-1 text-[#465343]">
              <div>
                <strong className="text-[#202a1e]">Intellectual:</strong>{' '}
                {lesson.crossCurricularCompetences.intellectual}
              </div>
              <div>
                <strong className="text-[#202a1e]">Methodological:</strong>{' '}
                {lesson.crossCurricularCompetences.methodological}
              </div>
              <div>
                <strong className="text-[#202a1e]">Communicative:</strong>{' '}
                {lesson.crossCurricularCompetences.communicative}
              </div>
              <div>
                <strong className="text-[#202a1e]">Personal & Social:</strong>{' '}
                {lesson.crossCurricularCompetences.personalAndSocial}
              </div>
              <div className="pt-2 border-t border-[#e2e8de] text-[11px] text-[#556351]">
                <strong>Core Values:</strong> {lesson.coreValues.nationalIdentity} · {lesson.coreValues.citizenship}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: LINGUISTIC RESOURCES & MATERIALS */}
        <div className="border border-[#d2ded0] rounded-xl p-4 bg-white space-y-3 text-xs">
          <h3 className="font-bold text-[#364431] uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#576946]" />
            3. Linguistic Resources & Teaching Materials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-2.5 rounded-lg bg-[#fafbf9] border border-[#e5ece3]">
              <span className="font-semibold text-[#293625] block mb-1">Target Vocabulary:</span>
              <span className="text-[#43503f]">{lres.targetVocabulary.join(', ')}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#fafbf9] border border-[#e5ece3]">
              <span className="font-semibold text-[#293625] block mb-1">Grammar Pattern:</span>
              <span className="text-[#43503f]">{lres.targetGrammar}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#fafbf9] border border-[#e5ece3]">
              <span className="font-semibold text-[#293625] block mb-1">Phonics / Handwriting:</span>
              <span className="text-[#43503f]">
                {lres.phonicsOrSounds}
                {lres.handwritingOrSpelling ? ` · ${lres.handwritingOrSpelling}` : ''}
              </span>
            </div>
          </div>

          {/* Authentic Script / Reading Text if available */}
          {lres.listeningScriptContent && (
            <div className="p-3 bg-[#f8faf7] border-l-3 border-[#576946] rounded-r-lg text-xs">
              <span className="font-bold text-[#2d3a28] block mb-1">
                Authentic Listening Script ({lres.authenticListeningScriptRef || 'Official Source'}):
              </span>
              <pre className="whitespace-pre-wrap font-sans text-[#3c4737] italic">
                {lres.listeningScriptContent}
              </pre>
            </div>
          )}

          {lres.readingTextContent && (
            <div className="p-3 bg-[#f8faf7] border-l-3 border-[#576946] rounded-r-lg text-xs">
              <span className="font-bold text-[#2d3a28] block mb-1">Official Reading Passage:</span>
              <p className="text-[#3c4737] italic">{lres.readingTextContent}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#556351]">
            <span className="font-bold text-[#2b3726]">Teaching Materials:</span>
            <span>{lesson.teachingMaterials.join('; ')}</span>
          </div>
        </div>

        {/* SECTION 4: ANTICIPATED PROBLEMS & PLAN B */}
        <div className="border border-[#d2ded0] rounded-xl p-4 bg-[#fafbf9] text-xs space-y-2">
          <h3 className="font-bold text-[#364431] uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            4. Anticipated Difficulties & Pedagogical Solutions (Plan B)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lesson.anticipatedProblems.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-white rounded-lg border border-[#e2e8de]">
                <strong className="text-amber-800 block mb-0.5">Problem:</strong>
                <p className="text-[#435040] mb-1.5">{item.problem}</p>
                <strong className="text-emerald-800 block mb-0.5">Solution / Plan B:</strong>
                <p className="text-[#435040]">{item.solutionOrPlanB}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: MANDATORY THREE-STAGE PROCEDURE TABLE */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#364431] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#576946]" />
              5. Classroom Procedure (Three Official Stages)
            </h3>
            <span className="text-[11px] font-semibold text-[#576946]">
              Total Time: {admin.timeDurationMinutes} minutes
            </span>
          </div>

          <div className="overflow-x-auto border-2 border-[#576946] rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#576946] text-white">
                <tr>
                  <th className="p-3 w-28 font-semibold border-r border-[#697d57]">Stage</th>
                  <th className="p-3 w-44 font-semibold border-r border-[#697d57]">Sub-Objectives</th>
                  <th className="p-3 font-semibold border-r border-[#697d57]">
                    Procedure & Classroom Actions (Teacher Talk & Learner Response)
                  </th>
                  <th className="p-3 w-16 text-center font-semibold border-r border-[#697d57]">I.P</th>
                  <th className="p-3 w-14 text-center font-semibold border-r border-[#697d57]">Time</th>
                  <th className="p-3 w-16 text-center font-semibold">VARKT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dce6d8]">
                {/* STAGE 1: WARM-UP */}
                {lesson.procedureStages.warmUp.steps.map((step, idx) => (
                  <tr key={`warm-${idx}`} className="bg-[#fafbf9] hover:bg-[#f3f7f0] transition-colors">
                    {idx === 0 && (
                      <td
                        rowSpan={lesson.procedureStages.warmUp.steps.length}
                        className="p-3 font-bold text-[#2e3b28] bg-[#eff4eb] border-r border-[#dce6d8] align-top text-center"
                      >
                        <div>Warm-up</div>
                        <div className="text-[11px] font-normal text-[#5a6854] mt-1">
                          ({lesson.procedureStages.warmUp.totalTimeMinutes} min)
                        </div>
                      </td>
                    )}
                    <td className="p-3 border-r border-[#dce6d8] align-top bg-[#fbfdfa]">
                      <div className="font-semibold text-[#273820] text-xs leading-snug">
                        {step.subObjective}
                      </div>
                      {step.centurySkill && (
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#304724] bg-[#edf5e8] border border-[#c5dcbf] px-2 py-0.5 rounded-md shadow-2xs">
                            ★ {step.centurySkill}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] align-top">
                      <div className="font-bold text-[#1f291e] mb-1">
                        Step {step.stepNumber}: {step.stepName}
                      </div>
                      <div className="text-[#3c4737] space-y-1">
                        <div>
                          <strong className="text-[#576946]">Teacher:</strong> {step.teacherAction}
                        </div>
                        <div>
                          <strong className="text-[#364431]">Pupils:</strong> {step.studentAction}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-mono text-[#4a5845] align-top">
                      {step.interaction}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-semibold text-[#1e271d] align-top">
                      {step.timeMinutes}m
                    </td>
                    <td className="p-3 text-center font-bold text-[#576946] align-top">{step.varkt}</td>
                  </tr>
                ))}

                {/* STAGE 2: INSTALL RESOURCES */}
                {lesson.procedureStages.installResources.steps.map((step, idx) => (
                  <tr key={`install-${idx}`} className="bg-white hover:bg-[#f8fbf6] transition-colors">
                    {idx === 0 && (
                      <td
                        rowSpan={lesson.procedureStages.installResources.steps.length}
                        className="p-3 font-bold text-[#2e3b28] bg-[#eff4eb] border-r border-[#dce6d8] align-top text-center"
                      >
                        <div>Install Resources</div>
                        <div className="text-[11px] font-normal text-[#5a6854] mt-1">
                          ({lesson.procedureStages.installResources.totalTimeMinutes} min)
                        </div>
                      </td>
                    )}
                    <td className="p-3 border-r border-[#dce6d8] align-top bg-[#fbfdfa]">
                      <div className="font-semibold text-[#273820] text-xs leading-snug">
                        {step.subObjective}
                      </div>
                      {step.centurySkill && (
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#304724] bg-[#edf5e8] border border-[#c5dcbf] px-2 py-0.5 rounded-md shadow-2xs">
                            ★ {step.centurySkill}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] align-top">
                      <div className="font-bold text-[#1f291e] mb-1">
                        Step {step.stepNumber}: {step.stepName}
                      </div>
                      <div className="text-[#3c4737] space-y-1">
                        <div>
                          <strong className="text-[#576946]">Teacher:</strong> {step.teacherAction}
                        </div>
                        <div>
                          <strong className="text-[#364431]">Pupils:</strong> {step.studentAction}
                        </div>
                        {step.pedagogicalTip && (
                          <div className="mt-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ★ {step.pedagogicalTip}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-mono text-[#4a5845] align-top">
                      {step.interaction}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-semibold text-[#1e271d] align-top">
                      {step.timeMinutes}m
                    </td>
                    <td className="p-3 text-center font-bold text-[#576946] align-top">{step.varkt}</td>
                  </tr>
                ))}

                {/* STAGE 3: ASSESSMENT */}
                {lesson.procedureStages.assessment.steps.map((step, idx) => (
                  <tr key={`assess-${idx}`} className="bg-[#fafbf9] hover:bg-[#f3f7f0] transition-colors">
                    {idx === 0 && (
                      <td
                        rowSpan={lesson.procedureStages.assessment.steps.length + 1}
                        className="p-3 font-bold text-[#2e3b28] bg-[#eff4eb] border-r border-[#dce6d8] align-top text-center"
                      >
                        <div>Assessment</div>
                        <div className="text-[11px] font-normal text-[#5a6854] mt-1">
                          ({lesson.procedureStages.assessment.totalTimeMinutes} min)
                        </div>
                      </td>
                    )}
                    <td className="p-3 border-r border-[#dce6d8] align-top bg-[#fbfdfa]">
                      <div className="font-semibold text-[#273820] text-xs leading-snug">
                        {step.subObjective}
                      </div>
                      {step.centurySkill && (
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#304724] bg-[#edf5e8] border border-[#c5dcbf] px-2 py-0.5 rounded-md shadow-2xs">
                            ★ {step.centurySkill}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] align-top">
                      <div className="font-bold text-[#1f291e] mb-1">
                        Step {step.stepNumber}: {step.stepName}
                      </div>
                      <div className="text-[#3c4737] space-y-1">
                        <div>
                          <strong className="text-[#576946]">Teacher:</strong> {step.teacherAction}
                        </div>
                        <div>
                          <strong className="text-[#364431]">Pupils:</strong> {step.studentAction}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-mono text-[#4a5845] align-top">
                      {step.interaction}
                    </td>
                    <td className="p-3 border-r border-[#dce6d8] text-center font-semibold text-[#1e271d] align-top">
                      {step.timeMinutes}m
                    </td>
                    <td className="p-3 text-center font-bold text-[#576946] align-top">{step.varkt}</td>
                  </tr>
                ))}

                {/* FINAL STEP IN ASSESSMENT: OFFICIAL EXIT TICKET REFLECTION */}
                <tr className="bg-[#f5f8f3] hover:bg-[#ebf2e8] transition-colors border-t border-[#dce6d8]">
                  <td className="p-3 border-r border-[#dce6d8] align-top bg-[#f2f7ef]">
                    <div className="font-semibold text-[#273820] text-xs leading-snug">
                      Formative self-assessment & consolidation reflection before dismissal
                    </div>
                    <div className="mt-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        ✓ Final Assessment Step
                      </span>
                    </div>
                  </td>
                  <td className="p-3 border-r border-[#dce6d8] align-top">
                    <div className="font-bold text-[#1f291e] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#576946]" />
                      <span>Final Step: Official Exit Ticket Reflection</span>
                    </div>
                    <div className="text-[#3c4737] space-y-1 text-xs">
                      <div>
                        <strong className="text-[#576946]">Teacher:</strong> Prompts the learners: &ldquo;{lesson.assessmentAndRemediation.exitTicketPrompt}&rdquo;
                      </div>
                      <div>
                        <strong className="text-[#364431]">Pupils:</strong> Reflect individually on today&apos;s learning and formulate oral or signal-card responses to demonstrate understanding.
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-r border-[#dce6d8] text-center font-mono text-[#4a5845] align-top">
                    Individual
                  </td>
                  <td className="p-3 border-r border-[#dce6d8] text-center font-semibold text-[#1e271d] align-top">
                    3m
                  </td>
                  <td className="p-3 text-center font-bold text-[#576946] align-top">
                    R/A
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6: FORMATIVE ASSESSMENT & REMEDIATION */}
        <div className="border border-[#d2ded0] rounded-xl p-4 bg-[#fafbf9] space-y-3 text-xs">
          <h4 className="font-bold text-[#364431] uppercase tracking-wider flex items-center gap-1.5">
            <FileCheck2 className="w-3.5 h-3.5 text-[#576946]" />
            6. Formative Assessment & Remediation Strategies
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded-lg border border-[#e2e8de]">
              <strong className="text-[#2b3927] block mb-1">Ongoing Formative Technique:</strong>
              <p className="text-[#435040] leading-relaxed">
                {lesson.assessmentAndRemediation.formativeTechnique}
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e2e8de]">
              <strong className="text-[#2b3927] block mb-1">Differentiated Remediation Strategy:</strong>
              <p className="text-[#435040] leading-relaxed">
                {lesson.assessmentAndRemediation.remediationStrategy}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7: TEACHER SELF-REFLECTION (Official Algerian Layout) */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#364431] uppercase tracking-wider">
            7. Teacher Self-Reflection Grid
          </h4>
          <div className="border border-[#d2ded0] rounded-xl overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#e4ebdf] text-[#2c3826]">
                <tr>
                  <th className="p-2.5 font-bold border-r border-[#d2ded0] w-1/3">What Worked</th>
                  <th className="p-2.5 font-bold border-r border-[#d2ded0] w-1/3">What Hindered</th>
                  <th className="p-2.5 font-bold w-1/3">Action Plan</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-3 text-[#455242] border-r border-[#d2ded0] align-top">
                    {lesson.selfReflection.whatWorked}
                  </td>
                  <td className="p-3 text-[#455242] border-r border-[#d2ded0] align-top">
                    {lesson.selfReflection.whatHindered}
                  </td>
                  <td className="p-3 text-[#455242] align-top">
                    {lesson.selfReflection.actionPlan}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 9: AUTHORITATIVE CITATIONS */}
        <div className="pt-3 border-t border-[#e2e8de] text-[11px] text-[#6b7867] flex flex-wrap justify-between items-center gap-2">
          <div>
            <strong>Curriculum Authority:</strong> {lesson.authoritativeSources.curriculumYear} ·{' '}
            {lesson.authoritativeSources.didacticGuideRef}
          </div>
          <div className="font-mono text-[10px]">Doc ID: {lesson.id}</div>
        </div>
      </div>
    </div>
  );
};
