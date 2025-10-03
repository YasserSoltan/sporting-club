"use server";

import { revalidatePath } from "next/cache";

import { sportSchema } from "@/utils/validations/sport";
import sportsService from "@/services/sports";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createOrUpdateSport(prevState: any, formData: FormData) {
  const sportId = formData.get("id") as string | null;
  const isEdit = !!sportId;
  let res;

  const validatedFields = sportSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    if (isEdit) {
      res = await sportsService.updateSport({ ...validatedFields.data, id: sportId });
    } else {
      res = await sportsService.createSport(validatedFields.data);
    }
    revalidatePath("/sports", "page");
    return res;
  } catch (error) {
    console.log(error)
    return {
      errors: { root: "Failed to save sport" },
    };
  }
}

export async function deleteSport(sportId: string) {
  await sportsService.deleteSport(sportId);
  revalidatePath("/sports", "page");
}