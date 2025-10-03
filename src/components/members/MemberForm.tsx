"use client";
import { Member, Sport } from "@/types";
import { Mail, Phone, User, X, Plus } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import InputField from "../ui/Input";
import { createOrUpdateMember } from "@/actions/members";

interface MemberFormProps {
  onCancel: () => void;
  initialData?: Member | null;
  sports: Sport[];
}

const MemberForm: React.FC<MemberFormProps> = ({ onCancel, initialData, sports }) => {
  const [state, formAction, isPending] = useActionState(
    createOrUpdateMember,
    null
  );
  const [selectedSports, setSelectedSports] = useState<string[]>(
    initialData?.sports || []
  );
  // Remove sport from selection
  const removeSport = (sportName: string) => {
    setSelectedSports(selectedSports.filter((sport) => sport !== sportName));
  };

  // Get available sports (not yet selected)
  const availableSports = sports.filter(
    (sport) => !selectedSports.includes(sport.name)
  );
  const addSport = (sportName: string) => {
    if (!selectedSports.includes(sportName)) {
      setSelectedSports([...selectedSports, sportName]);
    }
  };

  useEffect(() => {
    if (!state) return;
    if (state.errors) {
      if (state.errors && "root" in state.errors) {
        toast.error(state.errors.root);
      } else {
        console.log(state);
        toast.error("Please fix the form errors");
      }
    } else {
      toast.success(initialData?.id ? "Member updated!" : "Member added!");
      onCancel();
    }
  }, [state, initialData, onCancel]);

  return (
    <form action={formAction} className="p-6 space-y-4">
      {initialData?.id && (
        <input type="hidden" name="id" value={initialData.id} />
      )}
      {/* name */}
      <InputField
        label="Name"
        id="firstName"
        placeholder="Enter Member's Full Name"
        icon={<User className="text-gray-700 w-4 h-4" />}
        name="name"
        disabled={isPending}
        defaultValue={initialData?.name || ""}
      />
      {state?.errors &&
        "name" in state.errors &&
        Array.isArray(state.errors.name) &&
        state.errors.name.length > 0 && (
          <div className="p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400">
            {state.errors.name[0]}
          </div>
        )}

      {/* Email */}
      <InputField
        label="E-mail"
        id="email"
        type="email"
        placeholder="Enter Member's E-mail"
        icon={<Mail className="text-gray-700 w-4 h-4" />}
        name="email"
        disabled={isPending}
        defaultValue={initialData?.email || ""}
      />
      {state?.errors &&
        "email" in state.errors &&
        Array.isArray(state.errors.email) &&
        state.errors.email.length > 0 && (
          <div className="p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400">
            {state.errors.email[0]}
          </div>
        )}

      {/* Phone */}
      <InputField
        label="Phone"
        id="phone"
        placeholder="Enter Member's Phone Number"
        icon={<Phone className="text-gray-700 w-4 h-4" />}
        name="phone"
        disabled={isPending}
        defaultValue={initialData?.phone || ""}
      />
      {state?.errors &&
        "phone" in state.errors &&
        Array.isArray(state.errors.phone) &&
        state.errors.phone.length > 0 && (
          <div className="p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400">
            {state.errors.phone[0]}
          </div>
        )}

      {/* sports */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Sports
        </label>
        
        {/* Selected Sports */}
        {selectedSports.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Selected Sports:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSports.map((sport) => (
                <div
                  key={sport}
                  className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-lg border border-primary/20"
                >
                  <span className="text-sm font-medium">{sport}</span>
                  <button
                    type="button"
                    onClick={() => removeSport(sport)}
                    className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                    disabled={isPending}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Sports Dropdown */}
        {availableSports.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Add Sports:</p>
            <div className="flex gap-2">
              <select
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-primary focus:border-transparent"
                onChange={(e) => {
                  if (e.target.value) {
                    addSport(e.target.value);
                    e.target.value = ""; // Reset selection
                  }
                }}
                disabled={isPending}
              >
                <option value="">Select a sport to add...</option>
                {availableSports.map((sport) => (
                  <option key={sport.id} value={sport.name}>
                    {sport.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  const select = document.querySelector('select');
                  if (select?.value) {
                    addSport(select.value);
                    select.value = "";
                  }
                }}
                className="flex items-center gap-2 bg-primary hover:bg-darker-primary 
                         text-white px-4 py-2 rounded-lg font-medium transition-all 
                         duration-200 cursor-pointer disabled:opacity-50"
                disabled={isPending}
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>
        )}

        {availableSports.length === 0 && selectedSports.length > 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All available sports have been selected.
          </p>
        )}

        {sports.length === 0 && (
          <p className="text-sm text-yellow-600 dark:text-yellow-400">
            No sports available. Please add sports first.
          </p>
        )}
      </div>

      {state?.errors?.sports && (
        <div className="p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400">
          {state.errors.sports[0]}
        </div>
      )}

      {state?.errors && "root" in state.errors && (
        <div className="p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400">
          {state.errors.root}
        </div>
      )}

      {/* actions */}
      <div className="flex justify-end gap-3 pt-6 border-t border-border">
        {/* cancel */}
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 border border-border text-foreground rounded-lg 
                     hover:bg-muted transition-all duration-200 font-medium
                     focus:ring-2 focus:ring-ring focus:outline-none
                     disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={isPending}
        >
          Cancel
        </button>
        {/* submit */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-primary hover:bg-darker-primary 
                     text-primary-foreground px-8 py-3 rounded-lg font-medium 
                     transition-all duration-200 hover:shadow-lg 
                     transform hover:-translate-y-0.5 focus:ring-2 focus:ring-ring 
                     focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed
                     disabled:hover:transform-none disabled:hover:shadow-none cursor-pointer"
          disabled={isPending}
        >
          {isPending ? (
            <span className="flex items-center">Saving...</span>
          ) : (
            <span>{initialData?.id ? "Update Member" : "Add Member"}</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
