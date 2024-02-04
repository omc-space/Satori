import type { SpringOptions } from 'motion'

export const reboundPreset: SpringOptions = {
  mass: 1,
  stiffness: 120,
  damping: 10,
}

export const fastPreset: SpringOptions = {
  mass: 2,
  stiffness: 500,
  damping: 20,
}

export const microDampingPreset: SpringOptions = {
  mass: 1,
  stiffness: 180,
  damping: 12,
}

export const microReboundPreset: SpringOptions = {
  stiffness: 400,
  damping: 20,
}

export const softSpringPreset: SpringOptions = {
  stiffness: 180,
  damping: 10,
}

export const softBouncePreset: SpringOptions = {
  damping: 10,
  stiffness: 100,
}
