import React, { useEffect, useRef } from 'react';

interface LetterGlitchProps {
  className?: string;
  spacing?: number;
  opacity?: number;
  color?: string;
  fontSize?: number;
}

const LetterGlitch: React.FC<LetterGlitchProps> = ({
  className = '',
  spacing = 45,
  opacity = 0.25,
  color = '#50C9CE',
  fontSize = 16
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Characters to randomly display
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createGlitchLetters = () => {
      const rect = container.getBoundingClientRect();
      
      // Ensure we have dimensions
      if (rect.width === 0 || rect.height === 0) {
        setTimeout(createGlitchLetters, 100);
        return;
      }
      
      const cols = Math.ceil(rect.width / spacing);
      const rows = Math.ceil(rect.height / spacing);
      
      // Clear existing letters
      container.innerHTML = '';
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          // Increase character density for more visibility
          if (Math.random() > 0.5) {
            const letter = document.createElement('div');
            letter.className = 'absolute font-mono select-none';
            letter.textContent = chars[Math.floor(Math.random() * chars.length)];
            letter.style.fontSize = `${fontSize}px`;
            letter.style.color = color;
            letter.style.left = `${j * spacing + Math.random() * 20 - 10}px`;
            letter.style.top = `${i * spacing + Math.random() * 20 - 10}px`;
            letter.style.opacity = '0';
            letter.style.pointerEvents = 'none';
            
            // Random animation delay for each letter
            const delay = Math.random() * 3;
            letter.style.animation = `letterGlitch 2.5s ease-in-out infinite ${delay}s`;
            
            container.appendChild(letter);
          }
        }
      }
    };

    // Add CSS keyframes for the glitch animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes letterGlitch {
        0%, 85%, 100% { 
          opacity: 0; 
          transform: scale(1);
        }
        10%, 25% { 
          opacity: ${opacity * 0.7}; 
          transform: scale(1);
        }
        15%, 20% { 
          opacity: ${opacity}; 
          transform: scale(1);
        }
        30%, 55% { 
          opacity: ${opacity * 0.8}; 
          transform: scale(1);
        }
        40%, 65% { 
          opacity: ${opacity}; 
          transform: scale(1);
        }
        70%, 80% { 
          opacity: ${opacity * 0.6}; 
          transform: scale(1);
        }
      }
      
      @keyframes letterFlicker {
        0%, 100% { opacity: ${opacity * 0.2}; }
        50% { opacity: ${opacity}; }
      }
    `;
    document.head.appendChild(style);
    
    // Add small delay to ensure container is ready
    setTimeout(createGlitchLetters, 100);
    
    // Periodically update letters for continuous glitch effect
    const updateInterval = setInterval(() => {
      const letters = container.children;
      for (let i = 0; i < letters.length; i++) {
        if (Math.random() > 0.6) {
          const letter = letters[i] as HTMLElement;
          letter.textContent = chars[Math.floor(Math.random() * chars.length)];
        }
      }
    }, 1200);
    
    const handleResize = () => createGlitchLetters();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(updateInterval);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [spacing, fontSize, color, opacity, chars]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  );
};

export default LetterGlitch; 