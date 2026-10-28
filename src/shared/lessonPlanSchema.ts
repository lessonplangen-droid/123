/**
 * DidactiPlan - Shared Lesson Plan Schema
 * Authoritative schema for Algerian Primary English Didactic Lesson Plans.
 */

export type PrimaryLevel = '3PS' | '4PS' | '5PS';

export type InteractionPattern =
  | 'T-S'
  | 'T-Ls'
  | 'Ls-T'
  | 'S-S'
  | 'Ls-Ls'
  | 'Individual'
  | 'Group Work'
  | 'Whole Class';

export type VARKTType =
  | 'V'
  | 'A'
  | 'R'
  | 'K'
  | 'T'
  | 'V/A'
  | 'V/R'
  | 'A/R'
  | 'R/A'
  | 'R/T'
  | 'K/T'
  | 'V/K'
  | 'V/T'
  | 'A/K'
  | 'A/T'
  | 'A/V'
  | 'V/A/K'
  | 'V/K/T'
  | 'V/K/A'
  | 'R/A/K'
  | 'All'
  | (string & {});

export interface CenturySkillIntegration {
  category:
    | 'Critical Thinking'
    | 'Creativity'
    | 'Collaboration'
    | 'Communication'
    | 'Information & Digital Literacy'
    | 'Social & Cross-Cultural';
  targetSkill: string;
  classroomApplication: string;
  stageTarget: 'Warm-up' | 'Install Resources' | 'Assessment' | 'All Stages';
}

export interface ProcedureStep {
  stepNumber: string;
  stepName: string;
  subObjective: string; // The enabling pedagogical sub-objective for this step
  teacherAction: string; // What the teacher says and does
  studentAction: string; // How pupils respond
  interaction: InteractionPattern;
  timeMinutes: number;
  varkt: VARKTType;
  centurySkill?: string; // e.g. "Collaboration (TPS)", "Critical Thinking (Decoding)", "Communication (Pair Dialogue)"
  pedagogicalTip?: string;
}

export interface ProcedureStage {
  stageId: 'warm_up' | 'install_resources' | 'assessment';
  stageName: 'Warm-up' | 'Install Resources' | 'Assessment';
  totalTimeMinutes: number;
  steps: ProcedureStep[];
}

export interface DidactiPlanLesson {
  // Metadata & Engine ID
  id: string;
  engineId: PrimaryLevel;
  engineName: string;
  generatedAt: string;

  // Administrative Information
  administrativeInfo: {
    country: string; // People's Democratic Republic of Algeria
    ministry: string; // Ministry of National Education
    council: string; // The National Curriculum Council (CNP)
    schoolName: string;
    teacherName: string;
    classProfile: string;
    level: PrimaryLevel;
    numberOfLearners: number;
    date: string;
    sequenceNumber: number;
    sequenceTitle: string;
    sectionNumber: number;
    sectionTitle: string;
    sessionNumber: number;
    sessionTitle: string;
    timeDurationMinutes: number; // 60 min (3PS/4PS) or 45 min (5PS)
  };

  // Objectives
  mainObjective: string;
  subsidiaryObjectives: string[];
  communicativeObjective: string;

  // Algerian Curriculum Competencies
  globalCompetence: string;
  targetCompetencies: {
    oralComprehension: string;
    oralProduction: string;
    writtenComprehension: string;
    writtenProduction: string;
  };
  crossCurricularCompetences: {
    intellectual: string;
    methodological: string;
    communicative: string;
    personalAndSocial: string;
  };

  // Values and 21st Century Skills
  coreValues: {
    nationalIdentity: string;
    nationalConscience: string;
    citizenship: string;
    opennessToTheWorld: string;
  };
  twentyFirstCenturySkills: string[];
  centurySkillsIntegration?: CenturySkillIntegration[];

  // Linguistic Resources
  linguisticResources: {
    targetVocabulary: string[];
    targetGrammar: string;
    phonicsOrSounds: string;
    handwritingOrSpelling?: string;
    authenticListeningScriptRef?: string;
    listeningScriptContent?: string;
    readingTextContent?: string;
  };

  // Materials & Management
  teachingMaterials: string[];
  anticipatedProblems: {
    problem: string;
    solutionOrPlanB: string;
  }[];

  // 3-Stage Procedure Table
  procedureStages: {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  };

  // Exit Ticket & Assessment
  assessmentAndRemediation: {
    formativeTechnique: string;
    exitTicketPrompt: string;
    remediationStrategy: string;
  };

  // Self-Reflection (Official Table from D.G.)
  selfReflection: {
    whatWorked: string;
    whatHindered: string;
    actionPlan: string;
  };

  // Authoritative Document Sources
  authoritativeSources: {
    didacticGuideRef: string;
    curriculumYear: string;
    syllabusTableRef: string;
    sessionOutlineRef: string;
    listeningScriptRef?: string;
  };
}

export interface ValidationReport {
  isValid: boolean;
  engineId: PrimaryLevel;
  totalTimeMinutes: number;
  expectedTimeMinutes: number;
  timeMatch: boolean;
  errors: string[];
  warnings: string[];
  passedChecks: string[];
}
