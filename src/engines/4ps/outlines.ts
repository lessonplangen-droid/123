/**
 * DidactiPlan - ENGINE 2: 4PS (Development Engine)
 * Official Session Outlines Registry with Enabling Sub-Objectives & 21st-Century Skills.
 * Source: Algerian Ministry of National Education Official Outline Document (PS4).
 */

import { ProcedureStage } from '../../shared/lessonPlanSchema';
import { PS4SessionData } from './curriculum';

export class PS4Outlines {
  public static buildSessionStages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    switch (session.outlineType) {
      case 'session1_listen_repeat':
        return this.buildSession1Stages(session);
      case 'session2_read_discover':
        return this.buildSession2Stages(session);
      case 'session3_read_enjoy':
        return this.buildSession3Stages(session);
      case 'session4_read_write':
        return this.buildSession4Stages(session);
      case 'session5_play_roles':
        return this.buildSession5Stages(session);
    }
  }

  // Session 01: I Listen and Repeat (PS4) - 60 min
  private static buildSession1Stages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Song & Sounds',
          subObjective: 'To refresh phonetic memory and establish active auditory focus through musical rhythm.',
          teacherAction:
            'T greets pupils with energetic routine ("Good morning, Grade 4!"). Sings the Alphabet & Phonics Song reviewing complex digraphs.',
          studentAction:
            'Pupils greet T in chorus, sing along, and call out corresponding letter sounds.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Communication & Rhythm',
        },
        {
          stepNumber: '2',
          stepName: 'Date (Telling, spelling and writing down)',
          subObjective: 'To consolidate calendar literacy and cursive stroke recognition on four-line rulings.',
          teacherAction:
            'T asks pupil to state today’s full date. Writes it in fluent connected cursive on the board: "Monday, October 28th, 2026".',
          studentAction:
            'Pupils read the date, identify capital letters, and trace the cursive loops with index fingers.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/R',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To reactivate acquired lexis through inductive visual guessing.',
          teacherAction:
            'T plays "Quick Draw Review": sketches a clue on the board; pupils guess the lexical item from previous unit.',
          studentAction:
            'Pupils observe the progressive sketch and shout the English term as soon as recognized.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V',
          centurySkill: 'Critical Thinking & Inference',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 40,
      steps: [
        {
          stepNumber: '4',
          stepName: 'I Sing & Have Fun: Lead in (Picture Talk)',
          subObjective: 'To stimulate contextual engagement and elicit thematic schema using visual discourse.',
          teacherAction:
            `T displays scene poster representing ${session.targetLexis[0] || 'the theme'}. Asks open-ended questions: "Who is speaking? Where are they?"`,
          studentAction:
            'Pupils observe the context, identify characters, and share observations.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V',
          centurySkill: 'Visual & Media Literacy',
        },
        {
          stepNumber: '5',
          stepName: 'I Sing & Have Fun: Listening & Chanting',
          subObjective: 'To develop prosodic fluency and auditory retention of key sentence structures.',
          teacherAction:
            'T plays the thematic rhyme, clapping to the rhythm and highlighting sentence stress.',
          studentAction:
            'Pupils chant along, tapping their desks rhythmically and repeating key lexical chunks.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'A/K',
          centurySkill: 'Collaboration & Musical Creativity',
        },
        {
          stepNumber: '6',
          stepName: 'I Listen & Repeat: Lead in & Prediction',
          subObjective: 'To train hypothesis formation regarding dialogue content from authentic situational art.',
          teacherAction:
            'T reveals the authentic dialogue illustration and prompts: "What does Karim want to tell his parents? Make a guess!"',
          studentAction:
            'Pupils predict topic and characters using paralinguistic and visual cues.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V/A',
          centurySkill: 'Critical Thinking & Predictive Logic',
        },
        {
          stepNumber: '7',
          stepName: 'Authentic Listening Passage (Script Delivery)',
          subObjective: 'To comprehend authentic spoken English and verify hypotheses without written interference.',
          teacherAction:
            `T delivers the official 4PS listening script with expressive vocal inflections:\n"${session.authenticScript || ''}"`,
          studentAction:
            'Pupils listen attentively, verifying their predictions and noticing natural conversational cadence.',
          interaction: 'T-Ls',
          timeMinutes: 7,
          varkt: 'A',
          centurySkill: 'Active Listening & Comprehension',
          pedagogicalTip: 'Official Directive: NO written form is allowed during the listening comprehension phase.',
        },
        {
          stepNumber: '8',
          stepName: 'Target Lexis in Context & Repetition Drills',
          subObjective: 'To achieve phonetic precision in compound phrases through varied repetition patterns.',
          teacherAction:
            `T extracts target vocabulary: ${session.targetLexis.slice(0, 5).join(', ')}. Conducts chain drilling across rows.`,
          studentAction:
            'Pupils repeat individually and in small clusters, ensuring accurate pronunciation and sentence melody.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'A',
          centurySkill: 'Communication & Articulation',
        },
        {
          stepNumber: '9',
          stepName: 'Total Physical Response (TPR) Extension',
          subObjective: 'To reinforce conceptual classification through kinesthetic movement triggers.',
          teacherAction:
            'T instructs: "If I say a nationality, stand up! If I say a country, sit down!" (or thematic action equivalent).',
          studentAction:
            'Pupils listen sharply and react physically, reinforcing semantic categorization through bodily kinesthetics.',
          interaction: 'Whole Class',
          timeMinutes: 5,
          varkt: 'K',
          centurySkill: 'Kinesthetic Reflexes & Categorization',
        },
        {
          stepNumber: '10',
          stepName: 'Phonemic Awareness (Isolating, Segmenting, Blending)',
          subObjective: 'To manipulate consonant clusters and vowel contrasts at syllable boundaries.',
          teacherAction:
            `T leads auditory sound manipulation focusing on ${session.phonicsOrLetters || session.phonicsOrSounds || 'target sounds'}. Isolates initial and medial phonemes.`,
          studentAction:
            'Pupils isolate sounds, clap syllable breaks, and blend target segments into words.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A/K',
          centurySkill: 'Critical Thinking (Phonics Analysis)',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '11',
          stepName: 'Assessment Step 1: Missing Card / Fast Recognition Game',
          subObjective: 'To evaluate vocabulary retention and prompt quick phrase construction.',
          teacherAction:
            'T removes 1 flashcard while pupils close their eyes, then tests oral recall of the exact term.',
          studentAction:
            'Pupils spot the missing item and utter the complete target phrase: "It is the (word)!"',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V/A',
          centurySkill: 'Memory & Rapid Response',
        },
        {
          stepNumber: '12',
          stepName: 'Assessment Step 2: TPR Check & Peer Verification',
          subObjective: 'To verify receptive understanding and encourage peer affirmative signaling.',
          teacherAction:
            'T gives prompt commands to random pairs; peers act as inspectors, holding up green/red cards.',
          studentAction:
            'Pairs execute the instruction; class confirms accuracy enthusiastically.',
          interaction: 'S-S',
          timeMinutes: 5,
          varkt: 'K',
          centurySkill: 'Peer Evaluation & Social Collaboration',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 02: I Read and Discover (PS4) - 60 min
  private static buildSession2Stages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Song & Phonics',
          subObjective: 'To tune auditory discrimination for contrastive phonetic pairs.',
          teacherAction: 'T greets class and leads singing of the Contrastive Phonics Song.',
          studentAction: 'Pupils sing and articulate vowel length differences with hand stretches.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A/K',
          centurySkill: 'Communication',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To reinforce calendar spelling and ordinal numbers.',
          teacherAction: 'T writes date in cursive on the blackboard.',
          studentAction: 'Pupils read aloud with proper intonation.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/R',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To discriminate minimal pair sounds in spoken speech.',
          teacherAction: 'T presents minimal pairs on flashcards: asks pupils to identify whether sounds are same or different.',
          studentAction: 'Pupils listen and indicate "Same" or "Different" with hand signals.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'A',
          centurySkill: 'Critical Thinking & Auditory Discrimination',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 40,
      steps: [
        {
          stepNumber: '4',
          stepName: 'Lead in (Picture Talk & Prediction)',
          subObjective: 'To activate reading schema and deduce text topic through visual inspection.',
          teacherAction:
            'T displays illustrations and target reading sentence on the board. Encourages prediction from context clues.',
          studentAction:
            'Pupils examine the image, formulate expectations about what the short text will describe.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'V/R',
          centurySkill: 'Visual Literacy & Inference',
        },
        {
          stepNumber: '5',
          stepName: 'Loud Reading (Model & Pointing)',
          subObjective: 'To model prosodic phrasing, expressive pauses, and text decoding up to 35-40 words.',
          teacherAction:
            `T reads the short passage (approx. 30 words) aloud while pointing at each word in script: "${session.readingPassage || session.targetGrammar}".`,
          studentAction:
            'Pupils follow silently, noticing decoding strategies, sentence boundaries, and punctuation pauses.',
          interaction: 'T-Ls',
          timeMinutes: 10,
          varkt: 'V/A/R',
          centurySkill: 'Reading Fluency & Comprehension',
          pedagogicalTip: 'Official Directive: Ts MUST point at each word they read and emphasize "the present meaning".',
        },
        {
          stepNumber: '6',
          stepName: 'Decoding Target Sounds / Minimal Pairs Contrast',
          subObjective: 'To analyze acoustic and articulatory differences between confusing phoneme pairs.',
          teacherAction:
            `T highlights the target sound contrast: ${session.phonicsOrLetters || session.phonicsOrSounds || 'target sounds'}. Demonstrates mouth position and vocal cord vibration.`,
          studentAction:
            'Pupils place fingertips on throat or in front of mouth to feel airflow and voicing contrasts.',
          interaction: 'T-Ls',
          timeMinutes: 12,
          varkt: 'A/K/T',
          centurySkill: 'Scientific Inquiry & Metalinguistic Awareness',
        },
        {
          stepNumber: '7',
          stepName: 'Decoding Practice (Word Sorting in Pairs)',
          subObjective: 'To collaborate in sorting words into phonetic categories using decoding strategies.',
          teacherAction:
            'T distributes word cards for classification into two sound baskets (e.g. Basket A vs Basket B).',
          studentAction:
            'Pupils read cards in pairs, sound out the vowels/consonants, and place them into the correct phonetic basket.',
          interaction: 'S-S',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Collaboration & Classification Logic',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '8',
          stepName: 'Assessment Step 1: Loud Reading / Sentence (Think-Pair-Share)',
          subObjective: 'To demonstrate expressive sentence reading and partner verification.',
          teacherAction:
            'T invites pupil pairs to read a target sentence aloud with accurate prosody and correct sound articulation.',
          studentAction:
            'Pairs read cooperatively: one reads the subject, the other completes the predicate, then switch.',
          interaction: 'S-S',
          timeMinutes: 5,
          varkt: 'R/A',
          centurySkill: 'Collaboration & Peer Coaching',
        },
        {
          stepNumber: '9',
          stepName: 'Assessment Step 2: Individual Sound Match Verification',
          subObjective: 'To independently verify sound-to-grapheme correspondences on the board.',
          teacherAction:
            'T writes 3 words with missing phonemes on board. Calls on learners to supply the missing sound.',
          studentAction:
            'Selected learners complete the words on the board, class validates with silent clapping.',
          interaction: 'T-S',
          timeMinutes: 5,
          varkt: 'V/R',
          centurySkill: 'Individual Accountability',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 03: I Read and Enjoy (PS4) - 60 min (Educational Games)
  private static buildSession3Stages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Song & Sounds',
          subObjective: 'To foster team camaraderie and high morale for cooperative gameplay.',
          teacherAction: 'T greets class and reviews game cheers and team chants.',
          studentAction: 'Pupils respond with team spirit and enthusiasm.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A',
          centurySkill: 'Social & Emotional Learning',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To consolidate date conventions in cursive.',
          teacherAction: 'T writes the date, noting ordinal suffix in cursive.',
          studentAction: 'Pupils chant the date together.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/A',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To warm up cognitive processing speed through rapid word recognition.',
          teacherAction: 'T conducts 3-minute warm-up rally testing quick word recognition.',
          studentAction: 'Pupils raise team colored flags to volunteer answers.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V',
          centurySkill: 'Speed & Cognitive Agility',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 40,
      steps: [
        {
          stepNumber: '4',
          stepName: 'Groups Formation & Classroom Arrangement',
          subObjective: 'To establish heterogeneous cooperative pods and assign team roles.',
          teacherAction:
            'T organizes the classroom into 4 balanced cooperative teams. Explains scoring rules and sportsmanship expectations.',
          studentAction:
            'Pupils arrange desks into pod clusters and select team captains with smiles.',
          interaction: 'Whole Class',
          timeMinutes: 4,
          varkt: 'V/K',
          centurySkill: 'Leadership & Team Organization',
          pedagogicalTip: 'Official Directive: Give special care to low-achieving learners inside cooperative teams.',
        },
        {
          stepNumber: '5',
          stepName: 'Introduction of Tasks & Friendly Competition Rules',
          subObjective: 'To clarify rule adherence and fair-play values before timed challenges.',
          teacherAction:
            'T models the gameplay steps and demonstrates an example before starting the timers.',
          studentAction:
            'Pupils watch the demonstration, clarifying questions before the game begins.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Procedural Clarity & Fairness',
        },
        {
          stepNumber: '6',
          stepName: 'Game 01: Dealing with Letters (Alphabet Jumble)',
          subObjective: 'To collaboratively unscramble letters and reconstruct target vocabulary.',
          teacherAction:
            'T gives each team scrambled letter envelopes. Challenges them to spell target vocabulary quickly.',
          studentAction:
            'Teammates collaborate to assemble letters into correct word order and shout: "Got it!"',
          interaction: 'Group Work',
          timeMinutes: 8,
          varkt: 'K/T/R',
          centurySkill: 'Collaboration & Problem Solving',
        },
        {
          stepNumber: '7',
          stepName: 'Game 02: Dealing with Words (Board Relay Race)',
          subObjective: 'To apply rapid lexical retrieval under competitive physical relay constraints.',
          teacherAction:
            'T splits board into team columns. Dictates a category: teams race to write valid words in relay fashion.',
          studentAction:
            'Students hand the marker to teammate like a relay baton, cheering their team quietly.',
          interaction: 'Group Work',
          timeMinutes: 10,
          varkt: 'V/K/R',
          centurySkill: 'Team Coordination & Time Management',
        },
        {
          stepNumber: '8',
          stepName: 'Game 03: Dealing with Sentences (Sentence Anagram Race)',
          subObjective: 'To negotiate syntactic rules (Subject + Verb + Object) to assemble sentence strips.',
          teacherAction:
            'T hands out cut-up sentence strips. Teams must reassemble words into syntactically correct sentences.',
          studentAction:
            'Teams debate word order (Subject + Verb + Object), align strips, and read their sentence aloud.',
          interaction: 'Group Work',
          timeMinutes: 8,
          varkt: 'R/T',
          centurySkill: 'Critical Thinking & Syntax Negotiation',
        },
        {
          stepNumber: '9',
          stepName: 'Game 04: Pictionary / Snap! Challenge',
          subObjective: 'To communicate conceptual meaning through non-verbal sketching and rapid deduction.',
          teacherAction:
            'One member from each team draws a target concept on the board without speaking; team guesses in English.',
          studentAction:
            'Learner draws visual clues; teammates brainstorm and guess vocabulary terms.',
          interaction: 'Group Work',
          timeMinutes: 6,
          varkt: 'V/A',
          centurySkill: 'Visual Creativity & Lateral Thinking',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '10',
          stepName: 'Assessment Step 1: Winner Announcement & Fair Play Praise',
          subObjective: 'To celebrate group effort, fair play, and mutual peer encouragement.',
          teacherAction:
            'T tallies team scores on the board, praises effort and collaboration across all teams equally.',
          studentAction:
            'Pupils cheer each other and applaud opposing teams with good sportsmanship.',
          interaction: 'Whole Class',
          timeMinutes: 5,
          varkt: 'A',
          centurySkill: 'Good Sportsmanship & Empathy',
        },
        {
          stepNumber: '11',
          stepName: 'Assessment Step 2: Song Lyrics Performance',
          subObjective: 'To unify the class through musical celebration and solidify lexical memory.',
          teacherAction:
            'T leads entire class in singing the current section’s theme song to celebrate victory and solidify language chunks.',
          studentAction:
            'Pupils sing together in harmony with festive hand motions.',
          interaction: 'Whole Class',
          timeMinutes: 5,
          varkt: 'A/K',
          centurySkill: 'Communal Harmony & Expression',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 04: I Read and Write (PS4) - 60 min (Cursive Handwriting & Form Completion)
  private static buildSession4Stages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Song & Sounds',
          subObjective: 'To prepare wrist flexibility and posture for joined cursive handwriting.',
          teacherAction: 'T welcomes pupils and conducts motor-skill warm-up for cursive wrist flexibility.',
          studentAction: 'Pupils perform rhythmic wrist rotations and pencil-grip calibration.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A/K',
          centurySkill: 'Self-Regulation & Motor Control',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To observe fluid letter joining at the baseline.',
          teacherAction: 'T writes date in cursive on lines, modeling letter joins.',
          studentAction: 'Pupils observe the fluid connection between letters.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V',
          centurySkill: 'Visual Attention & Modeling',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To recognize standard form headers (Name, Age, Country) rapidly.',
          teacherAction: 'T flashes form labels (Name, Age, Job, Country) for rapid recognition.',
          studentAction: 'Pupils read labels instantly.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'R',
          centurySkill: 'Information Literacy',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 40,
      steps: [
        {
          stepNumber: '4',
          stepName: 'Lead in (Picture Talk & Prediction)',
          subObjective: 'To understand the purpose and structural components of an authentic form.',
          teacherAction:
            `T displays an enlarged sample form: "${session.formType || 'Official Form'}". Explains each field header clearly.`,
          studentAction:
            'Pupils examine the form fields and identify where personal or factual information belongs.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V',
          centurySkill: 'Information Structuring',
        },
        {
          stepNumber: '5',
          stepName: '1st Reading: Loud Reading (Decoding in Script)',
          subObjective: 'To retrieve factual biographical or school information from a written source text.',
          teacherAction:
            'T has pupils read the short source text from Session 2 aloud in unison to retrieve key factual data.',
          studentAction:
            'Pupils read the text aloud, tracking lines with their rulers or index fingers.',
          interaction: 'Whole Class',
          timeMinutes: 6,
          varkt: 'R/A',
          centurySkill: 'Reading for Information',
        },
        {
          stepNumber: '6',
          stepName: '2nd Reading (Information Transfer to Form)',
          subObjective: 'To extract specific data and map it accurately into designated form slots.',
          teacherAction:
            'T guides class to extract specific data from the reading text and complete the form on the board.',
          studentAction:
            'Pupils locate names, ages, and locations in the text and transfer them to the board form.',
          interaction: 'T-Ls',
          timeMinutes: 7,
          varkt: 'R/T',
          centurySkill: 'Data Extraction & Transfer',
        },
        {
          stepNumber: '7',
          stepName: 'Shaping, Sizing, Spacing & Alignment: Words in Cursive (WB & MWBs)',
          subObjective: 'To connect lowercase letters into fluid cursive words without lifting pen.',
          teacherAction:
            'T models joined handwriting on 4-line rulings: shows how letters join smoothly at the baseline without lifting pen.',
          studentAction:
            'Pupils practice joining letters into words on their mini-whiteboards (MWBs), checking sizing between lines.',
          interaction: 'Individual',
          timeMinutes: 8,
          varkt: 'V/T',
          centurySkill: 'Fine Motor Precision',
          pedagogicalTip: 'Official Directive: Ts must teach cursive first at the level of words, then sentences.',
        },
        {
          stepNumber: '8',
          stepName: '3rd Reading (Word Order & Sentence Construction)',
          subObjective: 'To synthesize form notes into complete, grammatically punctuated sentences.',
          teacherAction:
            'T presents a model sentence using the form data. Analyzes word order: Subject + Verb + Complement.',
          studentAction:
            'Pupils read the sentence and verify that capitalization and final punctuation are correct.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'R',
          centurySkill: 'Syntactic Reasoning',
        },
        {
          stepNumber: '9',
          stepName: 'Shaping, Sizing, Spacing & Alignment: Sentence in Cursive',
          subObjective: 'To write complete sentences in connected cursive with uniform slant and word spacing.',
          teacherAction:
            'T writes the complete sentence in cursive on the board with proper margins and consistent slant.',
          studentAction:
            'Pupils write the complete sentence on MWBs, evaluating their own spacing between words.',
          interaction: 'Individual',
          timeMinutes: 8,
          varkt: 'V/T',
          centurySkill: 'Self-Correction & Quality Control',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '10',
          stepName: 'Assessment Step 1: Copying Down into Copybooks (CCBs)',
          subObjective: 'To produce clean, error-free cursive writing in official school copybooks.',
          teacherAction:
            'T monitors pupils copying the completed form and cursive sentence into their Class Copybooks (CCBs).',
          studentAction:
            'Pupils write carefully in cursive, respecting lined margins and legibility standards.',
          interaction: 'Individual',
          timeMinutes: 7,
          varkt: 'R/T',
          centurySkill: 'Autonomy & Work Ethic',
        },
        {
          stepNumber: '11',
          stepName: 'Assessment Step 2: Peer Review & Teacher Validation Stamp',
          subObjective: 'To engage in respectful peer auditing of handwriting clarity.',
          teacherAction:
            'T checks copybooks and stamps "Excellent Cursive!", encouraging peer swapping for mutual feedback.',
          studentAction:
            'Deskmates swap copybooks and give smiley feedback on handwriting neatness.',
          interaction: 'S-S',
          timeMinutes: 3,
          varkt: 'V/R',
          centurySkill: 'Constructive Peer Evaluation',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 05: I Play Roles (PS4) - 60 min
  private static buildSession5Stages(session: PS4SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    const warmUp: ProcedureStage = {
      stageId: 'warm_up',
      stageName: 'Warm-up',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '1',
          stepName: 'Welcoming + Alphabet Song & Sounds',
          subObjective: 'To vocalize conversational openers with natural pitch inflection.',
          teacherAction: 'T greets class and conducts an upbeat warm-up rhyme.',
          studentAction: 'Pupils chant with energy and enthusiasm.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A',
          centurySkill: 'Communication',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To maintain collective responsibility in date keeping.',
          teacherAction: 'T writes the date with pupil participation.',
          studentAction: 'Pupils read date in chorus.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/A',
          centurySkill: 'Collaboration',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To trigger fast conversational memory through prompt response drills.',
          teacherAction: 'T plays "Fast Dialogue Recall": cues question starter; pupils shout appropriate response.',
          studentAction: 'Pupils respond rapidly with learned conversational formulaic chunks.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'A',
          centurySkill: 'Conversational Agility',
        },
      ],
    };

    const installResources: ProcedureStage = {
      stageId: 'install_resources',
      stageName: 'Install Resources',
      totalTimeMinutes: 40,
      steps: [
        {
          stepNumber: '4',
          stepName: 'Lead in (Picture Talk / Scene Context)',
          subObjective: 'To establish realistic social roles and communicative goals from visual scenes.',
          teacherAction:
            `T sets the role-play context using visual props and realia: "${session.targetGrammar}".`,
          studentAction:
            'Pupils observe the context, identify the communication challenge and characters.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V',
          centurySkill: 'Contextual Empathy & Imagination',
        },
        {
          stepNumber: '5',
          stepName: 'T’s Performance (Whole Dialogue Several Times)',
          subObjective: 'To observe communicative body language, eye contact, and native intonation.',
          teacherAction:
            `T performs the entire dialogue with dramatic body language and natural English intonation:\n"${session.authenticScript || ''}"`,
          studentAction:
            'Pupils listen and observe how paralinguistic cues and facial expressions convey genuine meaning.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V/A',
          centurySkill: 'Active Observation & Modeling',
        },
        {
          stepNumber: '6',
          stepName: '1st Exchange Scaffolding (T/T - T/Ls - Ls/T - Ls/Ls)',
          subObjective: 'To drill initial communicative exchange through progressive teacher fading.',
          teacherAction:
            'T leads Exchange 1 through all 4 interactive configurations until the question-and-answer flow is automatic.',
          studentAction:
            'Pupils repeat, role-play with teacher, and practice row-to-row with clear voice projection.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'A',
          centurySkill: 'Communication & Verbal Fluency',
          pedagogicalTip: 'Official Directive: At least two exchanges. All learners are supposed to take part.',
        },
        {
          stepNumber: '7',
          stepName: '2nd Exchange Scaffolding (T/T - T/Ls - Ls/T - Ls/Ls)',
          subObjective: 'To master second question-and-answer pair with accurate turn-taking cues.',
          teacherAction:
            'T models Exchange 2 using the same 4-phase scaffolding method.',
          studentAction:
            'Pupils master the second exchange with natural question and answer intonation.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'A',
          centurySkill: 'Communication & Conversational Timing',
        },
        {
          stepNumber: '8',
          stepName: 'Linking Exchanges Together (Pairs Practice)',
          subObjective: 'To sustain a complete multi-turn dialogue in authentic face-to-face pair work.',
          teacherAction:
            'T instructs pairs to perform the complete dialogue face-to-face with gestures.',
          studentAction:
            'Learners rehearse in pairs, maintaining eye contact and expressive communication.',
          interaction: 'S-S',
          timeMinutes: 10,
          varkt: 'A/K',
          centurySkill: 'Collaboration & Interpersonal Empathy',
        },
      ],
    };

    const assessment: ProcedureStage = {
      stageId: 'assessment',
      stageName: 'Assessment',
      totalTimeMinutes: 10,
      steps: [
        {
          stepNumber: '9',
          stepName: 'Assessment Step 1: Acting with Substitutions in Front of Peers',
          subObjective: 'To demonstrate creative language ownership by adapting variables to personal reality.',
          teacherAction:
            'T invites student pairs to stage the dialogue, substituting realistic details (e.g. real relatives, favorite sports).',
          studentAction:
            'Pupil pairs perform confidently using their substituted personal choices.',
          interaction: 'Ls-Ls',
          timeMinutes: 6,
          varkt: 'A/K',
          centurySkill: 'Creativity & Confident Presentation',
        },
        {
          stepNumber: '10',
          stepName: 'Assessment Step 2: Peer Evaluation & Feedback',
          subObjective: 'To formulate positive, criteria-based feedback for performing classmates.',
          teacherAction:
            'T guides audience in giving warm positive appraisal: "Did they speak clearly? Did they use gestures?"',
          studentAction:
            'Classmates offer verbal encouragement and thumbs-up validation.',
          interaction: 'Whole Class',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Critical Appraisal & Positive Community',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }
}
