
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"

export default function QuizResults({ score, answerStatus, totalQuestions, onReset }) {
  const totalPossibleScore = 4 * totalQuestions;
  const percentage = Math.max(0, Math.round((score / totalPossibleScore) * 100));
  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">Quiz Completed!</h2>
      <p className="text-2xl text-gray-700 mb-4">
        You scored <span className="font-bold text-green-500">{score}</span> out of <span className="font-bold">{totalPossibleScore}</span>
      </p>
      <p className="text-xl text-gray-600 mb-6">
        <span className="font-semibold text-green-500">Correct Answers:</span> {answerStatus.correct} <br />
        <span className="font-semibold text-red-500">Incorrect Answers:</span> {answerStatus.incorrect}
      </p>
      <div className="text-5xl font-extrabold text-blue-500 mb-8">Total Score: {percentage}%</div>
      <Button onClick={onReset} >
        Try Again
      </Button>
    </div>
  );
}
