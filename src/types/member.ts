export interface Member {
  id: string;
  name: string;
  email: string;
  phone?: string;
  sports?: string[]; // Array of sport IDs
}