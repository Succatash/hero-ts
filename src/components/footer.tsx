"use client";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
  return (
    <footer
      className={`${isAdmin ? "hidden" : "h-30 relative w-screen items-center"}`}
    >
      Honouring those whose helped Israel from fighting on the battlefield to
      fighting in the political field. Israel poinrasndf;lkans;a ads f adf ads f
      asdf asdf a
    </footer>
  )}