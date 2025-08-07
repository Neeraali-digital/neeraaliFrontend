export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}