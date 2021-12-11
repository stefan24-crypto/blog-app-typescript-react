interface Comment {
  id: string;
  text: string;
  commentedBy: string;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  image: string;
  time: Date;
  description: string;
  category: string;
  profilePic: string;
  article: string[];
  comments: Comment[];
}
