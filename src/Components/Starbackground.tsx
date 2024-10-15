"use client";
import React from "react";

const StarBackground: React.FC = () => {
  const starCount = 50; // Adjust the number of stars
  const stars = Array.from({ length: starCount }, (_, index) => (
    <div
      key={index}
      className={`star star-${Math.floor(Math.random() * 4)}`} // Randomly assign star types
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 2}s`, // Random delay for twinkling effect
      }}
    />
  ));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {stars}
      <style jsx>{`
        .star {
          position: absolute;
          opacity: 0.8;
          animation: twinkle 1.5s infinite alternate;
        }

        .star-0 {
          width: 5px;
          height: 5px;
          border-radius: 50%; /* Circle star */
          background-color: #fcd34d; /* Yellow */
        }

        .star-1 {
          width: 8px;
          height: 8px;
          clip-path: polygon(50% 0%, 63% 35%, 100% 35%, 72% 57%, 82% 91%, 50% 70%, 18% 91%, 28% 57%, 0% 35%, 37% 35%); /* Star shape */
          background-color: #3b82f6; /* Blue */
        }

        .star-2 {
          width: 6px;
          height: 6px;
          background-color: #ec4899; /* Pink */
          transform: rotate(45deg); /* Diamond shape */
        }

        .star-3 {
          width: 10px;
          height: 10px;
          clip-path: polygon(50% 0%, 60% 40%, 100% 40%, 65% 60%, 75% 100%, 50% 75%, 25% 100%, 35% 60%, 0% 40%, 40% 40%); /* Another star shape */
          background-color: #f97316; /* Orange */
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
