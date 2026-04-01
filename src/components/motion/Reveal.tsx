import { motion, type HTMLMotionProps } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  y?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px', amount: 0.15 }}
      transition={{ duration: 0.62, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
