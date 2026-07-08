import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
            About
          </h2>
          <p className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl">
            A little about me
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <AnimateOnScroll delay={100}>
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
              <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
                I&apos;m KC — a developer in training through Pitch Rise, learning
                to build real projects with modern tools like Cursor, Next.js,
                and GitHub.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I believe the best way to learn is by doing. This portfolio is one
                of my first steps toward a career in web development and
                AI-assisted building.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: "Focus", value: "Web Dev" },
              { label: "Learning", value: "Next.js" },
              { label: "Tools", value: "Cursor" },
              { label: "Status", value: "Building" },
            ].map((item, index) => (
              <AnimateOnScroll key={item.label} delay={150 + index * 75}>
                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <p className="mb-1 font-mono text-xs tracking-wider text-accent uppercase">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold sm:text-lg">{item.value}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
