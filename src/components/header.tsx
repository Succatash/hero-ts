"use client";

import { Button } from "./ui/button";
import React from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Logo from "./logo";
import AnimatedSearch from "./animatedsearch";
import AnimatedDropdown from "./animateddropdown";

const Header = () => {
  const router = useRouter();
  return (
    <header className="max-h-26 fixed flex w-screen">
      <Logo
        name="HoI"
        className={`fixed z-10 ml-3 flex h-24 w-20 items-center justify-center bg-blue-800 text-center font-serif text-4xl text-white`}
      />

      <div className="flex flex-col">
        {/* top part of header */}
        <div className="flex h-[60px] w-screen flex-row justify-evenly bg-blue-700">
          <div className="font-sansSerif content-center pl-[135px] text-3xl text-white">
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
            href="/armedConflict"
            className="hover: hover:bg-white hover:text-blue-900"
          >
            ARMED CONFLICT
          </Link>
          <Link
            href="/science"
            className="hover: hover:bg-white hover:text-blue-900"
          >
            SCIENTISTS
          </Link>
          <Link
            href="/politics"
            className="hover: hover:bg-white hover:text-blue-900"
          >
            POLITICIANS
          </Link>
          <Link
            href="/science"
            className="hover: hover:bg-white hover:text-blue-900"
          >
            BUSINESS
          </Link>
          <Link
            href="/politics"
            className="hover: hover:bg-white hover:text-blue-900"
          >
            OTHERS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
