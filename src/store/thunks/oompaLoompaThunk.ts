import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOompaLoompas } from "../../services/oompaLoompasService";
import { OompaLoompa } from "../../types";
import { transformToCamelCase } from "../../utils/utils";
import { OompaLoompaState } from "../oompaLoompa.slice";
import { AppState } from "../store";

const onDayInMs = 24 * 60 * 60 * 1000;

export const fetchOompaLoompas = createAsyncThunk<{currentPage: number; list:OompaLoompa[];hasMore:boolean}>(
  "fetchOompaLoompas",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as AppState;
    const { list, lastFetched, hasMore } =
      state.oompaLoompa as OompaLoompaState;

      const listIds =  list.map((oompa) => oompa.id)


    const isCacheValid = lastFetched && Date.now() - lastFetched < onDayInMs;

    if (!hasMore && isCacheValid) {
      return rejectWithValue({ message: "No more Oompa Loompas to fetch" });
    }
    
    try {
        const response = await getOompaLoompas(20);

        
        const { current, results } = response;
        
        const resultsToCamelCase = transformToCamelCase(results)
        console.log('hola', resultsToCamelCase)

        const newResults = results.filter((oompa) => !listIds.includes(oompa.id))

        return { currentPage: current, list: newResults, hasMore: newResults.length > 0 };
      } catch (error) {
        return rejectWithValue(error);
      }
  }
);

export const fetchDetailOompaLoompas = createAsyncThunk<{currentPage: number; list:OompaLoompa[];hasMore:boolean}>(
  "fetchOompaLoompas",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as AppState;
    const { list, lastFetched, hasMore } =
      state.oompaLoompa as OompaLoompaState;

      const listIds =  list.map((oompa) => oompa.id)


    const isCacheValid = lastFetched && Date.now() - lastFetched < onDayInMs;

    if (!hasMore && isCacheValid) {
      return rejectWithValue({ message: "No more Oompa Loompas to fetch" });
    }
    
    try {
        const response = await getOompaLoompas(20);
  
        const { current, results } = response;
        const newResults = results.filter((oompa) => !listIds.includes(oompa.id))

        return { currentPage: current, list: newResults, hasMore: newResults.length > 0 };
      } catch (error) {
        return rejectWithValue(error);
      }
  }
);

