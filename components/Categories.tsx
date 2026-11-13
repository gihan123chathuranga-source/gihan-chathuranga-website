import Link from "next/link";
import { Cpu, GraduationCap, Plane, Landmark, Brain, Lightbulb } from "lucide-react";

const cats = [
  { name: "Technology", slug: "technology", Icon: Cpu, note: "Tools, code and the systems behind them" },
  { name: "Education", slug: "education", Icon: GraduationCap, note: "How people learn and teach well" },
  { name: "Aviation", slug: "aviation", Icon: Plane, note: "Flight, aircraft and the people who fly" },
  { name: "History", slug: "history", Icon: Landmark, note: "Events and ideas that shaped today" },
  { name: "Psychology", slug: "psychology", Icon: Brain, note: "Mind, behaviour and everyday choices" },
  { name: "General Knowledge", slug: "general-knowledge", Icon: Lightbulb, note: "Curious facts worth remembering" },
];

export default function Categories({ counts }: { counts: Record<string, number> }) {
  return (
    <section id="categories" className="bg-navy py-24 text-[#EAF0FF]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-xl font-serif text-4xl tracking-tight md:text-5xl">Explore categories</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ name, slug, Icon, note }) => (
            <Link key={slug} href={`/category/${slug}`} className="group relative flex min-h-56 flex-col justify-between bg-navy p-8 transition-colors duration-500 hover:bg-[#10224A]">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-[#6E9BFF] transition duration-500 group-hover:scale-110 group-hover:bg-[#6E9BFF] group-hover:text-navy">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-3xl">{name}</h3>
                <p className="mt-2 text-sm text-[#94A3C4]">{note}</p>
                {counts[slug] ? <p className="mt-4 text-xs text-[#6E9BFF]">{counts[slug]} articles</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
