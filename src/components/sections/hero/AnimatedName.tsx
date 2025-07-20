"use client";

import { motion } from "framer-motion";

export default function AnimatedName({ name }: { name: string }) {
  const words = name.split(" ");

  return (
    <span className="inline-flex flex-wrap gap-x-2">
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex gap-[0.05em]">
           &nbsp; {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: wi * 0.4 + ci * 0.04 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
