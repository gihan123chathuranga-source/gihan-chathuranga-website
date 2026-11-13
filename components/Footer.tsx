export default function Footer() {
  return (
    <footer className="mt-32 bg-navy text-[#EAF0FF]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="max-w-sm font-serif text-3xl leading-tight">Curiosity is a habit. Keep exploring.</p>
        <p className="text-sm text-[#94A3C4]">© {new Date().getFullYear()} Gihan Chathuranga</p>
      </div>
    </footer>
  );
}
