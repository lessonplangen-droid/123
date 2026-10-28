/**
 * DidactiPlan - ENGINE 1: 3PS (Foundation Engine)
 * Dedicated Validator for Third Year Primary.
 */

import { DidactiPlanLesson, ValidationReport } from '../../shared/lessonPlanSchema';
import { PS3_CURRICULUM_DATA } from './curriculum';

export class PS3Validator {
  public static validate(lesson: DidactiPlanLesson): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const passedChecks: string[] = [];

    // Level Check
    if (lesson.engineId !== '3PS') {
      errors.push(`Engine ID mismatch: Expected '3PS', got '${lesson.engineId}'`);
    } else {
      passedChecks.push('Engine isolation verified: Pure 3PS Foundation Engine.');
    }

    // Sequence Check
    const seq = PS3_CURRICULUM_DATA.find(
      (s) => s.sequenceNumber === lesson.administrativeInfo.sequenceNumber
    );
    if (!seq) {
      errors.push(
        `Invalid sequence number ${lesson.administrativeInfo.sequenceNumber} for 3PS. Valid sequences: 1 to 6.`
      );
    } else {
      passedChecks.push(`Sequence verified: Seq ${seq.sequenceNumber} - ${seq.sequenceTitle}`);
    }

    // Contamination Checks: Ensure no 4PS/5PS bleed-in
    const stringified = JSON.stringify(lesson).toLowerCase();
    if (stringified.includes('skimming') || stringified.includes('scanning')) {
      errors.push(
        'PEDAGOGICAL CONTAMINATION: Found reading strategies (skimming/scanning) strictly reserved for 5PS Consolidation Engine.'
      );
    }
    if (stringified.includes('joined handwriting') || stringified.includes('cursive')) {
      errors.push(
        'PEDAGOGICAL CONTAMINATION: 3PS strictly mandates print style handwriting; cursive is introduced in 4PS.'
      );
    }
    if (stringified.includes('i get ready') || stringified.includes('i check my progress')) {
      errors.push(
        'PEDAGOGICAL CONTAMINATION: Found 5PS session types (I Get Ready / I Check my Progress).'
      );
    }

    // Timing check
    const totalTime =
      lesson.procedureStages.warmUp.steps.reduce((a, b) => a + b.timeMinutes, 0) +
      lesson.procedureStages.installResources.steps.reduce((a, b) => a + b.timeMinutes, 0) +
      lesson.procedureStages.assessment.steps.reduce((a, b) => a + b.timeMinutes, 0);

    const expectedTime = lesson.administrativeInfo.timeDurationMinutes || 60;
    if (totalTime !== expectedTime) {
      errors.push(`Timing error: Expected ${expectedTime} minutes total, got ${totalTime} minutes.`);
    } else {
      passedChecks.push(`Timing balanced exactly to ${expectedTime} minutes.`);
    }

    return {
      isValid: errors.length === 0,
      engineId: '3PS',
      totalTimeMinutes: totalTime,
      expectedTimeMinutes: expectedTime,
      timeMatch: totalTime === expectedTime,
      errors,
      warnings,
      passedChecks,
    };
  }
}
