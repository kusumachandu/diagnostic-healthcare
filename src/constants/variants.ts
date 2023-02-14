export const divVariants:any = {
  hidden: {
    opacity: 0, 
    y:-40,
  },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  },
  exit: {
    opacity: 0,
    y: -40,
  }
}

export const buttonVariants:any = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    }
  },
  exit: {
    opacity: 0,
    x: -20,
  }
}