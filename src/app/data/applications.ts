import { Application } from '../models/application.model';
import { MOCK_USERS } from './users';
import { MOCK_JOBS } from './jobs';

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 1,
    user: MOCK_USERS[0], // Alice (candidate)
    job: MOCK_JOBS[0],   // Développeur Angular
    skills: 'Angular, TypeScript',
    experiences: 'Stage de 6 mois en développement web',
    appliedAt: '2025-06-02T14:00:00Z',
    status: 'en_cours',
    createdAt: '2025-06-02T14:00:00Z',
    updatedAt: '2025-06-02T14:00:00Z'
  },
  {
    id: 2,
    user: MOCK_USERS[2], // Clara (candidate)
    job: MOCK_JOBS[1],   // Analyste financier
    skills: 'Excel, Power BI',
    experiences: 'Alternance 1 an en finance',
    appliedAt: '2025-06-05T09:30:00Z',
    status: 'refusée',
    createdAt: '2025-06-05T09:30:00Z',
    updatedAt: '2025-06-10T10:00:00Z'
  },
  {
    id: 3,
    user: MOCK_USERS[0], // Alice (candidate)
    job: MOCK_JOBS[2],   // Ingénieur énergie renouvelable
    skills: 'Analyse énergétique, Matlab',
    experiences: 'Projet universitaire sur l\'énergie solaire',
    appliedAt: '2025-06-12T11:00:00Z',
    status: 'acceptée',
    createdAt: '2025-06-12T11:00:00Z',
    updatedAt: '2025-06-15T08:00:00Z'
  }
];
