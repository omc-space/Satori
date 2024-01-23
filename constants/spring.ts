import type { SpringOptions } from 'motion'

export const reboundPreset: SpringOptions = {
  mass: 1,
  stiffness: 120,
  damping: 10,
}

export const microDampingPreset: SpringOptions = {
  damping: 24,
}

export const microReboundPreset: SpringOptions = {
  stiffness: 300,
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
