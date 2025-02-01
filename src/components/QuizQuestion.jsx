/* eslint-disable react/prop-types */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function QuizQuestion({ question, onAnswer, currentQuestion, totalQuestions }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswer = () => {
    if (selectedAnswer !== null) {
      const isCorrect = question.options[selectedAnswer].is_correct
      onAnswer(isCorrect, selectedAnswer)
      setSelectedAnswer(null)
    }
  }

  return (
    <div>
      {/* Correct/Incorrect Answer Info */}
      <div className="bg-primary flex justify-end p-4 rounded-lg shadow-lg mb-6">
        <div className="flex flex-col text-white text-lg font-semibold space-y-2">
          <p className="flex items-center">
            <span className="mr-2 text-green-400">✔️</span>
            Correct Answer: <span className="text-yellow-400 ml-1">+4</span>
          </p>
          <p className="flex items-center">
            <span className="mr-2 text-red-400">❌</span>
            Wrong Answer: <span className="text-red-500 ml-1">-1</span>
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress value={(currentQuestion / totalQuestions) * 100} className="mb-4" />

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">{question.description}</h2>

      {/* Options */}
      <div className="space-y-4 mb-6">
        {question.options.map((answer, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? "default" : "outline"}
            className={`w-full text-left justify-start transition-all duration-200 
        ${selectedAnswer === index ? "bg-blue-600 text-white scale-105" : "hover:bg-gray-100"}`}
            onClick={() => setSelectedAnswer(index)}
          >
            {answer.description}
          </Button>
        ))}
      </div>

      {/* Submit Button */}
      <Button onClick={handleAnswer} disabled={selectedAnswer === null} className="w-full">
        Submit Answer
      </Button>

      {/* Question Info */}
      <div className="mt-4 text-right text-sm text-gray-500">
        Question {currentQuestion} of {totalQuestions}
      </div>

      {/* <p>{question.detailed_solution}</p> */}
    </div>
  )
}

