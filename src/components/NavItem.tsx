"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

const NavItem = ({
  title,
  icon,
  path,
}: {
  title: string;
  icon: React.ReactElement<LucideIcon>;
  path: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li key={title}>
      <Link
        href={path}
        className={`flex gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-50 ${
          isActive
            ? "btn-gradient text-primary-content shadow-sm"
            : "text-base-content hover:bg-base-300 hover:text-base-content"
        }`}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="capitalize">{title}</span>
      </Link>
    </li>
  );
};
export default NavItem;
