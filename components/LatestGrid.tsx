import Link from "next/link";
import Image from "next/image";
import { fmtDate, type Post } from "@/lib/wp";

export default function LatestGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Latest articles</h2>
        <Link href="/blog" className="text-sm font-medium text-accent underline-offset-4 hover:underline">View all</Link>
      </div>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <article key={p.id} className={`group ${i % 3 === 1 ? "lg:mt-10" : ""}`}>
            <Link href={`/blog/${p.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line shadow-lift">
                {p.image && <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />}
              </div>
              <span className="mt-5 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{p.category}</span>
              <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight transition-colors group-hover:text-accent">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
              <p className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                <span><time dateTime={p.date}>{fmtDate(p.date)}</time> &nbsp;|&nbsp; {p.minutes} min read</span>
                <span className="font-medium text-ink transition-colors group-hover:text-accent">Read more</span>
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
