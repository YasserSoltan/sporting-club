import { ArrowRight, Users, Volleyball } from "lucide-react";
import Link from "next/link";

const HomeCard = ({ type }: { type: string }) => {
  const title = type === "members" ? "Members Management" : "Sports Management";
  const description =
    type === "members"
      ? " Handle club members, their profiles, and sports subscriptions. Add new members and manage their sporting preferences seamlessly."
      : "Manage all sports offered at your club. Add new sports, edit existing ones, and organize your sporting activities efficiently.";
  return (
    <Link href={`/${type === "members" ? "members" : "sports"}`}>
      <div className="group relative bg-white dark:bg-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-lighter-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-card" />
        </div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-lighter-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
            {type === "members" ? (
              <Users className="w-10 h-10 text-white" />
            ) : (
              <Volleyball className="w-10 h-10 text-white" />
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Manage {type === "members" ? "Members" : "Sports"}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
