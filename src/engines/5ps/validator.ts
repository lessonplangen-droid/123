/**
 * DidactiPlan - ENGINE 3: 5PS (Consolidation Engine)
 * Dedicated Validator for Fifth Year Primary.
 */

import { DidactiPlanLesson, ValidationReport } from '../../shared/lessonPlanSchema';
import { PS5_CURRICULUM_DATA } from './curriculum';

export class PS5Validator {
  public static validate(lesson: DidactiPlanLesson): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const passedChecks: string[] = [];

    // Level Check
    if (lesson.engineId !== '5PS') {
      errors.push(`Engine ID mismatch: Expected '5PS', got '${lesson.engineId}'`);
    } else {
      passedChecks.push('Engine isolation verified: Pure 5PS Consolidation Engine.');
    }

    // Sequence Check (5PS has 3 sequences)
    const seq = PS5_CURRICULUM_DATA.find(
      (s) => s.sequenceNumber === lesson.administrativeInfo.sequenceNumber
    );
    if (!seq) {
      errors.push(
        `Invalid sequence number ${lesson.administrativeInfo.sequenceNumber} for 5PS. Valid sequences: 1 to 3.`
      );
    } else {
      passedChecks.push(`Sequence verified: Seq ${seq.sequenceNumber} - ${seq.sequenceTitle}`);
    }

    // Strict Timing Check: 5PS is strictly 45 minutes
    const totalTime =
      lesson.procedureStages.warmUp.steps.reduce((a, b) => a + b.timeMinutes, 0) +
      lesson.procedureStages.installResources.steps.reduce((a, b) => a + b.timeMinutes, 0) +
      lesson.procedureStages.assessment.steps.reduce((a, b) => a + b.timeMinutes, 0);

    if (totalTime !== 45) {
      errors.push(`5PS STRICT TIMING ERROR: Expected exactly 45 minutes, calculated ${totalTime} min.`);
    } else {
      passedChecks.push('Strict 45-minute Key Stage 3 timing verified.');
    }

    // Contamination Checks: Ensure no 3PS beginner print-formation basics
    const stringified = JSON.stringify(lesson).toLowerCase();
    if (stringified.includes('i sing & have fun') && !stringified.includes('i listen & interact')) {
      errors.push(
        'PEDAGOGICAL CONTAMINATION: Found 3PS/4PS opening session structure instead of 5PS.'
      );
    }

    // Exit ticket check
    if (!lesson.assessmentAndRemediation.exitTicketPrompt) {
      warnings.push('5PS lessons should always conclude with an explicit Exit Ticket prompt.');
    } else {
      passedChecks.push('Exit Ticket formative assessment tool confirmed.');
    }

    return {
      isValid: errors.length === 0,
      engineId: '5PS',
      totalTimeMinutes: totalTime,
      expectedTimeMinutes: 45,
      timeMatch: totalTime === 45,
      errors,
      warnings,
      passedChecks,
    };
  }
}
