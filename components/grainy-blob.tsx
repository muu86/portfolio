"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import {
  ComponentType,
  ReactElement,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from "react"
import Leave1 from "@/assets/leave-1.svg"
import Leave2 from "@/assets/leave-2.svg"
import Leave3 from "@/assets/leave-3.svg"
import Leave4 from "@/assets/leave-4.svg"
import { useTheme } from "next-themes"

type SVGComponentType = ComponentType<SVGProps<SVGSVGElement>>

const leaves: SVGComponentType[] = [Leave1, Leave2, Leave3, Leave4]

function getRandomLeave() {
  if (leaves.length === 0) return null

  return leaves[Math.floor(Math.random() * leaves.length)]
}

// function randomLeafColor(): string {
//   const h = 100 + Math.random() * 40
//   const c = 0.18 + Math.random() * 0.1
//   const l = 0.45 + Math.random() * 0.3

//   return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`
// }

let seed = 0
// function goldenLeafColor(): string {
//   const φ = 0.61803398875 // 황금비
//   seed = (seed + φ) % 1 // 균등 분포
//   const h = 110 + seed * 50
//   const c = 0.2 + ((seed * 7) % 0.08)
//   const l = 0.55 + ((seed * 11) % 0.2)
//   return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`
// }

function goldenLeafColor(theme: string | undefined): string {
  const φ = 0.61803398875 // 황금비
  seed = (seed + φ) % 1 // 균등 분포
  const h = 110 + seed * 50
  const c =
    theme === "dark" ? 0.12 + ((seed * 7) % 0.05) : 0.2 + ((seed * 7) % 0.08)
  const l =
    theme === "dark" ? 0.4 + ((seed * 11) % 0.1) : 0.55 + ((seed * 11) % 0.2)
  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`
}

export function GrainyBlobGradient() {
  const { theme } = useTheme()

  const leavesContainerRef = useRef<HTMLDivElement | null>(null)

  const [generatedLeaves, setGeneratedLeaves] = useState<ReactElement[]>([])

  useEffect(() => {
    setGeneratedLeaves(
      Array.from({ length: 200 })
        .map((_, i) => {
          const Leave = getRandomLeave()

          if (Leave === null) return null

          return (
            <Leave
              key={i}
              className="animated-leave"
              style={{
                width: 400,
                height: 400,
                position: "absolute",
                top: `${Math.random() * 150 - 25}%`,
                left: `${Math.random() * 150 - 25}%`,
                // scale: `${Math.random() *}`
                color: goldenLeafColor(theme),
                filter: "blur(20px)",
              }}
            />
          )
        })
        .filter((d) => d !== null),
    )
  }, [theme])

  useGSAP(
    () => {
      // Leaves animation
      const leaveElements = gsap.utils.toArray<SVGElement>(
        ".animated-leave",
        leavesContainerRef.current,
      )

      leaveElements.forEach((leave) => {
        gsap.to(leave, {
          x: gsap.utils.random(-150, 150, 1),
          y: gsap.utils.random(-150, 150, 1),
          rotation: gsap.utils.random(-15, 15, 1),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 2),
        })
      })
    },
    { scope: leavesContainerRef, dependencies: [generatedLeaves] },
  )

  return (
    <>
      <svg width="0" height="0" className="hidden">
        <filter id="grainy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1"
            numOctaves="4"
            result="turbulence"
          />
          <feColorMatrix
            in="turbulence"
            type="saturate"
            values="1"
            result="grayscaleNoise"
          />
          <feColorMatrix
            in="grayscaleNoise"
            type="matrix"
            values="1 0    0    0 0
                    0    1 0    0 0
                    0    0    1 0 0
                    0    0    0    1 0"
            result="coloredNoise"
          />
          <feBlend mode="screen" in="SourceGraphic" in2="coloredNoise" />
        </filter>
      </svg>

      <div
        ref={leavesContainerRef}
        className="filter-[url(#grainy)] w-full h-full relative bg-white dark:bg-yellow-600"
      >
        {generatedLeaves}
      </div>
    </>
  )
}
