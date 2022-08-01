import { PAGE_ROUTING_TRANSITIONS } from '../../constants/animations'
import { motion } from 'framer-motion'

function PageTransition({ children }: any) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={PAGE_ROUTING_TRANSITIONS}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition;