/**
 * DidactiPlan - ENGINE 3: 5PS (Consolidation Engine)
 * Core Pedagogical Engine for Fifth Year Primary.
 * Exclusively executes 5PS pedagogical methodology.
 */

import { DidactiPlanLesson } from '../../shared/lessonPlanSchema';
import { PS5_CURRICULUM_DATA, PS5SessionData } from './curriculum';
import {
  PS5_GLOBAL_COMPETENCE,
  PS5_TARGET_COMPETENCIES,
  PS5_CROSS_CURRICULAR,
  PS5_CORE_VALUES,
  PS5_21ST_CENTURY_SKILLS,
  getPS5CenturySkillsIntegration,
} from './objectives';
import { PS5Outlines } from './outlines';
import { PS5Validator } from './validator';

export interface LessonGenerationOptions {
  schoolName?: string;
  teacherName?: string;
  classProfile?: string;
  numberOfLearners?: number;
  date?: string;
}

export class PS5PedagogicalEngine {
  public static readonly ENGINE_ID = '5PS' as const;
  public static readonly ENGINE_NAME = '5PS – Consolidation Engine (Fifth Year Primary)';
  public static readonly DURATION_MINUTES = 45; // Strictly 45 minutes

  public static getAvailableSequences() {
    return PS5_CURRICULUM_DATA.map((seq) => ({
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
    const seq = PS5_CURRICULUM_DATA.find((s) => s.sequenceNumber === sequenceNumber);
    if (!seq) {
      throw new Error(`[5PS Engine Error] Sequence ${sequenceNumber} does not exist in 5PS curriculum.`);
    }

    const sec = seq.sections.find((s) => s.sectionNumber === sectionNumber);
    if (!sec) {
      throw new Error(
        `[5PS Engine Error] Section ${sectionNumber} does not exist in Sequence ${sequenceNumber}.`
      );
    }

    const sess: PS5SessionData | undefined = sec.sessions.find(
      (s) => s.sessionNumber === sessionNumber
    );
    if (!sess) {
      throw new Error(
        `[5PS Engine Error] Session ${sessionNumber} does not exist in Section ${sectionNumber}.`
      );
    }

    // 2. Build 3-Stage Procedure from Official Session Outline (Strict 45-min timing)
    const stages = PS5Outlines.buildSessionStages(sess);

    // 3. Assemble Complete DidactiPlan Lesson Document
    const lesson: DidactiPlanLesson = {
      id: `5PS-SEQ${seq.sequenceNumber}-SEC${sec.sectionNumber}-SESS${sess.sessionNumber}-${Date.now()}`,
      engineId: '5PS',
      engineName: this.ENGINE_NAME,
      generatedAt: new Date().toISOString(),

      administrativeInfo: {
        country: "People's Democratic Republic of Algeria",
        ministry: 'Ministry of National Education',
        council: 'The National Curriculum Council (CNP)',
        schoolName: options?.schoolName || 'Ibn Badis Primary School',
        teacherName: options?.teacherName || 'Primary English Teacher',
        classProfile: options?.classProfile || 'Upper Primary (Consolidation & Autonomous Learners)',
        level: '5PS',
        numberOfLearners: options?.numberOfLearners || 35,
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
        `Mobilize targeted vocabulary and sentence patterns to communicate about ${sec.sectionTitle.toLowerCase()}.`,
        'Demonstrate reading comprehension using skimming for gist and scanning for specific information.',
        'Synthesize written notes from forms into cohesive 10-20 word paragraphs applying writing mechanics.',
      ],
      communicativeObjective: sec.communicativeObjectives[0] || sess.officialObjective,

      globalCompetence: PS5_GLOBAL_COMPETENCE,
      targetCompetencies: PS5_TARGET_COMPETENCIES,
      crossCurricularCompetences: PS5_CROSS_CURRICULAR,
      coreValues: PS5_CORE_VALUES,
      twentyFirstCenturySkills: PS5_21ST_CENTURY_SKILLS,
      centurySkillsIntegration: getPS5CenturySkillsIntegration(sess.sessionTitle, seq.sequenceTitle),

      linguisticResources: {
        targetVocabulary: sess.targetLexis,
        targetGrammar: sess.targetGrammar,
        phonicsOrSounds: sess.phonicsOrSounds || sess.phonicsOrLetters || 'Sound discrimination & intonation',
        handwritingOrSpelling: 'Written mechanics: Capitalization, punctuation, word order (syntax) & subject-verb agreement',
        authenticListeningScriptRef: 'Official Listening Script 5PS, National Curriculum Council',
        listeningScriptContent: sess.authenticScript,
        readingTextContent: sess.readingPassage,
      },

      teachingMaterials: [
        'Official Didactic Guide 5PS audio tracks & flashcards',
        'Personal student portfolios & initial situation worksheets',
        'Mini-whiteboards (MWBs), question prompt cards, and map/chart handouts',
        'Official 4-level evaluation grid (Full, Acceptable, Partial, Minimum mastery)',
      ],

      anticipatedProblems: [
        {
          problem: 'Learners may attempt word-by-word translation during reading comprehension passages.',
          solutionOrPlanB:
            'Implement explicit chunking strategies, set strict time limits for skimming tasks, and guide focus on general gist before details.',
        },
        {
          problem: 'Mistakes in subject-verb agreement when transforming notes into written sentences.',
          solutionOrPlanB:
            'Use interactive question cards (Who? What? Where?) on the board and anonymous whole-class peer editing before copying.',
        },
      ],

      procedureStages: stages,

      assessmentAndRemediation: {
        formativeTechnique: 'Skimming/Scanning verification, oral role-play checks, and anonymous board peer editing.',
        exitTicketPrompt:
          'Official Exit Ticket: 1. Today I learned about... 2. I need more help with... 3. How do you feel about today’s lesson? (Smiley rating)',
        remediationStrategy:
          'Track individual lacunas during sessions and target fast/average/slow remediation groups during the scheduled 2-hour Pause periods.',
      },

      selfReflection: {
        whatWorked: 'High fluency in Think-Pair-Share and successful transition of notes into coherent paragraph writing.',
        whatHindered: 'Some students needed extra guidance on punctuation rules when listing items in a series.',
        actionPlan: 'Review comma usage in tomorrow’s I Learn & Enjoy "Punctuation Hunt" activity.',
      },

      authoritativeSources: {
        didacticGuideRef: 'Didactic Guide of English - Key Stage 3 Primary Education (2024), Year 5, Section ' + sec.sectionTitle,
        curriculumYear: '5th Year Primary (Key Stage 3)',
        syllabusTableRef: `Table 1: Topics and Communicative Objectives Year 5, Sequence ${seq.sequenceNumber}`,
        sessionOutlineRef: `Official Session Outline 5PS: ${sess.sessionTitle}`,
        listeningScriptRef: `Official Listening Scripts and Reading Texts 5PS, Sequence ${seq.sequenceNumber}, Section ${sec.sectionNumber}`,
      },
    };

    // 4. Validate output before delivery
    const validation = PS5Validator.validate(lesson);
    if (!validation.isValid) {
      console.warn('[5PS Validation Warnings/Errors]:', validation.errors);
    }

    return lesson;
  }
}
