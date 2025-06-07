// @ts-ignore
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SyntaxHighlighter from "react-syntax-highlighter";


import { FaCopy, FaCheck } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

import fileOrganizer from './projects/fileOrganizer';
import weatherChecker from './projects/Weatherchecker';
import typingGame from './projects/typingGame';
import currencyConverter from './projects/currency';

const projects = [
  fileOrganizer,
  weatherChecker,
  typingGame,
  currencyConverter,
];

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800">Something went wrong</h2>
            <p className="mt-4 text-gray-600">Please try again later or contact support.</p>
            <Link
              to="/projects"
              className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }).catch((err) => console.error('Failed to copy:', err));
  };

  if (!project) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800">Project Not Found</h2>
          <Link
            to="/projects"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{project?.title || "Project"} | mikeCodeCraft</title>
<meta name="description" content={project?.description || ""} />
<meta name="keywords" content={project?.tagsDetailed?.join(', ') || ""} />
      </Helmet>

      {/* Project Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-4">
                {project.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl max-w-3xl">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.repository || project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition flex items-center"
                aria-label={`View ${project.title} on GitHub`}
              >
                <i className="fab fa-github mr-2"></i> View on GitHub
              </a>
              <Link
                to="/projects"
                className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-indigo-600 transition"
              >
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
                <div className="prose max-w-none text-gray-700">
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

              {/* Game Preview (Typing Speed Game) */}
              {project.gamePreview && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Game Preview</h2>
                  <div className="game-preview bg-gradient-to-br from-gray-100 to-blue-100 rounded-lg p-6 shadow-lg">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.gamePreview.title}</h3>
                      <p className="text-gray-600">{project.gamePreview.description}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-inner">
                      <div className="text-center mb-4">
                        <p className="text-red-500 font-medium">Time: {project.gamePreview.mockup.time}</p>
                      </div>
                      <div className="text-center mb-6">
                        <p className="text-blue-600 text-2xl font-bold">{project.gamePreview.mockup.sampleWord}</p>
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Type the word here..."
                          disabled
                        />
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-green-500 font-medium">{project.gamePreview.mockup.feedback}</p>
                      </div>
                      <div className="text-center">
                        <button
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg opacity-50 cursor-not-allowed"
                          disabled
                        >
                          {project.gamePreview.mockup.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Weather Preview (Weather Checker) */}
              {project.weatherPreview && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Weather Preview</h2>
                  <div className="weather-preview bg-gradient-to-br from-gray-100 to-blue-100 rounded-lg p-6 shadow-lg">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.weatherPreview.title}</h3>
                      <p className="text-gray-600">{project.weatherPreview.description}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-inner">
                      <div className="mb-6">
                        <label htmlFor="city" className="block text-gray-800 font-medium mb-2">
                          City:
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={project.weatherPreview.mockup.city}
                          disabled
                        />
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-blue-600 font-medium">
                          Temperature: {project.weatherPreview.mockup.temperature}
                        </p>
                        <p className="text-gray-600">Condition: {project.weatherPreview.mockup.condition}</p>
                        <p className="text-gray-600">Humidity: {project.weatherPreview.mockup.humidity}</p>
                        <p className="text-gray-600">Wind Speed: {project.weatherPreview.mockup.windSpeed}</p>
                      </div>
                      <div className="text-center">
                        <button
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg opacity-50 cursor-not-allowed"
                          disabled
                        >
                          Get Weather
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Converter Preview (Currency Converter) */}
              {/* {project.converterPreview && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Converter Preview</h2>
                  <div className="converter-preview bg-gradient-to-br from-gray-100 to-blue-100 rounded-lg p-6 shadow-lg">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.converterPreview.title}</h3>
                      <p className="text-gray-600">{project.converterPreview.description}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-inner">
                      <div className="mb-6">
                        <label htmlFor="amount" className="block text-gray-800 font-medium mb-2">
                          Amount:
                        </label>
                        <input
                          type="text"
                          id="amount"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={project.converterPreview.mockup.amount}
                          disabled
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="from-currency" className="block text-gray-800 font-medium mb-2">
                          From Currency:
                        </label>
                        <select
                          id="from-currency"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={project.converterPreview.mockup.fromCurrency}
                          disabled
                        >
                          {project.supportedCurrencies?.map((currency, index) => (
                            <option key={index} value={currency.code}>
                              {currency.flag} {currency.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="to-currency" className="block text-gray-800 font-medium mb-2">
                          To Currency:
                        </label>
                        <select
                          id="to-currency"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue={project.converterPreview.mockup.toCurrency}
                          disabled
                        >
                          {project.supportedCurrencies?.map((currency, index) => (
                            <option key={index} value={currency.code}>
                              {currency.flag} {currency.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-green-600 font-medium">{project.converterPreview.mockup.result}</p>
                      </div>
                      <div className="text-center">
                        <button
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg opacity-50 cursor-not-allowed"
                          disabled
                        >
                          Convert
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Screenshots */}
              {project.screenshots?.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Screenshots</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index}>
                        <LazyLoadImage
                          src={screenshot.src}
                          alt={screenshot.alt}
                          effect="blur"
                          className="screenshot w-full h-auto"
                        />
                        <p className="mt-2 text-sm text-gray-500 text-center">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supported Currencies (Currency Converter) */}
              {project.supportedCurrencies && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Supported Currencies</h2>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {project.supportedCurrencies.map((currency, index) => (
                        <span
                          key={index}
                          className="flex items-center space-x-2 category-badge bg-blue-100 text-blue-800"
                        >
                          <span className="currency-flag">{currency.flag}</span>
                          <span>{currency.code}</span>
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-600">
                      The application supports 15 major world currencies with accurate, up-to-date conversions.
                    </p>
                  </div>
                </div>
              )}

              {/* File Categories (File Organizer) */}
              {project.fileCategories && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">{project.title} Supported Files</h2>
                  <div className="bg-gray-100 p-6 rounded-lg">
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
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Prerequisites</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      {project.installation.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Running the Application</h3>
                    <div className="code-block mb-4 relative">
                      <SyntaxHighlighter language="bash">
                        {project.installation.runCommands}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => handleCopyToClipboard(project.installation.runCommands, 'install')}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === 'install' ? <FaCheck className="text-green-500" /> : <FaCopy />}
                      </button>
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
                      <div className="code-block mb-6 relative">
                        <SyntaxHighlighter language="python" >
                          {highlight.code}
                        </SyntaxHighlighter>
                        <button
                          onClick={() => handleCopyToClipboard(highlight.code, index)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-white"
                          title="Copy to clipboard"
                        >
                          {copiedIndex === index ? <FaCheck className="text-green-500" /> : <FaCopy />}
                        </button>
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
                          <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Repository</h4>
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-indigo-600 hover:text-indigo-800 break-all"
                      >
                        {project.repository}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tagsDetailed.map((tag, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 text-xs rounded">
                        {tag}
                      </span>
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
                            <i className="fas fa-plus"></i>
                          </div>
                          <p className="ml-2 text-sm text-gray-600">{enhancement}</p>
                        </div>
                      ))}
                    </div>
                 
                    </div>
                  </div>
                )}

              {/* Documentation (Currency Converter) */}
              {project.documentation && (
                <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Documentation</h3>
                    <div className="space-y-3">
                      {project.documentation.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 hover:text-indigo-800"
                          aria-label={`View ${doc.title}`}
                        >
                          <i className={doc.icon + ' mr-2'}></i>
                          {doc.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ProjectDetail;