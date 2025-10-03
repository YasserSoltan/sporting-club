import MembersSection from "@/components/members/MembersSection";
import memberServices from "@/services/member";
import sportsService from "@/services/sports";
import { type Member } from "@/types/member";
import { Sport } from "@/types/sport";
import { Users } from "lucide-react";

const Member = async () => {
  const members: Member[] = await memberServices.getMembers();
  const sports: Sport[] = await sportsService.getSports();
  // console.log('API URL:', `${process.env.DATABASE_URL}/members`);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Header */}
      <div className="bg-white dark:bg-card shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-darker-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Member Management
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Manage your club members efficiently and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MembersSection members={members} sports={sports} />
    </div>
  );
};

export default Member;
