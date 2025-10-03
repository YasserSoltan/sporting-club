"use client";
import { Sport } from "@/types/sport";
import { useActionState, useEffect } from "react";
import { createOrUpdateSport } from "@/actions/sports";
import InputField from "../ui/Input";
import SelectField from "../ui/Select";
import toast from "react-hot-toast";
import ErrorDisplay from "../ErrorDisplay";
import FieldError from "../FieldError";

interface SportFormProps {
  initialData?: Sport | null;
  onCancel: () => void;
  error?: string | Error;
}

const SportsForm: React.FC<SportFormProps> = ({ initialData, onCancel }) => {
  const [state, formAction, isPending] = useActionState(
    createOrUpdateSport,
    null
  );

  useEffect(() => {
    if (!state) return;
    if (state.errors) {
      if (state.errors && "root" in state.errors) {
        toast.error(state.errors.root);
      } else {
        console.log(state)
        toast.error("Please fix the form errors");
      }
    } else {
      toast.success(initialData?.id ? "Sport updated!" : "Sport created!");
      onCancel();
    }
  }, [state, initialData, onCancel]);

  return (
    <div className="min-h-full rounded-lg">
      <form action={formAction} className="space-y-6 p-2">
        {/* Hidden field for ID in edit mode */}
        {initialData?.id && (
          <input type="hidden" name="id" value={initialData.id} />
        )}
        {/* Name Fields Section */}
        <div className="card-background p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            Sport Name
          </h3>
          <div className="space-y-4">
            <InputField
              label="Sport Name (EN)"
              id="name"
              type="text"
              name="name"
              disabled={isPending}
              defaultValue={initialData?.name || ""}
              placeholder="Sport Name (EN)"
            />
            <FieldError errors={state?.errors} fieldName="name" />
          </div>
        </div>

        {/* Description Fields Section */}
        <div className="card-background p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-secondary rounded-full"></div>
            Sport Description
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="description-en"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Sport Description (EN)
              </label>
              <textarea
                id="description-en"
                name="description"
                defaultValue={initialData?.description || ""}
                rows={3}
                className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground 
                          focus:ring-2 focus:ring-primary focus:border-primary 
                          transition-all duration-200 resize-none
                          hover:border-primary/60 shadow-sm"
                placeholder="Sport Description (EN)"
                disabled={isPending}
              />
            </div>
            <FieldError errors={state?.errors} fieldName="description" />
          </div>
        </div>

        {/* Type Fields Section */}
        <div className="card-background p-6 rounded-xl border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-accent rounded-full"></div>
            Sport Type
          </h3>
          <div className="space-y-4">
            <SelectField
              label="Sport Type"
              id="type"
              disabled={isPending}
              name="type"
              defaultValue={initialData?.type || "individual"}
            >
              <option value="">Select Sport Type</option>
              <option value="individual">Individual</option>
              <option value="team">Team</option>
            </SelectField>
            <FieldError errors={state?.errors} fieldName="type" />
          </div>
        </div>

        {/* Server errors section */}
        {state?.errors?.root && (
          <ErrorDisplay errors={state.errors.root} />
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-border">
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
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving...
              </span>
            ) : initialData?.id ? (
              "Update"
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SportsForm;
