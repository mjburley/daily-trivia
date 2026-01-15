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
        choices: ["4.5 billion years", "13.8 billion years", "100 billion years", "1 trillion years"],
        correctAnswer: 1,
        explanation: "The universe is approximately 13.8 billion years old, as determined by measurements of cosmic microwave background radiation."
      },
      {
        id: 2,
        question: "Which company launched the first reusable orbital rocket?",
        choices: ["Blue Origin", "NASA", "SpaceX", "Boeing"],
        correctAnswer: 2,
        explanation: "SpaceX achieved this milestone in 2015 with the Falcon 9, revolutionizing the space industry with reusable rocket technology."
      },
      {
        id: 3,
        question: "What is the theoretical maximum data transfer rate of USB4?",
        choices: ["10 Gbps", "20 Gbps", "40 Gbps", "80 Gbps"],
        correctAnswer: 2,
        explanation: "USB4 supports speeds up to 40 Gbps, with USB4 Version 2.0 supporting up to 80 Gbps using the updated protocol."
      },
      {
        id: 4,
        question: "Which planet in our solar system has the strongest magnetic field?",
        choices: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: 2,
        explanation: "Jupiter has the strongest magnetic field of any planet in our solar system, about 20,000 times stronger than Earth's."
      },
      {
        id: 5,
        question: "What programming language was used to write the first version of Linux kernel?",
        choices: ["Assembly only", "C and Assembly", "C++ and C", "Fortran"],
        correctAnswer: 1,
        explanation: "Linus Torvalds wrote the original Linux kernel primarily in C with some Assembly language for hardware-specific operations."
      },
      {
        id: 6,
        question: "What is the name of the largest known structure in the universe?",
        choices: ["Sloan Great Wall", "Hercules-Corona Borealis Great Wall", "Laniakea Supercluster", "Boötes Void"],
        correctAnswer: 1,
        explanation: "The Hercules-Corona Borealis Great Wall is the largest known structure, spanning about 10 billion light-years across."
      },
      {
        id: 7,
        question: "Which spacecraft was the first to land on Mars?",
        choices: ["Viking 1", "Mars Pathfinder", "Curiosity", "Spirit"],
        correctAnswer: 0,
        explanation: "NASA's Viking 1 became the first spacecraft to successfully land on Mars and complete its mission in 1976."
      },
      {
        id: 8,
        question: "What does GPU stand for?",
        choices: ["General Processing Unit", "Graphics Processing Unit", "Graphical Performance Utility", "General Purpose Utility"],
        correctAnswer: 1,
        explanation: "GPU stands for Graphics Processing Unit, specialized hardware designed for rendering images and parallel processing."
      },
      {
        id: 9,
        question: "How long does light from the Sun take to reach Earth?",
        choices: ["About 8 seconds", "About 8 minutes", "About 8 hours", "About 8 days"],
        correctAnswer: 1,
        explanation: "Light travels at about 299,792 km/s and takes approximately 8 minutes and 20 seconds to travel from the Sun to Earth."
      },
      {
        id: 10,
        question: "What is the most abundant element in the universe?",
        choices: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
        correctAnswer: 3,
        explanation: "Hydrogen makes up about 75% of all normal matter in the universe by mass, formed during the Big Bang."
      },
      {
        id: 11,
        question: "Which company developed the first commercially successful smartphone?",
        choices: ["Nokia", "BlackBerry", "Apple", "Samsung"],
        correctAnswer: 2,
        explanation: "While not the first smartphone, Apple's iPhone (2007) revolutionized the industry and became the first commercially dominant smartphone."
      },
      {
        id: 12,
        question: "What is the escape velocity from Earth's surface?",
        choices: ["7.9 km/s", "11.2 km/s", "15.3 km/s", "25.0 km/s"],
        correctAnswer: 1,
        explanation: "Earth's escape velocity is approximately 11.2 km/s (about 40,320 km/h), the minimum speed needed to escape Earth's gravity."
      },
      {
        id: 13,
        question: "What type of memory loses its data when power is turned off?",
        choices: ["ROM", "SSD", "RAM", "HDD"],
        correctAnswer: 2,
        explanation: "RAM (Random Access Memory) is volatile memory that requires power to maintain stored information."
      },
      {
        id: 14,
        question: "Which moon in our solar system has a thick atmosphere?",
        choices: ["Europa", "Ganymede", "Titan", "Io"],
        correctAnswer: 2,
        explanation: "Saturn's moon Titan has a dense atmosphere composed mainly of nitrogen, thicker than Earth's atmosphere."
      },
      {
        id: 15,
        question: "What year was the World Wide Web invented?",
        choices: ["1985", "1989", "1993", "1995"],
        correctAnswer: 1,
        explanation: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, revolutionizing information sharing."
      },
      {
        id: 16,
        question: "What is the smallest planet in our solar system?",
        choices: ["Mars", "Mercury", "Venus", "Pluto"],
        correctAnswer: 1,
        explanation: "Mercury is the smallest planet in our solar system with a diameter of about 4,879 km. Pluto is no longer classified as a planet."
      },
      {
        id: 17,
        question: "What does 'HTTP' stand for?",
        choices: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Process", "High Tech Transfer Protocol"],
        correctAnswer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the World Wide Web."
      },
      {
        id: 18,
        question: "Which space telescope was launched in 1990 and is still operational?",
        choices: ["James Webb", "Hubble", "Spitzer", "Kepler"],
        correctAnswer: 1,
        explanation: "The Hubble Space Telescope was launched in 1990 and continues to provide stunning images and scientific data."
      },
      {
        id: 19,
        question: "What is the main component of a quantum computer's processing unit?",
        choices: ["Transistor", "Qubit", "Capacitor", "Resistor"],
        correctAnswer: 1,
        explanation: "Qubits (quantum bits) are the fundamental units of quantum computing, capable of existing in multiple states simultaneously."
      },
      {
        id: 20,
        question: "How many Earth days does it take Mars to orbit the Sun?",
        choices: ["365 days", "487 days", "687 days", "842 days"],
        correctAnswer: 2,
        explanation: "Mars takes approximately 687 Earth days to complete one orbit around the Sun, nearly twice as long as Earth."
      },
      {
        id: 21,
        question: "What technology does Bluetooth use for communication?",
        choices: ["Infrared", "Radio waves", "Microwaves", "Sound waves"],
        correctAnswer: 1,
        explanation: "Bluetooth uses radio waves in the 2.4 GHz ISM band to transmit data wirelessly between devices."
      },
      {
        id: 22,
        question: "What is a black hole's event horizon?",
        choices: ["Its core", "The point of no return", "Its outer atmosphere", "The accretion disk"],
        correctAnswer: 1,
        explanation: "The event horizon is the boundary beyond which nothing, not even light, can escape the black hole's gravitational pull."
      },
      {
        id: 23,
        question: "Which programming language was created by Guido van Rossum?",
        choices: ["Java", "Ruby", "Python", "JavaScript"],
        correctAnswer: 2,
        explanation: "Guido van Rossum created Python in 1991, named after Monty Python's Flying Circus comedy group."
      },
      {
        id: 24,
        question: "What is the closest star to our solar system?",
        choices: ["Alpha Centauri A", "Proxima Centauri", "Barnard's Star", "Sirius"],
        correctAnswer: 1,
        explanation: "Proxima Centauri is the closest star to our Sun at about 4.24 light-years away, part of the Alpha Centauri system."
      },
      {
        id: 25,
        question: "What does SSD stand for in computer storage?",
        choices: ["Super Speed Drive", "Solid State Drive", "System Storage Device", "Serial Speed Disk"],
        correctAnswer: 1,
        explanation: "SSD stands for Solid State Drive, using flash memory instead of spinning disks for faster, more reliable storage."
      },
      {
        id: 26,
        question: "What is the Great Red Spot on Jupiter?",
        choices: ["A volcano", "An impact crater", "A giant storm", "A mountain"],
        correctAnswer: 2,
        explanation: "The Great Red Spot is a persistent anticyclonic storm larger than Earth that has been observed for over 400 years."
      },
      {
        id: 27,
        question: "Who founded Tesla, Inc.?",
        choices: ["Elon Musk", "Martin Eberhard and Marc Tarpenning", "Jeff Bezos", "Larry Page"],
        correctAnswer: 1,
        explanation: "Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning. Elon Musk joined as chairman and lead investor in 2004."
      },
      {
        id: 28,
        question: "What is the Kuiper Belt?",
        choices: ["An asteroid belt between Mars and Jupiter", "A region beyond Neptune with icy bodies", "Saturn's ring system", "A belt of radiation around Earth"],
        correctAnswer: 1,
        explanation: "The Kuiper Belt is a region of the solar system beyond Neptune, home to dwarf planets like Pluto and many icy bodies."
      },
      {
        id: 29,
        question: "What does AI stand for in technology?",
        choices: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence, the simulation of human intelligence processes by computer systems."
      },
      {
        id: 30,
        question: "What phenomenon causes stars to twinkle?",
        choices: ["Star pulsation", "Atmospheric turbulence", "Light reflection", "Solar wind"],
        correctAnswer: 1,
        explanation: "Stars appear to twinkle due to atmospheric turbulence on Earth, which causes light to refract unpredictably."
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
        choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Philip K. Dick"],
        correctAnswer: 1,
        explanation: "George Orwell published '1984' in 1949. The novel introduced concepts like 'Big Brother' and 'doublethink' that remain culturally relevant today."
      },
      {
        id: 2,
        question: "In which book does the character Atticus Finch appear as a lawyer defending an innocent man?",
        choices: ["The Great Gatsby", "Of Mice and Men", "To Kill a Mockingbird", "The Catcher in the Rye"],
        correctAnswer: 2,
        explanation: "Atticus Finch is the protagonist of Harper Lee's 'To Kill a Mockingbird' (1960), defending Tom Robinson in a racially charged trial in Alabama."
      },
      {
        id: 3,
        question: "What is the name of the first book in J.R.R. Tolkien's 'The Lord of the Rings' trilogy?",
        choices: ["The Two Towers", "The Hobbit", "The Fellowship of the Ring", "The Return of the King"],
        correctAnswer: 2,
        explanation: "'The Fellowship of the Ring' was published in 1954 as the first volume. 'The Hobbit' is a separate prequel novel published in 1937."
      },
      {
        id: 4,
        question: "Which Shakespeare play features the famous line 'To be, or not to be'?",
        choices: ["Macbeth", "Othello", "Hamlet", "King Lear"],
        correctAnswer: 2,
        explanation: "This iconic soliloquy appears in Act 3, Scene 1 of 'Hamlet', where the Prince of Denmark contemplates existence and death."
      },
      {
        id: 5,
        question: "Who is the author of 'Pride and Prejudice'?",
        choices: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Mary Shelley"],
        correctAnswer: 1,
        explanation: "Jane Austen published 'Pride and Prejudice' in 1813. It follows Elizabeth Bennet and Mr. Darcy in one of literature's most beloved romances."
      },
      {
        id: 6,
        question: "What is the name of the protagonist in 'The Great Gatsby'?",
        choices: ["Tom Buchanan", "Nick Carraway", "Jay Gatsby", "George Wilson"],
        correctAnswer: 2,
        explanation: "Jay Gatsby is the mysterious millionaire at the center of F. Scott Fitzgerald's 1925 novel, though Nick Carraway narrates the story."
      },
      {
        id: 7,
        question: "Who wrote 'One Hundred Years of Solitude'?",
        choices: ["Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa"],
        correctAnswer: 1,
        explanation: "Gabriel García Márquez published this masterpiece of magical realism in 1967, telling the story of the Buendía family."
      },
      {
        id: 8,
        question: "In 'Harry Potter', what is the name of the pub that serves as the entrance to Diagon Alley?",
        choices: ["The Three Broomsticks", "The Hog's Head", "The Leaky Cauldron", "The Shrieking Shack"],
        correctAnswer: 2,
        explanation: "The Leaky Cauldron is a famous wizarding pub in London that provides access to Diagon Alley through its back courtyard."
      },
      {
        id: 9,
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: ["J.D. Salinger", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        correctAnswer: 0,
        explanation: "J.D. Salinger published 'The Catcher in the Rye' in 1951, featuring the iconic narrator Holden Caulfield."
      },
      {
        id: 10,
        question: "What is the subtitle of Mary Shelley's 'Frankenstein'?",
        choices: ["The Modern Monster", "The Modern Prometheus", "The Modern Horror", "The Modern Creation"],
        correctAnswer: 1,
        explanation: "The full title is 'Frankenstein; or, The Modern Prometheus', published in 1818 when Shelley was just 20 years old."
      },
      {
        id: 11,
        question: "In which novel would you find the character of Sherlock Holmes' nemesis, Professor Moriarty?",
        choices: ["A Study in Scarlet", "The Final Problem", "The Hound of the Baskervilles", "A Scandal in Bohemia"],
        correctAnswer: 1,
        explanation: "'The Final Problem' (1893) by Arthur Conan Doyle features the climactic confrontation between Holmes and Moriarty at Reichenbach Falls."
      },
      {
        id: 12,
        question: "Who wrote 'Don Quixote'?",
        choices: ["Miguel de Cervantes", "Federico García Lorca", "Carlos Ruiz Zafón", "Arturo Pérez-Reverte"],
        correctAnswer: 0,
        explanation: "Miguel de Cervantes published 'Don Quixote' in two parts (1605 and 1615), widely considered the first modern novel."
      },
      {
        id: 13,
        question: "What is the name of the estate in 'Wuthering Heights'?",
        choices: ["Thornfield Hall", "Wuthering Heights", "Pemberley", "Manderley"],
        correctAnswer: 1,
        explanation: "Wuthering Heights is the name of the Earnshaw family's farmhouse in Emily Brontë's 1847 novel of the same name."
      },
      {
        id: 14,
        question: "Who wrote 'The Picture of Dorian Gray'?",
        choices: ["Charles Dickens", "Oscar Wilde", "Bram Stoker", "H.G. Wells"],
        correctAnswer: 1,
        explanation: "Oscar Wilde published 'The Picture of Dorian Gray' in 1890, his only novel, exploring themes of aestheticism and moral corruption."
      },
      {
        id: 15,
        question: "In 'Moby-Dick', what is Captain Ahab's ship called?",
        choices: ["The Nautilus", "The Pequod", "The Orca", "The Endeavour"],
        correctAnswer: 1,
        explanation: "The Pequod is the whaling ship commanded by Captain Ahab in Herman Melville's 1851 novel 'Moby-Dick'."
      },
      {
        id: 16,
        question: "Who wrote 'Crime and Punishment'?",
        choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        correctAnswer: 1,
        explanation: "Fyodor Dostoevsky published 'Crime and Punishment' in 1866, following the psychological torment of Raskolnikov after he commits murder."
      },
      {
        id: 17,
        question: "What is the real name of the protagonist in 'The Count of Monte Cristo'?",
        choices: ["Fernand Mondego", "Edmond Dantès", "Abbé Faria", "Gérard de Villefort"],
        correctAnswer: 1,
        explanation: "Edmond Dantès is the young sailor who is wrongfully imprisoned and later becomes the Count of Monte Cristo in Alexandre Dumas' 1844 novel."
      },
      {
        id: 18,
        question: "Who wrote 'Brave New World'?",
        choices: ["George Orwell", "Aldous Huxley", "H.G. Wells", "Ray Bradbury"],
        correctAnswer: 1,
        explanation: "Aldous Huxley published 'Brave New World' in 1932, depicting a dystopian future of genetic engineering and social conditioning."
      },
      {
        id: 19,
        question: "In 'The Chronicles of Narnia', which book comes first chronologically?",
        choices: ["The Lion, the Witch and the Wardrobe", "The Magician's Nephew", "The Horse and His Boy", "Prince Caspian"],
        correctAnswer: 1,
        explanation: "'The Magician's Nephew' depicts the creation of Narnia, though 'The Lion, the Witch and the Wardrobe' was published first."
      },
      {
        id: 20,
        question: "Who is the author of 'The Handmaid's Tale'?",
        choices: ["Ursula K. Le Guin", "Margaret Atwood", "Octavia Butler", "Doris Lessing"],
        correctAnswer: 1,
        explanation: "Margaret Atwood published 'The Handmaid's Tale' in 1985, a dystopian novel set in a totalitarian theocracy called Gilead."
      },
      {
        id: 21,
        question: "What is the name of the wizard school in 'A Wizard of Earthsea'?",
        choices: ["Hogwarts", "Roke", "Brakebills", "Unseen University"],
        correctAnswer: 1,
        explanation: "Roke is the island where the school for wizards is located in Ursula K. Le Guin's 1968 fantasy novel 'A Wizard of Earthsea'."
      },
      {
        id: 22,
        question: "Who wrote 'The Grapes of Wrath'?",
        choices: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "F. Scott Fitzgerald"],
        correctAnswer: 1,
        explanation: "John Steinbeck published 'The Grapes of Wrath' in 1939, following the Joad family during the Great Depression and Dust Bowl."
      },
      {
        id: 23,
        question: "In 'Jane Eyre', what is the name of Mr. Rochester's estate?",
        choices: ["Thornfield Hall", "Wuthering Heights", "Pemberley", "Manderley"],
        correctAnswer: 0,
        explanation: "Thornfield Hall is the grand house where Jane Eyre works as a governess and falls in love with Mr. Rochester in Charlotte Brontë's 1847 novel."
      },
      {
        id: 24,
        question: "Who wrote 'Slaughterhouse-Five'?",
        choices: ["Joseph Heller", "Kurt Vonnegut", "Ken Kesey", "Thomas Pynchon"],
        correctAnswer: 1,
        explanation: "Kurt Vonnegut published 'Slaughterhouse-Five' in 1969, based partly on his experiences as a POW during the bombing of Dresden."
      },
      {
        id: 25,
        question: "What is the name of the fictional African country in 'Black Panther' comics?",
        choices: ["Zamunda", "Wakanda", "Genosha", "Latveria"],
        correctAnswer: 1,
        explanation: "Wakanda is the technologically advanced African nation ruled by T'Challa, the Black Panther, created by Stan Lee and Jack Kirby in 1966."
      },
      {
        id: 26,
        question: "Who wrote 'The Bell Jar'?",
        choices: ["Virginia Woolf", "Sylvia Plath", "Anne Sexton", "Emily Dickinson"],
        correctAnswer: 1,
        explanation: "Sylvia Plath published 'The Bell Jar' in 1963, a semi-autobiographical novel about a young woman's mental breakdown."
      },
      {
        id: 27,
        question: "In 'Dune', what is the name of the desert planet?",
        choices: ["Tatooine", "Arrakis", "Caladan", "Giedi Prime"],
        correctAnswer: 1,
        explanation: "Arrakis, also known as Dune, is the desert planet and only source of the valuable spice melange in Frank Herbert's 1965 novel."
      },
      {
        id: 28,
        question: "Who wrote 'The Road'?",
        choices: ["Stephen King", "Cormac McCarthy", "Don DeLillo", "Philip Roth"],
        correctAnswer: 1,
        explanation: "Cormac McCarthy published 'The Road' in 2006, a post-apocalyptic novel about a father and son's journey that won the Pulitzer Prize."
      },
      {
        id: 29,
        question: "What is the name of the land where 'Alice's Adventures in Wonderland' takes place?",
        choices: ["Neverland", "Narnia", "Wonderland", "Oz"],
        correctAnswer: 2,
        explanation: "Wonderland is the fantastical realm Alice discovers after falling down the rabbit hole in Lewis Carroll's 1865 novel."
      },
      {
        id: 30,
        question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
        choices: ["Terry Pratchett", "Douglas Adams", "Neil Gaiman", "Isaac Asimov"],
        correctAnswer: 1,
        explanation: "Douglas Adams published 'The Hitchhiker's Guide to the Galaxy' in 1979, revealing that the answer to life, the universe, and everything is 42."
      }
    ]
  }
}
