import { useState, useCallback } from 'react'
import HomeScreen from './components/HomeScreen'
import SplashScreen from './components/SplashScreen'
import QuizCard from './components/QuizCard'
import ResultsScreen from './components/ResultsScreen'
import { quizzes } from './data/questions'
import { mathsQuizzes } from './data/mathsQuestions'
import { frenchQuizzes } from './data/frenchQuestions'

// App states
const APP_STATE = {
  HOME: 'home',
  CATEGORY: 'category',
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
  // App state
  const [appState, setAppState] = useState(APP_STATE.HOME)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)

  // Get the appropriate quiz data based on category
  const getQuizData = useCallback(() => {
    if (selectedCategory === 'trivia') return quizzes
    if (selectedCategory === 'maths') return mathsQuizzes
    if (selectedCategory === 'french') return frenchQuizzes
    return {}
  }, [selectedCategory])

  // Handle category selection from home screen
  const handleSelectCategory = useCallback((categoryId) => {
    setSelectedCategory(categoryId)
    setAppState(APP_STATE.CATEGORY)
  }, [])

  // Start the quiz with a specific quiz type
  const handleStartQuiz = useCallback((quizId) => {
    const quizData = selectedCategory === 'trivia' ? quizzes : selectedCategory === 'maths' ? mathsQuizzes : frenchQuizzes
    const questionPool = quizData[quizId].questions
    const randomQuestions = getRandomQuestions(questionPool, QUESTIONS_PER_GAME)

    setSelectedQuiz(quizId)
    setQuestions(randomQuestions)
    setAppState(APP_STATE.PLAYING)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerRevealed(false)
  }, [selectedCategory])

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
      setAppState(APP_STATE.FINISHED)
    }
  }, [currentQuestionIndex, questions.length])

  // Go back to home
  const handleGoHome = useCallback(() => {
    setAppState(APP_STATE.HOME)
    setSelectedCategory(null)
    setSelectedQuiz(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerRevealed(false)
  }, [])

  // Go back to category selection
  const handleGoToCategory = useCallback(() => {
    setAppState(APP_STATE.CATEGORY)
    setSelectedQuiz(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswerRevealed(false)
  }, [])

  // Get current quiz title
  const getCurrentQuizTitle = () => {
    const quizData = getQuizData()
    return quizData[selectedQuiz]?.title || ''
  }

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
        {appState === APP_STATE.HOME && (
          <HomeScreen onSelectCategory={handleSelectCategory} />
        )}

        {appState === APP_STATE.CATEGORY && (
          <SplashScreen
            onStartQuiz={handleStartQuiz}
            quizzes={getQuizData()}
            onGoHome={handleGoHome}
            categoryTitle={selectedCategory === 'trivia' ? 'Quiz' : selectedCategory === 'maths' ? 'Maths Problems' : 'French'}
          />
        )}

        {appState === APP_STATE.PLAYING && questions.length > 0 && (
          <QuizCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            isAnswerRevealed={isAnswerRevealed}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            onGoHome={handleGoHome}
            quizTitle={getCurrentQuizTitle()}
          />
        )}

        {appState === APP_STATE.FINISHED && (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
            onPlayAgain={handleGoToCategory}
            onGoHome={handleGoHome}
            quizTitle={getCurrentQuizTitle()}
          />
        )}
      </main>
    </div>
  )
}

export default App
