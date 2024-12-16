declare module 'redux-persist/es/persistReducer' {
    import { Reducer } from 'redux';
    import { PersistConfig } from 'redux-persist';
  
    // Exporta el tipo genérico para persistReducer
    export default function persistReducer<S, A>(
      config: PersistConfig<S>,
      baseReducer: Reducer<S, A>
    ): Reducer<S, A>;
  }
  
  declare module 'redux-persist/es/persistStore' {
    import { Store } from 'redux';
  
    // Exporta el tipo genérico para persistStore
    export default function persistStore(store: Store): any;
  }


declare module 'redux-persist/lib/storage/createWebStorage' {
    const createWebStorage: (type: 'local' | 'session') => any;
    export default createWebStorage;
  }