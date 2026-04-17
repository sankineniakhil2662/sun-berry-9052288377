import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetFor = (d: Direction) => {
  if (d === "up") return { y: 24, x: 0 };
  if (d === "down") return { y: -24, x: 0 };
  if (d === "left") return { y: 0, x: 24 };
  if (d === "right") return { y: 0, x: -24 };
  return { y: 0, x: 0 };
};

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.2,
}: Props) {
  const { x, y } = offsetFor(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}