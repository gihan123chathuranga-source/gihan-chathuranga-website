import Link from "next/link";
import { searchPosts, fmtDate } from "@/lib/wp";
export const revalidate = 60;
export default async function SearchPage({ searchParams }: { searchParams: Promise<{q?:string}> }) {
  const { q = "" } = await searchParams;
  const posts = await searchPosts(q);
  return <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">Find something interesting</p>
    <h1 className="mt-3 font-serif text-5xl tracking-tight">Search</h1>
    <form action="/search" className="mt-8 flex gap-3">
      <input name="q" defaultValue={q} placeholder="Search articles..." className="min-w-0 flex-1 rounded-full border border-line bg-card px-5 py-3 outline-none focus:border-accent" />
      <button className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white">Search</button>
    </form>
    {q && <><p className="mt-10 text-sm text-muted">{posts.length} result(s) for “{q}”</p>
      <div className="mt-5 divide-y divide-line border-y border-line">{posts.map(p=><Link key={p.id} href={`/blog/${p.slug}`} className="block py-6 hover:text-accent"><p className="text-xs text-accent">{p.category} · {fmtDate(p.date)}</p><h2 className="mt-2 font-serif text-2xl">{p.title}</h2><p className="mt-2 text-sm text-muted">{p.excerpt}</p></Link>)}</div>
      {posts.length===0 && <p className="mt-8 text-muted">No matching articles. Try another keyword.</p>}</>}
  </section>;
}
