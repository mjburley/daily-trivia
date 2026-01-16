# Quiz App Framework Reference

This document describes the framework and patterns used in this React quiz application, for use as a template in future projects.

## Technology Stack

- **React 18** with JSX
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS with custom cyberpunk theme
- **PostCSS** - CSS processing

## Project Structure

```
project-root/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind + custom theme colours
├── postcss.config.js       # PostCSS configuration
├── public/
│   └── favicon.svg         # App icon
└── src/
    ├── main.jsx            # React entry point
    ├── index.css           # Global styles + Tailwind imports
    ├── App.jsx             # Main app component with state management
    ├── components/
    │   ├── HomeScreen.jsx      # Category selection screen
    │   ├── SplashScreen.jsx    # Quiz topic selection within category
    │   ├── QuizCard.jsx        # Question display and answer selection
    │   └── ResultsScreen.jsx   # Score display at end of quiz
    └── data/
        ├── questions.js        # Trivia quiz data
        ├── mathsQuestions.js   # Maths quiz data
        └── frenchQuestions.js  # French quiz data
```

## App State Flow

```
HOME → CATEGORY → PLAYING → FINISHED
  ↑_______|_________|_________|
         (back/home buttons)
```

### State Variables (App.jsx)

```javascript
const [appState, setAppState] = useState(APP_STATE.HOME)      // Current screen
const [selectedCategory, setSelectedCategory] = useState(null) // e.g. 'trivia', 'maths', 'french'
const [selectedQuiz, setSelectedQuiz] = useState(null)         // e.g. 'spaceTech', 'addition'
const [questions, setQuestions] = useState([])                 // Current game's 5 random questions
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [score, setScore] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState(null)
const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)
```

## Data Structure

### Category Data File Format

Each category has its own data file exporting a quizzes object:

```javascript
export const categoryQuizzes = {
  topicId: {
    id: 'topicId',
    title: 'Topic Title',
    description: 'Short description of the topic',
    icon: 'iconName',      // See icon list below
    color: 'colorName',    // purple, blue, pink, green, cyan
    questions: [
      {
        id: 1,
        question: "Question text?",
        choices: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,  // Index of correct choice (0-3)
        explanation: "Explanation shown after answering."
      },
      // ... 30 questions per topic
    ]
  },
  // ... more topics
}
```

### Adding a New Category

1. Create data file: `src/data/newCategoryQuestions.js`
2. Import in `App.jsx`: `import { newQuizzes } from './data/newCategoryQuestions'`
3. Update `getQuizData()` function to return data for new category
4. Update `handleStartQuiz()` to handle new category
5. Update `categoryTitle` in SplashScreen props
6. Add category to `HomeScreen.jsx` categories array
7. Add new icon to `HomeScreen.jsx` getIcon() if needed
8. Add new icons to `SplashScreen.jsx` getIcon() for topics

## Available Icons

### HomeScreen Icons
- `quiz` - Lightbulb
- `maths` - Calculator
- `french` - Translation/language

### SplashScreen Icons
- `rocket` - Space/tech
- `book` - Books/reading
- `film` - Movies
- `globe` - Geography
- `music` - Music
- `plus` - Addition
- `times` - Multiplication (X symbol)
- `divide` - Division
- `fraction` - Fractions
- `puzzle` - Word problems
- `palette` - Colours/art
- `paw` - Animals
- `utensils` - Food
- `speech` - Conversation/greetings
- `people` - Family/people

## Colour Theme

### Available Colours
- `purple` - Primary accent
- `blue` - Secondary accent
- `pink` - Tertiary accent
- `green` - Success/nature
- `cyan` - Info/cool accent

### Custom Tailwind Colours (tailwind.config.js)
```javascript
colors: {
  'cyber-dark': '#0a0a0f',
  'cyber-darker': '#050508',
  'cyber-purple': '#8b5cf6',
  'cyber-purple-light': '#a78bfa',
  'cyber-blue': '#3b82f6',
  'cyber-blue-light': '#60a5fa',
  'cyber-pink': '#ec4899',
  'cyber-cyan': '#22d3ee',
}
```

## Component Props Reference

### HomeScreen
```jsx
<HomeScreen onSelectCategory={(categoryId) => {}} />
```

### SplashScreen
```jsx
<SplashScreen
  onStartQuiz={(quizId) => {}}
  quizzes={quizDataObject}
  onGoHome={() => {}}
  categoryTitle="Category Name"
/>
```

### QuizCard
```jsx
<QuizCard
  question={questionObject}
  questionNumber={1}
  totalQuestions={5}
  selectedAnswer={null|0|1|2|3}
  isAnswerRevealed={false}
  onAnswerSelect={(answerIndex) => {}}
  onNextQuestion={() => {}}
  onGoHome={() => {}}
  quizTitle="Quiz Title"
/>
```

### ResultsScreen
```jsx
<ResultsScreen
  score={5}
  totalQuestions={5}
  onPlayAgain={() => {}}
  onGoHome={() => {}}
  quizTitle="Quiz Title"
/>
```

## Key Features

### Random Question Selection
Uses Fisher-Yates shuffle to randomly select 5 questions from a pool of 30:
```javascript
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getRandomQuestions(questionPool, count) {
  const shuffled = shuffleArray(questionPool)
  return shuffled.slice(0, count)
}
```

### Answer Reveal System
- User clicks answer → answer is selected and revealed
- Correct answer highlighted green, wrong answer highlighted red
- Explanation shown below
- "Next Question" button appears

## Styling Patterns

### Cyberpunk Glow Effects
```css
.shadow-glow-purple { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
.shadow-glow-blue { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
.shadow-glow-pink { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
```

### Card Pattern
```jsx
<div className="p-6 rounded-2xl bg-cyber-dark/50 border-2 border-color/30
               hover:border-color transition-all duration-300
               hover:scale-[1.02] active:scale-[0.98]">
```

### Gradient Text
```jsx
<h1 className="bg-gradient-to-r from-cyber-purple-light via-cyber-pink
               to-cyber-blue-light bg-clip-text text-transparent">
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

Configured for Vercel deployment. Just connect the GitHub repo to Vercel.

Build settings:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## GitHub Repository

https://github.com/mjburley/daily-trivia
