import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
          Skills
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          What I&apos;m working with
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-muted">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
