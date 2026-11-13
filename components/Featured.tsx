import Link from "next/link";
import Image from "next/image";
import { fmtDate, type Post } from "@/lib/wp";

export default function Featured({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  const [lead, ...rest] = posts;
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <h2 className="mb-10 font-serif text-4xl tracking-tight">Featured</h2>
      <div className="grid gap-10 lg:grid-cols-12">
        <article className="group lg:col-span-8">
          <Link href={`/blog/${lead.slug}`} className="block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-line">
              {lead.image && <Image src={lead.image} alt={lead.imageAlt} fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-bg/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">{lead.category}</span>
            </div>
            <h3 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight transition-colors group-hover:text-accent md:text-5xl">{lead.title}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted line-clamp-3">{lead.excerpt}</p>
            <p className="mt-5 text-sm text-muted"><time dateTime={lead.date}>{fmtDate(lead.date)}</time> &nbsp;|&nbsp; {lead.minutes} min read &nbsp;|&nbsp; <span className="font-medium text-accent">Read article</span></p>
          </Link>
        </article>
        <div className="flex flex-col divide-y divide-line border-y border-line lg:col-span-4">
          {rest.slice(0, 3).map((p) => (
            <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4 py-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-line">
                {p.image && <Image src={p.image} alt={p.imageAlt} fill sizes="96px" className="object-cover transition duration-500 group-hover:scale-110" />}
              </div>
              <div>
                <p className="text-xs font-medium text-accent">{p.category}</p>
                <h4 className="mt-1 font-serif text-xl leading-snug transition-colors group-hover:text-accent">{p.title}</h4>
                <p className="mt-1 text-xs text-muted">{fmtDate(p.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
