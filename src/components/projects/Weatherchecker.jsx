const weatherChecker =  {
    id: 'weather-checker',
    title: 'Weather Checker App',
    image: '/weather.jpg', 
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
      { src: '/weather1.png', alt: 'Weather App Main Interface', caption: 'Main interface showing City input field and search button' }, // Add if available
      { src: '/weather2.png', alt: 'City Input', caption: 'Result of the weather condition of your city' },
    ],
    installation: {
      prerequisites: ['Python 3.6 or higher', 'Tkinter (usually included with Python)', 'requests library (pip install requests)', 'OpenWeatherMap API key (free tier available)'],
      runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

cd Python_Mini_Projects

# Install dependencies
pip install requests
pip install tk

# Run the application (replace YOUR_API_KEY with actual key)
python api_weather.py`,
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
                text=f"Temperature in {city.title()}: {temp}°C"
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
      documentation: [
    {
      title: 'README.md',
      link: 'https://github.com/mikeCodeCraft/currency-converter/blob/main/README.md',
      icon: 'fab fa-github',
    },
    {
      title: 'CurrencyLayer API Quide',
      link: 'https://openweathermap.org/guide',
      icon: 'fas fa-external-link-alt',
    },
    {
      title: 'Demo Video',
      link: '#',
      icon: 'fas fa-video',
    },
  ],
    technologies: ['Python', 'Tkinter', 'requests', 'OpenWeatherMap API'],
    status: 'Completed (Active Maintenance)',
    repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
    tagsDetailed: ['python', 'gui', 'api', 'weather'],
  };

  export default weatherChecker;