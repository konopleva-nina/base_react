export type PostFromAPI = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsStore = {
  /*Post count state */
  postCount: number;
  setPostCount: (postCount: number) => void;
  /*Posts state*/
  isPostsLoading: boolean;
  posts: PostFromAPI[] | [];
  postsErrorMessage: string;
  getPosts: (postCount: number) => void;
  resetPosts: () => void;
  /*Post state */
  isPostLoading: boolean;
  post: PostFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string) => void;
  resetPost: () => void;
};

export type SetterCallback = (store: PostsStore) => PostsStore;
export type PostsStoreCreator = (set: Function) => PostsStore;
