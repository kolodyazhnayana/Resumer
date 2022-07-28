export interface ResumeData {
  data: Data;
}

export interface Data {
  name: string;
  position: string;
  email: string;
  experience: string;
  phone: string;
  skills: string[];
  education?: string;
}
