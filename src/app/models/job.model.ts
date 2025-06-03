import { User } from './user.model';
import { Company } from './company.model';

export interface Job {
  id?: number;
  title: string;
  description: string;
  location: string;
  type: string; // CDI, CDD, Stage, Freelance, etc.
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel?: string;
  recruiter?: User;      // recruteur qui a posté l'offre
  company?: Company;     // entreprise liée à l'offre
  createdAt?: string;    // ISO date string
}
