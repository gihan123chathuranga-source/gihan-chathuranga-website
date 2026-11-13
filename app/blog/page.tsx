import { getPosts } from "@/lib/wp";
import PostCard from "@/components/PostCard";
export const revalidate = 300;
export default async function BlogPage() {
  const posts = await getPosts(30);
  return <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">The journal</p>
    <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">All articles</h1>
    <p className="mt-5 max-w-2xl text-muted">Ideas, insights and discoveries across the subjects that shape our world.</p>
    {posts.length ? <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{posts.map(post => <PostCard key={post.id} post={post}/>)}</div> : <p className="mt-12 rounded-xl border border-line p-8 text-muted">No articles were found. Check that your WordPress site is reachable and has published posts.</p>}
  </section>;
}
