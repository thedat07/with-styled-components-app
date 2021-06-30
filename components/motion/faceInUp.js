import { motion } from "framer-motion";
const easing = [0.6, -0.05, 0.01, 0.99];
const faceInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export default function FaceInUp({children}) {
  return <motion.div variants={faceInUp}>{children}</motion.div>;
}
