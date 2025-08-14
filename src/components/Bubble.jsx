import React from "react";

// Bubble component
function Bubble({ name }) {
  const bubbleRef = React.useRef(null);

  React.useEffect(() => {
    const el = bubbleRef.current;
    if (!el) return;

    // Limit movement within container
    const maxX = 60; // horizontal range
    const maxY = 30; // vertical range
    let posX = Math.random() * maxX * 2 - maxX;
    let posY = Math.random() * maxY * 2 - maxY;
    let velX = (Math.random() - 0.5) * 0.3;
    let velY = (Math.random() - 0.5) * 0.3;

    const animate = () => {
      posX += velX;
      posY += velY;

      if (posX > maxX || posX < -maxX) velX *= -1;
      if (posY > maxY || posY < -maxY) velY *= -1;

      el.style.transform = `translate(${posX}px, ${posY}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="bg-teal-500/40 text-white flex items-center justify-center
                 w-20 h-20 rounded-full m-2 cursor-pointer
                 transition-all duration-300 hover:bg-teal-500/80 hover:shadow-lg hover:scale-110"
    >
      {name}
    </div>
  );
}

export default Bubble;
