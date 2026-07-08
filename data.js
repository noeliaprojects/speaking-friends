const situations = [
  {
    "id": "doctor",
    "title": "At the doctor",
    "emoji": "🩺",
    "level": "Listening & Speaking",
    "description": "Practise asking for help and talking about a simple health problem.",
    "voiceProfiles": {
      "doctor": {
        "pitch": 0.82,
        "rate": 0.82
      },
      "patient": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "headache",
        "word": "headache",
        "imageKey": "headache"
      },
      {
        "id": "doctor",
        "word": "doctor",
        "imageKey": "doctor"
      },
      {
        "id": "patient",
        "word": "patient",
        "imageKey": "patient"
      },
      {
        "id": "water",
        "word": "water",
        "imageKey": "water"
      },
      {
        "id": "rest",
        "word": "rest",
        "imageKey": "rest"
      },
      {
        "id": "help",
        "word": "help",
        "imageKey": "help"
      }
    ],
    "conversation": [
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Hello. How can I help you?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "I have a headache."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "How long have you had it?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Since yesterday."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "You should rest and drink water."
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Thank you, doctor."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Do you need a note for school?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Yes, please. That would help."
      }
    ],
    "fixedExpressions": [
      {
        "id": "hello-help",
        "left": "Hello. How",
        "right": "can I help you?"
      },
      {
        "id": "have-headache",
        "left": "I have",
        "right": "a headache."
      },
      {
        "id": "how-long",
        "left": "How long have",
        "right": "you had it?"
      },
      {
        "id": "since-yesterday",
        "left": "Since",
        "right": "yesterday."
      },
      {
        "id": "should-rest",
        "left": "You should rest",
        "right": "and drink water."
      },
      {
        "id": "thank-doctor",
        "left": "Thank you,",
        "right": "doctor."
      },
      {
        "id": "feel-well",
        "left": "I don't",
        "right": "feel well."
      },
      {
        "id": "need-help",
        "left": "I need",
        "right": "some help."
      },
      {
        "id": "drink-water",
        "left": "You should",
        "right": "drink water."
      },
      {
        "id": "go-home",
        "left": "You should",
        "right": "go home and rest."
      },
      {
        "id": "note-school",
        "left": "Do you need",
        "right": "a note for school?"
      },
      {
        "id": "that-help",
        "left": "That would",
        "right": "help."
      }
    ],
    "missingScenarios": [
      {
        "id": "headache-yesterday",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. How can I help you?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I have a headache."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "How long have you had it?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Since yesterday."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should rest and drink water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Thank you, doctor."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you need a note for school?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, please. That would help."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "Hello. How can I",
            "answer": "help",
            "after": "you?"
          },
          {
            "id": "headache",
            "lineIndex": 1,
            "before": "I have a",
            "answer": "headache",
            "after": "."
          },
          {
            "id": "long",
            "lineIndex": 2,
            "before": "How",
            "answer": "long",
            "after": "have you had it?"
          },
          {
            "id": "yesterday",
            "lineIndex": 3,
            "before": "Since",
            "answer": "yesterday",
            "after": "."
          },
          {
            "id": "rest",
            "lineIndex": 4,
            "before": "You should",
            "answer": "rest",
            "after": "and drink water."
          },
          {
            "id": "doctor",
            "lineIndex": 5,
            "before": "Thank you,",
            "answer": "doctor",
            "after": "."
          }
        ]
      },
      {
        "id": "fever-last-night",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. How can I help you?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I have a fever."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "How long have you had it?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Since last night."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should rest and drink water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Thank you, doctor."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you need a note for school?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, please. That would help."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "Hello. How can I",
            "answer": "help",
            "after": "you?"
          },
          {
            "id": "fever",
            "lineIndex": 1,
            "before": "I have a",
            "answer": "fever",
            "after": "."
          },
          {
            "id": "long",
            "lineIndex": 2,
            "before": "How",
            "answer": "long",
            "after": "have you had it?"
          },
          {
            "id": "last-night",
            "lineIndex": 3,
            "before": "Since",
            "answer": "last night",
            "after": "."
          },
          {
            "id": "water",
            "lineIndex": 4,
            "before": "You should rest and drink",
            "answer": "water",
            "after": "."
          },
          {
            "id": "doctor",
            "lineIndex": 5,
            "before": "Thank you,",
            "answer": "doctor",
            "after": "."
          }
        ]
      },
      {
        "id": "stomach-this-morning",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. How can I help you?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I have a stomach ache."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "How long have you had it?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Since this morning."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should eat light food and rest."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Thank you, doctor."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you need a note for school?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, please. That would help."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "Hello. How can I",
            "answer": "help",
            "after": "you?"
          },
          {
            "id": "stomach-ache",
            "lineIndex": 1,
            "before": "I have a",
            "answer": "stomach ache",
            "after": "."
          },
          {
            "id": "long",
            "lineIndex": 2,
            "before": "How",
            "answer": "long",
            "after": "have you had it?"
          },
          {
            "id": "this-morning",
            "lineIndex": 3,
            "before": "Since",
            "answer": "this morning",
            "after": "."
          },
          {
            "id": "light-food",
            "lineIndex": 4,
            "before": "You should eat",
            "answer": "light food",
            "after": "and rest."
          },
          {
            "id": "doctor",
            "lineIndex": 5,
            "before": "Thank you,",
            "answer": "doctor",
            "after": "."
          }
        ]
      },
      {
        "id": "sore-throat-monday",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. How can I help you?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I have a sore throat."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "How long have you had it?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Since Monday."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should drink warm water and rest."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Thank you, doctor."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you need a note for school?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, please. That would help."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "Hello. How can I",
            "answer": "help",
            "after": "you?"
          },
          {
            "id": "sore-throat",
            "lineIndex": 1,
            "before": "I have a",
            "answer": "sore throat",
            "after": "."
          },
          {
            "id": "long",
            "lineIndex": 2,
            "before": "How",
            "answer": "long",
            "after": "have you had it?"
          },
          {
            "id": "monday",
            "lineIndex": 3,
            "before": "Since",
            "answer": "Monday",
            "after": "."
          },
          {
            "id": "warm-water",
            "lineIndex": 4,
            "before": "You should drink",
            "answer": "warm water",
            "after": "and rest."
          },
          {
            "id": "doctor",
            "lineIndex": 5,
            "before": "Thank you,",
            "answer": "doctor",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "canteen",
    "title": "At the school canteen",
    "emoji": "🍽️",
    "level": "Listening & Speaking",
    "description": "Practise ordering food and drinks politely.",
    "voiceProfiles": {
      "assistant": {
        "pitch": 0.95,
        "rate": 0.84
      },
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "canteen",
        "word": "canteen",
        "imageKey": "canteen"
      },
      {
        "id": "menu",
        "word": "menu",
        "imageKey": "menu"
      },
      {
        "id": "sandwich",
        "word": "sandwich",
        "imageKey": "sandwich"
      },
      {
        "id": "pasta",
        "word": "pasta",
        "imageKey": "pasta"
      },
      {
        "id": "salad",
        "word": "salad",
        "imageKey": "salad"
      },
      {
        "id": "water",
        "word": "water",
        "imageKey": "water"
      }
    ],
    "conversation": [
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Hello. What would you like?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I have a cheese sandwich, please?"
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Of course. Would you like some water?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Yes, please."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Here you are."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you very much."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Would you like anything else?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "No, thank you. That's all."
      }
    ],
    "fixedExpressions": [
      {
        "id": "what-like",
        "left": "What would",
        "right": "you like?"
      },
      {
        "id": "can-have",
        "left": "Can I have",
        "right": "a cheese sandwich, please?"
      },
      {
        "id": "of-course",
        "left": "Of",
        "right": "course."
      },
      {
        "id": "would-water",
        "left": "Would you like",
        "right": "some water?"
      },
      {
        "id": "yes-please",
        "left": "Yes,",
        "right": "please."
      },
      {
        "id": "here-you-are",
        "left": "Here",
        "right": "you are."
      },
      {
        "id": "thank-much",
        "left": "Thank you",
        "right": "very much."
      },
      {
        "id": "no-thanks",
        "left": "No,",
        "right": "thank you."
      },
      {
        "id": "anything-else",
        "left": "Anything",
        "right": "else?"
      },
      {
        "id": "i-would-like",
        "left": "I would like",
        "right": "some pasta, please."
      },
      {
        "id": "would-anything-else",
        "left": "Would you like",
        "right": "anything else?"
      },
      {
        "id": "thats-all",
        "left": "That's",
        "right": "all."
      }
    ],
    "missingScenarios": [
      {
        "id": "sandwich-water",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I have a cheese sandwich, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Of course. Would you like some water?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Here you are."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you very much."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like anything else?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you. That's all."
          }
        ],
        "gaps": [
          {
            "id": "like",
            "lineIndex": 0,
            "before": "Hello. What would you",
            "answer": "like",
            "after": "?"
          },
          {
            "id": "sandwich",
            "lineIndex": 1,
            "before": "Can I have a cheese",
            "answer": "sandwich",
            "after": ", please?"
          },
          {
            "id": "water",
            "lineIndex": 2,
            "before": "Would you like some",
            "answer": "water",
            "after": "?"
          },
          {
            "id": "yes",
            "lineIndex": 3,
            "before": "",
            "answer": "Yes",
            "after": ", please."
          },
          {
            "id": "here",
            "lineIndex": 4,
            "before": "",
            "answer": "Here",
            "after": "you are."
          },
          {
            "id": "thank",
            "lineIndex": 5,
            "before": "",
            "answer": "Thank you",
            "after": "very much."
          }
        ]
      },
      {
        "id": "pasta-juice",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I have some pasta, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Of course. Would you like some juice?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Here you are."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you very much."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like anything else?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you. That's all."
          }
        ],
        "gaps": [
          {
            "id": "hello",
            "lineIndex": 0,
            "before": "",
            "answer": "Hello",
            "after": ". What would you like?"
          },
          {
            "id": "pasta",
            "lineIndex": 1,
            "before": "Can I have some",
            "answer": "pasta",
            "after": ", please?"
          },
          {
            "id": "juice",
            "lineIndex": 2,
            "before": "Would you like some",
            "answer": "juice",
            "after": "?"
          },
          {
            "id": "no",
            "lineIndex": 3,
            "before": "",
            "answer": "No",
            "after": ", thank you."
          },
          {
            "id": "you-are",
            "lineIndex": 4,
            "before": "Here",
            "answer": "you are",
            "after": "."
          },
          {
            "id": "very-much",
            "lineIndex": 5,
            "before": "Thank you",
            "answer": "very much",
            "after": "."
          }
        ]
      },
      {
        "id": "salad-water",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I would like a salad, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Of course. Would you like some water?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Anything else?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like anything else?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you. That's all."
          }
        ],
        "gaps": [
          {
            "id": "would-like",
            "lineIndex": 1,
            "before": "I would",
            "answer": "like",
            "after": "a salad, please."
          },
          {
            "id": "salad",
            "lineIndex": 1,
            "before": "I would like a",
            "answer": "salad",
            "after": ", please."
          },
          {
            "id": "course",
            "lineIndex": 2,
            "before": "Of",
            "answer": "course",
            "after": ". Would you like some water?"
          },
          {
            "id": "yes",
            "lineIndex": 3,
            "before": "",
            "answer": "Yes",
            "after": ", please."
          },
          {
            "id": "anything",
            "lineIndex": 4,
            "before": "",
            "answer": "Anything",
            "after": "else?"
          },
          {
            "id": "thank-you",
            "lineIndex": 5,
            "before": "No,",
            "answer": "thank you",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "shop",
    "title": "At the shop",
    "emoji": "🛍️",
    "level": "Listening & Speaking",
    "description": "Practise buying school objects and asking for prices.",
    "voiceProfiles": {
      "shopkeeper": {
        "pitch": 0.9,
        "rate": 0.84
      },
      "customer": {
        "pitch": 1.14,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "shop",
        "word": "shop",
        "imageKey": "shop"
      },
      {
        "id": "notebook",
        "word": "notebook",
        "imageKey": "notebook"
      },
      {
        "id": "pencil",
        "word": "pencil",
        "imageKey": "pencil"
      },
      {
        "id": "bag",
        "word": "bag",
        "imageKey": "bag"
      },
      {
        "id": "price",
        "word": "price",
        "imageKey": "price"
      },
      {
        "id": "money",
        "word": "money",
        "imageKey": "money"
      }
    ],
    "conversation": [
      {
        "speaker": "Shop assistant",
        "role": "shopkeeper",
        "text": "Hello. Can I help you?"
      },
      {
        "speaker": "Customer",
        "role": "customer",
        "text": "Yes, please. I am looking for a notebook."
      },
      {
        "speaker": "Shop assistant",
        "role": "shopkeeper",
        "text": "Here you are."
      },
      {
        "speaker": "Customer",
        "role": "customer",
        "text": "How much is it?"
      },
      {
        "speaker": "Shop assistant",
        "role": "shopkeeper",
        "text": "It is two pounds."
      },
      {
        "speaker": "Customer",
        "role": "customer",
        "text": "Great. I will take it."
      },
      {
        "speaker": "Shop assistant",
        "role": "shopkeeper",
        "text": "Would you like a bag?"
      },
      {
        "speaker": "Customer",
        "role": "customer",
        "text": "Yes, please. Thank you."
      }
    ],
    "fixedExpressions": [
      {
        "id": "can-help",
        "left": "Can I",
        "right": "help you?"
      },
      {
        "id": "yes-please",
        "left": "Yes,",
        "right": "please."
      },
      {
        "id": "looking-for",
        "left": "I am looking for",
        "right": "a notebook."
      },
      {
        "id": "here-are",
        "left": "Here",
        "right": "you are."
      },
      {
        "id": "how-much",
        "left": "How much",
        "right": "is it?"
      },
      {
        "id": "two-pounds",
        "left": "It is",
        "right": "two pounds."
      },
      {
        "id": "take-it",
        "left": "I will",
        "right": "take it."
      },
      {
        "id": "anything-else",
        "left": "Anything",
        "right": "else?"
      },
      {
        "id": "no-thanks",
        "left": "No,",
        "right": "thank you."
      },
      {
        "id": "too-expensive",
        "left": "That is",
        "right": "too expensive."
      },
      {
        "id": "would-bag",
        "left": "Would you like",
        "right": "a bag?"
      },
      {
        "id": "yes-thank",
        "left": "Yes, please.",
        "right": "Thank you."
      }
    ],
    "missingScenarios": [
      {
        "id": "notebook",
        "conversation": [
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Hello. Can I help you?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. I am looking for a notebook."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Here you are."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "How much is it?"
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "It is two pounds."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Great. I will take it."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Would you like a bag?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. Thank you."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "Can I",
            "answer": "help",
            "after": "you?"
          },
          {
            "id": "looking",
            "lineIndex": 1,
            "before": "I am",
            "answer": "looking for",
            "after": "a notebook."
          },
          {
            "id": "notebook",
            "lineIndex": 1,
            "before": "I am looking for a",
            "answer": "notebook",
            "after": "."
          },
          {
            "id": "much",
            "lineIndex": 3,
            "before": "How",
            "answer": "much",
            "after": "is it?"
          },
          {
            "id": "pounds",
            "lineIndex": 4,
            "before": "It is two",
            "answer": "pounds",
            "after": "."
          },
          {
            "id": "take",
            "lineIndex": 5,
            "before": "Great. I will",
            "answer": "take it",
            "after": "."
          }
        ]
      },
      {
        "id": "pencil",
        "conversation": [
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Hello. Can I help you?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. I am looking for a pencil."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Here you are."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "How much is it?"
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "It is one pound."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Great. I will take it."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Would you like a bag?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. Thank you."
          }
        ],
        "gaps": [
          {
            "id": "can",
            "lineIndex": 0,
            "before": "Hello.",
            "answer": "Can",
            "after": "I help you?"
          },
          {
            "id": "pencil",
            "lineIndex": 1,
            "before": "I am looking for a",
            "answer": "pencil",
            "after": "."
          },
          {
            "id": "here",
            "lineIndex": 2,
            "before": "",
            "answer": "Here",
            "after": "you are."
          },
          {
            "id": "how",
            "lineIndex": 3,
            "before": "",
            "answer": "How",
            "after": "much is it?"
          },
          {
            "id": "one-pound",
            "lineIndex": 4,
            "before": "It is",
            "answer": "one pound",
            "after": "."
          },
          {
            "id": "great",
            "lineIndex": 5,
            "before": "",
            "answer": "Great",
            "after": ". I will take it."
          }
        ]
      },
      {
        "id": "bag",
        "conversation": [
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Hello. Can I help you?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. I am looking for a bag."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "This blue bag is nice."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "How much is it?"
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "It is five pounds."
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Great. I will take it."
          },
          {
            "speaker": "Shop assistant",
            "role": "shopkeeper",
            "text": "Would you like a bag?"
          },
          {
            "speaker": "Customer",
            "role": "customer",
            "text": "Yes, please. Thank you."
          }
        ],
        "gaps": [
          {
            "id": "yes",
            "lineIndex": 1,
            "before": "",
            "answer": "Yes",
            "after": ", please. I am looking for a bag."
          },
          {
            "id": "bag",
            "lineIndex": 1,
            "before": "I am looking for a",
            "answer": "bag",
            "after": "."
          },
          {
            "id": "blue",
            "lineIndex": 2,
            "before": "This",
            "answer": "blue",
            "after": "bag is nice."
          },
          {
            "id": "much",
            "lineIndex": 3,
            "before": "How",
            "answer": "much",
            "after": "is it?"
          },
          {
            "id": "five",
            "lineIndex": 4,
            "before": "It is",
            "answer": "five pounds",
            "after": "."
          },
          {
            "id": "will",
            "lineIndex": 5,
            "before": "Great. I",
            "answer": "will",
            "after": "take it."
          }
        ]
      }
    ]
  },
  {
    "id": "directions",
    "title": "Asking for directions",
    "emoji": "🧭",
    "level": "Listening & Speaking",
    "description": "Practise asking where places are and following simple directions.",
    "voiceProfiles": {
      "visitor": {
        "pitch": 1.12,
        "rate": 0.86
      },
      "helper": {
        "pitch": 0.9,
        "rate": 0.84
      }
    },
    "wordBank": [
      {
        "id": "library",
        "word": "library",
        "imageKey": "library"
      },
      {
        "id": "park",
        "word": "park",
        "imageKey": "park"
      },
      {
        "id": "school",
        "word": "school",
        "imageKey": "school"
      },
      {
        "id": "straight",
        "word": "straight on",
        "imageKey": "straight"
      },
      {
        "id": "left",
        "word": "turn left",
        "imageKey": "left"
      },
      {
        "id": "right",
        "word": "turn right",
        "imageKey": "right"
      }
    ],
    "conversation": [
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Excuse me. Where is the library?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Go straight on and turn left."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Is it near the park?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Yes, it is next to the park."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Thank you for your help."
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "You are welcome."
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Walk for two minutes."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Great. I can see it now."
      }
    ],
    "fixedExpressions": [
      {
        "id": "excuse-me",
        "left": "Excuse",
        "right": "me."
      },
      {
        "id": "where-library",
        "left": "Where is",
        "right": "the library?"
      },
      {
        "id": "go-straight",
        "left": "Go straight",
        "right": "on."
      },
      {
        "id": "turn-left",
        "left": "Turn",
        "right": "left."
      },
      {
        "id": "turn-right",
        "left": "Turn",
        "right": "right."
      },
      {
        "id": "near-park",
        "left": "Is it near",
        "right": "the park?"
      },
      {
        "id": "next-to",
        "left": "It is next to",
        "right": "the park."
      },
      {
        "id": "thank-help",
        "left": "Thank you for",
        "right": "your help."
      },
      {
        "id": "welcome",
        "left": "You are",
        "right": "welcome."
      },
      {
        "id": "far-away",
        "left": "Is it",
        "right": "far away?"
      },
      {
        "id": "two-minutes",
        "left": "Walk for",
        "right": "two minutes."
      },
      {
        "id": "see-now",
        "left": "I can",
        "right": "see it now."
      }
    ],
    "missingScenarios": [
      {
        "id": "library-left",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where is the library?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on and turn left."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it near the park?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, it is next to the park."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you for your help."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You are welcome."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Walk for two minutes."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Great. I can see it now."
          }
        ],
        "gaps": [
          {
            "id": "excuse",
            "lineIndex": 0,
            "before": "",
            "answer": "Excuse me",
            "after": ". Where is the library?"
          },
          {
            "id": "library",
            "lineIndex": 0,
            "before": "Where is the",
            "answer": "library",
            "after": "?"
          },
          {
            "id": "straight",
            "lineIndex": 1,
            "before": "Go",
            "answer": "straight on",
            "after": "and turn left."
          },
          {
            "id": "left",
            "lineIndex": 1,
            "before": "Go straight on and turn",
            "answer": "left",
            "after": "."
          },
          {
            "id": "park",
            "lineIndex": 2,
            "before": "Is it near the",
            "answer": "park",
            "after": "?"
          },
          {
            "id": "welcome",
            "lineIndex": 5,
            "before": "You are",
            "answer": "welcome",
            "after": "."
          }
        ]
      },
      {
        "id": "school-right",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where is the school?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on and turn right."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it near the library?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, it is opposite the library."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you for your help."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You are welcome."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Walk for two minutes."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Great. I can see it now."
          }
        ],
        "gaps": [
          {
            "id": "where",
            "lineIndex": 0,
            "before": "Excuse me.",
            "answer": "Where",
            "after": "is the school?"
          },
          {
            "id": "school",
            "lineIndex": 0,
            "before": "Where is the",
            "answer": "school",
            "after": "?"
          },
          {
            "id": "right",
            "lineIndex": 1,
            "before": "Go straight on and turn",
            "answer": "right",
            "after": "."
          },
          {
            "id": "near",
            "lineIndex": 2,
            "before": "Is it",
            "answer": "near",
            "after": "the library?"
          },
          {
            "id": "opposite",
            "lineIndex": 3,
            "before": "Yes, it is",
            "answer": "opposite",
            "after": "the library."
          },
          {
            "id": "help",
            "lineIndex": 4,
            "before": "Thank you for your",
            "answer": "help",
            "after": "."
          }
        ]
      },
      {
        "id": "park-left",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where is the park?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on and turn left."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it far away?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "No, it is near the school."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you for your help."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You are welcome."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Walk for two minutes."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Great. I can see it now."
          }
        ],
        "gaps": [
          {
            "id": "park",
            "lineIndex": 0,
            "before": "Where is the",
            "answer": "park",
            "after": "?"
          },
          {
            "id": "go",
            "lineIndex": 1,
            "before": "",
            "answer": "Go",
            "after": "straight on and turn left."
          },
          {
            "id": "left",
            "lineIndex": 1,
            "before": "Go straight on and turn",
            "answer": "left",
            "after": "."
          },
          {
            "id": "far-away",
            "lineIndex": 2,
            "before": "Is it",
            "answer": "far away",
            "after": "?"
          },
          {
            "id": "near",
            "lineIndex": 3,
            "before": "No, it is",
            "answer": "near",
            "after": "the school."
          },
          {
            "id": "welcome",
            "lineIndex": 5,
            "before": "You are",
            "answer": "welcome",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "plans",
    "title": "Making plans",
    "emoji": "📅",
    "level": "Listening & Speaking",
    "description": "Practise making plans with a friend.",
    "voiceProfiles": {
      "friend_a": {
        "pitch": 1.12,
        "rate": 0.87
      },
      "friend_b": {
        "pitch": 1.25,
        "rate": 0.89
      }
    },
    "wordBank": [
      {
        "id": "friend",
        "word": "friend",
        "imageKey": "friend"
      },
      {
        "id": "park",
        "word": "park",
        "imageKey": "park"
      },
      {
        "id": "football",
        "word": "football",
        "imageKey": "football"
      },
      {
        "id": "cinema",
        "word": "cinema",
        "imageKey": "cinema"
      },
      {
        "id": "saturday",
        "word": "Saturday",
        "imageKey": "saturday"
      },
      {
        "id": "time",
        "word": "time",
        "imageKey": "time"
      }
    ],
    "conversation": [
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Are you free on Saturday?"
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Yes, I am. What do you want to do?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Let's go to the park and play football."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Good idea. What time shall we meet?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Let's meet at four o'clock."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Great. See you then."
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Do you want to bring a snack?"
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Yes, I can bring some fruit."
      }
    ],
    "fixedExpressions": [
      {
        "id": "are-free",
        "left": "Are you free",
        "right": "on Saturday?"
      },
      {
        "id": "yes-am",
        "left": "Yes,",
        "right": "I am."
      },
      {
        "id": "want-do",
        "left": "What do you",
        "right": "want to do?"
      },
      {
        "id": "lets-go",
        "left": "Let's go",
        "right": "to the park."
      },
      {
        "id": "play-football",
        "left": "Play",
        "right": "football."
      },
      {
        "id": "good-idea",
        "left": "Good",
        "right": "idea."
      },
      {
        "id": "what-time",
        "left": "What time shall",
        "right": "we meet?"
      },
      {
        "id": "lets-meet",
        "left": "Let's meet",
        "right": "at four o'clock."
      },
      {
        "id": "see-then",
        "left": "See you",
        "right": "then."
      },
      {
        "id": "sorry-cant",
        "left": "Sorry,",
        "right": "I can't."
      },
      {
        "id": "bring-snack",
        "left": "Do you want to",
        "right": "bring a snack?"
      },
      {
        "id": "bring-fruit",
        "left": "I can bring",
        "right": "some fruit."
      }
    ],
    "missingScenarios": [
      {
        "id": "park-football",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Are you free on Saturday?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I am. What do you want to do?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's go to the park and play football."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Good idea. What time shall we meet?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's meet at four o'clock."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great. See you then."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Do you want to bring a snack?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I can bring some fruit."
          }
        ],
        "gaps": [
          {
            "id": "free",
            "lineIndex": 0,
            "before": "Are you",
            "answer": "free",
            "after": "on Saturday?"
          },
          {
            "id": "saturday",
            "lineIndex": 0,
            "before": "Are you free on",
            "answer": "Saturday",
            "after": "?"
          },
          {
            "id": "park",
            "lineIndex": 2,
            "before": "Let's go to the",
            "answer": "park",
            "after": "and play football."
          },
          {
            "id": "football",
            "lineIndex": 2,
            "before": "Let's go to the park and play",
            "answer": "football",
            "after": "."
          },
          {
            "id": "time",
            "lineIndex": 3,
            "before": "What",
            "answer": "time",
            "after": "shall we meet?"
          },
          {
            "id": "four",
            "lineIndex": 4,
            "before": "Let's meet at",
            "answer": "four o'clock",
            "after": "."
          }
        ]
      },
      {
        "id": "cinema-five",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Are you free on Friday?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I am. What do you want to do?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's go to the cinema."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Good idea. What time shall we meet?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's meet at five o'clock."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great. See you then."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Do you want to bring a snack?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I can bring some fruit."
          }
        ],
        "gaps": [
          {
            "id": "friday",
            "lineIndex": 0,
            "before": "Are you free on",
            "answer": "Friday",
            "after": "?"
          },
          {
            "id": "want",
            "lineIndex": 1,
            "before": "What do you",
            "answer": "want",
            "after": "to do?"
          },
          {
            "id": "cinema",
            "lineIndex": 2,
            "before": "Let's go to the",
            "answer": "cinema",
            "after": "."
          },
          {
            "id": "idea",
            "lineIndex": 3,
            "before": "Good",
            "answer": "idea",
            "after": "."
          },
          {
            "id": "meet",
            "lineIndex": 4,
            "before": "Let's",
            "answer": "meet",
            "after": "at five o'clock."
          },
          {
            "id": "then",
            "lineIndex": 5,
            "before": "Great. See you",
            "answer": "then",
            "after": "."
          }
        ]
      },
      {
        "id": "not-free",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Are you free on Sunday?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Sorry, I can't."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Are you free on Monday?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I am."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's play football after school."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Good idea. See you then."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Do you want to bring a snack?"
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes, I can bring some fruit."
          }
        ],
        "gaps": [
          {
            "id": "sunday",
            "lineIndex": 0,
            "before": "Are you free on",
            "answer": "Sunday",
            "after": "?"
          },
          {
            "id": "sorry",
            "lineIndex": 1,
            "before": "",
            "answer": "Sorry",
            "after": ", I can't."
          },
          {
            "id": "monday",
            "lineIndex": 2,
            "before": "Are you free on",
            "answer": "Monday",
            "after": "?"
          },
          {
            "id": "yes",
            "lineIndex": 3,
            "before": "",
            "answer": "Yes",
            "after": ", I am."
          },
          {
            "id": "after-school",
            "lineIndex": 4,
            "before": "Let's play football",
            "answer": "after school",
            "after": "."
          },
          {
            "id": "see",
            "lineIndex": 5,
            "before": "Good idea.",
            "answer": "See you",
            "after": "then."
          }
        ]
      }
    ]
  },
  {
    "id": "school-help",
    "title": "At school",
    "emoji": "🎒",
    "level": "Listening & Speaking",
    "description": "Practise asking the teacher for help in class.",
    "voiceProfiles": {
      "teacher": {
        "pitch": 0.88,
        "rate": 0.82
      },
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "teacher",
        "word": "teacher",
        "imageKey": "teacher"
      },
      {
        "id": "student",
        "word": "student",
        "imageKey": "student"
      },
      {
        "id": "book",
        "word": "book",
        "imageKey": "book"
      },
      {
        "id": "page",
        "word": "page",
        "imageKey": "page"
      },
      {
        "id": "repeat",
        "word": "repeat",
        "imageKey": "repeat"
      },
      {
        "id": "understand",
        "word": "understand",
        "imageKey": "understand"
      }
    ],
    "conversation": [
      {
        "speaker": "Student",
        "role": "student",
        "text": "Excuse me. I don't understand."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "That's okay. Which part is difficult?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can you repeat that, please?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Of course. Open your book on page ten."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you. I understand now."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Great. Well done."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Try the first example with me."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Okay. I can try now."
      }
    ],
    "fixedExpressions": [
      {
        "id": "excuse-me",
        "left": "Excuse",
        "right": "me."
      },
      {
        "id": "dont-understand",
        "left": "I don't",
        "right": "understand."
      },
      {
        "id": "thats-okay",
        "left": "That's",
        "right": "okay."
      },
      {
        "id": "which-part",
        "left": "Which part",
        "right": "is difficult?"
      },
      {
        "id": "can-repeat",
        "left": "Can you repeat",
        "right": "that, please?"
      },
      {
        "id": "of-course",
        "left": "Of",
        "right": "course."
      },
      {
        "id": "open-book",
        "left": "Open your book",
        "right": "on page ten."
      },
      {
        "id": "understand-now",
        "left": "I understand",
        "right": "now."
      },
      {
        "id": "well-done",
        "left": "Well",
        "right": "done."
      },
      {
        "id": "need-help",
        "left": "I need",
        "right": "some help."
      },
      {
        "id": "first-example",
        "left": "Try the first example",
        "right": "with me."
      },
      {
        "id": "try-now",
        "left": "I can",
        "right": "try now."
      }
    ],
    "missingScenarios": [
      {
        "id": "repeat-page-ten",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. I don't understand."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "That's okay. Which part is difficult?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you repeat that, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Of course. Open your book on page ten."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Great. Well done."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Try the first example with me."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Okay. I can try now."
          }
        ],
        "gaps": [
          {
            "id": "understand",
            "lineIndex": 0,
            "before": "Excuse me. I don't",
            "answer": "understand",
            "after": "."
          },
          {
            "id": "difficult",
            "lineIndex": 1,
            "before": "Which part is",
            "answer": "difficult",
            "after": "?"
          },
          {
            "id": "repeat",
            "lineIndex": 2,
            "before": "Can you",
            "answer": "repeat",
            "after": "that, please?"
          },
          {
            "id": "book",
            "lineIndex": 3,
            "before": "Open your",
            "answer": "book",
            "after": "on page ten."
          },
          {
            "id": "page-ten",
            "lineIndex": 3,
            "before": "Open your book on",
            "answer": "page ten",
            "after": "."
          },
          {
            "id": "well-done",
            "lineIndex": 5,
            "before": "Great.",
            "answer": "Well done",
            "after": "."
          }
        ]
      },
      {
        "id": "help-page-twelve",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. I need some help."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "That's okay. Which part is difficult?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you repeat the instructions, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Of course. Look at page twelve."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Great. Well done."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Try the first example with me."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Okay. I can try now."
          }
        ],
        "gaps": [
          {
            "id": "need",
            "lineIndex": 0,
            "before": "Excuse me. I",
            "answer": "need",
            "after": "some help."
          },
          {
            "id": "help",
            "lineIndex": 0,
            "before": "I need some",
            "answer": "help",
            "after": "."
          },
          {
            "id": "instructions",
            "lineIndex": 2,
            "before": "Can you repeat the",
            "answer": "instructions",
            "after": ", please?"
          },
          {
            "id": "look",
            "lineIndex": 3,
            "before": "Of course.",
            "answer": "Look",
            "after": "at page twelve."
          },
          {
            "id": "page-twelve",
            "lineIndex": 3,
            "before": "Look at",
            "answer": "page twelve",
            "after": "."
          },
          {
            "id": "now",
            "lineIndex": 4,
            "before": "I understand",
            "answer": "now",
            "after": "."
          }
        ]
      },
      {
        "id": "spell-word",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. How do you spell this word?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Of course. Listen carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you repeat it, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. I can repeat it."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Great. Well done."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Try the first example with me."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Okay. I can try now."
          }
        ],
        "gaps": [
          {
            "id": "spell",
            "lineIndex": 0,
            "before": "How do you",
            "answer": "spell",
            "after": "this word?"
          },
          {
            "id": "word",
            "lineIndex": 0,
            "before": "How do you spell this",
            "answer": "word",
            "after": "?"
          },
          {
            "id": "listen",
            "lineIndex": 1,
            "before": "Of course.",
            "answer": "Listen",
            "after": "carefully."
          },
          {
            "id": "repeat",
            "lineIndex": 2,
            "before": "Can you",
            "answer": "repeat",
            "after": "it, please?"
          },
          {
            "id": "yes",
            "lineIndex": 3,
            "before": "",
            "answer": "Yes",
            "after": ". I can repeat it."
          },
          {
            "id": "done",
            "lineIndex": 5,
            "before": "Great. Well",
            "answer": "done",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "playground",
    "title": "At the playground",
    "emoji": "🛝",
    "level": "Listening & Speaking",
    "description": "Practise joining a game, taking turns, and playing fairly.",
    "voiceProfiles": {
      "child_a": {
        "pitch": 1.12,
        "rate": 0.88
      },
      "child_b": {
        "pitch": 1.25,
        "rate": 0.9
      }
    },
    "wordBank": [
      {
        "id": "playground",
        "word": "playground",
        "imageKey": "playground"
      },
      {
        "id": "slide",
        "word": "slide",
        "imageKey": "slide"
      },
      {
        "id": "swing",
        "word": "swing",
        "imageKey": "swing"
      },
      {
        "id": "ball",
        "word": "ball",
        "imageKey": "ball"
      },
      {
        "id": "turn",
        "word": "turn",
        "imageKey": "turn"
      },
      {
        "id": "play",
        "word": "play",
        "imageKey": "play"
      }
    ],
    "conversation": [
      {
        "speaker": "Child A",
        "role": "child_a",
        "text": "Hi. Can I play with you?"
      },
      {
        "speaker": "Child B",
        "role": "child_b",
        "text": "Yes, of course. We are playing with the ball."
      },
      {
        "speaker": "Child A",
        "role": "child_a",
        "text": "Great. What are the rules?"
      },
      {
        "speaker": "Child B",
        "role": "child_b",
        "text": "You catch the ball and then pass it."
      },
      {
        "speaker": "Child A",
        "role": "child_a",
        "text": "Okay. Is it my turn now?"
      },
      {
        "speaker": "Child B",
        "role": "child_b",
        "text": "Yes, it is your turn."
      },
      {
        "speaker": "Child A",
        "role": "child_a",
        "text": "Thanks. I will pass it to you."
      },
      {
        "speaker": "Child B",
        "role": "child_b",
        "text": "Good job. Let's keep playing."
      }
    ],
    "fixedExpressions": [
      {
        "id": "can-play",
        "left": "Can I play",
        "right": "with you?"
      },
      {
        "id": "of-course",
        "left": "Yes, of",
        "right": "course."
      },
      {
        "id": "playing-ball",
        "left": "We are playing",
        "right": "with the ball."
      },
      {
        "id": "what-rules",
        "left": "What are",
        "right": "the rules?"
      },
      {
        "id": "catch-ball",
        "left": "Catch",
        "right": "the ball."
      },
      {
        "id": "pass-it",
        "left": "Pass",
        "right": "it."
      },
      {
        "id": "my-turn",
        "left": "Is it",
        "right": "my turn now?"
      },
      {
        "id": "your-turn",
        "left": "It is",
        "right": "your turn."
      },
      {
        "id": "good-job",
        "left": "Good",
        "right": "job."
      },
      {
        "id": "keep-playing",
        "left": "Let's keep",
        "right": "playing."
      }
    ],
    "missingScenarios": [
      {
        "id": "ball-game",
        "conversation": [
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Hi. Can I play with you?"
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Yes, of course. We are playing with the ball."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Great. What are the rules?"
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "You catch the ball and then pass it."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Okay. Is it my turn now?"
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Yes, it is your turn."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Thanks. I will pass it to you."
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Good job. Let's keep playing."
          }
        ],
        "gaps": [
          {
            "id": "play",
            "lineIndex": 0,
            "before": "Hi. Can I",
            "answer": "play",
            "after": "with you?"
          },
          {
            "id": "ball",
            "lineIndex": 1,
            "before": "We are playing with the",
            "answer": "ball",
            "after": "."
          },
          {
            "id": "rules",
            "lineIndex": 2,
            "before": "What are the",
            "answer": "rules",
            "after": "?"
          },
          {
            "id": "catch",
            "lineIndex": 3,
            "before": "You",
            "answer": "catch",
            "after": "the ball and then pass it."
          },
          {
            "id": "turn",
            "lineIndex": 4,
            "before": "Is it my",
            "answer": "turn",
            "after": "now?"
          },
          {
            "id": "playing",
            "lineIndex": 7,
            "before": "Let's keep",
            "answer": "playing",
            "after": "."
          }
        ]
      },
      {
        "id": "swing-turn",
        "conversation": [
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Hi. Can I use the swing?"
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Yes, of course. I am nearly finished."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Thank you. I can wait."
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Okay. It is your turn now."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Great. Do you want to use the slide?"
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Yes, let's go to the slide."
          },
          {
            "speaker": "Child A",
            "role": "child_a",
            "text": "Good idea. Let's play together."
          },
          {
            "speaker": "Child B",
            "role": "child_b",
            "text": "Yes. That's more fun."
          }
        ],
        "gaps": [
          {
            "id": "swing",
            "lineIndex": 0,
            "before": "Can I use the",
            "answer": "swing",
            "after": "?"
          },
          {
            "id": "finished",
            "lineIndex": 1,
            "before": "I am nearly",
            "answer": "finished",
            "after": "."
          },
          {
            "id": "wait",
            "lineIndex": 2,
            "before": "I can",
            "answer": "wait",
            "after": "."
          },
          {
            "id": "turn",
            "lineIndex": 3,
            "before": "It is your",
            "answer": "turn",
            "after": "now."
          },
          {
            "id": "slide",
            "lineIndex": 4,
            "before": "Do you want to use the",
            "answer": "slide",
            "after": "?"
          },
          {
            "id": "together",
            "lineIndex": 6,
            "before": "Let's play",
            "answer": "together",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "lost-property",
    "title": "Lost property",
    "emoji": "🔎",
    "level": "Listening & Speaking",
    "description": "Practise describing a lost object and asking for help.",
    "voiceProfiles": {
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      },
      "teacher": {
        "pitch": 0.88,
        "rate": 0.82
      }
    },
    "wordBank": [
      {
        "id": "lost",
        "word": "lost",
        "imageKey": "lost"
      },
      {
        "id": "pencil-case",
        "word": "pencil case",
        "imageKey": "pencilCase"
      },
      {
        "id": "jacket",
        "word": "jacket",
        "imageKey": "jacket"
      },
      {
        "id": "red",
        "word": "red",
        "imageKey": "red"
      },
      {
        "id": "blue",
        "word": "blue",
        "imageKey": "blue"
      },
      {
        "id": "classroom",
        "word": "classroom",
        "imageKey": "classroom"
      }
    ],
    "conversation": [
      {
        "speaker": "Student",
        "role": "student",
        "text": "Excuse me. I have lost my pencil case."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Don't worry. What colour is it?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "It is red and blue."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Where did you last see it?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "I think it was in the classroom."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Let's check the lost property box."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Here it is! Thank you for helping me."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "You're welcome. Try to put your name on it."
      }
    ],
    "fixedExpressions": [
      {
        "id": "lost-pencil",
        "left": "I have lost",
        "right": "my pencil case."
      },
      {
        "id": "dont-worry",
        "left": "Don't",
        "right": "worry."
      },
      {
        "id": "what-colour",
        "left": "What colour",
        "right": "is it?"
      },
      {
        "id": "red-blue",
        "left": "It is",
        "right": "red and blue."
      },
      {
        "id": "last-see",
        "left": "Where did you",
        "right": "last see it?"
      },
      {
        "id": "i-think",
        "left": "I think it was",
        "right": "in the classroom."
      },
      {
        "id": "lost-box",
        "left": "Lost property",
        "right": "box."
      },
      {
        "id": "here-it-is",
        "left": "Here",
        "right": "it is!"
      },
      {
        "id": "helping-me",
        "left": "Thank you for",
        "right": "helping me."
      },
      {
        "id": "your-name",
        "left": "Put your name",
        "right": "on it."
      }
    ],
    "missingScenarios": [
      {
        "id": "pencil-case-red-blue",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. I have lost my pencil case."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Don't worry. What colour is it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "It is red and blue."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Where did you last see it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I think it was in the classroom."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Let's check the lost property box."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Here it is! Thank you for helping me."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "You're welcome. Try to put your name on it."
          }
        ],
        "gaps": [
          {
            "id": "lost",
            "lineIndex": 0,
            "before": "I have",
            "answer": "lost",
            "after": "my pencil case."
          },
          {
            "id": "pencil-case",
            "lineIndex": 0,
            "before": "I have lost my",
            "answer": "pencil case",
            "after": "."
          },
          {
            "id": "colour",
            "lineIndex": 1,
            "before": "What",
            "answer": "colour",
            "after": "is it?"
          },
          {
            "id": "red-blue",
            "lineIndex": 2,
            "before": "It is",
            "answer": "red and blue",
            "after": "."
          },
          {
            "id": "classroom",
            "lineIndex": 4,
            "before": "It was in the",
            "answer": "classroom",
            "after": "."
          },
          {
            "id": "helping",
            "lineIndex": 6,
            "before": "Thank you for",
            "answer": "helping me",
            "after": "."
          }
        ]
      },
      {
        "id": "jacket-blue",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. I have lost my jacket."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Don't worry. What colour is it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "It is blue."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Where did you last see it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I think it was in the playground."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Let's check the lost property box."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Here it is! Thank you for helping me."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "You're welcome. Try to put your name on it."
          }
        ],
        "gaps": [
          {
            "id": "jacket",
            "lineIndex": 0,
            "before": "I have lost my",
            "answer": "jacket",
            "after": "."
          },
          {
            "id": "worry",
            "lineIndex": 1,
            "before": "Don't",
            "answer": "worry",
            "after": "."
          },
          {
            "id": "blue",
            "lineIndex": 2,
            "before": "It is",
            "answer": "blue",
            "after": "."
          },
          {
            "id": "last",
            "lineIndex": 3,
            "before": "Where did you",
            "answer": "last",
            "after": "see it?"
          },
          {
            "id": "playground",
            "lineIndex": 4,
            "before": "It was in the",
            "answer": "playground",
            "after": "."
          },
          {
            "id": "name",
            "lineIndex": 7,
            "before": "Put your",
            "answer": "name",
            "after": "on it."
          }
        ]
      }
    ]
  },
  {
    "id": "weather-clothes",
    "title": "Weather and clothes",
    "emoji": "🌦️",
    "level": "Listening & Speaking",
    "description": "Practise talking about the weather and choosing clothes.",
    "voiceProfiles": {
      "adult": {
        "pitch": 0.9,
        "rate": 0.84
      },
      "child": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "weather",
        "word": "weather",
        "imageKey": "weather"
      },
      {
        "id": "sunny",
        "word": "sunny",
        "imageKey": "sunny"
      },
      {
        "id": "rainy",
        "word": "rainy",
        "imageKey": "rainy"
      },
      {
        "id": "coat",
        "word": "coat",
        "imageKey": "coat"
      },
      {
        "id": "umbrella",
        "word": "umbrella",
        "imageKey": "umbrella"
      },
      {
        "id": "hat",
        "word": "hat",
        "imageKey": "hat"
      }
    ],
    "conversation": [
      {
        "speaker": "Adult",
        "role": "adult",
        "text": "What's the weather like today?"
      },
      {
        "speaker": "Child",
        "role": "child",
        "text": "It is cloudy and a bit rainy."
      },
      {
        "speaker": "Adult",
        "role": "adult",
        "text": "You should take your umbrella."
      },
      {
        "speaker": "Child",
        "role": "child",
        "text": "Okay. Should I wear my coat too?"
      },
      {
        "speaker": "Adult",
        "role": "adult",
        "text": "Yes, it is quite cold outside."
      },
      {
        "speaker": "Child",
        "role": "child",
        "text": "Can I wear my red hat?"
      },
      {
        "speaker": "Adult",
        "role": "adult",
        "text": "Yes, that's a good idea."
      },
      {
        "speaker": "Child",
        "role": "child",
        "text": "Great. I am ready to go."
      }
    ],
    "fixedExpressions": [
      {
        "id": "weather-like",
        "left": "What's the weather",
        "right": "like today?"
      },
      {
        "id": "cloudy-rainy",
        "left": "It is cloudy",
        "right": "and a bit rainy."
      },
      {
        "id": "take-umbrella",
        "left": "Take your",
        "right": "umbrella."
      },
      {
        "id": "wear-coat",
        "left": "Should I wear",
        "right": "my coat?"
      },
      {
        "id": "cold-outside",
        "left": "It is quite",
        "right": "cold outside."
      },
      {
        "id": "red-hat",
        "left": "My red",
        "right": "hat."
      },
      {
        "id": "good-idea",
        "left": "That's a",
        "right": "good idea."
      },
      {
        "id": "ready-go",
        "left": "I am ready",
        "right": "to go."
      },
      {
        "id": "sunny-today",
        "left": "It is",
        "right": "sunny today."
      },
      {
        "id": "wear-sunglasses",
        "left": "Wear your",
        "right": "sunglasses."
      }
    ],
    "missingScenarios": [
      {
        "id": "rainy-umbrella",
        "conversation": [
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "What's the weather like today?"
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "It is cloudy and a bit rainy."
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "You should take your umbrella."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Okay. Should I wear my coat too?"
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "Yes, it is quite cold outside."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Can I wear my red hat?"
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "Yes, that's a good idea."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Great. I am ready to go."
          }
        ],
        "gaps": [
          {
            "id": "weather",
            "lineIndex": 0,
            "before": "What's the",
            "answer": "weather",
            "after": "like today?"
          },
          {
            "id": "rainy",
            "lineIndex": 1,
            "before": "It is cloudy and a bit",
            "answer": "rainy",
            "after": "."
          },
          {
            "id": "umbrella",
            "lineIndex": 2,
            "before": "You should take your",
            "answer": "umbrella",
            "after": "."
          },
          {
            "id": "coat",
            "lineIndex": 3,
            "before": "Should I wear my",
            "answer": "coat",
            "after": "too?"
          },
          {
            "id": "cold",
            "lineIndex": 4,
            "before": "It is quite",
            "answer": "cold",
            "after": "outside."
          },
          {
            "id": "ready",
            "lineIndex": 7,
            "before": "I am",
            "answer": "ready",
            "after": "to go."
          }
        ]
      },
      {
        "id": "sunny-hat",
        "conversation": [
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "What's the weather like today?"
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "It is sunny and warm."
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "You should wear your hat."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Okay. Should I take my coat too?"
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "No, it is warm outside."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Can I take some water?"
          },
          {
            "speaker": "Adult",
            "role": "adult",
            "text": "Yes, that's a good idea."
          },
          {
            "speaker": "Child",
            "role": "child",
            "text": "Great. I am ready to go."
          }
        ],
        "gaps": [
          {
            "id": "sunny",
            "lineIndex": 1,
            "before": "It is",
            "answer": "sunny",
            "after": "and warm."
          },
          {
            "id": "warm",
            "lineIndex": 1,
            "before": "It is sunny and",
            "answer": "warm",
            "after": "."
          },
          {
            "id": "hat",
            "lineIndex": 2,
            "before": "You should wear your",
            "answer": "hat",
            "after": "."
          },
          {
            "id": "coat",
            "lineIndex": 3,
            "before": "Should I take my",
            "answer": "coat",
            "after": "too?"
          },
          {
            "id": "water",
            "lineIndex": 5,
            "before": "Can I take some",
            "answer": "water",
            "after": "?"
          },
          {
            "id": "idea",
            "lineIndex": 6,
            "before": "That's a good",
            "answer": "idea",
            "after": "."
          }
        ]
      }
    ]
  }
];
