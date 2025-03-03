import "./styles.css";
import { useState } from "react";

import Question from "./Question.jsx";
import Result from "./Result";

export default function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [result, setResult] = useState([]);
  console.log(result);
  return (
    <div className="App">
      {selectedQuestion < 10 ? (
        <Question
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
          setResult={setResult}
        />
      ) : (
        <Result result={result} />
      )}
    </div>
  );
}
