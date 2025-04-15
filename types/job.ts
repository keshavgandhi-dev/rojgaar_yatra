export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string;
  responsibilities: string;
  qualification: string;
  experience: string;
  ageRange: {
    min: number;
    max: number;
  };
  salary: {
    min: number;
    max: number;
  };
  postedDate: string;
  lastDate: string;
  vacancies: number;
  jobType: 'permanent' | 'contract' | 'temporary';
  status: 'draft' | 'published' | 'closed';
  applicationCount: number;
}

// Helper type for creating a new job (without id and with optional fields)
export type NewJob = Omit<Job, 'id' | 'applicationCount'> & {
  postedDate?: string;
};

// Helper type for job card display
export interface JobCardInfo {
  id: string;
  title: string;
  department: string;
  lastDate: string;
  vacancies: number;
  qualification: string;
  status: Job['status'];
} 