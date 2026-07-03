export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
          About
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          A little about me
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="mb-4 leading-relaxed text-muted">
              I&apos;m KC — a developer in training through Pitch Rise, learning
              to build real projects with modern tools like Cursor, Next.js,
              and GitHub.
            </p>
            <p className="leading-relaxed text-muted">
              I believe the best way to learn is by doing. This portfolio is one
              of my first steps toward a career in web development and
              AI-assisted building.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Focus", value: "Web Dev" },
              { label: "Learning", value: "Next.js" },
              { label: "Tools", value: "Cursor" },
              { label: "Status", value: "Building" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="mb-1 font-mono text-xs tracking-wider text-accent uppercase">
                  {item.label}
                </p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
