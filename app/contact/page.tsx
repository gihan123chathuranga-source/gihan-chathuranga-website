export const metadata = { title: "Contact | Gihan Chathuranga" };
export default function ContactPage() {
  return <section className="mx-auto max-w-3xl px-5 py-20 md:px-8">
    <p className="text-sm font-medium uppercase tracking-[.2em] text-accent">Get in touch</p>
    <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">Let’s connect.</h1>
    <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">Have a question, suggestion or an interesting idea to share? I’d be happy to hear from you.</p>
    <a href="mailto:your-email@example.com?subject=Hello%20Gihan" className="mt-10 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Send an email</a>
    <p className="mt-4 text-sm text-muted">Replace the email address in this page with your preferred contact email before publishing.</p>
  </section>;
}
