function HomeScreen({ onSelectCategory }) {
  const categories = [
    {
      id: 'trivia',
      title: 'Quiz',
      description: 'Test your knowledge on various topics',
      icon: 'quiz',
      color: 'purple',
      count: '5 Topics'
    },
    {
      id: 'maths',
      title: 'Maths Problems',
      description: 'Practice your maths skills with fun problems',
      icon: 'maths',
      color: 'blue',
      count: '5 Topics'
    },
    {
      id: 'french',
      title: 'French',
      description: 'Learn French words and phrases',
      icon: 'french',
      color: 'pink',
      count: '5 Topics'
    }
  ]

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'quiz':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 'maths':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      case 'french':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        )
      default:
        return null
    }
  }

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple':
        return {
          gradient: 'from-cyber-purple to-cyber-pink',
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
      case 'pink':
        return {
          gradient: 'from-cyber-pink to-rose-400',
          border: 'border-cyber-pink/30 hover:border-cyber-pink',
          shadow: 'hover:shadow-glow-pink',
          text: 'text-cyber-pink',
          bg: 'bg-cyber-pink/10'
        }
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          border: 'border-gray-500/30',
          shadow: '',
          text: 'text-gray-400',
          bg: 'bg-gray-500/10'
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
        BRAIN TRAINER
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-10 tracking-wide">
        CHOOSE YOUR CHALLENGE
      </p>

      {/* Category Cards */}
      <div className="space-y-4 mb-8">
        {categories.map((category) => {
          const colors = getColorClasses(category.color)
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`group w-full p-6 rounded-2xl bg-cyber-dark/50 border-2 ${colors.border} ${colors.shadow} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-left`}
            >
              <div className="flex items-center gap-5">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white`}>
                  {getIcon(category.icon)}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`font-cyber font-semibold text-xl ${colors.text} mb-1`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {category.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium`}>
                    {category.count}
                  </span>
                </div>

                {/* Arrow */}
                <div className={`flex-shrink-0 ${colors.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer hint */}
      <p className="text-gray-600 text-sm">
        Learn something new every day
      </p>
    </div>
  )
}

export default HomeScreen
