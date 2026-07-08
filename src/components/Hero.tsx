import { profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs tracking-widest text-accent uppercase sm:mb-4 sm:text-sm">
          Hello, I&apos;m
        </p>

        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="mb-5 break-all font-mono text-xs text-muted sm:mb-6 sm:break-normal sm:text-sm">
          @{profile.handle}
        </p>

        <p className="mx-auto mb-3 max-w-xl text-lg text-foreground sm:mb-4 sm:text-xl md:text-2xl">
          {profile.title}
        </p>

        <p className="mx-auto mb-3 max-w-lg text-base text-accent-light sm:mb-4 sm:text-lg">
          {profile.tagline}
        </p>

        <p className="mx-auto mb-8 max-w-lg text-sm text-muted sm:mb-10 sm:text-base">
          {profile.bio}
        </p>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#projects"
            className="glow rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-accent-light"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-foreground transition hover:border-accent hover:text-accent-light"
          >
            Contact me
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <SocialLinks className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-3" />
        </div>
      </div>
    </section>
  );
}
