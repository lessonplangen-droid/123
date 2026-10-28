/**
 * DidactiPlan - Engine Router Service
 * Routes requests to the appropriate independent pedagogical engine:
 * 3PS -> Foundation Engine
 * 4PS -> Development Engine
 * 5PS -> Consolidation Engine
 * Strictly populates dropdowns from validated curriculum data.
 */

import { PrimaryLevel, DidactiPlanLesson, ValidationReport } from '../shared/lessonPlanSchema';
import { PS3PedagogicalEngine } from '../engines/3ps/pedagogicalEngine';
import { PS4PedagogicalEngine } from '../engines/4ps/pedagogicalEngine';
import { PS5PedagogicalEngine } from '../engines/5ps/pedagogicalEngine';
import { PS3Validator } from '../engines/3ps/validator';
import { PS4Validator } from '../engines/4ps/validator';
import { PS5Validator } from '../engines/5ps/validator';
import { QualityValidator } from '../shared/qualityValidator';
import { SourceValidator } from '../shared/sourceValidator';

export interface EngineDescriptor {
  level: PrimaryLevel;
  name: string;
  focus: string;
  durationMinutes: number;
  authoritativeDocument: string;
  pedagogicalPrinciples: string[];
}

export class EngineRouter {
  public static getEngineDescriptors(): Record<PrimaryLevel, EngineDescriptor> {
    return {
      '3PS': {
        level: '3PS',
        name: PS3PedagogicalEngine.ENGINE_NAME,
        focus: 'Foundation Engine: Oral priority, listening, repetition, TPR, songs, gestures, print handwriting, phonemic awareness',
        durationMinutes: PS3PedagogicalEngine.DURATION_MINUTES,
        authoritativeDocument: 'Didactic Guide Key Stage 1 (2023) & 3PS Session Outlines',
        pedagogicalPrinciples: [
          'First contact with English in Algerian primary schools',
          'Oral comprehension and interaction prioritized',
          'TPR, gestures, pictures, songs, and realia',
          'Phonemic awareness: isolating, blending, segmenting',
          'Handwriting: print letters in formation families',
          'No formal grammar rules; strictly implicit formulaic chunks',
        ],
      },
      '4PS': {
        level: '4PS',
        name: PS4PedagogicalEngine.ENGINE_NAME,
        focus: 'Development Engine: Phonics contrasts, reading development (up to 40 words), cursive handwriting, cooperative games, pair interaction',
        durationMinutes: PS4PedagogicalEngine.DURATION_MINUTES,
        authoritativeDocument: 'Didactic Guide Key Stage 1 (2023) & 4PS Session Outlines',
        pedagogicalPrinciples: [
          'Reinforcement of 3PS basics with expanding vocabulary',
          'Contrastive phonics (/i/ vs /i:/, /ʃ/ vs /tʃ/, /ʊ/ vs /u:/, /θ/ vs /ð/)',
          'Connected cursive handwriting & form completion',
          'Structured cooperative games (Board Race, Word Jumble, Pictionary)',
          'Pair dialogue scaffolding (T/T -> T/Ls -> Ls/T -> Ls/Ls)',
        ],
      },
      '5PS': {
        level: '5PS',
        name: PS5PedagogicalEngine.ENGINE_NAME,
        focus: 'Consolidation Engine: Skimming & scanning, implicit grammar discovery, guided paragraph writing from notes, 45-minute pacing, Exit Tickets',
        durationMinutes: PS5PedagogicalEngine.DURATION_MINUTES,
        authoritativeDocument: 'Didactic Guide Key Stage 3 (2024) & 5PS Session Outlines',
        pedagogicalPrinciples: [
          'Consolidation of Key Stage 1 learning towards end-of-primary exit profile',
          'Initial problem-solving situation (I Get Ready) and terminal assessment (I Check my Progress)',
          'Explicit reading strategies: skimming for gist & scanning for specific data',
          'Implicit grammar discovery in oral & written contexts',
          'Guided paragraph composition (10-20 words) from notes and forms',
          'Strict 45-minute lesson pacing with explicit Exit Ticket formative assessments',
        ],
      },
    };
  }

  public static getAvailableSequences(level: PrimaryLevel) {
    switch (level) {
      case '3PS':
        return PS3PedagogicalEngine.getAvailableSequences();
      case '4PS':
        return PS4PedagogicalEngine.getAvailableSequences();
      case '5PS':
        return PS5PedagogicalEngine.getAvailableSequences();
    }
  }

  public static generateLesson(
    level: PrimaryLevel,
    sequenceNumber: number,
    sectionNumber: number,
    sessionNumber: number,
    options?: {
      schoolName?: string;
      teacherName?: string;
      classProfile?: string;
      numberOfLearners?: number;
      date?: string;
    }
  ): {
    lesson: DidactiPlanLesson;
    validation: ValidationReport;
    qualityReport: ValidationReport;
  } {
    let lesson: DidactiPlanLesson;
    let engineValidation: ValidationReport;

    switch (level) {
      case '3PS':
        lesson = PS3PedagogicalEngine.generateLesson(sequenceNumber, sectionNumber, sessionNumber, options);
        engineValidation = PS3Validator.validate(lesson);
        break;
      case '4PS':
        lesson = PS4PedagogicalEngine.generateLesson(sequenceNumber, sectionNumber, sessionNumber, options);
        engineValidation = PS4Validator.validate(lesson);
        break;
      case '5PS':
        lesson = PS5PedagogicalEngine.generateLesson(sequenceNumber, sectionNumber, sessionNumber, options);
        engineValidation = PS5Validator.validate(lesson);
        break;
    }

    // Run Source Integrity and Quality Validation
    const sourceIntegrity = SourceValidator.validateCurriculumIntegrity(lesson, level);
    if (!sourceIntegrity.valid) {
      engineValidation.errors.push(...sourceIntegrity.errors);
      engineValidation.isValid = false;
    }

    const qualityReport = QualityValidator.inspectLesson(lesson);

    return {
      lesson,
      validation: engineValidation,
      qualityReport,
    };
  }
}
