import Link from "next/link";
import React from "react";

export default function NavItem() {
  return (
    <ul className="gap-4    flex  flex-col md:flex-row md:gap-10">
      {["home", "about", "login", "contact"].map((link) => (
        <li className="font-semibold uppercase" key={link}>
          <Link href={`/${link === "home" ? "" : link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
