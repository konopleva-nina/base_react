import { ChangeEventHandler } from 'react';

export type InputProps = {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
};
