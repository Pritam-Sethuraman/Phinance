"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Logo from "./logo";
import UserButton from "./user-btn";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "./them-toggle";
import AuthButton from "./auth-btn";

const items = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Expenses", link: "/expenses" },
  { name: "Income", link: "/income" },
];

type Props = {};

function Navbar({}: Props) {
  const path = usePathname();
  const { theme } = useTheme();
  const { data: session } = useSession();

  return (
    <header className="z-50">
      {session ? (
        <>
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
        </>
      ) : (
        <>
          <nav className="flex flex-col sm:flex-row items-center justify-between p-10 max-w-7xl mx-auto">
            <div>
              <Logo />
            </div>
            <div className="flex items-center justify-center gap-2">
              <AuthButton text={"Sign In"} />
              <ThemeToggle />
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar;
