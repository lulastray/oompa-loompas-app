import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import oompaLoompaReducer from './oompaLoompa.slice';

const persistConfig = {
  key: 'oompaLoompas', 
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  oompaLoompaReducer
);

export const store = configureStore({
  reducer: {
    oompaLoompas: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store)

persistor.subscribe(() => {
  console.log('Persistor state changed', store.getState());
});

export type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch =  AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store