import { navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          KC<span className="text-accent">.</span>
          <span className="sr-only">Kiara Caesar</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-light"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
