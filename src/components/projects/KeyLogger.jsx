const keyloggerApp = {
  id: 'Keylogger-App',
  title: 'Keylogger App',
  image: '/images/keylogger.jpg',
  description: 'A Python-based keylogger that logs keystrokes and active window titles in real time.',
  type: 'Python Script',
  codeLink: '#',
  overview:
    'This keylogger uses `pynput` to capture keyboard input and `win32gui` to track the active window. It logs keystrokes, detects window switches, and saves the data to a text file with timestamps. Optional encryption support is scaffolded using Fernet.',
  features: [
    {
      title: 'Real-Time Keystroke Logging',
      description: 'Captures every key press along with context like window title and timestamp.',
      icon: 'fas fa-keyboard',
    },
    {
      title: 'Window Tracking',
      description: 'Logs the name of the active window to understand the context of user actions.',
      icon: 'fas fa-window-restore',
    },
    {
      title: 'Buffering & Flushing',
      description: 'Buffers characters until non-character input or window switch for better formatting.',
      icon: 'fas fa-save',
    },
    {
      title: 'Shift Detection',
      description: 'Accurately captures upper/lowercase input with shift key handling.',
      icon: 'fas fa-arrow-up',
    },
  ],
  screenshots: [
    {
      src: '/keylogger_output.png',
      alt: 'Keylog File Example',
      caption: 'Example of logged keystrokes and window changes in the output file',
    },
  ],
  installation: {
    prerequisites: [
      'Python 3.6 or higher',
      'pynput (pip install pynput)',
      'pywin32 (pip install pywin32)',
      'cryptography (pip install cryptography) — optional',
    ],
    runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

# Navigate to the project directory
cd Python_Mini_Projects

# Install dependencies
pip install pynput pywin32 cryptography

# Run the keylogger
python keylogger.py`,
    usage: [
      'Run the script in the background',
      'Press keys and switch windows — everything is logged',
      'Press ESC to stop logging and exit the program',
      'Log file is saved as key_log.txt in the same directory',
    ],
  },
  codeHighlights: [
    {
      title: 'Window Context Logging',
      code: `def get_active_window():
    return win32gui.GetWindowText(win32gui.GetForegroundWindow())`,
    },
    {
      title: 'Key Press Logic',
      code: `if hasattr(key, 'char') and key.char is not None:
    buffer += key.char
else:
    if key == keyboard.Key.space:
        buffer += ' '
    elif key == keyboard.Key.enter:
        buffer += '\\n'
    elif key == keyboard.Key.backspace:
        buffer = buffer[:-1]`,
    },
    {
      title: 'Shift Key Tracking',
      code: `elif key in [keyboard.Key.shift, keyboard.Key.shift_r]:
    shift_held = True

...

if key in [keyboard.Key.shift, keyboard.Key.shift_r]:
    shift_held = False`,
    },
    {
      title: 'Kill Switch',
      code: `if key == keyboard.Key.esc:
    flush_buffer()
    write_log("Killed\\n")
    return False`,
    },
  ],
  challenges: [
    {
      title: 'Window Detection on Windows Only',
      solution: 'Used `win32gui`, which is Windows-specific, so script is not cross-platform.',
    },
    {
      title: 'Accurate Character Interpretation',
      solution: 'Implemented shift key state tracking and used `hasattr(key, "char")` to process valid input.',
    },
  ],
  enhancements: [
    'Encrypt log file with Fernet before saving',
    'Make cross-platform (use `pygetwindow` or platform-agnostic libraries)',
    'Add GUI to start/stop logging and configure output file',
    'Email log files periodically for remote monitoring (ethical use only)',
  ],
  documentation: [
    {
      title: 'README.md',
      link: '#',
      icon: 'fab fa-github',
    },
    {
      title: 'pynput Docs',
      link: 'https://pynput.readthedocs.io/en/latest/',
      icon: 'fas fa-external-link-alt',
    },
    {
      title: 'Fernet Encryption Guide',
      link: 'https://cryptography.io/en/latest/fernet/',
      icon: 'fas fa-lock',
    },
  ],
  technologies: ['Python', 'pynput', 'win32gui', 'cryptography'],
  status: 'Completed (Ethical/Educational Use Only)',
  repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
  tagsDetailed: ['python', 'keyboard', 'windows', 'security', 'logger'],
};

export default keyloggerApp;
