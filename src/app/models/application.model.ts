import { User } from './user.model';
import { Job } from './job.model';

export interface Application {
  id?: number;
  user: User;          // candidat
  job: Job;
  skills?: string;
  experiences?: string;
  appliedAt?: string;  // ISO date string
  status?: 'en_cours' | 'acceptée' | 'refusée';
  createdAt?: string;
  updatedAt?: string;
}
