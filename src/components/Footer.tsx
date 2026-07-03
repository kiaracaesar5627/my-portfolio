export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} KC. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono text-xs text-muted">
          kiaracaesar5627@gmail.com
        </p>
      </div>
    </footer>
  );
}
