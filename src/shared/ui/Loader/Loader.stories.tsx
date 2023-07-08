import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { Suspense } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Suspense fallback={''}>
        <StoreProvider>
          <Story />
        </StoreProvider>
      </Suspense>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const PRIMARY: Story = {
  args: {
    className: 'lds-ellipsis',
  },
};
