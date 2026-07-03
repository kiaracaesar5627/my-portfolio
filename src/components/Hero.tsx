import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Hello, I&apos;m
        </p>

        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="mb-6 font-mono text-sm text-muted">
          @{profile.handle}
        </p>

        <p className="mx-auto mb-4 max-w-xl text-xl text-foreground sm:text-2xl">
          {profile.title}
        </p>

        <p className="mx-auto mb-4 max-w-lg text-lg text-accent-light">
          {profile.tagline}
        </p>

        <p className="mx-auto mb-10 max-w-lg text-muted">
          {profile.bio}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="glow rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-light"
          >
            View my work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent-light"
          >
            GitHub →
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent-light"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
