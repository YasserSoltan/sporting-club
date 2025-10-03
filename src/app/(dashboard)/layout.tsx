import { type JSX } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="drawer lg:drawer-open bg-gray-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-100 shadow-sm lg:hidden sticky top-0 z-50">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <Menu className="mr-2" />
            </label>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">{children}</div>
      </div>

      <Sidebar />
    </div>
  );
}
