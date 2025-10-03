import { z } from "zod";

// Language validation helpers
const isEnglish = (str: string) => /^[a-zA-Z0-9\s.,!?'"-]+$/.test(str);

export const sportSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .refine((val) => isEnglish(val), "Must contain only English characters"),

  description: z
    .string()
    .optional()
    .refine(
      (val) => !val || isEnglish(val),
      "Must contain only English characters"
    ),
  type: z.enum(["individual", "team"]),
});

export type SportFormInputs = z.infer<typeof sportSchema>;
