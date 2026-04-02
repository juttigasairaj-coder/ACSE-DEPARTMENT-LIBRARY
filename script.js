let books = [{ id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "DSA", totalCopies: 5, availableCopies: 5 },
  { id: 2, title: "Algorithms Unlocked", author: "Thomas H. Cormen", category: "DSA", totalCopies: 3, availableCopies: 3 },
  { id: 3, title: "The Algorithm Design Manual", author: "Steven Skiena", category: "DSA", totalCopies: 4, availableCopies: 4 },
  { id: 4, title: "Grokking Algorithms", author: "Aditya Bhargava", category: "DSA", totalCopies: 5, availableCopies: 5 },
  { id: 5, title: "Data Structures Using C", author: "Reema Thareja", category: "DSA", totalCopies: 4, availableCopies: 4 },
  { id: 6, title: "Algorithms in a Nutshell", author: "George Heineman", category: "DSA", totalCopies: 3, availableCopies: 3 },
  { id: 7, title: "Problem Solving with Algorithms", author: "Brad Miller", category: "DSA", totalCopies: 3, availableCopies: 3 },
  { id: 8, title: "Algorithmic Thinking", author: "Daniel Zingaro", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 9, title: "Data Structures and Algorithms Made Easy", author: "Narasimha Karumanchi", category: "DSA", totalCopies: 5, availableCopies: 5 },
  { id: 10, title: "Advanced Data Structures", author: "Peter Brass", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 11, title: "Java: The Complete Reference", author: "Herbert Schildt", category: "Java", totalCopies: 5, availableCopies: 5 },
  { id: 12, title: "Effective Java", author: "Joshua Bloch", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 13, title: "Head First Java", author: "Kathy Sierra", category: "Java", totalCopies: 4, availableCopies: 4 },
  { id: 14, title: "Core Java Volume I", author: "Cay S. Horstmann", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 15, title: "Java Performance", author: "Scott Oaks", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 16, title: "Java Concurrency in Practice", author: "Brian Goetz", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 17, title: "Spring in Action", author: "Craig Walls", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 18, title: "Hibernate in Action", author: "Gavin King", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 19, title: "Java Network Programming", author: "Elliotte Rusty Harold", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 20, title: "Java Generics and Collections", author: "Maurice Naftalin", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 21, title: "Learning Python", author: "Mark Lutz", category: "Python", totalCopies: 6, availableCopies: 6 },
  { id: 22, title: "Python Crash Course", author: "Eric Matthes", category: "Python", totalCopies: 5, availableCopies: 5 },
  { id: 23, title: "Fluent Python", author: "Luciano Ramalho", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 24, title: "Think Python", author: "Allen Downey", category: "Python", totalCopies: 4, availableCopies: 4 },
  { id: 25, title: "Python Tricks", author: "Dan Bader", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 26, title: "Automate the Boring Stuff with Python", author: "Al Sweigart", category: "Python", totalCopies: 4, availableCopies: 4 },
  { id: 27, title: "Python for Data Analysis", author: "Wes McKinney", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 28, title: "Effective Python", author: "Brett Slatkin", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 29, title: "Python Cookbook", author: "David Beazley", category: "Python", totalCopies: 2, availableCopies: 2 },
  { id: 30, title: "Programming Python", author: "Mark Lutz", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 31, title: "The C Programming Language", author: "Kernighan & Ritchie", category: "C", totalCopies: 5, availableCopies: 5 },
  { id: 32, title: "Programming in ANSI C", author: "E. Balagurusamy", category: "C", totalCopies: 6, availableCopies: 6 },
  { id: 33, title: "Let Us C", author: "Yashavant Kanetkar", category: "C", totalCopies: 5, availableCopies: 5 },
  { id: 34, title: "C in Depth", author: "Deepali Srivastava", category: "C", totalCopies: 4, availableCopies: 4 },
  { id: 35, title: "Expert C Programming", author: "Peter van der Linden", category: "C", totalCopies: 3, availableCopies: 3 },
  { id: 36, title: "C Programming Absolute Beginner's Guide", author: "Greg Perry", category: "C", totalCopies: 3, availableCopies: 3 },
  { id: 37, title: "Pointers in C", author: "Yashavant Kanetkar", category: "C", totalCopies: 3, availableCopies: 3 },
  { id: 38, title: "C Interfaces and Implementations", author: "David Hanson", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 39, title: "Modern C", author: "Jens Gustedt", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 40, title: "Head First C", author: "David Griffiths", category: "C", totalCopies: 3, availableCopies: 3 },
  { id: 41, title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig", category: "AI", totalCopies: 4, availableCopies: 4 },
  { id: 42, title: "Machine Learning", author: "Tom Mitchell", category: "ML", totalCopies: 3, availableCopies: 3 },
  { id: 43, title: "Deep Learning", author: "Ian Goodfellow", category: "ML", totalCopies: 2, availableCopies: 2 },
  { id: 44, title: "Pattern Recognition and Machine Learning", author: "Christopher Bishop", category: "ML", totalCopies: 3, availableCopies: 3 },
  { id: 45, title: "Machine Learning Yearning", author: "Andrew Ng", category: "ML", totalCopies: 4, availableCopies: 4 },
  { id: 46, title: "A First Course in Probability", author: "Sheldon Ross", category: "Probability", totalCopies: 4, availableCopies: 4 },
  { id: 47, title: "Introduction to Probability", author: "Blitzstein & Hwang", category: "Probability", totalCopies: 3, availableCopies: 3 },
  { id: 48, title: "Probability and Statistics for Engineers", author: "Jay Devore", category: "Probability", totalCopies: 3, availableCopies: 3 },
  { id: 49, title: "Fundamentals of Probability", author: "Saul Stahl", category: "Probability", totalCopies: 2, availableCopies: 2 },
  { id: 50, title: "Applied Probability Models", author: "Sheldon Ross", category: "Probability", totalCopies: 3, availableCopies: 3 },
  { id: 51, title: "Calculus Early Transcendentals", author: "James Stewart", category: "Calculus", totalCopies: 5, availableCopies: 5 },
  { id: 52, title: "Thomas Calculus", author: "George Thomas", category: "Calculus", totalCopies: 4, availableCopies: 4 },
  { id: 53, title: "Calculus Made Easy", author: "Silvanus Thompson", category: "Calculus", totalCopies: 3, availableCopies: 3 },
  { id: 54, title: "Advanced Engineering Mathematics", author: "Erwin Kreyszig", category: "Calculus", totalCopies: 4, availableCopies: 4 },
  { id: 55, title: "Vector Calculus", author: "Jerrold Marsden", category: "Calculus", totalCopies: 2, availableCopies: 2 },
  { id: 56, title: "Differential Equations", author: "Dennis Zill", category: "LAODE", totalCopies: 4, availableCopies: 4 },
  { id: 57, title: "Ordinary Differential Equations", author: "Boyce & DiPrima", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 58, title: "Linear Algebra and Its Applications", author: "Gilbert Strang", category: "LAODE", totalCopies: 5, availableCopies: 5 },
  { id: 59, title: "Introduction to Linear Algebra", author: "Gilbert Strang", category: "LAODE", totalCopies: 4, availableCopies: 4 },
  { id: 60, title: "Matrix Analysis", author: "Roger Horn", category: "LAODE", totalCopies: 3, availableCopies: 3 },
  { id: 61, title: "Professional Ethics", author: "R. Subramanian", category: "EPCS", totalCopies: 3, availableCopies: 3 },
  { id: 62, title: "Business Communication", author: "Meenakshi Raman", category: "EPCS", totalCopies: 4, availableCopies: 4 },
  { id: 63, title: "Technical Communication", author: "Mike Markel", category: "EPCS", totalCopies: 3, availableCopies: 3 },
  { id: 64, title: "Soft Skills", author: "Alex K", category: "EPCS", totalCopies: 5, availableCopies: 5 },
  { id: 65, title: "Communication Skills", author: "Sanjay Kumar", category: "EPCS", totalCopies: 4, availableCopies: 4 },
  { id: 66, title: "Clean Code", author: "Robert C. Martin", category: "Software", totalCopies: 4, availableCopies: 4 },
  { id: 67, title: "Design Patterns", author: "Erich Gamma", category: "Software", totalCopies: 3, availableCopies: 3 },
  { id: 68, title: "Refactoring", author: "Martin Fowler", category: "Software", totalCopies: 3, availableCopies: 3 },
  { id: 69, title: "Code Complete", author: "Steve McConnell", category: "Software", totalCopies: 4, availableCopies: 4 },
  { id: 70, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Software", totalCopies: 5, availableCopies: 5 },
  { id: 71, title: "Computer Organization and Design", author: "David Patterson", category: "Architecture", totalCopies: 3, availableCopies: 3 },
  { id: 72, title: "Modern Operating Systems", author: "Andrew Tanenbaum", category: "OS", totalCopies: 4, availableCopies: 4 },
  { id: 73, title: "Distributed Systems", author: "Maarten van Steen", category: "OS", totalCopies: 3, availableCopies: 3 },
  { id: 74, title: "Cryptography and Network Security", author: "William Stallings", category: "Security", totalCopies: 4, availableCopies: 4 },
  { id: 75, title: "Computer Security Principles", author: "William Stallings", category: "Security", totalCopies: 2, availableCopies: 2 },
  { id: 76, title: "Web Technologies", author: "Uttam Roy", category: "Web", totalCopies: 4, availableCopies: 4 },
  { id: 77, title: "HTML and CSS", author: "Jon Duckett", category: "Web", totalCopies: 5, availableCopies: 5 },
  { id: 78, title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "Web", totalCopies: 3, availableCopies: 3 },
  { id: 79, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Web", totalCopies: 4, availableCopies: 4 },
  { id: 80, title: "You Don't Know JS", author: "Kyle Simpson", category: "Web", totalCopies: 3, availableCopies: 3 },
  { id: 81, title: "Discrete Mathematics", author: "Kenneth Rosen", category: "Mathematics", totalCopies: 5, availableCopies: 5 },
  { id: 82, title: "Graph Theory", author: "Reinhard Diestel", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 83, title: "Combinatorics", author: "Richard Stanley", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 84, title: "Linear Programming", author: "Vasek Chvatal", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 85, title: "Convex Optimization", author: "Stephen Boyd", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 86, title: "Cloud Computing", author: "Rajkumar Buyya", category: "Cloud", totalCopies: 3, availableCopies: 3 },
  { id: 87, title: "AWS Certified Solutions Architect", author: "Ben Piper", category: "Cloud", totalCopies: 2, availableCopies: 2 },
  { id: 88, title: "Azure Fundamentals", author: "Jim Cheshire", category: "Cloud", totalCopies: 2, availableCopies: 2 },
  { id: 89, title: "Google Cloud Platform Basics", author: "Dan Sullivan", category: "Cloud", totalCopies: 2, availableCopies: 2 },
  { id: 90, title: "Cloud Native DevOps", author: "Justin Garrison", category: "Cloud", totalCopies: 2, availableCopies: 2 },
  { id: 91, title: "Big Data Analytics", author: "Seema Acharya", category: "Data Science", totalCopies: 3, availableCopies: 3 },
  { id: 92, title: "Data Science from Scratch", author: "Joel Grus", category: "Data Science", totalCopies: 3, availableCopies: 3 },
  { id: 93, title: "Data Mining Concepts", author: "Jiawei Han", category: "Data Science", totalCopies: 3, availableCopies: 3 },
  { id: 94, title: "Practical Statistics for Data Scientists", author: "Peter Bruce", category: "Data Science", totalCopies: 2, availableCopies: 2 },
  { id: 95, title: "Storytelling with Data", author: "Cole Knaflic", category: "Data Science", totalCopies: 2, availableCopies: 2 },
  { id: 96, title: "Numerical Methods for Engineers", author: "Steven Chapra", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 97, title: "Operations Research", author: "Hamdy Taha", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 98, title: "Game Theory", author: "Drew Fudenberg", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 99, title: "Optimization Theory", author: "Dimitri Bertsekas", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 100, title: "Applied Linear Algebra", author: "Peter Olver", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 101, title: "Embedded Systems", author: "Raj Kamal", category: "Electronics", totalCopies: 3, availableCopies: 3 },
  { id: 102, title: "Digital Logic Design", author: "Morris Mano", category: "Electronics", totalCopies: 4, availableCopies: 4 },
  { id: 103, title: "Microprocessors", author: "Ramesh Gaonkar", category: "Electronics", totalCopies: 3, availableCopies: 3 },
  { id: 104, title: "VLSI Design", author: "Neil Weste", category: "Electronics", totalCopies: 2, availableCopies: 2 },
  { id: 105, title: "Signals and Systems", author: "Alan Oppenheim", category: "Electronics", totalCopies: 3, availableCopies: 3 },
  { id: 106, title: "Introduction to Robotics", author: "John Craig", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 107, title: "Computer Vision", author: "Richard Szeliski", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 108, title: "Natural Language Processing", author: "Daniel Jurafsky", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 109, title: "Reinforcement Learning", author: "Richard Sutton", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 110, title: "Speech Processing", author: "Li Deng", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 111, title: "Blockchain Basics", author: "Daniel Drescher", category: "Technology", totalCopies: 2, availableCopies: 2 },
  { id: 112, title: "Ethereum Smart Contracts", author: "Mayukh Mukhopadhyay", category: "Technology", totalCopies: 2, availableCopies: 2 },
  { id: 113, title: "Internet of Things", author: "Arshdeep Bahga", category: "Technology", totalCopies: 3, availableCopies: 3 },
  { id: 114, title: "Augmented Reality", author: "Dieter Schmalstieg", category: "Technology", totalCopies: 2, availableCopies: 2 },
  { id: 115, title: "Virtual Reality", author: "Jason Jerald", category: "Technology", totalCopies: 2, availableCopies: 2 },
  { id: 116, title: "Human Computer Interaction", author: "Alan Dix", category: "Software", totalCopies: 3, availableCopies: 3 },
  { id: 117, title: "Software Testing", author: "Ron Patton", category: "Software", totalCopies: 3, availableCopies: 3 },
  { id: 118, title: "Agile Software Development", author: "Robert Martin", category: "Software", totalCopies: 3, availableCopies: 3 },
  { id: 119, title: "DevOps Handbook", author: "Gene Kim", category: "Software", totalCopies: 2, availableCopies: 2 },
  { id: 120, title: "Continuous Delivery", author: "Jez Humble", category: "Software", totalCopies: 2, availableCopies: 2 },
  { id: 121, title: "Advanced Java Programming", author: "Herbert Schildt", category: "Java", totalCopies: 3, availableCopies: 3 },
  { id: 122, title: "Java Web Services", author: "Richard Monson", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 123, title: "Java Design Patterns", author: "Vaskaran Sarcar", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 124, title: "Modern Java Recipes", author: "Ken Kousen", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 125, title: "Java Cookbook", author: "Ian Darwin", category: "Java", totalCopies: 2, availableCopies: 2 },
  { id: 126, title: "Python Machine Learning", author: "Sebastian Raschka", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 127, title: "Deep Learning with Python", author: "Francois Chollet", category: "Python", totalCopies: 2, availableCopies: 2 },
  { id: 128, title: "Python Data Science Handbook", author: "Jake VanderPlas", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 129, title: "Hands-On Python", author: "Brian Overland", category: "Python", totalCopies: 2, availableCopies: 2 },
  { id: 130, title: "Python for Everybody", author: "Charles Severance", category: "Python", totalCopies: 3, availableCopies: 3 },
  { id: 131, title: "Advanced C Programming", author: "Peter van der Linden", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 132, title: "C Programming FAQs", author: "Steve Summit", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 133, title: "C Unleashed", author: "Richard Heathfield", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 134, title: "Secure Coding in C", author: "Robert Seacord", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 135, title: "Embedded C Programming", author: "Michael Barr", category: "C", totalCopies: 2, availableCopies: 2 },
  { id: 136, title: "Advanced Algorithms", author: "Erik Demaine", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 137, title: "Competitive Programming", author: "Steven Halim", category: "DSA", totalCopies: 3, availableCopies: 3 },
  { id: 138, title: "Elements of Programming Interviews", author: "Adnan Aziz", category: "DSA", totalCopies: 3, availableCopies: 3 },
  { id: 139, title: "Programming Pearls", author: "Jon Bentley", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 140, title: "Algorithmic Puzzles", author: "Anany Levitin", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 141, title: "Probability with Applications", author: "Sheldon Ross", category: "Probability", totalCopies: 3, availableCopies: 3 },
  { id: 142, title: "Statistical Methods", author: "Snedecor", category: "Probability", totalCopies: 2, availableCopies: 2 },
  { id: 143, title: "Bayesian Data Analysis", author: "Andrew Gelman", category: "Probability", totalCopies: 2, availableCopies: 2 },
  { id: 144, title: "Time Series Analysis", author: "James Hamilton", category: "Probability", totalCopies: 2, availableCopies: 2 },
  { id: 145, title: "Stochastic Processes", author: "Sheldon Ross", category: "Probability", totalCopies: 2, availableCopies: 2 },
  { id: 146, title: "Multivariable Calculus", author: "James Stewart", category: "Calculus", totalCopies: 3, availableCopies: 3 },
  { id: 147, title: "Real Analysis", author: "Walter Rudin", category: "Calculus", totalCopies: 2, availableCopies: 2 },
  { id: 148, title: "Complex Analysis", author: "Elias Stein", category: "Calculus", totalCopies: 2, availableCopies: 2 },
  { id: 149, title: "Calculus of Variations", author: "I.M. Gelfand", category: "Calculus", totalCopies: 2, availableCopies: 2 },
  { id: 150, title: "Integral Calculus", author: "Shanti Narayan", category: "Calculus", totalCopies: 3, availableCopies: 3 },
  { id: 151, title: "Advanced Differential Equations", author: "M.D. Raisinghania", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 152, title: "Linear Algebra Problem Book", author: "Paul Halmos", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 153, title: "Eigenvalues and Eigenvectors", author: "K. Hoffman", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 154, title: "Numerical Linear Algebra", author: "Lloyd Trefethen", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 155, title: "Matrix Computations", author: "Gene Golub", category: "LAODE", totalCopies: 2, availableCopies: 2 },
  { id: 156, title: "Ethics in Engineering", author: "Charles Harris", category: "EPCS", totalCopies: 3, availableCopies: 3 },
  { id: 157, title: "Professional Communication Skills", author: "Sanjay Kumar", category: "EPCS", totalCopies: 3, availableCopies: 3 },
  { id: 158, title: "Technical Writing", author: "Donald Norman", category: "EPCS", totalCopies: 2, availableCopies: 2 },
  { id: 159, title: "Business Etiquette", author: "Shital Kakkar", category: "EPCS", totalCopies: 2, availableCopies: 2 },
  { id: 160, title: "Workplace Communication", author: "Larry Barker", category: "EPCS", totalCopies: 2, availableCopies: 2 },
  { id: 161, title: "Quantum Computing", author: "Michael Nielsen", category: "Technology", totalCopies: 2, availableCopies: 2 },
  { id: 162, title: "Cybersecurity Essentials", author: "Charles Brooks", category: "Security", totalCopies: 2, availableCopies: 2 },
  { id: 163, title: "Ethical Hacking", author: "EC-Council", category: "Security", totalCopies: 2, availableCopies: 2 },
  { id: 164, title: "Malware Analysis", author: "Michael Sikorski", category: "Security", totalCopies: 2, availableCopies: 2 },
  { id: 165, title: "Network Defense", author: "Richard Bejtlich", category: "Security", totalCopies: 2, availableCopies: 2 },
  { id: 166, title: "Parallel Computing", author: "Ananth Grama", category: "CS", totalCopies: 2, availableCopies: 2 },
  { id: 167, title: "High Performance Computing", author: "Kevin Dowd", category: "CS", totalCopies: 2, availableCopies: 2 },
  { id: 168, title: "Compiler Design", author: "Alfred Aho", category: "CS", totalCopies: 3, availableCopies: 3 },
  { id: 169, title: "Theory of Computation", author: "Michael Sipser", category: "CS", totalCopies: 3, availableCopies: 3 },
  { id: 170, title: "Formal Languages", author: "John Hopcroft", category: "CS", totalCopies: 2, availableCopies: 2 },
  { id: 171, title: "Database System Concepts", author: "Silberschatz", category: "Database", totalCopies: 3, availableCopies: 3 },
  { id: 172, title: "SQL Fundamentals", author: "John Viescas", category: "Database", totalCopies: 2, availableCopies: 2 },
  { id: 173, title: "NoSQL Distilled", author: "Pramod Sadalage", category: "Database", totalCopies: 2, availableCopies: 2 },
  { id: 174, title: "MongoDB Basics", author: "Kristina Chodorow", category: "Database", totalCopies: 2, availableCopies: 2 },
  { id: 175, title: "Database Design", author: "Carlos Coronel", category: "Database", totalCopies: 2, availableCopies: 2 },
  { id: 176, title: "Android Programming", author: "Bill Phillips", category: "Mobile", totalCopies: 2, availableCopies: 2 },
  { id: 177, title: "iOS Development", author: "Stanford", category: "Mobile", totalCopies: 2, availableCopies: 2 },
  { id: 178, title: "Flutter Development", author: "Carmine Zaccagnino", category: "Mobile", totalCopies: 2, availableCopies: 2 },
  { id: 179, title: "React Native Guide", author: "Adam Boduch", category: "Mobile", totalCopies: 2, availableCopies: 2 },
  { id: 180, title: "Mobile App Development", author: "Jakob Nielsen", category: "Mobile", totalCopies: 2, availableCopies: 2 },
  { id: 181, title: "Game Development with Unity", author: "Will Goldstone", category: "Game Dev", totalCopies: 2, availableCopies: 2 },
  { id: 182, title: "Unreal Engine Basics", author: "William Sherif", category: "Game Dev", totalCopies: 2, availableCopies: 2 },
  { id: 183, title: "Game Programming Patterns", author: "Robert Nystrom", category: "Game Dev", totalCopies: 2, availableCopies: 2 },
  { id: 184, title: "3D Math for Game Dev", author: "Fletcher Dunn", category: "Game Dev", totalCopies: 2, availableCopies: 2 },
  { id: 185, title: "Game AI Pro", author: "Steve Rabin", category: "Game Dev", totalCopies: 2, availableCopies: 2 },
  { id: 186, title: "Digital Image Processing", author: "Rafael Gonzalez", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 187, title: "Pattern Classification", author: "Duda & Hart", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 188, title: "Information Retrieval", author: "Manning", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 189, title: "Knowledge Representation", author: "Ronald Brachman", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 190, title: "Artificial Neural Networks", author: "Simon Haykin", category: "AI", totalCopies: 2, availableCopies: 2 },
  { id: 191, title: "Advanced Statistics", author: "Ronald Walpole", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 192, title: "Regression Analysis", author: "Douglas Montgomery", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 193, title: "Statistical Learning", author: "Trevor Hastie", category: "ML", totalCopies: 2, availableCopies: 2 },
  { id: 194, title: "Predictive Analytics", author: "Eric Siegel", category: "ML", totalCopies: 2, availableCopies: 2 },
  { id: 195, title: "Data Visualization", author: "Kieran Healy", category: "Data Science", totalCopies: 2, availableCopies: 2 },
  { id: 196, title: "Numerical Methods", author: "Burden & Faires", category: "Mathematics", totalCopies: 3, availableCopies: 3 },
  { id: 197, title: "Discrete Mathematics and Its Applications", author: "Kenneth Rosen", category: "Mathematics", totalCopies: 4, availableCopies: 4 },
  { id: 198, title: "Graph Algorithms", author: "Shimon Even", category: "DSA", totalCopies: 2, availableCopies: 2 },
  { id: 199, title: "Convex Optimization", author: "Stephen Boyd", category: "Mathematics", totalCopies: 2, availableCopies: 2 },
  { id: 200, title: "Introduction to Statistical Learning", author: "Gareth James", category: "ML", totalCopies: 4, availableCopies: 4 },];

let borrowed = JSON.parse(localStorage.getItem("borrowed")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

window.onload = () => {
    renderBooks();
    renderBorrowed();
    renderHistory();
    updateDropdown();
    updateChart();
};

document.getElementById("searchBook").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let filtered = books.filter(b => b.title.toLowerCase().includes(value));
    updateDropdown(filtered);
});

function updateDropdown(filteredBooks = books) {
    let select = document.getElementById("bookSelect");
    select.innerHTML = "";

    filteredBooks.forEach(book => {
        if (book.availableCopies > 0) {
            select.innerHTML += `<option value="${book.id}">
            ${book.title} (${book.availableCopies})
            </option>`;
        }
    });
}

function borrowBook() {
    let name = facultyName.value;
    let mobile = mobile.value;
    let bookId = bookSelect.value;

    let book = books.find(b => b.id == bookId);

    let returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 28);

    book.availableCopies--;

    let record = {
        id: Date.now(),
        name,
        mobile,
        book: book.title,
        returnDate: returnDate.toDateString()
    };

    borrowed.push(record);
    history.push(record);

    save();

    generatePDF(name, book.title, returnDate);

    renderBooks();
    renderBorrowed();
    renderHistory();
    updateChart();
}

function returnBook(id) {
    let record = borrowed.find(b => b.id === id);
    let book = books.find(b => b.title === record.book);

    book.availableCopies++;
    borrowed = borrowed.filter(b => b.id !== id);

    save();

    renderBooks();
    renderBorrowed();
    updateChart();
}

function save() {
    localStorage.setItem("borrowed", JSON.stringify(borrowed));
    localStorage.setItem("history", JSON.stringify(history));
}

function renderBooks() {
    let table = availableTable;

    table.innerHTML = `<tr><th>Title</th><th>Author</th><th>Category</th><th>Available</th></tr>`;

    books.forEach(b => {
        table.innerHTML += `<tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.category}</td>
        <td>${b.availableCopies}/${b.totalCopies}</td>
        </tr>`;
    });
}

function renderBorrowed() {
    borrowedTable.innerHTML = `<tr><th>Name</th><th>Book</th><th>Return</th><th>Action</th></tr>`;

    borrowed.forEach(b => {
        borrowedTable.innerHTML += `<tr>
        <td>${b.name}</td>
        <td>${b.book}</td>
        <td>${b.returnDate}</td>
        <td><button onclick="returnBook(${b.id})">Return</button></td>
        </tr>`;
    });
}

function renderHistory() {
    historyTable.innerHTML = `<tr><th>Name</th><th>Book</th><th>Date</th></tr>`;

    history.forEach(h => {
        historyTable.innerHTML += `<tr>
        <td>${h.name}</td>
        <td>${h.book}</td>
        <td>${h.returnDate}</td>
        </tr>`;
    });
}

function searchBooks() {
    let val = searchBooksTable.value.toLowerCase();

    let filtered = books.filter(b =>
        b.title.toLowerCase().includes(val) ||
        b.author.toLowerCase().includes(val)
    );

    availableTable.innerHTML = `<tr><th>Title</th><th>Author</th><th>Category</th><th>Available</th></tr>`;

    filtered.forEach(b => {
        availableTable.innerHTML += `<tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.category}</td>
        <td>${b.availableCopies}/${b.totalCopies}</td>
        </tr>`;
    });
}

function updateChart() {
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: ["Total Books", "Borrowed"],
            datasets: [{
                data: [books.length, borrowed.length]
            }]
        }
    });
}

function generatePDF(name, book, date) {
    let blob = new Blob([`Name:${name}\nBook:${book}\nReturn:${date}`], { type: "application/pdf" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.pdf";
    link.click();
}
