type HeaderNavLinkType = {
  href: string
  title: string
  disabled?: boolean
  tooltip?: string
  hidden?: boolean
}

export const headerNavLinks: HeaderNavLinkType[] = [
  { href: "/", title: "홈" },
  { href: "#history", title: "경력" },
  { href: "#tech", title: "기술" },
  { href: "#introduce", title: "소개" },
]
