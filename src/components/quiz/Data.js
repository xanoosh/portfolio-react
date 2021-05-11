const Data = {
  CATEGORIES: [
    { title: 'all', value: '' },
    { title: 'general knowledge', value: '&category=9' },
    { title: 'books', value: '&category=10' },
    { title: 'film', value: '&category=11' },
    { title: 'music', value: '&category=12' },
    { title: 'Musicals & Theatres', value: '&category=13' },
    { title: 'Television', value: '&category=14' },
    { title: 'Video Games', value: '&category=15' },
    { title: 'Board Games', value: '&category=16' },
    { title: 'Science & Nature', value: '&category=17' },
    { title: 'Computers', value: '&category=18' },
    { title: 'Mathematics', value: '&category=19' },
    { title: 'Mythology', value: '&category=20' },
    { title: 'Sports', value: '&category=21' },
    { title: 'Geography', value: '&category=22' },
    { title: 'History', value: '&category=23' },
    { title: 'Politics', value: '&category=24' },
    { title: 'Art', value: '&category=25' },
    { title: 'Celebrities', value: '&category=26' },
    { title: 'Animals', value: '&category=27' },
    { title: 'Vehicles', value: '&category=28' },
    { title: 'Comics', value: '&category=29' },
    { title: 'Gadgets', value: '&category=30' },
    { title: 'Anime & Manga', value: '&category=31' },
    { title: 'Cartoon & Animation', value: '&category=32' },
  ],
  DIFFICULTY: [
    { title: 'all', value: '' },
    { title: 'easy', value: '&difficulty=easy' },
    { title: 'medium', value: '&difficulty=medium' },
    { title: 'hard', value: '&difficulty=hard' },
  ],
  NUMBEROFQUESTIONS: [
    { title: 10, value: 'amount=10' },
    { title: 20, value: 'amount=20' },
    { title: 30, value: 'amount=30' },
    { title: 40, value: 'amount=40' },
  ],
  TESTRESPONSEDATA: [
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'The crown of the Empire State Building was originally built for what purpose?',
      correct_answer: 'Airship Dock',
      incorrect_answers: ['Lightning Rod', 'Antennae', 'Flag Pole'],
    },
    {
      category: 'Entertainment: Television',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which of these characters in &quot;Stranger Things&quot; has the power of Telekinesis?',
      correct_answer: 'Eleven',
      incorrect_answers: ['Mike', 'Lucas', 'Karen'],
    },
    {
      category: 'Geography',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What is the Finnish word for &quot;Finland&quot;?',
      correct_answer: 'Suomi',
      incorrect_answers: ['Eesti', 'Magyarorsz&aacute;g', 'Sverige'],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which restaurant&#039;s mascot is a clown?',
      correct_answer: 'McDonald&#039;s',
      incorrect_answers: ['Whataburger', 'Burger King', 'Sonic'],
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'In &quot;Toriko&quot;, which of the following foods is knowingly compatible with Toriko?',
      correct_answer: 'Poison Potato',
      incorrect_answers: ['Mors Oil', 'Alpacookie', 'Parmesansho Fruit'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'Which of these is not a DLC vehicle in &quot;Mario Kart 8&quot;?',
      correct_answer: 'Wild Wiggler',
      incorrect_answers: ['Bone Rattler', 'B Dasher', '300 SL Roadster'],
    },
    {
      category: 'Entertainment: Board Games',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'The board game &quot;Ra&quot; was designed by which designer? ',
      correct_answer: 'Reiner Knizia',
      incorrect_answers: ['Bruno Cathala', 'Uwe Rosenburg', 'Allison Kline'],
    },
    {
      category: 'Entertainment: Comics',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'What is the real name of the &quot;Master Of Magnetism&quot; Magneto?',
      correct_answer: 'Max Eisenhardt',
      incorrect_answers: [
        'Charles Xavier',
        'Pietro Maximoff',
        'Johann Schmidt',
      ],
    },
  ],
};

export default Data;
