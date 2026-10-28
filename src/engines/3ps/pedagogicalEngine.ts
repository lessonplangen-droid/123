/**
 * DidactiPlan - ENGINE 1: 3PS (Foundation Engine)
 * Core Pedagogical Engine for Third Year Primary.
 * Exclusively executes 3PS pedagogical methodology.
 */

import { DidactiPlanLesson } from '../../shared/lessonPlanSchema';
import { PS3_CURRICULUM_DATA, PS3SessionData } from './curriculum';
import {
  PS3_GLOBAL_COMPETENCE,
  PS3_TARGET_COMPETENCIES,
  PS3_CROSS_CURRICULAR,
  PS3_CORE_VALUES,
  PS3_21ST_CENTURY_SKILLS,
  getPS3CenturySkillsIntegration,
} from './objectives';
import { PS3Outlines } from './outlines';
import { PS3Validator } from './validator';

export interface LessonGenerationOptions {
  schoolName?: string;
  teacherName?: string;
  classProfile?: string;
  numberOfLearners?: number;
  date?: string;
}

export class PS3PedagogicalEngine {
  public static readonly ENGINE_ID = '3PS' as const;
  public static readonly ENGINE_NAME = '3PS – Foundation Engine (Third Year Primary)';
  public static readonly DURATION_MINUTES = 60;

  public static getAvailableSequences() {
    return PS3_CURRICULUM_DATA.map((seq) => ({
      sequenceNumber: seq.sequenceNumber,
      sequenceTitle: seq.sequenceTitle,
      sections: seq.sections.map((sec) => ({
        sectionNumber: sec.sectionNumber,
        sectionTitle: sec.sectionTitle,
        sessions: sec.sessions.map((sess) => ({
          sessionNumber: sess.sessionNumber,
          sessionTitle: sess.sessionTitle,
          objective: sess.officialObjective,
        })),
      })),
    }));
  }

