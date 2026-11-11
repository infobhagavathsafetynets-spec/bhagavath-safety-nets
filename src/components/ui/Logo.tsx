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
      <div className="relative flex items-center">
        <Image
          src="/images/logo/bhagavath-logo.webp"
          alt="Bhagavath Safety Nets - Safety Nets and Invisible Grills in Bengaluru"
          width={320}
          height={95}
          className="h-[46px] sm:h-[52px] md:h-[58px] lg:h-[62px] w-auto max-w-[210px] sm:max-w-[250px] md:max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          priority
        />
      </div>
    </Link>
  );
}
