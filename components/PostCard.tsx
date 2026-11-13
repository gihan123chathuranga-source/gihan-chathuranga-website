import Link from "next/link";
import Image from "next/image";
import { fmtDate, type Post } from "@/lib/wp";
export default function PostCard({ post }: { post: Post }) {
  return <article className="group">
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line shadow-lift">
        {post.image ? <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /> : <div className="h-full w-full bg-gradient-to-br from-accent/20 to-navy/20" />}
      </div>
      <span className="mt-5 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{post.category}</span>
      <h2 className="mt-3 font-serif text-2xl leading-snug tracking-tight transition-colors group-hover:text-accent">{post.title}</h2>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-4 border-t border-line pt-4 text-xs text-muted"><time dateTime={post.date}>{fmtDate(post.date)}</time> · {post.minutes} min read</p>
    </Link>
  </article>;
}
