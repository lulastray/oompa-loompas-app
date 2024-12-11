import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOompaLoompas } from "../../services/oompaLoompasService";
import { OompaLoompa } from "../../types";
import { OompaLoompaState } from "../oompaLoompa.slice";
import { AppState } from "../store";

const onDayInMs = 24 * 60 * 60 * 1000;

export const fetchOompaLoompas = createAsyncThunk<{currentPage: number; list:OompaLoompa[];hasMore:boolean}>(
  "fetchOompaLoompas",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as AppState;
    const { list, lastFetched, hasMore, currentPage } =
      state.oompaLoompa as OompaLoompaState;

    const isCacheValid = lastFetched && Date.now() - lastFetched < onDayInMs;
    console.log(currentPage)
    if (!hasMore && isCacheValid) {
      return rejectWithValue({ message: "No more Oompa Loompas to fetch" });
    }

    
    try {
        const response = await getOompaLoompas(currentPage +1);
        console.log(response);
        const { current, results } = response;
        return { currentPage: current, list: results, hasMore: true };
      } catch (error) {
        return rejectWithValue(error);
      }
  }
);
