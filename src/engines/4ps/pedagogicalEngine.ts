/**
 * DidactiPlan - ENGINE 2: 4PS (Development Engine)
 * Core Pedagogical Engine for Fourth Year Primary.
 * Exclusively executes 4PS pedagogical methodology.
 */

import { DidactiPlanLesson } from '../../shared/lessonPlanSchema';
import { PS4_CURRICULUM_DATA, PS4SessionData } from './curriculum';
import {
  PS4_GLOBAL_COMPETENCE,
  PS4_TARGET_COMPETENCIES,
  PS4_CROSS_CURRICULAR,
  PS4_CORE_VALUES,
  PS4_21ST_CENTURY_SKILLS,
  getPS4CenturySkillsIntegration,
} from './objectives';
import { PS4Outlines } from './outlines';
import { PS4Validator } from './validator';

export interface LessonGenerationOptions {
  schoolName?: string;
  teacherName?: string;
  classProfile?: string;
  numberOfLearners?: number;
  date?: string;
}

export class PS4PedagogicalEngine {
  public static readonly ENGINE_ID = '4PS' as const;
  public static readonly ENGINE_NAME = '4PS – Development Engine (Fourth Year Primary)';
  public static readonly DURATION_MINUTES = 60;

  public static getAvailableSequences() {
    return PS4_CURRICULUM_DATA.map((seq) => ({
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
    const seq = PS4_CURRICULUM_DATA.find((s) => s.sequenceNumber === sequenceNumber);
    if (!seq) {
      throw new Error(`[4PS Engine Error] Sequence ${sequenceNumber} does not exist in 4PS curriculum.`);
    }

    const sec = seq.sections.find((s) => s.sectionNumber === sectionNumber);
    if (!sec) {
      throw new Error(
        `[4PS Engine Error] Section ${sectionNumber} does not exist in Sequence ${sequenceNumber}.`
      );
    }

    const sess: PS4SessionData | undefined = sec.sessions.find(
      (s) => s.sessionNumber === sessionNumber
    );
    if (!sess) {
      throw new Error(
        `[4PS Engine Error] Session ${sessionNumber} does not exist in Section ${sectionNumber}.`
      );
    }

    // 2. Build 3-Stage Procedure from Official Session Outline
    const stages = PS4Outlines.buildSessionStages(sess);

    // 3. Assemble Complete DidactiPlan Lesson Document
    const lesson: DidactiPlanLesson = {
      id: `4PS-SEQ${seq.sequenceNumber}-SEC${sec.sectionNumber}-SESS${sess.sessionNumber}-${Date.now()}`,
      engineId: '4PS',
      engineName: this.ENGINE_NAME,
      generatedAt: new Date().toISOString(),

      administrativeInfo: {
        country: "People's Democratic Republic of Algeria",
        ministry: 'Ministry of National Education',
        council: 'The National Curriculum Council (CNP)',
        schoolName: options?.schoolName || 'El Amir Abdelkader Primary School',
        teacherName: options?.teacherName || 'Primary English Teacher',
        classProfile: options?.classProfile || 'Elementary (Developing Young Learners)',
        level: '4PS',
        numberOfLearners: options?.numberOfLearners || 34,
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
        `Develop receptive and productive language related to ${sec.sectionTitle.toLowerCase()}.`,
        'Demonstrate accurate pronunciation of contrastive phonemes and intonation patterns.',
        'Apply joined handwriting (cursive) and transfer factual information into structured formats.',
      ],
      communicativeObjective: sec.communicativeObjectives[0] || sess.officialObjective,

      globalCompetence: PS4_GLOBAL_COMPETENCE,
      targetCompetencies: PS4_TARGET_COMPETENCIES,
      crossCurricularCompetences: PS4_CROSS_CURRICULAR,
      coreValues: PS4_CORE_VALUES,
      twentyFirstCenturySkills: PS4_21ST_CENTURY_SKILLS,
      centurySkillsIntegration: getPS4CenturySkillsIntegration(sess.sessionTitle, seq.sequenceTitle),

      linguisticResources: {
        targetVocabulary: sess.targetLexis,
        targetGrammar: sess.targetGrammar,
        phonicsOrSounds: sess.phonicsOrLetters || sess.phonicsOrSounds || 'Contrastive phonics',
        handwritingOrSpelling: 'Connected handwriting (cursive style) with proper letter joins and margins',
        authenticListeningScriptRef: 'Official Listening Script 4PS, National Curriculum Council',
        listeningScriptContent: sess.authenticScript,
        readingTextContent: sess.readingPassage,
      },

      teachingMaterials: [
        'Illustrated flashcards and realia for ' + seq.sequenceTitle,
        'Class copybooks (CCBs) & mini-whiteboards (MWBs)',
        'Word cards & envelopes for educational games (Word Jumble / Board Race)',
        'Official 4PS Didactic Audio Track',
      ],

      anticipatedProblems: [
        {
          problem: 'Confusion between contrastive phonemes (e.g. short /i/ vs long /i:/, or /s/ vs /θ/).',
          solutionOrPlanB:
            'Use visual mouth shape demonstrations, tactile throat vibration checks, and minimal pair sorting games.',
        },
        {
          problem: 'Pupils lifting pencil during cursive letter joins or losing baseline consistency.',
          solutionOrPlanB:
            'Model continuous fluid stroke on board lines with verbal rhythm cues before pupils write in copybooks.',
        },
      ],

      procedureStages: stages,

      assessmentAndRemediation: {
        formativeTechnique: 'Observation checklist during pair interactions, games, and copybook monitoring.',
        exitTicketPrompt: 'Complete prompt slip: "Today I wrote in cursive: ____________"',
        remediationStrategy:
          'Differentiate support for emerging writers with pre-dotted handwriting sheets and pair-tutoring.',
      },

      selfReflection: {
        whatWorked: 'High peer collaboration during educational game relays and proud cursive writing displays.',
        whatHindered: 'Some pairs needed additional prompting to maintain target English during role-play exchanges.',
        actionPlan: 'Introduce a "Sentence of the Day" cursive warm-up in the next session to reinforce handwriting automaticity.',
      },

      authoritativeSources: {
        didacticGuideRef: 'Didactic Guide of English - Key Stage 1 Primary Education (2023), Year 4, Section ' + sec.sectionTitle,
        curriculumYear: '4th Year Primary (Key Stage 1)',
        syllabusTableRef: `Table Topics & Communicative Objectives Year 4, Sequence ${seq.sequenceNumber}`,
        sessionOutlineRef: `Official Session Outline 4PS: ${sess.sessionTitle}`,
        listeningScriptRef: `Official Listening Scripts 4PS, Sequence ${seq.sequenceNumber}, Section ${sec.sectionNumber}`,
      },
    };

    // 4. Validate output before delivery
    const validation = PS4Validator.validate(lesson);
    if (!validation.isValid) {
      console.warn('[4PS Validation Warnings/Errors]:', validation.errors);
    }

    return lesson;
  }
}
