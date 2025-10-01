'use client';

import { useEffect, useRef } from 'react';

interface TerminalEffectsProps {
  children: React.ReactNode;
  className?: string;
  enableScanlines?: boolean;
  enableFlicker?: boolean;
  enableGlow?: boolean;
}

export default function TerminalEffects({ 
  children, 
  className = '', 
  enableScanlines = true, 
  enableFlicker = true,
  enableGlow = true 
}: TerminalEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Add subtle flicker effect
    if (enableFlicker) {
      const flickerInterval = setInterval(() => {
        if (Math.random() < 0.02) { // 2% chance per interval
          container.style.opacity = '0.95';
          setTimeout(() => {
            container.style.opacity = '1';
          }, 50);
        }
      }, 100);

      return () => clearInterval(flickerInterval);
    }
  }, [enableFlicker]);

  const terminalStyles = {
    position: 'relative' as const,
    ...(enableGlow && {
      textShadow: '0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981',
    }),
  };

  return (
    <div 
      ref={containerRef}
      className={`terminal-effects ${className}`}
      style={terminalStyles}
    >
      {children}
      
      {/* Scanlines overlay */}
      {enableScanlines && (
        <div 
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(16, 185, 129, 0.03) 2px,
              rgba(16, 185, 129, 0.03) 4px
            )`,
            animation: 'scanlines 0.1s linear infinite',
          }}
        />
      )}
      
      {/* Terminal glow effect */}
      {enableGlow && (
        <div 
          className="pointer-events-none absolute inset-0 z-5"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            animation: 'terminalGlow 3s ease-in-out infinite alternate',
          }}
        />
      )}

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes terminalGlow {
          0% { opacity: 0.5; }
          100% { opacity: 0.8; }
        }
        
        .terminal-effects {
          transition: opacity 0.05s ease;
        }
      `}</style>
    </div>
  );
}