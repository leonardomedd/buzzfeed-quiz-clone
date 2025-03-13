export interface Question {
  text: string;
  options: string[];
  image?: string;
}

export interface Result {
  language: string;
  description: string;
  image: string;
}