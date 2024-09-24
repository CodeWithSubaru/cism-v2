import useHash from "@/hooks/useHash";
import { Link as LinkURL } from "@/types/link.types";
import Link from "next/link";
import * as React from "react";

function NavigationLink({ link }: { link: LinkURL }) {
  const hash = useHash();
  let isActiveLink = hash === link.href ? "active" : "";

  if (hash === "" && link.href === "#home") {
    isActiveLink = "active";
  }

  return (
    <li className="inline-flex flex-nowrap text-nowrap">
      <Link href={link.href} className={isActiveLink + ""}>
        {link.title}
      </Link>
    </li>
  );
}

export default NavigationLink;
