export const metadata = { title: "About | Gihan Chathuranga" };
export default function AboutPage() {
  return <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">A little introduction</p>
    <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight md:text-7xl">Curiosity leads to discovery.</h1>
    <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
      <p>Welcome to my knowledge journal. I’m Gihan Chathuranga, and this is a place to explore ideas, learn something new and connect knowledge across different fields.</p>
      <p>Here you’ll find articles about technology, education, aviation, history, psychology and general knowledge. The goal is simple: make learning engaging, useful and accessible.</p>
    </div>
  </section>;
}
