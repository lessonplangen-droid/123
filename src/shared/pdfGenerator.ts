/**
 * DidactiPlan - PDF Export Module
 * Handles professional printing to A4 PDF, formatting, and clean document rendering.
 */

import { DidactiPlanLesson } from './lessonPlanSchema';

export class PDFGenerator {
  /**
   * Triggers the browser's native print engine with an A4-optimized page layout.
   */
  public static printLessonPlan(): void {
    window.print();
  }

  /**
   * Generates a clean text/markdown representation for export or archiving.
   */
  public static exportMarkdown(lesson: DidactiPlanLesson): string {
    const admin = lesson.administrativeInfo;
    const lres = lesson.linguisticResources;

    return `
# DIDACTIPLAN - OFFICIAL PRIMARY ENGLISH LESSON PLAN

**Level**: ${admin.level} (${lesson.engineName})
**School**: ${admin.schoolName || 'Primary School'} | **Teacher**: ${admin.teacherName || 'English Teacher'}
**Class Profile**: ${admin.classProfile} | **Learners**: ${admin.numberOfLearners}
**Date**: ${admin.date} | **Duration**: ${admin.timeDurationMinutes} minutes
**Sequence ${admin.sequenceNumber}**: ${admin.sequenceTitle}
**Section ${admin.sectionNumber}**: ${admin.sectionTitle}
**Session ${admin.sessionNumber}**: ${admin.sessionTitle}

---
### OBJECTIVES & COMPETENCIES
- **Main Objective**: ${lesson.mainObjective}
- **Communicative Objective**: ${lesson.communicativeObjective}
- **Global Competence**: ${lesson.globalCompetence}

#### Target Competencies:
1. Oral Comprehension: ${lesson.targetCompetencies.oralComprehension}
2. Oral Production: ${lesson.targetCompetencies.oralProduction}
3. Written Comprehension: ${lesson.targetCompetencies.writtenComprehension}
4. Written Production: ${lesson.targetCompetencies.writtenProduction}

#### Cross-Curricular Competencies:
- Intellectual: ${lesson.crossCurricularCompetences.intellectual}
- Methodological: ${lesson.crossCurricularCompetences.methodological}
- Communicative: ${lesson.crossCurricularCompetences.communicative}
- Personal & Social: ${lesson.crossCurricularCompetences.personalAndSocial}

#### Core Values:
- National Identity: ${lesson.coreValues.nationalIdentity}
- Citizenship: ${lesson.coreValues.citizenship}
- Openness to the World: ${lesson.coreValues.opennessToTheWorld}

---
### LINGUISTIC RESOURCES & MATERIALS
- **Target Vocabulary**: ${lres.targetVocabulary.join(', ')}
- **Target Grammar**: ${lres.targetGrammar}
- **Phonics / Sounds**: ${lres.phonicsOrSounds}
${lres.handwritingOrSpelling ? `- **Handwriting/Spelling**: ${lres.handwritingOrSpelling}` : ''}
${lres.listeningScriptContent ? `\n**Authentic Listening Script**:\n> ${lres.listeningScriptContent}\n` : ''}
${lres.readingTextContent ? `\n**Reading Text**:\n> ${lres.readingTextContent}\n` : ''}

**Teaching Materials**: ${lesson.teachingMaterials.join('; ')}

---
### CLASSROOM PROCEDURE (3 STAGES)

| Stage | Sub-Objectives | Procedure / Steps & Classroom Actions | Interaction | Time | VARKT |
|---|---|---|---|---|---|
${lesson.procedureStages.warmUp.steps
  .map(
    (s) =>
      `| Warm-up | ${s.subObjective} | **${s.stepName}**<br>T: ${s.teacherAction}<br>Ls: ${s.studentAction} | ${s.interaction} | ${s.timeMinutes}m | ${s.varkt} |`
  )
  .join('\n')}
${lesson.procedureStages.installResources.steps
  .map(
    (s) =>
      `| Install Resources | ${s.subObjective} | **${s.stepName}**<br>T: ${s.teacherAction}<br>Ls: ${s.studentAction} | ${s.interaction} | ${s.timeMinutes}m | ${s.varkt} |`
  )
  .join('\n')}
${lesson.procedureStages.assessment.steps
  .map(
    (s) =>
      `| Assessment | ${s.subObjective} | **${s.stepName}**<br>T: ${s.teacherAction}<br>Ls: ${s.studentAction} | ${s.interaction} | ${s.timeMinutes}m | ${s.varkt} |`
  )
  .join('\n')}
| Assessment | Formative self-assessment & consolidation reflection before dismissal | **Official Exit Ticket Reflection**<br>T: Prompts: "${lesson.assessmentAndRemediation.exitTicketPrompt}"<br>Ls: Reflect and demonstrate mastery | Individual | 3m | R/A |

---
### FORMATIVE ASSESSMENT & REMEDIATION
- **Ongoing Formative Technique**: ${lesson.assessmentAndRemediation.formativeTechnique}
- **Remediation Strategy**: ${lesson.assessmentAndRemediation.remediationStrategy}

---
### TEACHER SELF-REFLECTION
| What Worked | What Hindered | Action Plan |
|---|---|---|
| ${lesson.selfReflection.whatWorked} | ${lesson.selfReflection.whatHindered} | ${lesson.selfReflection.actionPlan} |

---
**Official References**:
- Didactic Guide: ${lesson.authoritativeSources.didacticGuideRef}
- Session Outline: ${lesson.authoritativeSources.sessionOutlineRef}
- Curriculum Year: ${lesson.authoritativeSources.curriculumYear}
    `.trim();
  }
}
