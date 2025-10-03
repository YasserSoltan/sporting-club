import { deleteSport } from "@/actions/sports";
import { Sport } from "@/types";
import { Edit, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface SportsCardProps {
  sport: Sport;
  onEdit?: (sport: Sport) => void;
}

const SportsCard: React.FC<SportsCardProps> = ({ sport, onEdit }) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(sport);
    }
  };

  const handleDelete = async (sport: Sport) => {
    const result = await Swal.fire({
      title: `Delete ${sport.name}?`,
      text: "Are you sure you want to delete this Sport?",
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
        await deleteSport(sport.id);
        toast.success(`${sport.name} Category has been deleted successfully`);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <div
        className={`
          relative bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out
          transform hover:-translate-y-1 group overflow-hidden h-full flex flex-col
        `}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div
          className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600`}
        />
        <div className="relative z-10 flex flex-col h-full ">
          {/* Header */}
          <div className="flex justify-between items-start mb-4 min-h-[72px]">
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                {sport.name}
              </h3>
              {sport.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {sport.description}
                </p>
              )}
            </div>
          </div>

          {/* Action buttons - pushed to bottom */}
          <div className="flex gap-3 mt-auto h-[44px]">
            <button
              onClick={handleEdit}
              className={`
                flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg
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

            <button
              onClick={() => handleDelete(sport)}
              className={`
                flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCard;
