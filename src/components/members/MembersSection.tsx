"use client";
import { useModal } from "@/hooks/useModal";
import { Member, Sport } from "@/types";
import { Plus, Search } from "lucide-react";
import MemberTable from "./MemberTable";
import { useState } from "react";
import MemberModal from "./MemberModal";

const MembersSection = ({ members, sports }: { members: Member[], sports: Sport[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const memberModal = useModal();

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle add memberModal
  const handleAddMember = () => {
    setEditingMember(null);
    memberModal.open();
  };

  // Handle edit member
  const handleEditMember = (member: Member) => {
    setEditingMember(member);
    memberModal.open();
  };

  // Handle modal close
  const handleCloseModal = () => {
    memberModal.close();
    setEditingMember(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Member List */}
      <div className="card-background dark:bg-card rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Members
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {members.length} members in your club
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <div className="relative">
              {/* Add Member Button */}
              <button
                onClick={handleAddMember}
                className="btn-gradient flex items-center cursor-pointer space-x-2 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <Plus className="h-5 w-5" />
                <span>Add Member</span>
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
        <MemberTable
          members={filteredMembers}
          onEditMember={handleEditMember}
        />
      </div>
      {/* Modal */}
      <MemberModal
        isOpen={memberModal.isOpen}
        onClose={handleCloseModal}
        editingMember={editingMember}
        sports={sports}
      />
    </div>
  );
};

export default MembersSection;
