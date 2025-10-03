export interface Sport {
  id: string;
  name: string;
  type: "individual" | "team";
  description?: string;
}