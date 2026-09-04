import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type MobilePlatform = 'ios' | 'android' | 'other'

export function detectMobilePlatform(): MobilePlatform {
  // Guard for SSR/non-browser execution.
  if (typeof navigator === 'undefined') {
    return 'other'
  }

  const userAgent = navigator.userAgent || ''
  const platform = navigator.platform || ''
  const maxTouchPoints = navigator.maxTouchPoints || 0

  // Android devices are reliably identified via user-agent.
  if (/android/i.test(userAgent)) {
    return 'android'
  }

  // iPadOS can present as MacIntel, so combine platform + touch support.
  const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent)
  const isIPadOS = platform === 'MacIntel' && maxTouchPoints > 1

  if (isIOSDevice || isIPadOS) {
    return 'ios'
  }

  return 'other'
}
