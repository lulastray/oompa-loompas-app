import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { OompaLoompa } from '../types';
import { fetchDetailOompaLoompas, fetchOompaLoompas } from './thunks/oompaLoompaThunk';


export interface OompaLoompaState {
    list: OompaLoompa[];
    currentPage: number;
    lastFetched: number | null
    hasMore: boolean;
    isLoading: boolean;
    error: Error | SerializedError | null;
}


const initialState: OompaLoompaState = {
    list: [], 
    currentPage: 0, 
    lastFetched: null,
    hasMore: true,
    isLoading: false,
    error: null,
}

const oompaLoompaSlice = createSlice({
  name: 'oompaLoompas',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOompaLoompas.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchOompaLoompas.fulfilled, (state, action: PayloadAction<{ currentPage: number; list: OompaLoompa[]; hasMore: boolean; }>) => {
      state.list = [...state.list, ...action.payload.list];
      state.currentPage = action.payload.currentPage;
      state.lastFetched = Date.now();
      state.isLoading = false;
      state.error = null;
      state.hasMore = action.payload.hasMore;
    }).addCase(fetchOompaLoompas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error || 'Failed to fetch Oompa Loompas'
    })
    builder.addCase(
      fetchDetailOompaLoompas.fulfilled,
      (state, action: PayloadAction<OompaLoompa>) => {
          const { id, details } = action.payload;
          
          state.list = state.list.map((oompaLoompa) =>
              oompaLoompa.id === id
                  ? { ...oompaLoompa, details } // Añadimos los detalles
                  : oompaLoompa
          );
      }
  );
  }
});


export default oompaLoompaSlice.reducer;