import SportsSection from "@/components/sports/SportsSection";
import sportsService from "@/services/sports";
import { Volleyball } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Management",
  description: "Manage and explore the various sports offered at our club",
};

const Sports: React.FC = async () => {
  const sports = await sportsService.getSports();

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
    >
      {/* Hero Header */}
      <div className="bg-white dark:bg-card shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className=" mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 px-3 lg:px-0 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Volleyball className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Sports Management
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Manage and explore the various sports offered at our club
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-6 py-6">
        <div className="transition-all duration-300">
          <SportsSection sports={sports} />
        </div>
      </div>
    </div>
  );
};

export default Sports;
