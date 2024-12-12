import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { OompaLoompa } from "../types";
import { fetchOompaLoompas } from "./thunks/oompaLoompaThunk";

export interface DetailOompaLoompaState {
  details: any[] | null;
  isLoading: boolean;
  error: Error | SerializedError | null;
}

const initialState: DetailOompaLoompaState = {
  details: null,
  isLoading: false,
  error: null,
};

const detailOompaLoompaSlice = createSlice({
  name: "detailOompaLoompas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOompaLoompas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchOompaLoompas.fulfilled,
        (
          state,
          action: PayloadAction<{
            currentPage: number;
            list: OompaLoompa[];
            hasMore: boolean;
          }>
        ) => {
          state.details = action.payload.list;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchOompaLoompas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error || "Failed to fetch Oompa Loompas";
      });
  },
});

export default detailOompaLoompaSlice.reducer;
