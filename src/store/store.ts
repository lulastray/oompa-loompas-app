import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import oompaLoompaReducer from './oompaLoompa.slice';

export const store = 
  configureStore({
    reducer: {
      oompaLoompa: oompaLoompaReducer,
  },
});

export type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch =  AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store