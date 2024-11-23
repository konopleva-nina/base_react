import { ChangeEvent } from 'react';
import { FormEvent } from 'react';

export type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
export type SubmitFormEvent = FormEvent<HTMLFormElement>;

export type CreatorProps = {
  isOpen: boolean;
  onClose: () => void;
};
