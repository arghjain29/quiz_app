import { useState } from "react";
import QuizStart from "./components/QuizStart.jsx";
import QuizQuestion from "./components/QuizQuestion.jsx";
import QuizResults from "./components/QuizResults.jsx";
import axios from "axios";

export default function Home() {
  const [quizState, setQuizState] = useState("start");
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState({ correct: 0, incorrect: 0 });

  const startQuiz = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://api.jsonserve.com/Uw5CrX"
        )}`
      );
      const data = JSON.parse(response.data.contents); // Extract actual data

      setQuizData(data);
      setQuizState("question");
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 4);
      setAnswerStatus({...answerStatus, correct: answerStatus.correct + 1});
    }
    if (isCorrect == false) {
      setScore(score - 1);
      setAnswerStatus({...answerStatus, incorrect: answerStatus.incorrect + 1});
    }
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState("results");
    }
  };

  const resetQuiz = () => {
    setQuizState("start");
    setQuizData(null);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-800 h-screen overflow-auto">
        {quizState === "question" && quizData && (
          <div className="mb-8 flex flex-col items-center text-center">
            <h1 className="text-5xl font-extrabold text-white mb-4">{quizData.title}</h1>
            <p className="text-2xl text-gray-200">{quizData.topic}</p>
          </div>
        )}
        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg p-6 ">
          {quizState === "start" && <QuizStart onStart={startQuiz} />}
          {quizState === "question" && quizData && (
            <QuizQuestion
              question={quizData.questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestion + 1}
              totalQuestions={quizData.questions_count}
            />
          )}
          {quizState === "results" && (
            <QuizResults
              score={score}
              answerStatus={answerStatus}
              totalQuestions={quizData.questions_count}
              onReset={resetQuiz}
            />
          )}
        </div>
      </main>
    </>
  );    
  
}
