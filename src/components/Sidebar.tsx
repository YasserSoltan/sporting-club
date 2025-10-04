import { type JSX } from "react";
import {
  Users,
  type LucideIcon,
  Volleyball,
} from "lucide-react";
import NavItem from "./NavItem";
import Image from "next/image";

interface SidebarTabs {
  title: string;
  to: string;
  icon: React.ReactElement<LucideIcon>;
}

const tabs: SidebarTabs[] = [
  { title: "Sports", to: "/sports", icon: <Volleyball /> },
  { title: "Members", to: "/members", icon: <Users /> },
];

export default function DashboardSidebar(): JSX.Element {
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <aside className="bg-base-200 text-base-content min-h-full w-70 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-base-300">
            <div className="flex items-center justify-center gap-1">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.ico"
                  alt="Club Logo"
                  width={35}
                  height={35}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="menu gap-2">
              {tabs.map((tab: SidebarTabs) => (
                <NavItem
                  key={tab.title}
                  icon={tab.icon}
                  title={tab.title}
                  path={tab.to}
                />
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
