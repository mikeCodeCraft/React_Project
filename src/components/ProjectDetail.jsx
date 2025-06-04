// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const projects = [
  {
    id: 'file-organizer',
    title: 'File Organizer',
    image: '/file_org.jpg',
    description: 'A desktop application that automatically organizes files into categorized folders with undo functionality',
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
cd Python_Mini_Projects
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
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/tree/main/file-orgs',
    tagsDetailed: ['python', 'gui', 'file-management', 'productivity'],
  },
  {
    id: 'weather-checker',
    title: 'Weather App',
    image: '/weather.jpg', // Ensure this exists in public/
    description: 'A desktop application that fetches and displays real-time weather data for any city worldwide',
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
    overview: 'The Weather App is a Python application built with Tkinter that retrieves and displays current weather conditions for any city using the OpenWeatherMap API. It provides a simple graphical interface where users can enter a city name and instantly see temperature, humidity, wind speed, and weather conditions. This project was developed to demonstrate API integration with Python GUI applications.',
    features: [
      { title: 'Real-Time Weather Data', description: 'Fetches current weather conditions including temperature, humidity, wind speed, and weather description for any city worldwide.', icon: 'fas fa-cloud-sun' },
      { title: 'OpenWeatherMap API Integration', description: 'Utilizes the OpenWeatherMap API to provide accurate and up-to-date weather information with proper error handling.', icon: 'fas fa-globe' },
      { title: 'User-Friendly GUI', description: 'Built with Tkinter for a clean, intuitive interface that works across Windows, macOS, and Linux.', icon: 'fas fa-desktop' },
      { title: 'Comprehensive Error Handling', description: 'Gracefully handles invalid inputs, API errors, and network issues with user-friendly error messages.', icon: 'fas fa-exclamation-triangle' },
    ],
    screenshots: [
      { src: '/weather1.png', alt: 'Weather App Main Interface', caption: 'Main interface showing weather data' }, // Add if available
      { src: '/weather2.png', alt: 'City Input', caption: 'City input field and search button' },
    ],
    installation: {
      prerequisites: ['Python 3.6 or higher', 'Tkinter (usually included with Python)', 'requests library (pip install requests)', 'OpenWeatherMap API key (free tier available)'],
      runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git
# Install dependencies
pip install requests
# Run the application (replace YOUR_API_KEY with actual key)
python weather_app.py`,
      usage: [
        'Enter your OpenWeatherMap API key in the code',
        'Run the application',
        'Type a city name in the input field',
        'Click "Get Weather" or press Enter',
        'View the current weather conditions for the specified city',
      ],
    },
    codeHighlights: [
      {
        title: 'API Key Configuration',
        code: `# OpenWeatherMap API Key
API_KEY = "your_api_key_here"  # Replace with your actual API key`,
      },
      {
        title: 'Weather Data Fetching Function',
        code: `def get_weather():
    city = city_entry.get()
    if not city:
        messagebox.showwarning("No City", "Please enter a city name.")
        return
    try:
        # Make API request
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url).json()
        # Check for valid response
        if response.get("main"):
            temp = response["main"]["temp"]
            weather = response["weather"][0]["description"].title()
            humidity = response["main"]["humidity"]
            wind_speed = response["wind"]["speed"]
            # Update UI with weather data
            result_label.config(
                text=f"Temperature in {city.title()}: {temp}°C\n"
                     f"Condition: {weather}\n"
                     f"Humidity: {humidity}%\n"
                     f"Wind Speed: {wind_speed} km/h"
            )
        else:
            message = response.get("message", "Unknown error.")
            messagebox.showerror("Error", f"Failed to get weather: {message.capitalize()}")
    except requests.exceptions.RequestException as e:
        messagebox.showerror("Network Error", f"Failed to connect: {e}")`,
      },
      {
        title: 'GUI Setup',
        code: `# Create GUI window
root = tk.Tk()
root.title("Weather App")
root.geometry("300x200")
root.resizable(False, False)  # Disable resizing
# City input
city_entry = tk.Entry(root, font=("Arial", 14))
city_entry.pack(pady=10)
# Search button
search_button = tk.Button(root, text="Get Weather", command=get_weather)
search_button.pack()
# Result label
result_label = tk.Label(root, text="", font=("Arial", 12), wraplength=280, justify="center")
result_label.pack(pady=20)
# Run the app
root.mainloop()`,
      },
    ],
    challenges: [
      { title: 'API Error Handling', solution: 'Implemented try-except blocks to catch network errors and invalid API responses, displaying user-friendly messages via Tkinter messagebox.' },
      { title: 'Cross-Platform Compatibility', solution: 'Used Tkinter for the GUI, ensuring compatibility across Windows, macOS, and Linux.' },
      { title: 'Dynamic Weather Icons', solution: 'Mapped OpenWeatherMap API weather codes to corresponding icons for visual feedback.' },
    ],
    enhancements: [
      'Add 5-day weather forecast functionality',
      'Implement location detection using geolocation',
      'Add temperature unit toggle (Celsius/Fahrenheit)',
      'Create an executable version for easy distribution',
    ],
    technologies: ['Python', 'Tkinter', 'requests', 'OpenWeatherMap API'],
    status: 'Completed (Active Maintenance)',
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
    tagsDetailed: ['python', 'gui', 'api', 'weather'],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800">Project Not Found</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Project Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-4">{project.type}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl max-w-3xl">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <a href={project.repository} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition flex items-center">
                <i className="fab fa-github mr-2"></i> View on GitHub
              </a>
              <Link to="/projects" className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-indigo-600 transition">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">{project.overview}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
                <div className="space-y-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="feature-icon bg-indigo-100 text-indigo-600">
                        <i className={feature.icon + ' text-xl'}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {project.screenshots.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Screenshots</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index}>
                        <img src={screenshot.src} alt={screenshot.alt} className="screenshot w-full h-auto" />
                        <p className="mt-2 text-sm text-gray-500 text-center">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* File Categories */}
              {project.fileCategories && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Supported File Categories</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(project.fileCategories).map(([category, extensions], index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-lg mb-3 text-gray-900">{category}</h3>
                          <div>
                            {Array.isArray(extensions) ? (
                              extensions.map((ext, idx) => (
                                <span key={idx} className="category-badge bg-blue-100 text-blue-800">{ext}</span>
                              ))
                            ) : (
                              <p className="text-gray-600">{extensions}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Installation & Usage */}
              {project.installation && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Installation & Usage</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Prerequisites</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      {project.installation.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Running the Application</h3>
                    <div className="code-block mb-4">
                      <pre><code>{project.installation.runCommands}</code></pre>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">How to Use</h3>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                      {project.installation.usage.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Code Highlights */}
              {project.codeHighlights && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Code Highlights</h2>
                  {project.codeHighlights.map((highlight, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">{highlight.title}</h3>
                      <div className="code-block mb-6">
                        <pre><code>{highlight.code}</code></pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Status</h4>
                      <p className="mt-1 text-gray-800">{project.status}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Technologies</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-800">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Repository</h4>
                      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-1 text-indigo-600 hover:text-indigo-800 break-all">{project.repository}</a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tagsDetailed.map((tag, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 text-xs rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Challenges & Solutions</h3>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-gray-800">{challenge.title}</h4>
                          <p className="mt-1 text-sm text-gray-600">{challenge.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Future Enhancements */}
              {project.enhancements && (
                <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Future Enhancements</h3>
                    <div className="space-y-3">
                      {project.enhancements.map((enhancement, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5">
                            <i className="fas fa-plus-circle"></i>
                          </div>
                          <p className="ml-3 text-sm text-gray-600">{enhancement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;