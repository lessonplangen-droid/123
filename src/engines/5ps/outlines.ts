/**
 * DidactiPlan - ENGINE 3: 5PS (Consolidation Engine)
 * Official Session Outlines Registry with Enabling Sub-Objectives & 21st-Century Skills.
 * Source: Algerian Ministry of National Education Official Outline Document (PS5) & D.G. Pages 30–52.
 * STRICT TIMING: Exactly 45 minutes per session.
 */

import { ProcedureStage } from '../../shared/lessonPlanSchema';
import { PS5SessionData } from './curriculum';

export class PS5Outlines {
  public static buildSessionStages(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    switch (session.outlineType) {
      case 'session1_get_ready':
        return this.buildSession1GetReady(session);
      case 'session2_listen_interact':
        return this.buildSession2ListenInteract(session);
      case 'session3_listen_discover':
        return this.buildSession3ListenDiscover(session);
      case 'session4_read_understand':
        return this.buildSession4ReadUnderstand(session);
      case 'session5_read_discover':
        return this.buildSession5ReadDiscover(session);
      case 'session6_learn_enjoy':
        return this.buildSession6LearnEnjoy(session);
      case 'session7_learn_to_write':
        return this.buildSession7LearnToWrite(session);
      case 'session8_write':
        return this.buildSession8Write(session);
      case 'session8_check_progress':
        return this.buildSession8CheckProgress(session);
    }
  }

