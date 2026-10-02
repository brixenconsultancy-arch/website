import Image from "next/image";
import Link from "next/link";

/**
 * Brixen wordmark. The logo image already contains the full
 * "BRIXEN CONSULTANCY — STRUCTURAL ENGINEERING" lockup, so no
 * separate text is rendered alongside it. Backgrounds are removed
 * (transparent PNGs): the dark variant is red + black art for light
 * surfaces; the light variant is red + white art for dark surfaces.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      aria-label="Brixen Consultancy — home"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src={light ? "/brixen-logo-light.png" : "/brixen-logo.png"}
        alt="Brixen Consultancy — Structural Engineering"
        width={280}
        height={210}
        priority
        className="h-14 w-auto transition-transform duration-200 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
