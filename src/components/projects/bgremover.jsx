const backgroundRemover = {
  id: 'Background-Remover',
  title: 'Background Remover',
  image: '/images/background_remover.jpg',
  description: 'A Python desktop app to remove image backgrounds using AI-powered Rembg library.',
  type: 'Python GUI Application',
  codeLink: '#',
  overview:
    'This Background Remover app is built using Python’s Tkinter for the GUI and Rembg for background removal. It supports both individual images and batch processing of folders. It is a simple tool to quickly strip image backgrounds using AI models with drag-and-drop support.',
  features: [
    {
      title: 'AI-Powered Background Removal',
      description: 'Uses Rembg (U-2-Net model) to automatically remove image backgrounds.',
      icon: 'fas fa-magic',
    },
    {
      title: 'Batch Processing',
      description: 'Handles both single image files and folders full of images in one go.',
      icon: 'fas fa-folder-open',
    },
    {
      title: 'Drag-and-Drop Support',
      description: 'Supports drag-and-drop for convenient file selection (via tkinterdnd2).',
      icon: 'fas fa-mouse-pointer',
    },
    {
      title: 'Image Format Support',
      description: 'Works with .png, .jpg, and .jpeg file formats.',
      icon: 'fas fa-image',
    },
  ],
  screenshots: [
    {
      src: '/bgremover1.png',
      alt: 'Background Remover Main Interface',
      caption: 'Simple UI with file/folder selection and drag-and-drop support',
    },
    {
      src: '/bgremover2.png',
      alt: 'Processed Output',
      caption: 'Output image with transparent background saved automatically',
    },
  ],
  supportedFormats: ['.png', '.jpg', '.jpeg'],
  installation: {
    prerequisites: [
      'Python 3.6 or higher',
      'Tkinter (comes with Python)',
      'Pillow (pip install pillow)',
      'rembg (pip install rembg)',
      'tkinterdnd2 for drag-and-drop (optional, pip install tkinterdnd2)',
    ],
    runCommands: `# Clone the repository
git clone https://github.com/mikeCodeCraft/Python_Mini_Projects.git

# Navigate to the project directory
cd Python_Mini_Projects

# Install dependencies
pip install pillow rembg
pip install tkinterdnd2  # Optional, for drag-and-drop support

# Run the application
python background_remover.py`,
    usage: [
      'Click "Choose Image" to select a single file',
      'Click "Choose Folder" to process multiple images in a folder',
      'Or drag-and-drop images/folders into the app window',
      'Images will be saved with "_no_bg" appended to the filename',
    ],
  },
  codeHighlights: [
    {
      title: 'Library Imports',
      code: `import os
import tkinter as tk
from tkinter import filedialog, messagebox
from rembg import remove
from PIL import Image`,
    },
    {
      title: 'Image Processing Logic',
      code: `def process_image(input_file, output_file):
    image = Image.open(input_file)
    result = remove(image)
    result.save(output_file)
    result.show()`,
    },
    {
      title: 'Handling File or Folder Input',
      code: `def handle_input(path):
    if os.path.isdir(path):
        files = [f for f in os.listdir(path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
        ...
    elif os.path.isfile(path):
        ...
    else:
        messagebox.showwarning("Invalid Input", "Please drop a valid file or folder.")`,
    },
    {
      title: 'Drag-and-Drop Integration',
      code: `from tkinterdnd2 import DND_FILES, TkinterDnD
root = TkinterDnD.Tk()
...
label.drop_target_register(DND_FILES)
label.dnd_bind('<<Drop>>', on_drop)`,
    },
  ],
  challenges: [
    {
      title: 'Large Image Files',
      solution: 'Used PIL for efficient image handling and limited output to common formats.',
    },
    {
      title: 'Drag-and-Drop Compatibility',
      solution: 'Implemented tkinterdnd2 with fallback to traditional file dialogs.',
    },
    {
      title: 'Error Handling',
      solution: 'Used messagebox warnings and input checks to guide users.',
    },
  ],
  enhancements: [
    'Add support for other image formats like .webp',
    'Include a preview of the removed background before saving',
    'Add a dark mode theme',
    'Enable image resizing before processing',
  ],
  documentation: [
    {
      title: 'README.md',
      link: '#',
      icon: 'fab fa-github',
    },
    {
      title: 'rembg Docs',
      link: 'https://github.com/danielgatis/rembg',
      icon: 'fas fa-external-link-alt',
    },
    {
      title: 'Demo Video',
      link: '#',
      icon: 'fas fa-video',
    },
  ],
  technologies: ['Python', 'Tkinter', 'Rembg', 'Pillow', 'tkinterdnd2'],
  status: 'Completed',
  repository: 'https://github.com/mikeCodeCraft/Python_Mini_Projects.git',
  tagsDetailed: ['python', 'gui', 'image-processing', 'ai'],
};

export default backgroundRemover;
