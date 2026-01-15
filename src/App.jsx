import { useState, useCallback } from 'react'
import SplashScreen from './components/SplashScreen'
import QuizCard from './components/QuizCard'
import ResultsScreen from './components/ResultsScreen'
import { quizzes } from './data/questions'

// Quiz states
const QUIZ_STATE = {
  SPLASH: 'splash',
  PLAYING: 'playing',
  FINISHED: 'finished'
}

// Number of questions per game
const QUESTIONS_PER_GAME = 5

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random questions from pool
function getRandomQuestions(questionPool, count) {
  const shuffled = shuffleArray(questionPool)
  return shuffled.slice(0, count)
}

function App() {
  // Quiz engine state
  const [gameState, setGameState] = useState(QUIZ_STATE.SPLASH)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)

  // Start the quiz with a specific quiz type
  const handleStartQuiz = useCallback((quizId) => {
    // Get random 5 questions from the quiz pool
    const questionPool = quizzes[quizId].questions
    const randomQuestions = getRandomQuestions(questionPool, QUESTIONS_PER_GAME)

    setSelectedQuiz(quizId)
    setQuestions(randomQuestions)
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
  }, [currentQuestionIndex, isAnswerRevealed, questions])

  // Move to next question
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setIsAnswerRevealed(false)
    } else {
      setGameState(QUIZ_STATE.FINISHED)
    }
  }, [currentQuestionIndex, questions.length])

  // Play again - go back to splash to choose quiz
  const handlePlayAgain = useCallback(() => {
    setGameState(QUIZ_STATE.SPLASH)
    setSelectedQuiz(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerRevealed(false)
  }, [])

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
          <SplashScreen onStartQuiz={handleStartQuiz} quizzes={quizzes} />
        )}

        {gameState === QUIZ_STATE.PLAYING && questions.length > 0 && (
          <QuizCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            isAnswerRevealed={isAnswerRevealed}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            quizTitle={quizzes[selectedQuiz]?.title}
          />
        )}

        {gameState === QUIZ_STATE.FINISHED && (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
            onPlayAgain={handlePlayAgain}
            quizTitle={quizzes[selectedQuiz]?.title}
          />
        )}
      </main>
    </div>
  )
}

export default App
