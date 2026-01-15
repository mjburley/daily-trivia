import { useState } from 'react'

function ResultsScreen({ score, totalQuestions, onPlayAgain }) {
  const [shareStatus, setShareStatus] = useState('')
  const percentage = Math.round((score / totalQuestions) * 100)

  const getScoreMessage = () => {
    if (percentage === 100) return { title: "PERFECT!", subtitle: "You're a genius!", emoji: "rocket" }
    if (percentage >= 80) return { title: "EXCELLENT!", subtitle: "Outstanding knowledge!", emoji: "star" }
    if (percentage >= 60) return { title: "GREAT JOB!", subtitle: "Well done!", emoji: "fire" }
    if (percentage >= 40) return { title: "NOT BAD!", subtitle: "Keep learning!", emoji: "brain" }
    return { title: "KEEP TRYING!", subtitle: "Practice makes perfect!", emoji: "book" }
  }

  const message = getScoreMessage()

  const getScoreColor = () => {
    if (percentage >= 80) return 'from-green-400 to-emerald-500'
    if (percentage >= 60) return 'from-cyber-blue to-cyan-400'
    if (percentage >= 40) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-pink-500'
  }

  const handleShare = async () => {
    const shareText = `I scored ${score}/${totalQuestions} (${percentage}%) on Daily Trivia: Space & Tech Edition! Can you beat my score?`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Trivia Results',
          text: shareText,
          url: window.location.href
        })
        setShareStatus('Shared!')
      } catch (err) {
        if (err.name !== 'AbortError') {
          fallbackCopy(shareText)
        }
      }
    } else {
      fallbackCopy(shareText)
    }
  }

  const fallbackCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setShareStatus('Copied to clipboard!')
      setTimeout(() => setShareStatus(''), 2000)
    } catch (err) {
      setShareStatus('Unable to share')
      setTimeout(() => setShareStatus(''), 2000)
    }
  }

  return (
    <div className="animate-bounce-in text-center">
      {/* Results card */}
      <div className="bg-cyber-dark/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden p-8">
        {/* Trophy/Badge icon */}
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${getScoreColor()} shadow-lg`}>
            {message.emoji === 'rocket' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
            {message.emoji === 'star' && (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            )}
            {message.emoji === 'fire' && (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.53 2.04-6.85 5-8.38V5c0-.28.22-.5.5-.5s.5.22.5.5v.62c.97.18 1.94.47 2.85.87-.55.88-.85 1.91-.85 3.01 0 3.31 2.69 6 6 6 .34 0 .68-.03 1-.09.03.2.05.4.05.59 0 4.97-4.03 9-9 9z" />
              </svg>
            )}
            {message.emoji === 'brain' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
            {message.emoji === 'book' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className={`font-cyber text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent`}>
          {message.title}
        </h1>
        <p className="text-gray-400 mb-8">{message.subtitle}</p>

        {/* Score display */}
        <div className="mb-8">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-6xl md:text-7xl font-cyber font-bold text-white">{score}</span>
            <span className="text-2xl text-gray-500">/ {totalQuestions}</span>
          </div>
          <div className="mt-2">
            <span className={`text-2xl font-cyber font-bold bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent`}>
              {percentage}%
            </span>
          </div>
        </div>

        {/* Progress ring visual */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="#1f2937"
                strokeWidth="8"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 3.52} 352`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-gray-400">SCORE</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          {/* Play Again button */}
          <button
            onClick={onPlayAgain}
            className="w-full py-4 px-6 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-xl font-cyber font-semibold text-white transition-all duration-300 hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            PLAY AGAIN
          </button>

          {/* Share button */}
          <button
            onClick={handleShare}
            className="w-full py-4 px-6 bg-cyber-dark border-2 border-cyber-purple/50 rounded-xl font-cyber font-semibold text-cyber-purple-light transition-all duration-300 hover:bg-cyber-purple/10 hover:border-cyber-purple hover:shadow-glow-purple/30 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {shareStatus || 'SHARE RESULTS'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-600 text-sm">
        Come back tomorrow for new questions!
      </p>
    </div>
  )
}

export default ResultsScreen
