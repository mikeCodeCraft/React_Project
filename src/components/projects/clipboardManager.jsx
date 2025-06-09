const clipboardManager = {
  id: 'Clipboard-Manager',
  title: 'Clipboard Manager with Context Detection',
  image: '/images/clipboard_gui.jpg',
  description: 'A PyQt5-powered clipboard manager that categorizes copied text by context (Code, URL, Email, etc.) and displays metadata like application, window, and timestamp.',
  type: 'Python GUI (PyQt5)',
  codeLink: '#',
  overview:
    'This context-aware clipboard manager monitors clipboard content in real time. Using PyQt5, it provides a searchable GUI that filters entries by category (e.g., URL, Code, Email) and displays metadata like app name, active window title, and timestamp. Useful for developers, writers, or multitaskers who want to keep track of their copied data effectively.',
  features: [
    {
      title: 'Clipboard Monitoring',
      description: 'Tracks clipboard changes and stores entries in a categorized list.',
      icon: 'fas fa-clipboard-list',
    },
    {
      title: 'Context Detection',
      description: 'Automatically detects if copied text is a URL, email, code snippet, or general text.',
      icon: 'fas fa-filter',
    },
    {
      title: 'GUI with Search & Filters',
      description: 'Includes search bar and context filter buttons (All, URL, Code, Email).',
      icon: 'fas fa-search',
    },
    {
      title: 'App & Window Metadata',
      description: 'Logs which application and window the content came from using Win32 API and psutil.',
      icon: 'fas fa-desktop',
    },
    {
      title: 'Clipboard Restoration',
      description: 'Click an item to view full content and copy it back to the clipboard.',
      icon: 'fas fa-copy',
    },
  ],
  screenshots: [
    {
      src: '/clipboard_gui_demo.png',
      alt: 'Clipboard GUI Interface',
      caption: 'Clipboard Manager GUI with context filters and entry list',
    },
    {
      src: '/clipboard_entry_details.png',
      alt: 'Clipboard Entry Details Dialog',
      caption: 'Dialog showing copied text details with app, window, and timestamp',
    },
  ],
  installation: {
    prerequisites: [
      'Python 3.6+',
      'PyQt5 (pip install pyqt5)',
      'pyperclip (pip install pyperclip)',
      'psutil (pip install psutil)',
      'pywin32 (pip install pywin32)',
    ],
    runCommands: `# Clone the repo
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

# Navigate to project folder
cd Python_Mini_Projects

# Install dependencies
pip install pyqt5 pyperclip psutil pywin32

# Run the clipboard manager
python context_clipboard.py`,
    usage: [
      'Start the GUI app.',
      'Copy any text from browsers, code editors, or emails.',
      'The app automatically categorizes and logs it.',
      'Search or filter items by category, view full content, or copy it back.',
    ],
  },
  codeHighlights: [
    {
      title: 'Context Detection Function',
      code: `def detect_context(text):
    if re.match(r'^https?://', text):
        return "URL"
    elif re.match(r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$', text):
        return "Email"
    elif any(x in text for x in ["def ", "class ", "import "]):
        return "Code"
    else:
        return "General"`,
    },
    {
      title: 'Getting Active App Name',
      code: `def get_process_name():
    hwnd = win32gui.GetForegroundWindow()
    tid, pid = win32process.GetWindowThreadProcessId(hwnd)
    proc = psutil.Process(pid)
    return proc.name()`,
    },
    {
      title: 'Clipboard Monitoring Thread',
      code: `while True:
    time.sleep(0.5)
    current_clipboard = pyperclip.paste()
    if current_clipboard != last_clipboard:
        entry = {
            "text": current_clipboard,
            "context": detect_context(current_clipboard),
            "app": get_process_name(),
            "window": get_active_window_title(),
            "time | date": time.strftime("%Y-%m-%d | %H:%M:%S")
        }`,
    },
    {
      title: 'Search & Filter UI Logic',
      code: `def filter_list(self):
    query = self.search_bar.text().lower()
    selected_ctx = self.selected_context
    for i in range(self.list_widget.count()):
        item = self.list_widget.item(i)
        entry = item.data(Qt.UserRole)
        item.setHidden(not (query in entry["text"].lower() and 
                            (selected_ctx == "All" or entry["context"] == selected_ctx)))`,
    },
  ],
  challenges: [
    {
      title: 'Thread-Safe UI Updates',
      solution: 'Used a background thread to poll clipboard and call UI-safe methods like `.add_entry()` from the main thread.',
    },
    {
      title: 'Getting Process Info Securely',
      solution: 'Handled exceptions from `psutil.Process()` and `win32gui` gracefully with fallback values.',
    },
  ],
  enhancements: [
    'Add persistent storage to save clipboard history across sessions',
    'Add dark mode and font size toggle',
    'Support for image clipboard content',
    'Export to JSON or CSV',
  ],
  documentation: [
    {
      title: 'PyQt5 Docs',
      link: 'https://doc.qt.io/qtforpython/',
      icon: 'fas fa-book',
    },
    {
      title: 'pyperclip Docs',
      link: 'https://pypi.org/project/pyperclip/',
      icon: 'fas fa-paste',
    },
  ],
  technologies: ['Python', 'PyQt5', 'pyperclip', 'psutil', 'win32gui'],
  status: 'Completed (Windows only)',
  repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects',
  tagsDetailed: ['clipboard', 'pyqt5', 'gui', 'context', 'text processing'],
};

export default clipboardManager;
