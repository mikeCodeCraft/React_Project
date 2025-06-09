const qrGeneratorApp = {
  id: 'QR-Code-Generator',
  title: 'QR Code Generator with Logo & Custom Colors',
  image: '/images/qr_generator_gui.jpg',
  description:
    'A versatile QR code generator that supports multiple data types (URL, WiFi, Email, WhatsApp), customizable foreground/background colors, and logo embedding.',
  type: 'Python GUI (Tkinter)',
  codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/qr_generator_gui.py',
  overview:
    'This GUI tool lets users generate QR codes for various purposes, choose foreground and background colors, embed logos, and export high-resolution PNG files. It’s useful for developers, businesses, or events requiring personalized QR code generation.',
  features: [
    {
      title: 'Multiple QR Formats',
      description: 'Supports URL/Text, WiFi login, Email addresses, and WhatsApp links.',
      icon: 'fas fa-qrcode',
    },
    {
      title: 'Logo Embedding',
      description: 'Allows users to embed a center logo in the generated QR code.',
      icon: 'fas fa-image',
    },
    {
      title: 'Color Customization',
      description: 'Choose foreground and background colors for branding or contrast.',
      icon: 'fas fa-palette',
    },
    {
      title: 'High-Resolution Export',
      description: 'Saves generated QR codes as high-quality PNG images.',
      icon: 'fas fa-save',
    },
    {
      title: 'Simple GUI',
      description: 'User-friendly interface built with Tkinter for ease of use.',
      icon: 'fas fa-window-maximize',
    },
  ],
  screenshots: [
    {
      src: '/qr_generator_main.png',
      alt: 'QR Generator GUI',
      caption: 'Main interface showing data input, color selection, and logo upload',
    },
    {
      src: '/qr_with_logo_preview.png',
      alt: 'QR with Logo',
      caption: 'QR code generated with embedded logo and custom colors',
    },
  ],
  installation: {
    prerequisites: [
      'Python 3.6+',
      'qrcode (pip install qrcode[pil])',
      'Pillow (pip install pillow)',
    ],
    runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

# Navigate to project directory
cd Python_Mini_Projects

# Install required packages
pip install qrcode[pil] pillow

# Run the generator
python qr_generator_gui.py`,
    usage: [
      'Launch the app.',
      'Choose QR type (e.g., URL, WiFi, Email).',
      'Enter the relevant data.',
      'Optionally select logo and colors.',
      'Click "Generate QR Code" and then "Save QR Code".',
    ],
  },
  codeHighlights: [
    {
      title: 'WiFi QR Format Handling',
      code: `if data_type == "WiFi Login":
    ssid, password = user_data.split(",", 1)
    qr_data = f"WIFI:T:WPA;S:{ssid};P:{password};;"`,
    },
    {
      title: 'Color Picker Integration',
      code: `color = colorchooser.askcolor()[1]
if color:
    fg_color_var.set(color)`,
    },
    {
      title: 'Embedding Logo in Center',
      code: `logo = Image.open(logo_path)
logo = logo.resize((60, 60), Image.LANCZOS)
qr_img.paste(logo, pos, mask=logo if logo.mode == 'RGBA' else None)`,
    },
  ],
  challenges: [
    {
      title: 'Maintaining QR Readability with Logos',
      solution: 'Used high error correction level (ERROR_CORRECT_H) to preserve scannability.',
    },
    {
      title: 'Handling Incorrect User Input',
      solution: 'Added exception handling and user-friendly error messages.',
    },
  ],
  enhancements: [
    'Add QR preview zoom and drag support',
    'Allow SVG export',
    'Support vCard and SMS formats',
    'Dark mode theme for the GUI',
  ],
  documentation: [
    {
      title: 'qrcode library',
      link: 'https://github.com/lincolnloop/python-qrcode',
      icon: 'fas fa-book',
    },
    {
      title: 'Pillow Image Library',
      link: 'https://pillow.readthedocs.io/en/stable/',
      icon: 'fas fa-image',
    },
  ],
  technologies: ['Python', 'Tkinter', 'qrcode', 'Pillow'],
  status: 'Completed',
  repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects',
  tagsDetailed: ['qr code', 'tkinter', 'python gui', 'logo embedding', 'color customization'],
};

export default qrGeneratorApp;
