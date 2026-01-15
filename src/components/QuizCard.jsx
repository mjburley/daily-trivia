function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isAnswerRevealed,
  onAnswerSelect,
  onNextQuestion
}) {
  const progress = (questionNumber / totalQuestions) * 100

  const getButtonStyles = (index) => {
    const baseStyles = "w-full p-4 rounded-xl text-left transition-all duration-300 border-2 font-medium"

    if (!isAnswerRevealed) {
      return `${baseStyles} bg-cyber-dark/50 border-gray-700/50 text-gray-200 hover:border-cyber-purple/50 hover:bg-cyber-purple/10 hover:shadow-glow-purple/20 hover:scale-[1.02] active:scale-[0.98]`
    }

    if (index === question.correctAnswer) {
      return `${baseStyles} bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]`
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return `${baseStyles} bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]`
    }

    return `${baseStyles} bg-cyber-dark/30 border-gray-800 text-gray-500`
  }

  const getChoiceLetter = (index) => {
    return String.fromCharCode(65 + index) // A, B, C, D
  }

  return (
    <div className="animate-bounce-in">
      {/* Card container */}
      <div className="bg-cyber-dark/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-cyber-purple to-cyber-blue transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-800/50">
          <div className="flex items-center justify-between">
            <span className="text-cyber-purple-light font-cyber text-sm tracking-wider">
              QUESTION {questionNumber}/{totalQuestions}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < questionNumber
                      ? 'bg-cyber-purple'
                      : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="px-6 py-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-8">
            {question.question}
          </h2>

          {/* Choices */}
          <div className="space-y-3">
            {question.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                disabled={isAnswerRevealed}
                className={getButtonStyles(index)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold ${
                    isAnswerRevealed && index === question.correctAnswer
                      ? 'bg-green-500/30 text-green-400'
                      : isAnswerRevealed && index === selectedAnswer
                        ? 'bg-red-500/30 text-red-400'
                        : 'bg-gray-700/50 text-gray-400'
                  }`}>
                    {getChoiceLetter(index)}
                  </span>
                  <span>{choice}</span>

                  {/* Correct/Incorrect icons */}
                  {isAnswerRevealed && index === question.correctAnswer && (
                    <svg className="w-5 h-5 ml-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {isAnswerRevealed && index === selectedAnswer && index !== question.correctAnswer && (
                    <svg className="w-5 h-5 ml-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation & Next button */}
        {isAnswerRevealed && (
          <div className="px-6 pb-6 animate-slide-up">
            {/* Explanation */}
            <div className="mb-4 p-4 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30">
              <p className="text-sm text-gray-300">
                <span className="text-cyber-blue-light font-semibold">Explanation: </span>
                {question.explanation}
              </p>
            </div>

            {/* Next button */}
            <button
              onClick={onNextQuestion}
              className="w-full py-4 px-6 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-xl font-cyber font-semibold text-white transition-all duration-300 hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {questionNumber < totalQuestions ? (
                <>
                  NEXT QUESTION
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              ) : (
                <>
                  SEE RESULTS
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizCard
