/* eslint-disable react/no-unescaped-entities */
import { action } from '@storybook/addon-actions';
import { Box, Button, LinearProgress, Tooltip } from '@mui/joy';
import { Meta, StoryFn } from '@storybook/react';
import { ConfirmProvider, useConfirm } from '../index';

const confirmationAction = action('confirmed');
const cancellationAction = action('cancelled');

const Basic = () => {
  const confirm = useConfirm();
  return (
    <Button onClick={() => confirm().then(confirmationAction)}>Click</Button>
  );
};

const WithDescription = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({ description: 'This action is permanent!' }).then(
          confirmationAction
        );
      }}
    >
      Click
    </Button>
  );
};

const WithCustomText = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          title: 'Reset setting?',
          description: 'This will reset your device to its factory settings.',
          confirmationText: 'Accept',
          cancellationText: 'Cancel',
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithDialogProps = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          dialogProps: { disableEscapeKeyDown: true },
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithDialogActionsProps = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          dialogActionsProps: { sx: { justifyContent: 'flex-start' } },
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithCustomButtonProps = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          confirmationButtonProps: { color: 'success', variant: 'outlined' },
          cancellationButtonProps: { variant: 'outlined' },
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithCustomCallbacks = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm()
          .then(confirmationAction)
          .catch(cancellationAction)
          .finally(action('closed'));
      }}
    >
      Click
    </Button>
  );
};

const WithCustomElements = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          title: (
            <Tooltip title="Fancy tooltip here!">
              <span>Reset setting?</span>
            </Tooltip>
          ),
          description: <LinearProgress />,
          confirmationText: 'Accept',
          cancellationText: 'Cancel',
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithCustomContent = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          content: (
            <div>
              <LinearProgress />
              <Box p={2}>This isn't wrapped in DialogContentText.</Box>
            </div>
          ),
        }).then(confirmationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithNaturalCloseDisabled = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() => {
        confirm({
          allowClose: false,
        })
          .then(confirmationAction)
          .catch(cancellationAction);
      }}
    >
      Click
    </Button>
  );
};

const WithConfirmationKeyword = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() =>
        confirm({
          description:
            'This action is permanent. Please enter "DELETE" to confirm the action.',
          confirmationKeyword: 'DELETE',
        }).then(confirmationAction)
      }
    >
      Click
    </Button>
  );
};

const WithConfirmationKeywordAndCustomTextFieldProps = () => {
  const confirm = useConfirm();
  return (
    <Button
      onClick={() =>
        confirm({
          confirmationKeyword: 'DELETE',
          confirmationKeywordTextFieldProps: {
            placeholder: 'Enter DELETE',
            variant: 'outlined',
          },
        }).then(confirmationAction)
      }
    >
      Click
    </Button>
  );
};

const WithReversedButtons = () => {
  const confirm = useConfirm();

  return (
    <Button
      onClick={() => {
        confirm({ buttonOrder: ['confirm', 'cancel'] }).then(
          confirmationAction
        );
      }}
    >
      Click
    </Button>
  );
};

export default {
  title: 'Confirmation Dialogs',
  argTypes: {},
  decorators: [
    (Story) => (
      <ConfirmProvider>
        <Story />
      </ConfirmProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<any> = (args) => args.component(args);

export const BasicExample = Template.bind({});
BasicExample.args = {
  component: Basic,
};

export const WithDescriptionExample = Template.bind({});
WithDescriptionExample.args = {
  component: WithDescription,
};

export const WithCustomTextExample = Template.bind({});
WithCustomTextExample.args = {
  component: WithCustomText,
};

export const WithDialogPropsExample = Template.bind({});
WithDialogPropsExample.args = {
  component: WithDialogProps,
};

export const WithDialogActionsPropsExample = Template.bind({});
WithDialogActionsPropsExample.args = {
  component: WithDialogActionsProps,
};

export const WithCustomButtonPropsExample = Template.bind({});
WithCustomButtonPropsExample.args = {
  component: WithCustomButtonProps,
};

export const WithCustomCallbacksExample = Template.bind({});
WithCustomCallbacksExample.args = {
  component: WithCustomCallbacks,
};

export const WithCustomElementsExample = Template.bind({});
WithCustomElementsExample.args = {
  component: WithCustomElements,
};

export const WithCustomContentExample = Template.bind({});
WithCustomContentExample.args = {
  component: WithCustomContent,
};

export const WithNaturalCloseDisabledExample = Template.bind({});
WithNaturalCloseDisabledExample.args = {
  component: WithNaturalCloseDisabled,
};

export const WithConfirmationKeywordExample = Template.bind({});
WithConfirmationKeywordExample.args = {
  component: WithConfirmationKeyword,
};

export const WithConfirmationKeywordAndCustomTextFieldPropsExample =
  Template.bind({});
WithConfirmationKeywordAndCustomTextFieldPropsExample.args = {
  component: WithConfirmationKeywordAndCustomTextFieldProps,
};

export const WithReversedButtonsExample = Template.bind({});
WithReversedButtonsExample.args = {
  component: WithReversedButtons,
};
