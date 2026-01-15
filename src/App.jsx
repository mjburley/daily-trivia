import { useState, useCallback } from 'react'
import SplashScreen from './components/SplashScreen'
import QuizCard from './components/QuizCard'
import ResultsScreen from './components/ResultsScreen'
import { questions } from './data/questions'

// Quiz states
const QUIZ_STATE = {
  SPLASH: 'splash',
  PLAYING: 'playing',
  FINISHED: 'finished'
}

function App() {
  // Quiz engine state
  const [gameState, setGameState] = useState(QUIZ_STATE.SPLASH)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)

  // Start the quiz
  const handleStartQuiz = useCallback(() => {
    setGameState(QUIZ_STATE.PLAYING)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerRevealed(false)
  }, [])

  // Handle answer selection
  const handleAnswerSelect = useCallback((answerIndex) => {
    if (isAnswerRevealed) return

    setSelectedAnswer(answerIndex)
    setIsAnswerRevealed(true)

    const currentQuestion = questions[currentQuestionIndex]
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1)
    }
  }, [currentQuestionIndex, isAnswerRevealed])

  // Move to next question
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setIsAnswerRevealed(false)
    } else {
      setGameState(QUIZ_STATE.FINISHED)
    }
  }, [currentQuestionIndex])

  // Play again
  const handlePlayAgain = useCallback(() => {
    handleStartQuiz()
  }, [handleStartQuiz])

  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyber-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Main content */}
      <main className="relative z-10 w-full max-w-lg">
        {gameState === QUIZ_STATE.SPLASH && (
          <SplashScreen onStart={handleStartQuiz} />
        )}

        {gameState === QUIZ_STATE.PLAYING && (
          <QuizCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            isAnswerRevealed={isAnswerRevealed}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {gameState === QUIZ_STATE.FINISHED && (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </main>
    </div>
  )
}

export default App
