import Image from "next/image";
import { CornerDownRight } from "lucide-react";

type StatusLineProps = {
  prefix: string;
  logo?: string;
  logoClassName?: string;
  name: string;
  href?: string;
  suffix?: string;
};

export function StatusLine({
  prefix,
  logo,
  logoClassName = "w-3.5 h-3.5 rounded-sm",
  name,
  href,
  suffix,
}: StatusLineProps) {
  return (
    <div className="status-line flex row items-start text-sm leading-6">
      <CornerDownRight className="mr-2 mt-1 h-4 w-4 shrink-0 text-lighttext" />
      <h3 className="font-normal text-lighttext3">
        {prefix}{" "}
        <span className="inline-flex max-w-full flex-wrap items-center align-middle gap-x-1">
          {logo ? logo.includes("spacex") ? (
            <span className="w-3.5 h-3.5 rounded-sm overflow-hidden shrink-0">
              <Image
                src={logo}
                alt=""
                width={14}
                height={14}
                className="w-full h-full object-cover scale-[1.6] origin-[60%_46%]"
              />
            </span>
          ) : (
            <Image src={logo} alt="" width={14} height={14} className={logoClassName} />
          ) : null}
          {href ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-neutral-200"
              href={href}
            >
              {name}
            </a>
          ) : (
            <span className="relative text-neutral-200">{name}</span>
          )}
        </span>
        {suffix ? <> {suffix}</> : null}
      </h3>
    </div>
  );
}