  public static generateLesson(
    sequenceNumber: number,
    sectionNumber: number,
    sessionNumber: number,
    options?: LessonGenerationOptions
  ): DidactiPlanLesson {
    // 1. Retrieve Curriculum Grounding
    const seq = PS3_CURRICULUM_DATA.find((s) => s.sequenceNumber === sequenceNumber);
    if (!seq) {
      throw new Error(`[3PS Engine Error] Sequence ${sequenceNumber} does not exist in 3PS curriculum.`);
    }

    const sec = seq.sections.find((s) => s.sectionNumber === sectionNumber);
    if (!sec) {
      throw new Error(
        `[3PS Engine Error] Section ${sectionNumber} does not exist in Sequence ${sequenceNumber}.`
      );
    }

    const sess: PS3SessionData | undefined = sec.sessions.find(
      (s) => s.sessionNumber === sessionNumber
    );
    if (!sess) {
      throw new Error(
        `[3PS Engine Error] Session ${sessionNumber} does not exist in Section ${sectionNumber}.`
      );
    }

    // 2. Build 3-Stage Procedure from Official Session Outline
    const stages = PS3Outlines.buildSessionStages(sess);

    // 3. Assemble Complete DidactiPlan Lesson Document
    const lesson: DidactiPlanLesson = {
      id: `3PS-SEQ${seq.sequenceNumber}-SEC${sec.sectionNumber}-SESS${sess.sessionNumber}-${Date.now()}`,
      engineId: '3PS',
      engineName: this.ENGINE_NAME,
      generatedAt: new Date().toISOString(),

      administrativeInfo: {
        country: "People's Democratic Republic of Algeria",
        ministry: 'Ministry of National Education',
        council: 'The National Curriculum Council (CNP)',
        schoolName: options?.schoolName || 'Ibn Khaldoun Primary School',
        teacherName: options?.teacherName || 'Primary English Teacher',
        classProfile: options?.classProfile || 'Beginners (First Contact with English)',
        level: '3PS',
        numberOfLearners: options?.numberOfLearners || 32,
        date: options?.date || new Date().toISOString().split('T')[0],
        sequenceNumber: seq.sequenceNumber,
        sequenceTitle: seq.sequenceTitle,
        sectionNumber: sec.sectionNumber,
        sectionTitle: sec.sectionTitle,
        sessionNumber: sess.sessionNumber,
        sessionTitle: sess.sessionTitle,
        timeDurationMinutes: this.DURATION_MINUTES,
      },

      mainObjective: sess.officialObjective,
      subsidiaryObjectives: [
        `Recognize and reproduce the target vocabulary (${sess.targetLexis.slice(0, 3).join(', ')}) with correct pronunciation and intonation.`,
        'Demonstrate understanding of the spoken message using TPR, gestures, and visual flashcards.',
        'Actively collaborate with peers in choral chants and guided mini-roleplay exchanges.',
      ],
      communicativeObjective: sec.communicativeObjectives[0] || sess.officialObjective,

      globalCompetence: PS3_GLOBAL_COMPETENCE,
      targetCompetencies: PS3_TARGET_COMPETENCIES,
      crossCurricularCompetences: PS3_CROSS_CURRICULAR,
      coreValues: PS3_CORE_VALUES,
      twentyFirstCenturySkills: PS3_21ST_CENTURY_SKILLS,
      centurySkillsIntegration: getPS3CenturySkillsIntegration(sess.sessionTitle, seq.sequenceTitle),

      linguisticResources: {
        targetVocabulary: sess.targetLexis,
        targetGrammar: sess.targetGrammar,
        phonicsOrSounds: sess.phonicsOrLetters,
        handwritingOrSpelling: 'Print handwriting (sizing, spacing and alignment between lines)',
        authenticListeningScriptRef: 'Official Listening Script 3PS, National Curriculum Council',
        listeningScriptContent: sess.authenticScript,
      },

      teachingMaterials: [
        'Flashcards & realia related to ' + seq.sequenceTitle,
        'Mini-whiteboards (MWBs) & markers',
        'Official Didactic Guide 3PS listening track',
        'Puppets / Character masks for dialogue modeling',
      ],

      anticipatedProblems: [
        {
          problem: 'Learners may feel shy or hesitant to produce new English sounds in front of peers.',
          solutionOrPlanB:
            'Use choral repetition first, enthusiastic praising, and physical TPR gestures to lower affective filter before individual elicitation.',
        },
        {
          problem: 'Confusion between similar letter strokes (e.g. reversing b and d in print handwriting).',
          solutionOrPlanB:
            'Group letters by movement families (anticlockwise vs clockwise) and trace in the air and on palms before pencil on paper.',
        },
      ],

      procedureStages: stages,

      assessmentAndRemediation: {
        formativeTechnique: 'Observation checklist during TPR drills and "Missing Card" game.',
        exitTicketPrompt: 'Show thumbs up/down: "Can you name 2 target words from today?"',
        remediationStrategy:
          'Provide extra visual flashcard reinforcement and peer-buddy scaffolding for hesitant learners during the consolidation pause.',
      },

      selfReflection: {
        whatWorked: 'High pupil motivation and engagement through the Alphabet Song and physical TPR movements.',
        whatHindered: 'Some learners required extra modeling for the ending consonant sounds.',
        actionPlan: 'Recycle target lexis in tomorrow’s warm-up through a quick 2-minute "Simon Says" game.',
      },

      authoritativeSources: {
        didacticGuideRef: 'Didactic Guide of English - Key Stage 1 Primary Education (2023), Section ' + sec.sectionTitle,
        curriculumYear: '3rd Year Primary (Key Stage 1)',
        syllabusTableRef: `Table Topics & Communicative Objectives Year 3, Sequence ${seq.sequenceNumber}`,
        sessionOutlineRef: `Official Session Outline 3PS: ${sess.sessionTitle}`,
        listeningScriptRef: `Official Listening Scripts 3PS, Sequence ${seq.sequenceNumber}, Section ${sec.sectionNumber}`,
      },
    };

    // 4. Validate output before delivery
    const validation = PS3Validator.validate(lesson);
    if (!validation.isValid) {
      console.warn('[3PS Validation Warnings/Errors]:', validation.errors);
    }

    return lesson;
  }
}
