function SplashScreen({ onStart }) {
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
      <p className="text-gray-400 text-lg mb-2 tracking-wide">
        SPACE & TECHNOLOGY EDITION
      </p>

      {/* Description */}
      <p className="text-gray-500 mb-10 max-w-sm mx-auto">
        Test your knowledge with 5 challenging questions about the cosmos and cutting-edge tech.
      </p>

      {/* Stats badges */}
      <div className="flex justify-center gap-4 mb-10">
        <div className="px-4 py-2 rounded-lg bg-cyber-dark border border-cyber-purple/30 text-cyber-purple-light text-sm">
          <span className="font-bold">5</span> Questions
        </div>
        <div className="px-4 py-2 rounded-lg bg-cyber-dark border border-cyber-blue/30 text-cyber-blue-light text-sm">
          <span className="font-bold">Quick</span> Play
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-10 py-4 font-cyber font-semibold text-lg text-white bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-purple active:scale-95"
      >
        {/* Button glow effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

        {/* Button content */}
        <span className="relative flex items-center gap-2">
          START QUIZ
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>

      {/* Footer hint */}
      <p className="mt-8 text-gray-600 text-sm">
        New questions every day
      </p>
    </div>
  )
}

export default SplashScreen
