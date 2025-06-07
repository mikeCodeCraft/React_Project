const currencyConverter = {
  id: 'Currency-Converter',
  title: 'Currency Converter',
  image: '/images/currency_converter.jpg',
  description: 'A desktop application that converts between different currencies using real-time exchange rates',
  type: 'Python GUI Application',
  codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/currency_converter.py',
  overview:
    'The Currency Converter is a Python application built with Tkinter that allows users to convert between different currencies using real-time exchange rates from the CurrencyLayer API. This project was developed to provide an easy-to-use tool for travelers, international business professionals, and anyone needing quick currency conversions.',
  features: [
    {
      title: 'Real-time Exchange Rates',
      description: 'Uses Currency API to fetch the latest exchange rates for accurate conversions.',
      icon: 'fas fa-exchange-alt',
    },
    {
      title: '15 Supported Currencies',
      description: 'Includes major world currencies like USD, EUR, GBP, NGN, JPY, and more.',
      icon: 'fas fa-globe',
    },
    {
      title: 'Input Validation',
      description: 'Validates user input to ensure only numerical amounts are processed.',
      icon: 'fas fa-check-circle',
    },
    {
      title: 'Error Handling',
      description: 'Gracefully handles API errors and displays user-friendly messages.',
      icon: 'fas fa-bug',
    },
  ],
  screenshots: [
    {
      src: '/currency1.png',
      alt: 'Currency Converter Main Interface',
      caption: 'Main interface with currency selection',
    },
    {
      src: '/currency2.png',
      alt: 'Conversion Result',
      caption: 'Result display after conversion',
    },
    {
      src: '/currency3.png',
      alt: 'Error Handling',
      caption: 'User-friendly error message for invalid input',
    },
  ],
  supportedCurrencies: [
    { code: 'USD', flag: '🇺🇸' },
    { code: 'NGN', flag: '🇳🇬' },
    { code: 'EUR', flag: '🇪🇺' },
    { code: 'GBP', flag: '🇬🇧' },
    { code: 'CAD', flag: '🇨🇦' },
    { code: 'AUD', flag: '🇦🇺' },
    { code: 'JPY', flag: '🇯🇷' },
    { code: 'CNY', flag: '🇨🇳' },
    { code: 'ZAR', flag: '🇿🇦' },
    { code: 'GHS', flag: '🇬🇭' },
    { code: 'KES', flag: '🇰🇪' },
    { code: 'INR', flag: '🇮🇳' },
    { code: 'BRL', flag: '🇧🇷' },
    { code: 'MXN', flag: '🇲🇽' },
    { code: 'CHF', flag: '🇨🇭' },
  ],

  installation: {
    prerequisites: [
      'Python 3.6 or higher',
      'Tkinter (usually included with Python)',
      'Requests library (pip install requests)',
      'CurrencyLayer API key (free tier available)',
    ],
    runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

# Navigate to the project directory
cd Python_Mini_Projects

# Install dependencies
pip install requests
pip install tkinter

# Run the application
python currency_converter.py`,
    usage: [
      'Enter the amount you want to convert',
      'Select the source currency from the dropdown menu',
      'Select the target currency from the dropdown menu',
      'Click "Convert" to see the result',
      'The converted amount will be displayed with proper formatting',
    ],
  },
  codeHighlights: [
    {
      title: 'important Libraries for gui and API requests',
      code: `import tkinter as tk
from tkinter import ttk
import requests
`,
    },
    {
      title: 'API Key Configuration',
      code: `API_KEY = "your_api_key_here"
# Replace with your actual CurrencyLayer API key`,
    },
    {
      title: 'Currency List',
      code: `# List of available currencies
CURRENCIES = [
    "USD", "NGN", "EUR", "GBP", "CAD", "AUD", "JPY",
    "CNY", "ZAR", "GHS", "KES", "INR", "BRL", "MXN", "CHF"
]`,
    },
    
    
    {
      title: 'API Request Function',
      code: `def convert_currency():
    amount = amount_entry.get()
    from_currency = from_currency_cb.get()
    to_currency = to_currency_cb.get()

    if not amount or not from_currency or not to_currency:
        result_label.config(text="Please fill all fields.")
        return

    try:
        amount = float(amount)
    except ValueError:
        result_label.config(text="Amount must be a number.")
        return

    mikeCodeCraft = f"http://api.currencylayer.com/convert?access_key={API_KEY}&from={from_currency}&to={to_currency}&amount={amount}"
    response = requests.get(mikeCodeCraft).json()

    if response.get("success") and response.get("result"):
        result = response["result"]
        result_label.config(text=f"{amount} {from_currency} = {result:.2f} {to_currency}")
    else:
        error_info = response.get("error", {}).get("info", "Unknown error")
        result_label.config(text=f"Error: {error_info}")`,
    },
    {
      title: 'GUI Initialization',
      code: `# Build GUI
root = tk.Tk()
root.title("Currency Converter mikeCodeCraft")
root.geometry("400x300")
root.resizable(False, False)

# Amount input
tk.Label(root, text="Amount:", font=("Arial", 12)).pack(pady=5)
amount_entry = tk.Entry(root, font=("Arial", 14))
amount_entry.pack(pady=5)

# From Currency dropdown
tk.Label(root, text="From Currency:", font=("Arial", 12)).pack(pady=5)
from_currency_cb = ttk.Combobox(root, values=CURRENCIES,font=("Arial", 12), state="readonly")
from_currency_cb.set("USD")  

# Default value
from_currency_cb.pack(pady=5)

# Convert Button
convert_btn = tk.Button(root, text="Convert", command=convert_currency, font=("Arial", 12), bg="blue", fg="white")
convert_btn.pack(pady=10)

# Result Label
result_label = tk.Label(root, text="", font=("Arial", 12), wraplength=380, justify="center")
result_label.pack(pady=10)

root.mainloop()
`,
    },
  ],
  challenges: [
    {
      title: 'API Rate Limits',
      solution: 'Implemented proper error handling for when API rate limits are exceeded, with user-friendly messages.',
    },
    {
      title: 'Input Validation',
      solution: 'Added robust validation to ensure only numerical amounts are processed, preventing API errors.',
    },
    {
      title: 'Currency Formatting',
      solution: 'Implemented proper formatting for converted amounts with 2 decimal places for clean display.',
    },
  ],
  enhancements: [
    'Add historical exchange rate data and charts',
    'Implement currency flags for better visual identification',
    'Add offline mode with cached exchange rates',
    'Create an executable version for easy distribution',
  ],
  documentation: [
    {
      title: 'README.md',
      link: '#',
      icon: 'fab fa-github',
    },
    {
      title: 'CurrencyLayer API Docs',
      link: 'https://currencylayer.com/documentation',
      icon: 'fas fa-external-link-alt',
    },
    {
      title: 'Demo Video',
      link: '#',
      icon: 'fas fa-video',
    },
  ],
  technologies: ['Python', 'Tkinter', 'Requests', 'CurrencyLayer API'],
  status: 'Completed(Active Maintenance)',
  repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
  tagsDetailed: ['python', 'gui', 'finance', 'api'],
};

export default currencyConverter;