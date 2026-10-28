/**
 * DidactiPlan - Source Validation Module
 * Verifies that every generated lesson plan strictly originates from
 * authoritative Algerian Primary English curriculum sources.
 */

import { PrimaryLevel, DidactiPlanLesson } from './lessonPlanSchema';

export class SourceValidator {
  /**
   * Validates whether a lesson's metadata and content adhere to the level-specific curriculum.
   */
  public static validateCurriculumIntegrity(
    lesson: DidactiPlanLesson,
    expectedLevel: PrimaryLevel
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 1. Strict Engine Isolation check
    if (lesson.engineId !== expectedLevel) {
      errors.push(
        `ENGINE CONTAMINATION ERROR: Expected engine ${expectedLevel} but lesson was tagged with ${lesson.engineId}.`
      );
    }

    if (lesson.administrativeInfo.level !== expectedLevel) {
      errors.push(
        `LEVEL MISMATCH: Administrative level ${lesson.administrativeInfo.level} does not match expected ${expectedLevel}.`
      );
    }

    // 2. Duration check
    if (expectedLevel === '5PS' && lesson.administrativeInfo.timeDurationMinutes !== 45) {
      errors.push(
        `TIMING ERROR for 5PS: Official Didactic Guide Key Stage 3 mandates 45 minutes for Year 5, found ${lesson.administrativeInfo.timeDurationMinutes} min.`
      );
    } else if (
      (expectedLevel === '3PS' || expectedLevel === '4PS') &&
      lesson.administrativeInfo.timeDurationMinutes !== 60 &&
      lesson.administrativeInfo.timeDurationMinutes !== 45
    ) {
      errors.push(
        `TIMING ERROR for ${expectedLevel}: Standard session duration is 60 or 45 minutes, found ${lesson.administrativeInfo.timeDurationMinutes} min.`
      );
    }

    // 3. Document Citation check
    if (!lesson.authoritativeSources.didacticGuideRef) {
      errors.push('MISSING DOCUMENT CITATION: Didactic Guide reference is missing.');
    }
    if (!lesson.authoritativeSources.sessionOutlineRef) {
      errors.push('MISSING OUTLINE CITATION: Official Session Outline reference is missing.');
    }

    // 4. Procedure Structure check
    if (!lesson.procedureStages.warmUp || lesson.procedureStages.warmUp.steps.length === 0) {
      errors.push('STAGE ERROR: Warm-up stage is missing or has no steps.');
    }
    if (
      !lesson.procedureStages.installResources ||
      lesson.procedureStages.installResources.steps.length === 0
    ) {
      errors.push('STAGE ERROR: Install Resources stage is missing or has no steps.');
    }
    if (
      !lesson.procedureStages.assessment ||
      lesson.procedureStages.assessment.steps.length === 0
    ) {
      errors.push('STAGE ERROR: Assessment stage is missing or has no steps.');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
