/**
 * DidactiPlan - ENGINE 3: 5PS (Consolidation Engine)
 * Authoritative Curriculum Database for Fifth Year Primary (Key Stage 3).
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide 5PS (2024)
 * & Official Listening Scripts and Reading Passages 5PS.
 */

export interface PS5SessionData {
  sessionNumber: number;
  sessionTitle: string;
  officialObjective: string;
  outlineType:
    | 'session1_get_ready'
    | 'session2_listen_interact'
    | 'session3_listen_discover'
    | 'session4_read_understand'
    | 'session5_read_discover'
    | 'session6_learn_enjoy'
    | 'session7_learn_to_write'
    | 'session8_write'
    | 'session8_check_progress';
  timingMinutes: number; // Strictly 45 min
  targetLexis: string[];
  targetGrammar: string;
  phonicsOrSounds?: string;
  phonicsOrLetters?: string;
  authenticScript?: string;
  readingPassage?: string;
  problemSituation?: string;
  writingFormPrompt?: string;
}

export interface PS5SectionData {
  sectionNumber: number;
  sectionTitle: string;
  communicativeObjectives: string[];
  sessions: PS5SessionData[];
}

export interface PS5SequenceData {
  sequenceNumber: number;
  sequenceTitle: string;
  sections: PS5SectionData[];
}

