import { getTableOfContents } from "@/lib/mdx";
import { DashboardTableOfContents } from "@/components/toc";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const { default: Doc } = await import(`@/docs/digital-nutrition/${slug}.mdx`);
  const toc = await getTableOfContents(Doc);
  return (
    <div className="relative flex gap-10 space-y-8">
      <div className="mx-auto max-w-2xl">
        <Doc />
      </div>
      <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
        <DashboardTableOfContents toc={toc} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // const docs = getDocs("docs/career/digital-nutrition");

  // return docs.map((doc) => ({
  //   slug: doc.slug,
  // }));

  return [
    {
      slug: "nextjs",
    },
  ];
}

// export function generateMetadata({ params }) {
//   let post = getBlogPosts().find((post) => post.slug === params.slug);
//   if (!post) {
//     return;
//   }
//
//   let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
//   let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;
//
//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }
//
// export default function Page({ params }: { params: { slug: string } }) {
//     const doc = getDocs("docs/career/digital-nutrition").find((doc) => doc.slug === params.slug);
//
//     if (!doc) {
//       notFound();
//     }
//
//     return (
//       <section>
//         <script
//           type="application/ld+json"
//           suppressHydrationWarning
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BlogPosting",
//               headline: doc.metadata.title,
//               datePublished: doc.metadata.publishedAt,
//               dateModified: doc.metadata.publishedAt,
//               description: doc.metadata.summary,
//               image: doc.metadata.image
//                 ? `${baseUrl}${doc.metadata.image}`
//                 : `/og?title=${encodeURIComponent(doc.metadata.title)}`,
//               url: `${baseUrl}/blog/${doc.slug}`,
//               author: {
//                 "@type": "Person",
//                 name: "My Portfolio",
//               },
//             }),
//           }}
//         />
//         <h1 className="title text-2xl font-semibold tracking-tighter">{doc.metadata.title}</h1>
//         <div className="mt-2 mb-8 flex items-center justify-between text-sm">
//           <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(doc.metadata.createdAt)}</p>
//         </div>
//         <article className="prose">
//           <CustomMDX source={doc.content} />
//         </article>
//       </section>
//   );
// }
