import { createAsyncThunk } from "@reduxjs/toolkit";
import { isCacheValid } from "../../components/helpers/oompaLoompa.helpers";
import {
  getOompaLoompaById,
  getOompaLoompas,
} from "../../services/oompaLoompasService";
import { OompaLoompa } from "../../types";
import { transformToCamelCase } from "../../utils/utils";
import { OompaLoompaState } from "../oompaLoompa.slice";
import { AppState } from "../store";

export const fetchOompaLoompas = createAsyncThunk<{
  currentPage: number;
  list: OompaLoompa[];
  hasMore: boolean;
}>("fetchOompaLoompas", async (_, { getState, rejectWithValue }) => {
  const state = getState() as AppState;
  const { list, lastFetched, hasMore, currentPage } =
    state.oompaLoompas as OompaLoompaState;

  const listIds = list.map((oompa) => oompa.id);
  console.log(hasMore,lastFetched, isCacheValid(lastFetched || 0))

  if (!hasMore && lastFetched && isCacheValid(lastFetched)) {
    console.log('here')
    return { currentPage, list: [...list], hasMore: false }
  }

  try {
    const response = await getOompaLoompas(currentPage + 1);
    console.log(response)
    const { current, results } = response;

    const resultsToCamelCase = transformToCamelCase(results);

    const newResults = resultsToCamelCase.filter((oompa) => !listIds.includes(oompa.id));

    return {
      currentPage: current,
      list: newResults,
      hasMore: newResults.length > 0,
      lastFetched: Date.now(),
    };
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchDetailOompaLoompas = createAsyncThunk<
  OompaLoompa,
  number
>("fetchDetailOompaLoompas", async (id, { getState, rejectWithValue }) => {
  const state = getState() as AppState;
  const { list } = state.oompaLoompas as OompaLoompaState;
  const oompaLoompa = list.find((oompa) => oompa.id === id);

  if (!oompaLoompa) return rejectWithValue({ message: "Oompa Loompa not found" });

  if (oompaLoompa?.details) {
    return oompaLoompa;
  }
  const { details } = oompaLoompa

  if (details && isCacheValid(details.lastFetched)) {
    return oompaLoompa;
  }

  try {
    const response = await getOompaLoompaById(id);
    
    const details= {
      description: response.description,
      quote: response.quotes,
      lastFetched: Date.now()
    }

    return { ...oompaLoompa, details };
  } catch (error) {
    return rejectWithValue(error);
  }
});
