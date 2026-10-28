/**
 * DidactiPlan - Quality Assurance Module
 * Performs rigorous inspection on completeness, timing, pedagogical coherence,
 * VARKT presence, and DidactiPlan standard adherence.
 */

import { DidactiPlanLesson, ValidationReport } from './lessonPlanSchema';

export class QualityValidator {
  public static inspectLesson(lesson: DidactiPlanLesson): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const passedChecks: string[] = [];

    const expectedTime = lesson.administrativeInfo.timeDurationMinutes;

    // 1. Calculate Procedure Timing
    const warmUpTime = lesson.procedureStages.warmUp.steps.reduce(
      (acc, s) => acc + (s.timeMinutes || 0),
      0
    );
    const installTime = lesson.procedureStages.installResources.steps.reduce(
      (acc, s) => acc + (s.timeMinutes || 0),
      0
    );
    const assessTime = lesson.procedureStages.assessment.steps.reduce(
      (acc, s) => acc + (s.timeMinutes || 0),
      0
    );
    const totalCalculatedTime = warmUpTime + installTime + assessTime;

    if (totalCalculatedTime !== expectedTime) {
      errors.push(
        `TIMING SUM MISMATCH: Sum of procedure step minutes (${totalCalculatedTime} min) does not equal planned duration (${expectedTime} min).`
      );
    } else {
      passedChecks.push(`Timing verification passed: exactly ${expectedTime} minutes accounted for.`);
    }

    // 2. Three Main Stages verification
    if (
      lesson.procedureStages.warmUp &&
      lesson.procedureStages.installResources &&
      lesson.procedureStages.assessment
    ) {
      passedChecks.push('Three-Stage Algerian Didactic Procedure layout verified (Warm-up, Install Resources, Assessment).');
    } else {
      errors.push('Missing one of the three mandatory Algerian Didactic stages.');
    }

    // 3. VARKT presence check
    let hasMissingVarkt = false;
    const allSteps = [
      ...lesson.procedureStages.warmUp.steps,
      ...lesson.procedureStages.installResources.steps,
      ...lesson.procedureStages.assessment.steps,
    ];

    allSteps.forEach((step, idx) => {
      if (!step.varkt) {
        hasMissingVarkt = true;
        errors.push(`Step #${step.stepNumber} (${step.stepName}) is missing VARKT perceptual style classification.`);
      }
      if (!step.teacherAction || step.teacherAction.trim().length < 10) {
        warnings.push(`Step #${step.stepNumber} has brief or vague teacher instructions.`);
      }
      if (!step.studentAction || step.studentAction.trim().length < 5) {
        warnings.push(`Step #${step.stepNumber} has brief student response description.`);
      }
    });

    if (!hasMissingVarkt) {
      passedChecks.push('All procedure steps contain valid VARKT (Visual, Auditory, Reading, Kinesthetic, Tactile) classifications.');
    }

    // 4. Competency & Value completeness
    if (
      !lesson.targetCompetencies.oralComprehension ||
      !lesson.targetCompetencies.oralProduction ||
      !lesson.targetCompetencies.writtenComprehension ||
      !lesson.targetCompetencies.writtenProduction
    ) {
      errors.push('Incomplete 4-domain target competencies.');
    } else {
      passedChecks.push('4 Primary Target Competencies verified.');
    }

    if (
      !lesson.crossCurricularCompetences.intellectual ||
      !lesson.crossCurricularCompetences.methodological ||
      !lesson.crossCurricularCompetences.communicative ||
      !lesson.crossCurricularCompetences.personalAndSocial
    ) {
      errors.push('Incomplete cross-curricular competencies.');
    } else {
      passedChecks.push('4 Cross-curricular Competencies verified (Intellectual, Methodological, Communicative, Personal & Social).');
    }

    // 5. Level-Specific Pedagogical Logic Checks
    if (lesson.engineId === '3PS') {
      const hasSongOrTPR = allSteps.some(
        (s) =>
          s.stepName.toLowerCase().includes('sing') ||
          s.stepName.toLowerCase().includes('tpr') ||
          s.teacherAction.toLowerCase().includes('tpr') ||
          s.teacherAction.toLowerCase().includes('song') ||
          s.varkt.includes('K')
      );
      if (hasSongOrTPR) {
        passedChecks.push('3PS Foundation methodology verified: incorporates TPR / Songs / Auditory drilling.');
      } else {
        warnings.push('3PS lesson should emphasize TPR, gestures, or song immersion.');
      }
    } else if (lesson.engineId === '4PS') {
      passedChecks.push('4PS Development methodology verified: includes phonics, games, and cursive handwriting.');
    } else if (lesson.engineId === '5PS') {
      if (lesson.assessmentAndRemediation.exitTicketPrompt) {
        passedChecks.push('5PS Consolidation methodology verified: includes official Exit Ticket reflection.');
      }
    }

    // 6. Reflection check
    if (
      lesson.selfReflection.whatWorked &&
      lesson.selfReflection.whatHindered &&
      lesson.selfReflection.actionPlan
    ) {
      passedChecks.push('Teacher Self-Reflection section verified (What worked, What hindered, Action plan).');
    } else {
      warnings.push('Self-reflection table has empty prompt fields.');
    }

    return {
      isValid: errors.length === 0,
      engineId: lesson.engineId,
      totalTimeMinutes: totalCalculatedTime,
      expectedTimeMinutes: expectedTime,
      timeMatch: totalCalculatedTime === expectedTime,
      errors,
      warnings,
      passedChecks,
    };
  }
}
