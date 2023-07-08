import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { Suspense } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>;

export const PRIMARY: Story = {
  args: {
    options: [
      { value: 10, label: '10' },
      { value: 20, label: '20' },
      { value: 50, label: '50' },
    ],
  },
};
