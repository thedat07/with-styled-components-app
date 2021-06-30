import { motion } from "framer-motion";
const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
export default function Stagger({children}) {
  return <motion.div variants={stagger}>{children}</motion.div>;
}
