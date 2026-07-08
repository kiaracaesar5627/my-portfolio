import { skills } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
            Skills
          </h2>
          <p className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl">
            What I&apos;m working with
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 75}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
