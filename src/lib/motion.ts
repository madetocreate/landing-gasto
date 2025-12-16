export const motion = {
  // Policy: calm, premium
  drawer: {
    duration: 0.22,
    ease: [0.16, 1, 0.3, 1] as const, // easeOut-ish
  },
  hover: {
    duration: 0.14,
    ease: [0.2, 0.8, 0.2, 1] as const,
  },
  tap: {
    duration: 0.12,
    ease: [0.2, 0.8, 0.2, 1] as const,
  },
  reveal: {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1] as const,
  },
} as const


