const situations = [
  {
    id: "doctor",
    title: "At the doctor",
    emoji: "🩺",
    level: "Listening & Speaking",
    description: "Practise asking for help and talking about a simple health problem.",

    voiceProfiles: {
      doctor: {
        pitch: 0.82,
        rate: 0.82
      },
      patient: {
        pitch: 1.18,
        rate: 0.88
      }
    },

    wordBank: [
      { id: "headache", word: "headache", imageKey: "headache" },
      { id: "doctor", word: "doctor", imageKey: "doctor" },
      { id: "patient", word: "patient", imageKey: "patient" },
      { id: "water", word: "water", imageKey: "water" },
      { id: "rest", word: "rest", imageKey: "rest" },
      { id: "help", word: "help", imageKey: "help" }
    ],

    conversation: [
      { speaker: "Doctor", role: "doctor", text: "Hello. How can I help you?" },
      { speaker: "Patient", role: "patient", text: "I have a headache." },
      { speaker: "Doctor", role: "doctor", text: "How long have you had it?" },
      { speaker: "Patient", role: "patient", text: "Since yesterday." },
      { speaker: "Doctor", role: "doctor", text: "You should rest and drink water." },
      { speaker: "Patient", role: "patient", text: "Thank you, doctor." }
    ],

    fixedExpressions: [
      { id: "hello-help", left: "Hello. How", right: "can I help you?" },
      { id: "have-headache", left: "I have", right: "a headache." },
      { id: "how-long", left: "How long have", right: "you had it?" },
      { id: "since-yesterday", left: "Since", right: "yesterday." },
      { id: "should-rest", left: "You should rest", right: "and drink water." },
      { id: "thank-doctor", left: "Thank you,", right: "doctor." },
      { id: "feel-well", left: "I don't", right: "feel well." },
      { id: "need-help", left: "I need", right: "some help." },
      { id: "drink-water", left: "You should", right: "drink water." },
      { id: "go-home", left: "You should", right: "go home and rest." }
    ],

    missingScenarios: [
      {
        id: "headache-yesterday",
        conversation: [
          { speaker: "Doctor", role: "doctor", text: "Hello. How can I help you?" },
          { speaker: "Patient", role: "patient", text: "I have a headache." },
          { speaker: "Doctor", role: "doctor", text: "How long have you had it?" },
          { speaker: "Patient", role: "patient", text: "Since yesterday." },
          { speaker: "Doctor", role: "doctor", text: "You should rest and drink water." },
          { speaker: "Patient", role: "patient", text: "Thank you, doctor." }
        ],
        gaps: [
          { id: "help", lineIndex: 0, before: "Hello. How can I", answer: "help", after: "you?" },
          { id: "headache", lineIndex: 1, before: "I have a", answer: "headache", after: "." },
          { id: "long", lineIndex: 2, before: "How", answer: "long", after: "have you had it?" },
          { id: "yesterday", lineIndex: 3, before: "Since", answer: "yesterday", after: "." },
          { id: "rest", lineIndex: 4, before: "You should", answer: "rest", after: "and drink water." },
          { id: "doctor", lineIndex: 5, before: "Thank you,", answer: "doctor", after: "." }
        ]
      },

      {
        id: "fever-last-night",
        conversation: [
          { speaker: "Doctor", role: "doctor", text: "Hello. How can I help you?" },
          { speaker: "Patient", role: "patient", text: "I have a fever." },
          { speaker: "Doctor", role: "doctor", text: "How long have you had it?" },
          { speaker: "Patient", role: "patient", text: "Since last night." },
          { speaker: "Doctor", role: "doctor", text: "You should rest and drink water." },
          { speaker: "Patient", role: "patient", text: "Thank you, doctor." }
        ],
        gaps: [
          { id: "help", lineIndex: 0, before: "Hello. How can I", answer: "help", after: "you?" },
          { id: "fever", lineIndex: 1, before: "I have a", answer: "fever", after: "." },
          { id: "long", lineIndex: 2, before: "How", answer: "long", after: "have you had it?" },
          { id: "last-night", lineIndex: 3, before: "Since", answer: "last night", after: "." },
          { id: "water", lineIndex: 4, before: "You should rest and drink", answer: "water", after: "." },
          { id: "doctor", lineIndex: 5, before: "Thank you,", answer: "doctor", after: "." }
        ]
      },

      {
        id: "stomach-this-morning",
        conversation: [
          { speaker: "Doctor", role: "doctor", text: "Hello. How can I help you?" },
          { speaker: "Patient", role: "patient", text: "I have a stomach ache." },
          { speaker: "Doctor", role: "doctor", text: "How long have you had it?" },
          { speaker: "Patient", role: "patient", text: "Since this morning." },
          { speaker: "Doctor", role: "doctor", text: "You should eat light food and rest." },
          { speaker: "Patient", role: "patient", text: "Thank you, doctor." }
        ],
        gaps: [
          { id: "help", lineIndex: 0, before: "Hello. How can I", answer: "help", after: "you?" },
          { id: "stomach-ache", lineIndex: 1, before: "I have a", answer: "stomach ache", after: "." },
          { id: "long", lineIndex: 2, before: "How", answer: "long", after: "have you had it?" },
          { id: "this-morning", lineIndex: 3, before: "Since", answer: "this morning", after: "." },
          { id: "light-food", lineIndex: 4, before: "You should eat", answer: "light food", after: "and rest." },
          { id: "doctor", lineIndex: 5, before: "Thank you,", answer: "doctor", after: "." }
        ]
      },

      {
        id: "sore-throat-monday",
        conversation: [
          { speaker: "Doctor", role: "doctor", text: "Hello. How can I help you?" },
          { speaker: "Patient", role: "patient", text: "I have a sore throat." },
          { speaker: "Doctor", role: "doctor", text: "How long have you had it?" },
          { speaker: "Patient", role: "patient", text: "Since Monday." },
          { speaker: "Doctor", role: "doctor", text: "You should drink warm water and rest." },
          { speaker: "Patient", role: "patient", text: "Thank you, doctor." }
        ],
        gaps: [
          { id: "help", lineIndex: 0, before: "Hello. How can I", answer: "help", after: "you?" },
          { id: "sore-throat", lineIndex: 1, before: "I have a", answer: "sore throat", after: "." },
          { id: "long", lineIndex: 2, before: "How", answer: "long", after: "have you had it?" },
          { id: "monday", lineIndex: 3, before: "Since", answer: "Monday", after: "." },
          { id: "warm-water", lineIndex: 4, before: "You should drink", answer: "warm water", after: "and rest." },
          { id: "doctor", lineIndex: 5, before: "Thank you,", answer: "doctor", after: "." }
        ]
      }
    ]
  }
];

