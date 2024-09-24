"use client";
import * as React from "react";
import NavigationLink from "../navigationLink";
import { links } from "@/data/links";

function Navigation() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <NavigationLink key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
