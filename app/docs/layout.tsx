import { DocsNav } from "@/components/docs-nav";

// interface DocsConfig {
//   // mainNav: MainNavItem[];
//   sidebarNav: NavItemWithChildren[];
//   // chartsNav: SidebarNavItem[];
// }

const docsConfig = {
  career: [
    {
      title: "디지털 뉴트리션",
      items: [
        {
          title: "Express.js 서버를 NestJS로 전환",
          href: "/docs/nextjs",
          items: [],
        },
        {
          title: "AWS EKS, Karpenter 인프라 구축",
          href: "/docs/infra",
          items: [],
        },
      ],
    },
  ],
};

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md relative mx-auto max-w-svw px-4 py-10 md:flex md:flex-row">
      <div className="sticky h-[calc(100vh-3.5rem)] md:flex md:shrink-0 md:flex-col md:justify-between">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
          <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
            <DocsNav config={docsConfig} />
          </div>
        </aside>
      </div>
      <div className="w-full max-w-4xl md:px-6">{children}</div>
    </div>
  );
}
