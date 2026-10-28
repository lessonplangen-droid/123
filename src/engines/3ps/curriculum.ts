/**
 * DidactiPlan - ENGINE 1: 3PS (Foundation Engine)
 * Authoritative Curriculum Database for Third Year Primary (Key Stage 1).
 * Source: Algerian Ministry of National Education (CNP) Didactic Guide (2023)
 * & Official Listening Scripts 3PS.
 */

export interface PS3SessionData {
  sessionNumber: number;
  sessionTitle: string;
  officialObjective: string;
  outlineType: 'session1_listen_repeat' | 'session2_read_discover' | 'session3_read_write' | 'session4_play_roles';
  timingMinutes: number;
  targetLexis: string[];
  targetGrammar: string;
  phonicsOrLetters: string;
  authenticScript?: string;
  songOrChant?: string;
}

export interface PS3SectionData {
  sectionNumber: number;
  sectionTitle: string;
  communicativeObjectives: string[];
  sessions: PS3SessionData[];
}

export interface PS3SequenceData {
  sequenceNumber: number;
  sequenceTitle: string;
  sections: PS3SectionData[];
}

export const PS3_CURRICULUM_DATA: PS3SequenceData[] = [
  {
    sequenceNumber: 1,
    sequenceTitle: 'Family & Friends',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Family',
        communicativeObjectives: [
          'Introduce family members (family relationship and name)',
          'Ask and answer questions about name',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing and Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name and identify family members.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['father (dad)', 'mother (mum)', 'brother', 'sister', 'grandfather', 'grandmother'],
            targetGrammar: 'Who is it? It is my father/mother... / He is my father. / She is my mother.',
            phonicsOrLetters: 'Phonemic awareness: isolating /f/ (father), /m/ (mother), /b/ (brother)',
            authenticScript:
              'Sophia shows her pictures to her friend, Meriem.\nMeriem: Who is it?\nSophia: It’s my father.\nMeriem: What’s his name?\nSophia: His name is Omar.',
            songOrChant: 'The Family Finger Song: "Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?"',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to count from 0 to 10 and decode simple words.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['numbers 0-10: zero, one, two, three, four, five, six, seven, eight, nine, ten'],
            targetGrammar: 'Counting and pointing: "How many? One, two, three..."',
            phonicsOrLetters: 'Sounding numbers and letter-sound matching for numbers 0-10',
            authenticScript: 'Count with me: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! Ten little fingers on my hands.',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write capital and small (I-J-L-T-U / i-j-l-t-u) letters correctly.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['Family 1 letters: i, j, l, t, u', 'Capital: I, J, L, T, U'],
            targetGrammar: 'Personal pronoun subject "I" is always capital.',
            phonicsOrLetters: 'Letter Family 1 (represented by "l"): i, j, l, t, u (shaping, sizing, alignment)',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to ask and answer questions about family members.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['dad', 'mum', 'brother', 'sister', 'name'],
            targetGrammar: 'Dialogue exchange: "Who is it?" - "It’s my (dad/mum). What’s his/her name?" - "His/Her name is..."',
            phonicsOrLetters: 'Auditory intonation practice in Wh-questions and statements',
            authenticScript:
              'Pupil A: Who is it?\nPupil B: It is my brother.\nPupil A: What is his name?\nPupil B: His name is Anis.',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Friends',
        communicativeObjectives: [
          'Greet people and take leave',
          'Introduce oneself (name, age, language, and place of residence)',
          'Introduce a friend (name, age)',
          'Ask and answer questions about a friend’s name and age',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to greet others and introduce himself correctly.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['hello', 'hi', 'goodbye', 'friend', 'mate', 'years old', 'live in'],
            targetGrammar: 'Hello, my name’s Ali. I’m 8. I live in... I speak...',
            phonicsOrLetters: 'Vowel sound /i/ in: in, six, live, sit, big, pin, mix',
            authenticScript:
              'Anis is a new pupil. He wants to make new friends.\nAnis: Hello, my name’s Anis. I am 8. I live in Tamanrasset. I speak Arabic and Tamazight. What’s your name?\nSofiane: Hi! My name’s Sofiane.\nAnis: How old are you?\nSofiane: I’m 9.',
            songOrChant: 'Hello Song: "Hello, hello, what is your name? Nice to meet you today!"',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to read words that contain the sound /i/ correctly.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['in', 'six', 'live', 'sit', 'big', 'pin', 'mix'],
            targetGrammar: 'Decoding short CVC words: consonant-vowel-consonant.',
            phonicsOrLetters: 'Short vowel sound /i/ spelt "i"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase and lowercase letters with proper left-to-right orientation.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['I, J, L, T, U', 'name', 'age'],
            targetGrammar: 'Proper capitalization for initials and names of people.',
            phonicsOrLetters: 'Print style letter formation, sizing between four-line guidelines',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to ask and answer questions about a friend’s name and age.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['friend', 'name', 'eight', 'nine'],
            targetGrammar: 'Role play: "What’s your name?" "My name’s..." "How old are you?" "I’m..."',
            phonicsOrLetters: 'Rising intonation in yes/no and falling intonation in wh-questions',
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
        sectionTitle: 'School Objects',
        communicativeObjectives: [
          'Name different classroom objects and colours',
          'Locate classroom objects',
          'Ask and answer questions about school objects and their colours',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name and identify school supplies and colours.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['pen', 'pencil', 'book', 'eraser', 'chair', 'table', 'bag', 'brush', 'blue', 'red', 'green'],
            targetGrammar: 'What’s this? It’s a pen. / What colour is your bag? It’s blue.',
            phonicsOrLetters: 'Consonant sound discrimination /b/ (bag, book, blue) vs /p/ (pen, pencil)',
            authenticScript:
              'The teacher revises the school objects with her pupils.\nThe teacher: What’s this?\nFarid: It’s a pen.\nThe teacher: Where’s the brush, Imène?\nImène: It’s on your desk, Miss.\nThe teacher: What colour is your bag, Kamel?\nKamel: It’s blue, Miss.\nThe teacher: Thank you dear all.',
            songOrChant: 'School Objects Chant: "Pencil, paper, book and pen, let’s get ready to learn again!"',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to decode written labels for school objects.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['pen', 'brush', 'blue', 'bag', 'book'],
            targetGrammar: 'Demonstrative "this" and prepositions: on, in, under.',
            phonicsOrLetters: 'Decoding initial consonant sounds /p/ vs /b/',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write Family 2 letters (b, h, k, m, r) in print style.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['b, h, k, m, r', 'bag', 'pen'],
            targetGrammar: 'Letter formation: Family 2 (represented by "r"): b, h, k, m, r.',
            phonicsOrLetters: 'Sizing, spacing and alignment of clockwise letters',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to ask and answer questions about school objects.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['pen', 'eraser', 'desk', 'where'],
            targetGrammar: 'Dialogue: "Where’s my ruler?" "It’s on the desk."',
            phonicsOrLetters: 'Expressive classroom commands and polite replies',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'School Subjects',
        communicativeObjectives: [
          'Name different school subjects and days of the week',
          'Identify different school subjects and days of the week',
          'Ask and answer questions about school subjects and days of the week',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name school subjects and days of the week.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['Arabic', 'English', 'Maths', 'French', 'Monday', 'Tuesday', 'Wednesday'],
            targetGrammar: 'When do you have Maths? I have Maths on Monday morning.',
            phonicsOrLetters: 'Sound /ʌ/ in under, number, Monday',
            authenticScript:
              'Kamel’s father asks him about his school subjects.\nThe father: When do you have Maths, Kamel?\nKamel: I have Maths on Monday morning, dad.\nThe father: Alright son!',
            songOrChant: 'Days of the Week Song: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday!"',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to decode the vowel sound /ʌ/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['Maths', 'Monday', 'morning', 'under', 'number'],
            targetGrammar: 'Preposition of time "on" with days of the week.',
            phonicsOrLetters: 'Vowel sound /ʌ/ spelt "u"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase letters B, H, K, M.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['B, H, K, M', 'Monday'],
            targetGrammar: 'Days of the week are always capitalized.',
            phonicsOrLetters: 'Uppercase print letter formation on lined paper',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to role-play timetable inquiries.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['English', 'Maths', 'Monday', 'Friday'],
            targetGrammar: 'Pair conversation: "When do you have English?" "On Tuesday."',
            phonicsOrLetters: 'Conversational rhythm and cadence',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 3,
    sequenceTitle: 'Home',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Describing a House',
        communicativeObjectives: [
          'Name different rooms in a flat/house',
          'Identify different rooms in a flat/house',
          'Ask and answer questions about rooms in a flat/house',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name and identify rooms in a house.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['bedroom', 'kitchen', 'living room', 'dining room', 'bathroom', 'garden'],
            targetGrammar: 'In my house, there is a garden. / There are two bedrooms.',
            phonicsOrLetters: 'Initial sounds /h/ (house), /k/ (kitchen), /b/ (bedroom)',
            authenticScript:
              'Ali describes his house to his classmates.\nAli: In my house, there is a garden.\nKarim: Is there a swimming pool in your house?\nAli: No, there isn’t. There are two bedrooms, a dining room and a bathroom.\nKarim: Lovely!',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to decode room names.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['house', 'garden', 'bedroom', 'bathroom'],
            targetGrammar: 'There is / There are singular vs plural.',
            phonicsOrLetters: 'Sight recognition of house vocabulary',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write lowercase letters n, p, r.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['n, p, r', 'room', 'pen'],
            targetGrammar: 'Print letter mechanics.',
            phonicsOrLetters: 'Letter family 2: n, p, r',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to describe rooms in a dialogue.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['house', 'kitchen', 'garden'],
            targetGrammar: 'Is there a garden? Yes, there is. / No, there isn’t.',
            phonicsOrLetters: 'Yes/No intonation contour',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Locating Rooms in a House',
        communicativeObjectives: [
          'Locate people in a flat/house',
          'Locate different rooms in a flat/house',
          'Ask and answer questions about people in a house',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to locate people and rooms in a house.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['next to', 'opposite', 'in', 'dining room', 'bathroom'],
            targetGrammar: 'Where is Ali? He is in his room. It’s next to the dining room.',
            phonicsOrLetters: 'Consonant sound discrimination: /p/ (pen) vs /b/ (Ben)',
            authenticScript:
              'Karim visits Ali at home because he is sick. He is talking to Ali’s mum.\nKarim: Hi, aunty. I am here to see Ali. Where is he?\nAli’s mum: He is in his room.\nKarim: Where’s his room?\nAli’s mum: It’s here, next to the dining room and opposite to the bathroom. Come in please.\nKarim: Thanks a lot.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to discriminate /p/ and /b/ in context.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['pen', 'Ben', 'pet', 'bet', 'pin', 'bin'],
            targetGrammar: 'Prepositions of location: next to, opposite.',
            phonicsOrLetters: '/p/ vs /b/ minimal pairs',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase letters N, P, R.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['N, P, R', 'room', 'next to'],
            targetGrammar: 'Proper letter sizing and spacing.',
            phonicsOrLetters: 'Uppercase N, P, R in print style',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to locate family members in a dialogue.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['where', 'kitchen', 'bedroom', 'in'],
            targetGrammar: 'Where is Mum? She is in the kitchen.',
            phonicsOrLetters: 'Stress and intonation in prepositions',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 4,
    sequenceTitle: 'Playtime',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Toys',
        communicativeObjectives: ['Name toys', 'Identify different toys', 'Ask and answer questions about toys'],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name and identify common toys.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['robot', 'doll', 'ball', 'bike', 'car', 'kite', 'computer', 'train'],
            targetGrammar: 'What’s this toy? It’s a robot. Have you got toys? Yes, I have got a doll.',
            phonicsOrLetters: 'Phonemic awareness: initial sounds of toys /r/, /d/, /b/',
            authenticScript:
              'Amina is in Leila’s home. They are playing with toys.\nAmina: What’s this toy, Leila?\nLeila: It’s a robot. Have you got toys?\nAmina: Yes, I’ve got a nice doll. It’s name is Fulla.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to decode toy names in simple text.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['robot', 'doll', 'ball', 'train'],
            targetGrammar: 'Have you got... / I have got a...',
            phonicsOrLetters: 'Decoding CVC words: bat, cat, dog',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write Family 3 anticlockwise letters: c, a, d, e, g.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['c, a, d, e, g', 'car', 'doll'],
            targetGrammar: 'Anticlockwise pencil strokes starting from 2 o’clock position.',
            phonicsOrLetters: 'Letter Family 3: c, a, d, e, g',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to role-play toy sharing.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['robot', 'doll', 'nice', 'play'],
            targetGrammar: 'Dialogue: "Have you got a car?" "Yes, I have. Here you are."',
            phonicsOrLetters: 'Polite intonation',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Favourite Toy',
        communicativeObjectives: [
          'Name favourite toys and their colours',
          'Identify different toys and their colours',
          'Ask and answer questions about someone’s favourite toy and colour',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to state favourite toy and colour.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['black', 'white', 'blue', 'green', 'red', 'yellow', 'brown', 'car', 'ball'],
            targetGrammar: 'What’s your favourite toy? My favourite toy is a car. What’s its colour? It’s black.',
            phonicsOrLetters: 'Short vowel sound /æ/ in black, bag, cat',
            authenticScript:
              'Amina and Leila are talking about their favourite toys.\nAmina: What’s your favourite toy, Leila?\nLeila: My favourite toy is a car.\nAmina: What’s its colour?\nLeila: It’s black.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to identify words with vowel sound /æ/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['black', 'bag', 'cat', 'hat'],
            targetGrammar: 'Vowel sound /æ/ spelt "a".',
            phonicsOrLetters: '/æ/ sound discrimination',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase letters C, A, D, E, G.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['C, A, D, E, G', 'black', 'bag'],
            targetGrammar: 'Uppercase letter formation Family 3.',
            phonicsOrLetters: 'Print UPPERCASE letters: C, A, D, E, G',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to act out favourite toy dialogues.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['favourite', 'toy', 'colour'],
            targetGrammar: 'Dialogue exchange with substitution.',
            phonicsOrLetters: 'Natural expressive prosody',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 5,
    sequenceTitle: 'Pets',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Pets',
        communicativeObjectives: ['Name pets', 'Identify pets', 'Ask and answer questions about pet names'],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name and identify common household pets.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['pet', 'cat', 'dog', 'canary', 'chick', 'lamb', 'goldfish'],
            targetGrammar: 'Have you got a pet? Yes, I have. What is it? It’s a cat. What is its name? Its name is Missa.',
            phonicsOrLetters: 'Sounding initial letters /k/ (cat, canary), /d/ (dog)',
            authenticScript:
              'Faiza and Nabila are talking about their pets.\nFaiza: Have you got a pet, Nabila?\nNabila: Yes, I have got one.\nFaiza: What is it?\nNabila: It’s a cat.\nFaiza: Oh, I love cats! What is its name?\nNabila: Its name is Missa.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to read pet names and match pictures.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['cat', 'dog', 'pet', 'canary'],
            targetGrammar: 'Have you got a pet? Yes, I have. / No, I haven’t.',
            phonicsOrLetters: 'Decoding CVC pet words',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write lowercase letters o, q, f, s.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['o, q, f, s', 'dog', 'pet'],
            targetGrammar: 'Print lowercase letter formation.',
            phonicsOrLetters: 'Family 3 extension: o, q, f, s',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to perform dialogues about pets.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['cat', 'dog', 'name'],
            targetGrammar: 'Role play: introducing a pet to a friend.',
            phonicsOrLetters: 'Empathy and warm communicative intonation',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Pet’s Body Parts',
        communicativeObjectives: [
          'Name the pets’ body parts',
          'Identify the pets’ body parts',
          'Ask and answer questions about the pets’ body parts',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name pet body parts and features.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['tail', 'hair', 'bill', 'feather', 'fin', 'long', 'short', 'big', 'small', 'brown eyes'],
            targetGrammar: 'It has got a long tail and brown eyes.',
            phonicsOrLetters: 'Short vowel sound /ɒ/ in on, dog, spot',
            authenticScript:
              'Faiza: Have you got a pet?\nNabila: Yes, I have got a dog. Its name is Rocky. It has got a long tail and brown eyes.',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to identify the sound /ɒ/ spelt "o".',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['dog', 'Rocky', 'got', 'on', 'spot'],
            targetGrammar: 'Has got + adjective + noun.',
            phonicsOrLetters: 'Vowel sound /ɒ/ spelt "o"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase letters O, Q, F, S.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['O, Q, F, S', 'Rocky', 'Dog'],
            targetGrammar: 'Proper letter proportions and spacing on lines.',
            phonicsOrLetters: 'Uppercase print style: O, Q, F, S',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to describe pet body features in pairs.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['tail', 'eyes', 'ears', 'long', 'small'],
            targetGrammar: 'What has it got? It has got...',
            phonicsOrLetters: 'Pair dialogue substitution',
          },
        ],
      },
    ],
  },
  {
    sequenceNumber: 6,
    sequenceTitle: 'Fancy Birthday',
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: 'Party Invitation',
        communicativeObjectives: [
          'Express offers and invitations',
          'Express and respond to thanks',
          'Ask and answer questions about a party (time)',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to express birthday party invitations and times.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['birthday', 'guests', 'invitation', 'party', 'Saturday', 'at ten', 'welcome'],
            targetGrammar: 'My birthday is on Saturday. You are my guests! What time is your birthday party? It’s at ten.',
            phonicsOrLetters: 'Short vowel sound /e/ in ten, pen, red',
            authenticScript:
              'Rabia invites her school mates for her birthday.\nRabia: My birthday is on Saturday. You are my guests, colour your faces for the party!\nMeriem: What time is your birthday party, Rabia?\nRabia: It’s at ten.\nSophia: Ok, thank you.\nRabia: My pleasure.',
            songOrChant: 'Happy Birthday to you chant',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to decode words with vowel sound /e/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['ten', 'pen', 'red', 'bed', 'guest'],
            targetGrammar: 'Preposition of time "at" with clock hours.',
            phonicsOrLetters: 'Vowel sound /e/ spelt "e"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write Family 4 diagonal letters: v, w, x, y, z.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['v, w, x, y, z', 'ten', 'six'],
            targetGrammar: 'Diagonal line stroke control.',
            phonicsOrLetters: 'Family 4 letters: v, w, x, y, z',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to role-play inviting a friend to a party.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['party', 'Saturday', 'at two', 'thank you', 'my pleasure'],
            targetGrammar: 'Offers & Thanks: "Thank you" - "My pleasure / You’re welcome."',
            phonicsOrLetters: 'Warm social intonation',
          },
        ],
      },
      {
        sectionNumber: 2,
        sectionTitle: 'Party Celebration',
        communicativeObjectives: [
          'Name different objects and foods related to a party',
          'Express wishes, feelings and emotions with simple words',
        ],
        sessions: [
          {
            sessionNumber: 1,
            sessionTitle: 'I Sing & Have Fun / I Listen & Repeat',
            officialObjective: 'By the end of the lesson, the learner will be able to name party foods and express birthday wishes.',
            outlineType: 'session1_listen_repeat',
            timingMinutes: 60,
            targetLexis: ['cake', 'candles', 'drinks', 'juice', 'candies', 'happy', 'excited', 'have fun'],
            targetGrammar: 'Happy birthday! Please, join us and have a drink and cakes. Great! Let’s have fun!',
            phonicsOrLetters: 'Consonant sound discrimination: /f/ (fan, fun) vs /v/ (van)',
            authenticScript:
              'Meriem: Happy birthday!\nRabia: Please, join us and have a drink and cakes.\nMeriem: Great! let’s have fun!',
            songOrChant: 'Happy Birthday Celebration Song',
          },
          {
            sessionNumber: 2,
            sessionTitle: 'I Read & Discover',
            officialObjective: 'By the end of the lesson, the learner will be able to discriminate consonant sounds /f/ and /v/.',
            outlineType: 'session2_read_discover',
            timingMinutes: 60,
            targetLexis: ['fan', 'van', 'fun', 'five', 'have'],
            targetGrammar: 'Imperative offers: "Please, help yourself. / Have a drink."',
            phonicsOrLetters: '/f/ spelt "f" vs /v/ spelt "v"',
          },
          {
            sessionNumber: 3,
            sessionTitle: 'I Read & Write',
            officialObjective: 'By the end of the lesson, the learner will be able to write uppercase letters V, W, X, Y, Z.',
            outlineType: 'session3_read_write',
            timingMinutes: 60,
            targetLexis: ['V, W, X, Y, Z', 'Fun', 'Have'],
            targetGrammar: 'Print uppercase Family 4.',
            phonicsOrLetters: 'Uppercase print: V, W, X, Y, Z',
          },
          {
            sessionNumber: 4,
            sessionTitle: 'I Play Roles',
            officialObjective: 'By the end of the lesson, the learner will be able to act out birthday celebration exchanges.',
            outlineType: 'session4_play_roles',
            timingMinutes: 60,
            targetLexis: ['happy birthday', 'cakes', 'fun'],
            targetGrammar: 'Dialogue: "Happy birthday!" "Thank you! Please have some cake."',
            phonicsOrLetters: 'Joyful prosody and peer bonding',
          },
        ],
      },
    ],
  },
];
