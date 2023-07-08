import { StateSchema } from 'app/providers/StoreProvider';

export const dataResultsSelector = (state: StateSchema) =>
  state.pokedex?.results || [];
export const dataInitialDataSelector = (state: StateSchema) =>
  state.pokedex?.initialData || [];
export const fullInfoSelector = (state: StateSchema) =>
  state.pokedex?.fullInfo || [];

export const isLoadingSelector = (state: StateSchema) =>
  state.pokedex?.isLoading || false;
export const errorSelector = (state: StateSchema) =>
  state.pokedex?.results || undefined;

export const countSelector = (state: StateSchema) => state.pokedex?.count || 10;
export const pageCountSelector = (state: StateSchema) =>
  state.pokedex?.pageCount || 10;
export const searchSelector = (state: StateSchema) =>
  state.pokedex?.search || '';
export const nextSelector = (state: StateSchema) => state.pokedex?.next || '';
export const previousSelector = (state: StateSchema) =>
  state.pokedex?.previous || '';
export const disableSelector = (state: StateSchema) =>
  state.pokedex?.disable ?? true;
export const urlSelector = (state: StateSchema) => state.pokedex?.url || '';
