import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  return (
    <React.Fragment>
      <h1>Flash Cards</h1>
      <div className="container">
        {questions.map((question) => (
          <FlashCard key={question.id} question={question} />
        ))}
      </div>
    </React.Fragment>
  );
}

function FlashCard({ question }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      key={question.id}
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <h2>{question.question}</h2>
      <div className="answer">{question.answer}</div>
    </div>
  );
}

export default App;

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
