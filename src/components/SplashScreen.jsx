function SplashScreen({ onStartQuiz, quizzes }) {
  const quizList = Object.values(quizzes)

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'rocket':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case 'book':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
    }
  }

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple':
        return {
          gradient: 'from-cyber-purple to-cyber-purple-light',
          border: 'border-cyber-purple/30 hover:border-cyber-purple',
          shadow: 'hover:shadow-glow-purple',
          text: 'text-cyber-purple-light',
          bg: 'bg-cyber-purple/10'
        }
      case 'blue':
        return {
          gradient: 'from-cyber-blue to-cyber-cyan',
          border: 'border-cyber-blue/30 hover:border-cyber-blue',
          shadow: 'hover:shadow-glow-blue',
          text: 'text-cyber-blue-light',
          bg: 'bg-cyber-blue/10'
        }
      default:
        return {
          gradient: 'from-cyber-purple to-cyber-blue',
          border: 'border-gray-700 hover:border-gray-500',
          shadow: 'hover:shadow-lg',
          text: 'text-gray-300',
          bg: 'bg-gray-800/50'
        }
    }
  }

  return (
    <div className="animate-fade-in text-center">
      {/* Logo/Icon */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-cyber-purple to-cyber-blue shadow-glow-purple animate-pulse-glow">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="font-cyber text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-purple-light via-cyber-pink to-cyber-blue-light bg-clip-text text-transparent">
        DAILY TRIVIA
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-8 tracking-wide">
        CHOOSE YOUR CHALLENGE
      </p>

      {/* Quiz Selection Cards */}
      <div className="space-y-4 mb-8">
        {quizList.map((quiz) => {
          const colors = getColorClasses(quiz.color)
          return (
            <button
              key={quiz.id}
              onClick={() => onStartQuiz(quiz.id)}
              className={`group w-full p-5 rounded-xl bg-cyber-dark/50 border-2 ${colors.border} ${colors.shadow} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-left`}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white`}>
                  {getIcon(quiz.icon)}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`font-cyber font-semibold text-lg ${colors.text} mb-1`}>
                    {quiz.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {quiz.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`flex-shrink-0 ${colors.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Question count badge */}
              <div className="mt-3 flex gap-2">
                <span className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium`}>
                  {quiz.questions.length} Question Pool
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-xs font-medium">
                  5 Random Each Game
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer hint */}
      <p className="text-gray-600 text-sm">
        New questions added regularly
      </p>
    </div>
  )
}

export default SplashScreen
