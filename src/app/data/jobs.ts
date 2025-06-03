import { Job } from '../models/job.model';
import { MOCK_USERS } from './users';
import { MOCK_COMPANIES } from './companies';

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Développeur Angular',
    description: 'Développement d\'applications front-end en Angular.',
    location: 'Paris',
    type: 'CDI',
    salaryMin: 35000,
    salaryMax: 45000,
    experienceLevel: 'Junior',
    recruiter: MOCK_USERS[1],
    company: MOCK_COMPANIES[0],
    createdAt: '2025-06-01T09:00:00Z'
  },
  {
    id: 2,
    title: 'Analyste financier',
    description: 'Analyse des données financières et reporting.',
    location: 'Lyon',
    type: 'CDD',
    salaryMin: 30000,
    salaryMax: 40000,
    experienceLevel: 'Confirmé',
    recruiter: MOCK_USERS[1],
    company: MOCK_COMPANIES[1],
    createdAt: '2025-05-15T10:30:00Z'
  },
  {
    id: 3,
    title: 'Ingénieur énergie renouvelable',
    description: 'Conception et optimisation des systèmes d\'énergie verte.',
    location: 'Marseille',
    type: 'Stage',
    salaryMin: 18000,
    salaryMax: 22000,
    experienceLevel: 'Débutant',
    recruiter: MOCK_USERS[1],
    company: MOCK_COMPANIES[2],
    createdAt: '2025-06-10T08:00:00Z'
  }
];
