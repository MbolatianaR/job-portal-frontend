import { Application } from '../models/application.model';

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 1,
    firstName: 'Tiana',
    lastName: 'Rakoto',
    email: 'tiana@example.com',
    phone: '0600000000',
    skills: 'Angular, Spring, SQL',
    experiences: 'Stage de 6 mois chez BNP Paribas en développement web',
    appliedAt: '2025-05-28T15:30:00',
    postId: 1
  },
  {
    id: 2,
    firstName: 'Jennifer',
    lastName: 'Lemoine',
    email: 'jennifer@example.com',
    phone: '0700000000',
    skills: 'Excel, Power BI, Python',
    experiences: 'Alternance Data chez Capgemini',
    appliedAt: '2025-05-28T16:00:00',
    postId: 2
  }
];
