import { create } from 'zustand';
import { partial } from 'shared/utils/partial';
import { genQueryOpts } from 'shared/utils';
import { API_FIREBASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').PostsStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').PostForCreate} PostForCreate
 * @typedef {import('./types').PostForUpdate} PostForUpdate
 * @typedef {import('./types').PostsStore} Store
 */

/**
 * @function setPostCount
 * @param {Function} set
 * @param {number} postCount
 * @returns {void}
 */

const setPostCount = (set, postCount) => {
  set(/**@type {SetterCallback}*/(store) => ({
    ...store,
    postCount,
  }));
};

/**
 * @function setIsModalOpen
 * @param {Function} set
 * @param {boolean} isModalOpen
 * @returns {void}
 */

const setIsModalOpen = (set, isModalOpen) => {
  set(/**@type {SetterCallback} */(store) => ({
    ...store,
    isModalOpen,
  }));
};

/**
 * @function getPosts
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPosts = async (set, count) => {
  try {
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: true,
      posts: [],
      postsLoadErrorMessage: '',
    }));
    const endPoint = `posts.json?orderBy="timestamp"&limitToLast=${count}`;
    const response = await fetch(`${API_FIREBASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Posts not received');
    const postsFromAPI = await response.json();
    const posts = Object.entries(postsFromAPI)
      .map(([id, postData]) => ({
        id,
        ...postData,
      }))
      .reverse();
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: false,
      posts,
      postsLoadErrorMessage: '',
    }));
  } catch (/**@type {*}*/ error) {
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: false,
      posts: [],
      postsLoadErrorMessage: error.message,
    }));
  };
};

/**
 *@function resetPosts
 * @param {Function} set
 * @returns {void}
 */

const resetPosts = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    posts: [],
  }));
};

/**
 * @function getPostById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getPostById = async (set, id) => {
  try {
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: true,
      post: null,
      postLoadErrorMessage: '',
    }));
    const endPoint = `posts/${id}.json`;
    const response = await fetch(`${API_FIREBASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Photo not received');
    const postFromAPI = await response.json();
    const post = {
      ...postFromAPI,
      id,
    };
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: false,
      post,
      postLoadErrorMessage: '',
    }));
  } catch (/**@type {*}*/ error) {
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: false,
      post: null,
      postLoadErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetPost
 * @param {Function} set
 * @returns {void}
 */

const resetPost = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    post: null,
  }));
};

/**
 *@function createPost
 * @param {Function} set
 * @param {PostForCreate} postForCreate
 * @returns {Promise<void>}
 */
const createPost = async (set, postForCreate) => {
  try {
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostCreating: true,
      isPostCreated: false,
      postCreateErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('POST', postForCreate);
    const endPoint = `posts.json`;
    const queryURL = `${API_FIREBASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to create post');
    console.log(response);
    const resData = await response.json();
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostCreating: false,
      isPostCreated: true,
      postCreateErrorMessage: '',
    }));
  } catch (/**@type {*}*/ error) {
    const message = error.message;
    set(/**@type {SetterCallback} */ (store) => ({
      ...store,
      isPostCreating: false,
      isPostCreated: false,
      postCreateErrorMessage: message,
    }));
    console.log(message);
  };
};

/**
 * @function resetPostCreation
 * @param {Function} set
 * @returns {void}
 */

const resetPostCreation = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isPostCreating: false,
    isPostCreated: false,
    postCreateErrorMessage: '',
  }));
};

/**
 * @function updatePost
 * @param {Function} set
 * @param {PostForUpdate} postForUpdate
 * @returns {Promise<void>}
 */

const updatePost = async (set, postForUpdate) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostUpdating: true,
      isPostUpdated: false,
      postUpdateErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('PUT', postForUpdate);
    const endPoint = `posts/${postForUpdate.id}.json`;
    const queryURL = `${API_FIREBASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    console.log(response);
    if (!response.ok) throw new Error('Failed to update post');
    const resData = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostUpdating: false,
      isPostUpdated: Boolean(resData),
      postUpdateErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostUpdating: false,
      isPostUpdated: false,
      postUpdateErrorMessage: message,
    }));
  };
};

/**
 * @function resetPostUpdate
 * @param {Function} set
 * @returns {void}
 */

const resetPostUpdate = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isPostUpdating: false,
    isPostUpdated: false,
    postUpdateErrorMessage: '',
  }));
};

/**
 * @function deletePost
 * @param {Function} set
 * @param {string} postId
 * @returns {Promise<void>}
 */

const deletePost = async (set, postId) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostDeleting: true,
      isPostDeleted: false,
      postDeleteErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('DELETE');
    const endPoint = `posts/${postId}.json`;
    const queryURL = `${API_FIREBASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to delete post');
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostDeleting: false,
      isPostDeleted: response.ok,
      postDeleteErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostDeleting: false,
      isPostDeleted: false,
      postDeleteErrorMessage: message,
    }));
    console.log(message);
  };
};

/**
 * @function resetPostDeletion
 * @param {Function} set
 * @returns {void}
 */

const resetPostDeletion = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isPostDeleting: false,
    isPostDeleted: false,
    postDeleteErrorMessage: '',
  }));
};

/**
 * @function usePosts
 * @returns {Store}
 */

export const usePosts = create(/**@type {StoreCreator}*/(set) => ({
  /*State for post count */
  postCount: 0,
  setPostCount: partial(setPostCount, set),

  /*State for post Modal */
  isModalOpen: false,
  setIsModalOpen: partial(setIsModalOpen, set),

  /*State for getting posts */
  isPostsLoading: false,
  posts: [],
  postsLoadErrorMessage: '',
  getPosts: partial(getPosts, set),
  resetPosts: partial(resetPosts, set),

  /*State for getting post */
  isPostLoading: false,
  post: null,
  postLoadErrorMessage: '',
  getPostById: partial(getPostById, set),
  resetPost: partial(resetPost, set),

  /*State for create post */
  isPostCreating: false,
  isPostCreated: false,
  postCreateErrorMessage: '',
  createPost: partial(createPost, set),
  resetPostCreation: partial(resetPostCreation, set),

  /* state for update post */
  isPostUpdating: false,
  isPostUpdated: false,
  postUpdateErrorMessage: '',
  updatePost: partial(updatePost, set),
  resetPostUpdate: partial(resetPostUpdate, set),

  /* state for delete post */
  isPostDeleting: false,
  isPostDeleted: false,
  postDeleteErrorMessage: '',
  deletePost: partial(deletePost, set),
  resetPostDeletion: partial(resetPostDeletion, set),
}));
