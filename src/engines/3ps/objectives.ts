/**
 * DidactiPlan - ENGINE 1: 3PS (Foundation Engine)
 * Authoritative Objectives, Competencies and Values Registry.
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide 3PS (2023).
 */

import { CenturySkillIntegration } from '../../shared/lessonPlanSchema';

export const PS3_GLOBAL_COMPETENCE =
  'Interact orally, comprehend oral messages and identify the meaning of words, decode symbols, read simple messages and write letters, words and simple sentences.';

export const PS3_TARGET_COMPETENCIES = {
  oralComprehension:
    'Comprehend oral messages and identify the meaning of words in familiar context using paralinguistic features.',
  oralProduction:
    'Interact orally in communicative situations related to the learner’s daily concern and interests using simple words and expressions.',
  writtenComprehension:
    'Decode symbols, read simple messages of about 30 words and understand the meaning of words and structures using graphophonic knowledge and visuals.',
  writtenProduction:
    'Write letters, words and simple sentences using correct handwriting and punctuation.',
};

export const PS3_CROSS_CURRICULAR = {
  intellectual:
    'Discover the relationship between the context, paralinguistic features and the meaning of words; discover the importance of chunks in oral interaction; demonstrate understanding of decoding symbols and features of writing.',
  methodological:
    'Make use of context and paralinguistic features; exploit linguistic repertoire to interact orally; employ strategies of decoding symbols; implement the features of writing letters appropriately.',
  communicative:
    'React to verbal and non-verbal messages to show understanding; select appropriate words and chunks to interact orally; communicate decoding strategies to peers; achieve readability in writing.',
  personalAndSocial:
    'Respond to oral messages; consider speech acts when interacting; consider strategies of decoding to achieve others’ understanding; value others’ writings.',
};

export const PS3_CORE_VALUES = {
  nationalIdentity: 'The learner is proud of being Algerian, Muslim, Arab and Amazigh.',
  nationalConscience: 'S/he respects her/his nation’s constant fundamental tenets.',
  citizenship: 'S/he demonstrates respect towards others and cooperative spirit in class.',
  opennessToTheWorld:
    'S/he exchanges and communicates with friends from English-speaking countries to widen her/his friendship.',
};

export const PS3_21ST_CENTURY_SKILLS = [
  'Communication: Active listening, turn-taking, and mimicking native speech models',
  'Collaboration: Whole-class chants, pair-work role-plays, and cooperative games',
  'Creativity: Drawing representations, miming feelings, and imaginative play',
  'Critical Thinking: Categorizing objects, identifying phoneme rhymes and letter patterns',
  'Information & Visual Literacy: Interpreting flashcards and decoding sound-grapheme correspondences',
  'Social & Cultural Awareness: Expressing greetings, politeness routines, and empathy',
];

export function getPS3CenturySkillsIntegration(
  sessionTitle: string,
  topic: string
): CenturySkillIntegration[] {
  return [
    {
      category: 'Communication',
      targetSkill: 'Oral Interaction & Active Listening',
      classroomApplication: `Learners practice active listening to native dialogue models and express key formulaic chunks related to ${topic} during choral and individual repetition.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Collaboration',
      targetSkill: 'Peer Dialogue & Choral Chanting',
      classroomApplication: `Learners synchronize voices during songs and collaborate in pairs (T/Ls, Ls/T, Ls/Ls) to perform role-play exchanges and games.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Critical Thinking',
      targetSkill: 'Phonemic Segmentation & Visual Deduction',
      classroomApplication: `Learners isolate initial sounds, deduce missing items in the "Missing Card" game, and map sounds to letter families.`,
      stageTarget: 'Warm-up',
    },
    {
      category: 'Creativity',
      targetSkill: 'Kinesthetic Expression & Multisensory Tracing',
      classroomApplication: `Learners enact Total Physical Response (TPR) gestures, trace letter strokes in air/desks/sand, and personalize role-play substitutions.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Information & Digital Literacy',
      targetSkill: 'Visual Literacy & Decoding Strategies',
      classroomApplication: `Learners decode visual flashcard cues, connect iconography to spoken lexis, and follow left-to-right text orientation.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Social & Cross-Cultural',
      targetSkill: 'Classroom Etiquette & Politeness Routines',
      classroomApplication: `Learners demonstrate respect during peer speaking turns and apply English greeting and thanking conventions.`,
      stageTarget: 'Assessment',
    },
  ];
}
