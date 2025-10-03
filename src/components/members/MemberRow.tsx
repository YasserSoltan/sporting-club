"use client";
import { Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { deleteMember } from "@/actions/members";
import toast from "react-hot-toast";
import { Member } from "@/types/member";

interface MemberRowProps {
  member: Member;
  onEditMember?: (member: Member) => void;
}

const MemberRow: React.FC<MemberRowProps> = ({ member, onEditMember }) => {
  const handleEdit = () => {
    if (onEditMember) {
      onEditMember(member);
    }
  };
  const handleDeleteMember = async (member: Member) => {
    const result = await Swal.fire({
      title: `Delete ${member.name}?`,
      text: "Are you sure you want to delete this member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton:
          "bg-primary hover:bg-darker-primary p-4 rounded-xl mx-2 text-primary-foreground cursor-pointer",
        cancelButton:
          "bg-destructive hover:bg-destructive/80 p-4 rounded-xl text-primary-foreground cursor-pointer",
      },
      buttonsStyling: false,
    });
    if (result.isConfirmed) {
      try {
        await deleteMember(member.id);
        toast.success(`${member.name} has been deleted successfully`);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
            {member.name.charAt(0)}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {member.name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-200">
          {member.email}
        </div>
      </td>

      <td>
        <div className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
          {member.phone || "N/A"}
        </div>
      </td>

      <td>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-gradient text-white border-none shadow-sm hover:shadow-md transition-all rounded-2xl duration-300 m-1 ms-3"
          >
            Sports
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white border-2 border-menu-secondary rounded-lg z-100 w-52 p-2 shadow-lg"
          >
            {member.sports && member.sports.length > 0 ? (
              member.sports.map((sport) => (
                <li key={sport}>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {sport}
                  </span>
                </li>
              ))
            ) : (
              <li>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  No sports assigned
                </span>
              </li>
            )}
          </ul>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => handleDeleteMember(member)}
            className={`
                flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                font-medium text-sm transition-all duration-200
                bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400
                hover:bg-red-500 hover:text-white
                border border-red-200 dark:border-red-800 hover:border-red-500
                disabled:opacity-50 disabled:cursor-not-allowed
                group/delete cursor-pointer
              `}
          >
            <Trash2 className="w-4 h-4 group-hover/delete:scale-110 transition-transform" />
            <span>Delete</span>
          </button>
          <button
            onClick={handleEdit}
            className={`
                flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                font-medium text-sm transition-all duration-200
                bg-primary/10 text-primary hover:bg-primary hover:text-white
                border border-primary/20 hover:border-primary
                disabled:opacity-50 disabled:cursor-not-allowed
                group/edit cursor-pointer
              `}
          >
            <Edit className="w-4 h-4 group-hover/edit:scale-110 transition-transform" />
            <span>Edit</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MemberRow;
