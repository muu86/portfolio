export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md relative mx-auto max-w-svw px-4 py-10 md:flex md:flex-row">
      <div className="w-full max-w-4xl md:px-6">{children}</div>
    </div>
  );
}
