import { UserForAuth } from './user';

export interface Comment {
  _id: string;
  text: string;
  created_at: string;
  user: UserForAuth;  
}