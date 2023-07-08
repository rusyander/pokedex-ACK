import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderProps = {}
) {
  const { route = '/', initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>{component}</StoreProvider>
    </MemoryRouter>
  );
}
