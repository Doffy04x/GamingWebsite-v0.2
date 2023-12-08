import React, { useState } from 'react';

const TriviaQuiz = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'What year did World War I begin?',
      options: ['1914', '1920', '1939', '1945'],
      answer: '1914'
    },
    // Add more questions in a similar format
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      setIsAnsweredCorrectly(true);
    } else {
      setIsAnsweredCorrectly(false);
    }

    if (currentQuestion + 1 < questions.length) {
      setSelectedOption('');
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        {showResult ? (
          <div>
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {questions.length}</p>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '24px' }}>{questions[currentQuestion].question}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    padding: '15px 30px',
                    margin: '10px',
                    backgroundColor:
                      isAnsweredCorrectly && option === questions[currentQuestion].answer
                        ? 'green'
                        : !isAnsweredCorrectly && option === selectedOption
                        ? 'red'
                        : 'lightgray',
                    color: 'black',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              style={{
                padding: '15px 40px',
                margin: '20px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TriviaQuiz;