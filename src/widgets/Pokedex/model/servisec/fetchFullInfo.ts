import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PokedexSchema } from '../types/pokedex';
import { dataResultsSelector } from '../selectors/poskedSelectors';
import axios from 'axios';

export const fetchPokedexFullInfo = createAsyncThunk<
  PokedexSchema,
  void,
  ThunkConfig<string>
>(
  'pokedex/fetchPokedexFullInfo',
  // @ts-ignore
  async (_, { rejectWithValue, getState }) => {
    const result = dataResultsSelector(getState());

    try {
      const response = Promise.all(
        result?.map(async (item: any) => {
          const result = await axios.get(item.url);
          return result.data;
        })
      );
      if (!response) throw new Error();

      return response.then((res) => {
        return res;
      });
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
