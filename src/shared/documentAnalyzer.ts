/**
 * DidactiPlan - Document Analysis Module
 * Extracts, organises, and references official Algerian Ministry of National Education documents:
 * - Didactic Guide 3PS & 4PS (Key Stage 1, 2023)
 * - Didactic Guide 5PS (Key Stage 3, 2024)
 * - Official Session Outlines (3PS, 4PS, 5PS)
 * - Official Listening Scripts & Reading Passages
 * - Monthly Distributions of October
 */

import { PrimaryLevel } from './lessonPlanSchema';

export interface OfficialDocumentReference {
  level: PrimaryLevel;
  documentTitle: string;
  yearOfPublication: string;
  issuingAuthority: string;
  keyPrinciples: string[];
  durationMinutes: number;
  availableSequencesCount: number;
}

export const OFFICIAL_DOCUMENT_REGISTRY: Record<PrimaryLevel, OfficialDocumentReference> = {
  '3PS': {
    level: '3PS',
    documentTitle: 'Didactic Guide of English - Key Stage 1 Primary Education (Year 3)',
    yearOfPublication: '2023',
    issuingAuthority: 'Ministry of National Education - The National Curriculum Council (CNP)',
    keyPrinciples: [
      'First contact with English in Algerian Primary Schools',
      'Oral comprehension and interaction prioritized over literacy',
      'Extensive use of songs, chants, TPR (Total Physical Response), and realia',
      'Phonemic awareness: isolating, blending, segmenting (vowel-consonant / CVC)',
      'Handwriting mechanics: print lowercase/uppercase letter families (anticlockwise, clockwise, i-family, u-family)',
      'No formal grammar rules; purely implicit formulaic chunks',
    ],
    durationMinutes: 60, // Foundation session length (45min instructional + 15min reinforcement/songs as per Foundation engine specs)
    availableSequencesCount: 6,
  },
  '4PS': {
    level: '4PS',
    documentTitle: 'Didactic Guide of English - Key Stage 1 Primary Education (Year 4)',
    yearOfPublication: '2023',
    issuingAuthority: 'Ministry of National Education - The National Curriculum Council (CNP)',
    keyPrinciples: [
      'Language development and reinforcement of 3PS basics',
      'Reading comprehension of texts up to 35-40 words',
      'Contrastive phonics instruction (/i/ vs /i:/, /ʃ/ vs /tʃ/, /ʊ/ vs /u:/, /θ/ vs /ð/)',
      'Connected handwriting (cursive style) and form completion (ID cards, family trees)',
      'Structured educational games (Board Race, Word Jumble Race, Pictionary)',
      'Pair work dialogues and communicative substitution',
    ],
    durationMinutes: 60,
    availableSequencesCount: 5,
  },
  '5PS': {
    level: '5PS',
    documentTitle: 'Didactic Guide of English - Key Stage 3 Primary Education (Year 5)',
    yearOfPublication: '2024',
    issuingAuthority: 'Ministry of National Education - The National Curriculum Council (CNP)',
    keyPrinciples: [
      'Consolidation of Key Stage 1 learning towards end-of-primary exit profile',
      'Initial problem-solving situation (I Get Ready) and final progress verification (I Check my Progress)',
      'Reading comprehension through skimming (gist) and scanning (specific data)',
      'Implicit grammar discovery through oral and written contexts',
      'Guided paragraph writing (10-20 words) from notes and structured forms',
      'Strict 45-minute lesson pacing with explicit exit ticket formative assessments',
    ],
    durationMinutes: 45,
    availableSequencesCount: 3,
  },
};

export class DocumentAnalyzer {
  public static getOfficialReference(level: PrimaryLevel): OfficialDocumentReference {
    return OFFICIAL_DOCUMENT_REGISTRY[level];
  }

  public static getOfficialPedagogySummary(level: PrimaryLevel): string {
    const doc = OFFICIAL_DOCUMENT_REGISTRY[level];
    return `Level ${doc.level}: ${doc.documentTitle} (${doc.yearOfPublication}), approved by ${doc.issuingAuthority}. Standard Duration: ${doc.durationMinutes} min.`;
  }
}
