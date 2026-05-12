import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
}

export const Reveal = ({
  children,
  delay = 0,
  amount = 0.6,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};