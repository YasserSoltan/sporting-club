import Image from "next/image";
import Footer from "@/components/Footer";
import HomeCard from "@/components/HomeCard";

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
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Club Manager
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Efficiently manage your sports club with our comprehensive
              management system. Handle members, sports, and subscriptions with
              ease.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HomeCard type="sports" />
          <HomeCard type="members" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