  // Session 01: I Get Ready (Initial Situation) - 45 min
  private static buildSession1GetReady(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Sequence Objective Sharing',
          subObjective: 'To present the sequence mission, reduce anxiety, and frame learning as an ongoing problem-solving journey.',
          teacherAction:
            'T greets learners warmly ("Welcome to our new English Sequence!"). Explains that today we explore what we already know and what exciting things we will learn.',
          studentAction:
            'Pupils listen attentively in a relaxed, encouraging atmosphere.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Metacognition & Positive Mindset',
          pedagogicalTip: 'Official Directive: Create a relaxing atmosphere. Tasks require skills learners do not possess yet.',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Task 1: Oral Comprehension / Listening to Initial Script',
          subObjective: 'To stimulate diagnostic listening and identify character relations through visual cues.',
          teacherAction:
            `T introduces the listening context, then reads the initial listening text aloud twice:\n"${session.authenticScript || ''}"\nInstructs: "Listen and tick the right answer / find the person."`,
          studentAction:
            'Pupils listen carefully and complete Task 1 on their initial situation worksheet.',
          interaction: 'T-Ls',
          timeMinutes: 10,
          varkt: 'V/A',
          centurySkill: 'Critical Listening & Visual Identification',
        },
        {
          stepNumber: '3',
          stepName: 'Task 2: Reading Decoding & Skimming/Scanning',
          subObjective: 'To diagnose baseline skimming for gist and scanning for explicit factual data.',
          teacherAction:
            `T displays short reading text:\n"${session.readingPassage || ''}"\nInstructs: "Read silently, then answer True/False and complete the factual form."`,
          studentAction:
            'Pupils read silently, perform skimming and scanning, and complete the form on the sheet.',
          interaction: 'Individual',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Information Literacy & Text Scanning',
        },
        {
          stepNumber: '4',
          stepName: 'Task 3: Written Production Challenge',
          subObjective: 'To identify initial writing mechanics gaps (word order, punctuation, spelling).',
          teacherAction:
            'T asks learners to read the form and attempt writing a short corresponding paragraph of 10-15 words.',
          studentAction:
            'Pupils write their best attempt in their worksheets without teacher assistance.',
          interaction: 'Individual',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Self-Direction & Written Expression',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '5',
          stepName: 'Portfolio Archiving & Reassurance',
          subObjective: 'To foster personal accountability and prepare baseline evidence for progress tracking.',
          teacherAction:
            'T collects worksheets and explains: "Keep this in your personal portfolio. In the last session (I Check my Progress), you will see how much you have grown!"',
          studentAction:
            'Pupils place answer sheets in personal portfolios with pride and curiosity for the upcoming sequence.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'T',
          centurySkill: 'Portfolio Organization & Goal Setting',
        },
        {
          stepNumber: '6',
          stepName: 'Exit Ticket (Oral Reflection)',
          subObjective: 'To verbalize initial perceptions and self-assess confidence levels.',
          teacherAction:
            'T asks: "What part did you find fun? What part are you excited to learn?"',
          studentAction:
            'Pupils express their thoughts spontaneously (even using L1 if needed).',
          interaction: 'T-S',
          timeMinutes: 4,
          varkt: 'A',
          centurySkill: 'Self-Awareness & Communication',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 02: I Listen & Interact (PS5) - 45 min
  private static buildSession2ListenInteract(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Sounds & Review Game',
          subObjective: 'To manipulate phonemes (segmenting, blending, adding, deleting) in topical words.',
          teacherAction:
            'T greets class. Conducts rapid 3-minute phonemic game: sounding key topical words, blending, rhyming, adding/deleting phonemes.',
          studentAction:
            'Pupils manipulate sounds orally, blend phonemes, and respond with enthusiasm.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Phonological Agility & Critical Thinking',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Lead in (Picture Talk) & Prediction (TPS)',
          subObjective: 'To formulate collaborative hypotheses through Think-Pair-Share based on visual illustrations.',
          teacherAction:
            'T displays scene pictures on board: "Look at the people. Who are they? Where are they? What is happening?" Prompts Think-Pair-Share.',
          studentAction:
            'Pupils think individually, discuss in pairs (TPS), and share predictions about the topic.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'V/A',
          centurySkill: 'Collaboration (TPS) & Creative Inference',
        },
        {
          stepNumber: '3',
          stepName: '1st & 2nd Listening (Check Prediction / Self & Whole Class FB)',
          subObjective: 'To verify prediction hypotheses and engage in whole-class consensus building.',
          teacherAction:
            `T reads the authentic script:\n"${session.authenticScript || ''}"\nAsks: "Who was right about the topic? Who said yes/no?"`,
          studentAction:
            'Pupils listen to verify anticipation. Confirm or correct predictions through whole-class feedback.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'A',
          centurySkill: 'Critical Listening & Active Verification',
        },
        {
          stepNumber: '4',
          stepName: '3rd & 4th Listening (Listening for Gist)',
          subObjective: 'To deduce the general idea (gist) without being distracted by unfamiliar lexis.',
          teacherAction:
            'T sets 1 Yes/No or 1 MCQ gist task on board. Reads script again with clear pace, facial expressions, and paralinguistic support.',
          studentAction:
            'Pupils listen to extract the general idea (gist) without getting bogged down in individual words, and complete the gist check.',
          interaction: 'Individual',
          timeMinutes: 8,
          varkt: 'A/R',
          centurySkill: 'Information Processing & Selective Attention',
          pedagogicalTip: 'Official Directive: Ts should avoid using theoretical words like "skim, scan, gist" with young learners.',
        },
        {
          stepNumber: '5',
          stepName: 'Language Extraction & Choral Repetition',
          subObjective: 'To internalize sentence rhythm, intonation contour, and word boundaries.',
          teacherAction:
            `T highlights the target oral chunks: "${session.targetGrammar}". Models natural sentence intonation.`,
          studentAction:
            'Pupils repeat in chorus, rows, and pairs, imitating natural rhythm and word boundaries.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'A',
          centurySkill: 'Verbal Fluency & Communication',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '6',
          stepName: 'Follow up: Personalization (Me, My World and the World)',
          subObjective: 'To transfer target communicative patterns to pupils’ immediate personal environments.',
          teacherAction:
            'T connects content to learners’ everyday lives: "Now tell your partner about your family or your hometown!"',
          studentAction:
            'Pupils interact in pairs, asking and answering using the new linguistic structure.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'A',
          centurySkill: 'Communication & Interpersonal Empathy',
        },
        {
          stepNumber: '7',
          stepName: 'Overall Feedback & Exit Ticket (Oral / Written)',
          subObjective: 'To evaluate personal mastery and express learning satisfaction using the 3-question exit ticket.',
          teacherAction:
            'T distributes Exit Tickets: 1. Today I learned about... 2. I need more help with... 3. Smiley rating.',
          studentAction:
            'Pupils complete their exit tickets or give oral feedback before leaving.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R/T',
          centurySkill: 'Metacognition & Self-Evaluation',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 03: I Listen & Discover (PS5) - 45 min
  private static buildSession3ListenDiscover(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Topical Phonics Warm-up',
          subObjective: 'To review spoken phonetic markers and prepare active articulatory habits.',
          teacherAction: 'T greets class and reviews sounds from previous listening passage.',
          studentAction: 'Pupils chant the target sounds with quick vocal drills.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Communication',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Presentation / Discovery in Oral Context',
          subObjective: 'To inductively discover grammar form, word order, and subject-verb agreement through oral questioning.',
          teacherAction:
            `T reminds learners of the dialogue from Session 2. Asks leading questions to direct attention to the target structure: "${session.targetGrammar}". Shows word boundaries using fingers.`,
          studentAction:
            'Pupils notice how the target structure works in real communicative speech without grammatical jargon.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'A/V',
          centurySkill: 'Inductive Reasoning & Critical Thinking',
          pedagogicalTip: 'Official Directive: Grammar is taught implicitly without recourse to abstract terminology.',
        },
        {
          stepNumber: '3',
          stepName: 'Mechanical Practice 01: Controlled Practice (Focus on Form)',
          subObjective: 'To automate syntax patterns through rising/falling intonation drills.',
          teacherAction:
            'T models the structure with exaggerated rising/falling intonation. Drills: whole class -> half class -> individuals.',
          studentAction:
            'Pupils repeat structure with accurate pronunciation and intonation, memorizing the sentence formula.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'A',
          centurySkill: 'Memory & Sentence Patterning',
        },
        {
          stepNumber: '4',
          stepName: 'Mechanical Practice 02: Guided Practice (Substitution Drill)',
          subObjective: 'To manipulate key lexical variables within the fixed sentence frame in pairs.',
          teacherAction:
            'T presents picture prompt and substitutes one key word. Prompts pairs to construct new lines.',
          studentAction:
            'Pupils produce the substituted sentence smoothly in pair exchanges.',
          interaction: 'S-S',
          timeMinutes: 12,
          varkt: 'V/A',
          centurySkill: 'Collaboration & Linguistic Flexibility',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '5',
          stepName: 'Communicative Practice (Personalization: Me, My World)',
          subObjective: 'To spontaneously apply target syntax in simulated real-life interview roles.',
          teacherAction:
            'T sets real-life role-play: learners interview their partner about their real relatives or preferred destinations.',
          studentAction:
            'Pupils role-play creatively and actively with their deskmates.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'A',
          centurySkill: 'Authentic Communication & Creativity',
        },
        {
          stepNumber: '6',
          stepName: 'Exit Ticket & Feedback Sandwich',
          subObjective: 'To consolidate feedback through positive reinforcement (Compliment, Correct, Compliment).',
          teacherAction:
            'T gives constructive feedback (Compliment, correct, compliment) and checks exit ticket understanding.',
          studentAction:
            'Pupils acknowledge feedback and note their progress.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A/R',
          centurySkill: 'Growth Mindset & Self-Regulation',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 04: I Read & Understand (PS5) - 45 min
  private static buildSession4ReadUnderstand(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Phonics Activation',
          subObjective: 'To activate phonics decoding readiness for unfamiliar words in the upcoming text.',
          teacherAction:
            `T activates prior knowledge with a quick review game sounding words containing ${session.phonicsOrSounds || session.phonicsOrLetters || 'target sounds'}.`,
          studentAction:
            'Pupils call out words and segment target sounds.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Phonological Recall',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Lead in (Picture Talk) & Prediction (TPS)',
          subObjective: 'To establish context and predict text narrative through collaborative discussion.',
          teacherAction:
            'T displays the picture related to the text. Encourages learners to express representations and predict the topic.',
          studentAction:
            'Pupils describe the image and predict what the reading text will discuss.',
          interaction: 'S-S',
          timeMinutes: 5,
          varkt: 'V',
          centurySkill: 'Collaboration & Predictive Inference',
        },
        {
          stepNumber: '3',
          stepName: '1st Reading (Silent) & Checking Prediction',
          subObjective: 'To read silently to verify initial contextual expectations.',
          teacherAction:
            `T displays reading text (approx. 40 words):\n"${session.readingPassage || ''}"\nInstructs: "Read silently and check your predictions."`,
          studentAction:
            'Pupils read silently, verifying their initial hypotheses.',
          interaction: 'Individual',
          timeMinutes: 5,
          varkt: 'R',
          centurySkill: 'Silent Reading Focus & Autonomy',
        },
        {
          stepNumber: '4',
          stepName: '2nd Reading (Decoding Aloud in Chunks)',
          subObjective: 'To read aloud with fluent prosody and chunking (phrases rather than isolated words).',
          teacherAction:
            'T models fluent oral reading with proper pauses and prosody. Calls on learners to read aloud in meaningful chunks.',
          studentAction:
            'Selected learners read aloud sentence by sentence, decoding unfamiliar words with teacher scaffolding.',
          interaction: 'T-S',
          timeMinutes: 8,
          varkt: 'R/A',
          centurySkill: 'Oral Reading Fluency',
          pedagogicalTip: 'Official Directive: Reading fluency technique focuses on chunking, not speed reading.',
        },
        {
          stepNumber: '5',
          stepName: '3rd Reading (Skimming for Gist)',
          subObjective: 'To apply skimming strategies to capture the overarching message of the text.',
          teacherAction:
            'T sets 1 True/False or MCQ task: "What is the general idea of the text?" Monitors peer assessment.',
          studentAction:
            'Pupils skim quickly for gist, complete the answer, and cross-check with partner.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'R',
          centurySkill: 'Critical Thinking (Gist Extraction)',
        },
        {
          stepNumber: '6',
          stepName: '4th Reading (Scanning for Specific Information)',
          subObjective: 'To scan lines rapidly to extract factual data into a structured chart or form.',
          teacherAction:
            'T sets a scanning task: Form / Chart / Diagram completion (finding specific names, numbers, or places).',
          studentAction:
            'Pupils scan lines to locate exact pieces of factual data and complete the chart.',
          interaction: 'Individual',
          timeMinutes: 6,
          varkt: 'R/T',
          centurySkill: 'Information Literacy & Data Retrieval',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '7',
          stepName: 'Follow up: Communicative Personalization',
          subObjective: 'To connect reading text themes to students’ real personal lives.',
          teacherAction:
            'T asks pupils to connect the reading topic to their own lives in an oral pair exchange.',
          studentAction:
            'Pupils share their own experiences and opinions orally.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'A',
          centurySkill: 'Communication & Self-Expression',
        },
        {
          stepNumber: '8',
          stepName: 'Exit Ticket',
          subObjective: 'To evaluate reading comprehension confidence and note areas needing support.',
          teacherAction: 'T collects exit ticket responses on the reading text.',
          studentAction: 'Pupils submit their exit slips.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R/T',
          centurySkill: 'Metacognition & Accountability',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 05: I Read & Discover (PS5) - 45 min
  private static buildSession5ReadDiscover(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Phonics Sounding Game',
          subObjective: 'To refresh target vocabulary spellings through an interactive board rally.',
          teacherAction: 'T reviews target words from yesterday’s reading text through a rapid spelling rally.',
          studentAction: 'Pupils sound out phonemes on mini-whiteboards.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A/T',
          centurySkill: 'Spelling Automaticity',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Presentation / Discovery in Written Context',
          subObjective: 'To discover word order rules (Subject + Verb + Object) using question prompt cards.',
          teacherAction:
            `T displays sentence from the reading text: "${session.targetGrammar}". Uses question cards (Who? What? Where? When?) to guide discovery of word order and subject-verb agreement.`,
          studentAction:
            'Pupils identify word order rules and subject-verb agreement interactively.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'V/R',
          centurySkill: 'Critical Thinking & Syntactic Discovery',
        },
        {
          stepNumber: '3',
          stepName: 'Mechanical Practice 01: Controlled Practice (Picture Prompt)',
          subObjective: 'To formulate syntactically accurate sentences from picture cues on MWBs.',
          teacherAction:
            'T presents picture prompts and guides learners to manipulate the written target structure on board and MWBs.',
          studentAction:
            'Pupils drill sentences on MWBs individually and in pairs.',
          interaction: 'Individual',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Sentence Patterning & Self-Correction',
        },
        {
          stepNumber: '4',
          stepName: 'Mechanical Practice 02: Guided Practice (Substitution / Gap Fill / Anagram)',
          subObjective: 'To solve sentence anagrams and make subject-verb agreement modifications.',
          teacherAction:
            'T sets sentence anagram or gap-fill task. Replaces subjects to enforce subject-verb agreement adjustments.',
          studentAction:
            'Pupils copy sentences, make required verb adjustments, and read them aloud.',
          interaction: 'S-S',
          timeMinutes: 12,
          varkt: 'R/T',
          centurySkill: 'Problem Solving & Grammatical Accuracy',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '5',
          stepName: 'Communicative Practice (Personalization)',
          subObjective: 'To write an authentic personalized sentence applying discovered syntax.',
          teacherAction:
            'T prompts pupils to write 1 personalized sentence about themselves using the target structure.',
          studentAction:
            'Pupils write on MWBs and display to partner.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'R/T',
          centurySkill: 'Creative Personalization',
        },
        {
          stepNumber: '6',
          stepName: 'Exit Ticket & Teacher Feedback',
          subObjective: 'To prevent mistake fossilization through real-time feedback.',
          teacherAction: 'T reviews MWBs, offers immediate feedback to prevent fossilization.',
          studentAction: 'Pupils correct any errors immediately.',
          interaction: 'T-S',
          timeMinutes: 4,
          varkt: 'V/R',
          centurySkill: 'Continuous Improvement',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 06: I Learn & Enjoy (PS5) - 45 min
  private static buildSession6LearnEnjoy(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Game Energizer',
          subObjective: 'To energize learners and explain the cooperative tournament rules.',
          teacherAction: 'T greets class and announces the 7-game language championship.',
          studentAction: 'Pupils form teams with high enthusiasm.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Social Enthusiasm',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Game 1 & 2: Spelling Suffixes & Word Snatch',
          subObjective: 'To recognize derivational suffixes (-er, -or, -ist, -ian) and compete in word snatch.',
          teacherAction:
            'T sets word formation game: pupils complete missing endings (-er, -or, -ist, -ian). Then conducts Word Snatch ("Got it!").',
          studentAction:
            'Pupils race to complete endings and snatch target vocabulary cards.',
          interaction: 'Group Work',
          timeMinutes: 8,
          varkt: 'V/K/T',
          centurySkill: 'Morphological Awareness & Speed',
        },
        {
          stepNumber: '3',
          stepName: 'Game 3 & 4: Dictation Race & Punctuation Slap the Board',
          subObjective: 'To transcribe short questions accurately in relay teams and identify punctuation symbols.',
          teacherAction:
            'T conducts Run & Dictate with short questions. Follows with Slap the Board for punctuation marks (., ?, !).',
          studentAction:
            'Teams run, dictate accurately, and slap correct punctuation cards on the board.',
          interaction: 'Group Work',
          timeMinutes: 12,
          varkt: 'V/K/A',
          centurySkill: 'Teamwork & Punctuation Literacy',
        },
        {
          stepNumber: '4',
          stepName: 'Game 5 & 6: Sentence Snake & Subject-Verb Memory Circle',
          subObjective: 'To insert word boundaries and maintain cumulative sentence memory.',
          teacherAction:
            'T presents unpunctuated sentence snakes and leads Memory Circle game reinforcing subject-verb agreement.',
          studentAction:
            'Learners insert spaces and full stops, then build cumulative sentences in circle formation.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'R/A/K',
          centurySkill: 'Memory Retention & Collaboration',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '5',
          stepName: 'Game 7: Rhyme Race / Snap! Wrap-up',
          subObjective: 'To match rhyming pairs and celebrate collective achievement.',
          teacherAction: 'T runs final quick-fire Snap! matching pair round.',
          studentAction: 'Pupils shout "Snap!" and claim matching cards.',
          interaction: 'S-S',
          timeMinutes: 6,
          varkt: 'V/A',
          centurySkill: 'Friendly Competition',
        },
        {
          stepNumber: '6',
          stepName: 'Exit Ticket',
          subObjective: 'To self-assess game learning and identify vocabulary gaps.',
          teacherAction: 'T collects self-evaluation feedback on games.',
          studentAction: 'Pupils submit exit tickets.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R',
          centurySkill: 'Self-Reflection',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 07: I Learn to Write (PS5) - 45 min
  private static buildSession7LearnToWrite(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Mechanics Reminder Game',
          subObjective: 'To review essential writing mechanics (capital letters, commas, full stops).',
          teacherAction: 'T conducts rapid game reminding learners of capitalization and full stops.',
          studentAction: 'Pupils spot missing capital letters on sample board sentences.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V/R',
          centurySkill: 'Critical Proofreading',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Pre-write: Presentation of Form 1 & Corresponding Message',
          subObjective: 'To deconstruct how discrete notes transform into connected narrative prose.',
          teacherAction:
            `T presents a completed factual form on the board and the paragraph derived from it. Explains: "Today we learn how to turn notes into full sentences."`,
          studentAction:
            'Pupils compare the notes with the written sentences, noticing how words connect.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V/R',
          centurySkill: 'Structural Analysis',
        },
        {
          stepNumber: '3',
          stepName: 'Write Phase 1: Modeling for Imitation (Note -> Sentence)',
          subObjective: 'To model the transformation of note 1 into a grammatically accurate sentence.',
          teacherAction:
            `T presents another form (${session.writingFormPrompt || 'Form 2'}). Elicits answers for note 1. Writes sentence on board, highlighting capital letter, spelling, and full stop.`,
          studentAction:
            'Pupils answer orally, observe teacher modeling, and identify key mechanics.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'V/R',
          centurySkill: 'Linguistic Modeling & Attention to Detail',
        },
        {
          stepNumber: '4',
          stepName: 'Write Phase 2: Drafting Notes into Sentences in Groups',
          subObjective: 'To negotiate sentence formulation cooperatively in small peer groups.',
          teacherAction:
            'T assigns group drafting: pairs formulate sentence orally, then groups write sentences discussing word order and SV agreement. T monitors and guides.',
          studentAction:
            'Learners collaborate in groups (cooperative learning), negotiating syntax and writing sentences.',
          interaction: 'Group Work',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Collaboration & Collective Authorship',
          pedagogicalTip: 'Official Directive: Teacher begins "fading", gradually allowing learners to work independently.',
        },
        {
          stepNumber: '5',
          stepName: 'Write Phase 3: Linking Sentences & Group Reviewing/Editing',
          subObjective: 'To assemble separate sentences into a cohesive 10-word paragraph and edit mechanics.',
          teacherAction:
            'T guides groups to link their individual sentences into a cohesive 10-word paragraph and proofread mechanics.',
          studentAction:
            'Groups assemble sentences into paragraph form and proofread for punctuation and spelling.',
          interaction: 'Group Work',
          timeMinutes: 6,
          varkt: 'R/T',
          centurySkill: 'Coherence & Group Editing',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '6',
          stepName: 'Post-write: Gallery Walk & Peer Publishing',
          subObjective: 'To publish student work and engage in constructive peer evaluation.',
          teacherAction: 'T organizes a gallery walk where each group displays their written paragraph on the board/wall.',
          studentAction: 'Pupils read other groups’ work and give positive comments.',
          interaction: 'Whole Class',
          timeMinutes: 6,
          varkt: 'V/R',
          centurySkill: 'Communication & Peer Recognition',
        },
        {
          stepNumber: '7',
          stepName: 'Exit Ticket',
          subObjective: 'To reflect on writing confidence and group collaboration effectiveness.',
          teacherAction: 'T collects exit ticket reflection.',
          studentAction: 'Pupils record what was easy and what was challenging.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R',
          centurySkill: 'Metacognition',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 08: I Write (PS5) - 45 min
  private static buildSession8Write(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Writing Mechanics Warm-up',
          subObjective: 'To rehearse the 4 writing mechanics checklist prior to solo writing.',
          teacherAction: 'T reminds learners of the 4 writing mechanics: capitalization, punctuation, spelling, word order.',
          studentAction: 'Pupils recite the mechanics checklist.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Self-Monitoring & Preparation',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Pre-write: Task Setup & Form Verification',
          subObjective: 'To verify full comprehension of the individual writing prompt form.',
          teacherAction:
            `T displays form prompt on board:\n"${session.writingFormPrompt || 'Individual Form'}"\nEnsures all learners understand components interactively.`,
          studentAction:
            'Pupils examine the form and ask clarifying questions.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V',
          centurySkill: 'Information Decoding',
        },
        {
          stepNumber: '3',
          stepName: 'Write Phase 1: Drafting Solo Work (Notes into Paragraph)',
          subObjective: 'To independently author a 10-20 word paragraph from notes without teacher assistance.',
          teacherAction:
            'T monitors silently as learners independently transform notes into sentences and assemble a 10-20 word paragraph. Gathers common errors on a notepad.',
          studentAction:
            'Pupils write individually without teacher intervention, applying their resources.',
          interaction: 'Individual',
          timeMinutes: 12,
          varkt: 'R/T',
          centurySkill: 'Autonomous Production & Initiative',
        },
        {
          stepNumber: '4',
          stepName: 'Write Phase 2 & 3: Proofreading & Peer Assessment on WB',
          subObjective: 'To critically analyze anonymous writing samples and supply constructive corrections.',
          teacherAction:
            'T writes gathered common errors on the board anonymously. Invites pupils to highlight strengths and identify corrections orally.',
          studentAction:
            'Pupils identify the mistakes on the board and provide correct spellings/word orders.',
          interaction: 'Whole Class',
          timeMinutes: 8,
          varkt: 'V/R',
          centurySkill: 'Critical Thinking & Constructive Feedback',
        },
        {
          stepNumber: '5',
          stepName: 'Write Phase 4: Reviewing and Editing Final Product',
          subObjective: 'To edit and polish personal writing based on whole-class error resolution.',
          teacherAction:
            'T instructs learners to use corrected board references to edit and finalize their own paragraphs in copybooks.',
          studentAction:
            'Pupils review and produce clean final copy.',
          interaction: 'Individual',
          timeMinutes: 5,
          varkt: 'R/T',
          centurySkill: 'Quality Orientation & Craftsmanship',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '6',
          stepName: 'Post-write: Loud Reading & Peer Appreciation',
          subObjective: 'To celebrate individual voice through public reading and peer thumbs-up validation.',
          teacherAction:
            'T invites volunteers to read their paragraphs aloud. Peers express appreciation using smiley cards and thumbs up.',
          studentAction:
            'Pupils read proudly and celebrate each other’s achievements.',
          interaction: 'T-S',
          timeMinutes: 6,
          varkt: 'A',
          centurySkill: 'Communication & Peer Validation',
        },
        {
          stepNumber: '7',
          stepName: 'Exit Ticket (Reflecting on HOW they wrote)',
          subObjective: 'To articulate problem-solving strategies used during writing (metacognition).',
          teacherAction:
            'T prompts exit ticket: "Verbalize what you did and HOW you solved difficulties (even in L1)."',
          studentAction:
            'Pupils submit written or oral reflection.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R',
          centurySkill: 'Metacognitive Reflection',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 08: I Check my Progress (End of Section 2) - 45 min
  private static buildSession8CheckProgress(session: PS5SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 5,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming & Retrieval of Portfolio Initial Situations',
          subObjective: 'To benchmark personal starting points against end-of-sequence goals.',
          teacherAction:
            'T welcomes learners and asks them to take out their initial situation answer sheets from their personal portfolios.',
          studentAction:
            'Pupils retrieve their original sheets and look at what they wrote at the start of the sequence.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'T',
          centurySkill: 'Self-Awareness & Growth Mindset',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 30,
      steps: [
        {
          stepNumber: '2',
          stepName: 'Re-administering Listening Gist Task',
          subObjective: 'To measure oral comprehension gains using terminal listening rubrics.',
          teacherAction:
            'T reads the official listening script once more. Instructs learners to do the listening task with their newly acquired resources.',
          studentAction:
            'Pupils listen and answer the questions with confidence.',
          interaction: 'Individual',
          timeMinutes: 8,
          varkt: 'A/R',
          centurySkill: 'Critical Listening Assessment',
        },
        {
          stepNumber: '3',
          stepName: 'Re-administering Reading Comprehension (Skimming & Scanning)',
          subObjective: 'To measure progress in skimming for gist and scanning for chart completion.',
          teacherAction:
            'T guides silent reading and completion of the scanning chart.',
          studentAction:
            'Pupils complete the comprehension tasks accurately.',
          interaction: 'Individual',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Reading Comprehension Mastery',
        },
        {
          stepNumber: '4',
          stepName: 'Re-administering Written Production (Paragraph Writing)',
          subObjective: 'To verify attainment of the 20-word terminal paragraph writing target.',
          teacherAction:
            'T instructs learners to rewrite the form into a complete paragraph using writing mechanics.',
          studentAction:
            'Pupils write full, well-structured sentences with proper punctuation.',
          interaction: 'Individual',
          timeMinutes: 12,
          varkt: 'R/T',
          centurySkill: 'Written Communication Mastery',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '5',
          stepName: 'Collection & Ability-Group Analysis',
          subObjective: 'To diagnose learner performance into fast, average, and slow remediation cohorts.',
          teacherAction:
            'T collects answer sheets for diagnostic scoring into three ability tiers: fast, average, and slow learners, preparing targeted pause remediation.',
          studentAction:
            'Pupils compare their new work to the initial attempt and celebrate noticeable progress.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V',
          centurySkill: 'Progress Evaluation & Goal Realization',
          pedagogicalTip: 'Official Directive: Categorize areas for improvement to be carried out during the 2-hour pauses.',
        },
        {
          stepNumber: '6',
          stepName: 'Terminal Sequence Exit Ticket',
          subObjective: 'To document sequence completion and celebrate achievement across all 4 domains.',
          teacherAction: 'T administers sequence mastery exit ticket.',
          studentAction: 'Pupils complete final reflection.',
          interaction: 'Individual',
          timeMinutes: 4,
          varkt: 'R',
          centurySkill: 'Metacognitive Closure',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }
}
