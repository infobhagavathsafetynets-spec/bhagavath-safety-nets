import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Bhagavath Safety Nets Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/icon.svg"
            alt="Bhagavath Safety Nets Icon"
            width={44}
            height={44}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center select-none group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Bhagavath Safety Nets Home"
    >
      <div className="relative h-10 sm:h-12 w-auto flex items-center">
        <Image
          src={light ? "/images/logo/bhagavath-safety-nets-logo-light.svg" : "/images/logo/bhagavath-logo-PLACEHOLDER.svg"}
          alt="Bhagavath Safety Nets"
          width={240}
          height={48}
          className="h-10 sm:h-11 w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
