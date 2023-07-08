import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PokedexSchema } from '../types/pokedex';
import { fetchPokedexData } from '../servisec/fetchData';
import { fetchPokedexFullInfo } from '../servisec/fetchFullInfo';

const initialState: PokedexSchema = {
  results: [],
  initialData: [],
  fullInfo: [],

  isLoading: false,
  error: undefined,

  count: 10,
  pageCount: 10,
  search: '',
  next: '',
  previous: '',
  disable: true,
  url: 'https://pokeapi.co/api/v2/pokemon',
};

const PokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokedexData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchPokedexData.fulfilled, (state, action) => {
        state.results = action.payload.results;
        state.initialData = action.payload.results;

        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;

        state.isLoading = false;

        if (action.payload?.previous === null) {
          state.disable = true;
        } else {
          state.disable = false;
        }
      })

      .addCase(fetchPokedexFullInfo.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchPokedexFullInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        // @ts-ignore
        state.fullInfo = action.payload;
        // @ts-ignore
        state.initialData = action.payload;
      })

      .addMatcher(asError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const PokedexSliceReducer = PokedexSlice.reducer;
export const PokedexSliceActions = PokedexSlice.actions;

function asError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
