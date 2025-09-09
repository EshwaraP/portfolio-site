import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, onClick, href, isActive = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div
      ref={itemRef}
      className={`
        relative group cursor-pointer transition-all duration-200 ease-out
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Icon Container */}
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
        ${isDark 
          ? 'bg-black bg-opacity-40 border border-white/20' 
          : 'bg-white bg-opacity-90 border border-gray-300'
        }
        ${isHovered ? (isDark ? 'bg-opacity-60' : 'bg-opacity-100 shadow-md') : ''}
      `}>
        <div className={`
          transition-colors duration-200
          ${isActive 
            ? (isDark ? 'text-custom-accent' : 'text-light-accent')
            : (isDark ? 'text-custom-accent-light' : 'text-light-text-secondary')
          }
          ${isHovered 
            ? (isDark ? 'text-custom-accent' : 'text-light-accent')
            : ''
          }
        `}>
          {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
        </div>
      </div>
    </div>
  );
};

interface DockProps {
  className?: string;
  onThemeChange?: (theme: 'light' | 'dark' | 'auto') => void;
  currentTheme?: 'light' | 'dark' | 'auto';
}

const Dock: React.FC<DockProps> = ({ 
  className = '', 
  onThemeChange,
  currentTheme = 'dark'
}) => {
  const { isDark } = useTheme();

  const dockItems = [
    {
      icon: <Github />,
      label: 'GitHub',
      href: 'https://github.com/EshwaraP'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/eshwara-p-085449197/'
    },
    {
      icon: <Mail />,
      label: 'Email',
      href: 'mailto:eshwarap25@gmail.com'
    },
    {
      icon: isDark ? <Moon /> : <Sun />,
      label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      onClick: () => {
        onThemeChange?.(isDark ? 'light' : 'dark');
      },
      isActive: true
    }
  ];

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      {/* Dock Container */}
      <div className={`
        rounded-xl px-3 py-2 backdrop-blur-sm
        ${isDark 
          ? 'bg-black bg-opacity-30 border border-white/30' 
          : 'bg-white bg-opacity-90 border border-gray-300 shadow-xl'
        }
      `}>
        {/* Items Container */}
        <div className="flex items-center space-x-1">
          {dockItems.map((item, index) => (
            <DockItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
              href={item.href}
              isActive={item.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dock; 