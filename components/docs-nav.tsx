"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DocsConfig {
  // mainNav: MainNavItem[];
  sidebarNav: NavItemWithChildren[];
  // chartsNav: SidebarNavItem[];
}

type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  // icon?: keyof typeof Icons;
  label?: string;
  items: NavItemWithChildren[];
};

type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
};

export function DocsNav({ config }: { config: DocsConfig }) {
  const pathname = usePathname();

  const items = config.sidebarNav;

  return items.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
          {item?.items?.length && <DocsNavItems items={item.items} pathname={pathname} />}
        </div>
      ))}
    </div>
  ) : null;
}

function DocsNavItems({ items, pathname }: { items: NavItemWithChildren[]; pathname: string | null }) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group text-foreground hover:bg-accent hover:text-accent-foreground flex h-8 w-full items-center rounded-lg px-2 font-normal underline-offset-2",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href && "bg-accent text-accent-foreground font-medium",
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md p-2 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {item.title}
            {item.label && (
              <span className="bg-muted text-muted-foreground ml-2 rounded-md px-1.5 py-0.5 text-xs leading-none no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}
