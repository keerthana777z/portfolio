import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-primary/20 blur-[120px]" />
    </motion.div>
  );
};

export default CursorGlow;
