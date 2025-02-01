/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"


export default function QuizStart({ onStart }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz!</h1>
      <p className="mb-8">Test your knowledge and have fun!</p>
      <Button onClick={onStart}>Start Quiz</Button>
    </div>)
} 

