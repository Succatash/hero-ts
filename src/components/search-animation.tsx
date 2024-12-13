"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const AnimatedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center justify-end">
      <div
        className={`absolute h-10 overflow-hidden rounded-full bg-gray-100 transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-10"} `}
      >
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className={`h-full bg-transparent pl-4 outline-none transition-all duration-500 ${isOpen ? "w-[calc(100%-40px)] opacity-100" : "w-0 opacity-0"} `}
        />
        <div
          className={`absolute right-0 top-0 flex h-10 w-10 items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0 transform" : "translate-x-0 transform"} `}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-full w-full items-center justify-center rounded-full transition-colors hover:bg-gray-200"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSearch;
