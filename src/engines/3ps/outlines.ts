/**
 * DidactiPlan - ENGINE 1: 3PS (Foundation Engine)
 * Official Session Outlines Registry with Enabling Sub-Objectives & 21st-Century Skills.
 * Source: Algerian Ministry of National Education Official Outline Document (PS3).
 */

import { ProcedureStage } from '../../shared/lessonPlanSchema';
import { PS3SessionData } from './curriculum';

export class PS3Outlines {
  public static buildSessionStages(session: PS3SessionData): {
    warmUp: ProcedureStage;
    installResources: ProcedureStage;
    assessment: ProcedureStage;
  } {
    switch (session.outlineType) {
      case 'session1_listen_repeat':
        return this.buildSession1Stages(session);
      case 'session2_read_discover':
        return this.buildSession2Stages(session);
      case 'session3_read_write':
        return this.buildSession3Stages(session);
      case 'session4_play_roles':
        return this.buildSession4Stages(session);
    }
  }

  // Session 01: I Listen and Repeat (PS3) - 60 min
  private static buildSession1Stages(session: PS3SessionData): {
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
          subObjective: 'To lower the affective filter, establish classroom rapport, and reinforce phonemic alphabet recall.',
          teacherAction:
            'T greets pupils cheerfully ("Good morning, children! How are you today?"). Plays the official Alphabet Song audio while pointing to the alphabet poster.',
          studentAction:
            'Pupils smile, greet the teacher in chorus ("Good morning, teacher!"), and sing along rhythmically while echoing letter sounds.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Communication & Emotional Well-being',
        },
        {
          stepNumber: '2',
          stepName: 'Date (Telling, spelling and writing down)',
          subObjective: 'To develop daily temporal orientation and connect letter names to graphemes through choral spelling.',
          teacherAction:
            'T asks: "What day is today?". Elicits the day and month. Sounds out each letter while writing on the board: "T-o-d-a-y i-s..."',
          studentAction:
            'Pupils identify the day of the week, chant the spelling letters in chorus, and trace the air rhythm.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/A/K',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To activate prerequisite vocabulary and consolidate retention through a playful visual game.',
          teacherAction:
            'T conducts a quick 3-minute flashcard flash game reviewing prerequisite vocabulary or greetings from previous lesson.',
          studentAction:
            'Pupils raise their hands and call out familiar words quickly upon seeing the card flashed for 1 second.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V',
          centurySkill: 'Critical Thinking & Rapid Recall',
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
          stepName: 'I Sing and Have Fun: Lead in (Picture Talk)',
          subObjective: 'To stimulate visual curiosity, elicit prior representations, and establish thematic context.',
          teacherAction:
            `T displays colorful pictures or realia related to ${session.targetLexis[0] || 'the topic'}. Points and asks: "Who/What do you see?"`,
          studentAction:
            'Pupils look attentively, observe gestures, and name familiar visual items with curiosity.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V',
          centurySkill: 'Visual & Media Literacy',
        },
        {
          stepNumber: '5',
          stepName: 'I Sing and Have Fun: Listening & Singing',
          subObjective: 'To internalize natural English phonemes, stress patterns, and rhythm through choral singing.',
          teacherAction:
            `T sings or plays the thematic chant: "${session.songOrChant || 'Thematic Song'}". T models rhythmic gestures and encourages clapping.`,
          studentAction:
            'Pupils listen first, then join in humming and chanting in chorus with joyous clapping and physical movements.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'A/K',
          centurySkill: 'Collaboration & Musical Creativity',
        },
        {
          stepNumber: '6',
          stepName: 'I Listen & Repeat: Lead in & Prediction',
          subObjective: 'To train predictive listening strategies using situational illustrations and paralinguistic cues.',
          teacherAction:
            'T presents the authentic listening context illustration on the board. Asks leading question: "Look at the scene. What are they talking about?"',
          studentAction:
            'Pupils anticipate and formulate spontaneous guesses using visual clues and facial expressions.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V/A',
          centurySkill: 'Critical Thinking & Inference',
        },
        {
          stepNumber: '7',
          stepName: 'I Listen & Repeat: Authentic Listening Passage',
          subObjective: 'To develop auditory discrimination of target chunks and verify situational predictions without written interference.',
          teacherAction:
            `T reads the official listening script with clear intonation and expressive character voices:\n"${session.authenticScript || ''}"`,
          studentAction:
            'Pupils listen with total attention, verifying their predictions without looking at any written words.',
          interaction: 'T-Ls',
          timeMinutes: 7,
          varkt: 'A',
          centurySkill: 'Active Listening & Auditory Focus',
          pedagogicalTip: 'Official Directive: NO written form is allowed in this oral foundation session.',
        },
        {
          stepNumber: '8',
          stepName: 'Target Lexis in Context & Drilling',
          subObjective: 'To achieve phonetic accuracy, mouth shape automaticity, and intonation control across groups.',
          teacherAction:
            `T isolates key vocabulary: ${session.targetLexis.join(', ')}. T models pronunciation with exaggerated lip shaping: "Repeat after me: ${session.targetLexis[0]}!"`,
          studentAction:
            'Pupils repeat in chorus, in rows (half class), and individual turns, mimicking teacher pitch and stress.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'A',
          centurySkill: 'Communication & Verbal Clarity',
        },
        {
          stepNumber: '9',
          stepName: 'Total Physical Response (TPR) Activity',
          subObjective: 'To anchor semantic meaning physically into long-term memory through bodily kinesthetic actions.',
          teacherAction:
            'T associates an action gesture with each word (e.g. miming actions/props). Calls out: "Show me the gesture!"',
          studentAction:
            'Pupils respond instantaneously by performing the designated gesture without hesitation.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'K/T',
          centurySkill: 'Kinesthetic Creativity & Reflexes',
        },
        {
          stepNumber: '10',
          stepName: 'Phonemic Awareness (Isolating, Segmenting, Blending)',
          subObjective: 'To manipulate auditory sound units (phonemes) through isolation, syllable clapping, and blending.',
          teacherAction:
            'T leads auditory phonemic manipulation: A/ Isolating initial sound; B/ Segmenting syllables with claps; C/ Blending sounds into full words.',
          studentAction:
            'Pupils isolate sounds orally, clap syllables, and blend target phonemes into words.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'A/K',
          centurySkill: 'Critical Thinking (Phonological Analysis)',
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
          stepName: 'Assessment Step 1: Missing Card Game (Kim’s Game)',
          subObjective: 'To formatively assess vocabulary retention and auditory-visual recall in a low-stakes game.',
          teacherAction:
            'T places 4 flashcards on the board, tells pupils: "Close your eyes!", removes one card, and asks: "What is missing?"',
          studentAction:
            'Pupils open their eyes, spot the missing item, and shout out the English word excitedly.',
          interaction: 'T-Ls',
          timeMinutes: 5,
          varkt: 'V/A',
          centurySkill: 'Problem Solving & Visual Memory',
        },
        {
          stepNumber: '12',
          stepName: 'Assessment Step 2: TPR Follow-up & Oral Check',
          subObjective: 'To verify individual receptive comprehension and encourage peer affirmative feedback.',
          teacherAction:
            'T whispers target word to individual learners and prompts them to perform the action or point to the correct classmate.',
          studentAction:
            'Selected learners demonstrate comprehension with actions, peers validate with thumbs-up.',
          interaction: 'T-S',
          timeMinutes: 5,
          varkt: 'K',
          centurySkill: 'Social Interaction & Self-Confidence',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 02: I Read and Discover (PS3) - 60 min
  private static buildSession2Stages(session: PS3SessionData): {
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
          subObjective: 'To activate grapheme-phoneme awareness and warm up the vocal apparatus.',
          teacherAction: 'T greets class and sings the Alphabet Phonics Song pointing to letters.',
          studentAction: 'Pupils sing alphabet rhythmically and make corresponding phoneme gestures.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Communication',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To reinforce calendar numerals and days of the week.',
          teacherAction: 'T writes the date on the board, inviting pupils to sound out the first letter of the day.',
          studentAction: 'Pupils call out the letter sound and date number.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/A',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To identify target sounds in familiar words through auditory discrimination.',
          teacherAction: 'T conducts "Sound Detective": makes a phoneme sound, asks pupils to identify words that have it.',
          studentAction: 'Pupils call out familiar words matching the sound.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'A',
          centurySkill: 'Critical Thinking',
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
          subObjective: 'To connect pictorial representations with written symbols and spark reading curiosity.',
          teacherAction:
            'T pins 3 flashcards with words underneath on the board. Points to images: "What is this? Look at the letters below."',
          studentAction:
            'Pupils name the pictures and observe that written shapes represent spoken sounds.',
          interaction: 'T-Ls',
          timeMinutes: 8,
          varkt: 'V/R',
          centurySkill: 'Visual Literacy',
        },
        {
          stepNumber: '5',
          stepName: 'Loud Reading (Teacher Modeling)',
          subObjective: 'To demonstrate left-to-right eye tracking, word boundaries, and finger-pointing decoding.',
          teacherAction:
            'T reads target words clearly while sliding finger under each grapheme from left to right: "p - i - n -> pin".',
          studentAction:
            'Pupils follow teacher’s finger movement and listen to the connection between letters and speech sounds.',
          interaction: 'T-Ls',
          timeMinutes: 10,
          varkt: 'V/A/R',
          centurySkill: 'Decoding Literacy',
          pedagogicalTip: 'Official Directive: Ts MUST point at each word they read from left to right.',
        },
        {
          stepNumber: '6',
          stepName: 'Decoding Target Sounds & Words',
          subObjective: 'To segment words into individual phonemes and re-blend them systematically using physical finger counting.',
          teacherAction:
            `T focuses on the target phonics: ${session.phonicsOrLetters}. Demonstrates segmentation with 3 fingers (Sound 1, Sound 2, Sound 3).`,
          studentAction:
            'Pupils hold up three fingers, sound out each phoneme in unison, and blend them into a complete word.',
          interaction: 'T-Ls',
          timeMinutes: 12,
          varkt: 'A/K/T',
          centurySkill: 'Critical Thinking & Problem Solving',
        },
        {
          stepNumber: '7',
          stepName: 'Decoding Practice (Word Cards in Pairs)',
          subObjective: 'To build cooperative reading skills by matching decoded word cards with corresponding illustrations.',
          teacherAction:
            'T hands out simple word cards to pupil pairs. Challenges them to decode the word and find the matching picture on the board.',
          studentAction:
            'Pupils collaborate in pairs, sound out the letters, and match their card with the correct board picture.',
          interaction: 'S-S',
          timeMinutes: 10,
          varkt: 'R/T',
          centurySkill: 'Collaboration & Teamwork',
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
          subObjective: 'To formulate independent decoding hypotheses and read a short phrase aloud with partner support.',
          teacherAction:
            'T writes a very short 3-word phrase on the board. Gives 1 minute think time, then prompts pairs to read.',
          studentAction:
            'Pupils whisper to partner, then read aloud together with proud articulation.',
          interaction: 'S-S',
          timeMinutes: 5,
          varkt: 'R/A',
          centurySkill: 'Collaboration & Peer Communication',
        },
        {
          stepNumber: '9',
          stepName: 'Assessment Step 2: Slap the Word Board Game',
          subObjective: 'To assess rapid grapheme recognition under friendly, high-energy competition.',
          teacherAction:
            'T calls out a sound or word. Two learners from opposing rows race to touch the corresponding written card.',
          studentAction:
            'Competitors scan the board, locate the grapheme, and slap the correct card.',
          interaction: 'T-S',
          timeMinutes: 5,
          varkt: 'V/K',
          centurySkill: 'Agility & Visual Discrimination',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 03: I Read and Write (PS3) - 60 min
  private static buildSession3Stages(session: PS3SessionData): {
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
          subObjective: 'To warm up gross and fine motor muscles for pencil grip readiness.',
          teacherAction: 'T welcomes pupils and leads rhythmic hand-stretching exercises.',
          studentAction: 'Pupils perform finger-stretches and calibrate their tripod pencil grip.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A/K',
          centurySkill: 'Physical Self-Regulation',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To observe four-line guideline proportions and letter baseline alignment.',
          teacherAction: 'T writes the date, emphasizing correct letter baseline alignment on the 4-line board.',
          studentAction: 'Pupils observe the baseline and call out day and month names.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V',
          centurySkill: 'Information Literacy',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To practice directional flow (left-to-right) through rhythmic wave patterns.',
          teacherAction: 'T conducts finger-gymnastics and air-drawing warm-up (circles, down-up diagonal patterns).',
          studentAction: 'Pupils trace wave patterns in the air to internalize pencil push-and-pull strokes.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'K/T',
          centurySkill: 'Motor Precision & Coordination',
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
          stepName: 'Lead in (Picture Talk & Context Reading)',
          subObjective: 'To associate target letter shapes with known lexical items in visual context.',
          teacherAction:
            `T displays picture and target word written on board. Reads aloud, pointing to the letter family: ${session.phonicsOrLetters}.`,
          studentAction:
            'Pupils listen, repeat the word, and focus their eyes on the target letter shape.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V/R',
          centurySkill: 'Visual Literacy',
        },
        {
          stepNumber: '5',
          stepName: 'Target Words then Target Letters Isolation',
          subObjective: 'To identify designated start points and directional movements for target letter family.',
          teacherAction:
            'T isolates the target letters one by one on the board with directional arrows (start dot, downward stroke, finish curve).',
          studentAction:
            'Pupils identify the starting point and name the letter sound.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V',
          centurySkill: 'Critical Thinking & Spatial Logic',
        },
        {
          stepNumber: '6',
          stepName: 'Multisensory Shaping (Air, Desks, Sand / Palms)',
          subObjective: 'To encode letter strokes via tactile memory and prevent letter reversals (b/d, p/q).',
          teacherAction:
            'T stands with back to class and models tracing the letter in the air using big arm gestures: "Top to bottom, dot on top!".',
          studentAction:
            'Pupils stand, mirror the stroke with their index finger in the air, then trace on their desk surface and palm of hand.',
          interaction: 'T-Ls',
          timeMinutes: 12,
          varkt: 'K/T',
          centurySkill: 'Multisensory Creativity',
          pedagogicalTip: 'Official Directive: Suitable rhythmic pattern exercises must precede letter formation.',
        },
        {
          stepNumber: '7',
          stepName: 'Shaping, Sizing, Spacing & Alignment on MWBs',
          subObjective: 'To practice print letter formation with accurate sizing and spacing between lines.',
          teacherAction:
            'T models on four-line board lines: shows ascenders and descenders. Instructs: "Now write on your mini-whiteboards (MWBs)!"',
          studentAction:
            'Pupils write the letter three times on their MWBs with dry-erase markers, adjusting height and baseline alignment.',
          interaction: 'Individual',
          timeMinutes: 16,
          varkt: 'V/T',
          centurySkill: 'Self-Direction & Craftsmanship',
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
          stepName: 'Assessment Step 1: Copying Down into Copybooks',
          subObjective: 'To produce legible, correctly spaced letters and short words in primary copybooks.',
          teacherAction:
            'T monitors pupils as they write the target letters and 1 short word into their English copybooks. Checks posture and pencil grip.',
          studentAction:
            'Pupils copy carefully on lined copybooks, respecting spacing between letters and words.',
          interaction: 'Individual',
          timeMinutes: 7,
          varkt: 'R/T',
          centurySkill: 'Diligence & Neatness',
        },
        {
          stepNumber: '9',
          stepName: 'Assessment Step 2: Show & Celebrate (Singing)',
          subObjective: 'To build pride in penmanship through public peer appreciation and closing song.',
          teacherAction:
            'T asks pupils to hold up their copybooks. Praises neat efforts with sticker stamps and leads a celebratory 3-line chant.',
          studentAction:
            'Pupils display work with pride, applaud classmates, and sing the closing rhyme.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'A',
          centurySkill: 'Social Validation & Celebration',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }

  // Session 04: I Play Roles (PS3) - 60 min
  private static buildSession4Stages(session: PS3SessionData): {
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
          subObjective: 'To energize learners and activate vocal projection through rapid chanting.',
          teacherAction: 'T greets learners and leads a fast, lively rendition of the Alphabet Chant.',
          studentAction: 'Pupils respond enthusiastically with energetic clapping.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'A',
          centurySkill: 'Communication',
        },
        {
          stepNumber: '2',
          stepName: 'Date Routine',
          subObjective: 'To foster student voice in setting classroom routines.',
          teacherAction: 'T writes the date with pupil participation.',
          studentAction: 'Pupils read the date together in chorus.',
          interaction: 'T-Ls',
          timeMinutes: 3,
          varkt: 'V/A',
          centurySkill: 'Collaboration',
        },
        {
          stepNumber: '3',
          stepName: 'Review (Focus on Game)',
          subObjective: 'To practice turn-taking and spontaneous personal introductions.',
          teacherAction: 'T conducts "Pass the Ball": pupil holding the ball introduces themselves or names a family member.',
          studentAction: 'Pupils toss a soft ball across the circle, stating: "I am (Name)!" or "This is my dad!".',
          interaction: 'Ls-Ls',
          timeMinutes: 3,
          varkt: 'K/A',
          centurySkill: 'Communication & Turn-Taking',
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
          stepName: 'Lead in (Picture Talk / Scene Setup)',
          subObjective: 'To contextualize communicative dialogue using puppets and visual character identities.',
          teacherAction:
            `T sets the scene using character masks or puppets. Introduces the role-play context: "${session.targetGrammar}".`,
          studentAction:
            'Pupils observe the two puppets interacting and giggle with excitement.',
          interaction: 'T-Ls',
          timeMinutes: 4,
          varkt: 'V',
          centurySkill: 'Creativity & Dramatic Imagination',
        },
        {
          stepNumber: '5',
          stepName: 'T’s Performance (Whole Dialogue Several Times)',
          subObjective: 'To observe expressive native-like intonation, facial expressions, and body language models.',
          teacherAction:
            `T performs the complete 2-exchange dialogue with exaggerated gestures and distinct voices:\n"${session.authenticScript || ''}"`,
          studentAction:
            'Pupils watch the complete model performance, absorbing natural stress and facial expressions.',
          interaction: 'T-Ls',
          timeMinutes: 6,
          varkt: 'V/A',
          centurySkill: 'Active Listening & Observation',
        },
        {
          stepNumber: '6',
          stepName: '1st Exchange Scaffolding (T/T - T/Ls - Ls/T - Ls/Ls)',
          subObjective: 'To systematically transfer dialogue ownership from teacher modeling to peer-to-peer execution.',
          teacherAction:
            'T models exchange 1: First plays both roles (T/T), then prompts class (T/Ls), then invites class to question T (Ls/T), then half class to half class (Ls/Ls).',
          studentAction:
            'Pupils practice the question and answer across all four interaction patterns until fluent.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'A',
          centurySkill: 'Communication & Collective Rehearsal',
          pedagogicalTip: 'Official Directive: Four-step scaffolding progression: T/T -> T/Ls -> Ls/T -> Ls/Ls.',
        },
        {
          stepNumber: '7',
          stepName: '2nd Exchange Scaffolding (T/T - T/Ls - Ls/T - Ls/Ls)',
          subObjective: 'To consolidate responsive answers and practice rising/falling pitch inflections.',
          teacherAction:
            'T models exchange 2 (e.g. "What’s his name?" - "His name is Omar.") using the exact same 4 interaction steps.',
          studentAction:
            'Pupils drill the second exchange with confidence and rhythmic intonation.',
          interaction: 'Whole Class',
          timeMinutes: 10,
          varkt: 'A',
          centurySkill: 'Communication & Prosodic Fluency',
        },
        {
          stepNumber: '8',
          stepName: 'Linking 1st & 2nd Exchanges (Full Dialogue in Pairs)',
          subObjective: 'To execute a full two-way communicative exchange with real eye contact and empathetic listening.',
          teacherAction:
            'T prompts pairs to link both exchanges together: "Now Pupil A and Pupil B, do the whole dialogue!"',
          studentAction:
            'Pupils practice face-to-face in pairs with eye contact and smiles.',
          interaction: 'S-S',
          timeMinutes: 10,
          varkt: 'A/K',
          centurySkill: 'Collaboration & Interpersonal Rapport',
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
          stepName: 'Assessment Step 1: Acting with Substitutions in Front of Class',
          subObjective: 'To demonstrate expressive dialogue mastery by adapting script details to real-life personal facts.',
          teacherAction:
            'T invites volunteers to the front of the classroom with real props (puppets/photos). Encourages substituting real family names.',
          studentAction:
            'Volunteer pairs perform the mini-dialogue using their real brother/sister names.',
          interaction: 'Ls-Ls',
          timeMinutes: 6,
          varkt: 'A/K',
          centurySkill: 'Creativity & Public Speaking',
        },
        {
          stepNumber: '10',
          stepName: 'Assessment Step 2: Peer Applause & Thumbs-Up Feedback',
          subObjective: 'To engage the audience in constructive, respectful peer appraisal.',
          teacherAction:
            'T asks audience: "Did they speak loudly and clearly? Show thumbs up!" Congratulates performers with verbal praise.',
          studentAction:
            'Audience gives thumbs up and applauds enthusiastically.',
          interaction: 'Whole Class',
          timeMinutes: 4,
          varkt: 'V/A',
          centurySkill: 'Social Awareness & Positive Feedback',
        },
      ],
    };

    return { warmUp, installResources, assessment };
  }
}
