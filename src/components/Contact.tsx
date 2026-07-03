import { socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
            Contact
          </h2>
          <p className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s connect
          </p>
          <p className="mx-auto mb-10 max-w-md text-muted">
            Have a question or want to collaborate? Reach out — I&apos;d love to
            hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
