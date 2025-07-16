"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Főoldal", path: "/" },
  { name: "Rólunk", path: "/about" },
  { name: "Szolgáltatások", path: "/services" },
  { name: "Időpont Foglalás", path: "/booking" },
  { name: "Kapcsolat", path: "/contact" },
  { name: "ADM Panel", path: "/admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-xl shadow-sm">
      {/* brand‑színű felső csík */}
      <span className="bg-orange-500 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 pointer-events-none absolute inset-x-0 top-0 h-1" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* logó + cégnév gradient szöveggel */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
          <Wrench size={32} className="text-primary drop-shadow-sm text-orange-500" />
          <span className="text-xl font-bold text-foreground">
            SN Autotechnika Kft.
          </span>
        </Link>

        {/* desktop menü */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                "group relative text-lg font-medium transition",
                pathname === link.path ? "text-primary" : "text-black hover:text-orange-500/80"
              )}
            >
              {link.name}
              {/* animált aláhúzás */}
              <span className="bg-black absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* mobil menü kapcsoló */}
        <button
          className="md:hidden rounded-md p-2 transition hover:bg-black"
          onClick={() => setOpen(!open)}
          aria-label="Mobil menü kapcsoló"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobil menü – lehulló animáció max-height váltással */}
      <div
        className={clsx(
          "md:hidden overflow-hidden bg-white/80 backdrop-blur-xl transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "block px-4 py-3 text-lg font-medium border-t border-gray-200",
              pathname === link.path ? "text-primary" : "text-gray-800 hover:text-primary"
            )}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}