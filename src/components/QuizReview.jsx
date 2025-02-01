/* eslint-disable react/prop-types */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuizReview({ questions, userAnswers }) {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <Card key={index} className="w-full mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Question {index + 1}</CardTitle>
            <CardDescription>{question.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-2 rounded ${
                    userAnswers[index] === optionIndex
                      ? option.is_correct
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : option.is_correct
                        ? "bg-green-100 border-green-500"
                        : ""
                  } ${userAnswers[index] === optionIndex ? "border-2" : ""}`}
                >
                  {option.description}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Detailed Solution:</h4>
              <p>{question.detailed_solution}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

