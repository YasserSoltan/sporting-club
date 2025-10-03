import { SportFormInputs } from "@/utils/validations/sport";

const sportsService = {
  // get all sports
  getSports: async () => {
    const res = await fetch(`${process.env.DATABASE_URL}/sports`, {
      cache: "no-store",
    });
    return res.json();
  },
  // get single sport
  getSportById: async (sportId: string) => {
    const res = await fetch(`${process.env.DATABASE_URL}/sports/${sportId}`, {
      cache: "no-store",
    });
    return res.json();
  },
  // create sport
  createSport: async (data: SportFormInputs) => {
    const res = await fetch(`${process.env.DATABASE_URL}/sports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // update sport
  updateSport: async ({
    id,
    name,
    description,
    type,
  }: {
    id: string;
    name: string;
    description?: string;
    type: "individual" | "team";
  }) => {
    const res = await fetch(`${process.env.DATABASE_URL}/sports/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, type }),
    });
    return res.json();
  },
  // delete sport
  deleteSport: async (sportId: string) => {
    const res = await fetch(`${process.env.DATABASE_URL}/sports/${sportId}`, {
      method: "DELETE",
    });
    return res.json();
  },
};

export default sportsService;
