import { motion } from "framer-motion";

const MotionBackground = () => {
  return (
    <motion.div
      className="motion-bg"
      initial={{ x: 0 }}
      animate={{ x: ["0%", "-50%", "0%"] }} // move left and back
      transition={{
        duration: 30,   // how long for one loop
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default MotionBackground;
