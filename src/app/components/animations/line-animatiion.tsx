"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedGrid: React.FC = () => {
  const animation = {
    x: [0, 100, 0], // Move até o meio e volta
    opacity: [1, 0.8, 0], // Suaviza até desaparecer
    transition: { duration: 3, repeat: Infinity },
  };

  const lines = [20, 40, 60, 80]; // Posições para múltiplas linhas horizontais

  return (
    <div className="relative w-full h-screen bg-[#1a0b2e] overflow-hidden">
      {/* Linhas horizontais */}
      {lines.map((position, index) => (
        <div
          key={index}
          className="absolute left-0 w-full h-[2px] bg-blue-400"
          style={{ top: `${position}%` }}
        >
          {/* Bolinhas animadas para cada linha */}
          <motion.div
            className="absolute w-[10px] h-[10px] bg-blue-400 rounded-full shadow-[0_0_10px_5px_rgba(79,168,255,0.5)]"
            animate={animation}
          ></motion.div>
          <motion.div
            className="absolute w-[10px] h-[10px] bg-blue-400 rounded-full shadow-[0_0_10px_5px_rgba(79,168,255,0.5)]"
            animate={animation}
            transition={{ delay: 1 }}
          ></motion.div>
        </div>
      ))}

      {/* Linhas verticais arredondadas */}
      <div className="absolute left-[20%] top-0 h-full w-[50px] border-r-2 border-b-2 border-blue-400 rounded-br-[50%]"></div>
      <div className="absolute left-[50%] top-0 h-full w-[50px] border-r-2 border-b-2 border-blue-400 rounded-br-[50%]"></div>
      <div className="absolute left-[80%] top-0 h-full w-[50px] border-r-2 border-b-2 border-blue-400 rounded-br-[50%]"></div>
    </div>
  );
};

export default AnimatedGrid;
