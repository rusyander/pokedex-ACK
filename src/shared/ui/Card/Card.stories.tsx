import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
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
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <h1>Text</h1>,
  },
};
