import Link from "next/link";
export default function NotFound() {
  return <section className="mx-auto max-w-3xl px-5 py-28 text-center">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">404 · Page not found</p>
    <h1 className="mt-4 font-serif text-5xl">This page wandered off.</h1>
    <p className="mt-5 text-muted">The page may have moved or the address may be incorrect.</p>
    <Link href="/" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white">Back to home</Link>
  </section>;
}
