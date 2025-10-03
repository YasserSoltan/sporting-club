import Link from "next/link";
import Image from "next/image";
import { Users, Volleyball, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 relative">
                <Image
                  src="/logo.ico"
                  alt="Club Logo"
                  width={150}
                  height={150}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-lighter-primary bg-clip-text text-transparent">
                Club Manager
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Efficiently manage your sports club with our comprehensive management system.
              Handle members, sports, and subscriptions with ease.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/sports">
            <div className="group relative bg-white dark:bg-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-lighter-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-card" />
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-lighter-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Volleyball className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  Sports Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Manage all sports offered at your club. Add new sports, edit existing ones,
                  and organize your sporting activities efficiently.
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Manage Sports</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/members">
            <div className="group relative bg-white dark:bg-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-lighter-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-card" />
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-lighter-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  Members Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Handle club members, their profiles, and sports subscriptions.
                  Add new members and manage their sporting preferences seamlessly.
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Manage Members</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}