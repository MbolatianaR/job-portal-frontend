import { Job } from '../models/job.model';

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Développeur Frontend Angular',
    description: 'Développement d une application web responsive avec Angular.',
    type: 'CDI',
    location: 'Paris',
    salaryMin: 35000,
    salaryMax: 45000,
    experienceLevel: 'Junior',
    createdAt: ''
  },
  {
    id: 2,
    title: 'Data Analyst',
    description: 'Analyse de données, création de rapports et tableaux de bord.',
    type: 'CDD',
    location: 'Lyon',
    salaryMin: 30000,
    salaryMax: 40000,
    experienceLevel: 'Débutant',
    createdAt: ''
  },
  {
    id: 3,
    title: 'Chef de Projet IT',
    description: 'Gestion de projets techniques, coordination des équipes, suivi client.',
    type: 'CDI',
    location: 'Marseille',
    salaryMin: 45000,
    salaryMax: 55000,
    experienceLevel: 'Confirmé',
    createdAt: ''
  }
];
