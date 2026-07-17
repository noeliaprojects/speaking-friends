const situations = [
  {
    "id": "doctor",
    "title": "At the doctor",
    "emoji": "🩺",
    "level": "Listening & Speaking",
    "description": "Talk about health problems and advice.",
    "voiceProfiles": {
      "doctor": {
        "pitch": 0.86,
        "rate": 0.82
      },
      "patient": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "flu",
        "word": "flu",
        "imageKey": "flu"
      },
      {
        "id": "headache",
        "word": "headache",
        "imageKey": "headache"
      },
      {
        "id": "sore-throat",
        "word": "sore throat",
        "imageKey": "soreThroat"
      },
      {
        "id": "dizzy",
        "word": "dizzy",
        "imageKey": "dizzy"
      },
      {
        "id": "temperature",
        "word": "temperature",
        "imageKey": "temperature"
      },
      {
        "id": "sick",
        "word": "sick",
        "imageKey": "sick"
      },
      {
        "id": "stomach-ache",
        "word": "stomach ache",
        "imageKey": "stomachAche"
      },
      {
        "id": "cold",
        "word": "cold",
        "imageKey": "cold"
      },
      {
        "id": "earache",
        "word": "earache",
        "imageKey": "earache"
      },
      {
        "id": "cough",
        "word": "cough",
        "imageKey": "cough"
      },
      {
        "id": "cut",
        "word": "cut",
        "imageKey": "cut"
      },
      {
        "id": "broken-arm",
        "word": "broken arm",
        "imageKey": "brokenArm"
      }
    ],
    "conversation": [
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Hello. What's the matter with you today?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "I've got a stomach ache."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Where does it hurt?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Here. It hurts here."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Do you feel sick?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "No, not really, but I feel very tired."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Have you got a temperature?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "No, I haven't."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Get plenty of rest and drink a lot of water."
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Can I go to school today?"
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "No. You should stay at home today."
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "OK. Thank you very much."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Hello. What's the matter with you today?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "I've got a stomach ache."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Where does it hurt?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Here. It hurts here."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Do you feel sick?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "No, not really, but I feel very tired."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Have you got a temperature?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "No, I haven't."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Get plenty of rest and drink a lot of water."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Can I go to school today?"
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "No. You should stay at home today."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "OK. Thank you very much."
        }
      ],
      [
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Hello. What's the matter with you today?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "I've got a sore throat and a cough."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Have you got a temperature?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Yes, I think so."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Do you feel dizzy?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "A little. I don't feel very well."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "It may be the flu."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "What should I do?"
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "You should stay in bed and drink water."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Should I take any medicine?"
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Ask your family first and rest today."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "OK. Thank you, doctor."
        }
      ],
      [
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Hello. What's the matter with you today?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "I've got a headache and an earache."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Where does it hurt most?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "My head hurts most."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Do you feel sick?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "No, but I feel tired."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Have you got a cold?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Yes, I have."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "You should rest and drink warm water."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Can I play football later?"
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "No. You shouldn't play today."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "All right. Thank you very much."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "matter-today",
        "left": "What's the matter",
        "right": "with you today?"
      },
      {
        "id": "got-stomach",
        "left": "I've got a",
        "right": "stomach ache."
      },
      {
        "id": "where-hurt",
        "left": "Where does it",
        "right": "hurt?"
      },
      {
        "id": "feel-sick",
        "left": "Do you feel",
        "right": "sick?"
      },
      {
        "id": "not-really",
        "left": "No, not",
        "right": "really."
      },
      {
        "id": "got-temperature",
        "left": "Have you got a",
        "right": "temperature?"
      },
      {
        "id": "plenty-rest",
        "left": "Get plenty of",
        "right": "rest."
      },
      {
        "id": "drink-water",
        "left": "Drink a lot of",
        "right": "water."
      },
      {
        "id": "stay-home",
        "left": "You should stay",
        "right": "at home."
      },
      {
        "id": "what-should",
        "left": "What should",
        "right": "I do?"
      },
      {
        "id": "take-medicine",
        "left": "Should I take",
        "right": "any medicine?"
      },
      {
        "id": "thank-doctor",
        "left": "Thank you,",
        "right": "doctor."
      }
    ],
    "missingScenarios": [
      {
        "id": "stomach-ache",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. What's the matter with you today?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I've got a stomach ache."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Where does it hurt?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Here. It hurts here."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you feel sick?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "No, not really, but I feel very tired."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Have you got a temperature?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "No, I haven't."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Get plenty of rest and drink a lot of water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Can I go to school today?"
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "No. You should stay at home today."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "OK. Thank you very much."
          }
        ],
        "gaps": [
          {
            "id": "matter",
            "lineIndex": 0,
            "before": "Hello. What's the",
            "answer": "matter",
            "after": "with you today?"
          },
          {
            "id": "stomach",
            "lineIndex": 1,
            "before": "I've got a",
            "answer": "stomach ache",
            "after": "."
          },
          {
            "id": "hurt",
            "lineIndex": 2,
            "before": "Where does it",
            "answer": "hurt",
            "after": "?"
          },
          {
            "id": "sick",
            "lineIndex": 4,
            "before": "Do you feel",
            "answer": "sick",
            "after": "?"
          },
          {
            "id": "temperature",
            "lineIndex": 6,
            "before": "Have you got a",
            "answer": "temperature",
            "after": "?"
          },
          {
            "id": "rest",
            "lineIndex": 8,
            "before": "Get plenty of",
            "answer": "rest",
            "after": "and drink a lot of water."
          },
          {
            "id": "school",
            "lineIndex": 9,
            "before": "Can I go to",
            "answer": "school",
            "after": "today?"
          },
          {
            "id": "home",
            "lineIndex": 10,
            "before": "You should stay at",
            "answer": "home",
            "after": "today."
          }
        ]
      },
      {
        "id": "sore-throat",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. What's the matter with you today?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I've got a sore throat and a cough."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Have you got a temperature?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, I think so."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you feel dizzy?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "A little. I don't feel very well."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "It may be the flu."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "What should I do?"
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should stay in bed and drink water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Should I take any medicine?"
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Ask your family first and rest today."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "OK. Thank you, doctor."
          }
        ],
        "gaps": [
          {
            "id": "sore-throat",
            "lineIndex": 1,
            "before": "I've got a",
            "answer": "sore throat",
            "after": "and a cough."
          },
          {
            "id": "cough",
            "lineIndex": 1,
            "before": "I've got a sore throat and a",
            "answer": "cough",
            "after": "."
          },
          {
            "id": "temperature",
            "lineIndex": 2,
            "before": "Have you got a",
            "answer": "temperature",
            "after": "?"
          },
          {
            "id": "dizzy",
            "lineIndex": 4,
            "before": "Do you feel",
            "answer": "dizzy",
            "after": "?"
          },
          {
            "id": "flu",
            "lineIndex": 6,
            "before": "It may be the",
            "answer": "flu",
            "after": "."
          },
          {
            "id": "water",
            "lineIndex": 8,
            "before": "You should stay in bed and drink",
            "answer": "water",
            "after": "."
          },
          {
            "id": "medicine",
            "lineIndex": 9,
            "before": "Should I take any",
            "answer": "medicine",
            "after": "?"
          },
          {
            "id": "doctor",
            "lineIndex": 11,
            "before": "Thank you,",
            "answer": "doctor",
            "after": "."
          }
        ]
      },
      {
        "id": "headache-earache",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello. What's the matter with you today?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I've got a headache and an earache."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Where does it hurt most?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "My head hurts most."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you feel sick?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "No, but I feel tired."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Have you got a cold?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, I have."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should rest and drink warm water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Can I play football later?"
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "No. You shouldn't play today."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "All right. Thank you very much."
          }
        ],
        "gaps": [
          {
            "id": "headache",
            "lineIndex": 1,
            "before": "I've got a",
            "answer": "headache",
            "after": "and an earache."
          },
          {
            "id": "earache",
            "lineIndex": 1,
            "before": "I've got a headache and an",
            "answer": "earache",
            "after": "."
          },
          {
            "id": "head",
            "lineIndex": 3,
            "before": "My",
            "answer": "head",
            "after": "hurts most."
          },
          {
            "id": "cold",
            "lineIndex": 6,
            "before": "Have you got a",
            "answer": "cold",
            "after": "?"
          },
          {
            "id": "warm-water",
            "lineIndex": 8,
            "before": "You should rest and drink",
            "answer": "warm water",
            "after": "."
          },
          {
            "id": "football",
            "lineIndex": 9,
            "before": "Can I play",
            "answer": "football",
            "after": "later?"
          },
          {
            "id": "shouldnt",
            "lineIndex": 10,
            "before": "You",
            "answer": "shouldn't",
            "after": "play today."
          },
          {
            "id": "thank",
            "lineIndex": 11,
            "before": "Thank you",
            "answer": "very much",
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
    "description": "Order food and drinks politely at school.",
    "voiceProfiles": {
      "assistant": {
        "pitch": 0.94,
        "rate": 0.84
      },
      "student": {
        "pitch": 1.17,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "pancakes",
        "word": "pancakes",
        "imageKey": "pancakes"
      },
      {
        "id": "tuna",
        "word": "tuna",
        "imageKey": "tuna"
      },
      {
        "id": "strawberries",
        "word": "strawberries",
        "imageKey": "strawberries"
      },
      {
        "id": "pasta",
        "word": "pasta",
        "imageKey": "pasta"
      },
      {
        "id": "rice",
        "word": "rice",
        "imageKey": "rice"
      },
      {
        "id": "mushrooms",
        "word": "mushrooms",
        "imageKey": "mushrooms"
      },
      {
        "id": "tomato-sauce",
        "word": "tomato sauce",
        "imageKey": "tomatoSauce"
      },
      {
        "id": "chocolate",
        "word": "chocolate",
        "imageKey": "chocolate"
      },
      {
        "id": "salad",
        "word": "salad",
        "imageKey": "salad"
      },
      {
        "id": "cheese",
        "word": "cheese",
        "imageKey": "cheese"
      },
      {
        "id": "sandwiches",
        "word": "sandwiches",
        "imageKey": "sandwiches"
      },
      {
        "id": "bread",
        "word": "bread",
        "imageKey": "bread"
      },
      {
        "id": "lettuce",
        "word": "lettuce",
        "imageKey": "lettuce"
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
        "text": "Could I have pasta with tomato sauce, please?"
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Sure. Here you are."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Would you like some cheese on it?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Yes, please. I like cheese."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "What would you like to drink?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "I'd like some water, please."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Here you are. Anything else?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I have some strawberries, please?"
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Yes, of course."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you very much."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "You're welcome. Enjoy your lunch."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Hello. What would you like?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Could I have pasta with tomato sauce, please?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Sure. Here you are."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Would you like some cheese on it?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Yes, please. I like cheese."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "What would you like to drink?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "I'd like some water, please."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Here you are. Anything else?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I have some strawberries, please?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Yes, of course."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you very much."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "You're welcome. Enjoy your lunch."
        }
      ],
      [
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Hello. What would you like?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Could I have a tuna sandwich, please?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Of course. Would you like lettuce in it?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Yes, please, but no mushrooms."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "No problem. Here you are."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I have some rice too?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Yes, here you are."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "How much is it?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "It is two pounds."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Here you are."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Thank you. Enjoy your food."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you very much."
        }
      ],
      [
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Hello. What would you like today?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "I'd like pancakes, please."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Would you like some chocolate on them?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Yes, please. Just a little."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Would you like some bread too?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "No, thank you. I'm not very hungry."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Would you like strawberries?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Yes, please. I love strawberries."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Here you are."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I sit near my friends?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Yes, but walk carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "OK. Thank you."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "what-like",
        "left": "What would you",
        "right": "like?"
      },
      {
        "id": "pasta-sauce",
        "left": "Could I have pasta",
        "right": "with tomato sauce, please?"
      },
      {
        "id": "here-you-are",
        "left": "Here",
        "right": "you are."
      },
      {
        "id": "cheese-on-it",
        "left": "Would you like cheese",
        "right": "on it?"
      },
      {
        "id": "id-like-water",
        "left": "I'd like some",
        "right": "water, please."
      },
      {
        "id": "some-strawberries",
        "left": "Can I have some",
        "right": "strawberries, please?"
      },
      {
        "id": "tuna-sandwich",
        "left": "Could I have a tuna",
        "right": "sandwich, please?"
      },
      {
        "id": "lettuce-in-it",
        "left": "Would you like lettuce",
        "right": "in it?"
      },
      {
        "id": "no-mushrooms",
        "left": "No mushrooms,",
        "right": "please."
      },
      {
        "id": "two-pounds",
        "left": "It is",
        "right": "two pounds."
      },
      {
        "id": "enjoy-food",
        "left": "Enjoy your",
        "right": "food."
      },
      {
        "id": "not-hungry",
        "left": "I'm not very",
        "right": "hungry."
      }
    ],
    "missingScenarios": [
      {
        "id": "pasta",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Could I have pasta with tomato sauce, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Sure. Here you are."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like some cheese on it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please. I like cheese."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "What would you like to drink?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I'd like some water, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Here you are. Anything else?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I have some strawberries, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Yes, of course."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you very much."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "You're welcome. Enjoy your lunch."
          }
        ],
        "gaps": [
          {
            "id": "like",
            "lineIndex": 0,
            "before": "What would you",
            "answer": "like",
            "after": "?"
          },
          {
            "id": "pasta",
            "lineIndex": 1,
            "before": "Could I have",
            "answer": "pasta",
            "after": "with tomato sauce, please?"
          },
          {
            "id": "tomato",
            "lineIndex": 1,
            "before": "Could I have pasta with",
            "answer": "tomato sauce",
            "after": ", please?"
          },
          {
            "id": "cheese",
            "lineIndex": 3,
            "before": "Would you like some",
            "answer": "cheese",
            "after": "on it?"
          },
          {
            "id": "water",
            "lineIndex": 6,
            "before": "I'd like some",
            "answer": "water",
            "after": ", please."
          },
          {
            "id": "strawberries",
            "lineIndex": 8,
            "before": "Can I have some",
            "answer": "strawberries",
            "after": ", please?"
          },
          {
            "id": "course",
            "lineIndex": 9,
            "before": "Yes, of",
            "answer": "course",
            "after": "."
          },
          {
            "id": "lunch",
            "lineIndex": 11,
            "before": "Enjoy your",
            "answer": "lunch",
            "after": "."
          }
        ]
      },
      {
        "id": "tuna-sandwich",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Could I have a tuna sandwich, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Of course. Would you like lettuce in it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please, but no mushrooms."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "No problem. Here you are."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I have some rice too?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Yes, here you are."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "How much is it?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "It is two pounds."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Here you are."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Thank you. Enjoy your food."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you very much."
          }
        ],
        "gaps": [
          {
            "id": "tuna",
            "lineIndex": 1,
            "before": "Could I have a",
            "answer": "tuna",
            "after": "sandwich, please?"
          },
          {
            "id": "sandwich",
            "lineIndex": 1,
            "before": "Could I have a tuna",
            "answer": "sandwich",
            "after": ", please?"
          },
          {
            "id": "lettuce",
            "lineIndex": 2,
            "before": "Would you like",
            "answer": "lettuce",
            "after": "in it?"
          },
          {
            "id": "mushrooms",
            "lineIndex": 3,
            "before": "No",
            "answer": "mushrooms",
            "after": "."
          },
          {
            "id": "rice",
            "lineIndex": 5,
            "before": "Can I have some",
            "answer": "rice",
            "after": "too?"
          },
          {
            "id": "much",
            "lineIndex": 7,
            "before": "How much",
            "answer": "is it",
            "after": "?"
          },
          {
            "id": "pounds",
            "lineIndex": 8,
            "before": "It is two",
            "answer": "pounds",
            "after": "."
          },
          {
            "id": "food",
            "lineIndex": 10,
            "before": "Enjoy your",
            "answer": "food",
            "after": "."
          }
        ]
      },
      {
        "id": "pancakes",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello. What would you like today?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I'd like pancakes, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like some chocolate on them?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please. Just a little."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like some bread too?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "No, thank you. I'm not very hungry."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Would you like strawberries?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please. I love strawberries."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Here you are."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I sit near my friends?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Yes, but walk carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "OK. Thank you."
          }
        ],
        "gaps": [
          {
            "id": "pancakes",
            "lineIndex": 1,
            "before": "I'd like",
            "answer": "pancakes",
            "after": ", please."
          },
          {
            "id": "chocolate",
            "lineIndex": 2,
            "before": "Would you like some",
            "answer": "chocolate",
            "after": "on them?"
          },
          {
            "id": "little",
            "lineIndex": 3,
            "before": "Just a",
            "answer": "little",
            "after": "."
          },
          {
            "id": "bread",
            "lineIndex": 4,
            "before": "Would you like some",
            "answer": "bread",
            "after": "too?"
          },
          {
            "id": "hungry",
            "lineIndex": 5,
            "before": "I'm not very",
            "answer": "hungry",
            "after": "."
          },
          {
            "id": "strawberries",
            "lineIndex": 7,
            "before": "I love",
            "answer": "strawberries",
            "after": "."
          },
          {
            "id": "friends",
            "lineIndex": 9,
            "before": "Can I sit near my",
            "answer": "friends",
            "after": "?"
          },
          {
            "id": "carefully",
            "lineIndex": 10,
            "before": "Walk",
            "answer": "carefully",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "table",
    "title": "At the table",
    "emoji": "🍞",
    "level": "Listening & Speaking",
    "description": "Ask for things politely during a meal.",
    "voiceProfiles": {
      "person_a": {
        "pitch": 0.92,
        "rate": 0.84
      },
      "person_b": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "toast",
        "word": "toast",
        "imageKey": "toast"
      },
      {
        "id": "jam",
        "word": "jam",
        "imageKey": "jam"
      },
      {
        "id": "apple-juice",
        "word": "apple juice",
        "imageKey": "appleJuice"
      },
      {
        "id": "milk",
        "word": "milk",
        "imageKey": "milk"
      },
      {
        "id": "water",
        "word": "water",
        "imageKey": "water"
      },
      {
        "id": "plate",
        "word": "plate",
        "imageKey": "plate"
      },
      {
        "id": "cup",
        "word": "cup",
        "imageKey": "cup"
      },
      {
        "id": "pass",
        "word": "pass",
        "imageKey": "pass"
      },
      {
        "id": "full",
        "word": "full",
        "imageKey": "full"
      },
      {
        "id": "butter",
        "word": "butter",
        "imageKey": "butter"
      },
      {
        "id": "spoon",
        "word": "spoon",
        "imageKey": "spoon"
      },
      {
        "id": "potatoes",
        "word": "potatoes",
        "imageKey": "potatoes"
      }
    ],
    "conversation": [
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Would you like some more toast?"
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Yes, please."
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Here you are."
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Thank you. Can you pass the jam, please?"
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Yes, here you are."
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Can I have some more apple juice, please?"
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Yes, of course."
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Would you like some potatoes?"
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "No, thank you. I've had enough."
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Are you full?"
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Yes, I'm full now."
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "OK. Let's clear the table."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Would you like some more toast?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, please."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Here you are."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Thank you. Can you pass the jam, please?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Yes, here you are."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Can I have some more apple juice, please?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Yes, of course."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Would you like some potatoes?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "No, thank you. I've had enough."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Are you full?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Yes, I'm full now."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "OK. Let's clear the table."
        }
      ],
      [
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Can you pass the potatoes, please?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, here you are."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Thank you. Would you like some more potatoes?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "No, thank you. I'm full."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Can I have some water, please?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, of course."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Where is my cup?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "It's next to your plate."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Oh, yes. I can see it."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Would you like some milk?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "No, thank you. I've had enough."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "OK. Good job eating politely."
        }
      ],
      [
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Would you like some more potatoes?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, please. Just a little."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Can you pass the milk, please?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, here you are."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Thank you very much."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Can I have some toast, please?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Yes, of course."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Would you like jam on it?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "No, thank you. I don't like jam."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Do you want some apple juice?"
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "No, thanks. I'm full."
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "OK. I've had enough too."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "more-toast",
        "left": "Would you like some more",
        "right": "toast?"
      },
      {
        "id": "yes-please",
        "left": "Yes,",
        "right": "please."
      },
      {
        "id": "pass-jam",
        "left": "Pass the jam,",
        "right": "please."
      },
      {
        "id": "more-juice",
        "left": "Can I have some more",
        "right": "apple juice, please?"
      },
      {
        "id": "some-potatoes",
        "left": "Would you like some",
        "right": "potatoes?"
      },
      {
        "id": "no-thank",
        "left": "No,",
        "right": "thank you."
      },
      {
        "id": "im-full",
        "left": "I'm",
        "right": "full."
      },
      {
        "id": "cup-place",
        "left": "The cup is next to",
        "right": "your plate."
      },
      {
        "id": "just-little",
        "left": "Just a",
        "right": "little."
      },
      {
        "id": "dont-like-jam",
        "left": "I don't like",
        "right": "jam."
      },
      {
        "id": "clear-table",
        "left": "Let's clear",
        "right": "the table."
      },
      {
        "id": "thank-you",
        "left": "Thank you",
        "right": "very much."
      }
    ],
    "missingScenarios": [
      {
        "id": "toast-jam",
        "conversation": [
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Would you like some more toast?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, please."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Here you are."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Thank you. Can you pass the jam, please?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Yes, here you are."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Can I have some more apple juice, please?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Yes, of course."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Would you like some potatoes?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "No, thank you. I've had enough."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Are you full?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Yes, I'm full now."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "OK. Let's clear the table."
          }
        ],
        "gaps": [
          {
            "id": "toast",
            "lineIndex": 0,
            "before": "Would you like some more",
            "answer": "toast",
            "after": "?"
          },
          {
            "id": "yes",
            "lineIndex": 1,
            "before": "",
            "answer": "Yes",
            "after": ", please."
          },
          {
            "id": "jam",
            "lineIndex": 3,
            "before": "Can you pass the",
            "answer": "jam",
            "after": ", please?"
          },
          {
            "id": "apple-juice",
            "lineIndex": 5,
            "before": "Can I have some more",
            "answer": "apple juice",
            "after": ", please?"
          },
          {
            "id": "course",
            "lineIndex": 6,
            "before": "Yes, of",
            "answer": "course",
            "after": "."
          },
          {
            "id": "potatoes",
            "lineIndex": 7,
            "before": "Would you like some",
            "answer": "potatoes",
            "after": "?"
          },
          {
            "id": "enough",
            "lineIndex": 8,
            "before": "I've had",
            "answer": "enough",
            "after": "."
          },
          {
            "id": "full",
            "lineIndex": 10,
            "before": "Yes, I'm",
            "answer": "full",
            "after": "now."
          }
        ]
      },
      {
        "id": "potatoes-water",
        "conversation": [
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Can you pass the potatoes, please?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, here you are."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Thank you. Would you like some more potatoes?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "No, thank you. I'm full."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Can I have some water, please?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, of course."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Where is my cup?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "It's next to your plate."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Oh, yes. I can see it."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Would you like some milk?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "No, thank you. I've had enough."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "OK. Good job eating politely."
          }
        ],
        "gaps": [
          {
            "id": "potatoes",
            "lineIndex": 0,
            "before": "Can you pass the",
            "answer": "potatoes",
            "after": ", please?"
          },
          {
            "id": "full",
            "lineIndex": 3,
            "before": "I'm",
            "answer": "full",
            "after": "."
          },
          {
            "id": "water",
            "lineIndex": 4,
            "before": "Can I have some",
            "answer": "water",
            "after": ", please?"
          },
          {
            "id": "cup",
            "lineIndex": 6,
            "before": "Where is my",
            "answer": "cup",
            "after": "?"
          },
          {
            "id": "plate",
            "lineIndex": 7,
            "before": "It's next to your",
            "answer": "plate",
            "after": "."
          },
          {
            "id": "milk",
            "lineIndex": 9,
            "before": "Would you like some",
            "answer": "milk",
            "after": "?"
          },
          {
            "id": "enough",
            "lineIndex": 10,
            "before": "I've had",
            "answer": "enough",
            "after": "."
          },
          {
            "id": "politely",
            "lineIndex": 11,
            "before": "Good job eating",
            "answer": "politely",
            "after": "."
          }
        ]
      },
      {
        "id": "potatoes-milk",
        "conversation": [
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Would you like some more potatoes?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, please. Just a little."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Can you pass the milk, please?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, here you are."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Thank you very much."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Can I have some toast, please?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Yes, of course."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Would you like jam on it?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "No, thank you. I don't like jam."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Do you want some apple juice?"
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "No, thanks. I'm full."
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "OK. I've had enough too."
          }
        ],
        "gaps": [
          {
            "id": "potatoes",
            "lineIndex": 0,
            "before": "Would you like some more",
            "answer": "potatoes",
            "after": "?"
          },
          {
            "id": "little",
            "lineIndex": 1,
            "before": "Just a",
            "answer": "little",
            "after": "."
          },
          {
            "id": "milk",
            "lineIndex": 2,
            "before": "Can you pass the",
            "answer": "milk",
            "after": ", please?"
          },
          {
            "id": "toast",
            "lineIndex": 5,
            "before": "Can I have some",
            "answer": "toast",
            "after": ", please?"
          },
          {
            "id": "jam",
            "lineIndex": 7,
            "before": "Would you like",
            "answer": "jam",
            "after": "on it?"
          },
          {
            "id": "apple-juice",
            "lineIndex": 9,
            "before": "Do you want some",
            "answer": "apple juice",
            "after": "?"
          },
          {
            "id": "full",
            "lineIndex": 10,
            "before": "I'm",
            "answer": "full",
            "after": "."
          },
          {
            "id": "enough",
            "lineIndex": 11,
            "before": "I've had",
            "answer": "enough",
            "after": "too."
          }
        ]
      }
    ]
  },
  {
    "id": "cooking",
    "title": "Cooking together",
    "emoji": "🥣",
    "level": "Listening & Speaking",
    "description": "Follow instructions and talk about cooking actions.",
    "voiceProfiles": {
      "teacher": {
        "pitch": 0.9,
        "rate": 0.82
      },
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "add",
        "word": "add",
        "imageKey": "add"
      },
      {
        "id": "mix",
        "word": "mix",
        "imageKey": "mix"
      },
      {
        "id": "boil",
        "word": "boil",
        "imageKey": "boil"
      },
      {
        "id": "weigh",
        "word": "weigh",
        "imageKey": "weigh"
      },
      {
        "id": "taste",
        "word": "taste",
        "imageKey": "taste"
      },
      {
        "id": "fry",
        "word": "fry",
        "imageKey": "fry"
      },
      {
        "id": "peel",
        "word": "peel",
        "imageKey": "peel"
      },
      {
        "id": "chop",
        "word": "chop",
        "imageKey": "chop"
      },
      {
        "id": "burn",
        "word": "burn",
        "imageKey": "burn"
      },
      {
        "id": "stir",
        "word": "stir",
        "imageKey": "stir"
      },
      {
        "id": "pour",
        "word": "pour",
        "imageKey": "pour"
      }
    ],
    "conversation": [
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Today we are making vegetable soup."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Great. What do we do first?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "First, weigh the carrots and the onions."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "OK. Then what?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Peel and chop them carefully."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I add some water now?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes. Add some water and stir the soup."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Should I boil it?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, boil it, but don't let it burn."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I taste it now?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, taste it carefully."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "It tastes good!"
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Today we are making vegetable soup."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Great. What do we do first?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "First, weigh the carrots and the onions."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "OK. Then what?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Peel and chop them carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I add some water now?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Add some water and stir the soup."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I boil it?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, boil it, but don't let it burn."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I taste it now?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, taste it carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "It tastes good!"
        }
      ],
      [
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Today we are making pancakes."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Great. What do we need?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "We need flour, milk and eggs."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I mix them?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Mix them in the bowl."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I pour the milk?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, pour it slowly."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I fry the pancakes now?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, but be careful. Don't let them burn."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "They smell lovely."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Now taste one carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "It tastes delicious!"
        }
      ],
      [
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Today we are making pizza."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Nice. What do we do first?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "First, chop the mushrooms carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Like this?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Now add the tomato sauce."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I add some cheese too?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, add some cheese and mushrooms."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I stir the sauce first?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, stir it carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I taste the sauce?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, but don't eat too much."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "OK. It tastes good."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "what-first",
        "left": "What do we do",
        "right": "first?"
      },
      {
        "id": "then-what",
        "left": "Then",
        "right": "what?"
      },
      {
        "id": "weigh-carrots",
        "left": "Weigh the carrots",
        "right": "and the onions."
      },
      {
        "id": "peel-chop",
        "left": "Peel and chop",
        "right": "them carefully."
      },
      {
        "id": "add-water",
        "left": "Add some",
        "right": "water."
      },
      {
        "id": "stir-soup",
        "left": "Stir the",
        "right": "soup."
      },
      {
        "id": "dont-burn",
        "left": "Don't let it",
        "right": "burn."
      },
      {
        "id": "taste-carefully",
        "left": "Taste it",
        "right": "carefully."
      },
      {
        "id": "mix-bowl",
        "left": "Mix them",
        "right": "in the bowl."
      },
      {
        "id": "pour-slowly",
        "left": "Pour it",
        "right": "slowly."
      },
      {
        "id": "chop-dough",
        "left": "Chop the mushrooms",
        "right": "on the tray."
      },
      {
        "id": "tastes-good",
        "left": "It tastes",
        "right": "good."
      }
    ],
    "missingScenarios": [
      {
        "id": "soup",
        "conversation": [
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Today we are making vegetable soup."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Great. What do we do first?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "First, weigh the carrots and the onions."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "OK. Then what?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Peel and chop them carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I add some water now?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Add some water and stir the soup."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I boil it?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, boil it, but don't let it burn."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I taste it now?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, taste it carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "It tastes good!"
          }
        ],
        "gaps": [
          {
            "id": "soup",
            "lineIndex": 0,
            "before": "Today we are making vegetable",
            "answer": "soup",
            "after": "."
          },
          {
            "id": "first",
            "lineIndex": 1,
            "before": "What do we do",
            "answer": "first",
            "after": "?"
          },
          {
            "id": "weigh",
            "lineIndex": 2,
            "before": "First,",
            "answer": "weigh",
            "after": "the carrots and the onions."
          },
          {
            "id": "peel",
            "lineIndex": 4,
            "before": "",
            "answer": "Peel",
            "after": "and chop them carefully."
          },
          {
            "id": "chop",
            "lineIndex": 4,
            "before": "Peel and",
            "answer": "chop",
            "after": "them carefully."
          },
          {
            "id": "add",
            "lineIndex": 6,
            "before": "",
            "answer": "Add",
            "after": "some water and stir the soup."
          },
          {
            "id": "boil",
            "lineIndex": 8,
            "before": "Yes,",
            "answer": "boil",
            "after": "it, but don't let it burn."
          },
          {
            "id": "taste",
            "lineIndex": 10,
            "before": "Yes,",
            "answer": "taste",
            "after": "it carefully."
          }
        ]
      },
      {
        "id": "pancakes",
        "conversation": [
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Today we are making pancakes."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Great. What do we need?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "We need flour, milk and eggs."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I mix them?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Mix them in the bowl."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I pour the milk?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, pour it slowly."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I fry the pancakes now?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, but be careful. Don't let them burn."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "They smell lovely."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Now taste one carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "It tastes delicious!"
          }
        ],
        "gaps": [
          {
            "id": "pancakes",
            "lineIndex": 0,
            "before": "Today we are making",
            "answer": "pancakes",
            "after": "."
          },
          {
            "id": "mix",
            "lineIndex": 3,
            "before": "Should I",
            "answer": "mix",
            "after": "them?"
          },
          {
            "id": "bowl",
            "lineIndex": 4,
            "before": "Mix them in the",
            "answer": "bowl",
            "after": "."
          },
          {
            "id": "pour",
            "lineIndex": 5,
            "before": "Can I",
            "answer": "pour",
            "after": "the milk?"
          },
          {
            "id": "fry",
            "lineIndex": 7,
            "before": "Should I",
            "answer": "fry",
            "after": "the pancakes now?"
          },
          {
            "id": "burn",
            "lineIndex": 8,
            "before": "Don't let them",
            "answer": "burn",
            "after": "."
          },
          {
            "id": "taste",
            "lineIndex": 10,
            "before": "Now",
            "answer": "taste",
            "after": "one carefully."
          },
          {
            "id": "delicious",
            "lineIndex": 11,
            "before": "It tastes",
            "answer": "delicious",
            "after": "!"
          }
        ]
      },
      {
        "id": "pizza",
        "conversation": [
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Today we are making pizza."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Nice. What do we do first?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "First, chop the mushrooms carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Like this?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Now add the tomato sauce."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I add some cheese too?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, add some cheese and mushrooms."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I stir the sauce first?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, stir it carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I taste the sauce?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, but don't eat too much."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "OK. It tastes good."
          }
        ],
        "gaps": [
          {
            "id": "pizza",
            "lineIndex": 0,
            "before": "Today we are making",
            "answer": "pizza",
            "after": "."
          },
          {
            "id": "chop",
            "lineIndex": 2,
            "before": "First,",
            "answer": "chop",
            "after": "the mushrooms carefully."
          },
          {
            "id": "add",
            "lineIndex": 4,
            "before": "Now",
            "answer": "add",
            "after": "the tomato sauce."
          },
          {
            "id": "cheese",
            "lineIndex": 5,
            "before": "Can I add some",
            "answer": "cheese",
            "after": "too?"
          },
          {
            "id": "mushrooms",
            "lineIndex": 6,
            "before": "Add some cheese and",
            "answer": "mushrooms",
            "after": "."
          },
          {
            "id": "stir",
            "lineIndex": 8,
            "before": "Yes,",
            "answer": "stir",
            "after": "it carefully."
          },
          {
            "id": "taste",
            "lineIndex": 9,
            "before": "Can I",
            "answer": "taste",
            "after": "the sauce?"
          },
          {
            "id": "good",
            "lineIndex": 11,
            "before": "It tastes",
            "answer": "good",
            "after": "."
          }
        ]
      }
    ]
  },
  {
    "id": "animals",
    "title": "Talking about animals",
    "emoji": "🐼",
    "level": "Listening & Speaking",
    "description": "Give opinions and talk about animals.",
    "voiceProfiles": {
      "friend_a": {
        "pitch": 1.12,
        "rate": 0.87
      },
      "friend_b": {
        "pitch": 1.24,
        "rate": 0.89
      }
    },
    "wordBank": [
      {
        "id": "hippo",
        "word": "hippo",
        "imageKey": "hippo"
      },
      {
        "id": "whale",
        "word": "whale",
        "imageKey": "whale"
      },
      {
        "id": "kangaroo",
        "word": "kangaroo",
        "imageKey": "kangaroo"
      },
      {
        "id": "parrot",
        "word": "parrot",
        "imageKey": "parrot"
      },
      {
        "id": "lion",
        "word": "lion",
        "imageKey": "lion"
      },
      {
        "id": "dolphin",
        "word": "dolphin",
        "imageKey": "dolphin"
      },
      {
        "id": "shark",
        "word": "shark",
        "imageKey": "shark"
      },
      {
        "id": "jellyfish",
        "word": "jellyfish",
        "imageKey": "jellyfish"
      },
      {
        "id": "tiger",
        "word": "tiger",
        "imageKey": "tiger"
      },
      {
        "id": "panda",
        "word": "panda",
        "imageKey": "panda"
      },
      {
        "id": "polar-bear",
        "word": "polar bear",
        "imageKey": "polarBear"
      },
      {
        "id": "penguin",
        "word": "penguin",
        "imageKey": "penguin"
      },
      {
        "id": "dangerous",
        "word": "dangerous",
        "imageKey": "dangerous"
      },
      {
        "id": "colourful",
        "word": "colourful",
        "imageKey": "colourful"
      },
      {
        "id": "intelligent",
        "word": "intelligent",
        "imageKey": "intelligent"
      },
      {
        "id": "frightening",
        "word": "frightening",
        "imageKey": "frightening"
      },
      {
        "id": "pretty",
        "word": "pretty",
        "imageKey": "pretty"
      },
      {
        "id": "ugly",
        "word": "ugly",
        "imageKey": "ugly"
      }
    ],
    "conversation": [
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "I love penguins."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Why?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Because they are funny and pretty."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Are they bigger than lions?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "No, they aren't. Lions are bigger."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Do penguins live in hot places?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "No, they live in cold places."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Did you know they are birds?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Really? That's cool."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Yes. I want to see penguins one day."
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Me too. Let's read about them."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Good idea."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "I love penguins."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Why?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Because they are funny and pretty."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are they bigger than lions?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, they aren't. Lions are bigger."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do penguins live in hot places?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, they live in cold places."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Did you know they are birds?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Really? That's cool."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Yes. I want to see penguins one day."
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Me too. Let's read about them."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Good idea."
        }
      ],
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "I like dolphins."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Why?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Because they are intelligent and beautiful."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are dolphins more dangerous than sharks?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, sharks are more dangerous."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are whales bigger than dolphins?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, they are much bigger."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do dolphins live in the water?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, of course."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Cool. I want to learn more."
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Let's find a book about dolphins."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Great idea."
        }
      ],
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "I love pandas."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Why?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Because they are pretty and calm."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are pandas more colourful than parrots?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, parrots are more colourful."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are tigers frightening?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, they can be frightening."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "What about kangaroos?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Kangaroos are strong and fast."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Did you know hippos are dangerous?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Really? I didn't know that."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Yes. Animals are amazing."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "love-penguins",
        "left": "I love",
        "right": "penguins."
      },
      {
        "id": "why",
        "left": "Why",
        "right": "?"
      },
      {
        "id": "funny-pretty",
        "left": "Because they are",
        "right": "funny and pretty."
      },
      {
        "id": "bigger-lions",
        "left": "Are they bigger",
        "right": "than lions?"
      },
      {
        "id": "cold-places",
        "left": "They live in",
        "right": "cold places."
      },
      {
        "id": "birds",
        "left": "Did you know",
        "right": "they are birds?"
      },
      {
        "id": "like-dolphins",
        "left": "I like",
        "right": "dolphins."
      },
      {
        "id": "whales-bigger",
        "left": "Are whales bigger",
        "right": "than dolphins?"
      },
      {
        "id": "water",
        "left": "Dolphins live",
        "right": "in the water."
      },
      {
        "id": "about-kangaroos",
        "left": "What about",
        "right": "kangaroos?"
      },
      {
        "id": "hippos-dangerous",
        "left": "Did you know hippos",
        "right": "are dangerous?"
      },
      {
        "id": "animals-amazing",
        "left": "Animals are",
        "right": "amazing."
      }
    ],
    "missingScenarios": [
      {
        "id": "penguins",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "I love penguins."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Why?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Because they are funny and pretty."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are they bigger than lions?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, they aren't. Lions are bigger."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do penguins live in hot places?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, they live in cold places."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Did you know they are birds?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Really? That's cool."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes. I want to see penguins one day."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Me too. Let's read about them."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Good idea."
          }
        ],
        "gaps": [
          {
            "id": "penguins",
            "lineIndex": 0,
            "before": "I love",
            "answer": "penguins",
            "after": "."
          },
          {
            "id": "why",
            "lineIndex": 1,
            "before": "",
            "answer": "Why",
            "after": "?"
          },
          {
            "id": "pretty",
            "lineIndex": 2,
            "before": "They are funny and",
            "answer": "pretty",
            "after": "."
          },
          {
            "id": "lions",
            "lineIndex": 3,
            "before": "Are they bigger than",
            "answer": "lions",
            "after": "?"
          },
          {
            "id": "bigger",
            "lineIndex": 4,
            "before": "Lions are",
            "answer": "bigger",
            "after": "."
          },
          {
            "id": "cold",
            "lineIndex": 6,
            "before": "They live in",
            "answer": "cold",
            "after": "places."
          },
          {
            "id": "birds",
            "lineIndex": 7,
            "before": "Did you know they are",
            "answer": "birds",
            "after": "?"
          },
          {
            "id": "cool",
            "lineIndex": 8,
            "before": "That's",
            "answer": "cool",
            "after": "."
          }
        ]
      },
      {
        "id": "dolphins",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "I like dolphins."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Why?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Because they are intelligent and beautiful."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are dolphins more dangerous than sharks?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, sharks are more dangerous."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are whales bigger than dolphins?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, they are much bigger."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do dolphins live in the water?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, of course."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Cool. I want to learn more."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Let's find a book about dolphins."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great idea."
          }
        ],
        "gaps": [
          {
            "id": "dolphins",
            "lineIndex": 0,
            "before": "I like",
            "answer": "dolphins",
            "after": "."
          },
          {
            "id": "intelligent",
            "lineIndex": 2,
            "before": "They are",
            "answer": "intelligent",
            "after": "and beautiful."
          },
          {
            "id": "dangerous",
            "lineIndex": 3,
            "before": "Are dolphins more",
            "answer": "dangerous",
            "after": "than sharks?"
          },
          {
            "id": "sharks",
            "lineIndex": 4,
            "before": "",
            "answer": "Sharks",
            "after": "are more dangerous."
          },
          {
            "id": "whales",
            "lineIndex": 5,
            "before": "Are",
            "answer": "whales",
            "after": "bigger than dolphins?"
          },
          {
            "id": "water",
            "lineIndex": 7,
            "before": "Do dolphins live in the",
            "answer": "water",
            "after": "?"
          },
          {
            "id": "learn",
            "lineIndex": 9,
            "before": "I want to",
            "answer": "learn",
            "after": "more."
          },
          {
            "id": "book",
            "lineIndex": 10,
            "before": "Let's find a",
            "answer": "book",
            "after": "about dolphins."
          }
        ]
      },
      {
        "id": "pandas",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "I love pandas."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Why?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Because they are pretty and calm."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are pandas more colourful than parrots?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, parrots are more colourful."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are tigers frightening?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, they can be frightening."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "What about kangaroos?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Kangaroos are strong and fast."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Did you know hippos are dangerous?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Really? I didn't know that."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Yes. Animals are amazing."
          }
        ],
        "gaps": [
          {
            "id": "pandas",
            "lineIndex": 0,
            "before": "I love",
            "answer": "pandas",
            "after": "."
          },
          {
            "id": "colourful",
            "lineIndex": 3,
            "before": "Are pandas more",
            "answer": "colourful",
            "after": "than parrots?"
          },
          {
            "id": "parrots",
            "lineIndex": 4,
            "before": "",
            "answer": "Parrots",
            "after": "are more colourful."
          },
          {
            "id": "tigers",
            "lineIndex": 5,
            "before": "Are",
            "answer": "tigers",
            "after": "frightening?"
          },
          {
            "id": "frightening",
            "lineIndex": 6,
            "before": "They can be",
            "answer": "frightening",
            "after": "."
          },
          {
            "id": "kangaroos",
            "lineIndex": 7,
            "before": "What about",
            "answer": "kangaroos",
            "after": "?"
          },
          {
            "id": "hippos",
            "lineIndex": 9,
            "before": "Did you know",
            "answer": "hippos",
            "after": "are dangerous?"
          },
          {
            "id": "amazing",
            "lineIndex": 11,
            "before": "Animals are",
            "answer": "amazing",
            "after": "."
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
    "description": "Ask where places are and follow directions.",
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
        "id": "road",
        "word": "road",
        "imageKey": "road"
      },
      {
        "id": "bridge",
        "word": "bridge",
        "imageKey": "bridge"
      },
      {
        "id": "village",
        "word": "village",
        "imageKey": "village"
      },
      {
        "id": "mountain",
        "word": "mountain",
        "imageKey": "mountain"
      },
      {
        "id": "harbour",
        "word": "harbour",
        "imageKey": "harbour"
      },
      {
        "id": "building",
        "word": "building",
        "imageKey": "building"
      },
      {
        "id": "farm",
        "word": "farm",
        "imageKey": "farm"
      },
      {
        "id": "field",
        "word": "field",
        "imageKey": "field"
      },
      {
        "id": "hospital",
        "word": "hospital",
        "imageKey": "hospital"
      },
      {
        "id": "cafe",
        "word": "café",
        "imageKey": "cafe"
      },
      {
        "id": "cinema",
        "word": "cinema",
        "imageKey": "cinema"
      },
      {
        "id": "supermarket",
        "word": "supermarket",
        "imageKey": "supermarket"
      },
      {
        "id": "go-straight-on",
        "word": "go straight on",
        "imageKey": "goStraightOn"
      },
      {
        "id": "turn-left",
        "word": "turn left",
        "imageKey": "turnLeft"
      },
      {
        "id": "turn-right",
        "word": "turn right",
        "imageKey": "turnRight"
      },
      {
        "id": "go-past",
        "word": "go past",
        "imageKey": "goPast"
      },
      {
        "id": "near",
        "word": "near",
        "imageKey": "near"
      },
      {
        "id": "far",
        "word": "far",
        "imageKey": "far"
      }
    ],
    "conversation": [
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Excuse me. Where's the café?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "It's near the hospital."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "How do I get there?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Go straight on, then turn right."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "OK. Straight on, then turn right."
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Go past the cinema, then turn left."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Is it next to the school?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Yes, it is next to the school."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Is it far away?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "No. It's only two minutes from here."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Thank you very much."
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "You're welcome."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Excuse me. Where's the café?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "It's near the hospital."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "How do I get there?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Go straight on, then turn right."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "OK. Straight on, then turn right."
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Go past the cinema, then turn left."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is it next to the school?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes, it is next to the school."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is it far away?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "No. It's only two minutes from here."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Thank you very much."
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "You're welcome."
        }
      ],
      [
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Excuse me. Where's the supermarket?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "It's in the village."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "How do I get there?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Go straight on and cross the bridge."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Do I turn left after the bridge?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "No. Turn right after the bridge."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is it near the road?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes. It's on the main road."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Can I see the harbour from there?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes, you can see it from the road."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Thank you for your help."
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "You're welcome."
        }
      ],
      [
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Excuse me. Where's the farm?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "It's near the field."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is it far from the harbour?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes, it is a little far."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "How do I get there?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Go past the building and turn left."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Do I go over the bridge?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "No. Go along the road by the mountain."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is the mountain near the farm?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes, the mountain is near the farm."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Great. Thank you very much."
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "You're welcome."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "excuse-me",
        "left": "Excuse",
        "right": "me."
      },
      {
        "id": "wheres-cafe",
        "left": "Where's",
        "right": "the café?"
      },
      {
        "id": "get-there",
        "left": "How do I",
        "right": "get there?"
      },
      {
        "id": "straight-right",
        "left": "Go straight on,",
        "right": "then turn right."
      },
      {
        "id": "past-cinema",
        "left": "Go past the cinema,",
        "right": "then turn left."
      },
      {
        "id": "next-school",
        "left": "It's next to",
        "right": "the school."
      },
      {
        "id": "far-away",
        "left": "Is it",
        "right": "far away?"
      },
      {
        "id": "cross-bridge",
        "left": "Cross",
        "right": "the bridge."
      },
      {
        "id": "main-road",
        "left": "It's on",
        "right": "the main road."
      },
      {
        "id": "near-field",
        "left": "It's near",
        "right": "the field."
      },
      {
        "id": "by-mountain",
        "left": "Go along the road",
        "right": "by the mountain."
      },
      {
        "id": "welcome",
        "left": "You're",
        "right": "welcome."
      }
    ],
    "missingScenarios": [
      {
        "id": "cafe",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where's the café?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "It's near the hospital."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "How do I get there?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on, then turn right."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "OK. Straight on, then turn right."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go past the cinema, then turn left."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it next to the school?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, it is next to the school."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it far away?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "No. It's only two minutes from here."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you very much."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You're welcome."
          }
        ],
        "gaps": [
          {
            "id": "cafe",
            "lineIndex": 0,
            "before": "Where's the",
            "answer": "café",
            "after": "?"
          },
          {
            "id": "hospital",
            "lineIndex": 1,
            "before": "It's near the",
            "answer": "hospital",
            "after": "."
          },
          {
            "id": "straight",
            "lineIndex": 3,
            "before": "Go",
            "answer": "straight on",
            "after": ", then turn right."
          },
          {
            "id": "right",
            "lineIndex": 3,
            "before": "Go straight on, then turn",
            "answer": "right",
            "after": "."
          },
          {
            "id": "cinema",
            "lineIndex": 5,
            "before": "Go past the",
            "answer": "cinema",
            "after": ", then turn left."
          },
          {
            "id": "left",
            "lineIndex": 5,
            "before": "Go past the cinema, then turn",
            "answer": "left",
            "after": "."
          },
          {
            "id": "school",
            "lineIndex": 7,
            "before": "It is next to the",
            "answer": "school",
            "after": "."
          },
          {
            "id": "minutes",
            "lineIndex": 9,
            "before": "It's only two",
            "answer": "minutes",
            "after": "from here."
          }
        ]
      },
      {
        "id": "supermarket",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where's the supermarket?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "It's in the village."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "How do I get there?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on and cross the bridge."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Do I turn left after the bridge?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "No. Turn right after the bridge."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it near the road?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes. It's on the main road."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Can I see the harbour from there?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, you can see it from the road."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you for your help."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You're welcome."
          }
        ],
        "gaps": [
          {
            "id": "supermarket",
            "lineIndex": 0,
            "before": "Where's the",
            "answer": "supermarket",
            "after": "?"
          },
          {
            "id": "village",
            "lineIndex": 1,
            "before": "It's in the",
            "answer": "village",
            "after": "."
          },
          {
            "id": "bridge",
            "lineIndex": 3,
            "before": "Go straight on and cross the",
            "answer": "bridge",
            "after": "."
          },
          {
            "id": "right",
            "lineIndex": 5,
            "before": "Turn",
            "answer": "right",
            "after": "after the bridge."
          },
          {
            "id": "road",
            "lineIndex": 7,
            "before": "It's on the main",
            "answer": "road",
            "after": "."
          },
          {
            "id": "harbour",
            "lineIndex": 8,
            "before": "Can I see the",
            "answer": "harbour",
            "after": "from there?"
          },
          {
            "id": "help",
            "lineIndex": 10,
            "before": "Thank you for your",
            "answer": "help",
            "after": "."
          },
          {
            "id": "welcome",
            "lineIndex": 11,
            "before": "You're",
            "answer": "welcome",
            "after": "."
          }
        ]
      },
      {
        "id": "farm",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me. Where's the farm?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "It's near the field."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it far from the harbour?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, it is a little far."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "How do I get there?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go past the building and turn left."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Do I go over the bridge?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "No. Go along the road by the mountain."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is the mountain near the farm?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, the mountain is near the farm."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Great. Thank you very much."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You're welcome."
          }
        ],
        "gaps": [
          {
            "id": "farm",
            "lineIndex": 0,
            "before": "Where's the",
            "answer": "farm",
            "after": "?"
          },
          {
            "id": "field",
            "lineIndex": 1,
            "before": "It's near the",
            "answer": "field",
            "after": "."
          },
          {
            "id": "harbour",
            "lineIndex": 2,
            "before": "Is it far from the",
            "answer": "harbour",
            "after": "?"
          },
          {
            "id": "building",
            "lineIndex": 5,
            "before": "Go past the",
            "answer": "building",
            "after": "and turn left."
          },
          {
            "id": "bridge",
            "lineIndex": 6,
            "before": "Do I go over the",
            "answer": "bridge",
            "after": "?"
          },
          {
            "id": "mountain",
            "lineIndex": 7,
            "before": "Go along the road by the",
            "answer": "mountain",
            "after": "."
          },
          {
            "id": "mountain",
            "lineIndex": 8,
            "before": "Is the",
            "answer": "mountain",
            "after": "near the farm?"
          },
          {
            "id": "near",
            "lineIndex": 9,
            "before": "The mountain is",
            "answer": "near",
            "after": "the farm."
          }
        ]
      }
    ]
  },
  {
    "id": "holiday",
    "title": "Going on holiday",
    "emoji": "🏖️",
    "level": "Listening & Speaking",
    "description": "Discuss plans and things you need for a holiday.",
    "voiceProfiles": {
      "friend_a": {
        "pitch": 1.12,
        "rate": 0.87
      },
      "friend_b": {
        "pitch": 1.24,
        "rate": 0.89
      }
    },
    "wordBank": [
      {
        "id": "tourist-information",
        "word": "tourist information",
        "imageKey": "touristInformation"
      },
      {
        "id": "water-park",
        "word": "go to a water park",
        "imageKey": "waterPark"
      },
      {
        "id": "funfair",
        "word": "go to a funfair",
        "imageKey": "funfair"
      },
      {
        "id": "museum",
        "word": "go to a museum",
        "imageKey": "museum"
      },
      {
        "id": "hotel",
        "word": "stay in a hotel",
        "imageKey": "hotel"
      },
      {
        "id": "surf",
        "word": "learn to surf",
        "imageKey": "surf"
      },
      {
        "id": "bowling",
        "word": "go bowling",
        "imageKey": "bowling"
      },
      {
        "id": "golf",
        "word": "play golf",
        "imageKey": "golf"
      },
      {
        "id": "safari-park",
        "word": "visit a safari park",
        "imageKey": "safariPark"
      },
      {
        "id": "aquarium",
        "word": "go to an aquarium",
        "imageKey": "aquarium"
      },
      {
        "id": "castle",
        "word": "visit a castle",
        "imageKey": "castle"
      },
      {
        "id": "barbecue",
        "word": "have a barbecue",
        "imageKey": "barbecue"
      },
      {
        "id": "flip-flops",
        "word": "flip flops",
        "imageKey": "flipFlops"
      },
      {
        "id": "suitcase",
        "word": "suitcase",
        "imageKey": "suitcase"
      },
      {
        "id": "swimsuit",
        "word": "swimsuit",
        "imageKey": "swimsuit"
      },
      {
        "id": "sun-hat",
        "word": "sun hat",
        "imageKey": "sunHat"
      }
    ],
    "conversation": [
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "We're going to a water park this weekend."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Do we need swimsuits?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Yes, we do. And we need sun hats."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "How about flip flops?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Good idea. They go in the suitcase."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Do we need a sun hat?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Yes, we do. It will be sunny."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Do we need flip flops?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "No, we don't. The water will be warm."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Great. What time are we leaving?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "At nine o'clock."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Perfect. I'm ready."
      }
    ],
    "conversationVariants": [
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "We're going to a water park this weekend."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need swimsuits?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we do. And we need sun hats."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "How about flip flops?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Good idea. They go in the suitcase."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need a sun hat?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we do. It will be sunny."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need flip flops?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, we don't. The water will be warm."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Great. What time are we leaving?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "At nine o'clock."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Perfect. I'm ready."
        }
      ],
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "We're going to stay in a hotel this weekend."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Great. Are we going to visit a castle?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we are. And we can go to a museum."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need our cameras?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we do."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "How about visiting the aquarium?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Good idea. We can go after lunch."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Can we have a barbecue in the evening?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Maybe. Let's ask at tourist information."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "OK. What should I pack?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Pack comfortable shoes and a jacket."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "OK. I'll pack them now."
        }
      ],
      [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "We're going to the beach this weekend."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are we going to learn to surf?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we are. We need flip flops."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need sun hats too?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we do. And don't forget your swimsuit."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "How about going bowling in the evening?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Good idea."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Can we play golf too?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Maybe on Sunday morning."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "This holiday sounds fun."
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes. Let's have fun in the sun."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Great. I can't wait."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "water-park",
        "left": "We're going to",
        "right": "a water park."
      },
      {
        "id": "need-swimsuits",
        "left": "Do we need",
        "right": "swimsuits?"
      },
      {
        "id": "yes-do",
        "left": "Yes,",
        "right": "we do."
      },
      {
        "id": "no-dont",
        "left": "No,",
        "right": "we don't."
      },
      {
        "id": "flip-flops",
        "left": "How about",
        "right": "flip flops?"
      },
      {
        "id": "good-idea",
        "left": "Good",
        "right": "idea."
      },
      {
        "id": "in-suitcase",
        "left": "They go in",
        "right": "the suitcase."
      },
      {
        "id": "sunny",
        "left": "It will",
        "right": "be sunny."
      },
      {
        "id": "stay-hotel",
        "left": "Stay in",
        "right": "a hotel."
      },
      {
        "id": "tourist-info",
        "left": "Tourist",
        "right": "information."
      },
      {
        "id": "learn-surf",
        "left": "Learn to",
        "right": "surf."
      },
      {
        "id": "cant-wait",
        "left": "I can't",
        "right": "wait."
      }
    ],
    "missingScenarios": [
      {
        "id": "water-park",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "We're going to a water park this weekend."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need swimsuits?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we do. And we need sun hats."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "How about flip flops?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Good idea. They go in the suitcase."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need a sun hat?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we do. It will be sunny."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need flip flops?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, we don't. The water will be warm."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great. What time are we leaving?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "At nine o'clock."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Perfect. I'm ready."
          }
        ],
        "gaps": [
          {
            "id": "water-park",
            "lineIndex": 0,
            "before": "We're going to a",
            "answer": "water park",
            "after": "this weekend."
          },
          {
            "id": "swimsuits",
            "lineIndex": 1,
            "before": "Do we need",
            "answer": "swimsuits",
            "after": "?"
          },
          {
            "id": "sun-hat",
            "lineIndex": 2,
            "before": "We need",
            "answer": "sun hats",
            "after": "."
          },
          {
            "id": "flip-flops",
            "lineIndex": 3,
            "before": "How about",
            "answer": "flip flops",
            "after": "?"
          },
          {
            "id": "suitcase",
            "lineIndex": 4,
            "before": "They go in the",
            "answer": "suitcase",
            "after": "."
          },
          {
            "id": "sun-hat",
            "lineIndex": 5,
            "before": "Do we need a",
            "answer": "sun hat",
            "after": "?"
          },
          {
            "id": "flip flops",
            "lineIndex": 7,
            "before": "Do we need",
            "answer": "flip flops",
            "after": "?"
          },
          {
            "id": "warm",
            "lineIndex": 8,
            "before": "The water will be",
            "answer": "warm",
            "after": "."
          }
        ]
      },
      {
        "id": "hotel",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "We're going to stay in a hotel this weekend."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great. Are we going to visit a castle?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we are. And we can go to a museum."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need our cameras?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we do."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "How about visiting the aquarium?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Good idea. We can go after lunch."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Can we have a barbecue in the evening?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Maybe. Let's ask at tourist information."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "OK. What should I pack?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Pack comfortable shoes and a jacket."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "OK. I'll pack them now."
          }
        ],
        "gaps": [
          {
            "id": "hotel",
            "lineIndex": 0,
            "before": "We're going to stay in a",
            "answer": "hotel",
            "after": "this weekend."
          },
          {
            "id": "castle",
            "lineIndex": 1,
            "before": "Are we going to visit a",
            "answer": "castle",
            "after": "?"
          },
          {
            "id": "museum",
            "lineIndex": 2,
            "before": "We can go to a",
            "answer": "museum",
            "after": "."
          },
          {
            "id": "aquarium",
            "lineIndex": 5,
            "before": "How about visiting the",
            "answer": "aquarium",
            "after": "?"
          },
          {
            "id": "barbecue",
            "lineIndex": 7,
            "before": "Can we have a",
            "answer": "barbecue",
            "after": "in the evening?"
          },
          {
            "id": "tourist",
            "lineIndex": 8,
            "before": "Let's ask at",
            "answer": "tourist information",
            "after": "."
          },
          {
            "id": "pack",
            "lineIndex": 9,
            "before": "What should I",
            "answer": "pack",
            "after": "?"
          },
          {
            "id": "jacket",
            "lineIndex": 10,
            "before": "Pack comfortable shoes and a",
            "answer": "jacket",
            "after": "."
          }
        ]
      },
      {
        "id": "beach",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "We're going to the beach this weekend."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are we going to learn to surf?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we are. We need flip flops."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need sun hats too?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we do. And don't forget your swimsuit."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "How about going bowling in the evening?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Good idea."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Can we play golf too?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Maybe on Sunday morning."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "This holiday sounds fun."
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes. Let's have fun in the sun."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great. I can't wait."
          }
        ],
        "gaps": [
          {
            "id": "beach",
            "lineIndex": 0,
            "before": "We're going to the",
            "answer": "beach",
            "after": "this weekend."
          },
          {
            "id": "surf",
            "lineIndex": 1,
            "before": "Are we going to learn to",
            "answer": "surf",
            "after": "?"
          },
          {
            "id": "flip flops",
            "lineIndex": 2,
            "before": "We need",
            "answer": "flip flops",
            "after": "."
          },
          {
            "id": "sun-hat",
            "lineIndex": 3,
            "before": "Do we need",
            "answer": "sun hats",
            "after": "too?"
          },
          {
            "id": "swimsuit",
            "lineIndex": 4,
            "before": "Don't forget your",
            "answer": "swimsuit",
            "after": "."
          },
          {
            "id": "bowling",
            "lineIndex": 5,
            "before": "How about going",
            "answer": "bowling",
            "after": "in the evening?"
          },
          {
            "id": "golf",
            "lineIndex": 7,
            "before": "Can we play",
            "answer": "golf",
            "after": "too?"
          },
          {
            "id": "sun",
            "lineIndex": 10,
            "before": "Let's have fun in the",
            "answer": "sun",
            "after": "."
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
    "description": "Ask for help and use classroom English.",
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
        "id": "instructions",
        "word": "instructions",
        "imageKey": "instructions"
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
      },
      {
        "id": "spell",
        "word": "spell",
        "imageKey": "spell"
      },
      {
        "id": "word",
        "word": "word",
        "imageKey": "word"
      },
      {
        "id": "listen",
        "word": "listen",
        "imageKey": "listen"
      },
      {
        "id": "help",
        "word": "help",
        "imageKey": "help"
      },
      {
        "id": "example",
        "word": "example",
        "imageKey": "example"
      },
      {
        "id": "write",
        "word": "write",
        "imageKey": "write"
      },
      {
        "id": "answer",
        "word": "answer",
        "imageKey": "answer"
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
        "text": "Can you repeat the instructions, please?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Of course. Listen carefully."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you. What page are we on?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Open your book on page ten."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can you show me the first example?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes. Look at this sentence."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "I understand now."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Great. Try the next one."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "OK. I can try it."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Well done."
      }
    ],
    "conversationVariants": [
      [
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
          "text": "Can you repeat the instructions, please?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Of course. Listen carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you. What page are we on?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Open your book on page ten."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can you show me the first example?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Look at this sentence."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "I understand now."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Great. Try the next one."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "OK. I can try it."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Well done."
        }
      ],
      [
        {
          "speaker": "Student",
          "role": "student",
          "text": "Excuse me. I need some help."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Of course. What do you need?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "How do you spell this word?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Listen carefully. Page is P-A-G-E."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can you repeat it, please?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. P-A-G-E. Page."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you. Should I write it here?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Write it under the picture."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Like this?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, that's right."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Great. I understand now."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Well done. Keep going."
        }
      ],
      [
        {
          "speaker": "Student",
          "role": "student",
          "text": "Excuse me. I can't find my book."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Don't worry. Look in your bag."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Here it is. Thank you."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Good. Open it on page twelve."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "What do we have to do?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Read the first question and choose an answer."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I work with a partner?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, but speak quietly."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "OK. Can you check my answer later?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, I can check it."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you for helping me."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "You're welcome."
        }
      ]
    ],
    "fixedExpressions": [
      {
        "id": "dont-understand",
        "left": "I don't",
        "right": "understand."
      },
      {
        "id": "which-part",
        "left": "Which part",
        "right": "is difficult?"
      },
      {
        "id": "repeat-instructions",
        "left": "Can you repeat",
        "right": "the instructions?"
      },
      {
        "id": "listen-carefully",
        "left": "Listen",
        "right": "carefully."
      },
      {
        "id": "what-page",
        "left": "What page",
        "right": "are we on?"
      },
      {
        "id": "page-ten",
        "left": "Open your book",
        "right": "on page ten."
      },
      {
        "id": "first-example",
        "left": "Show me the first",
        "right": "example."
      },
      {
        "id": "understand-now",
        "left": "I understand",
        "right": "now."
      },
      {
        "id": "need-help",
        "left": "I need",
        "right": "some help."
      },
      {
        "id": "spell-word",
        "left": "How do you spell",
        "right": "this word?"
      },
      {
        "id": "write-picture",
        "left": "Write it under",
        "right": "the picture."
      },
      {
        "id": "keep-going",
        "left": "Keep",
        "right": "going."
      }
    ],
    "missingScenarios": [
      {
        "id": "instructions",
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
            "text": "Can you repeat the instructions, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Of course. Listen carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. What page are we on?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Open your book on page ten."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you show me the first example?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Look at this sentence."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Great. Try the next one."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "OK. I can try it."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Well done."
          }
        ],
        "gaps": [
          {
            "id": "understand",
            "lineIndex": 0,
            "before": "I don't",
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
            "after": "the instructions, please?"
          },
          {
            "id": "instructions",
            "lineIndex": 2,
            "before": "Can you repeat the",
            "answer": "instructions",
            "after": ", please?"
          },
          {
            "id": "listen",
            "lineIndex": 3,
            "before": "",
            "answer": "Listen",
            "after": "carefully."
          },
          {
            "id": "page-ten",
            "lineIndex": 5,
            "before": "Open your book on",
            "answer": "page ten",
            "after": "."
          },
          {
            "id": "example",
            "lineIndex": 6,
            "before": "Show me the first",
            "answer": "example",
            "after": "?"
          },
          {
            "id": "done",
            "lineIndex": 11,
            "before": "Well",
            "answer": "done",
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
            "text": "Excuse me. I need some help."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Of course. What do you need?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "How do you spell this word?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Listen carefully. Page is P-A-G-E."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you repeat it, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. P-A-G-E. Page."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. Should I write it here?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Write it under the picture."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Like this?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, that's right."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Great. I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Well done. Keep going."
          }
        ],
        "gaps": [
          {
            "id": "help",
            "lineIndex": 0,
            "before": "I need some",
            "answer": "help",
            "after": "."
          },
          {
            "id": "spell",
            "lineIndex": 2,
            "before": "How do you",
            "answer": "spell",
            "after": "this word?"
          },
          {
            "id": "word",
            "lineIndex": 2,
            "before": "How do you spell this",
            "answer": "word",
            "after": "?"
          },
          {
            "id": "page",
            "lineIndex": 3,
            "before": "Listen carefully.",
            "answer": "Page",
            "after": "is P-A-G-E."
          },
          {
            "id": "repeat",
            "lineIndex": 4,
            "before": "Can you",
            "answer": "repeat",
            "after": "it, please?"
          },
          {
            "id": "write",
            "lineIndex": 6,
            "before": "Should I",
            "answer": "write",
            "after": "it here?"
          },
          {
            "id": "picture",
            "lineIndex": 7,
            "before": "Write it under the",
            "answer": "picture",
            "after": "."
          },
          {
            "id": "going",
            "lineIndex": 11,
            "before": "Keep",
            "answer": "going",
            "after": "."
          }
        ]
      },
      {
        "id": "book",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me. I can't find my book."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Don't worry. Look in your bag."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Here it is. Thank you."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Good. Open it on page twelve."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "What do we have to do?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Read the first question and choose an answer."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I work with a partner?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, but speak quietly."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "OK. Can you check my answer later?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, I can check it."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you for helping me."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "You're welcome."
          }
        ],
        "gaps": [
          {
            "id": "book",
            "lineIndex": 0,
            "before": "I can't find my",
            "answer": "book",
            "after": "."
          },
          {
            "id": "bag",
            "lineIndex": 1,
            "before": "Look in your",
            "answer": "bag",
            "after": "."
          },
          {
            "id": "page-twelve",
            "lineIndex": 3,
            "before": "Open it on",
            "answer": "page twelve",
            "after": "."
          },
          {
            "id": "question",
            "lineIndex": 5,
            "before": "Read the first",
            "answer": "question",
            "after": "and choose an answer."
          },
          {
            "id": "partner",
            "lineIndex": 6,
            "before": "Can I work with a",
            "answer": "partner",
            "after": "?"
          },
          {
            "id": "quietly",
            "lineIndex": 7,
            "before": "Speak",
            "answer": "quietly",
            "after": "."
          },
          {
            "id": "answer",
            "lineIndex": 8,
            "before": "Can you check my",
            "answer": "answer",
            "after": "later?"
          },
          {
            "id": "welcome",
            "lineIndex": 11,
            "before": "You're",
            "answer": "welcome",
            "after": "."
          }
        ]
      }
    ]
  }
];
