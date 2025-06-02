// application.model.ts
import { User } from './user.model';
import { Job } from './job.model';

export interface Application {
  id?: number;
  skills: string;
  experiences: string;
  appliedAt?: string;      // date générée côté backend
  user: User;              // utilisateur connecté
  job: Job;
}