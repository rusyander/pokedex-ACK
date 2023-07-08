import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Suspense fallback={''}>
        <StoreProvider>
          <div className={'app'}>
            <Story />
          </div>
        </StoreProvider>
      </Suspense>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
    border: '10px',
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

export const NormalLight: Story = {
  args: {
    width: '100%',
    height: 200,
    border: '10px',
  },
};

export const CircleLight: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};