export const PS5_CURRICULUM_DATA: PS5SequenceData[] = [
  {
    sequenceNumber: 1,
    sequenceTitle: 'Jobs, Occupations and Hobbies',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Jobs and Occupations',
        communicativeObjectives: [
          'Name / identify common jobs and occupations',
          'Ask and answer questions about family members and friends’ jobs and occupations',
          'Name / identify common places of work',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Get Ready (Initial Problem Solving Situation)',
            officialObjective:
              'By the end of the lesson, the learner will be able to face an initial problem-solving situation to express representations about jobs and hobbies.',
            outlineType: 'session1_get_ready',
            timingMinutes: 45,
            targetLexis: ['surgeon', 'hospital', 'pottery', 'sports', 'garage'],
            targetGrammar: 'Present simple: He is a surgeon. His favourite hobbies are...',
            phonicsOrLetters: 'Diagnostic sound and lexis recognition',
            authenticScript:
              'This is my father Djaouad. He is a surgeon at the hospital. His favourite hobbies are practising sports and making pottery in his garage.',
            readingPassage:
              'Uncle Sofiane is a manager in a sport club. He likes swimming and reading stories. He loves his job so much.',
            problemSituation:
              'Initial situation: Djamila introduces her father Djaouad and Uncle Sofiane. Learners carry out skimming, scanning, and form completion tasks.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify the gist (main idea) of the listening passage and interact orally.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['job', 'gendarme', 'manager', 'private company', 'e-pals'],
            targetGrammar: 'What’s your father’s job? He is a gendarme.',
            phonicsOrLetters: 'Sound discrimination: /ʒ/ vs /dʒ/',
            authenticScript:
              'Djawad and Jack are e-pals. Djawad introduces his family to Jack.\nDjawad: Let me introduce you to my family: mom, dad and my two sisters.\nJack: What’s your father’s job?\nDjawad: He is a gendarme.\nJack: Interesting! My father is a manager in a private company.',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate target structures (piece of language) of the listening script in oral context.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['teacher', 'doctor', 'dentist', 'mechanic', 'hospital', 'garage'],
            targetGrammar: 'Present simple (to be, to work): "What’s his job?" "He’s a mechanic. He works in a big garage."',
            phonicsOrLetters: 'Intonation: falling in Wh-questions, rising in yes/no questions',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read and identify gist of a short text and apply the target phonics /ʒ/ and /dʒ/.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['teacher', 'primary school', 'job', 'proud of her'],
            targetGrammar: 'Word order in simple sentences & subject-verb agreement.',
            phonicsOrLetters: 'Phonics: /ʒ/ (pleasure, television) vs /dʒ/ (just, age, judge)',
            readingPassage:
              'Jack’s mother is Jenny. She is a teacher in a primary school. She loves her job. Jack is proud of her.',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate target structures related to the previous text in written form.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['doctor', 'dentist', 'farmer', 'musician', 'school', 'hospital'],
            targetGrammar: 'Word order: Subject + Verb + Complement (She is a teacher in primary school). Question cards: Who? What? Where?',
            phonicsOrLetters: 'Word boundaries, capitalization, and punctuation',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to write and spell words with suffixes (-er, -or, -ist, -ian) through games.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['farmer', 'teacher', 'doctor', 'dentist', 'electrician'],
            targetGrammar: 'Word formation suffixes: -er, -or, -ist, -ian.',
            phonicsOrLetters: 'Dictation race, missing full stops, sentence anagrams',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write a short-written message of about 10 words using notes from a form (Pair work).',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['Name: Sophia', 'Job: journalist', 'Place: TV station', 'Hobbies: reading'],
            targetGrammar: 'Transforming notes into sentences and assembling into a paragraph.',
            phonicsOrLetters: 'Writing mechanics: capitalization, punctuation, spelling, SV agreement',
            writingFormPrompt: 'Name: Sophia | Job: journalist | Place of work: TV station | Hobbies: reading',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to individually produce a written message of about 10 words using notes from a form.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['Name', 'Job', 'Place of work', 'Hobbies'],
            targetGrammar: 'Independent drafting, proofreading, peer assessment, and reviewing.',
            phonicsOrLetters: 'Individual writing mechanics assessment',
            writingFormPrompt: 'Produce a 10-word paragraph about a family member’s job and workplace.',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Hobbies',
        communicativeObjectives: [
          'Identify / name different hobbies',
          'Identify / name family members and friends’ favourite hobbies',
          'Ask and answer questions about favourite hobbies',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify the gist of the conversation about hobbies and interact orally.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['reading books', 'stories', 'tales', 'enjoy', 'library'],
            targetGrammar: 'Do you like reading books? Yes, I enjoy reading stories and tales.',
            phonicsOrLetters: 'Nasal consonant sound /ŋ/ in playing, riding, swimming',
            authenticScript:
              'Amine and his mom are at the Library.\nAmine: Mom, I’m looking for this book.\nMom: I am happy for you! Do you like reading books?\nAmine: Yes, I enjoy reading stories and tales. They teach me lessons.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate verbs of preference + gerund (stem + ing) in oral context.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['playing football', 'riding a bike', 'painting', 'swimming', 'taking pictures'],
            targetGrammar: 'Present simple: to like / to love / to enjoy / to prefer + stem + ing (I like playing football in the park).',
            phonicsOrLetters: 'Intonation in exclamations: Fantastic!',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read a 25-word text about indoor hobbies and apply the sound /ŋ/.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['indoor hobbies', 'playing chess', 'creating collages', 'smart boy'],
            targetGrammar: 'Subject-verb agreement: He likes indoor hobbies. He prefers playing chess.',
            phonicsOrLetters: 'Sound /ŋ/ in playing, creating',
            readingPassage:
              'Jalal is my cousin. He is a smart boy. He likes indoor hobbies. He prefers playing chess, and creating collages.',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate preference structures in written tasks.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['like', 'love', 'enjoy', 'prefer', 'Saturday', 'at night'],
            targetGrammar: 'Prepositions: on Saturday, at night, in the park.',
            phonicsOrLetters: 'Substitution drill & Gap fill on subject-verb agreement',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to practice rhyming pairs and phonemic addition/deletion.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['ring -> bring', 'spot -> pot', 'cat -> hat', 'pen -> ten'],
            targetGrammar: 'Rhyming words and syllable division (clapping/tapping).',
            phonicsOrLetters: 'Adding and deleting phonemes / I Have, Who Has game',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write sentences about hobbies from a chart in cooperative groups.',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['hobby', 'favourite', 'weekend', 'park'],
            targetGrammar: 'Sentence building: Subject + Verb + Object + Prepositional phrase.',
            phonicsOrLetters: 'Writing mechanics checklist',
            writingFormPrompt: 'Name: Jalal | Hobby: Chess | Day: Saturday | Reason: Smart game',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write an individual 10-word message describing their favourite hobby.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['I love', 'I enjoy', 'in my free time'],
            targetGrammar: 'Independent paragraph construction.',
            phonicsOrLetters: 'Self-assessment of capitalization and full stops',
            writingFormPrompt: 'Write a short message about your favourite leisure activity.',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Check my Progress (Sequence 1 Assessment & Remediation)',
            officialObjective:
              'By the end of the lesson, the teacher checks global competence achievement using the initial situation evaluation grid.',
            outlineType: 'session8_check_progress',
            timingMinutes: 45,
            targetLexis: ['surgeon', 'manager', 'reading', 'pottery', 'hospital'],
            targetGrammar: 'Evaluation of oral interaction, written comprehension, and written production.',
            phonicsOrLetters: 'Comprehensive 4-criteria evaluation grid (D.G. page 55)',
            problemSituation:
              'Re-evaluating initial tasks (Task 1: Skimming listening; Task 2: Finding Djamila’s father; Task 3: Reading Uncle Sofiane; Task 4: Sophia paragraph).',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 2,
    sequenceTitle: 'Hometown / City / Village: Amenities, Directions & Signs',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Amenities',
        communicativeObjectives: [
          'Name / identify different amenities in city/hometown/village',
          'Ask and answer questions about different amenities and their location',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Get Ready (Initial Situation)',
            officialObjective:
              'By the end of the lesson, the learner will be introduced to a problem situation regarding town amenities and navigation.',
            outlineType: 'session1_get_ready',
            timingMinutes: 45,
            targetLexis: ['hotel', 'amenities', 'town hall', 'police station', 'school', 'park'],
            targetGrammar: 'Is there a hotel in this town? Go straight ahead, take the first turn on the right.',
            phonicsOrLetters: 'Sound recognition in town mapping context',
            authenticScript:
              'Akram: Excuse me! Is there a hotel in this town?\nRazane: Sure! My hometown is large. There are all amenities you need.\nAkram: Where is it? Can you show me the way, please?\nRazane: Go straight ahead, take the first turn on the right. It is next to the park.\nAkram: Thanks!\nRazane: Welcome!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify the gist of hometown amenities dialogue and locate places.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['hospital', 'park', 'post office', 'restaurant', 'cafeteria', 'florist’s', 'library'],
            targetGrammar: 'Is there a florist’s? Yes, there is. Where is it? It’s on Larbi Ben M’hidi road, between...',
            phonicsOrLetters: 'Sound contrast: /w/ (water, where) vs /j/ (yes, you)',
            authenticScript:
              'Amine describes his hometown to Jack.\nAmine: My hometown is big. You can find all amenities you need: a hospital, a park, a post office, a restaurant and a cafeteria.\nJack: Is there a florist’s?\nAmine: Yes, there is.\nJack: Where is it?\nAmine: It’s on Larbi Ben M’hidi road, between the cafeteria and the library.\nJack: That’s easy! Thank you.',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate spatial prepositions (between, in front of, next to, opposite) in oral speech.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['between', 'next to', 'opposite', 'in front of', 'petrol station', 'mall'],
            targetGrammar: 'There is / There are + Prepositions of location.',
            phonicsOrLetters: 'Intonation: Yes/No questions and exclamations (What a beautiful park!)',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read a 30-word text about hometown amenities and apply /w/ vs /j/.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['Roman ruins', 'post office', 'bank', 'invite', 'amenities'],
            targetGrammar: 'Simple sentences: "My house is not far from the Roman ruins. It is between the post office and the bank."',
            phonicsOrLetters: 'Sound /j/ in yes, young vs /w/ in when, what, water',
            readingPassage:
              'My hometown is big. You can find all amenities you need. I invite you to come. My house is not far from the Roman ruins. It is between the post office and the bank.',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to discover word order in location sentences.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['post office', 'bank', 'nearby', 'between'],
            targetGrammar: 'Word order: Subject + is + prepositional phrase (The post office is next to the bank).',
            phonicsOrLetters: 'Subject-verb agreement and punctuation',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete map puzzles and review punctuation symbols.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['map', 'street', 'park', 'hospital'],
            targetGrammar: 'Commas in a series (a hospital, a park, a post office).',
            phonicsOrLetters: 'Sentence snake, slap the board for punctuation marks',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write a 15-word paragraph describing amenities on a map (Pair work).',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['Town: Cherchell', 'Amenities: museum, port, garden', 'Location: near the sea'],
            targetGrammar: 'Writing mechanics: Capitalization of Algerian city and street names.',
            phonicsOrLetters: 'Connecting notes into cohesive prose',
            writingFormPrompt: 'Town: Tipaza | Famous place: Roman ruins | Location: near the sea',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to individually write a 15-word description of their own hometown amenities.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['hometown', 'park', 'school', 'next to'],
            targetGrammar: 'Solo paragraph drafting and peer editing.',
            phonicsOrLetters: 'Individual assessment of punctuation and capitalization',
            writingFormPrompt: 'Write 15 words about 2 amenities in your hometown and where they are.',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Directions and Signs',
        communicativeObjectives: [
          'Ask for and show the way to different amenities in city/hometown/village',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to understand directions and interact politely to ask for directions.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['toy shop', 'on the left', 'bookshop', 'florist’s', 'go down this road', 'first turn'],
            targetGrammar: 'Excuse me Sir, can you help me, please? Well, go down this road. Take the first turn on the left.',
            phonicsOrLetters: 'Intonation in polite requests and imperative instructions',
            authenticScript:
              'A passer-by is looking for a toy shop. He asks Nazim for the way.\nPasser by: Excuse me Sir, can you help me, please?\nNazim: Yes, of course!\nPasser by: Is there a toy shop nearby?\nNazim: Yes, there is.\nPasser by: Can you show the way, please?\nNazim: Well, go down this road. Take the first turn on the left. It is between the bookshop and the florist’s.\nPasser by: Thank you!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate the imperative mood (go, turn, cross) in oral navigation.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['go straight ahead', 'turn left', 'turn right', 'cross the street', 'pedestrian crossing'],
            targetGrammar: 'Imperatives: Go straight ahead. Turn left. Cross at the pedestrian crossing.',
            phonicsOrLetters: 'Modal "can" for polite requests: "Can you show me the way, please?"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read a 35-word dialogue giving directions and scan for street names.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['post office', 'pedestrian crossing', 'corner of Hassiba Benbouali road and Ali Ammari'],
            targetGrammar: 'Word order in requests and directional instructions.',
            phonicsOrLetters: 'Sound review /ð/ in the, that and /ʃ/ in crossing',
            readingPassage:
              'Passer by: Excuse me Madam, can you show the way to the post office, please?\nHiba: Yes, of course. Well, go up this road. Cross at the pedestrian crossing. It is at the corner of Hassiba Benbouali road and Ali Ammari.\nPasser by: Oh, that’s easy. Thank you!',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate written directional syntax.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['go ahead', 'turn left', 'take the second turning'],
            targetGrammar: 'Instructional syntax and ordinal numbers (first, second turning).',
            phonicsOrLetters: 'Sentence anagram: Reordering scrambled navigation directions',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to navigate a floor maze game using directional commands.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['straight', 'left', 'right', 'stop', 'cross'],
            targetGrammar: 'Imperatives in team games.',
            phonicsOrLetters: 'Blindfold Robot Navigator Game',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to complete a directional dialogue from a map in pairs.',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['Excuse me', 'straight ahead', 'between the library and mosque'],
            targetGrammar: 'Transforming a map path into written dialogue lines.',
            phonicsOrLetters: 'Punctuation: question mark, exclamation mark, full stop',
            writingFormPrompt: 'Map: Main street -> Toy shop between Library and Mosque',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write written directions (about 15 words) from school to a nearby landmark.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['go straight', 'turn right', 'opposite the school'],
            targetGrammar: 'Independent drafting and proofreading of instructions.',
            phonicsOrLetters: 'Writing mechanics checklist',
            writingFormPrompt: 'Write directions from the school gate to the nearest pharmacy or park.',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Check my Progress (Sequence 2 Assessment & Remediation)',
            officialObjective:
              'By the end of the lesson, the teacher assesses achievement of Sequence 2 target competences using evaluation grid.',
            outlineType: 'session8_check_progress',
            timingMinutes: 45,
            targetLexis: ['amenities', 'directions', 'hotel', 'park', 'bookshop'],
            targetGrammar: 'Evaluation of navigation discourse and map comprehension.',
            phonicsOrLetters: 'Formative scoring against Didactic Guide standards',
            problemSituation:
              'Evaluation tasks: Listening to Akram locating hotel on map; Reading Mohamed & Ania bookshop dialogue; Writing Meriem & Nazim toy shop conversation.',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 3,
    sequenceTitle: 'Holidays and Travelling',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Holidays',
        communicativeObjectives: [
          'Name common places / destinations for holidays',
          'Ask and answer questions about destinations / places for holidays',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Get Ready (Initial Problem Solving Situation)',
            officialObjective:
              'By the end of the lesson, the learner will encounter an initial problem situation about vacation destinations.',
            outlineType: 'session1_get_ready',
            timingMinutes: 45,
            targetLexis: ['summer', 'Oran', 'mountains', 'beach', 'plane', 'car'],
            targetGrammar: 'Where are you going for holidays? I’m going to Oran. I like travelling by car.',
            phonicsOrLetters: 'Auditory and visual scanning of transport and places',
            authenticScript:
              'Sami: It’s summer!\nAsma: Where are you going for holidays?\nSami: I’m going to Oran.\nAsma: How do you like travelling?\nSami: I like travelling by car. I like taking photos of mountains. What about you?\nAsma: I prefer travelling by plane.',
            readingPassage:
              'It is winter. We are on holidays. It’s cold and snowy. A travel agency organizes a trip to The Djurdjura Mountains. We are travelling by bus. It’s cool! We want to play with snow, take photos and share them with friends.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify the gist of holiday conversations and express holiday plans.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['summer', 'holidays', 'beach', 'swimming', 'diving', 'sandcastles'],
            targetGrammar: 'Where are we going for holidays? We are going to the beach. Let’s enjoy our holidays!',
            phonicsOrLetters: 'Intonation: Exclamations (Waaaaaw! Great! Cool!)',
            authenticScript:
              'Sarah and her family are talking about holidays.\nSarah: Mom, dad! It’s summer! Where are we going for holidays?\nDad: We are going to the beach.\nAmine: Waaaaaw! I love swimming and diving.\nSarah: Great! I enjoy building sandcastles. Let’s enjoy our holidays!',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate the present continuous for future holiday plans.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['beach', 'mountain', 'seaside', 'camping', 'hotel', 'winter', 'spring', 'summer', 'autumn'],
            targetGrammar: 'Present continuous: am/is/are + stem + ing (We are going to the beach / I am spending my holidays in El Kala).',
            phonicsOrLetters: 'Full vs Contracted forms: We are -> We’re, I am -> I’m',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read a 40-word text about Algerian tourist destinations and scan for details.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['El Kala', 'east', 'mountains', 'forests', 'parks', 'hotel', 'seaside'],
            targetGrammar: 'Wh-question: Where are you going for holidays? In the east of the country.',
            phonicsOrLetters: 'Silent reading for skimming and chart completion for scanning',
            readingPassage:
              'My country, Algeria, is beautiful. I am going to El Kala for holidays. It is in the east of the country. There are nice places to visit: beaches, mountains, forests and parks. We are staying in a nice hotel near the beach.',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to analyze present continuous sentence structure in written context.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['staying', 'spending', 'visiting', 'travelling'],
            targetGrammar: 'Subject-verb agreement: I am spending / We are staying in a nice hotel.',
            phonicsOrLetters: 'Grammar discovery cards: Who? Where? How?',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play Algerian destination trivia and spelling games.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['Oran', 'Ghardaia', 'Djurdjura', 'El Kala', 'Taghit', 'Algiers'],
            targetGrammar: 'Proper nouns of Algerian wilayas and geographical features.',
            phonicsOrLetters: 'Tourist Agency Travel Quiz Game',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write a 20-word paragraph from a holiday chart (Pair work).',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['Season: Autumn', 'Weather: Windy', 'Destination: Leisure park', 'Transport: Bike', 'Activity: Fly kite'],
            targetGrammar: 'Coordinating sentences with "and" and prepositional time phrases.',
            phonicsOrLetters: 'Paragraph assembly: Linking 3 sentences into a coherent text',
            writingFormPrompt: 'Season: Autumn | Weather: Windy | Destination: Leisure park | Transport: Bike | Activity: Fly my kite',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to produce an individual 20-word paragraph describing their dream holiday.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['destination', 'season', 'weather', 'activity', 'hotel'],
            targetGrammar: 'Independent composition, proofreading, and gallery walk presentation.',
            phonicsOrLetters: 'Exit ticket and self-evaluation checklist',
            writingFormPrompt: 'Write about where you want to go for spring or summer holidays in Algeria.',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Travelling',
        communicativeObjectives: [
          'Name / identify different means of transportation',
          'Ask and answer questions about favourite way of travelling',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Listen & Interact',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify gist of travel dialogues and state transport preferences.',
            outlineType: 'session2_listen_interact',
            timingMinutes: 45,
            targetLexis: ['countryside', 'train', 'plane', 'fabulous', 'taking pictures', 'smile'],
            targetGrammar: 'Do you like travelling by train? It is fabulous! I prefer travelling by plane.',
            phonicsOrLetters: 'Prepositions: by train, by plane, by car, on foot',
            authenticScript:
              'It’s spring holidays. Mary and her brother John are going to the countryside with their parents.\nMary: John, do you like travelling by train?\nJohn: It is fabulous!\nMary: I prefer travelling by plane.\nJohn: Look, I am taking pictures. Smile!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Listen & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to manipulate questions: "How do you like travelling?" in speech.',
            outlineType: 'session3_listen_discover',
            timingMinutes: 45,
            targetLexis: ['car', 'plane', 'bike', 'boat', 'train', 'metro', 'bus'],
            targetGrammar: 'How do you like travelling? I like travelling by car. Do you like travelling by bus? No, I don’t. I prefer...',
            phonicsOrLetters: 'Intonation: Exclamation (Oh! Really!)',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Understand',
            officialObjective:
              'By the end of the lesson, the learner will be able to read a 40-word text about a trip to Ghardaia and scan for details.',
            outlineType: 'session4_read_understand',
            timingMinutes: 45,
            targetLexis: ['spring', 'weather', 'Ghardaia', 'bus', 'traditional market', 'souvenirs'],
            targetGrammar: 'Present continuous: "We are travelling by bus. We want to visit the traditional market."',
            phonicsOrLetters: 'Reading aloud in chunks with prosody',
            readingPassage:
              'It is spring. We are on holidays. The weather is fine. A travel agency organizes a trip to Ghardaia. We are travelling by bus. We want to visit the traditional market of Ghardaia and buy souvenirs.',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Read & Discover',
            officialObjective:
              'By the end of the lesson, the learner will be able to identify word order in travel questions and answers.',
            outlineType: 'session5_read_discover',
            timingMinutes: 45,
            targetLexis: ['travelling', 'bus', 'train', 'car'],
            targetGrammar: 'Subject-verb agreement: "I like travelling by car." / "Do you like travelling by car?"',
            phonicsOrLetters: 'Substitution and gap filling on MWBs',
          },
          {
            sessionNumber: 5,
            sessionTitle: 'I Learn & Enjoy',
            officialObjective:
              'By the end of the lesson, the learner will be able to play "I Have, Who Has" with transportation cards.',
            outlineType: 'session6_learn_enjoy',
            timingMinutes: 45,
            targetLexis: ['plane', 'train', 'bus', 'boat', 'ticket'],
            targetGrammar: 'Transportation chunks.',
            phonicsOrLetters: 'Rapid card loop communication game',
          },
          {
            sessionNumber: 6,
            sessionTitle: 'I Learn to Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to write a travel agency advertisement paragraph in groups.',
            outlineType: 'session7_learn_to_write',
            timingMinutes: 45,
            targetLexis: ['Trip to: Taghit', 'Transport: Bus', 'Stay: Desert camp', 'Activity: Camel riding'],
            targetGrammar: 'Assembling descriptive sentences into a commercial travel brochure.',
            phonicsOrLetters: 'Group drafting and proofreading',
            writingFormPrompt: 'Destination: Taghit | Means of transport: Bus | Activity: Camel riding and sand dunes',
          },
          {
            sessionNumber: 7,
            sessionTitle: 'I Write',
            officialObjective:
              'By the end of the lesson, the learner will be able to individually write a 20-word travel postcard.',
            outlineType: 'session8_write',
            timingMinutes: 45,
            targetLexis: ['Greetings from', 'We are in', 'We are travelling by', 'It is fabulous'],
            targetGrammar: 'Independent postcard composition using writing mechanics.',
            phonicsOrLetters: 'Exit ticket and self-reflection',
            writingFormPrompt: 'Write a 20-word postcard to a friend describing your holiday journey.',
          },
          {
            sessionNumber: 8,
            sessionTitle: 'I Check my Progress (End of Sequence 3 & End of Primary Exit Check)',
            officialObjective:
              'By the end of the lesson, the teacher checks global competence achievement across all 4 domains for primary graduation.',
            outlineType: 'session8_check_progress',
            timingMinutes: 45,
            targetLexis: ['holidays', 'travelling', 'destinations', 'means of transport'],
            targetGrammar: 'Comprehensive terminal assessment across oral, reading, and written domains.',
            phonicsOrLetters: 'Official Master Evaluation Grid Key Stage 3',
            problemSituation:
              'End-of-Primary Integration: Re-administering Djurdjura / Oran initial problem situation to evaluate 2-year cumulative gains.',
          },
        ],
      },
    ],
  },
];
