import { useEffect, useRef } from "react";
import anime from "animejs";
import * as THREE from "three";

export default function Hero() {
  const textRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    // Typing animation with anime.js
    const textLines = ["Hi, I'm Ashutosh 👋", "I build AI-powered Web Apps"];
    let lineIndex = 0;
    let animationInstance = null;

    function typeLine() {
      if (!textRef.current) return;

      const line = textLines[lineIndex];
      let charIndex = 0;

      animationInstance = anime({
        targets: { charIndex: 0 },
        charIndex: line.length,
        duration: line.length * 100,
        easing: "linear",
        update: (anim) => {
          charIndex = Math.floor(anim.animations[0].currentValue);
          if (textRef.current) {
            textRef.current.textContent = line.substring(0, charIndex);
          }
        },
        complete: () => {
          setTimeout(() => {
            lineIndex = (lineIndex + 1) % textLines.length;
            typeLine();
          }, 1500);
        },
      });
    }

    typeLine();

    // Three.js floating wireframe shape setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      threeRef.current.clientWidth / threeRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(threeRef.current.clientWidth, threeRef.current.clientHeight);
    threeRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      opacity: 0.7,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.007;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      if (animationInstance) animationInstance.pause();
      renderer.dispose();
      if (threeRef.current) {
        while (threeRef.current.firstChild) {
          threeRef.current.removeChild(threeRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 bg-black text-white"
    >
      <div className="flex flex-col items-start max-w-xl">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold min-h-[4rem]"
          style={{ whiteSpace: "pre" }}
        >
          {/* Typing animation text appears here */}
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Building modern AI-powered web apps with passion and precision.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-cyan-500 rounded-full text-black font-semibold hover:bg-cyan-400 transition cursor-pointer"
          onClick={() => window.open("https://drive.google.com/file/d/1-qAn_eirFYzVc2zg7cG6RTiZ3zlcWZji/view?usp=sharing", "_blank")}
        >
          View Resume
        </button>
      </div>
      <div
        ref={threeRef}
        className="w-64 h-64 md:w-90 md:h-90"
        aria-label="3D floating shape"
      />
    </section>
  );
}
