export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-svw">
      <div className="mt-20 w-full max-w-4xl">{children}</div>
    </div>
  );
}
