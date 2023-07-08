import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PokedexSchema } from '../types/pokedex';
import { pageCountSelector, urlSelector } from '../selectors/poskedSelectors';
import axios from 'axios';

export const fetchPokedexData = createAsyncThunk<
  PokedexSchema,
  void,
  ThunkConfig<string>
>('pokedex/fetchPokedexData', async (_, { rejectWithValue, getState }) => {
  const pageCounts = pageCountSelector(getState());
  const url = urlSelector(getState());
  console.log('pageCounts', pageCounts);

  try {
    const response = await axios.get<PokedexSchema>(
      `${url}/?limit=${pageCounts}`
    );
    if (!response.data) throw new Error();

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
