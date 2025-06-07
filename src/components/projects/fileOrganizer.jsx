

const fileOrganizer =   {
    id: 'file-organizer',
    title: 'File Organizer',
    image: '/file_org.jpg',
    description: 'A desktop application that automatically organizes files into categorized folders with undo functionality',
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/File-Arranger.git',
    overview: 'The File Organizer is a Python application built with Tkinter that helps users automatically sort their files into categorized folders based on file extensions. It features a simple graphical interface that allows users to select a folder and organize its contents with a single click. This project was developed to solve the common problem of cluttered download or document folders.',
    features: [
      { title: 'Smart File Categorization', description: 'Automatically sorts files into predefined categories (Images, Documents, Videos, etc.) based on their extensions.', icon: 'fas fa-folder-open' },
      { title: 'Undo Functionality', description: 'Maintains a log of all file movements, allowing users to revert changes with a single click.', icon: 'fas fa-undo' },
      { title: 'User-Friendly GUI', description: 'Built with Tkinter for a clean, intuitive interface that works across Windows, macOS, and Linux.', icon: 'fas fa-desktop' },
      { title: 'Customizable Categories', description: 'Easily modify the FILE_CATEGORIES dictionary to add new file types or change existing categories.', icon: 'fas fa-cog' },
    ],
    screenshots: [
      { src: '/file_org1.png', alt: 'File Organizer Main Interface', caption: 'File Organizer Main Interface' },
      { src: '/file_org2.png', alt: 'File List', caption: 'List of organized files' },
      { src: '/file_org3.png', alt: 'Undo Log', caption: 'Undo organization from log' },
    ],
    fileCategories: {
      Images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
      Documents: ['.pdf', '.docx', '.doc', '.txt', '.pptx', '.xlsx', '.odt'],
      Videos: ['.mp4', '.mkv', '.mov', '.avi', '.flv'],
      Audio: ['.mp3', '.wav', '.aac', '.flac'],
      Archives: ['.zip', '.rar', '.7z', '.tar', '.gz'],
      Code: ['.py', '.js', '.html', '.css', '.java', '.c', '.cpp', '.json'],
      Installers: ['.exe', '.msi', '.dmg', '.deb'],
      Others: 'Any file with an extension not in the above categories will be moved to an "Others" folder.',
    },
    installation: {
      prerequisites: ['Python 3.6 or higher', 'Tkinter (usually included with Python)'],
      runCommands: `# Clone the repository
git clone hhttps://github.com/mikeCodeCraft/File-Arranger.git

# Run the application
python file_organizer.py`,
      usage: [
        'Click "Browse Folder" to select the folder you want to organize',
        'View the list of files in the selected folder',
        'Click "Organize Files" to automatically sort files into categories',
        'If needed, use "Undo Last Organize" to revert changes',
      ],
    },
    codeHighlights: [
      {
        title: 'File Categorization Logic (get the complete code from the repository)',
        code: `FILE_CATEGORIES = {
    "Images": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    "Documents": [".pdf", ".docx", ".doc", ".txt", ".pptx", ".xlsx", ".odt"],
    "Videos": [".mp4", ".mkv", ".mov", ".avi", ".flv"],
    "Audio": [".mp3", ".wav", ".aac", ".flac"],
    "Archives": [".zip", ".rar", ".7z", ".tar", ".gz"],
    "Code": [".py", ".js", ".html", ".css", ".java", ".c", ".cpp", ".json"],
    "Installers": [".exe", ".msi", ".dmg", ".deb"],
}`,
      },
      {
        title: 'File Organization Function',
        code: `def organize_files():
    path = folder_path.get()
    if not path:
        messagebox.showwarning("No Folder", "Please select a folder first.")
        return
    moved_files = {}  # Track moved files for undo functionality
    try:
        for filename in os.listdir(path):
            file_path = os.path.join(path, filename)
            if os.path.isfile(file_path):
                file_ext = os.path.splitext(filename)[1].lower()
                moved = False
                for category, extensions in FILE_CATEGORIES.items():
                    if file_ext in extensions:
                        new_path = move_file_to_category(file_path, path, category)
                        moved_files[new_path] = file_path  # log: new → old
                        moved = True
                        break
                if not moved:
                    new_path = move_file_to_category(file_path, path, "Others")
                    moved_files[new_path] = file_path
        with open("organizer_log.json", "w") as f:
            json.dump(moved_files, f)
        messagebox.showinfo("Success", "Files have been organized!")
        list_files(path)  # Refresh file list
    except Exception as e:
        messagebox.showerror("Error", f"Failed to organize files:\n{e}")
}`,
      },
      {
        title: 'Undo Functionality',
        code: `def undo_organize():
    if not os.path.exists("organizer_log.json"):
        messagebox.showinfo("Nothing to Undo", "No organization log found.")
        return
    try:
        with open("organizer_log.json", "r") as f:
            moved_files = json.load(f)
        for new_path, original_path in moved_files.items():
            if os.path.exists(new_path):
                shutil.move(new_path, original_path)
        os.remove("organizer_log.json")
        messagebox.showinfo("Undo Complete", "Files moved back successfully.")
        list_files(folder_path.get())  # Refresh file list
    except Exception as e:
        messagebox.showerror("Error", f"Undo failed:\n{e}")`,
      },
    ],
    challenges: [
      { title: 'Cross-Platform Compatibility', solution: 'Used Python\'s built-in Tkinter for the GUI to ensure the application works on Windows, macOS, and Linux without modification.' },
      { title: 'Undo Functionality', solution: 'Implemented a JSON-based logging system that records all file movements, enabling reliable undo operations.' },
      { title: 'Error Handling', solution: 'Added comprehensive try-catch blocks to prevent crashes and provide user-friendly error messages.' },
    ],
    enhancements: [
      'Add support for custom category definitions through a configuration file',
      'Implement a preview feature before actually moving files',
      'Add support for organizing files based on creation/modification dates',
      'Create an executable version for easy distribution',
    ],
    technologies: ['Python', 'Tkinter', 'os', 'shutil', 'json'],
    status: 'Completed (Active Maintenance)',
    repository: 'https://github.com/mikeCodeCraft/File-Arranger.git',
    tagsDetailed: ['python', 'gui', 'file-management', 'productivity'],
  };

  export default fileOrganizer;