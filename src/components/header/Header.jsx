import React from "react";
import ProfileMenu from "./ProfileMenu";
import Search from "./Search";

export default function Header() {
  return (
    <header className="py-2 bg-white z-20 sticky top-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <Search />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
