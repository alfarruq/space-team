import { useState, useEffect } from "react";

function TestPage({ questions }) {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Таймер обратного отсчета
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      finishTest();
    }
  }, [timeLeft, isFinished]);

  // Запоминаем ответ
  const handleAnswer = (qIndex, optIndex) => {
    setCurrentAnswers({ ...currentAnswers, [qIndex]: optIndex });
  };

  // Подсчёт результата
  const finishTest = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (currentAnswers[index] === q.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsFinished(true);
  };

  // Экран результатов
  if (isFinished) {
    return (
      <div className="result">
        <h2>Natija</h2>
        <p>Sizning balingiz: {score} / {questions.length}</p>
        <p>Foiz: {Math.round((score / questions.length) * 100)}%</p>
      </div>
    );
  }

  // Экран теста
  return (
    <div className="test-page">
      <h2>HTML Test</h2>
      <p>Qolgan vaqt: {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </p>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="question-block">
          <h3>{qIndex + 1}. {q.question}</h3>
          <div className="options">
            {q.options.map((opt, optIndex) => (
              <label key={optIndex} className="option">
                <input
                  type="radio"
                  name={`q-${qIndex}`}
                  value={optIndex}
                  checked={currentAnswers[qIndex] === optIndex}
                  onChange={() => handleAnswer(qIndex, optIndex)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={finishTest}>Yakunlash</button>
    </div>
  );
}

export default TestPage;
