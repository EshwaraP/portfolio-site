import React, { useState } from 'react';
import { ExternalLink, Folder, FolderOpen } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface FolderProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  delay?: number;
}

const FolderProject: React.FC<FolderProjectProps> = ({
  title,
  description,
  technologies,
  link = "#",
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(link, '_blank')}
    >
      {/* Folder Container */}
      <div className="relative">
        {/* Folder Tab */}
        <div className={`absolute -top-2 left-4 w-16 h-6 rounded-t-lg border-2 border-opacity-40 z-10 ${
          isDark 
            ? 'bg-black-70 border-custom-accent' 
            : 'bg-gray-100 border-light-accent'
        }`}>
          <div className="flex items-center justify-center h-full">
            <div className={`w-2 h-2 rounded-full opacity-60 ${
              isDark ? 'bg-custom-accent' : 'bg-light-accent'
            }`}></div>
          </div>
        </div>
        
        {/* Main Folder Body */}
        <div className={`
          relative w-full h-48 rounded-lg border-2 transition-all duration-300 overflow-hidden
          ${isDark ? 'bg-black-70' : 'bg-white'}
          ${isHovered 
            ? `${isDark ? 'border-custom-accent shadow-lg shadow-custom-accent/30' : 'border-light-accent shadow-lg shadow-light-accent/20'} -translate-y-2` 
            : `${isDark ? 'border-custom-accent border-opacity-40' : 'border-light-accent border-opacity-40'}`
          }
        `}>
          {/* Folder Icon */}
          <div className="absolute top-4 right-4 transition-transform duration-300">
            {isHovered ? (
              <FolderOpen className={`w-8 h-8 ${
                isDark ? 'text-custom-accent' : 'text-light-accent'
              }`} />
            ) : (
              <Folder className={`w-8 h-8 opacity-60 ${
                isDark ? 'text-custom-accent' : 'text-light-accent'
              }`} />
            )}
          </div>
          
          {/* Content */}
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className={`text-xl font-semibold mb-3 font-mono ${
                isDark ? 'text-custom-accent' : 'text-light-accent'
              }`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>
                {description}
              </p>
            </div>
            
            {/* Technologies */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 bg-opacity-20 text-xs rounded font-mono ${
                      isDark 
                        ? 'bg-custom-accent text-custom-accent' 
                        : 'bg-light-accent text-light-accent'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono opacity-60 ${
                  isDark ? 'text-gray-500' : 'text-light-text-secondary'
                }`}>
                  {technologies.length} files
                </span>
                <div className={`
                  flex items-center text-sm font-medium transition-all duration-300
                  ${isDark ? 'text-custom-accent' : 'text-light-accent'}
                  ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}
                `}>
                  <span className="mr-2">Open</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Folder Lines */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${
            isDark ? 'text-custom-accent' : 'text-light-accent'
          }`}></div>
        </div>
        
        {/* Drop Shadow */}
        <div className={`
          absolute top-2 left-2 w-full h-full rounded-lg -z-10 transition-all duration-300
          ${isDark ? 'bg-neutral-900' : 'bg-gray-300'}
          ${isHovered ? 'transform translate-y-1 opacity-40' : 'opacity-20'}
        `}></div>
      </div>
    </div>
  );
};

export default FolderProject; 