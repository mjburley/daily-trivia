export const quizzes = {
  spaceTech: {
    id: 'spaceTech',
    title: 'Space & Technology',
    description: 'Test your knowledge about the cosmos and cutting-edge tech.',
    icon: 'rocket',
    color: 'purple',
    questions: [
      {
        id: 1,
        question: "What is the approximate age of the universe?",
        choices: [
          "4.5 billion years",
          "13.8 billion years",
          "100 billion years",
          "1 trillion years"
        ],
        correctAnswer: 1,
        explanation: "The universe is approximately 13.8 billion years old, as determined by measurements of cosmic microwave background radiation."
      },
      {
        id: 2,
        question: "Which company launched the first reusable orbital rocket?",
        choices: [
          "Blue Origin",
          "NASA",
          "SpaceX",
          "Boeing"
        ],
        correctAnswer: 2,
        explanation: "SpaceX achieved this milestone in 2015 with the Falcon 9, revolutionizing the space industry with reusable rocket technology."
      },
      {
        id: 3,
        question: "What is the theoretical maximum data transfer rate of USB4?",
        choices: [
          "10 Gbps",
          "20 Gbps",
          "40 Gbps",
          "80 Gbps"
        ],
        correctAnswer: 2,
        explanation: "USB4 supports speeds up to 40 Gbps, with USB4 Version 2.0 supporting up to 80 Gbps using the updated protocol."
      },
      {
        id: 4,
        question: "Which planet in our solar system has the strongest magnetic field?",
        choices: [
          "Earth",
          "Saturn",
          "Jupiter",
          "Neptune"
        ],
        correctAnswer: 2,
        explanation: "Jupiter has the strongest magnetic field of any planet in our solar system, about 20,000 times stronger than Earth's."
      },
      {
        id: 5,
        question: "What programming language was used to write the first version of Linux kernel?",
        choices: [
          "Assembly only",
          "C and Assembly",
          "C++ and C",
          "Fortran"
        ],
        correctAnswer: 1,
        explanation: "Linus Torvalds wrote the original Linux kernel primarily in C with some Assembly language for hardware-specific operations."
      }
    ]
  },
  famousBooks: {
    id: 'famousBooks',
    title: 'Famous Books',
    description: 'How well do you know classic and modern literature?',
    icon: 'book',
    color: 'blue',
    questions: [
      {
        id: 1,
        question: "Who wrote '1984', the dystopian novel about totalitarian surveillance?",
        choices: [
          "Aldous Huxley",
          "George Orwell",
          "Ray Bradbury",
          "Philip K. Dick"
        ],
        correctAnswer: 1,
        explanation: "George Orwell published '1984' in 1949. The novel introduced concepts like 'Big Brother' and 'doublethink' that remain culturally relevant today."
      },
      {
        id: 2,
        question: "In which book does the character Atticus Finch appear as a lawyer defending an innocent man?",
        choices: [
          "The Great Gatsby",
          "Of Mice and Men",
          "To Kill a Mockingbird",
          "The Catcher in the Rye"
        ],
        correctAnswer: 2,
        explanation: "Atticus Finch is the protagonist of Harper Lee's 'To Kill a Mockingbird' (1960), defending Tom Robinson in a racially charged trial in Alabama."
      },
      {
        id: 3,
        question: "What is the name of the first book in J.R.R. Tolkien's 'The Lord of the Rings' trilogy?",
        choices: [
          "The Two Towers",
          "The Hobbit",
          "The Fellowship of the Ring",
          "The Return of the King"
        ],
        correctAnswer: 2,
        explanation: "'The Fellowship of the Ring' was published in 1954 as the first volume. 'The Hobbit' is a separate prequel novel published in 1937."
      },
      {
        id: 4,
        question: "Which Shakespeare play features the famous line 'To be, or not to be'?",
        choices: [
          "Macbeth",
          "Othello",
          "Hamlet",
          "King Lear"
        ],
        correctAnswer: 2,
        explanation: "This iconic soliloquy appears in Act 3, Scene 1 of 'Hamlet', where the Prince of Denmark contemplates existence and death."
      },
      {
        id: 5,
        question: "Who is the author of 'Pride and Prejudice'?",
        choices: [
          "Charlotte Brontë",
          "Jane Austen",
          "Emily Brontë",
          "Mary Shelley"
        ],
        correctAnswer: 1,
        explanation: "Jane Austen published 'Pride and Prejudice' in 1813. It follows Elizabeth Bennet and Mr. Darcy in one of literature's most beloved romances."
      }
    ]
  }
}
