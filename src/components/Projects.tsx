import Image from "next/image";
import { projects } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
            Projects
          </h2>
          <p className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl">
            Things I&apos;ve built
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 100}>
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-accent-light">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
