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
  },
  moviesCinema: {
    id: 'moviesCinema',
    title: 'Movies & Cinema',
    description: 'Test your knowledge of Hollywood and world cinema.',
    icon: 'film',
    color: 'pink',
    questions: [
      {
        id: 1,
        question: "Which film won the first Academy Award for Best Picture in 1929?",
        choices: ["The Jazz Singer", "Wings", "Sunrise", "The Broadway Melody"],
        correctAnswer: 1,
        explanation: "'Wings' (1927) won the first Best Picture Oscar at the 1929 ceremony, a silent film about World War I fighter pilots."
      },
      {
        id: 2,
        question: "Who directed 'The Godfather' trilogy?",
        choices: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Brian De Palma"],
        correctAnswer: 1,
        explanation: "Francis Ford Coppola directed all three Godfather films (1972, 1974, 1990), creating one of cinema's most acclaimed sagas."
      },
      {
        id: 3,
        question: "What was the first fully computer-animated feature film?",
        choices: ["Shrek", "Toy Story", "A Bug's Life", "Finding Nemo"],
        correctAnswer: 1,
        explanation: "Pixar's 'Toy Story' (1995) was the first feature-length film made entirely with CGI animation."
      },
      {
        id: 4,
        question: "Which actor has won the most Academy Awards?",
        choices: ["Meryl Streep", "Katharine Hepburn", "Jack Nicholson", "Daniel Day-Lewis"],
        correctAnswer: 1,
        explanation: "Katharine Hepburn won 4 Best Actress Oscars, more than any other actor in history."
      },
      {
        id: 5,
        question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
        choices: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"],
        correctAnswer: 1,
        explanation: "James Cameron's 'Avatar' (2009) holds the record with over $2.9 billion worldwide, reclaiming the top spot after a 2022 re-release."
      },
      {
        id: 6,
        question: "Which director is known for the 'Dark Knight' trilogy?",
        choices: ["Zack Snyder", "Christopher Nolan", "Tim Burton", "Matt Reeves"],
        correctAnswer: 1,
        explanation: "Christopher Nolan directed Batman Begins (2005), The Dark Knight (2008), and The Dark Knight Rises (2012)."
      },
      {
        id: 7,
        question: "What year was the first 'Star Wars' film released?",
        choices: ["1975", "1977", "1979", "1980"],
        correctAnswer: 1,
        explanation: "Star Wars (later subtitled 'A New Hope') was released on May 25, 1977, revolutionizing the film industry."
      },
      {
        id: 8,
        question: "Who played the Joker in 'The Dark Knight' (2008)?",
        choices: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
        correctAnswer: 2,
        explanation: "Heath Ledger's iconic performance as the Joker earned him a posthumous Academy Award for Best Supporting Actor."
      },
      {
        id: 9,
        question: "Which studio created Mickey Mouse?",
        choices: ["Warner Bros.", "Universal", "Disney", "Paramount"],
        correctAnswer: 2,
        explanation: "Walt Disney created Mickey Mouse, who first appeared in 'Steamboat Willie' (1928)."
      },
      {
        id: 10,
        question: "What is the name of the fictional country in 'Black Panther'?",
        choices: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
        correctAnswer: 1,
        explanation: "Wakanda is the technologically advanced African nation featured in Marvel's 'Black Panther' (2018)."
      },
      {
        id: 11,
        question: "Who directed 'Pulp Fiction'?",
        choices: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Guy Ritchie"],
        correctAnswer: 1,
        explanation: "Quentin Tarantino wrote and directed 'Pulp Fiction' (1994), winning the Palme d'Or at Cannes."
      },
      {
        id: 12,
        question: "What was Alfred Hitchcock's first color film?",
        choices: ["Vertigo", "Rope", "Rear Window", "Psycho"],
        correctAnswer: 1,
        explanation: "'Rope' (1948) was Hitchcock's first color film, famous for appearing as one continuous take."
      },
      {
        id: 13,
        question: "Which film features the quote 'Here's looking at you, kid'?",
        choices: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
        correctAnswer: 1,
        explanation: "Humphrey Bogart's iconic line appears multiple times in 'Casablanca' (1942)."
      },
      {
        id: 14,
        question: "Who composed the music for 'Jaws'?",
        choices: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Bernard Herrmann"],
        correctAnswer: 1,
        explanation: "John Williams created the iconic two-note 'Jaws' theme, winning his second Academy Award."
      },
      {
        id: 15,
        question: "What is the longest film to win Best Picture at the Oscars?",
        choices: ["The Godfather Part II", "Gone with the Wind", "Lawrence of Arabia", "Ben-Hur"],
        correctAnswer: 1,
        explanation: "'Gone with the Wind' (1939) runs 3 hours 58 minutes, the longest Best Picture winner."
      },
      {
        id: 16,
        question: "Which country produces the most films annually?",
        choices: ["United States", "China", "India", "Nigeria"],
        correctAnswer: 2,
        explanation: "India's film industry (including Bollywood) produces over 1,500 films annually, more than any other country."
      },
      {
        id: 17,
        question: "Who directed 'Schindler's List'?",
        choices: ["Steven Spielberg", "Roman Polanski", "Stanley Kubrick", "Ridley Scott"],
        correctAnswer: 0,
        explanation: "Steven Spielberg directed 'Schindler's List' (1993), winning Best Director and Best Picture Oscars."
      },
      {
        id: 18,
        question: "What film features a character named Tyler Durden?",
        choices: ["American Psycho", "Fight Club", "Se7en", "The Machinist"],
        correctAnswer: 1,
        explanation: "Brad Pitt plays Tyler Durden in David Fincher's 'Fight Club' (1999), based on Chuck Palahniuk's novel."
      },
      {
        id: 19,
        question: "Which actress starred in 'Breakfast at Tiffany's'?",
        choices: ["Marilyn Monroe", "Grace Kelly", "Audrey Hepburn", "Elizabeth Taylor"],
        correctAnswer: 2,
        explanation: "Audrey Hepburn's portrayal of Holly Golightly in 'Breakfast at Tiffany's' (1961) is one of cinema's most iconic roles."
      },
      {
        id: 20,
        question: "What is the name of the island in 'Jurassic Park'?",
        choices: ["Skull Island", "Isla Nublar", "Isla Sorna", "Monster Island"],
        correctAnswer: 1,
        explanation: "Isla Nublar is the fictional Costa Rican island where Jurassic Park is located in the 1993 film."
      },
      {
        id: 21,
        question: "Who played Forrest Gump?",
        choices: ["Bill Murray", "Tom Hanks", "Robin Williams", "Jim Carrey"],
        correctAnswer: 1,
        explanation: "Tom Hanks won his second consecutive Best Actor Oscar for playing Forrest Gump (1994)."
      },
      {
        id: 22,
        question: "Which film introduced the Wilhelm Scream to popular culture?",
        choices: ["Distant Drums", "Star Wars", "Indiana Jones", "The Charge at Feather River"],
        correctAnswer: 3,
        explanation: "While first used in 'Distant Drums' (1951), 'The Charge at Feather River' (1953) named it after character Private Wilhelm."
      },
      {
        id: 23,
        question: "What was Stanley Kubrick's last film?",
        choices: ["Full Metal Jacket", "Eyes Wide Shut", "The Shining", "A Clockwork Orange"],
        correctAnswer: 1,
        explanation: "'Eyes Wide Shut' (1999) was Kubrick's final film, completed just days before his death."
      },
      {
        id: 24,
        question: "Which film features the line 'You can't handle the truth!'?",
        choices: ["The Firm", "A Few Good Men", "Jerry Maguire", "Top Gun"],
        correctAnswer: 1,
        explanation: "Jack Nicholson delivers this famous line in 'A Few Good Men' (1992), directed by Rob Reiner."
      },
      {
        id: 25,
        question: "What is the Rosebud in 'Citizen Kane'?",
        choices: ["A painting", "A sled", "A snow globe", "A music box"],
        correctAnswer: 1,
        explanation: "Rosebud is Charles Foster Kane's childhood sled, symbolizing lost innocence in Orson Welles' 1941 masterpiece."
      },
      {
        id: 26,
        question: "Who directed 'Inception'?",
        choices: ["Denis Villeneuve", "Christopher Nolan", "Ridley Scott", "David Lynch"],
        correctAnswer: 1,
        explanation: "Christopher Nolan wrote and directed 'Inception' (2010), exploring dreams within dreams."
      },
      {
        id: 27,
        question: "Which animated film was the first to be nominated for Best Picture?",
        choices: ["The Lion King", "Beauty and the Beast", "Up", "Toy Story"],
        correctAnswer: 1,
        explanation: "Disney's 'Beauty and the Beast' (1991) was the first animated film nominated for Best Picture."
      },
      {
        id: 28,
        question: "What year did Netflix release its first original film?",
        choices: ["2013", "2015", "2017", "2019"],
        correctAnswer: 1,
        explanation: "Netflix's first original film was 'Beasts of No Nation' in 2015, directed by Cary Joji Fukunaga."
      },
      {
        id: 29,
        question: "Who played the lead role in 'The Matrix'?",
        choices: ["Brad Pitt", "Keanu Reeves", "Nicolas Cage", "Johnny Depp"],
        correctAnswer: 1,
        explanation: "Keanu Reeves played Neo in 'The Matrix' (1999), which revolutionized action filmmaking."
      },
      {
        id: 30,
        question: "Which film won Best Picture at the 2020 Academy Awards?",
        choices: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: 2,
        explanation: "Bong Joon-ho's 'Parasite' became the first non-English language film to win Best Picture."
      }
    ]
  },
  worldGeography: {
    id: 'worldGeography',
    title: 'World Geography',
    description: 'Explore countries, capitals, and natural wonders.',
    icon: 'globe',
    color: 'green',
    questions: [
      {
        id: 1,
        question: "What is the largest country in the world by land area?",
        choices: ["Canada", "China", "United States", "Russia"],
        correctAnswer: 3,
        explanation: "Russia spans over 17.1 million square kilometers, covering more than 11% of the world's land area."
      },
      {
        id: 2,
        question: "Which river is the longest in the world?",
        choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1,
        explanation: "The Nile River stretches approximately 6,650 km through northeastern Africa."
      },
      {
        id: 3,
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
        explanation: "Canberra is Australia's capital, chosen as a compromise between rivals Sydney and Melbourne in 1908."
      },
      {
        id: 4,
        question: "Which desert is the largest hot desert in the world?",
        choices: ["Arabian Desert", "Gobi Desert", "Kalahari Desert", "Sahara Desert"],
        correctAnswer: 3,
        explanation: "The Sahara Desert covers about 9.2 million square kilometers across North Africa."
      },
      {
        id: 5,
        question: "How many countries are in Africa?",
        choices: ["48", "54", "60", "45"],
        correctAnswer: 1,
        explanation: "Africa has 54 recognized sovereign countries, making it the continent with the most nations."
      },
      {
        id: 6,
        question: "What is the smallest country in the world?",
        choices: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: 2,
        explanation: "Vatican City covers just 0.44 square kilometers, making it the world's smallest independent state."
      },
      {
        id: 7,
        question: "Which mountain range contains Mount Everest?",
        choices: ["Andes", "Alps", "Himalayas", "Rocky Mountains"],
        correctAnswer: 2,
        explanation: "Mount Everest (8,849m) is located in the Himalayas, on the border of Nepal and Tibet."
      },
      {
        id: 8,
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswer: 3,
        explanation: "Ottawa, in Ontario, has been Canada's capital since 1857, chosen by Queen Victoria."
      },
      {
        id: 9,
        question: "Which ocean is the largest?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: 2,
        explanation: "The Pacific Ocean covers about 165.25 million square kilometers, more than all land areas combined."
      },
      {
        id: 10,
        question: "What is the most populous country in the world?",
        choices: ["United States", "India", "China", "Indonesia"],
        correctAnswer: 1,
        explanation: "India surpassed China in 2023 to become the world's most populous country with over 1.4 billion people."
      },
      {
        id: 11,
        question: "Which European country has the most UNESCO World Heritage Sites?",
        choices: ["France", "Spain", "Italy", "Germany"],
        correctAnswer: 2,
        explanation: "Italy has the most UNESCO World Heritage Sites of any country, with over 50 locations."
      },
      {
        id: 12,
        question: "What is the deepest lake in the world?",
        choices: ["Lake Superior", "Lake Baikal", "Lake Tanganyika", "Caspian Sea"],
        correctAnswer: 1,
        explanation: "Lake Baikal in Siberia reaches a depth of 1,642 meters and contains 20% of the world's unfrozen fresh water."
      },
      {
        id: 13,
        question: "Which country has the longest coastline?",
        choices: ["Russia", "Indonesia", "Canada", "Australia"],
        correctAnswer: 2,
        explanation: "Canada has the world's longest coastline at over 202,080 kilometers, including all islands."
      },
      {
        id: 14,
        question: "What is the capital of Brazil?",
        choices: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correctAnswer: 2,
        explanation: "Brasília became Brazil's capital in 1960, a planned city designed by architect Oscar Niemeyer."
      },
      {
        id: 15,
        question: "Which strait separates Europe from Africa?",
        choices: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Bosphorus"],
        correctAnswer: 1,
        explanation: "The Strait of Gibraltar is only 14.3 km wide at its narrowest point, connecting the Atlantic to the Mediterranean."
      },
      {
        id: 16,
        question: "What is the highest waterfall in the world?",
        choices: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correctAnswer: 2,
        explanation: "Angel Falls in Venezuela drops 979 meters, making it the world's highest uninterrupted waterfall."
      },
      {
        id: 17,
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
        explanation: "Japan is called 'Nihon' or 'Nippon' in Japanese, meaning 'origin of the sun.'"
      },
      {
        id: 18,
        question: "What is the largest island in the world?",
        choices: ["Borneo", "Madagascar", "Greenland", "New Guinea"],
        correctAnswer: 2,
        explanation: "Greenland covers about 2.16 million square kilometers. Australia is larger but classified as a continent."
      },
      {
        id: 19,
        question: "Which river flows through Paris?",
        choices: ["Rhine", "Danube", "Seine", "Thames"],
        correctAnswer: 2,
        explanation: "The Seine River flows through the heart of Paris, with famous bridges like Pont Neuf crossing it."
      },
      {
        id: 20,
        question: "What is the capital of South Africa?",
        choices: ["Johannesburg", "Cape Town", "Pretoria", "All three serve as capitals"],
        correctAnswer: 3,
        explanation: "South Africa has three capitals: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)."
      },
      {
        id: 21,
        question: "Which country has the most islands?",
        choices: ["Indonesia", "Philippines", "Sweden", "Finland"],
        correctAnswer: 2,
        explanation: "Sweden has approximately 267,570 islands, though only about 1,000 are inhabited."
      },
      {
        id: 22,
        question: "What is the driest place on Earth?",
        choices: ["Sahara Desert", "Death Valley", "Atacama Desert", "Arabian Desert"],
        correctAnswer: 2,
        explanation: "The Atacama Desert in Chile is the driest non-polar place on Earth, with some areas having no recorded rainfall."
      },
      {
        id: 23,
        question: "Which two countries share the longest international border?",
        choices: ["USA and Mexico", "Russia and China", "USA and Canada", "Argentina and Chile"],
        correctAnswer: 2,
        explanation: "The US-Canada border stretches 8,891 km (including Alaska), the world's longest international boundary."
      },
      {
        id: 24,
        question: "What is the capital of New Zealand?",
        choices: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
        correctAnswer: 1,
        explanation: "Wellington became New Zealand's capital in 1865 due to its central location between the North and South Islands."
      },
      {
        id: 25,
        question: "Which African country was never colonized?",
        choices: ["Egypt", "Ethiopia", "Morocco", "Ghana"],
        correctAnswer: 1,
        explanation: "Ethiopia (except for a brief Italian occupation 1936-1941) and Liberia are the only African countries never formally colonized."
      },
      {
        id: 26,
        question: "What is the largest lake in Africa?",
        choices: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
        correctAnswer: 2,
        explanation: "Lake Victoria is Africa's largest lake by area at 68,800 square kilometers, shared by Tanzania, Uganda, and Kenya."
      },
      {
        id: 27,
        question: "Which country is home to Machu Picchu?",
        choices: ["Bolivia", "Ecuador", "Peru", "Colombia"],
        correctAnswer: 2,
        explanation: "Machu Picchu is a 15th-century Incan citadel located in the Andes Mountains of Peru."
      },
      {
        id: 28,
        question: "What is the only continent without a desert?",
        choices: ["Europe", "Antarctica", "South America", "None - all have deserts"],
        correctAnswer: 0,
        explanation: "Europe is the only continent without a true desert, though it has semi-arid regions in Spain and southeastern areas."
      },
      {
        id: 29,
        question: "Which country has the most time zones?",
        choices: ["Russia", "United States", "France", "China"],
        correctAnswer: 2,
        explanation: "France has 12 time zones due to its overseas territories, more than any other country including Russia (11)."
      },
      {
        id: 30,
        question: "What is the capital of Turkey?",
        choices: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correctAnswer: 1,
        explanation: "Ankara has been Turkey's capital since 1923, though Istanbul remains the largest city and cultural center."
      }
    ]
  },
  musicHistory: {
    id: 'musicHistory',
    title: 'Music History',
    description: 'From classical to rock, test your musical knowledge.',
    icon: 'music',
    color: 'cyan',
    questions: [
      {
        id: 1,
        question: "Which band released the album 'Abbey Road'?",
        choices: ["The Rolling Stones", "The Beatles", "The Who", "Led Zeppelin"],
        correctAnswer: 1,
        explanation: "'Abbey Road' (1969) was the last album recorded by The Beatles, featuring the iconic crosswalk cover."
      },
      {
        id: 2,
        question: "Who is known as the 'King of Pop'?",
        choices: ["Prince", "Elvis Presley", "Michael Jackson", "Stevie Wonder"],
        correctAnswer: 2,
        explanation: "Michael Jackson earned the title through his groundbreaking music, videos, and global influence on pop culture."
      },
      {
        id: 3,
        question: "What instrument did Jimi Hendrix famously play?",
        choices: ["Bass", "Drums", "Electric guitar", "Keyboard"],
        correctAnswer: 2,
        explanation: "Jimi Hendrix is widely considered the greatest electric guitarist ever, known for his innovative playing style."
      },
      {
        id: 4,
        question: "Which composer wrote 'The Four Seasons'?",
        choices: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
        correctAnswer: 2,
        explanation: "Antonio Vivaldi composed 'The Four Seasons' in 1725, a set of four violin concertos representing each season."
      },
      {
        id: 5,
        question: "What year did MTV first broadcast?",
        choices: ["1979", "1981", "1983", "1985"],
        correctAnswer: 1,
        explanation: "MTV launched on August 1, 1981, with 'Video Killed the Radio Star' by The Buggles as its first video."
      },
      {
        id: 6,
        question: "Who wrote the opera 'The Marriage of Figaro'?",
        choices: ["Verdi", "Puccini", "Mozart", "Wagner"],
        correctAnswer: 2,
        explanation: "Wolfgang Amadeus Mozart composed 'The Marriage of Figaro' in 1786, one of the most performed operas."
      },
      {
        id: 7,
        question: "Which artist had hits with 'Purple Rain' and '1999'?",
        choices: ["David Bowie", "Prince", "George Michael", "Michael Jackson"],
        correctAnswer: 1,
        explanation: "Prince was a musical genius who played multiple instruments and created a unique blend of rock, funk, and R&B."
      },
      {
        id: 8,
        question: "What is the best-selling album of all time?",
        choices: ["Back in Black", "The Dark Side of the Moon", "Thriller", "The Bodyguard Soundtrack"],
        correctAnswer: 2,
        explanation: "Michael Jackson's 'Thriller' (1982) has sold over 70 million copies worldwide."
      },
      {
        id: 9,
        question: "Which band was Freddie Mercury the lead singer of?",
        choices: ["Led Zeppelin", "Queen", "Pink Floyd", "Deep Purple"],
        correctAnswer: 1,
        explanation: "Freddie Mercury fronted Queen from 1970 until his death in 1991, known for his powerful voice and showmanship."
      },
      {
        id: 10,
        question: "What genre originated in the Bronx in the 1970s?",
        choices: ["Disco", "Punk", "Hip hop", "New wave"],
        correctAnswer: 2,
        explanation: "Hip hop emerged from block parties in the Bronx, combining DJing, MCing, breakdancing, and graffiti art."
      },
      {
        id: 11,
        question: "Who composed 'Symphony No. 9' including 'Ode to Joy'?",
        choices: ["Bach", "Beethoven", "Brahms", "Handel"],
        correctAnswer: 1,
        explanation: "Beethoven completed his Ninth Symphony in 1824, remarkable as he was almost completely deaf by then."
      },
      {
        id: 12,
        question: "Which singer was known as 'The Queen of Soul'?",
        choices: ["Diana Ross", "Aretha Franklin", "Whitney Houston", "Tina Turner"],
        correctAnswer: 1,
        explanation: "Aretha Franklin's powerful voice and hits like 'Respect' earned her this title and 18 Grammy Awards."
      },
      {
        id: 13,
        question: "What instrument is Yo-Yo Ma famous for playing?",
        choices: ["Violin", "Piano", "Cello", "Flute"],
        correctAnswer: 2,
        explanation: "Yo-Yo Ma is considered one of the greatest cellists alive, known for his technical skill and diverse repertoire."
      },
      {
        id: 14,
        question: "Which band performed at the original Woodstock in 1969?",
        choices: ["Led Zeppelin", "The Doors", "Jimi Hendrix Experience", "Pink Floyd"],
        correctAnswer: 2,
        explanation: "Jimi Hendrix closed Woodstock with his legendary performance of 'The Star-Spangled Banner.'"
      },
      {
        id: 15,
        question: "What was Elvis Presley's first number-one hit?",
        choices: ["Hound Dog", "Heartbreak Hotel", "Jailhouse Rock", "Love Me Tender"],
        correctAnswer: 1,
        explanation: "'Heartbreak Hotel' (1956) was Elvis's first #1 hit and helped establish him as the 'King of Rock and Roll.'"
      },
      {
        id: 16,
        question: "Which country is the origin of reggae music?",
        choices: ["Cuba", "Trinidad", "Jamaica", "Haiti"],
        correctAnswer: 2,
        explanation: "Reggae developed in Jamaica in the late 1960s, with Bob Marley becoming its most famous ambassador."
      },
      {
        id: 17,
        question: "Who composed 'The Nutcracker' ballet?",
        choices: ["Stravinsky", "Tchaikovsky", "Prokofiev", "Rachmaninoff"],
        correctAnswer: 1,
        explanation: "Pyotr Ilyich Tchaikovsky composed 'The Nutcracker' in 1892, now a Christmas tradition worldwide."
      },
      {
        id: 18,
        question: "What was the first music video played on MTV?",
        choices: ["Thriller", "Video Killed the Radio Star", "Money for Nothing", "Take On Me"],
        correctAnswer: 1,
        explanation: "'Video Killed the Radio Star' by The Buggles was MTV's first video, prophetically about technology changing music."
      },
      {
        id: 19,
        question: "Which rapper founded the record label Death Row Records?",
        choices: ["Dr. Dre", "Suge Knight", "Snoop Dogg", "Tupac Shakur"],
        correctAnswer: 1,
        explanation: "Suge Knight co-founded Death Row Records in 1991, which launched careers of Dr. Dre, Snoop Dogg, and 2Pac."
      },
      {
        id: 20,
        question: "What instrument does a concertmaster play in an orchestra?",
        choices: ["Piano", "Cello", "Violin", "Oboe"],
        correctAnswer: 2,
        explanation: "The concertmaster is the lead first violinist, sitting to the conductor's left and leading the string section."
      },
      {
        id: 21,
        question: "Which artist released 'Lemonade' in 2016?",
        choices: ["Rihanna", "Beyoncé", "Adele", "Taylor Swift"],
        correctAnswer: 1,
        explanation: "Beyoncé's visual album 'Lemonade' addressed themes of infidelity, Black womanhood, and empowerment."
      },
      {
        id: 22,
        question: "What was Nirvana's breakthrough album?",
        choices: ["Bleach", "Nevermind", "In Utero", "MTV Unplugged in New York"],
        correctAnswer: 1,
        explanation: "'Nevermind' (1991) featuring 'Smells Like Teen Spirit' brought grunge into the mainstream."
      },
      {
        id: 23,
        question: "Who is known as the 'Godfather of Soul'?",
        choices: ["Ray Charles", "James Brown", "Marvin Gaye", "Sam Cooke"],
        correctAnswer: 1,
        explanation: "James Brown earned this title through his energetic performances and influence on funk, soul, and R&B."
      },
      {
        id: 24,
        question: "Which classical period came before the Romantic era?",
        choices: ["Baroque", "Classical", "Renaissance", "Medieval"],
        correctAnswer: 1,
        explanation: "The Classical period (1750-1820) preceded the Romantic era, featuring Mozart, Haydn, and early Beethoven."
      },
      {
        id: 25,
        question: "What band did Kurt Cobain front?",
        choices: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"],
        correctAnswer: 2,
        explanation: "Kurt Cobain was the frontman of Nirvana until his death in 1994, defining the grunge movement."
      },
      {
        id: 26,
        question: "Which artist has won the most Grammy Awards?",
        choices: ["Quincy Jones", "Beyoncé", "Georg Solti", "Stevie Wonder"],
        correctAnswer: 1,
        explanation: "Beyoncé holds the record with 32 Grammy wins as of 2023, surpassing the previous record held by Georg Solti."
      },
      {
        id: 27,
        question: "What year was the first Grammy Awards ceremony held?",
        choices: ["1955", "1959", "1963", "1967"],
        correctAnswer: 1,
        explanation: "The first Grammy Awards ceremony was held on May 4, 1959, honoring recordings from 1958."
      },
      {
        id: 28,
        question: "Which composer went deaf but continued to compose?",
        choices: ["Mozart", "Bach", "Beethoven", "Chopin"],
        correctAnswer: 2,
        explanation: "Beethoven began losing his hearing in his late 20s but composed some of his greatest works while deaf."
      },
      {
        id: 29,
        question: "What is the name of Taylor Swift's re-recorded album series?",
        choices: ["Taylor's Cut", "Taylor's Version", "Swift Sessions", "Original Taylor"],
        correctAnswer: 1,
        explanation: "Swift began re-recording albums as 'Taylor's Version' in 2021 to own her master recordings."
      },
      {
        id: 30,
        question: "Which British band is known for 'Bohemian Rhapsody'?",
        choices: ["The Who", "Queen", "Led Zeppelin", "Pink Floyd"],
        correctAnswer: 1,
        explanation: "Queen's 'Bohemian Rhapsody' (1975) is a six-minute operatic rock epic written by Freddie Mercury."
      }
    ]
  }
}
