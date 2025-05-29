import { User } from './user.model';
import { Job } from './job.model';

export interface Application {
  id?: number;
  skills: string;
  experiences: string;
  appliedAt?: string; // généré côté backend
  user: User;
  job: Job;
}
