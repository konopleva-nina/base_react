import style from './Modal.module.scss';
import { CloseOutlined } from 'shared/icons';
import { UilCheck } from '@iconscout/react-unicons';

/**
 * @typedef {import('./types').ModalProps} ModalProps
 */

/**
 * @function Modal
 * @param {ModalProps} props
 * @returns {JSX.Element | null}
 */
export const Modal = (props) => {
  if (!props.isOpen) return null;

  const isSuccess = props.type === 'success';
  const isError = props.type === 'error';

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        <div className={style.buttons}>
          <button className={style.close}
            type={'button'}
            onClick={props.onClose}
          >
            <CloseOutlined />
          </button>
        </div>
        {isSuccess  && <UilCheck size={'40'}/>}
        {isError  && <UilCheck size={'40'}/>}
        {props.children}
      </div>
    </div>
  );
};
