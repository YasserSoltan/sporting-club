import { MemberFormInputs } from "@/utils/validations/member";

const memberService = {
  // get all members
  getMembers: async () => {
    const res = await fetch(`${process.env.DATABASE_URL}/members`, {
      cache: "no-store",
    });
    return res.json();
  },
  // get single member
  getMemberById: async (memberId: string) => {
    const res = await fetch(`${process.env.DATABASE_URL}/members/${memberId}`, {
      cache: "no-store",
    });
    return res.json();
  },

  // create member
  createMember: async (data: MemberFormInputs) => {
    const res = await fetch(`${process.env.DATABASE_URL}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // update member
  updateMember: async ({
    id,
    data,
  }: {
    id: string;
    data: MemberFormInputs;
  }) => {
    const res = await fetch(`${process.env.DATABASE_URL}/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // delete member
  deleteMember: async (memberId: string) => {
    const res = await fetch(`${process.env.DATABASE_URL}/members/${memberId}`, {
      method: "DELETE",
    });
    return res.json();
  },
};

export default memberService;
