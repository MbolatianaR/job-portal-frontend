import { Post } from '../models/post.model';

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Développeur Full Stack',
    description: 'Développement frontend en Angular et backend Spring Boot.',
    responsibilities: 'Développer, tester, livrer.',
    qualifications: 'BAC+3 minimum, 2 ans d expérience.',
    location: 'Paris',
    type: 'FULL_TIME',
    salaryMin: 35000,
    salaryMax: 55000,
    experienceLevel: '2-3 ans',
    createdAt: '2025-05-27T10:00:00',
    categoryId: 1
  },
  {
    id: 2,
    title: 'Data Analyst Junior',
    description: 'Analyse de données ESG.',
    responsibilities: 'Créer des rapports PowerBI.',
    qualifications: 'BAC+5, connaissances SQL, Excel.',
    location: 'Lyon',
    type: 'PART_TIME',
    salaryMin: 28000,
    salaryMax: 40000,
    experienceLevel: 'Débutant',
    createdAt: '2025-05-28T09:00:00',
    categoryId: 2
  }
];
