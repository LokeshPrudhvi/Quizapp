import { useState } from "react";

const reactQuestions = [
  {
    question: "What is React primarily used for?",
    options: [
      "Building databases",
      "Creating server-side applications",
      "Developing user interfaces",
      "Managing cloud storage",
    ],
    answer: "Developing user interfaces",
  },
  {
    question: "Which command is used to create a new React app?",
    options: [
      "npm create-react-app myApp",
      "npx create-react-app myApp",
      "react new myApp",
      "npm init react-app myApp",
    ],
    answer: "npx create-react-app myApp",
  },
  {
    question: "What is JSX?",
    options: [
      "A new JavaScript framework",
      "A syntax extension for JavaScript",
      "A database query language",
      "A type of CSS preprocessor",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    question:
      "Which hook is used for managing state in a functional component?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    answer: "useState",
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A copy of the actual DOM stored in memory",
      "A new type of HTML document",
      "A browser extension for React",
      "A real-time database for React apps",
    ],
    answer: "A copy of the actual DOM stored in memory",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: [
      "Using state",
      "Using props",
      "Using Redux",
      "Using localStorage",
    ],
    answer: "Using props",
  },
  {
    question:
      "Which method is called when a component is first added to the DOM?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentWillUnmount",
      "componentWillUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    question: "Which React hook is used for performing side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
  },
  {
    question: "What is the purpose of the 'key' prop in lists?",
    options: [
      "To style list items",
      "To identify list items uniquely",
      "To sort the list",
      "To pass data to list items",
    ],
    answer: "To identify list items uniquely",
  },
  {
    question: "What does React use to improve performance?",
    options: [
      "Direct DOM manipulation",
      "Shadow DOM",
      "Virtual DOM",
      "Client-side rendering",
    ],
    answer: "Virtual DOM",
  },
];

export default function Question({
  setSelectedQuestion,
  selectedQuestion,
  setResult,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Use state for result

  const handleOnSubmit = () => {
    setResult((prevResult) => [...prevResult, selectedOption]); // Add selected option to result
    setSelectedQuestion((prev) => prev + 1); // Move to the next question
    setSelectedOption(null); // Reset selected option
  };

  const currentQuestion = reactQuestions[selectedQuestion];

  return (
    <div id="main-container">
      <h6>{`Question ${selectedQuestion + 1}/${reactQuestions.length} `}</h6>
      <h1>{currentQuestion.question}</h1>

      {currentQuestion.options.map((option, index) => (
        <div
          key={index}
          className={` ${selectedOption === index + 1 ? "selected" : ""}`}
          onClick={() => setSelectedOption(index + 1)} // Handle option click
        >
          {option}
        </div>
      ))}

      <div
        id={`${selectedOption != null ? "submit" : "notsubmit"}`}
        onClick={() => {
          if (selectedOption != null) {
            handleOnSubmit();
          }
        }}
      >
        {selectedQuestion < reactQuestions.length - 1
          ? "Next Question"
          : "Submit"}
      </div>
    </div>
  );
}
