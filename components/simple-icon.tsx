"use client"

import { cn } from "@/lib/utils"

type Props = {
  slug: string
  className?: string
}

export function SimpleIcon({ slug, className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/${slug}`}
      alt={`${slug}-icon`}
      className={cn(className)}
    />
  )
}
