import { User } from './user.model';

export interface Job {
  id?: string;
  title: string;
  description: string;
  location: string;
  company : string;
  type: string; // CDI, CDD, Stage, Freelance, etc.
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel?: string;
  postedDate: string;
  recruiter?: User;      // recruteur qui a posté l'offre
  //createdAt?: string;    // ISO date string
}
