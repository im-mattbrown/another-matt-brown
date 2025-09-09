"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/case-studies", label: "Case Studies", className: "nav-case" },
    { href: "/approach", label: "Approach", className: "nav-approach" },
    { href: "/contact", label: "Contact", className: "nav-contact" },
  ];

  return (
    <nav className="">
      <div className="">
        <div className="flex justify-between items-center py-8">
          <Link href="/" className="text-xl font-bold">
            <img style={{ height: "40px" }} src="/images/logos/mattLogo.png" alt="Logo" />
          </Link>

          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${item.className || ''} hover:nav-active transition-colors font-medium ${
                    pathname === item.href
                      ? "text-blue-600 nav-active font-medium"
                      : "text-gray-700 nav-inactive"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}