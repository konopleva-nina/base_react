export type PostDetail = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Posts = {
  posts: PostDetail[];
};
