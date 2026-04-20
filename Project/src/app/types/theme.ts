import { Post } from './post';
import { User } from './user';

export interface Theme {
  subscribers: string[];
  posts: Post[];
  _id: string;
  themeName: string;
  userId: string; 
  created_at: string;
  updatedAt: string;
  __v: number;
}