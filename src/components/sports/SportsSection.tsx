"use client";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { Sport } from "@/types";
import SportsCard from "./SportsCard";
import SportsModal from "./SportsModal";

const SportsSection = ({ sports }: { sports: Sport[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingSport, setEditingSport] = useState<Sport | null>(null);
  const sportModal = useModal();

  const filteredSports = sports.filter((sport) =>
    sport.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle add sport
  const handleAddSport = () => {
    setEditingSport(null);
    sportModal.open();
  };

  // Handle edit sport
  const handleEditSport = (sport: Sport) => {
    setEditingSport(sport);
    sportModal.open();
  };

  // Handle modal close
  const handleCloseModal = () => {
    sportModal.close();
    setEditingSport(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-card shadow-sm border-b border-gray-200 dark:border-gray-700 mb-6">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Available Sports
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {sports.length} sports available in our club
              </p>
            </div>
            <button
              onClick={handleAddSport}
              className="flex items-center gap-2 bg-primary hover:bg-darker-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              Add Sport
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for Sport"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Sports Grid */}
          <div className="p-6">
            {filteredSports.length > 0 ? (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
              >
                {filteredSports.map((sport: Sport) => (
                  <SportsCard
                    key={sport.id}
                    sport={sport}
                    onEdit={handleEditSport}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No sports found
              </p>
            )}
          </div>
        </div>
      </div>
      <SportsModal
        isOpen={sportModal.isOpen}
        onClose={handleCloseModal}
        editingSport={editingSport}
      />
    </div>
  );
};

export default SportsSection;
