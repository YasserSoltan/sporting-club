import { z } from "zod";

// Language validation helpers
const isEnglish = (str: string) => /^[a-zA-Z0-9\s.,!?'"-]+$/.test(str);

export const memberSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .refine((val) => isEnglish(val), "Must contain only English characters"),
  email: z.email("Invalid email address").optional(),
  phone: z
    .string()
    .refine(
      (val) => !val || /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g.test(val),
      "Invalid phone number"
    ),
  sports: z.array(z.string()).optional(),
});

export type MemberFormInputs = z.infer<typeof memberSchema>;
