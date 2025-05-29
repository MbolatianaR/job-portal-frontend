export interface User {
  id?: number; // optionnel car généré par le backend
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role?: string; 
}
