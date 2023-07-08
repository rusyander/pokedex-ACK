import { FC, Suspense } from 'react';
import { StoreProvider } from '../../../../app/providers/StoreProvider';
import { type Preview } from '@storybook/react';

export const ProvidersWrapper: Preview = {
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
