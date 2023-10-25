import React from "react";

export default function Header() {
  return (
    <header className="fixed z-20 bg-white top-0 w-full py-4 px-6">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          width={130}
          height={130}
          alt="carty logo"
          className="h-[60px] w-[60px] object-contain"
        />
        <div className="text-primary-500">
          <span className="block leading-4 font-bold ">كارتي</span>
          <span className="block leading-4 font-bold ">carty</span>
        </div>
      </div>
    </header>
  );
}
