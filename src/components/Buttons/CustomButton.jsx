import { motion } from "motion/react";

export default function CustomButton({ children, className, ...props }) {
  return (
    <motion.button
      className={className}
      {...props}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{
        type: "sprin",
        duration: "0.1",
      }}
    >
      {children}
    </motion.button>
  );
}
