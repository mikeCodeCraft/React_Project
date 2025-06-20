import { projects } from "../Projects";

const typingGame = {
    id: 'typing-game',
    title: 'Typing Game',
    image: '/keyboard.jpg',
    description: 'A desktop application that tests and improves your typing speed with programming terminology',
    tags: ['Python', 'Tkinter'],
    type: 'Python Project',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/typingGame.py',
    categories: ['game', 'python'],
  };
  const Projects  = {
    id: 'Python-Mini-Projects',
    title: 'Python Mini Projects',
    image: '/projects.png',
    description: 'A collection of Python mini projects, each designed to demonstrate and practice different programming concepts, libraries, and APIs. The projects include GUI applications, automation scripts, web scraping, QR code generation, and more.',
    tags: ['Python', 'Tkinter'],
    type: 'Python Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects',
    categories: ['python'],
  };
const weather  = {
    id: 'weather-checker',
    title: 'Weather Checker App',
    image: '/weather.jpg',
    description: 'A Python application that fetches and displays real-time weather data for any city worldwide',
    tags: ['Python', 'OpenWeatherMap API', 'Tkinter'],
    type: 'Python',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/api_weather.py',
    categories: ['python', 'api'],
  };
const typing_website  = {
    id: 'typing_website',
    title: 'Typing Website',
    image: '/typingsite.png',
    description: 'a web-based Typing Game which allows users to test and improve their typing speed and accuracy and track their progress. The application features user authentication, real-time typing statistics, and a visually appealing interface using Tailwind CSS and modern JavaScript.',
    tags: ['PHP', 'Laravel', 'Tkinter'],
    type: 'PHP Web Application',
    // codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/api_weather.py',
    liveLink: 'https://mikecodecraft-typing.great-site.net',
    categories: ['fullstack', 'web', 'php', "game"],
  };
const RESTful  = {
    id: 'typing_website',
    title: 'RESTful API',
    image: '/api.jpg',
    description: 'A RESTful API built with Django and Django REST Framework. It provides user management and task management functionalities, including authentication, user profile image uploads, and more. The API is designed to be the backend for a task management application.',
    tags: ['Python', 'Django', 'Django REST Framework', 'OAuth2'],
    type: 'dJango REST API',
    codeLink: 'https://github.com/mikeCodeCraft/Rest_API',
    liveLink: 'https://rest-api-ut7r.onrender.com/api/accounts/',
    categories: ['api', 'web', 'python', 'backend'],
  };
const fileOrganizer = {
    id: 'file-organizer',
    title: 'File Organizer',
    image: '/file_org.jpg',
    description: 'A desktop application that automatically organizes files into categorized folders with undo functionality',
    tags: ['Python', 'Shutil', 'Tkinter'],
    type: 'Desktop',
    codeLink: 'https://github.com/mikeCodeCraft/File-Arranger.git',
    categories: ['python', 'desktop'],
  };

const corrency = {
    id: 'Currency-Converter',
    title: 'Currency Converter',
    image: '/converter.jpg',
    description: 'A desktop application that converts between different currencies using real-time exchange rates',
    tags: ['Python', 'Tkinter'],
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/currency_converter.py',
    categories: ['python', 'desktop'],
  };

const bgremover = {
    id: 'Background-Remover',
    title: 'Background Remover',
    image: '/background.png',
    description: 'A Python desktop app to remove image backgrounds using AI-powered Rembg library.',
    tags: ['Python', 'Tkinter'],
    type: 'Python GUI Application',
    codeLink: '#',
    categories: ['python', 'desktop'],
  };

  const Keylogger  = {
    id: 'Keylogger-App',
    title: 'Keylogger App',
    image: '/keyrecorder.jpg',
    description: 'A Python-based keylogger that logs keystrokes and active window titles in real time.',
    tags: ['Python', 'Tkinter'],
    type: 'Python GUI Application',
    codeLink: '#',
    categories: ['python', 'desktop'],
  };

  const ClipboardManager  = {
    id: 'Clipboard-Manager',
    title: 'Clipboard Manager',
    image: '/clipboard.jpg',
    description: 'A PyQt5-powered clipboard manager that categorizes copied text by context (Code, URL, Email, etc.) and displays metadata like application, window, and timestamp.',
    tags: ['Python', 'Tkinter'],
    type: 'Python GUI Application',
    codeLink: '#',
    categories: ['python', 'desktop'],
  };

  const QRCodeGenerator  = {
    id: 'QR-Code-Generator',
    title: 'QR Code Generator',
    image: '/qr-code.jpg',
    description: 'A versatile QR code generator that supports multiple data types (URL, WiFi, Email, WhatsApp), customizable foreground/background colors, and logo embedding.',
    tags: ['Python', 'Tkinter'],
    type: 'Python GUI Application',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/currency_converter.py',
    categories: ['python', 'desktop'],
  };

export const projects1 = [typing_website,Projects,RESTful ,typingGame, weather, fileOrganizer, corrency, bgremover, Keylogger, ClipboardManager, QRCodeGenerator];
export default projects1;
