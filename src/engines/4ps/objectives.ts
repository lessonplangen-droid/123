/**
 * DidactiPlan - ENGINE 2: 4PS (Development Engine)
 * Authoritative Objectives, Competencies and Values Registry.
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide 4PS (2023).
 */

import { CenturySkillIntegration } from '../../shared/lessonPlanSchema';

export const PS4_GLOBAL_COMPETENCE =
  'Interact orally, comprehend oral messages and identify the meaning of words, expressions and simple sentences, decode symbols, read simple messages and produce relevant information to fill in a form.';

export const PS4_TARGET_COMPETENCIES = {
  oralComprehension:
    'Comprehend oral messages and identify the meaning of words, expressions and sentences in familiar context using paralinguistic features.',
  oralProduction:
    'Interact orally in communicative situations related to the learner’s immediate environment, daily concern and interests using simple words, expressions and sentences.',
  writtenComprehension:
    'Decode symbols, read simple messages of about 40 words and understand the meaning of words and sentences using reading basics and the decoding strategies.',
  writtenProduction:
    'Produce words using correct handwriting to fill in a form with specific details related to the learners’ immediate environment, daily concern and interests.',
};

export const PS4_CROSS_CURRICULAR = {
  intellectual:
    'Discover the relationship between context and sentence meaning; discover usage of sentences in oral interaction; demonstrate understanding of reading basics and features of correct cursive handwriting.',
  methodological:
    'Make use of context and paralinguistic clues; exploit linguistic repertoire to interact orally; employ reading basics and decoding strategies; implement the features of correct connected handwriting.',
  communicative:
    'React to verbal and non-verbal messages; select appropriate words and sentences to interact orally; communicate reading basics to peers; achieve readability through cursive handwriting.',
  personalAndSocial:
    'Collaborate with peers verbally and non-verbally; consider context when interacting; consider reading basics to achieve others’ understanding; value others’ writings.',
};

export const PS4_CORE_VALUES = {
  nationalIdentity: 'The learner is proud of being Algerian, Muslim, Arab and Amazigh.',
  nationalConscience: 'S/he respects her/his nation’s constant fundamental tenets.',
  citizenship: 'S/he demonstrates respect towards others and cooperative spirit in group games.',
  opennessToTheWorld:
    'S/he exchanges and communicates with friends from English-speaking countries (e-pals) to widen international horizons.',
};

export const PS4_21ST_CENTURY_SKILLS = [
  'Critical Thinking: Contrasting phoneme minimal pairs and categorizing nutritional/environmental data',
  'Collaboration: Competitive team relay races, word jumble games, and pair-work dialogue practice',
  'Creativity: Pictionary representations, drawing school maps, and creating e-pal ID badges',
  'Information Literacy: Transferring verbal and written facts accurately into structured forms and registers',
  'Media & Digital Literacy: Simulating e-pal profile messaging and international pen-pal exchange formats',
  'Self-Direction & Growth Mindset: Self-monitoring cursive handwriting alignment and peer constructive feedback',
];

export function getPS4CenturySkillsIntegration(
  sessionTitle: string,
  topic: string
): CenturySkillIntegration[] {
  return [
    {
      category: 'Critical Thinking',
      targetSkill: 'Phonemic Contrast Analysis & Category Sorting',
      classroomApplication: `Learners contrast minimal pairs (short vs long vowels, voiced vs voiceless consonants) and classify vocabulary (healthy food, school facilities) based on logical criteria.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Collaboration',
      targetSkill: 'Teamwork in Educational Games & Peer Scaffolding',
      classroomApplication: `Learners participate in cooperative Board Races, Word Jumble Relays, and Pictionary games, supporting lower-achieving peers within their assigned group pods.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Communication',
      targetSkill: 'Structured Dialogue Rehearsal & Substitution',
      classroomApplication: `Learners conduct pair interviews and scaffolded dialogue exchanges (T/T -> T/Ls -> Ls/T -> Ls/Ls), using appropriate voice projection and polite conversational openers.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Creativity',
      targetSkill: 'Visual Representation & Playful Problem Solving',
      classroomApplication: `Learners express meaning through quick drawings in Pictionary games and role-play doctor-patient or visitor-guide scenarios.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Information & Digital Literacy',
      targetSkill: 'Information Transfer to Forms & E-pal Formats',
      classroomApplication: `Learners scan short texts up to 40 words, extract relevant factual data (name, age, occupation, country), and populate structured profile forms in cursive script.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Social & Cross-Cultural',
      targetSkill: 'Global Awareness & Empathetic Peer Review',
      classroomApplication: `Learners explore diverse nationalities through international e-pal exchanges and exchange copybooks for supportive peer feedback on handwriting neatness.`,
      stageTarget: 'Assessment',
    },
  ];
}
