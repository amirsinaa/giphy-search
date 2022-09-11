export const PAGE_ROUTING_TRANSITIONS = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

export const GIF_RESULTS_WRAPPER_TRANSITION = {
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hide: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const GIF_RESULTS_TRANSITION = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hide: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
