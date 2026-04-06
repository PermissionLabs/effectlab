export const usage = {
  install: "bun add motion",
  tsx: `import { motion, AnimatePresence } from "motion/react";

function AnimatedCard({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-48 h-48 bg-purple-500 rounded-2xl"
        />
      )}
    </AnimatePresence>
  );
}`,
};
