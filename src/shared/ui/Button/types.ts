import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  type: 'button' | 'submit';
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
};
