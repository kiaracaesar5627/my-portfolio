import AnimateOnScroll from "./AnimateOnScroll";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <AnimateOnScroll>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="max-w-xs font-mono text-xs text-muted sm:max-w-none sm:text-sm">
            © {new Date().getFullYear()} KC. Built with Next.js & Tailwind.
          </p>

          <SocialLinks className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-3" />
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
