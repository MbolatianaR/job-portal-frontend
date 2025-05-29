import { Application } from '../models/application.model';
import { MOCK_USERS } from './users';
import { MOCK_JOBS } from './jobs';

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 1,
    skills: 'Angular, Java, Spring Boot',
    experiences: 'Stage 6 mois chez Capgemini',
    appliedAt: '2025-05-26T14:00:00',
    user: MOCK_USERS[0],
    job: MOCK_JOBS[0]
  },
  {
    id: 2,
    skills: 'SQL, Excel, Power BI',
    experiences: 'Alternance Data Analyst',
    appliedAt: '2025-05-27T10:00:00',
    user: MOCK_USERS[1],
    job: MOCK_JOBS[1]
  }
];
