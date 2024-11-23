import style from './Creator.module.scss';
import { IconPlusFiled } from 'shared/icons';
import { RightSquareOutlined } from 'shared/icons';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'entities/index';
import { Input } from 'shared/ui';
import { Button } from 'shared/ui';
import { DEFAULT_USER_ID } from 'shared/config';

/**
 * @typedef {import('./types').CreatorProps} CreatorProps
 * @typedef {import('./types').ChangeInputEvent} ChangeInputEvent
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Creator
 * @param {CreatorProps} props
 * @returns {JSX.Element | null}
 */

export const Creator = (props) => {

  const postsStore = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);


  /** @type {(event: ChangeInputEvent) => void} */
  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  /** @type {(event: ChangeInputEvent) => void} */
  const handleBodyInputChange = (event) => {
    setBody(event.target.value);
  };

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const post = {
      userId: DEFAULT_USER_ID,
      title,
      body,
      timestamp: Date.now(),
    };
    postsStore.createPost(post);
    setTitle('');
    setBody('');
  };

  const handleModalFeedbackClose = () => {
    setIsModalFeedbackOpen(false);
    postsStore.resetPostCreation();
    props.onClose();
  };

  useEffect(() => {
    if (postsStore.isPostCreated || postsStore.postCreateErrorMessage) {
      setIsModalFeedbackOpen(true);
    }
  }, [postsStore.isPostCreated, postsStore.postCreateErrorMessage]);

  if (!props.isOpen) return null;

  return (
    <>
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className={style.modalBody}>
          <h2 className={style.title}>Add post</h2>
          <form className={style.form}
            onSubmit={handleFormSubmit}
          >
            <Input placeholder={'Enter title'}
              value={title}
              onChange={handleTitleInputChange}
            />
            <Input placeholder={'Enter body'}
              value={body}
              onChange={handleBodyInputChange}
            />
            {/* Buttons */}
            <div className={style.buttons}>
              <Button type={'submit'}
                isDisabled={!title || !body || postsStore.isPostCreating}
              >
                <IconPlusFiled/>
              </Button>
              <Button type={'button'}
                isDisabled={postsStore.isPostCreating}
                onClick={props.onClose}
              >
                <RightSquareOutlined />
              </Button>
            </div>
          </form>

        </div>
      </Modal>
      <Modal isOpen={isModalFeedbackOpen}
        type={postsStore.isPostCreated ? 'success' : 'error'}
        onClose={handleModalFeedbackClose}
      >
        {postsStore.isPostCreated && <p>Post was successfully created!</p>}
        {postsStore.postCreateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
