import style from './Editor.module.scss';
import { UilRedo } from '@iconscout/react-unicons';
import { UilCancel } from '@iconscout/react-unicons';
import { Modal } from 'entities/index';
import { useEffect, useState } from 'react';
import { DEFAULT_USER_ID } from 'shared/config';
import { usePosts } from 'shared/stores';
import { Button, Input } from 'shared/ui';

/**
 * @typedef {import('./types').EditorProps} EditorProps
 * @typedef {import('./types').ChangeInputEvent} ChangeInputEvent
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Editor
 * @param {EditorProps} props
 * @returns {JSX.Element | null}
 */

export const Editor = (props) => {
  const postsStore = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);

  useEffect(() => {
    if (!postsStore.post) return;
    setTitle(postsStore.post.title);
    setBody(postsStore.post.body);
  }, [postsStore.post]);

  /** @type {(event: ChangeInputEvent) => void} */
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  /** @type {(event: ChangeInputEvent) => void} */
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    const post = {
      id: postsStore.post.id,
      userId: DEFAULT_USER_ID,
      title,
      body,
      timestamp: Date.now(),
    };
    postsStore.updatePost(post);
  };

  const handleModalFeedbackClose = () => {
    setIsModalFeedbackOpen(false);
    postsStore.resetPostUpdate();
    props.onClose();
  };

  useEffect(() => {
    if (postsStore.isPostUpdated || postsStore.postUpdateErrorMessage) {
      setIsModalFeedbackOpen(true);
    }
  }, [postsStore.isPostUpdated, postsStore.postUpdateErrorMessage]);

  if (!props.isOpen) return null;

  return (
    <>
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className={style.modalBody}
        >
          <form className={style.form}
            onSubmit={handleFormSubmit}
          >
            <h2 className={style.title}>Update post</h2>
            <Input placeholder={'Enter title'}
              value={title}
              onChange={handleTitleChange}
            />
            <Input placeholder={'Enter content'}
              value={body}
              onChange={handleBodyChange}
            />
            <div className={style.buttons}>
              <Button type={'submit'}
                isDisabled={!title || !body || postsStore.isPostUpdating}
              >
                <UilRedo size={'25'}/>
              </Button>
              <Button type={'button'}
                onClick={props.onClose}
                isDisabled={postsStore.isPostUpdating}
              >
                <UilCancel size={'25'}/>
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal isOpen={isModalFeedbackOpen}
        type={postsStore.isPostCreated ? 'success' : 'error'}
        onClose={handleModalFeedbackClose}
      >
        {postsStore.isPostUpdated && <p>Post was successfully updated!</p>}
        {postsStore.postUpdateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
