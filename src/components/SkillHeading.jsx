import React, { useState } from "react";

const SkillHeading = ({ title, glowColor }) => {
  const [isHovering, setIsHovering] = useState(false);
  const particleCount = 8; // number of sparks
  const particles = Array.from({ length: particleCount });

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-[80vw] max-w-md h-20 flex items-center justify-center cursor-pointer"
    >
      {/* Heading Text */}
      <h2
        className="text-2xl font-bold z-10 transition-colors duration-300"
        style={{
          color: isHovering ? glowColor : "white",
          textShadow: isHovering ? `0 0 6px ${glowColor}` : "none",
        }}
      >
        {title}
      </h2>

      {/* Glowing sparks moving around rectangular path */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => {
          const delay = (i / particleCount) * 2; // staggered animation
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: glowColor,
                filter: "blur(2px)",
                animation: `sparkRect 2s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes sparkRect {
          0% { top: 0%; left: 0%; }
          25% { top: 0%; left: 100%; }
          50% { top: 100%; left: 100%; }
          75% { top: 100%; left: 0%; }
          100% { top: 0%; left: 0%; }
        }
      `}</style>
    </div>
  );
};

export default SkillHeading;
