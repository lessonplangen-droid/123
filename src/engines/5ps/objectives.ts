/**
 * DidactiPlan - ENGINE 3: 5PS (Consolidation Engine)
 * Authoritative Objectives, Competencies and Values Registry.
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide 5PS (2024).
 */

import { CenturySkillIntegration } from '../../shared/lessonPlanSchema';

export const PS5_GLOBAL_COMPETENCE =
  'Interpret oral messages and interact orally, decode a short simple message to understand its meaning, and produce a very short written message.';

export const PS5_TARGET_COMPETENCIES = {
  oralComprehension:
    'Interpret oral messages in communicative situations related to the learner’s immediate environment, daily concern and interests using paralinguistic features.',
  oralProduction:
    'Interact orally in communicative situations related to the learner’s immediate environment, daily concern and interests using familiar words, expressions, simple sentences and paralinguistic features.',
  writtenComprehension:
    'Decode a short simple message of about 40 words and understand its meaning using reading skills (skimming for gist and scanning for specific information).',
  writtenProduction:
    'Transfer notes into a message of about 20 words related to the learner’s immediate environment, daily concern and interests using writing mechanics.',
};

export const PS5_CROSS_CURRICULAR = {
  intellectual:
    'Demonstrate understanding of listening skills; discover usage of words and sentences in oral interaction; demonstrate understanding of reading skills (skimming/scanning); demonstrate understanding of writing mechanics and relevant information to write a message.',
  methodological:
    'Make use of context, paralinguistic features and listening skills to comprehend short messages; exploit linguistic repertoire to interact orally; employ reading skills to understand short simple texts; implement writing mechanics to produce a message.',
  communicative:
    'React to verbal and non-verbal messages to show understanding; select appropriate words, expressions and sentences to interact orally; communicate reading skills to peers; communicate writing mechanics to peers.',
  personalAndSocial:
    'Collaborate with peers verbally and non-verbally to comprehend oral messages; consider context when interacting orally; share understanding with others using reading skills; publish one’s production.',
};

export const PS5_CORE_VALUES = {
  nationalIdentity:
    'The learner is proud of being Algerian, Muslim, Arab and Amazigh, celebrating cultural diversity and historic heritage (e.g. Tipaza, Djurdjura, Ghardaia, Oran).',
  nationalConscience: 'S/he respects her/his nation’s constant fundamental tenets.',
  citizenship: 'S/he demonstrates respect towards others and public amenities.',
  opennessToTheWorld:
    'S/he exchanges and communicates with friends from English-speaking countries (e-pals) through international pen-pal discourse.',
};

export const PS5_21ST_CENTURY_SKILLS = [
  'Critical Thinking: Skimming for general gist, scanning for specific data, and analyzing word order/syntax',
  'Collaboration: Think-Pair-Share routines, cooperative paragraph editing, and peer assessment',
  'Autonomy & Self-Regulation: Proofreading individual writing and completing end-of-lesson exit tickets',
  'Digital & Global Literacy: Understanding international e-pal communications, maps, and travel scheduling',
  'Communication: Fluency-oriented reading in chunks, oral inquiry, and public presentation',
  'Creativity: Personalizing dialogues (Me, My World and the World) and designing travel/holiday brochures',
];

export function getPS5CenturySkillsIntegration(
  sessionTitle: string,
  topic: string
): CenturySkillIntegration[] {
  return [
    {
      category: 'Critical Thinking',
      targetSkill: 'Skimming for Gist, Scanning & Inductive Grammar Discovery',
      classroomApplication: `Learners distinguish general main ideas from specific details (40-word texts), analyze sentence word order with question cards (Who? What? Where?), and deduce grammar rules implicitly.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Collaboration',
      targetSkill: 'Think-Pair-Share (TPS) & Cooperative Writing Groups',
      classroomApplication: `Learners formulate initial predictions using TPS, negotiate sentence drafting in cooperative groups, and assemble collective paragraphs.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Communication',
      targetSkill: 'Fluency in Chunks & Contextual Personalization',
      classroomApplication: `Learners read aloud in meaningful grammatical chunks with prosody and personalize target language during "Me, My World and the World" communicative tasks.`,
      stageTarget: 'Assessment',
    },
    {
      category: 'Information & Digital Literacy',
      targetSkill: 'Data Synthesis & Note-to-Paragraph Transformation',
      classroomApplication: `Learners synthesize factual data from charts, maps, and forms into a cohesive 10-20 word paragraph applying capitalization, punctuation, and subject-verb agreement.`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Social & Cross-Cultural',
      targetSkill: 'National Heritage & Civic Navigation',
      classroomApplication: `Learners celebrate Algerian historic sites and wilayas (Tipaza, Oran, Ghardaia) and practice polite civic navigation requests ("Excuse me, can you show me the way, please?").`,
      stageTarget: 'Install Resources',
    },
    {
      category: 'Creativity',
      targetSkill: 'Formative Exit Ticket Metacognition & Self-Direction',
      classroomApplication: `Learners reflect on their own learning process using the 3-question Exit Ticket ("Today I learned... / I need help with... / How do I feel?") to develop metacognitive autonomy.`,
      stageTarget: 'Assessment',
    },
  ];
}
