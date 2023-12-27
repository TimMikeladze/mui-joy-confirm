import {
  ButtonProps,
  DialogContentProps,
  DialogActionsProps,
  DialogTitleProps,
  InputProps,
  ModalProps,
  TypographyProps,
  ModalDialogProps,
} from '@mui/joy';
import { ComponentType, ReactNode } from 'react';

export interface ConfirmOptions {
  allowClose?: boolean;
  buttonOrder?: string[];
  cancellationButtonProps?: ButtonProps;
  cancellationText?: ReactNode;
  confirmationButtonProps?: ButtonProps;
  confirmationKeyword?: string;
  confirmationKeywordTextFieldProps?: InputProps;
  confirmationText?: ReactNode;
  content?: ReactNode | null;
  contentProps?: DialogContentProps;
  contentTypographyProps?: TypographyProps;
  description?: ReactNode;
  dialogActionsProps?: DialogActionsProps;
  dialogProps?: Omit<ModalProps, 'open' | 'children'>;
  hideCancelButton?: boolean;
  modalDialogProps?: ModalDialogProps;
  title?: ReactNode;
  titleProps?: DialogTitleProps;
}

export interface ConfirmProviderProps {
  children: ReactNode;
  defaultOptions?: ConfirmOptions;
}

export type ConfirmProviderType = ComponentType<ConfirmProviderProps>;

export type UseConfirmHook = () => (options?: ConfirmOptions) => Promise<void>;
