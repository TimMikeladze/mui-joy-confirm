# ✅ mui-joy-confirm

Confirmation dialogs built on top of @mui/joy and react hooks. The source-code is a port of the [material-ui-confirm](https://github.com/jonatanklosko/material-ui-confirm) package and is slightly rewritten to support [@mui/joy](https://mui.com/joy-ui/).

Checkout this [Example Storybook](https://TimMikeladze.github.io/mui-joy-confirm/) for a live demo or [read the code](https://github.com/TimMikeladze/mui-joy-confirm/blob/master/src/stories/index.stories.tsx).

## 📡 Install

```console
npm install mui-joy-confirm

yarn add mui-joy-confirm

pnpm add mui-joy-confirm
```

> 👋 Hello there! Follow me [@linesofcode](https://twitter.com/linesofcode) or visit [linesofcode.dev](https://linesofcode.dev) for more cool projects like this one.

## 🚀 Getting Started

First, render a `ConfirmProvider` near the root of your application. This will provide the `useConfirm` hook to all children.

```tsx
import { ConfirmProvider } from 'mui-joy-confirm';

export default () => {
  return (
    <ConfirmProvider>
      <App />
    </ConfirmProvider>
  );
};
```

Now use the `useConfirm` hook to show confirmation dialogs.

```tsx
import { Button } from '@mui/joy';
import { useConfirm } from 'mui-joy-confirm';

export default () => {
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({
      title: 'Delete this item?',
      description: 'This action is permanent!',
      confirmationText: 'Delete',
      cancellationText: 'Cancel',
    })
      .then(() => {
        // ran on confirm
      })
      .catch(() => {
        // ran on cancel
      });
  };

  return <Button onClick={handleDelete}>Delete</Button>;
};
```

You can also customize the dialog by passing `defaultOptions` to the `ConfirmProvider` or directly to the `confirm` function.

```tsx
import { ConfirmProvider } from 'mui-joy-confirm';

export default () => {
  return (
    <ConfirmProvider
      defaultOptions={{
        confirmationButtonProps: {
          variant: `outlined`,
          color: `success`,
          size: `sm`,
        },
        cancellationButtonProps: {
          variant: `outlined`,
          color: `warning`,
          size: `sm`,
        },
      }}
    >
      <App />
    </ConfirmProvider>
  );
};
```
