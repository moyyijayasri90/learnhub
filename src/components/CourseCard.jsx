const courseData = {
  1: {
    title: "Complete Web Development",
    lessons: [
      {
        title: "Introduction to Web Development",
        content: `Web Development is the process of creating websites and web applications.

In this course you will learn HTML, CSS, JavaScript, Bootstrap, React, Node.js and MongoDB.

HTML is used to create the structure of a webpage.
CSS is used to design the webpage.
JavaScript is used to make webpages interactive.

Frontend development deals with the part of a website users see and interact with.

Backend development handles server-side logic, APIs and databases.

By completing this course, you will understand how frontend and backend technologies work together to create a complete web application.`
      },
      {
        title: "HTML Fundamentals",
        content: `HTML stands for HyperText Markup Language.

HTML provides the basic structure of a webpage.

Important HTML elements include headings, paragraphs, links, images, lists, tables and forms.

Example:

<h1>Welcome to LearnHub</h1>
<p>Learn web development.</p>

HTML elements are written using tags.

HTML is the foundation of almost every webpage.`
      },
      {
        title: "CSS Fundamentals",
        content: `CSS stands for Cascading Style Sheets.

CSS is used to control the appearance of HTML elements.

You can use CSS to change colors, fonts, spacing, borders and layouts.

Important CSS concepts include selectors, properties, Flexbox and Grid.

Example:

body {
  font-family: Arial;
}

CSS also helps us create responsive websites that work on mobile, tablet and desktop devices.`
      },
      {
        title: "JavaScript Basics",
        content: `JavaScript is a programming language used to add behavior and interactivity to webpages.

Important JavaScript concepts include variables, data types, operators, conditions, loops, functions, arrays and objects.

Example:

let name = "LearnHub";
console.log(name);

JavaScript can respond to button clicks, validate forms, change webpage content and communicate with servers.`
      },
      {
        title: "Bootstrap",
        content: `Bootstrap is a popular frontend CSS framework.

It provides ready-to-use classes for responsive layouts, buttons, cards, forms, navigation bars and other components.

Bootstrap uses a grid system to create responsive webpages.

For example:

<div class="container">
  <div class="row">
    <div class="col-md-6">
      Content
    </div>
  </div>
</div>

Bootstrap helps developers build responsive interfaces faster.`
      },
      {
        title: "Responsive Web Design",
        content: `Responsive Web Design means creating websites that work properly on different screen sizes.

A responsive website should work on mobile phones, tablets and desktop computers.

CSS media queries, flexible layouts, Flexbox and Grid are commonly used for responsive design.

Example:

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

Responsive design improves the user experience on different devices.`
      },
      {
        title: "React JS Introduction",
        content: `React is a JavaScript library used to build user interfaces.

React applications are built using reusable components.

A component can represent a navbar, button, course card or complete page.

React uses JSX to write UI structures.

React also provides features such as state, props, hooks and routing.

In LearnHub, React is used to create pages such as Home, Courses, Dashboard and Learning.`
      },
      {
        title: "Final Web Project",
        content: `In the final project, you will combine the technologies learned throughout the course.

You can create an e-learning platform such as LearnHub.

The frontend can be developed using React.

The backend can be developed using Node.js and Express.

MongoDB can be used to store users, courses and learning progress.

The final project should contain authentication, course pages, lessons, quizzes, progress tracking and certificates.`
      }
    ],

    quiz: [
      {
        question: "What is HTML mainly used for?",
        options: [
          "Creating webpage structure",
          "Creating databases",
          "Managing servers",
          "Editing images"
        ],
        answer: "Creating webpage structure"
      },
      {
        question: "Which technology is used to style webpages?",
        options: [
          "HTML",
          "CSS",
          "MongoDB",
          "Node.js"
        ],
        answer: "CSS"
      },
      {
        question: "Which language is used to add interactivity to webpages?",
        options: [
          "HTML",
          "CSS",
          "JavaScript",
          "SQL"
        ],
        answer: "JavaScript"
      },
      {
        question: "Which library is used to build user interfaces?",
        options: [
          "React",
          "MongoDB",
          "MySQL",
          "Node.js"
        ],
        answer: "React"
      },
      {
        question: "Which technology is commonly used for server-side JavaScript?",
        options: [
          "Node.js",
          "CSS",
          "HTML",
          "Bootstrap"
        ],
        answer: "Node.js"
      }
    ]
  },

  2: {
    title: "JavaScript for Beginners",
    lessons: [
      {
        title: "Introduction to JavaScript",
        content: `JavaScript is a programming language commonly used to make webpages interactive.

It can change webpage content, respond to user actions, validate forms and communicate with servers.

JavaScript can run inside browsers and also on servers using Node.js.`
      },
      {
        title: "Variables and Data Types",
        content: `Variables are used to store data.

JavaScript provides let, const and var for declaring variables.

Common data types include String, Number, Boolean, Undefined, Null and Object.

Example:

let name = "Jayasri";
const age = 19;`
      },
      {
        title: "Operators",
        content: `Operators are used to perform operations on values.

Arithmetic operators include +, -, * and /.

Comparison operators include ==, ===, != and !==.

Logical operators include &&, || and !.

Example:

let a = 10;
let b = 20;
let result = a + b;`
      },
      {
        title: "Conditional Statements",
        content: `Conditional statements allow a program to make decisions.

The main conditional statements are if, else if and else.

Example:

let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

Conditions are useful when different actions are required for different situations.`
      },
      {
        title: "Loops",
        content: `Loops are used to execute a block of code repeatedly.

Common loops are for, while and do...while.

Example:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Loops are useful for processing arrays and repeating tasks.`
      },
      {
        title: "Functions",
        content: `A function is a reusable block of code.

Functions can receive parameters and return values.

Example:

function add(a, b) {
  return a + b;
}

Functions make programs easier to organize and reuse.`
      },
      {
        title: "Arrays and Objects",
        content: `An array stores multiple values in an ordered collection.

Example:

let courses = ["HTML", "CSS", "React"];

Objects store information using key-value pairs.

Example:

let student = {
  name: "Jayasri",
  course: "React"
};

Arrays and objects are heavily used in JavaScript applications.`
      }
    ],

    quiz: [
      {
        question: "Which keyword creates a block-scoped variable?",
        options: ["let", "print", "define", "echo"],
        answer: "let"
      },
      {
        question: "Which operator checks strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()"
      },
      {
        question: "Which statement is used for decision making?",
        options: ["if", "loop", "array", "object"],
        answer: "if"
      },
      {
        question: "Which keyword defines a function declaration?",
        options: ["function", "def", "fun", "method"],
        answer: "function"
      }
    ]
  },

  3: {
    title: "React JS Complete Course",
    lessons: [
      {
        title: "Introduction to React",
        content: `React is a JavaScript library for building user interfaces.

React was designed around reusable components.

Instead of creating every page from scratch, developers can create reusable components and combine them.

React is commonly used for single-page applications.`
      },
      {
        title: "React Components",
        content: `Components are independent and reusable parts of a React application.

Examples include Navbar, Footer, CourseCard and LoginForm.

A component can contain its own UI and behavior.

Example:

function Welcome() {
  return <h1>Welcome to LearnHub</h1>;
}

Components make React applications easier to maintain.`
      },
      {
        title: "JSX",
        content: `JSX is a syntax extension commonly used with React.

It allows developers to write UI-like markup inside JavaScript.

Example:

const element = <h1>Hello LearnHub</h1>;

JSX is converted into JavaScript that React can use to create the interface.`
      },
      {
        title: "Props",
        content: `Props are values passed from a parent component to a child component.

They allow components to receive data.

For example, a CourseCard component can receive course title, image and description as props.

Props are read-only inside the receiving component.`
      },
      {
        title: "State",
        content: `State stores information that can change during the lifetime of a component.

React provides the useState Hook for managing state.

Example:

const [count, setCount] = useState(0);

When state changes, React updates the relevant UI.`
      },
      {
        title: "React Hooks",
        content: `Hooks allow React function components to use features such as state and effects.

Common Hooks include useState and useEffect.

Hooks should normally be called at the top level of React function components.

They help developers organize component behavior.`
      },
      {
        title: "React Router",
        content: `React Router is used to create navigation between different views in a React application.

Routes can connect URLs with components.

For example:

/home
/courses
/dashboard
/courses/1

LearnHub uses React Router to navigate between its pages.`
      }
    ],

    quiz: [
      {
        question: "React is mainly used for building what?",
        options: [
          "User interfaces",
          "Databases",
          "Operating systems",
          "Network hardware"
        ],
        answer: "User interfaces"
      },
      {
        question: "Which Hook is used to manage state?",
        options: ["useState", "useHTML", "usePage", "useCSS"],
        answer: "useState"
      },
      {
        question: "What is passed from parent to child using props?",
        options: [
          "Data",
          "Database tables",
          "Operating systems",
          "Network packets"
        ],
        answer: "Data"
      },
      {
        question: "Which technology is used for React navigation?",
        options: [
          "React Router",
          "MongoDB",
          "Bootstrap",
          "Node Package"
        ],
        answer: "React Router"
      },
      {
        question: "What does JSX allow developers to write?",
        options: [
          "UI-like markup in JavaScript",
          "SQL databases",
          "Operating system commands",
          "Network protocols"
        ],
        answer: "UI-like markup in JavaScript"
      }
    ]
  },

  4: {
    title: "HTML & CSS Masterclass",
    lessons: [
      {
        title: "HTML Introduction",
        content: `HTML provides the structure of webpages.

A webpage can contain headings, paragraphs, images, links, lists and forms.

HTML documents normally contain html, head and body sections.

The browser reads HTML and displays the resulting webpage.`
      },
      {
        title: "HTML Elements",
        content: `HTML elements define different types of content.

Examples include h1 for headings, p for paragraphs, a for links and img for images.

Attributes provide additional information to elements.

For example, an image can use the src attribute to specify its source.`
      },
      {
        title: "Forms and Tables",
        content: `HTML forms collect information from users.

Common form controls include input, textarea, select and button.

Tables organize information into rows and columns using table, tr, th and td elements.

Forms are commonly used for login and registration pages.`
      },
      {
        title: "CSS Introduction",
        content: `CSS controls the visual appearance of HTML elements.

CSS can change colors, fonts, spacing, borders and layouts.

CSS can be written inline, internally or in an external stylesheet.

External CSS is commonly preferred for larger projects.`
      },
      {
        title: "CSS Selectors",
        content: `Selectors identify which HTML elements should receive styles.

Common selectors include element selectors, class selectors and ID selectors.

Example:

.title {
  color: blue;
}

Classes can be reused on multiple elements.`
      },
      {
        title: "Flexbox and Grid",
        content: `Flexbox is useful for arranging items mainly along one dimension.

CSS Grid is useful for creating two-dimensional layouts.

Both systems make it easier to create responsive layouts.

They are widely used in modern frontend development.`
      },
      {
        title: "Responsive Design",
        content: `Responsive design allows a webpage to adapt to different screen sizes.

Developers can use flexible widths, responsive units, Flexbox, Grid and media queries.

Testing a website on mobile and desktop screens helps ensure a good user experience.`
      }
    ],

    quiz: [
      {
        question: "Which tag creates a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        answer: "<p>"
      },
      {
        question: "Which CSS property changes text color?",
        options: ["color", "font-color", "text-color", "foreground"],
        answer: "color"
      },
      {
        question: "Which system is mainly designed for one-dimensional layouts?",
        options: ["Flexbox", "SQL", "DOM", "JSON"],
        answer: "Flexbox"
      },
      {
        question: "Which HTML element is used to create a link?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
      },
      {
        question: "What is CSS mainly used for?",
        options: [
          "Styling webpages",
          "Creating databases",
          "Running servers",
          "Compiling Java"
        ],
        answer: "Styling webpages"
      }
    ]
  },

  5: {
    title: "Node.js Backend Development",
    lessons: [
      {
        title: "Introduction to Node.js",
        content: `Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.

It is commonly used to build backend applications and APIs.

Node.js uses Google's V8 JavaScript engine.

It is widely used for web servers and real-time applications.`
      },
      {
        title: "Node.js Installation",
        content: `To develop with Node.js, install Node.js on your computer.

After installation, you can verify it using:

node -v

The npm command is also installed with Node.js and is used to manage packages.`
      },
      {
        title: "Modules",
        content: `Modules allow Node.js applications to organize code into reusable files.

Node.js provides built-in modules and developers can also create their own modules.

Examples of built-in modules include fs, path and http.`
      },
      {
        title: "NPM",
        content: `NPM stands for Node Package Manager.

It is used to install and manage JavaScript packages.

For example:

npm install express

Packages make it possible to add functionality without building everything from scratch.`
      },
      {
        title: "Express.js",
        content: `Express.js is a web framework for Node.js.

It simplifies server and API development.

Express can define routes, handle requests and send responses.

It is commonly used to create REST APIs.`
      },
      {
        title: "REST APIs",
        content: `A REST API allows applications to communicate using HTTP.

Common HTTP methods include GET, POST, PUT and DELETE.

GET can retrieve data.
POST can create data.
PUT can update data.
DELETE can remove data.

APIs are important for connecting React frontend applications with backend servers.`
      },
      {
        title: "Backend Project",
        content: `A Node.js project can contain a server, routes, controllers and database connections.

For LearnHub, the backend could provide APIs for users, courses, quizzes and progress.

React can communicate with these APIs to display and update data.`
      }
    ],

    quiz: [
      {
        question: "Node.js allows JavaScript to run mainly where?",
        options: [
          "On the server",
          "Only inside CSS",
          "Only inside databases",
          "Only inside images"
        ],
        answer: "On the server"
      },
      {
        question: "Which command displays the Node.js version?",
        options: ["node -v", "node version", "npm node", "node check"],
        answer: "node -v"
      },
      {
        question: "Which package manager is commonly used with Node.js?",
        options: ["npm", "pip", "gem", "cargo"],
        answer: "npm"
      },
      {
        question: "Which framework is commonly used with Node.js for web servers?",
        options: ["Express.js", "React", "Bootstrap", "MongoDB"],
        answer: "Express.js"
      },
      {
        question: "Which HTTP method is commonly used to retrieve data?",
        options: ["GET", "POST", "DELETE", "PATCHONLY"],
        answer: "GET"
      }
    ]
  },

  6: {
    title: "MERN Stack Development",
    lessons: [
      {
        title: "Introduction to MERN",
        content: `MERN is a popular JavaScript-based technology stack.

MERN stands for MongoDB, Express.js, React and Node.js.

React is commonly used for the frontend.
Node.js and Express.js are commonly used for the backend.
MongoDB is commonly used as the database.`
      },
      {
        title: "MongoDB",
        content: `MongoDB is a NoSQL document database.

It stores data in documents that are organized into collections.

MongoDB is commonly used with Node.js applications.

It is suitable for applications that need flexible document structures.`
      },
      {
        title: "Express.js",
        content: `Express.js provides a simple framework for creating Node.js web servers and APIs.

Routes can be created to handle requests from a React frontend.

Express also supports middleware for processing requests.`
      },
      {
        title: "React",
        content: `React is used to create the frontend user interface.

Applications can be divided into reusable components.

React Router can be used to navigate between pages such as Home, Courses and Dashboard.`
      },
      {
        title: "Node.js",
        content: `Node.js provides the runtime for the backend.

It can handle HTTP requests, execute business logic and communicate with databases.

Node.js and Express are commonly combined for backend development.`
      },
      {
        title: "Frontend and Backend Integration",
        content: `The React frontend can communicate with the Node.js backend through APIs.

For example, React can send a request to retrieve courses.

The backend processes the request and returns data, commonly in JSON format.`
      },
      {
        title: "Authentication",
        content: `Authentication verifies the identity of a user.

A typical application contains registration and login functionality.

Backend authentication systems can use secure password handling and sessions or tokens.

Authentication should be implemented carefully to protect user accounts.`
      },
      {
        title: "MERN Project",
        content: `A MERN project combines MongoDB, Express.js, React and Node.js.

A LearnHub-style project can contain users, courses, lessons, quizzes, progress and certificates.

The frontend communicates with the backend through APIs and the backend communicates with MongoDB.`
      }
    ],

    quiz: [
      {
        question: "What does M represent in MERN?",
        options: ["MongoDB", "MySQL", "Microsoft", "Markdown"],
        answer: "MongoDB"
      },
      {
        question: "Which MERN technology is commonly used for the frontend?",
        options: ["React", "Node.js", "MongoDB", "Express"],
        answer: "React"
      },
      {
        question: "Which technology is the Node.js web framework?",
        options: ["Express.js", "React", "MongoDB", "Bootstrap"],
        answer: "Express.js"
      },
      {
        question: "Which MERN component is the database?",
        options: ["MongoDB", "React", "Express", "Node.js"],
        answer: "MongoDB"
      },
      {
        question: "What is commonly used for communication between frontend and backend?",
        options: ["APIs", "CSS", "Images", "Fonts"],
        answer: "APIs"
      }
    ]
  },

  7: {
    title: "Python Programming",
    lessons: [
      {
        title: "Introduction to Python",
        content: `Python is a high-level programming language known for its readable syntax.

It is used in web development, automation, data analysis, artificial intelligence and machine learning.

Python programs are usually easy to read and write.`
      },
      {
        title: "Variables and Data Types",
        content: `Variables store values.

Python supports data types such as int, float, str, bool, list, tuple, set and dict.

Example:

name = "LearnHub"
age = 20

Python automatically determines the type of a value when assigning it.`
      },
      {
        title: "Operators",
        content: `Python supports arithmetic, comparison, logical and assignment operators.

Example:

a = 10
b = 5
print(a + b)

Operators are used to calculate values and make decisions.`
      },
      {
        title: "Conditional Statements",
        content: `Python uses if, elif and else for decision making.

Example:

age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")

Conditions allow programs to execute different blocks based on data.`
      },
      {
        title: "Loops",
        content: `Python provides for and while loops.

A for loop is commonly used to iterate through sequences.

Example:

for i in range(5):
    print(i)

Loops reduce repeated code.`
      },
      {
        title: "Functions",
        content: `Functions are reusable blocks of code.

Python functions are defined using the def keyword.

Example:

def add(a, b):
    return a + b

Functions make programs modular and reusable.`
      },
      {
        title: "Lists and Dictionaries",
        content: `Lists store ordered collections of values.

Example:

courses = ["Python", "Java", "React"]

Dictionaries store key-value pairs.

Example:

student = {
    "name": "Jayasri",
    "course": "Python"
}

These structures are commonly used in Python programs.`
      },
      {
        title: "Object Oriented Programming",
        content: `Object Oriented Programming organizes programs using classes and objects.

A class defines properties and behavior.

An object is an instance of a class.

Important OOP concepts include inheritance, encapsulation, polymorphism and abstraction.`
      }
    ],

    quiz: [
      {
        question: "Which symbol starts a comment in Python?",
        options: ["#", "//", "/*", "<!--"],
        answer: "#"
      },
      {
        question: "Which keyword defines a function?",
        options: ["def", "function", "fun", "define"],
        answer: "def"
      },
      {
        question: "Which type stores an ordered mutable collection?",
        options: ["List", "Tuple", "Integer", "Boolean"],
        answer: "List"
      },
      {
        question: "Which keyword is used for a condition?",
        options: ["if", "check", "condition", "when"],
        answer: "if"
      },
      {
        question: "Which loop commonly iterates through a sequence?",
        options: ["for", "repeat", "iterate", "loop"],
        answer: "for"
      }
    ]
  },

  8: {
    title: "Java Programming",
    lessons: [
      {
        title: "Introduction to Java",
        content: `Java is a high-level, object-oriented programming language.

Java programs are compiled into bytecode that can run on the Java Virtual Machine.

Java is widely used for enterprise applications, backend systems and Android development.`
      },
      {
        title: "Variables and Data Types",
        content: `Java uses variables to store data.

Common primitive types include int, double, char and boolean.

Example:

int age = 20;
double price = 99.5;
boolean active = true;`
      },
      {
        title: "Operators",
        content: `Java provides arithmetic, comparison, logical and assignment operators.

Operators are used to calculate values and evaluate conditions.

Example:

int result = 10 + 20;`
      },
      {
        title: "Control Statements",
        content: `Java provides if, else, switch and loops for controlling program execution.

for, while and do-while loops can repeat code.

Control statements are fundamental for writing logical programs.`
      },
      {
        title: "Arrays",
        content: `An array stores multiple values of the same type.

Example:

int[] numbers = {10, 20, 30};

Array elements are accessed using indexes starting from zero.`
      },
      {
        title: "Classes and Objects",
        content: `A class defines the structure and behavior of objects.

An object is created from a class.

Classes can contain variables and methods.

Object-oriented programming helps organize larger applications.`
      },
      {
        title: "Inheritance",
        content: `Inheritance allows one class to acquire properties and methods from another class.

The extends keyword is commonly used for class inheritance.

Inheritance supports code reuse and represents relationships between classes.`
      },
      {
        title: "Exception Handling",
        content: `Exception handling allows programs to deal with runtime problems.

Java commonly uses try, catch and finally blocks.

Handling exceptions helps prevent unexpected program termination and allows errors to be managed appropriately.`
      }
    ],

    quiz: [
      {
        question: "Which keyword creates a class in Java?",
        options: ["class", "define", "struct", "object"],
        answer: "class"
      },
      {
        question: "What is the usual entry point of a Java application?",
        options: ["main()", "start()", "run()", "execute()"],
        answer: "main()"
      },
      {
        question: "Which keyword is used for inheritance between classes?",
        options: ["extends", "inherits", "parent", "using"],
        answer: "extends"
      },
      {
        question: "Which type stores true or false values?",
        options: ["boolean", "int", "char", "double"],
        answer: "boolean"
      },
      {
        question: "Which block handles an exception?",
        options: ["catch", "error", "handle", "except"],
        answer: "catch"
      }
    ]
  },

  9: {
    title: "C Programming",
    lessons: [
      {
        title: "Introduction to C",
        content: `C is a general-purpose programming language.

It is widely used for system programming, embedded systems and performance-sensitive applications.

C provides low-level memory access and a simple programming model.`
      },
      {
        title: "Variables and Data Types",
        content: `C provides data types such as int, float, char and double.

Variables must be declared before use.

Example:

int age = 20;
float price = 10.5;`
      },
      {
        title: "Operators",
        content: `C provides arithmetic, relational, logical and assignment operators.

Operators are used to perform calculations and compare values.

Example:

int sum = a + b;`
      },
      {
        title: "Conditional Statements",
        content: `C uses if, else if and else for decision making.

The switch statement can also select between multiple cases.

Conditions are an important part of program logic.`
      },
      {
        title: "Loops",
        content: `C provides for, while and do-while loops.

Loops are used to repeat instructions.

Example:

for (int i = 0; i < 5; i++) {
    printf("%d", i);
}`
      },
      {
        title: "Functions",
        content: `Functions divide a program into reusable sections.

A function can accept parameters and return a value.

Functions improve code organization and reduce repetition.`
      },
      {
        title: "Arrays",
        content: `An array stores multiple values of the same data type.

Example:

int numbers[5];

Array elements are accessed using indexes.

Arrays are useful for storing collections of related values.`
      }
    ],

    quiz: [
      {
        question: "Which function is the usual starting point of a C program?",
        options: ["main()", "start()", "begin()", "run()"],
        answer: "main()"
      },
      {
        question: "Which symbol ends a typical C statement?",
        options: [";", ":", ".", ","],
        answer: ";"
      },
      {
        question: "Which type commonly stores whole numbers?",
        options: ["int", "float", "char", "void"],
        answer: "int"
      },
      {
        question: "Which function is commonly used to display output?",
        options: ["printf()", "display()", "show()", "printline()"],
        answer: "printf()"
      },
      {
        question: "Which construct repeats code?",
        options: ["Loop", "Class", "Header", "Comment"],
        answer: "Loop"
      }
    ]
  },

  10: {
    title: "SQL Database Course",
    lessons: [
      {
        title: "Introduction to SQL",
        content: `SQL stands for Structured Query Language.

SQL is used to communicate with relational databases.

It can be used to create, retrieve, update and delete data.

SQL is widely used in applications that store structured information.`
      },
      {
        title: "SELECT Statement",
        content: `The SELECT statement retrieves data from database tables.

Example:

SELECT * FROM students;

A specific set of columns can also be selected.

SELECT name, age FROM students;`
      },
      {
        title: "WHERE Clause",
        content: `The WHERE clause filters rows based on a condition.

Example:

SELECT * FROM students
WHERE age >= 18;

Filtering allows applications to retrieve only the required records.`
      },
      {
        title: "INSERT and UPDATE",
        content: `INSERT adds new records to a table.

UPDATE changes existing records.

Example:

INSERT INTO students VALUES (1, 'Jayasri');

UPDATE students
SET name = 'Jayasri'
WHERE id = 1;`
      },
      {
        title: "DELETE",
        content: `The DELETE statement removes records from a table.

Example:

DELETE FROM students
WHERE id = 1;

A WHERE condition should be used carefully when deleting records.`
      },
      {
        title: "GROUP BY",
        content: `GROUP BY groups rows that have the same values.

It is often used with aggregate functions such as COUNT, SUM, AVG, MIN and MAX.

Grouping is useful for generating reports and summaries.`
      },
      {
        title: "JOINS",
        content: `SQL JOIN operations combine related data from multiple tables.

Common joins include INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN.

Joins are important when database information is divided across related tables.`
      }
    ],

    quiz: [
      {
        question: "Which SQL command retrieves data?",
        options: ["SELECT", "GET", "READ", "FETCH"],
        answer: "SELECT"
      },
      {
        question: "Which clause filters rows?",
        options: ["WHERE", "FILTER", "ROWS", "CHECK"],
        answer: "WHERE"
      },
      {
        question: "Which command adds records?",
        options: ["INSERT", "ADD", "CREATE ROW", "PUT"],
        answer: "INSERT"
      },
      {
        question: "Which command removes records?",
        options: ["DELETE", "REMOVE", "DROP ROW", "CLEAR"],
        answer: "DELETE"
      },
      {
        question: "Which operation combines related tables?",
        options: ["JOIN", "CONNECT", "LINK", "MERGE ROW"],
        answer: "JOIN"
      }
    ]
  },

  11: {
    title: "MongoDB Complete Course",
    lessons: [
      {
        title: "Introduction to MongoDB",
        content: `MongoDB is a NoSQL document-oriented database.

Instead of storing data primarily in rows and columns, MongoDB stores documents.

MongoDB is commonly used with JavaScript and Node.js applications.`
      },
      {
        title: "Databases and Collections",
        content: `A MongoDB database can contain multiple collections.

A collection is similar to a table in a relational database.

Collections contain documents representing individual records.`
      },
      {
        title: "Documents",
        content: `MongoDB stores records as documents.

Documents use a JSON-like structure.

Example:

{
  name: "Jayasri",
  course: "React"
}

Documents can contain nested data and arrays.`
      },
      {
        title: "Insert Documents",
        content: `MongoDB provides operations for inserting documents into collections.

A document can contain fields such as name, email, course and progress.

Applications can insert one or multiple documents depending on their requirements.`
      },
      {
        title: "Query Documents",
        content: `MongoDB queries are used to find documents that match specific conditions.

Applications can search by fields such as name, course or status.

Queries allow applications to retrieve the information they need.`
      },
      {
        title: "Update and Delete",
        content: `MongoDB provides operations for updating and deleting documents.

Updates can change specific fields.

Delete operations remove documents from a collection.

These operations should be used carefully to protect important data.`
      },
      {
        title: "MongoDB Project",
        content: `MongoDB can store LearnHub data such as users, courses, lessons, quiz results and progress.

Node.js can communicate with MongoDB through a database driver or an ODM such as Mongoose.

This allows the frontend application to work with persistent data.`
      }
    ],

    quiz: [
      {
        question: "MongoDB is what type of database?",
        options: [
          "NoSQL document database",
          "Only relational database",
          "Spreadsheet database",
          "File system"
        ],
        answer: "NoSQL document database"
      },
      {
        question: "MongoDB stores records primarily as what?",
        options: ["Documents", "Rows", "Columns", "Slides"],
        answer: "Documents"
      },
      {
        question: "What contains documents in MongoDB?",
        options: ["Collections", "Worksheets", "Classes", "Tables only"],
        answer: "Collections"
      },
      {
        question: "Which technology commonly works with MongoDB in a MERN application?",
        options: ["Node.js", "CSS", "HTML", "Photoshop"],
        answer: "Node.js"
      },
      {
        question: "What can MongoDB store for LearnHub?",
        options: [
          "User and course data",
          "Only CSS",
          "Only images",
          "Only HTML tags"
        ],
        answer: "User and course data"
      }
    ]
  },

  12: {
    title: "Data Structures & Algorithms",
    lessons: [
      {
        title: "Introduction to DSA",
        content: `Data Structures and Algorithms are fundamental concepts in computer science.

A data structure organizes data.

An algorithm is a sequence of steps used to solve a problem.

Good data structures and algorithms can improve program efficiency.`
      },
      {
        title: "Arrays",
        content: `An array stores elements in a contiguous indexed structure.

Elements can be accessed using their index.

Arrays are useful when the number of elements and their access pattern are known.`
      },
      {
        title: "Linked Lists",
        content: `A linked list consists of nodes connected using links.

Each node commonly contains data and a reference to another node.

Linked lists allow flexible insertion and deletion when references are available.`
      },
      {
        title: "Stacks",
        content: `A stack follows the Last In, First Out principle.

The main operations are push and pop.

Stacks are used in function calls, undo operations and expression evaluation.`
      },
      {
        title: "Queues",
        content: `A queue follows the First In, First Out principle.

Elements are added at the rear and removed from the front.

Queues are useful in scheduling and task processing.`
      },
      {
        title: "Trees",
        content: `A tree is a hierarchical data structure.

A binary tree allows each node to have at most two children.

Trees are used in searching, databases and file systems.`
      },
      {
        title: "Graphs",
        content: `A graph consists of vertices and edges.

Graphs can represent networks such as roads, social connections and computer networks.

Graphs can be directed or undirected.`
      },
      {
        title: "Sorting and Searching",
        content: `Sorting arranges data in a particular order.

Common sorting algorithms include Bubble Sort, Selection Sort, Insertion Sort and Merge Sort.

Searching algorithms include Linear Search and Binary Search.

Binary Search requires sorted data.`
      }
    ],

    quiz: [
      {
        question: "Which data structure follows LIFO?",
        options: ["Stack", "Queue", "Array", "Graph"],
        answer: "Stack"
      },
      {
        question: "Which data structure follows FIFO?",
        options: ["Queue", "Stack", "Tree", "Heap"],
        answer: "Queue"
      },
      {
        question: "Binary Search requires what?",
        options: [
          "Sorted data",
          "Random data",
          "Only strings",
          "Only duplicate values"
        ],
        answer: "Sorted data"
      },
      {
        question: "What connects nodes in a linked list?",
        options: ["References", "CSS", "Queries", "Functions only"],
        answer: "References"
      },
      {
        question: "Which structure represents hierarchical data?",
        options: ["Tree", "Queue", "Stack", "Array only"],
        answer: "Tree"
      }
    ]
  },

  13: {
    title: "Machine Learning",
    lessons: [
      {
        title: "Introduction to Machine Learning",
        content: `Machine Learning is a branch of artificial intelligence that enables systems to learn patterns from data.

Instead of explicitly programming every rule, a machine learning model learns from examples.

Machine learning is used in recommendation systems, prediction, classification and many other applications.`
      },
      {
        title: "Types of Machine Learning",
        content: `The major types of machine learning include supervised learning, unsupervised learning and reinforcement learning.

Supervised learning uses labeled data.

Unsupervised learning works with data without target labels.

Reinforcement learning learns through interaction and rewards.`
      },
      {
        title: "Training and Testing Data",
        content: `A dataset is commonly divided into training and testing data.

The training data is used to learn model parameters.

Testing data is used to evaluate how the model performs on unseen examples.

Separating the data helps measure generalization.`
      },
      {
        title: "Linear Regression",
        content: `Linear Regression is a supervised learning algorithm used to model relationships between variables and predict continuous values.

For example, it can be used to predict sales based on historical information.

The model attempts to find a suitable linear relationship between input and target values.`
      },
      {
        title: "Classification",
        content: `Classification predicts categories or classes.

For example, a model can classify an email as spam or not spam.

Classification algorithms include Logistic Regression, Decision Trees and other machine learning methods.`
      },
      {
        title: "Clustering",
        content: `Clustering is an unsupervised learning technique.

It groups similar data points together.

K-Means is a commonly studied clustering algorithm.

Clustering can be useful for customer segmentation and exploratory analysis.`
      },
      {
        title: "Model Evaluation",
        content: `Machine learning models need to be evaluated using suitable metrics.

Classification can use accuracy, precision, recall and F1-score.

Regression can use metrics such as MAE and RMSE.

The appropriate metric depends on the problem.`
      },
      {
        title: "ML Project",
        content: `A machine learning project usually includes collecting data, cleaning data, exploring data, preparing features, training a model and evaluating results.

The final model should be tested carefully before being used for real-world predictions.`
      }
    ],

    quiz: [
      {
        question: "Which learning type uses labeled data?",
        options: [
          "Supervised learning",
          "Unsupervised learning",
          "Random learning",
          "Manual learning"
        ],
        answer: "Supervised learning"
      },
      {
        question: "Which task predicts a continuous value?",
        options: ["Regression", "Classification", "Clustering", "Sorting"],
        answer: "Regression"
      },
      {
        question: "Which technique groups similar data points?",
        options: ["Clustering", "Regression", "Compilation", "Parsing"],
        answer: "Clustering"
      },
      {
        question: "What is testing data mainly used for?",
        options: [
          "Evaluating model performance",
          "Writing HTML",
          "Creating CSS",
          "Installing Python"
        ],
        answer: "Evaluating model performance"
      },
      {
        question: "Which is a classification metric?",
        options: ["Accuracy", "Screen size", "File size", "CPU speed"],
        answer: "Accuracy"
      }
    ]
  },

  14: {
    title: "Artificial Intelligence",
    lessons: [
      {
        title: "Introduction to AI",
        content: `Artificial Intelligence is the field of creating systems capable of performing tasks that normally require aspects of human intelligence.

AI applications include search, recommendation systems, language processing, computer vision and planning.`
      },
      {
        title: "Intelligent Agents",
        content: `An intelligent agent perceives information from its environment and takes actions.

Agents can use sensors to receive information and actuators to perform actions.

The goal is to choose actions that help achieve the agent's objectives.`
      },
      {
        title: "Problem Solving",
        content: `AI systems can represent problems using states, actions and goals.

Search algorithms can explore possible paths from an initial state toward a goal.

Good problem representation can make solving more efficient.`
      },
      {
        title: "Search Algorithms",
        content: `Search algorithms explore possible solutions.

Breadth-First Search explores nodes level by level.

Depth-First Search explores deeper paths before backtracking.

Other AI search techniques include heuristic search methods.`
      },
      {
        title: "Knowledge Representation",
        content: `Knowledge representation is used to represent information so an AI system can reason about it.

Knowledge can be represented using logical statements, rules, graphs and other structures.

Good representation supports reasoning and decision making.`
      },
      {
        title: "Machine Learning and AI",
        content: `Machine Learning is one important area within AI.

Machine learning allows systems to learn patterns from data.

AI is a broader field that includes machine learning, search, reasoning, planning and other techniques.`
      },
      {
        title: "Natural Language Processing",
        content: `Natural Language Processing, or NLP, focuses on processing human language.

Applications include translation, text classification, chatbots and speech-related systems.

NLP combines language knowledge with computational techniques.`
      },
      {
        title: "AI Applications",
        content: `AI is used in many areas.

Examples include recommendation systems, fraud detection, autonomous systems, medical research, search engines and conversational applications.

The appropriate AI technique depends on the problem and available data.`
      }
    ],

    quiz: [
      {
        question: "AI mainly focuses on creating systems capable of what?",
        options: [
          "Intelligent behavior",
          "Only file storage",
          "Only webpage styling",
          "Only arithmetic"
        ],
        answer: "Intelligent behavior"
      },
      {
        question: "Which is a search algorithm?",
        options: [
          "Breadth-First Search",
          "Bubble Sort",
          "Insertion Sort",
          "Merge Sort"
        ],
        answer: "Breadth-First Search"
      },
      {
        question: "What does NLP mainly deal with?",
        options: [
          "Human language",
          "Computer hardware",
          "Network cables",
          "File compression"
        ],
        answer: "Human language"
      },
      {
        question: "Machine Learning is part of which broader field?",
        options: [
          "Artificial Intelligence",
          "HTML",
          "Database Management",
          "Computer Graphics only"
        ],
        answer: "Artificial Intelligence"
      },
      {
        question: "What does an intelligent agent interact with?",
        options: [
          "An environment",
          "Only a database",
          "Only a compiler",
          "Only a stylesheet"
        ],
        answer: "An environment"
      }
    ]
  },

  15: {
    title: "Cyber Security",
    lessons: [
      {
        title: "Introduction to Cyber Security",
        content: `Cyber Security focuses on protecting computers, networks, applications and data from unauthorized access and attacks.

Security aims to protect confidentiality, integrity and availability.

Organizations use technical and procedural controls to reduce security risks.`
      },
      {
        title: "Security Threats",
        content: `Security threats include malware, phishing, unauthorized access, data theft and denial-of-service attacks.

Understanding common threats helps organizations design better security controls.

Users should be cautious with unknown links, files and requests for sensitive information.`
      },
      {
        title: "Authentication",
        content: `Authentication verifies who a user is.

Common authentication factors include something you know, something you have and something you are.

Strong passwords and multi-factor authentication can improve account security.`
      },
      {
        title: "Encryption",
        content: `Encryption transforms readable information into a protected form.

A suitable key is used with an encryption algorithm.

Encryption helps protect data during storage and transmission.

Decryption reverses the process when authorized access is available.`
      },
      {
        title: "Network Security",
        content: `Network security protects network infrastructure and communication.

Firewalls, secure protocols, access controls and monitoring can help protect networks.

Network security should be designed according to the threats and requirements of an organization.`
      },
      {
        title: "Web Security",
        content: `Web applications can face vulnerabilities such as injection attacks, cross-site scripting and authentication problems.

Secure coding, input validation, access controls and regular updates help reduce risks.

Developers should follow established application security practices.`
      },
      {
        title: "Malware",
        content: `Malware is malicious software.

Examples include viruses, worms, trojans, spyware and ransomware.

Security tools, software updates, backups and safe browsing practices can help reduce malware risks.`
      },
      {
        title: "Security Best Practices",
        content: `Important security practices include using strong unique passwords, enabling multi-factor authentication, keeping software updated and maintaining reliable backups.

Users should avoid sharing passwords and should verify suspicious messages before taking action.`
      }
    ],

    quiz: [
      {
        question: "What is encryption used for?",
        options: [
          "Protecting information by transforming it",
          "Increasing screen brightness",
          "Deleting all files",
          "Speeding up a CPU"
        ],
        answer: "Protecting information by transforming it"
      },
      {
        question: "Which is an example of malware?",
        options: ["Ransomware", "Monitor", "Keyboard", "Router"],
        answer: "Ransomware"
      },
      {
        question: "What does authentication verify?",
        options: [
          "A user's identity",
          "Screen resolution",
          "Internet speed",
          "File size"
        ],
        answer: "A user's identity"
      },
      {
        question: "Which practice improves account security?",
        options: [
          "Using strong unique passwords",
          "Sharing passwords",
          "Disabling updates",
          "Using one password everywhere"
        ],
        answer: "Using strong unique passwords"
      },
      {
        question: "What can a firewall help protect?",
        options: [
          "Network traffic",
          "Keyboard buttons",
          "Screen pixels",
          "Document fonts"
        ],
        answer: "Network traffic"
      }
    ]
  },

  16: {
    title: "Cloud Computing",
    lessons: [
      {
        title: "Introduction to Cloud Computing",
        content: `Cloud Computing provides computing resources such as servers, storage and applications through network-based services.

Instead of maintaining all infrastructure locally, organizations can use cloud services according to their requirements.

Cloud computing supports scalable and flexible application deployment.`
      },
      {
        title: "Cloud Service Models",
        content: `Common cloud service models include Infrastructure as a Service, Platform as a Service and Software as a Service.

IaaS provides infrastructure resources.

PaaS provides a platform for application development and deployment.

SaaS provides ready-to-use software applications.`
      },
      {
        title: "Deployment Models",
        content: `Common deployment models include public cloud, private cloud and hybrid cloud.

Public cloud resources are provided by cloud service providers.

Private cloud infrastructure is dedicated to an organization.

Hybrid cloud combines different environments.`
      },
      {
        title: "Virtualization",
        content: `Virtualization allows physical computing resources to be represented as virtual resources.

Virtual machines can run operating systems and applications on shared physical infrastructure.

Virtualization is an important technology used in many cloud environments.`
      },
      {
        title: "Cloud Storage",
        content: `Cloud storage allows data to be stored on remote infrastructure and accessed through networks.

It can provide scalability and availability.

Cloud storage is commonly used for backups, application data and file storage.`
      },
      {
        title: "Cloud Security",
        content: `Cloud security protects applications, data and infrastructure in cloud environments.

Important areas include identity management, access control, encryption, monitoring and secure configuration.

Organizations are responsible for implementing appropriate controls according to their cloud model.`
      },
      {
        title: "Cloud Applications",
        content: `Cloud platforms can host websites, APIs, databases, analytics systems and machine learning workloads.

Cloud applications can scale resources based on requirements.

This makes cloud platforms useful for many modern software systems.`
      },
      {
        title: "Cloud Project",
        content: `A cloud project can involve deploying a web application to a cloud platform.

A typical project may include a frontend, backend, database and cloud storage.

The deployment process includes configuring resources, security, environment variables and application monitoring.`
      }
    ],

    quiz: [
      {
        question: "Which is a cloud service model?",
        options: ["IaaS", "HTML", "CSS", "CPU"],
        answer: "IaaS"
      },
      {
        question: "What does SaaS stand for?",
        options: [
          "Software as a Service",
          "Storage as a System",
          "Server as Software",
          "System as a Service"
        ],
        answer: "Software as a Service"
      },
      {
        question: "Which model combines different cloud environments?",
        options: [
          "Hybrid cloud",
          "Single cloud",
          "Local cloud",
          "Static cloud"
        ],
        answer: "Hybrid cloud"
      },
      {
        question: "What technology creates virtual machines?",
        options: [
          "Virtualization",
          "Compilation",
          "Encryption only",
          "HTML"
        ],
        answer: "Virtualization"
      },
      {
        question: "Which is important for cloud security?",
        options: [
          "Access control",
          "Screen brightness",
          "Keyboard layout",
          "Font size"
        ],
        answer: "Access control"
      }
    ]
  }
};

export default courseData;