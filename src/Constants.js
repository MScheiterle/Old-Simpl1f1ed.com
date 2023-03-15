export const navLinks = [
  { name: "Projects", link: false },
  { name: "QuickMaths", link: true, destination: "/QuickMaths/home" },
  { name: "OpenIntel", link: true, destination: "/OpenIntel" },
];

export const educationalComps = {
  Elementary: [
    { name: "Addition", symbol: "+", textGeometryScale: [1, 1] },
    { name: "Subtraction", symbol: "-", textGeometryScale: [1, 1] },
    { name: "Multiplication", symbol: "*", textGeometryScale: [1, 1] },
    { name: "Division", symbol: "/", textGeometryScale: [1, 1] },
    { name: "Fractions", symbol: "1/2", textGeometryScale: [0.5, 1] },
    { name: "Decimals", symbol: "1.2", textGeometryScale: [0.5, 1] },
    { name: "Percentages", symbol: "%", textGeometryScale: [1, 1] },
    { name: "Exponents", symbol: "1^2", textGeometryScale: [0.5, 1] },
  ],
  MiddleEducation: [
    { name: "Square Roots", symbol: "√", textGeometryScale: [1, 1] },
    {
      name: "Order of Operations",
      symbol: "PEMDAS",
      textGeometryScale: [0.3, 1],
    },
    { name: "Variables", symbol: "2x", textGeometryScale: [1, 1] },
    {
      name: "Multiple Step Equations",
      symbol: "7x+3=\n2x+13",
      textGeometryScale: [0.47, 0.5],
    },
    { name: "Functions", symbol: "f(x)=", textGeometryScale: [0.7, 1] },
    { name: "Inequalities", symbol: "≤", textGeometryScale: [1, 1] },
    {
      name: "Factoring",
      symbol: "(x+a)\n(x+b)",
      textGeometryScale: [0.5, 0.5],
    },
    { name: "Graphing", symbol: "⩩", textGeometryScale: [1, 1] },
  ],
  HigherEducation: [
    { name: "Matrices", symbol: "[◻◻◻]", textGeometryScale: [0.5, 1] },
    {
      name: "Polynomials",
      symbol: "5x^2+\n2y-7",
      textGeometryScale: [0.5, 0.5],
    },
    { name: "Number Theory", symbol: "⍺′", textGeometryScale: [1, 1] },
    { name: "Summation", symbol: "Σ", textGeometryScale: [1, 1] },
    { name: "Statistics", symbol: "U", textGeometryScale: [1, 1] },
    { name: "Geometry", symbol: "⊾", textGeometryScale: [1, 1] },
    { name: "Derivatives", symbol: "d/dx", textGeometryScale: [0.65, 1] },
    { name: "Integrals", symbol: "∫", textGeometryScale: [1, 1] },
  ],
};

export const projects = [
  {
    name: "Website",
    status: "finished",
    description:
      "Constantly working here to improve my front end design skill, adding themes and creating a dynamic content loading scheme to ensure that all themes work seamlessly with each other. This allows me a platform to display my talent and projects. Aswell as, make projects with a sophisticated back end using Firebase.",
    timespan: "Constant",
    rating: "6/10",
    githubLink: "https://github.com/MScheiterle/Simpl1f1ed.com",
  },
  {
    name: "Capstone Project",
    status: "finished",
    description:
      "This project was meant to be for 3 people and take 6 weeks, my classmates chose to not do anything so I did it alone in half the time since they decided to tell me late they weren't going to participate. This is a basic CRUD app that allows a user to create tasks and publish them for others to see. The rating of 3/10 is from the harsh colors and bad design choices. The functionality was all there but it was build on python Flask. Proud I got it done though.",
    timespan: "3 weeks",
    rating: "3/10",
    githubLink: "https://github.com/MScheiterle/Capstone-Project",
  },
  {
    name: "QuickMaths",
    status: "current",
    description:
      "This will be the foundation for a competative and practice math website, testing how fast people can do all forms of math problems. It will be hosted on this website until it is fully finished and in demand.",
    timespan: "",
    rating: "",
    githubLink: "",
  },
  {
    name: "Open Intel",
    status: "planned",
    description:
      "This software will allow access to all Open Source Intelligence (OSINT) gathering tools. I hope this becomes something that people can use more than the other white pages copy sites that have fake information. This will be difficult though...",
    timespan: "",
    rating: "",
    githubLink: "",
  },
  {
    name: "Image Comb",
    status: "planned",
    description:
      "This is planned as an image encryption and tagging website. The hope is to have public and easy access to free images with accurate tagging and search.",
    timespan: "",
    rating: "",
    githubLink: "",
  },
];

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]M(\.[^<>()[\]\\.,;:\s@"]M)*)|(".M"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]M\.)M[a-zA-Z]{2,}))$/
  );
};

// Not used ATM
export const validateStrongPassword = (password) => {
  return password.match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  );
};

export const validateMediumPassword = (password) => {
  return password.match(
    /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/
  );
};

export const validateUsername = (username) => {
  return username.match(/^([A-Za-z0-9]|[-._](?![-._])){4,20}$/);
};
