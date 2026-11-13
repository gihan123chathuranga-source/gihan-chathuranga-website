import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/wp";

const subjects = ["Technology", "Education", "Aviation", "History", "Psychology"];

export default function Hero({ posts }: { posts: Post[] }) {
  const imgs = posts.filter((p) => p.image).slice(0, 3);
  const shapes = ["rounded-t-[999px] h-[22rem] w-[58%]", "rounded-2xl h-52 w-[38%]", "rounded-full aspect-square w-[34%]"];
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60%_60%_at_80%_20%,rgb(var(--accent)/.14),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pt-24">
        <div>
          <h1 className="font-serif text-[clamp(3rem,7.5vw,6.5rem)] font-light leading-[.95] tracking-tight">
            Explore Knowledge.<br /><span className="italic text-accent">Discover</span> Possibilities.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
            Insights and discoveries across Technology, Education, Aviation, History and Psychology.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/blog" className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-lift transition hover:-translate-y-0.5 hover:brightness-110">Read the blog</Link>
            <Link href="/#categories" className="rounded-full border border-line px-7 py-3.5 text-sm font-medium transition hover:border-accent hover:text-accent">Browse categories</Link>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 font-serif text-lg italic text-muted">
            {subjects.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="relative flex flex-wrap content-start items-end gap-4">
          {imgs.length === 0 ? (
            <div className="h-[26rem] w-full rounded-t-[999px] bg-gradient-to-b from-accent/30 to-navy" />
          ) : imgs.map((p, i) => (
            <Link key={p.id} href={`/blog/${p.slug}`} className={`unveil unveil-${i + 1} relative block overflow-hidden shadow-lift ${shapes[i]} ${i === 2 ? "ml-auto -mt-6" : ""}`}>
              <Image src={p.image!} alt={p.imageAlt} fill sizes="(min-width:1024px) 22vw, 50vw" priority className="object-cover transition duration-700 hover:scale-105" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
