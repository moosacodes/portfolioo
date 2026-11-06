import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moosa-alam/",
    marginLeft: 0,
    zIndex: 4,
    rotate: "1.12deg",
    content: (
      <span
        className="rounded-lg inline-flex items-center justify-center font-semibold text-white ring-1 ring-white/20"
        style={{
          width: 24,
          height: 24,
          backgroundColor: "rgb(10, 102, 194)",
          fontSize: 16,
        }}
      >
        in
      </span>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/moosacodes",
    marginLeft: 4,
    zIndex: 3,
    rotate: "2.16deg",
    content: (
      <span
        className="block rounded-lg overflow-hidden ring-1 ring-white/20"
        style={{ width: 24, height: 24, backgroundColor: "rgb(0, 0, 0)" }}
      >
        <Image
          alt="GitHub"
          src="/github.png"
          width={96}
          height={96}
          className="w-full h-full object-contain"
          style={{ transform: "scale(0.75)", filter: "invert(1)" }}
        />
      </span>
    ),
  },
  {
    label: "X",
    href: "https://x.com/moosacodes",
    marginLeft: 4,
    zIndex: 1,
    rotate: "2.6deg",
    content: (
      <span
        className="block rounded-lg overflow-hidden ring-1 ring-white/20"
        style={{ width: 24, height: 24, backgroundColor: "rgb(0, 0, 0)" }}
      >
        <Image
          alt="X"
          src="/x.svg"
          width={96}
          height={96}
          className="w-full h-full object-contain"
          style={{ transform: "scale(0.6)", filter: "invert(1)" }}
        />
      </span>
    ),
  },
] as const;

export function SocialIcons() {
  return (
    <span className="inline-flex items-center relative align-middle" style={{ height: 24 }}>
      {socials.map((social) => (
        <a
          key={social.label}
          className="group/icon relative inline-block transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110 focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:outline-none"
          style={{
            marginLeft: social.marginLeft,
            zIndex: social.zIndex,
            rotate: social.rotate,
          }}
          aria-label={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.content}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap opacity-0 pointer-events-none group-hover/icon:opacity-100 transition-opacity duration-150 z-50">
            {social.label}
          </span>
        </a>
      ))}
    </span>
  );
}
