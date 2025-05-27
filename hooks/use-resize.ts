"use client"

import { RefObject, useEffect, useRef, useState } from "react"

type Size = { width: number; height: number }

export function useResize(): [RefObject<HTMLDivElement | null>, Size | null] {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<Size | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setSize({ width: rect.width, height: rect.height })

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setSize({ width, height })
      }
    })
    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  return [containerRef, size]
}
