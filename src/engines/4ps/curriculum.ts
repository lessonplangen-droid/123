/**
 * DidactiPlan - ENGINE 2: 4PS (Development Engine)
 * Authoritative Curriculum Database for Fourth Year Primary (Key Stage 1).
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide 4PS (2023)
 * & Official Listening Scripts 4PS.
 */

export interface PS4SessionData {
  sessionNumber: number;
  sessionTitle: string;
  officialObjective: string;
  outlineType:
    | 'session1_listen_repeat'
    | 'session2_read_discover'
    | 'session3_read_enjoy'
    | 'session4_read_write'
    | 'session5_play_roles';
  timingMinutes: number;
  targetLexis: string[];
  targetGrammar: string;
  phonicsOrSounds?: string;
  phonicsOrLetters?: string;
  authenticScript?: string;
  readingPassage?: string;
  gameType?: string;
  formType?: string;
}

export interface PS4SectionData {
  sectionNumber: number;
  sectionTitle: string;
  communicativeObjectives: string[];
  sessions: PS4SessionData[];
}

export interface PS4SequenceData {
  sequenceNumber: number;
  sequenceTitle: string;
  sections: PS4SectionData[];
}

export const PS4_CURRICULUM_DATA: PS4SequenceData[] = [
  {
    sequenceNumber: 1,
    sequenceTitle: 'Family & Friends',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Family',
        communicativeObjectives: [
          'Introduce family members (relationship, name, age, occupation, place of residence)',
          'Ask and answer questions about family members',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing and Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name and identify extended family members in addition to occupations.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['uncle', 'aunt', 'cousin', 'dentist', 'teacher', 'journalist', 'engineer', 'age 25'],
            targetGrammar:
              'Who is it? It’s my uncle Ahmed. How old is he? He is 25. Is he a teacher? No, he is a dentist.',
            phonicsOrLetters: 'Sound discrimination: /i/ vs /i:/ (dentist, teacher)',
            authenticScript:
              'Razane shows the photo album to her friend, Meriem.\nMeriem: Who is it?\nRazane: It’s my uncle Ahmed.\nMeriem: How old is he?\nRazane: He is 25.\nMeriem: Is he a teacher?\nRazane: No, he is a dentist.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read words that contain the sounds /i/ and /i:/ correctly.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['six', 'in', 'live', 'teacher', 'read', 'speak'],
            targetGrammar: 'Present simple: to be, to live (He lives in Tlemcen).',
            phonicsOrLetters: 'Contrastive Phonics: /i/ (short) vs /i:/ (long vowel)',
            readingPassage: 'This is my uncle Ahmed. He is a dentist. He lives in a clean street.',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to read words and sentences related to the topic correctly through cooperative games.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['uncle', 'aunt', 'dentist', 'teacher', 'photo', 'album'],
            targetGrammar: 'Sentence syntax: Subject + verb to be + occupation.',
            phonicsOrLetters: 'Sight reading and phoneme matching through competition',
            gameType: 'Board Race / Word Jumble Race (Family & Occupations)',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write a sentence in connected handwriting (cursive) and fill in a family tree form.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['Ahmed', 'dentist', 'uncle', 'age'],
            targetGrammar: 'Connected handwriting features: baseline flow, ascenders, descenders.',
            phonicsOrLetters: 'Joined letter formation (cursive script)',
            formType: 'Family Tree / Relative Profile Form',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to ask and answer questions about family members.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['who', 'how old', 'occupation', 'place'],
            targetGrammar: 'Dialogue: "Who is he?" "He is my uncle." "What is his job?" "He is a dentist."',
            phonicsOrLetters: 'Expressive falling intonation in Wh-questions',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Friends',
        communicativeObjectives: [
          'Introduce friends / e-pals (name, age, occupation, nationality, residence, language)',
          'Name countries and nationalities',
          'Ask and answer questions about friends / e-pals',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name and identify countries and nationalities.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['Algeria / Algerian', 'England / English', 'France / French', 'e-pal', 'nationality'],
            targetGrammar: 'This is my e-pal Jack. Is he French? No, he is English. He lives in England. He is nine.',
            phonicsOrLetters: 'Consonant contrast: /ʃ/ (English, French) vs /tʃ/ (teacher, child)',
            authenticScript:
              'Karim receives a message from his e-pal, Jack. He informs his parents.\nKarim: This is my e-pal.\nParent: Great! What’s his name?\nKarim: His name is Jack.\nParent: Is he French?\nKarim: No, he is English. He lives in England.\nParent: How old is he?\nKarim: He is nine years old, mom.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read words containing the sounds /ʃ/ and /tʃ/ correctly.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['English', 'French', 'ship', 'chip', 'teacher'],
            targetGrammar: 'Adjectives of nationality with suffixes: -sh, -ch, -an, -ian.',
            phonicsOrLetters: 'Contrastive phonics: /ʃ/ spelt "sh" vs /tʃ/ spelt "ch"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify countries and nationalities through team games.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['Algerian', 'English', 'French', 'nine', 'flag'],
            targetGrammar: 'Nationality adjectives in context.',
            phonicsOrLetters: 'Word recognition competition',
            gameType: 'Nationality Pictionary & Word Jumble',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete an e-pal ID Card in cursive handwriting.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['Name', 'Age', 'Country', 'Nationality', 'Language'],
            targetGrammar: 'Capitalization of proper nouns (countries, languages, nationalities).',
            phonicsOrLetters: 'Joined cursive script',
            formType: 'Official E-pal ID Card Form',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play meeting an international e-pal.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['where are you from', 'I am from', 'nationality'],
            targetGrammar: 'Where are you from? I am from Algeria. I am Algerian.',
            phonicsOrLetters: 'International conversational etiquette and intonation',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 2,
    sequenceTitle: 'School',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Facilities',
        communicativeObjectives: [
          'Name school facilities (classrooms, library, canteen, schoolyard, staffroom, toilets)',
          'Ask and answer questions about school facilities',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name school facilities and describe their school.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['classrooms', 'library', 'canteen', 'staffroom', 'schoolyard', 'toilets', 'large', 'beautiful'],
            targetGrammar: 'Is there a library? Yes, there is. There are large classrooms and a big yard.',
            phonicsOrLetters: 'Vowel contrast: /ʊ/ (book) vs /u:/ (school, room)',
            authenticScript:
              'Sophia and Razane are two friends. Sophia wants to show her school to Razane.\nSophia: Hi Razane! Let’s walk to my school. It is not far.\nRazane: Okay. Let’s go!\nSophia: Here we are.\nRazane: Is this your school?\nSophia: Yes, it is.\nRazane: Is there a library?\nSophia: Yes, there is, and there are many books. There are large classrooms, a canteen, a staffroom and a big yard with flowers and trees. I like my school.\nRazane: Lucky you!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read words with vowel sounds /ʊ/ and /u:/ correctly.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['book', 'cook', 'look', 'school', 'room', 'cool'],
            targetGrammar: 'There is / There are structure.',
            phonicsOrLetters: 'Vowel sounds: /ʊ/ vs /u:/',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play vocabulary games identifying school facilities.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['canteen', 'library', 'staffroom', 'yard'],
            targetGrammar: 'There is a / There are many...',
            phonicsOrLetters: 'Spelling sprint and board race',
            gameType: 'Board Race (School Facilities)',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to fill in a school description card in cursive handwriting.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['School Name', 'Classrooms', 'Library', 'Yard'],
            targetGrammar: 'Connected cursive handwriting and punctuation.',
            phonicsOrLetters: 'Cursive sentence flow',
            formType: 'My School Facility Profile Sheet',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to guide a visitor around their school.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['welcome to our school', 'is there a library', 'yes there is'],
            targetGrammar: 'Interactive tour dialogue.',
            phonicsOrLetters: 'Enthusiastic descriptive tone',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Mapping',
        communicativeObjectives: [
          'Locate school facilities (classrooms, library, staffroom, etc.)',
          'Ask and answer questions about school facility locations',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to ask and answer questions about school facility locations.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['in front of', 'next to', 'opposite', 'on the right', 'on the left', 'room five'],
            targetGrammar: 'Where is room five? It’s in front of the library, on the right.',
            phonicsOrLetters: 'Voiced dental fricative /ð/ in: the, there, this',
            authenticScript:
              'The headmaster is looking for the English teacher Mrs Kebir. He asks the secretary about her.\nThe headmaster: Is Mrs Kebir here?\nThe secretary: Yes, she is. She is in room five.\nThe headmaster: Where is room five exactly, please?\nThe secretary: It’s in front of the library, on the right.\nThe headmaster: Thank you very much.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read sentences containing prepositional phrases and the sound /ð/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['the', 'there', 'this', 'that', 'with'],
            targetGrammar: 'Prepositions of place: in front of, next to, on the right.',
            phonicsOrLetters: 'Sound /ð/ spelt "th"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to locate facilities on a map grid through teamwork.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['map', 'library', 'room', 'next to'],
            targetGrammar: 'Spatial prepositions in interactive games.',
            phonicsOrLetters: 'Map reading challenge',
            gameType: 'School Map Treasure Hunt Game',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write location directions in cursive.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['in front of the library', 'on the right'],
            targetGrammar: 'Connected cursive handwriting and commas in directions.',
            phonicsOrLetters: 'Joined cursive handwriting',
            formType: 'Classroom Location Direction Slip',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play giving directions in the school hallway.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['excuse me', 'where is', 'on the left', 'thank you'],
            targetGrammar: 'Polite inquiries and directions.',
            phonicsOrLetters: 'Clear instructional cadence',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 3,
    sequenceTitle: 'Fun Time & Games',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Fun Time',
        communicativeObjectives: [
          'Name fun time activities (indoor and outdoor, individual and team sports)',
          'Ask and answer questions about favourite fun time activities',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name fun time activities and state preferences.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['break', 'cord skipping', 'hide and seek', 'handball', 'seasons', 'weekend', 'excited'],
            targetGrammar: 'What is your favourite fun time activity? I prefer to play cord skipping.',
            phonicsOrLetters: 'Long vowel sound /ɔ:/ in: cord, sport, ball, morning',
            authenticScript:
              'Maya and Sophia are in school. The bell rings.\nMaya: Yes! It’s the break. Let’s have fun!\nSophia: What is your favourite fun time activity?\nMaya: I prefer to play cord skipping.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to decode the sound /ɔ:/ in sports and leisure words.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['cord', 'sport', 'short', 'morning', 'ball'],
            targetGrammar: 'To prefer + infinitive / noun.',
            phonicsOrLetters: 'Long vowel /ɔ:/ spelt "or", "al"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to engage in recreational vocabulary games.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['skipping', 'handball', 'games', 'fun'],
            targetGrammar: 'Present simple expressions of preference.',
            phonicsOrLetters: 'Interactive word jumble',
            gameType: 'Word Jumble Relay (Sports & Hobbies)',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write about their weekend fun activity in cursive.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['On weekends, I play cord skipping with my friends.'],
            targetGrammar: 'Cursive sentence mechanics and proper punctuation.',
            phonicsOrLetters: 'Joined cursive handwriting',
            formType: 'My Fun Time Weekly Schedule Card',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play break time invitations.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['let’s play', 'do you want to', 'sure'],
            targetGrammar: 'Suggestions: "Let’s play hide and seek!" "Great idea!"',
            phonicsOrLetters: 'Energetic playground intonation',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Games',
        communicativeObjectives: [
          'Name games (individual, team, physical, mental, digital)',
          'Ask and answer questions about favourite games',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name and describe favourite games.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['smart games', 'puzzles', 'karting', 'board games', 'card games', 'water balloon fight'],
            targetGrammar: 'On weekends, I play smart games like puzzles. What is your favourite game? My favourite game is karting.',
            phonicsOrLetters: 'Long vowel sound /ɑ:/ in: smart, karting, park, yard',
            authenticScript:
              'Maya: On weekends, I play smart games like puzzles. What is your favourite game?\nSophia: My favourite game is karting.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read words containing the vowel sound /ɑ:/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['smart', 'karting', 'park', 'car', 'card'],
            targetGrammar: 'Like / Prefer + noun.',
            phonicsOrLetters: 'Long vowel /ɑ:/ spelt "ar"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play Pictionary with game vocabulary.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['puzzles', 'karting', 'cards', 'chess'],
            targetGrammar: 'Vocabulary association.',
            phonicsOrLetters: 'Drawing and guessing game',
            gameType: 'Classroom Game Pictionary',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete a Favorite Game Card in cursive script.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['My favourite game is karting.'],
            targetGrammar: 'Connected handwriting and capitalization.',
            phonicsOrLetters: 'Cursive writing practice',
            formType: 'My Gamer Profile Badge',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play organizing an after-school game match.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['we can play', 'after school', 'me too'],
            targetGrammar: 'Dialogue: "Do you like puzzles?" "Me too! We can play after school."',
            phonicsOrLetters: 'Expressive friendly tone',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 4,
    sequenceTitle: 'Food & Health',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Healthy Food',
        communicativeObjectives: [
          'Name healthy food (bread, cereals, vegetables, fruit, meat, drinks, dairy, fish)',
          'Ask and answer questions about healthy food',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name healthy vs unhealthy foods.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['vegetable soup', 'fish', 'fresh orange juice', 'burger', 'fries', 'ketchup', 'hungry', 'healthy'],
            targetGrammar: 'What’s for lunch, mum? We are having vegetable soup, fish and orange juice. It’s healthy!',
            phonicsOrLetters: 'Vowel contrast: /ə/ (schwa) vs /ɜ:/ in: burger, girl, bird',
            authenticScript:
              'Razane is back home from school. She is very hungry.\nRazane: I’m hungry, I want a burger with fries and ketchup. What’s for lunch, mum?\nThe mother: We are having a vegetable soup, fish and fresh orange juice.\nRazane: I prefer a burger with fries and ketchup, please, mum. I love burgers!\nThe mother: It’s not healthy dear!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to discriminate /ə/ and /ɜ:/ in food and nutrition texts.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['burger', 'water', 'butter', 'soup', 'fresh'],
            targetGrammar: 'Present continuous: "We are having..."',
            phonicsOrLetters: '/ə/ vs /ɜ:/ sound contrast',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to classify healthy food in a team relay race.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['apple', 'carrot', 'fish', 'milk', 'water'],
            targetGrammar: 'Healthy vs Unhealthy categorization.',
            phonicsOrLetters: 'Team sorting competition',
            gameType: 'Healthy Food Basket Relay Game',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete a Healthy Lunch Menu in cursive handwriting.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['Vegetable soup and fresh fruit are healthy.'],
            targetGrammar: 'Connected cursive handwriting and punctuation.',
            phonicsOrLetters: 'Cursive writing flow',
            formType: 'My Healthy Lunch Plate Planner',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play ordering healthy meals at the canteen.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['can I have', 'here you are', 'thank you'],
            targetGrammar: 'Polite requests: "Can I have an apple, please?"',
            phonicsOrLetters: 'Polite intonation',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Health',
        communicativeObjectives: [
          'Name body parts (head, shoulders, knees, toes, legs, arms)',
          'Ask and answer questions about common health problems',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name body parts and express common ailments.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['toothache', 'headache', 'stomachache', 'flu', 'brush teeth', 'sweets', 'dentist'],
            targetGrammar: 'What’s wrong? I have a terrible toothache. Brush your teeth after each meal, and stop eating sweets.',
            phonicsOrLetters: 'Voiceless dental fricative /θ/ in: tooth, teeth, bath, health',
            authenticScript:
              'Razane doesn’t feel well in class.\nThe teacher: What’s wrong, Razane?\nRazane: I don’t feel well, I have a terrible toothache.\nThe teacher: Brush your teeth after each meal, and stop eating sweets.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to decode words with the sound /θ/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['tooth', 'teeth', 'bath', 'health', 'three'],
            targetGrammar: 'Imperative advice: "Brush your teeth!", "Stop eating sweets!"',
            phonicsOrLetters: 'Sound /θ/ spelt "th"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to practice health vocabulary through physical drama games.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['head', 'tooth', 'tummy', 'doctor'],
            targetGrammar: 'Simon Says with health commands.',
            phonicsOrLetters: 'Kinesthetic matching',
            gameType: 'Dr. DidactiPlan Hospital Role Play Game',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete a Doctor’s Advice Slip in cursive handwriting.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['Brush your teeth every day.'],
            targetGrammar: 'Imperative sentence structure and cursive style.',
            phonicsOrLetters: 'Cursive writing practice',
            formType: 'Health Advice Prescription Card',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play doctor-patient consultations.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['what’s wrong', 'I have a headache', 'rest in bed'],
            targetGrammar: 'Consultation dialogue: "What’s the matter?" "I have a headache."',
            phonicsOrLetters: 'Empathetic caring tone',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 5,
    sequenceTitle: 'Animals',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Farm Animals',
        communicativeObjectives: [
          'Name animals in the farm',
          'Ask and answer questions about animals (name, food, body parts, size, colour)',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name farm animals and describe what they eat.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['farm', 'horse', 'rabbit', 'chicken', 'chicks', 'fur', 'grains', 'grass', 'strong', 'beautiful'],
            targetGrammar: 'Look at the animals in the farm. What is your favourite one? I love the horse. Do they eat grass? No, they eat grains.',
            phonicsOrLetters: 'Review of previously studied consonant and vowel contrasts',
            authenticScript:
              'The Mabrouk’s family are visiting their grandfather’s farm.\nDad: Look at the animals in the farm. What is your favourite one, Rafik?\nRafik: I love the horse. It is strong and beautiful.\nMeriem: I prefer the rabbit. Its fur is beautiful.\nMom: Look at the chicken and its chicks.\nMeriem: Do they eat grass?\nDad: No, they eat grains.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to read descriptive sentences about farm animals.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['horse', 'rabbit', 'grains', 'grass', 'farm'],
            targetGrammar: 'Present simple questions with "Do they eat...?"',
            phonicsOrLetters: 'Decoding multi-syllabic words: beau-ti-ful, a-ni-mals',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play animal sound and diet matching games.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['horse', 'cow', 'sheep', 'duck'],
            targetGrammar: 'Animal habitats and sounds.',
            phonicsOrLetters: 'Auditory and visual matching',
            gameType: 'Old MacDonald Farm Animal Sound Bingo',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write an animal description profile in cursive.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['The horse is strong and beautiful.'],
            targetGrammar: 'Adjective + noun in cursive handwriting.',
            phonicsOrLetters: 'Connected handwriting practice',
            formType: 'Farm Animal Identification Passport',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to act out visiting a farm in pairs.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['look at the animals', 'what is your favourite', 'I prefer'],
            targetGrammar: 'Expressing preferences and observations.',
            phonicsOrLetters: 'Curious enthusiastic prosody',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Zoo Animals',
        communicativeObjectives: [
          'Name animals in the zoo',
          'Ask and answer questions about animals (name, food, body parts, colour, size, habitat)',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective:
              'By the end of the lesson, the learner will be able to name wild zoo animals and describe their features.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['Hamma zoo', 'lion', 'zebra', 'stripes', 'fast', 'big', 'brown', 'cage', 'habitat'],
            targetGrammar: 'Look at those animals! I love the lion, it’s big and has a beautiful brown colour. Let’s take a picture! Cheese!',
            phonicsOrLetters: 'Consonant sound review /z/ in zebra, zoo vs /s/ in stripes',
            authenticScript:
              'The Mabrouk’s are in the Hamma zoo.\nDad: Look at those animals, Meriem! What’s your favourite?\nMeriem: I love the lion, it’s big and has a beautiful brown colour.\nRafik: My favourite is the zebra, I love its black and white stripes, it is fast.\nDad: Let’s take a picture! Cheese!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to decode animal descriptions with multiple adjectives.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['lion', 'zebra', 'stripes', 'fast', 'brown'],
            targetGrammar: 'Possessive "its": "I love its black and white stripes."',
            phonicsOrLetters: 'Consonant clusters: str- (stripes), bl- (black)',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play Zoo Animal Pictionary in teams.',
            outlineType: 'session3_read_enjoy',
            timingMinutes: 60,
            targetLexis: ['elephant', 'giraffe', 'lion', 'zebra'],
            targetGrammar: 'Adjectives of size and appearance.',
            phonicsOrLetters: 'Visual vocabulary competition',
            gameType: 'Hamma Zoo Animal Pictionary Race',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete a Zoo Animal Guidebook page in cursive.',
            outlineType: 'session4_read_write',
            timingMinutes: 60,
            targetLexis: ['The zebra has black and white stripes.'],
            targetGrammar: 'Connected handwriting with correct margins.',
            phonicsOrLetters: 'Joined cursive handwriting',
            formType: 'My Mini Zoo Album Page',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Play Roles',
            officialObjective:
              'By the end of the lesson, the learner will be able to role-play exploring the zoo and taking photos.',
            outlineType: 'session5_play_roles',
            timingMinutes: 60,
            targetLexis: ['smile', 'cheese', 'look at that', 'amazing'],
            targetGrammar: 'Exclamations and photography commands: "Say cheese!"',
            phonicsOrLetters: 'Expressive joyful tone',
          },
        ],
      },
    ],
  },
];
