import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, fmtDate } from "@/lib/wp";
export const revalidate = 300;
export default async function ArticlePage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <article className="mx-auto max-w-4xl px-5 py-14 md:px-8">
    <Link href="/blog" className="text-sm text-accent hover:underline">← Back to all articles</Link>
    <div className="mt-8"><span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{post.category}</span></div>
    <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-6xl">{post.title}</h1>
    <p className="mt-6 text-sm text-muted"><time dateTime={post.date}>{fmtDate(post.date)}</time> · {post.minutes} min read</p>
    {post.image && <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-line"><Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width:1024px) 900px, 100vw" className="object-cover"/></div>}
    <div className="prose prose-lg mt-12 max-w-none prose-headings:font-serif prose-a:text-accent prose-img:rounded-xl dark:prose-invert" dangerouslySetInnerHTML={{__html: post.content}} />
  </article>;
}
