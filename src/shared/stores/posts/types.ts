/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

/**********************************************
  Post types
**********************************************/

export type PostForCreate = {
  userId: string;
  title: string;
  body: string;
  timestamp: number;
};

export type PostForUpdate = {
  userId: string;
  id: string;
  title: string;
  body: string;
  timestamp: number;
};

export type PostForDelete = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

/**********************************************
  Store types
**********************************************/

export type PostsStore = {

  /*Post count state */

  postCount: number;
  setPostCount: (postCount: number) => void;

  /*Modal state */
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;

  /*Posts state*/

  isPostsLoading: boolean;
  posts: PostFromAPI[] | [];
  postsLoadErrorMessage: string;
  getPosts: (postCount: number) => void;
  resetPosts: () => void;

  /*Post state */

  isPostLoading: boolean;
  post: PostFromAPI | null;
  postLoadErrorMessage: string;
  getPostById: (postId: string) => void;
  resetPost: () => void;

  /*Creating post state */

  isPostCreating: boolean;
  isPostCreated: boolean;
  postCreateErrorMessage: string;
  createPost: (postForCreate: PostForCreate) => void;
  resetPostCreation: () => void;

  /*Updating post state */

  isPostUpdating: boolean;
  isPostUpdated: boolean;
  postUpdateErrorMessage: string;
  updatePost: (postForUpdate: PostForUpdate) => void;
  resetPostUpdate: () => void;

  /*Deleting post state */

  isPostDeleting: boolean;
  isPostDeleted: boolean;
  postDeleteErrorMessage: string;
  deletePost: (postId: string) => void;
  resetPostDeletion: () => void;
};

export type SetterCallback = (store: PostsStore) => PostsStore;
export type PostsStoreCreator = (set: Function) => PostsStore;

/**********************************************/
