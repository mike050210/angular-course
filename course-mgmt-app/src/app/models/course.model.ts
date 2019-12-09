import {Author} from './author.model';

export interface Course {
  id: string;
  title: string;
  description: string;
  rating: number;
  creationDate: Date;
  authors: Author[];
  duration: number;
  language: string;
}
