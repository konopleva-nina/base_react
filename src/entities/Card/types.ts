export type PhotoDetails = {
  id: number;
  name: string;
  image: string;
};

export type TodoDetails = {
  id: number;
  name: string;
};

export type PostDetail = {
  id: number;
  name: string;
  text: string;
};

export type Card = {
  Photo: (props: PhotoDetails) => JSX.Element | null;
  Todo: (props: TodoDetails) => JSX.Element | null;
  Post: (props: PostDetail) => JSX.Element | null;
};
