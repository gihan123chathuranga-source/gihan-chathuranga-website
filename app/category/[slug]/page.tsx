import { notFound } from "next/navigation";
import { getCategoryPosts } from "@/lib/wp";
import PostCard from "@/components/PostCard";
export const revalidate = 300;
export default async function CategoryPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const { category, posts } = await getCategoryPosts(slug);
  if (!category) notFound();
  return <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">Browse category</p>
    <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-7xl">{category.name}</h1>
    <p className="mt-4 text-muted">{category.count} published articles</p>
    {posts.length ? <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{posts.map(post=><PostCard key={post.id} post={post}/>)}</div> : <p className="mt-12 text-muted">No published articles in this category yet.</p>}
  </section>;
}
