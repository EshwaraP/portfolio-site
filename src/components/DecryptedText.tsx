import React, { useState, useEffect } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDecrypting(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isDecrypting) return;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // Show random characters for positions not yet revealed
        let newText = text.substring(0, currentIndex + 1);
        
        // Add random characters for remaining positions
        for (let i = currentIndex + 1; i < text.length; i++) {
          if (text[i] === ' ') {
            newText += ' ';
          } else {
            newText += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        setDisplayText(newText);
        setCurrentIndex(prev => prev + 1);
      } else {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, duration / text.length);

    return () => clearInterval(interval);
  }, [isDecrypting, currentIndex, text, duration, chars]);

  // Initial scrambled text
  useEffect(() => {
    if (!isDecrypting) {
      const scrambled = text
        .split('')
        .map(char => char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)])
        .join('');
      setDisplayText(scrambled);
    }
  }, [text, chars, isDecrypting]);

  return (
    <span className={`font-mono tracking-wider ${className}`}>
      {displayText}
    </span>
  );
};

export default DecryptedText; 