"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProfileImage from "@/assets/profile_01.png";

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-100 w-full backdrop-blur">
      <div className={"mx-auto hidden border-b border-b-zinc-200 md:flex"}>
        <div className="mx-auto flex max-w-2xl p-4">
          <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
            {/*<Icons.logo className="h-6 w-6" />*/}
            <div className="flex aspect-square h-16 -scale-x-100 items-center justify-center overflow-hidden rounded-full outline-1 outline-black">
              <Image
                className="shadow-xl"
                src={ProfileImage}
                alt="hand-drawn picture by my wife"
                width={512}
                height={512}
                priority
              />
            </div>
            {/*<span className="hidden font-bold lg:inline-block">Home</span>*/}
          </Link>
          <nav className="flex items-center gap-4 text-sm xl:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>경력 상세</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>디지털 뉴트리션</NavigationMenuLink>
                    <NavigationMenuLink>유니아이텍</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/docs"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname === "/docs" ? "text-foreground" : "text-foreground/80",
              )}
            >
              Docs
            </Link>
            <Link
              href="/docs/digital-nutrition"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname?.startsWith("/docs/components") && !pathname?.startsWith("/docs/component/chart")
                  ? "text-foreground"
                  : "text-foreground/80",
              )}
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname?.startsWith("/blocks") ? "text-foreground" : "text-foreground/80",
              )}
            >
              Blocks
            </Link>
            <Link
              href="/charts"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname?.startsWith("/docs/component/chart") || pathname?.startsWith("/charts")
                  ? "text-foreground"
                  : "text-foreground/80",
              )}
            >
              Charts
            </Link>
            <Link
              href="/themes"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname?.startsWith("/themes") ? "text-foreground" : "text-foreground/80",
              )}
            >
              Themes
            </Link>
            <Link
              href="/colors"
              className={cn(
                "hover:text-foreground/80 transition-colors",
                pathname?.startsWith("/colors") ? "text-foreground" : "text-foreground/80",
              )}
            >
              Colors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
