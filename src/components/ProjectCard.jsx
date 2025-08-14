import React, { useState } from "react";

const ProjectCard = ({ title, description, color }) => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const eWidth = 400;  // approximate size for border calc
  const eHeight = 300;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setHoverPos({ x, y });

    // Tilt effect (centered)
    const rotateX = ((y / height) - 0.5) * -25; 
    const rotateY = ((x / width) - 0.5) * 25;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovering(false);
    setHoverPos({ x: 0, y: 0 });
  };

  const getBorderStyle = () => {
    if (!hoverPos.x || !hoverPos.y) return {};
    const thickness = `3px solid ${color}`;
    const border = {};

    const edgeThreshold = 40;

    if (hoverPos.x < edgeThreshold) border.borderLeft = thickness;
    if (hoverPos.x > eWidth - edgeThreshold) border.borderRight = thickness;
    if (hoverPos.y < edgeThreshold) border.borderTop = thickness;
    if (hoverPos.y > eHeight - edgeThreshold) border.borderBottom = thickness;

    return border;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-[80vw] h-[70vh] rounded-2xl transition-all duration-150 cursor-pointer"
      style={{
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        background: isHovering
          ? `radial-gradient(circle at ${hoverPos.x}px ${hoverPos.y}px, ${color}33 0%, transparent 60%)`
          : "transparent",
        ...getBorderStyle(),
        transition: "transform 0.15s ease-out, border-color 0.2s ease",
      }}
    >
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold mb-3">{title}</h2>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
