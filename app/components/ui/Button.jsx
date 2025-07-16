"use client";
import Link from "next/link";
import clsx from "clsx";

export default function Button({ children, href, onClick, variant = "primary", className = "", ...props }) {
  const baseStyle =
    "inline-block px-6 py-2 rounded-2xl text-sm font-semibold transition-all shadow-sm";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
  };

  const styles = clsx(baseStyle, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
}
