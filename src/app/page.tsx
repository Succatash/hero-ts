"use client";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
  return (
    <p
      className={`${isAdmin ? "hidden" : "relative h-[5000px] w-screen items-center"}`}
    >
      Honouring those whose helped Israel from fighting on the battlefield to
      fighting in the political field. Israel poinrasndf;lkans;a ads f adf ads f
      asdf asdf a
    </p>
  );
}
