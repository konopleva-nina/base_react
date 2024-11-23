import { MouseEventHandler, ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  type?: 'success' | 'error';
  children: ReactNode;
  onClose: MouseEventHandler;
};
