import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

export function CTAButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={clsx(variant === "primary" ? "btn-primary" : "btn-secondary")} href={href}>
      {children}
    </Link>
  );
}
