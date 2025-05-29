import { Job } from '../models/job.model';

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Développeur Java',
    description: 'Développement backend Spring Boot',
    location: 'Paris',
    type: 'FULL_TIME',
    salaryMin: 35000,
    salaryMax: 50000,
    experienceLevel: '2-3 ans',
    createdAt: '2025-05-25T10:00:00'
  },
  {
    id: 2,
    title: 'Data Analyst',
    description: 'Analyse de données ESG',
    location: 'Lyon',
    type: 'PART_TIME',
    salaryMin: 28000,
    salaryMax: 40000,
    experienceLevel: 'Débutant',
    createdAt: '2025-05-24T09:00:00'
  }
];
