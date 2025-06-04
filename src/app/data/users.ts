import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
  {
    id: "1",
    firstName: 'Alice',
    lastName: 'Durand',
    email: 'alice.durand@example.com',
    phone: '0612345678',
    role: 'candidate'
  },
  {
    id: "2",
    firstName: 'Bob',
    lastName: 'Martin',
    email: 'bob.martin@example.com',
    phone: '0698765432',
    role: 'recruiter'
  },
  {
    id: "3",
    firstName: 'Clara',
    lastName: 'Lemoine',
    email: 'clara.lemoine@example.com',
    phone: '0687654321',
    role: 'candidate'
  }
];
