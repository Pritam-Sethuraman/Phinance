"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Logo from "./logo";
import UserButton from "./user-btn";

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
    <header className="z-50">
      <nav className="flex flex-col sm:flex-row items-center justify-between p-10 max-w-7xl mx-auto">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-2">
          <ul className="flex">
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
          <UserButton />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
