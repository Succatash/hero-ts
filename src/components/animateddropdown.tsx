import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative flex h-5 w-6 flex-col justify-between">
    <span
      className={`block h-[3px] w-full origin-top-left bg-white transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 rotate-45" : ""} `}
    />

    <span
      className={`block h-[3px] w-full bg-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"} `}
    />

    <span
      className={`block h-[3px] w-full origin-bottom-left bg-white transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 -rotate-45" : ""} `}
    />
  </div>
);

const AnimatedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="h-8 self-center rounded-md px-2 outline-none transition-colors">
          <MenuIcon isOpen={isOpen} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48" sideOffset={43} sticky="always">
        <DropdownMenuItem>Programs</DropdownMenuItem>
        <DropdownMenuItem>Our Mission</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AnimatedDropdown;
