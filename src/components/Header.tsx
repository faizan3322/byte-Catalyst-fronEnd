import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-cyan-800/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            
            <a href="#projects" className="text-white-600 text-lg font-bold hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#skills" className="text-white-600 text-lg font-bold hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#contact" className="text-white-600 text-lg font-bold hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-cyan-600">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-cyan-600">
              <Linkedin size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}