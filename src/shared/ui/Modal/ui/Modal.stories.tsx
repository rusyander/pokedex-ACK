import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
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
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam  quibusdam, reiciendis at aliquam facilis perspiciatis quam vitae, voluptatum itaque dicta repudiandae ducimus, quo aliquid placeat vero hic ut numquam ipsum.',
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam  quibusdam, reiciendis at aliquam facilis perspiciatis quam vitae, voluptatum itaque dicta repudiandae ducimus, quo aliquid placeat vero hic ut numquam ipsum.',
    isOpen: true,
  },
};
