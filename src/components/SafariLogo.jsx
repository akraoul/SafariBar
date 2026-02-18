import React from 'react';

const SafariLogo = () => {
  return (
    <div className="relative">
      {/* Main logo container with neon effects - responsive size */}
      <div 
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-500"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,215,0,0.4) 0%, rgba(255,0,85,0.3) 40%, rgba(0,240,255,0.2) 70%, transparent 100%)',
          border: '1.5px sm:2px solid #FF0055',
          boxShadow: '0 0 12px #FF0055, 0 0 24px rgba(255,0,85,0.5), 0 0 36px rgba(255,215,0,0.3), inset 0 0 12px rgba(255,215,0,0.2)'
        }}
      >
        {/* Original logo with advanced color filters - responsive size */}
        <img 
          src="/safari_bar_logo.png" 
          alt="Safari Bar Logo" 
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain relative z-10"
          style={{
            filter: `
              sepia(0.8) 
              hue-rotate(300deg) 
              saturate(2.5) 
              brightness(1.4) 
              contrast(1.3)
              drop-shadow(0 0 4px rgba(255,215,0,0.8))
              drop-shadow(0 0 8px rgba(255,0,85,0.6))
            `,
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Inner glow overlay */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(255,215,0,0.3) 0%, transparent 50%)',
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      
      {/* Multi-layered neon glow effects - adjusted for responsive size */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-pink/50 via-yellow/40 to-neon-cyan/50 blur-lg sm:blur-xl animate-pulse"></div>
      </div>
      
      {/* Secondary ambient glow */}
      <div className="absolute -inset-1 sm:-inset-2 pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-pink/30 via-neon-cyan/30 blur-xl sm:blur-2xl"></div>
      </div>
      
      {/* Outer atmospheric glow */}
      <div className="absolute -inset-2 sm:-inset-4 pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow/20 to-pink/20 blur-2xl sm:blur-3xl opacity-60"></div>
      </div>
      
      {/* Animated sparkle effect - responsive */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default SafariLogo;
