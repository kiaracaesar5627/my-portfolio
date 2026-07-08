import { socialLinks } from "@/lib/data";
import SocialIcon from "./SocialIcon";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export default function SocialLinks({
  className = "flex flex-wrap items-center gap-3",
  iconClassName,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={
            link.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          aria-label={link.label}
          title={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:bg-accent/10 hover:text-accent-light sm:h-10 sm:w-10"
        >
          <SocialIcon icon={link.icon} className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
