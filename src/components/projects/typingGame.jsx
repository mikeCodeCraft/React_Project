const typingGame = {
    id: 'typing-game',
    title: 'Typing Speed Game',
    image: '/typing_game.jpg', 
    description: 'A desktop application that tests and improves your typing speed with programming terminology',
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/typingGame.py',
    overview: 'The Typing Speed Game is a Python application built with Tkinter that helps users measure and improve their typing speed using programming terminology. It features a timed challenge where users type as many words correctly as possible within 60 seconds. This project was developed to help programmers practice typing while familiarizing themselves with common programming terms.',
    features: [
      { title: 'Programming Terminology', description: 'Uses a curated list of programming terms (python, function, loop, etc.) to help developers practice relevant vocabulary.', icon: 'fas fa-keyboard' },
      { title: 'Timed Challenge', description: '60-second countdown timer creates a sense of urgency and helps measure typing speed accurately.', icon: 'fas fa-stopwatch' },
      { title: 'Instant Feedback', description: 'Provides immediate visual feedback (✅/❌) after each word submission.', icon: 'fas fa-check-circle' },
      { title: 'Performance Stats', description: 'Calculates and displays WPM (words per minute), accuracy, and total words typed at the end of each game.', icon: 'fas fa-chart-bar' },
    ],
    screenshots: [
      { src: '/Main_interface.png', alt: 'Typing Speed Game Main Interface', caption: 'Main interface with word prompt' },
      { src: '/typing_game2.png', alt: 'Feedback Screen', caption: 'Instant feedback on correct/incorrect input' },
      { src: '/typing_game3.png', alt: 'Stats Screen', caption: 'Final stats display with WPM and accuracy' },
    ],
    wordList: [
      'python', 'keyboard', 'function', 'loop', 'variable',
      'class', 'object', 'exception', 'list', 'dictionary',
    ],
    installation: {
      prerequisites: ['Python 3.6 or higher', 'Tkinter (usually included with Python)'],
      runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git


# Run the application
python typingGame.py`,
      usage: [
        'Click "Start Game" to begin the 60-second challenge',
        'Type the word displayed on screen and press Enter',
        'Receive immediate feedback on your answer',
        'Continue typing words until time runs out',
        'View your final stats (WPM, accuracy, etc.)',
      ],
    },
    codeHighlights: [
      {
        title: 'Word List Initialization',
        code: `# Word list
words = ["python", "keyboard", "function", "loop", 
         "variable", "class", "object", "exception", 
         "list", "dictionary"]`,
      },
      {
        title: 'Game Initialization',
        code: `def __init__(self, root):
    self.root = root
    self.root.title("Typing Speed Game")
    self.root.geometry("500x350")
    self.root.resizable(False, False)
    
    # UI Elements
    self.label = tk.Label(root, text="Typing Speed Game", 
                         font=("Helvetica", 18))
    self.label.pack(pady=10)
    
    self.timer_label = tk.Label(root, text="Time: 60s",
                               font=("Helvetica", 14), fg="red")
    self.timer_label.pack()
    
    self.word_label = tk.Label(root, text="",
                             font=("Helvetica", 24), fg="blue")
    self.word_label.pack(pady=10)
    
    self.entry = tk.Entry(root, font=("Helvetica", 16))
    self.entry.pack(pady=10)
    self.entry.bind("<Return>", self.check_word)
    
    # ... additional UI elements ...`,
      },
      {
        title: 'Word Checking Logic',
        code: `def check_word(self, event=None):
    typed_word = self.entry.get().strip()
    current_word = self.shuffled_words[self.current_index]
    
    if typed_word == current_word:
        self.feedback.config(text="✅ Correct!", fg="green")
        self.correct_count += 1
    else:
        self.feedback.config(text=f"❌ Incorrect! It was '{current_word}'", fg="red")
    
    self.current_index += 1
    self.show_word()`,
      },
    ],
    challenges: [
      { title: 'Real-time Feedback', solution: 'Implemented immediate visual feedback using color-coded labels (green for correct, red for incorrect) to enhance user experience.' },
      { title: 'Timer Accuracy', solution: 'Used Python\'s time module to ensure precise 60-second countdown and accurate WPM calculation.' },
      { title: 'Word Randomization', solution: 'Employed random.sample() to shuffle words while ensuring no duplicates during a game session.' },
    ],
    enhancements: [
      'Add difficulty levels with different word lists (beginner, intermediate, advanced)',
      'Implement user profiles to track progress over time',
      'Add sound effects for correct/incorrect answers',
      'Create an executable version for easy distribution',
    ],
    technologies: ['Python', 'Tkinter', 'random', 'time'],
    status: 'Completed',
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
    tagsDetailed: ['python', 'gui', 'typing', 'education'],
  };

  export default typingGame;