// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

export const projects = [
  {
    id: 'typing-game',
    title: 'Typing Game',
    image: '/keyboard.jpg',
    description: 'A desktop application that tests and improves your typing speed with programming terminology',
    tags: ['Python'],
    type: 'Python Project',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/typingGame.py',
    overview: 'The Typing Game is a Python application designed to enhance typing skills using programming-related terms. It provides a fun and educational way to improve typing speed and accuracy.',
    features: [
      { title: 'Interactive Gameplay', description: 'Type programming terms under time pressure to score points.', icon: 'fas fa-keyboard' },
      { title: 'Score Tracking', description: 'Tracks and displays your typing speed and accuracy.', icon: 'fas fa-trophy' },
    ],
    screenshots: [], // Add images when available
    technologies: ['Python'],
    status: 'Completed',
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/typingGame.py',
    tagsDetailed: ['python', 'typing', 'education'],
  },
  {
    id: 'weather-checker',
    title: 'Weather Checker App',
    image: '/weather.jpg',
    description: 'A Python application that fetches and displays real-time weather data for any city worldwide',
    tags: ['Python'],
    type: 'Python',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/api_weather.py',
    overview: 'The Weather Checker App uses a weather API to provide real-time weather information for any city, with a simple command-line interface.',
    features: [
      { title: 'Real-Time Data', description: 'Fetches current weather conditions using an API.', icon: 'fas fa-cloud' },
      { title: 'City Search', description: 'Enter any city name to get instant weather updates.', icon: 'fas fa-search' },
    ],
    screenshots: [], // Add images when available
    technologies: ['Python', 'Requests'],
    status: 'Completed',
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/api_weather.py',
    tagsDetailed: ['python', 'api', 'weather'],
  },
  {
    id: 'file-organizer',
    title: 'File Organizer',
    image: '/file_org.jpg',
    description: 'A desktop application that automatically organizes files into categorized folders with undo functionality',
    tags: ['Python'],
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/tree/main/file-orgs',
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
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git
cd file-orgs

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
        title: 'File Categorization Logic',
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
                
                # Check each category for matching extension
                for category, extensions in FILE_CATEGORIES.items():
                    if file_ext in extensions:
                        new_path = move_file_to_category(file_path, path, category)
                        moved_files[new_path] = file_path  # log: new → old
                        moved = True
                        break
                
                # If no category matched, move to "Others"
                if not moved:
                    new_path = move_file_to_category(file_path, path, "Others")
                    moved_files[new_path] = file_path

        # Save undo log
        with open("organizer_log.json", "w") as f:
            json.dump(moved_files, f)

        messagebox.showinfo("Success", "Files have been organized!")
        list_files(path)  # Refresh file list
    except Exception as e:
        messagebox.showerror("Error", f"Failed to organize files:\n{e}")`,
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

        # Move files back to their original locations
        for new_path, original_path in moved_files.items():
            if os.path.exists(new_path):
                shutil.move(new_path, original_path)

        # Remove the log file after undo
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
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/tree/main/file-orgs',
    tagsDetailed: ['python', 'gui', 'file-management', 'productivity'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white  rounded-xl overflow-hidden shadow-lg card-hover transition duration-500">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 ">{project.title}</h3>
                  <span className="bg-purple-100 text-purple-800   text-xs px-2 py-1 rounded-full">{project.type}</span>
                </div>
                <p className="text-gray-600  mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100  px-2 py-1 text-xs rounded text-gray-800 ">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Link to={`/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800">
                    <i className="fas fa-external-link-alt"></i> Details
                  </Link>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;