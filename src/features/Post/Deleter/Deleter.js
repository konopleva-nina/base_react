import style from './Deleter.module.scss';
import { usePosts } from 'shared/stores';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'entities/index';
import { Button } from 'shared/ui';
import { Preloader } from 'shared/ui';

/**
 * @typedef {import('./types').DeleterProps} DeleterProps
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */
/**
 * @function Deleter
 * @param {DeleterProps} props
 * @returns {JSX.Element | null}
 */
export const Deleter = (props) => {
  const postsStore = usePosts();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const navigate = useNavigate();

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    postsStore.deletePost(postsStore.post.id);
  };

  const handleModalFeedbackClose = () => {
    setIsFeedbackModalOpen(false);
    postsStore.resetPostDeletion();
    props.onClose();
    if (postsStore.isPostDeleted) navigate(-1);
  };

  useEffect(() => {
    if (postsStore.isPostDeleted || postsStore.postDeleteErrorMessage) {
      setIsFeedbackModalOpen(true);
    }
  }, [postsStore.isPostDeleted, postsStore.postDeleteErrorMessage]);

  if (!props.isOpen) return null;

  return (
    <>
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className={style.modalBody}
        >
          <h2 className={style.title}>Delete post</h2>
          <form className={style.form}
            onSubmit={handleFormSubmit}
          >
            <p>Are you sure? This action cannot be undone!</p>
            <div className={style.buttons}>
              <Button type={'submit'}
                isDisabled={postsStore.isPostDeleting}
              >
                {'Yes'}
              </Button>
              <Button type={'button'}
                isDisabled={postsStore.isPostDeleting}
                onClick={props.onClose}
              >
                {'No'}
              </Button>
            </div>
          </form>
        </div>
        <Preloader isActive={postsStore.isPostDeleting}/>
      </Modal>
      <Modal isOpen={isFeedbackModalOpen}
        type={postsStore.isPostCreated ? 'success' : 'error'}
        onClose={handleModalFeedbackClose}
      >
        {postsStore.isPostDeleted && <p>Post was deleted!</p>}
        {postsStore.postDeleteErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
