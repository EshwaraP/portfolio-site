import React, { useEffect, useRef } from 'react';

interface DotGridProps {
  className?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
  color?: string;
}

const DotGrid: React.FC<DotGridProps> = ({
  className = '',
  dotSize = 1,
  spacing = 30,
  opacity = 0.15,
  color = '#50C9CE'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createDots = () => {
      const rect = container.getBoundingClientRect();
      const cols = Math.ceil(rect.width / spacing);
      const rows = Math.ceil(rect.height / spacing);
      
      // Clear existing dots
      container.innerHTML = '';
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const dot = document.createElement('div');
          dot.className = 'absolute rounded-full animate-pulse';
          dot.style.width = `${dotSize * 2}px`;
          dot.style.height = `${dotSize * 2}px`;
          dot.style.backgroundColor = color;
          dot.style.left = `${j * spacing}px`;
          dot.style.top = `${i * spacing}px`;
          dot.style.opacity = '0';
          dot.style.animationDelay = `${(i + j) * 0.1}s`;
          dot.style.animationDuration = '3s';
          dot.style.animationIterationCount = 'infinite';
          
          // Add custom animation keyframes
          dot.style.animation = `dotPulse 3s ease-in-out infinite ${(i + j) * 0.1}s`;
          
          container.appendChild(dot);
        }
      }
    };

    // Add CSS keyframes for the animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dotPulse {
        0%, 100% { 
          opacity: ${opacity * 0.3}; 
          transform: scale(1); 
        }
        25% { 
          opacity: ${opacity}; 
          transform: scale(1.2); 
        }
        50% { 
          opacity: ${opacity * 0.7}; 
          transform: scale(0.8); 
        }
        75% { 
          opacity: ${opacity}; 
          transform: scale(1.1); 
        }
      }
      
      @keyframes dotWave {
        0%, 100% { 
          opacity: ${opacity * 0.2}; 
          transform: translateY(0px) scale(1); 
        }
        50% { 
          opacity: ${opacity}; 
          transform: translateY(-2px) scale(1.3); 
        }
      }
    `;
    document.head.appendChild(style);
    
    createDots();
    
    const handleResize = () => createDots();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
    };
  }, [spacing, dotSize, color, opacity]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  );
};

export default DotGrid; 