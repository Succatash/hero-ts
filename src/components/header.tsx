"use client";
import React, { HTMLAttributes } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import AnimatedSearch from "./search-animation";
import AnimatedDropdown from "./hamburger-animation";
import { cn } from "../lib/utils";

const Header = ({ className }: HTMLAttributes<HTMLHeadingElement>) => {
  const router = useRouter();

  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  return (
    <div className={`${isAdmin ? "hidden" : "sticky left-0 top-0 shadow-md"}`}>
      <div className="w-full bg-blue-500 text-center">Advertisement banner</div>
      <header className={cn(`max-h-26 flex w-screen`, className)}>
        <Logo
          name="HoI"
          className={`fixed top-0 z-10 ml-3 flex h-28 w-24 items-center justify-center bg-blue-800 text-center font-serif text-4xl text-white`}
        />

        <div className="flex flex-col">
          {/* top part of header */}
          <div className="flex h-[60px] w-screen flex-row justify-evenly bg-blue-900">
            <div className="content-center pl-[135px] font-sansSerif text-3xl text-white">
              Heros of Israel
            </div>

            <div className="relative ml-auto flex w-[200px] flex-row justify-evenly">
              <AnimatedSearch />
              <Button
                variant="default"
                className="center self-center"
                onClick={() => router.push("/donate")}
              >
                Donate
              </Button>
              <AnimatedDropdown />
            </div>
          </div>
          <div className="flex h-[30px] w-screen items-center justify-evenly bg-blue-400 pl-[105px] text-white">
            <Link
              href="/research"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              RESEARCHERS
            </Link>
            <Link
              href="/research"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              History
            </Link>
            <Link
              href="/politics"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              POLITICIANS
            </Link>
            <Link
              href="/business"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              BUSINESS
            </Link>
            <Link
              href="/research"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              Blog
            </Link>
            <Link
              href="/news"
              className="p-1 text-sm hover:bg-white hover:text-blue-900"
            >
              News
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
