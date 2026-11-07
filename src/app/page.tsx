import Image from "next/image";
import { AmbientBackground } from "@/components/AmbientBackground";
import { PhotoFan } from "@/components/PhotoFan";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialIcons } from "@/components/SocialIcons";
import { StatusLine } from "@/components/StatusLine";

const projects = [
  {
    name: "Rethra",
    role: "Creator & Engineer",
    year: "2026",
    image: "/rethra-release-dossier.png",
    description:
      "A desktop AI workspace that runs models locally, without relying on cloud APIs.",
  },
  {
    name: "DeadAir",
    role: "Independent Project",
    year: "2026 · In Development",
    description:
      "Crowdsourced network outage detection, turning connectivity reports into real-time incident intelligence.",
  },
  {
    name: "Ghostprint",
    role: "Independent Project",
    year: "2026 · In Development",
    description:
      "An interactive privacy scanner revealing what websites can learn about your device and browser.",
  },
  {
    name: "User-Space VPN",
    role: "Independent Project",
    year: "2026",
    description:
      "A user-space network tunnel exploring packet routing, encrypted communication, and low-level networking.",
  },
] as const;

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moosa Alam",
    url: "https://moosaalam.dev",
    image: "https://moosaalam.dev/moosa-profile.png",
    jobTitle: "Cloud Infrastructure and Systems Engineer",
    description:
      "Computer science student and software engineer focused on cloud infrastructure, networking, reliability, and AI systems.",
    email: "mailto:alammoosa07@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Guelph",
      url: "https://www.uoguelph.ca/",
    },
    sameAs: [
      "https://www.linkedin.com/in/moosa-alam/",
      "https://github.com/moosacodes",
      "https://x.com/moosacodes",
    ],
    knowsAbout: [
      "Cloud infrastructure",
      "Distributed systems",
      "Computer networking",
      "Software engineering",
      "Artificial intelligence",
      "Site reliability engineering",
    ],
  };

  return (
    <main className="relative z-10 flex flex-col items-center scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AmbientBackground />
      <div className="relative w-full max-w-[900px] px-4">
        <div className="w-full max-w-[680px] pt-10 md:pt-20 lg:pt-32 rise-in">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/moosa-profile.png"
                alt="Moosa Alam"
                width={96}
                height={96}
                priority
                className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-cover block"
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h1 className="text-[32px] font-bold leading-none tracking-[-0.03em]">Moosa Alam</h1>
              <div className="mb-1 flex text-[15px] leading-5">
                <h3 className="flex row items-center">
                  <span className="text-lighttext3">CS Student · Infrastructure &amp; Systems</span>
                </h3>
              </div>
              <SocialIcons />
              <span className="mt-2 inline-flex items-center gap-2 text-xs text-lighttext2">
                <span className="availability-dot h-1.5 w-1.5 rounded-full bg-[#79cfc5]" />
                Open to Winter 2027 co-op
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[680px] pt-8 rise-in" style={{ animationDelay: "120ms" }}>
          <div className="flex justify-between">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-neutral-200">NOW</h2>
          </div>

          <StatusLine
            prefix="Building Rethra —"
            name="A desktop workspace for running AI locally"
          />
          <StatusLine
            prefix="Interested in"
            name="cloud infrastructure, networking & systems"
          />
          <StatusLine
            prefix="Computer Science @"
            name="University of Guelph"
            href="https://www.uoguelph.ca/"
          />

          <div className="mt-7 flex justify-between">
            <h2 className="mb-2 text-xs font-semibold tracking-[0.14em] text-neutral-200">PREVIOUSLY</h2>
          </div>

          <StatusLine
            prefix="AI Systems Engineering Intern @"
            name="Synk"
            suffix="— 18% reliability improvement"
          />
          <StatusLine
            prefix="Performance optimization —"
            name="14% less frame-time degradation"
          />
          <StatusLine
            prefix="Earned"
            name="AWS Certified Cloud Practitioner"
          />
        </div>

      </div>

      <section
        id="engineering"
        aria-labelledby="engineering-heading"
        className="w-full max-w-[900px] px-4 pt-16 rise-in"
        style={{ animationDelay: "240ms" }}
      >
        <div className="mx-auto mb-7 flex items-center">
          <div>
            <h2 id="engineering-heading" className="text-[28px] font-semibold leading-8 tracking-[-0.025em] text-white/90">
              Engineering
            </h2>
            <h2 className="mt-1 text-sm leading-5 text-lighttext2">
              Things I&apos;ve built and things I&apos;m bringing to life.
            </h2>
          </div>
        </div>

        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative w-full flex flex-col items-center">
        <div className="relative z-10 w-full flex flex-col items-center">
          <PhotoFan />

          <section className="w-full max-w-[900px] px-4 py-12">
            <div className="flex flex-col gap-3 text-lighttext3 md:text-sm text-xs text-left md:text-center md:items-center">
              <p>Open to Winter 2027 cloud and infrastructure co-op roles.</p>
              <a
                href="mailto:alammoosa07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-neutral-200 underline decoration-neutral-300 decoration-3 underline-offset-4 whitespace-nowrap self-start transition-colors hover:text-white md:self-center"
              >
                Let&apos;s make it happen <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
