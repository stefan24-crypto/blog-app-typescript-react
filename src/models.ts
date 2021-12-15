import { Timestamp } from "@firebase/firestore";

export interface Comment {
  id: string;
  text: string;
  commentedBy: string;
  time: Timestamp;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  image: string;
  time: Timestamp;
  description: string;
  category: string;
  profilePic: string;
  article: string[];
  comments: Comment[];
}
