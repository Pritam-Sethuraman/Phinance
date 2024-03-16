"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

const items = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Expenses", link: "/expenses" },
  { name: "Income", link: "/income" },
];

type Props = {};

function Navbar({}: Props) {
  const path = usePathname();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <nav className="fixed top-10 w-full ">
      <div className="flex items-center justify-between mx-20">
        <div>
          <Link
            href="/"
            className="flex gap-2 rounded-3xl py-2 px-4 bg-accent shadow-md"
          >
            <Image
              src={Logo}
              alt="Logo"
              height={24}
              width={24}
              className={theme == "dark" ? "invert-0" : "invert"}
            />
            Phinance
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-2">
          {items.map((item) => (
            <li
              key={item.name}
              className={
                path === item.link
                  ? "rounded-3xl py-2 px-4 bg-accent shadow-md"
                  : "rounded-3xl py-2 px-4 text-gray-500"
              }
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
