import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
  {
    id: 1,
    firstName: 'Tiana',
    lastName: 'Rakoto',
    email: 'tiana@example.com',
    phone: '0600000000',
    role: 'CANDIDATE'
  },
  {
    id: 2,
    firstName: 'Jennifer',
    lastName: 'Dupont',
    email: 'jennifer@example.com',
    phone: '0700000000',
    role: 'CANDIDATE'
  }
];
