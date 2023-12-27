import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { ConfirmOptions } from './types';

const ConfirmationDialog = ({
  open,
  options,
  onCancel,
  onConfirm,
  onClose,
}: {
  onCancel: () => void;
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
  options: ConfirmOptions;
}) => {
  const {
    title,
    description,
    content,
    confirmationText,
    cancellationText,
    dialogProps,
    dialogActionsProps,
    confirmationButtonProps,
    cancellationButtonProps,
    titleProps,
    contentProps,
    allowClose,
    confirmationKeyword,
    confirmationKeywordTextFieldProps,
    hideCancelButton,
    buttonOrder,
    modalDialogProps,
    contentTypographyProps,
  } = options;

  const [confirmationKeywordValue, setConfirmationKeywordValue] =
    React.useState('');

  const confirmationButtonDisabled = Boolean(
    confirmationKeyword && confirmationKeywordValue !== confirmationKeyword
  );

  const confirmationContent = confirmationKeyword && (
    <Input
      onChange={(e) => setConfirmationKeywordValue(e.target.value)}
      value={confirmationKeywordValue}
      fullWidth
      {...confirmationKeywordTextFieldProps}
    />
  );

  const dialogActions = (buttonOrder || []).map((buttonType) => {
    if (buttonType === 'cancel') {
      return (
        !hideCancelButton && (
          <Button key="cancel" {...cancellationButtonProps} onClick={onCancel}>
            {cancellationText}
          </Button>
        )
      );
    }

    if (buttonType === 'confirm') {
      return (
        <Button
          key="confirm"
          color="primary"
          disabled={confirmationButtonDisabled}
          {...confirmationButtonProps}
          onClick={onConfirm}
        >
          {confirmationText}
        </Button>
      );
    }

    throw new Error(
      `Supported button types are only "confirm" and "cancel", got: ${buttonType}`
    );
  });

  return (
    <Modal
      {...dialogProps}
      open={open}
      onClose={allowClose ? onClose : undefined}
    >
      <ModalDialog {...modalDialogProps}>
        <ModalClose />
        {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
        {content ? (
          <DialogContent {...contentProps}>
            {content}
            {confirmationContent}
          </DialogContent>
        ) : description ? (
          <DialogContent {...contentProps}>
            <Typography {...contentTypographyProps}>{description}</Typography>
            {confirmationContent}
          </DialogContent>
        ) : (
          confirmationKeyword && (
            <DialogContent {...contentProps}>
              {confirmationContent}
            </DialogContent>
          )
        )}
        <DialogActions {...dialogActionsProps}>{dialogActions}</DialogActions>
      </ModalDialog>
    </Modal>
  );
};

export default ConfirmationDialog;
