export interface Post {
  id?: number;
  title: string;
  description: string;
  responsibilities?: string;
  qualifications?: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  experienceLevel: string;
  createdAt?: string;
  categoryId: number;
}
