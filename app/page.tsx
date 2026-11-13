import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";
import LatestGrid from "@/components/LatestGrid";
import { getPosts, getCategoryCounts } from "@/lib/wp";

export const revalidate = 300;

export default async function Home() {
  const [posts, counts] = await Promise.all([getPosts(13), getCategoryCounts()]);
  return (
    <>
      <Hero posts={posts.slice(0, 3)} />
      <Featured posts={posts.slice(0, 4)} />
      <Categories counts={counts} />
      <LatestGrid posts={posts.slice(4, 13)} />
    </>
  );
}
