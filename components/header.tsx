"use client"

import { headerNavLinks } from "@/data/nav-links"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ThemeSwitch } from "./theme-switch"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { HeaderButton } from "./header-button"
// import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  //   const router = useRouter()
  const pathname = usePathname()

  //   const { resolvedTheme } = useTheme()

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener("scroll", changeBackground)

    return () => document.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <header
      className={cn(
        "border-border bg-background fixed inset-x-0 top-[var(--header-mt)] left-[calc(100vw-100%)] z-40 mx-8 flex h-[var(--header-h)] items-center justify-between rounded-3xl border px-4 shadow-sm saturate-100 transition-all duration-200 md:mx-auto md:max-w-[768px] md:px-8 lg:max-w-[1168px] backdrop-blur-md",
        isScrolled && "bg-background/80 border-transparent",
      )}
    >
      <div className="mx-auto grid grid-rows-1 grid-cols-12 place-items-center h-[var(--header-height)] w-full">
        <Link href="/" className="flex gap-2">
          <div className="flex size-12">
            <Image
              className="bg-contain rounded-full"
              src="/me_zoom.jpg"
              width="64"
              height="64"
              alt="logo"
            />
          </div>
        </Link>
        <div className="mx-auto w-full col-span-8">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {headerNavLinks.map(
                (link) =>
                  !link.hidden && (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink
                        active={
                          (pathname.startsWith(link.href) &&
                            link.href !== "/") ||
                          pathname === link.href
                        }
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-foreground bg-transparent",
                          // (pathname.startsWith(link.href) &&
                          //   link.href !== "/") ||
                          //   pathname === link.href
                          //   ? "text-foreground"
                          //   : "text-foreground/60",
                        )}
                        asChild
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <HeaderButton />
        <ThemeSwitch />
      </div>
    </header>
  )
}
