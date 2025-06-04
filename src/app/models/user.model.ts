export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password?: string;  // optionnel côté frontend, souvent on ne garde pas le mdp après connexion
  role: 'candidate' | 'recruiter';
}
