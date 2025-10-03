/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import memberService from "@/services/member";
import { memberSchema } from "@/utils/validations/member";
import { revalidatePath } from "next/cache";

export async function createOrUpdateMember(prevState: any, formData: FormData) {
  const memberId = formData.get("id") as string | null;
  const isEdit = !!memberId;
  const sportsJson = formData.get("sports") as string;
  const sports = sportsJson ? JSON.parse(sportsJson) : [];
  let res;

  const validatedFields = memberSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    sports: sports,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    if (isEdit) {
      res = await memberService.updateMember({
        id: memberId,
        data: validatedFields.data,
      });
    } else {
      res = await memberService.createMember(validatedFields.data);
    }
    revalidatePath("/members", "page");
    return res;
  } catch (error) {
    console.log(error)
    return {
      errors: { root: "Failed to save member" },
    };
  }
}

// delete Member
export async function deleteMember(memberId: string) {
  await memberService.deleteMember(memberId);
  revalidatePath("/members", "page");
}
