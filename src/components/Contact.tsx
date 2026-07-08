import { profile } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
              Contact
            </h2>
            <p className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Let&apos;s connect
            </p>
            <p className="mx-auto max-w-md text-sm text-muted sm:text-base">
              Have a question or want to collaborate? Fill out the form or reach
              out directly — I&apos;d love to hear from you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <AnimateOnScroll delay={100} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-8 md:p-10">
              <ContactForm />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-5 sm:gap-8 sm:rounded-3xl sm:p-8 md:p-10">
              <div>
                <p className="mb-2 font-mono text-xs tracking-wider text-accent uppercase">
                  Direct contact
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-base font-semibold transition hover:text-accent-light sm:break-normal sm:text-lg"
                >
                  {profile.email}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Prefer email or social? You can also reach me through the links
                  below.
                </p>
              </div>

              <SocialLinks className="flex flex-wrap items-center gap-2 sm:gap-3" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
